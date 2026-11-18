#!/usr/bin/env python3
"""Static release checks for the MolQuest GitHub Pages package.

The suite uses only the Python standard library so it can run on a fresh
machine before the project is uploaded to GitHub Pages.
"""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ERRORS: list[str] = []
WARNINGS: list[str] = []


def fail(message: str) -> None:
    ERRORS.append(message)


def warn(message: str) -> None:
    WARNINGS.append(message)


def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except FileNotFoundError:
        fail(f"Thiếu tệp: {path.relative_to(ROOT)}")
        return ""


def load_json(path: Path):
    try:
        return json.loads(read(path))
    except json.JSONDecodeError as exc:
        fail(f"JSON không hợp lệ tại {path.relative_to(ROOT)}: {exc}")
        return None


def normalized(value: object) -> str:
    return " ".join(str(value or "").casefold().split())


def check_required_files() -> None:
    required = [
        "index.html",
        "README.md",
        "assets/data/questions.json",
        "assets/data/theory.json",
        "assets/css/app.css",
        "assets/css/city-v4.css",
        "assets/css/personalization-v4.css",
        "assets/css/labs-v4.css",
        "assets/css/content-v4.css",
        "assets/js/app.js",
    ]
    for relative in required:
        if not (ROOT / relative).is_file():
            fail(f"Thiếu tệp bắt buộc: {relative}")

    index = read(ROOT / "index.html")
    for css in ("city-v4.css", "personalization-v4.css", "labs-v4.css", "content-v4.css"):
        if css not in index:
            fail(f"index.html chưa nạp {css}")


def check_questions() -> None:
    path = ROOT / "assets/data/questions.json"
    questions = load_json(path)
    if not isinstance(questions, list):
        fail("questions.json phải là một mảng")
        return
    if len(questions) < 60:
        fail(f"Ngân hàng câu hỏi quá ít: {len(questions)} câu")

    ids = [str(q.get("id", "")).strip() for q in questions if isinstance(q, dict)]
    duplicates = [value for value, count in Counter(ids).items() if value and count > 1]
    if duplicates:
        fail("ID câu hỏi bị trùng: " + ", ".join(duplicates))
    if any(not value for value in ids):
        fail("Có câu hỏi thiếu ID")

    topics = {"halogen", "alcohol", "phenol", "carbonyl", "acid"}
    by_source: dict[tuple[str, str], dict] = {}
    for index, question in enumerate(questions, 1):
        if not isinstance(question, dict):
            fail(f"Câu số {index} không phải object")
            continue
        qid = question.get("id") or f"dòng {index}"
        topic = question.get("topic")
        if topic not in topics:
            fail(f"{qid}: chủ đề không hợp lệ: {topic!r}")
        stem = str(question.get("stem", "")).strip()
        if not stem:
            fail(f"{qid}: thiếu đề bài")
        if "<br" in stem.casefold():
            fail(f"{qid}: đề bài chứa thẻ <br>")
        if re.search(r"\s+[,.!?;:]", stem):
            fail(f"{qid}: có khoảng trắng thừa trước dấu câu")

        qtype = question.get("type")
        answer = str(question.get("answer", "")).strip()
        options = question.get("options", [])
        if qtype != "short":
            if not isinstance(options, list) or len(options) < 2:
                fail(f"{qid}: câu lựa chọn phải có ít nhất 2 phương án")
                continue
            option_ids = [str(item.get("id", "")).strip() for item in options if isinstance(item, dict)]
            if len(option_ids) != len(set(option_ids)):
                fail(f"{qid}: nhãn phương án bị trùng")
            if answer not in option_ids:
                fail(f"{qid}: đáp án {answer!r} không có trong các phương án")
            texts = [normalized(item.get("text")) for item in options if isinstance(item, dict)]
            nonempty = [value for value in texts if value]
            if len(nonempty) != len(set(nonempty)):
                fail(f"{qid}: nội dung phương án bị trùng")
            for option in options:
                if not isinstance(option, dict):
                    continue
                if not str(option.get("text", "")).strip() and not option.get("image"):
                    fail(f"{qid}: phương án {option.get('id', '?')} không có chữ hoặc hình")
                if option.get("image") and not (ROOT / str(option["image"])).is_file():
                    fail(f"{qid}: thiếu ảnh {option['image']}")

        for media in question.get("media", []) or []:
            if not (ROOT / str(media)).is_file():
                fail(f"{qid}: thiếu tư liệu {media}")
        explanation = str(question.get("explanation", "")).strip()
        if not explanation:
            fail(f"{qid}: thiếu lời giải")

        source = str(question.get("sourceQuestionNumber", ""))
        by_source[(str(topic), source)] = question

    halogen_8 = by_source.get(("halogen", "8"))
    if not halogen_8:
        fail("Thiếu câu Dẫn xuất halogen A.11/Câu 8")
    else:
        if halogen_8.get("answer") != "A":
            fail("Dẫn xuất halogen Câu 8 phải có đáp án A")
        payload = json.dumps(halogen_8, ensure_ascii=False).casefold()
        sequence_tokens = ("benzene", "ethylbenzene", "1-bromo-1-phenylethane", "styrene")
        if not all(token in payload for token in sequence_tokens):
            fail("Câu A.11 chưa lưu đủ chuỗi benzene → ethylbenzene → 1-bromo-1-phenylethane → styrene")
        if len(halogen_8.get("media", []) or []) > 1:
            fail("Câu A.11 vẫn tách sơ đồ thành nhiều thẻ ảnh")

    halogen_9 = by_source.get(("halogen", "9"))
    if not halogen_9:
        fail("Thiếu câu Dẫn xuất halogen Câu 9")
    else:
        if halogen_9.get("answer") != "D":
            fail("Dẫn xuất halogen Câu 9 phải có đáp án D")
        explanation = normalized(halogen_9.get("explanation"))
        if "(a)" not in explanation or "(c)" not in explanation:
            fail("Dẫn xuất halogen Câu 9 phải giải thích hai thí nghiệm (a) và (c)")


