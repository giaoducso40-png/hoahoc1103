/**
 * MolQuest browser smoke audit, no external dependency.
 *
 * Open the app from a local HTTP server, then run in DevTools:
 *   import('/tests/browser-smoke.js').then(m => m.runSmoke())
 */

const visible = (element) => {
  const style = getComputedStyle(element);
  const box = element.getBoundingClientRect();
  return style.display !== "none" && style.visibility !== "hidden" && box.width > 0 && box.height > 0;
};

const selector = (element) => {
  if (element.id) return `#${element.id}`;
  const className = [...element.classList].slice(0, 2).join(".");
  return `${element.tagName.toLowerCase()}${className ? `.${className}` : ""}`;
};

const issue = (code, target, detail) => ({ code, target: selector(target), detail });

export function runSmoke() {
  const issues = [];
  const root = document.documentElement;
  if (root.scrollWidth > root.clientWidth + 1) {
    issues.push(issue("OVERFLOW_PAGE_X", root, `${root.scrollWidth}px > ${root.clientWidth}px`));
  }

  for (const element of document.querySelectorAll("body *")) {
    if (!visible(element)) continue;
    const box = element.getBoundingClientRect();
    if (box.right > innerWidth + 2 || box.left < -2) {
      issues.push(issue("OUTSIDE_VIEWPORT_X", element, `left ${Math.round(box.left)}, right ${Math.round(box.right)}`));
    }
    if (element.scrollWidth > element.clientWidth + 2) {
      const style = getComputedStyle(element);
      if (["auto", "scroll"].includes(style.overflowX)) {
        issues.push(issue("SCROLL_X", element, `${element.scrollWidth}px > ${element.clientWidth}px`));
      }
    }
  }

  const verticalScrollers = [...document.querySelectorAll("body *")].filter((element) => {
    if (!visible(element)) return false;
    const style = getComputedStyle(element);
    return ["auto", "scroll"].includes(style.overflowY) && element.scrollHeight > element.clientHeight + 2;
  });
  for (const outer of verticalScrollers) {
    const nested = verticalScrollers.find((inner) => inner !== outer && outer.contains(inner));
    if (nested) issues.push(issue("NESTED_SCROLL_Y", nested, `nằm trong ${selector(outer)}`));
  }

  for (const target of document.querySelectorAll("button, a[href], input, select, [role='button']")) {
    if (!visible(target)) continue;
    const box = target.getBoundingClientRect();
    if (box.width < 44 || box.height < 44) {
      issues.push(issue("SMALL_TARGET", target, `${Math.round(box.width)}×${Math.round(box.height)}px`));
    }
  }

  for (const br of document.querySelectorAll(".question-stem br, .option-card br, .theory-copy br, .lab-guide br")) {
    issues.push(issue("MANUAL_LINE_BREAK", br, "Không dùng <br> trong câu hoặc đoạn nội dung"));
  }

  for (const dialog of document.querySelectorAll("dialog[open]")) {
    const box = dialog.getBoundingClientRect();
    if (box.width > innerWidth + 1 || box.height > innerHeight + 1) {
      issues.push(issue("DIALOG_OUTSIDE_VIEWPORT", dialog, `${Math.round(box.width)}×${Math.round(box.height)}px`));
    }
    if (!dialog.getAttribute("aria-label") && !dialog.getAttribute("aria-labelledby")) {
      const heading = dialog.querySelector("h1, h2, h3");
      if (!heading) issues.push(issue("DIALOG_NAME", dialog, "Hộp thoại chưa có tên truy cập"));
    }
  }

  const explorer = document.querySelector("#explorerName");
  if (explorer?.textContent.trim() === "Hiếu" && !localStorage.getItem("molquest.hoa11.v2")) {
    issues.push(issue("FIXED_PLAYER_NAME", explorer, "Tên Hiếu xuất hiện khi chưa có hồ sơ"));
  }

  const result = {
    viewport: `${innerWidth}×${innerHeight}`,
    route: location.hash || "city",
    passed: issues.length === 0,
    issueCount: issues.length,
    issues,
  };
  console.group(`MolQuest smoke audit: ${result.passed ? "ĐẠT" : "KHÔNG ĐẠT"}`);
  console.log(result.viewport, result.route);
  console.table(issues);
  console.groupEnd();
  return result;
}

export default runSmoke;
