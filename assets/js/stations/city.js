import{TOPICS}from"../core/config.js";
import{topicMetrics}from"../core/store.js";
import{$,$$,esc}from"../core/ui.js";

export async function render(ctx){
 const state=ctx.getState(),name=state.profile.name||"bạn";
 const weakest=Object.keys(TOPICS).map(k=>[k,topicMetrics(k)]).sort((a,b)=>(a[1].count? a[1].accuracy:-1)-(b[1].count?b[1].accuracy:-1))[0][0];
 ctx.root.classList.add("city-v4-root");
 window.addEventListener("molquest:route-leave",()=>ctx.root.classList.remove("city-v4-root"),{once:true});
 const suggestion=state.attempts.length
  ?`Quay lại ${TOPICS[weakest].district}. Bạn còn ${topicMetrics(weakest).wrong} lượt cần xem lại.`
  :"Bắt đầu ở Nhà kính Halogen với một chặng 5 câu để Mol xác định phần cần củng cố.";
 ctx.root.innerHTML=`<section class="city-hero city-v4" aria-label="Bản đồ năm trạm MolQuest">
  <div class="city-welcome"><span class="city-greeting">Chào ${esc(name)}!</span><strong>Hôm nay mình khám phá trạm nào?</strong></div>
  <details class="city-mission"><summary>Gợi ý của Mol</summary><p>${esc(suggestion)}</p></details>
  <div class="city-stations" aria-label="Các trạm khám phá">
  ${Object.entries(TOPICS).map(([key,t])=>{const m=topicMetrics(key),done=m.count&&m.accuracy>=70,art=window.__molStationArt?.[key]||`assets/images/stations/${key}.webp`,status=done?"Đã hoàn thành":m.count?`${m.accuracy}% chính xác • ${m.count} lượt`:"Sẵn sàng khám phá";return `<button class="station-node ${done?"completed":m.count?"in-progress":"ready"}" data-topic="${key}" style="--node:${t.color};--node-soft:${t.soft}" aria-label="Khám phá ${esc(t.district)}. ${esc(status)}"><span class="node-building"><img src="${art}" alt="" draggable="false"><i></i></span><span class="node-label"><b>${esc(t.short)}</b><small>${esc(t.symbol)}</small><em>${esc(status)}</em></span><span class="station-state" aria-hidden="true">${done?"✓":m.count?"↻":"→"}</span></button>`}).join("")}
  </div>
  <div class="map-runner" id="mapRunner" aria-hidden="true"><div class="map-runner-sprite"></div><i></i></div>
  <div class="travel-toast" id="travelToast" role="status"></div>
 </section>`;
 $$(".station-node").forEach(b=>b.onclick=()=>selectStation(ctx,b));
}

function selectStation(ctx,button){
 const map=button.closest(".city-hero");
 if(button.classList.contains("selected")||map.dataset.travelling==="true")return;
 map.dataset.travelling="true";
 $$(".station-node").forEach(x=>x.classList.remove("selected"));button.classList.add("selected");
 const topic=button.dataset.topic,name=ctx.getState().profile.name||"Nhà thám hiểm",notice=$("#travelToast"),runner=$("#mapRunner");
 const mapBox=map.getBoundingClientRect(),target=button.getBoundingClientRect();
 runner.style.setProperty("--runner-x",`${target.left-mapBox.left+target.width/2}px`);
 runner.style.setProperty("--runner-y",`${target.top-mapBox.top+target.height/2}px`);
 runner.dataset.target=topic;runner.classList.add("travelling");
 notice.innerHTML=`Mol đang dẫn <b>${esc(name)}</b> tới ${TOPICS[topic].district}…`;notice.classList.add("show");
 setTimeout(()=>{notice.innerHTML=`Đã tới <b>${TOPICS[topic].district}</b>. Cửa trạm đang mở!`;runner.classList.add("arrived")},700);
 setTimeout(()=>{notice.classList.remove("show");button.classList.remove("selected");map.dataset.travelling="false";openStation(ctx,topic)},980);
}

function openStation(ctx,key){
 const t=TOPICS[key],m=topicMetrics(key),dialog=$("#stationDialog"),box=$("#stationDialogContent");
 box.innerHTML=`<div class="station-shell" style="--station:${t.color};--station-soft:${t.soft}"><div class="station-hero"><div class="station-emblem"><span>${t.symbol}</span><i></i></div><div class="station-intro"><span class="pill">${m.count?`${m.count} lượt đã chốt • ${m.accuracy}% chính xác`:"Điểm đến mới"}</span><h2>${t.district}</h2><p>${t.summary}</p><div class="station-route"><span>Quảng trường Mol</span><b>→</b><strong>${t.name}</strong></div></div></div><div class="station-actions">
  <button class="station-action" data-action="library"><span class="action-art theory-art">01</span><span><b>Nhà kính kiến thức</b><small>Gói lý thuyết, công thức và điểm dễ nhầm trong một lối đọc gọn.</small></span><i>Vào học →</i></button>
  <button class="station-action" data-action="labs"><span class="action-art lab-art">02</span><span><b>Xưởng phản ứng</b><small>Thao tác đúng trình tự, quan sát hiện tượng và chốt kết luận.</small></span><i>Vào lab →</i></button>
  <button class="station-action" data-action="game"><span class="action-art game-art">03</span><span><b>Đường thử thách</b><small>Mol chạy, bình rơi, câu hỏi bật lên; mỗi câu chỉ chốt một lần.</small></span><i>Bắt đầu →</i></button>
 </div></div>`;
 $$(".station-action").forEach(b=>b.onclick=()=>{dialog.close();ctx.navigate(b.dataset.action,{topic:key,labId:t.lab})});dialog.showModal();
}