def check_theory() -> None:
    path = ROOT / "assets/data/theory.json"
    theory = load_json(path)
    if theory is None:
        return
    raw = json.dumps(theory, ensure_ascii=False)
    raw_folded = raw.casefold()
    modules = theory.get("modules", {}) if isinstance(theory, dict) else {}
    for module in ("halogen", "alcohol", "phenol", "carbonyl", "acid"):
        if module not in raw_folded:
            fail(f"theory.json thiếu mô-đun {module}")
            continue
        record = modules.get(module, {}) if isinstance(modules, dict) else {}
        for field in ("objectives", "conceptBlocks", "reactions", "misconceptions", "safetyNotes", "relatedLabs"):
            if not isinstance(record.get(field), list) or not record[field]:
                fail(f"Mô-đun {module} thiếu dữ liệu {field}")
        for reaction in record.get("reactions", []):
            for field in ("equation", "condition", "phenomenon", "conclusion"):
                if not str(reaction.get(field, "")).strip():
                    fail(f"Mô-đun {module} có phản ứng thiếu {field}")
    if "<br" in raw_folded:
        fail("theory.json chứa thẻ <br>")


def check_labs() -> None:
    expected = {
        "substitution": ("NaOH(aq)", "KOH(ethanol)", "CH₃CH=CH₂"),
        "cuo": ("CuO", "CH₃CHO", "Cu"),
        "phenol-bromine": ("Br₂", "kết tủa trắng", "precipitate"),
        "tollens": ("Ag", "silver", "Tollens"),
        "carbonate": ("NaHCO₃", "CO₂", "bubbles"),
        "esterification": ("NaCl", "⇌", "layers"),
    }
    for lab_id, tokens in expected.items():
        path = ROOT / f"assets/js/labs/{lab_id}.js"
        source = read(path)
        if not re.search(rf"\bid\s*:\s*['\"]{re.escape(lab_id)}['\"]", source):
            fail(f"Lab {lab_id} thiếu hoặc sai ID")
        if source.count("title:") < 4:
            fail(f"Lab {lab_id} phải có ít nhất 4 bước")
        for token in tokens:
            if token not in source:
                fail(f"Lab {lab_id} thiếu nội dung quan trọng: {token}")

    carbonate = read(ROOT / "assets/js/labs/carbonate.js").casefold()
    if "kết tủa kim loại" in carbonate:
        fail("Lab carbonate còn mô tả sai 'kết tủa kim loại'")


def check_forbidden_text() -> None:
    forbidden = {
        "Đung nóng": "Sửa thành 'Đun nóng'",
        "cabonyl": "Sửa thành 'carbonyl'",
        "car bonyl": "Sửa thành 'carbonyl'",
        "NaAlH₄": "Dùng LiAlH₄ hoặc NaBH₄",
    }
    candidates = list((ROOT / "assets").rglob("*.js")) + list((ROOT / "assets").rglob("*.json"))
    for path in candidates:
        source = read(path)
        for needle, message in forbidden.items():
            if needle.casefold() in source.casefold():
                fail(f"{path.relative_to(ROOT)} còn '{needle}'. {message}")
        if re.search(r"(?<![0-9a-f])#d(?![0-9a-f])", source, flags=re.IGNORECASE):
            fail(f"{path.relative_to(ROOT)} còn ký tự rác #d")

    data_files = list((ROOT / "assets/data").glob("*.json"))
    for path in data_files:
        if re.search(r"<br\s*/?>", read(path), flags=re.IGNORECASE):
            fail(f"{path.relative_to(ROOT)} chứa thẻ <br>")


def check_assets_and_html() -> None:
    html = read(ROOT / "index.html")
    if 'id="welcomeName"' not in html:
        fail("Thiếu ô nhập tên lần đầu")
    if re.search(r'id="explorerName"[^>]*>\s*Hiếu\s*<', html, flags=re.IGNORECASE):
        fail("Tên người chơi đang bị gắn cố định là Hiếu")
    if "city-floor.webp" not in read(ROOT / "assets/css/city-v4.css") and "city-floor.webp" not in read(ROOT / "assets/js/stations/city.js"):
        fail("Giao diện Thành phố chưa dùng ảnh sàn city-floor.webp")
    if not (ROOT / "assets/images/city-floor.webp").is_file():
        fail("Thiếu ảnh sàn assets/images/city-floor.webp")


def check_javascript_syntax() -> None:
    node = shutil.which("node")
    if not node:
        warn("Không tìm thấy Node.js; bỏ qua kiểm tra cú pháp JavaScript")
        return
    js_files = sorted((ROOT / "assets/js").rglob("*.js"))
    for path in js_files:
        result = subprocess.run(
            [node, "--check", str(path)],
            cwd=ROOT,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        if result.returncode:
            detail = (result.stderr or result.stdout).strip().splitlines()
            fail(f"Lỗi cú pháp JavaScript tại {path.relative_to(ROOT)}: {detail[-1] if detail else 'không rõ'}")


def main() -> int:
    checks = (
        check_required_files,
        check_questions,
        check_theory,
        check_labs,
        check_forbidden_text,
        check_assets_and_html,
        check_javascript_syntax,
    )
    for check in checks:
        check()

    print(f"MolQuest release verification: {len(ERRORS)} lỗi, {len(WARNINGS)} cảnh báo")
    for message in WARNINGS:
        print(f"CẢNH BÁO: {message}")
    for message in ERRORS:
        print(f"LỖI: {message}")
    if ERRORS:
        print("KHÔNG ĐẠT: chưa được đóng gói phát hành")
        return 1
    print("ĐẠT: kiểm tra tĩnh hoàn tất")
    return 0


if __name__ == "__main__":
    sys.exit(main())
