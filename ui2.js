/* Sự kiện MKT · giao diện thử "ui2" (kiểu Tender Map) — chỉ tải khi mở link có ?ui=2 (nhớ ở localStorage eh_ui; ?ui=1 = về giao diện cũ).
   Trái: dòng thời gian FY68 (mỗi sự kiện 1 thanh, màu theo loại, vòng màu = sức khoẻ tiến độ, vạch Hôm nay, + / − / ⌂, chú giải) hoặc Lịch tháng.
   Phải: bảng chi tiết cuộn riêng — FY68 (số tổng · sự kiện theo tiến độ · theo loại · theo người) ⇒ 1 sự kiện (cảnh báo · số · thông tin · việc theo hạng mục · tab) ⇒ 1 việc (khung chi tiết cũ).
   Dùng lại toàn bộ dữ liệu, quyền và thao tác của index.html qua window.EH_X (đọc hàm nội bộ) — không đổi luật nghiệp vụ. Điều hướng bằng hash như cũ (#dash · #mine · #ev-<id> · #t-<id>). */
(function(){
var U = window.EH_UI2 = { on: true, v: "1.0" };
var X = function(n){ return window.EH_X(n); };
var FY0 = "2026-09-01", FY1 = "2027-08-31", NDAY = 365;
var LSG = function(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }, LSS = function(k, v){ try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch(e){} };
var st = { zoom: +LSG("eh_u2_zoom") || 1.6, left: LSG("eh_u2_left") || "tl", f: LSG("eh_u2_f") || "fy", rt: "ov", tf: "open", leg: LSG("eh_u2_leg") === "1", q: "" };

function css(){
  if (document.getElementById("ui2-css")) return;
  var s = document.createElement("style"); s.id = "ui2-css";
  s.textContent = [
  "body.u2{background:#F4F6F9;overflow:hidden}",
  "body.u2 .demo-note{position:fixed;left:0;right:0;bottom:0;z-index:5;font-size:11.5px;padding:3px}",
  ".u2top{height:56px;display:flex;align-items:center;gap:10px;padding:0 20px;background:#fff;border-bottom:1px solid var(--line);position:relative;z-index:20}",
  ".u2brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-weight:700;font-size:17px;white-space:nowrap;margin-right:4px}",
  ".u2brand i{width:30px;height:30px;border-radius:8px;background:var(--navy);display:grid;place-items:center;color:#fff;font-style:normal;font-size:13px;font-weight:700}",
  ".u2brand i b{color:var(--mani)}",
  ".u2srch{flex:0 1 300px;display:flex;align-items:center;gap:8px;height:36px;padding:0 12px;border:1px solid var(--line2);border-radius:999px;color:var(--ink3);background:#fff}",
  ".u2srch input{border:0;outline:0;flex:1;min-width:0;font-size:13.5px;background:transparent;color:var(--ink)}",
  ".u2seg{display:inline-flex;border:1px solid var(--line2);border-radius:999px;overflow:hidden;background:#fff;flex:none}",
  ".u2seg button{all:unset;cursor:pointer;padding:7px 13px;font-size:13.5px;color:var(--ink2);white-space:nowrap}",
  ".u2seg button+button{border-left:1px solid var(--line)}",
  ".u2seg button[aria-pressed=true]{background:var(--navy);color:#fff;font-weight:600}",
  ".u2seg.lt button[aria-pressed=true]{background:var(--blue-s);color:var(--blue)}",
  ".u2sp{flex:1}",
  ".u2ib{all:unset;cursor:pointer;width:34px;height:34px;border-radius:50%;border:1px solid var(--line2);display:grid;place-items:center;color:var(--ink2);position:relative;background:#fff;flex:none}",
  ".u2ib:hover,.u2seg button:hover{background:var(--sunk)}",
  ".u2ib .badge{position:absolute;top:-4px;right:-5px;min-width:16px;height:16px;font-size:10px}",
  ".u2pri{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 16px;border-radius:999px;background:var(--navy);color:#fff;font-weight:600;font-size:13.5px;white-space:nowrap;flex:none}",
  ".u2pri .ico{stroke:#fff}",
  ".u2me{display:flex;align-items:center;gap:8px;font-size:12.5px;line-height:1.2;white-space:nowrap}",
  ".u2me small{color:var(--ink3)}",
  ".u2main{display:grid;grid-template-columns:minmax(0,1fr) clamp(430px,35vw,540px);gap:16px;padding:16px 20px;height:calc(100vh - 56px)}",
  /* bản đồ thời gian */
  ".u2map{position:relative;border-radius:14px;background:#E7EDF4;border:1px solid #DCE4EE;overflow:hidden;min-height:0}",
  ".u2map>.u2tl{position:absolute;inset:0;overflow:auto;scroll-behavior:smooth}",
  ".u2in{position:relative;min-height:100%;padding:0 0 80px;box-sizing:border-box}",
  ".u2hd{position:sticky;top:0;z-index:3;height:58px;background:linear-gradient(#E7EDF4 82%,rgba(231,237,244,0))}",
  ".u2q,.u2m{position:absolute;font-size:11px;color:#6A7C8C;white-space:nowrap}",
  ".u2q{top:8px;font-weight:700;letter-spacing:.08em}",
  ".u2m{top:28px;font-size:12px;color:#4B5E6B}",
  ".u2m b{font-weight:600;color:var(--ink)}",
  ".u2grid{position:absolute;top:0;bottom:0;border-left:1px solid rgba(255,255,255,.75);pointer-events:none}",
  ".u2grid.q{border-left:1px solid rgba(120,140,160,.35)}",
  ".u2today{position:absolute;top:0;bottom:0;width:0;border-left:2px solid #E3B400;z-index:4;pointer-events:none}",
  ".u2today span{position:absolute;top:46px;left:4px;font-size:10.5px;font-weight:700;background:var(--mani);color:#161616;padding:1px 6px;border-radius:999px;white-space:nowrap}",
  ".u2rows{position:relative;padding-top:10px}",
  ".u2row{position:relative;height:38px}",
  ".u2row.off{opacity:.45}",
  ".u2bar{all:unset;position:absolute;top:13px;height:12px;border-radius:999px;cursor:pointer;min-width:6px;box-sizing:border-box;background:color-mix(in srgb,var(--c) 22%,#fff);border:1px solid color-mix(in srgb,var(--c) 55%,#fff);overflow:hidden}",
  ".u2bar i{position:absolute;left:0;top:0;bottom:0;background:color-mix(in srgb,var(--c) 70%,#fff)}",
  ".u2bar:hover,.u2ev:hover{box-shadow:0 0 0 3px rgba(255,255,255,.95)}",
  ".u2ev{all:unset;position:absolute;top:7px;height:24px;min-width:9px;border-radius:5px;background:var(--c);cursor:pointer;box-sizing:border-box;border:1.5px solid #fff}",
  ".u2dot{position:absolute;top:6px;width:26px;height:26px;margin-left:-13px;border-radius:50%;background:#fff;border:2.5px solid var(--h);display:grid;place-items:center;font-size:10px;font-weight:700;color:var(--ink);z-index:1;pointer-events:none}",
  ".u2lab{position:absolute;top:10px;font-size:12.5px;color:#22394A;white-space:nowrap;max-width:46%;overflow:hidden;text-overflow:ellipsis;pointer-events:none;text-shadow:0 0 3px #E7EDF4,0 0 3px #E7EDF4}",
  ".u2lab b{font-weight:600}",
  ".u2row.sel .u2ev{box-shadow:0 0 0 2px #fff,0 0 0 4px var(--navy)}",
  ".u2row.sel{background:rgba(255,255,255,.45)}",
  ".u2row.sel .u2lab{color:var(--navy);font-weight:700}",
  ".u2ms{position:absolute;top:15px;z-index:1;width:8px;height:8px;margin-left:-4px;transform:rotate(45deg);background:var(--navy);border:1.5px solid #fff;pointer-events:none}",
  ".u2ms.ok{background:var(--ok)}.u2ms.crit{background:var(--crit)}",
  ".u2ctl{position:absolute;left:16px;bottom:16px;display:flex;gap:6px;z-index:4}",
  ".u2ctl button{all:unset;cursor:pointer;width:32px;height:32px;border-radius:9px;background:#fff;display:grid;place-items:center;color:var(--ink);box-shadow:0 1px 2px rgba(13,36,49,.12);font-size:17px}",
  ".u2pill{position:absolute;left:132px;bottom:16px;z-index:4;display:flex;align-items:center;gap:6px;background:#fff;border-radius:999px;padding:4px 12px 4px 4px;box-shadow:0 1px 2px rgba(13,36,49,.12);font-size:13px;font-weight:600;max-width:60%}",
  ".u2pill a{text-decoration:none;background:var(--blue);color:#fff;padding:3px 10px;border-radius:999px;font-weight:600;white-space:nowrap}",
  ".u2pill span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
  ".u2pill.root{padding-left:12px}",
  ".u2leg{position:absolute;right:16px;bottom:16px;z-index:4;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(13,36,49,.12);font-size:12px;color:var(--ink2);width:236px}",
  ".u2leg>button{all:unset;cursor:pointer;display:flex;justify-content:space-between;width:100%;box-sizing:border-box;padding:9px 12px;font-weight:600;color:var(--ink)}",
  ".u2leg div{padding:0 12px 11px;display:grid;gap:6px}",
  ".u2leg span{display:flex;align-items:center;gap:7px}",
  ".u2leg i{width:22px;height:9px;border-radius:999px;display:inline-block;flex:none}",
  ".u2leg i.r{width:12px;height:12px;border-radius:50%;background:#fff;border:2.5px solid}",
  ".u2leg i.d{width:8px;height:8px;border-radius:0;transform:rotate(45deg);background:var(--navy);margin:0 7px 0 4px}",
  ".u2map .u2cal{position:absolute;inset:0;overflow:auto;padding:16px;background:#fff}",
  ".u2empty{position:absolute;inset:0;display:grid;place-items:center;color:var(--ink3);font-size:14px;text-align:center;padding:30px}",
  /* bảng chi tiết */
  ".u2pan{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:auto;min-height:0;scroll-behavior:smooth}",
  ".u2ph{padding:18px 20px 12px;border-bottom:1px solid var(--line);position:sticky;top:0;background:#fff;z-index:2}",
  ".u2ph h2{margin:0;font:700 19px/1.3 var(--f-body);color:var(--ink);display:flex;align-items:center;gap:8px}",
  ".u2ph h2 em{font-style:normal;color:#B88A00}",
  ".u2ph p{margin:3px 0 0;font-size:12.5px;color:var(--ink3)}",
  ".u2back{all:unset;cursor:pointer;width:24px;height:24px;border-radius:50%;border:1px solid var(--line2);display:grid;place-items:center;flex:none;font-size:14px;color:var(--ink2)}",
  ".u2pb{padding:14px 20px 26px}",
  ".u2tabs{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 14px}",
  ".u2tabs button{all:unset;cursor:pointer;padding:4px 12px;border:1px solid var(--line2);border-radius:999px;font-size:13px;color:var(--ink2);white-space:nowrap}",
  ".u2tabs button[aria-pressed=true]{border-color:var(--blue);color:var(--blue);background:var(--blue-s);font-weight:600}",
  ".u2tabs .n{font-size:11px;color:var(--ink3);margin-left:3px}",
  ".u2k{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:18px}",
  ".u2k>*{all:unset;box-sizing:border-box;cursor:pointer;background:#F6F8FA;border:1px solid #E8ECF0;border-radius:10px;padding:10px 12px;min-width:0}",
  ".u2k>*:hover{border-color:var(--line2)}",
  ".u2k b{display:block;font:700 21px/1.2 var(--f-body);color:var(--ink)}",
  ".u2k b small{font-size:13px;color:var(--ink3);font-weight:600}",
  ".u2k span{display:block;font-size:11.5px;line-height:1.3;color:var(--ink3);margin-top:3px}",
  ".u2k .crit b{color:var(--crit)}.u2k .warn b{color:var(--warn)}.u2k .wait b{color:var(--wait)}",
  ".u2h{font:600 12px/1.3 var(--f-body);letter-spacing:.06em;text-transform:uppercase;color:var(--ink2);margin:20px 0 10px;display:flex;gap:8px;align-items:baseline}",
  ".u2h small{text-transform:none;letter-spacing:0;font-weight:400;color:var(--ink3)}",
  ".u2h .sp{flex:1}",
  ".u2rk{list-style:none;margin:0;padding:0}",
  ".u2rk li{border-bottom:1px solid var(--line)}",
  ".u2rk a{display:grid;grid-template-columns:24px minmax(0,1fr) auto;gap:4px 10px;padding:10px 4px;text-decoration:none;color:inherit;align-items:start}",
  ".u2rk a:hover{background:#F8FAFC}",
  ".u2rk .no{width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line2);display:grid;place-items:center;font-size:11px;font-weight:700;color:var(--ink2);margin-top:1px}",
  ".u2rk .no.hot{border-color:#E3B400;background:#FFF7D6}",
  ".u2rk .nm{font-weight:600;font-size:14.5px;color:var(--ink);line-height:1.35}",
  ".u2rk .v{text-align:right;font-weight:700;font-size:15px;color:var(--ink);white-space:nowrap}",
  ".u2rk .v small{display:block;font-weight:400;font-size:11.5px;color:var(--ink3)}",
  ".u2rk .br{grid-column:2/4;height:4px;border-radius:999px;background:#E9EDF1;position:relative;overflow:hidden;margin-top:2px}",
  ".u2rk .br i{position:absolute;left:0;top:0;bottom:0;border-radius:999px}",
  ".u2rk .br s{position:absolute;top:-2px;bottom:-2px;width:2px;background:var(--ink)}",
  ".u2rk .mt{grid-column:2/4;display:flex;gap:8px;justify-content:space-between;align-items:center;font-size:12px;color:var(--ink3)}",
  ".u2rk .mt>span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
  ".u2hp{font-size:11.5px;font-weight:600;white-space:nowrap}",
  ".u2hp.ok{color:var(--ok)}.u2hp.warn{color:var(--warn)}.u2hp.crit{color:var(--crit)}.u2hp.mut{color:var(--ink3)}",
  ".u2st{margin:0 0 6px}",
  ".u2st .bar2{display:flex;height:9px;border-radius:999px;overflow:hidden;margin:6px 0 8px;background:#E9EDF1}",
  ".u2st .bar2 i{height:100%}",
  ".u2st .rw{display:flex;justify-content:space-between;font-size:13.5px;padding:2px 0}",
  ".u2st .rw span{display:flex;align-items:center;gap:7px;color:var(--ink2)}",
  ".u2st .rw i{width:9px;height:9px;border-radius:2px;display:inline-block}",
  ".u2st .rw b{font-weight:600;color:var(--ink)}",
  ".u2al{border-radius:10px;padding:10px 13px;margin-bottom:8px;font-size:12.5px;border:1px solid}",
  ".u2al b{display:block;font-size:14px;margin-bottom:2px}",
  ".u2al.crit{background:#FDF1EF;border-color:#F2C3BC;color:#7A2A22}.u2al.crit b{color:var(--crit)}",
  ".u2al.warn{background:#FEF6EA;border-color:#F3D8A8;color:#6E4A10}.u2al.warn b{color:var(--warn)}",
  ".u2al.wait{background:#F5F1FB;border-color:#DCD0EF;color:#4C3A75}.u2al.wait b{color:var(--wait)}",
  ".u2al a{color:inherit}",
  ".u2kv{display:grid;grid-template-columns:110px minmax(0,1fr);gap:5px 12px;font-size:13.5px;margin:0}",
  ".u2kv dt{color:var(--ink3)}.u2kv dd{margin:0;color:var(--ink);overflow-wrap:anywhere}",
  ".u2team{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}",
  ".u2team>*{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:10px;padding:6px 8px;min-width:0;font-size:13px}",
  ".u2team small{display:block;color:var(--ink3);font-size:11px}",
  ".u2team select{border:0;background:transparent;font:inherit;font-weight:600;color:var(--ink);padding:0;max-width:100%}",
  ".u2acts{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0 2px}",
  ".u2acts .btn{border-radius:999px}",
  ".u2g{margin-bottom:10px;border:1px solid var(--line);border-radius:10px;overflow:hidden}",
  ".u2g>header{display:grid;grid-template-columns:minmax(0,1fr) 70px auto;gap:10px;align-items:center;padding:8px 12px;background:#F6F8FA;font-size:13px}",
  ".u2g>header b{font-weight:600;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
  ".u2g>header small{color:var(--ink3);font-size:11.5px;display:block;font-weight:400}",
  ".u2g>header .br{height:4px;border-radius:999px;background:#E2E7EC;overflow:hidden}",
  ".u2g>header .br i{display:block;height:100%;background:var(--ok)}",
  ".u2g>header .br.crit i{background:var(--crit)}",
  ".u2g>header .n{font-size:12px;color:var(--ink2);font-weight:600;white-space:nowrap}",
  ".u2t{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:12px minmax(0,1fr) auto auto;gap:8px;align-items:center;width:100%;padding:8px 12px;border-top:1px solid var(--line);font-size:13.5px}",
  ".u2t:hover{background:#F8FAFC}",
  ".u2t .d{width:9px;height:9px;border-radius:50%;background:var(--line2)}",
  ".u2t .d.done{background:var(--ok)}.u2t .d.over{background:var(--crit)}.u2t .d.wait{background:var(--wait)}.u2t .d.prog{background:var(--prog)}.u2t .d.soon{background:var(--warn)}.u2t .d.block{background:#8A6D3B}",
  ".u2t .tt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--ink)}",
  ".u2t.done .tt{color:var(--ink3);text-decoration:line-through}",
  ".u2t .ds{font-size:12px;white-space:nowrap;color:var(--ink3);text-align:right}",
  ".u2t .ds.crit{color:var(--crit);font-weight:600}.u2t .ds.warn{color:var(--warn);font-weight:600}",
  ".u2t .tt small{color:var(--ink3);font-size:11.5px;margin-left:6px}",
  ".u2pb .card{box-shadow:none}",
  ".u2pb .pbody{padding:0}",
  ".u2pb table.t{font-size:12.5px}",
  ".u2pb .kv{grid-template-columns:1fr}",
  ".u2more{display:block;text-align:center;font-size:12.5px;color:var(--blue);padding:8px;text-decoration:none}",
  ".u2foot{font-size:11.5px;color:var(--ink3);margin-top:22px;border-top:1px solid var(--line);padding-top:10px;display:flex;gap:10px;flex-wrap:wrap}",
  ".u2foot a,.u2foot button{all:unset;cursor:pointer;color:var(--blue)}",
  "@media (max-width:980px){",
  " body.u2{overflow:auto}",
  " .u2top{height:auto;flex-wrap:wrap;padding:8px 12px;gap:8px;position:sticky;top:0}",
  " .u2srch{order:9;flex:1 1 100%}",
  " .u2me span,.u2brand span{display:none}",
  " .u2main{display:block;height:auto;padding:0}",
  " .u2map{position:sticky;top:0;height:44vh;border-radius:0;z-index:5;border-width:0 0 1px}",
  " .u2pan{border-radius:0;border-width:0;overflow:visible}",
  " .u2ph{position:static}",
  " .u2leg{display:none}",
  " .u2k{grid-template-columns:repeat(2,minmax(0,1fr))}",
  "}"].join("\n");
  document.head.appendChild(s);
}

function fyEvents(){
  var E = X("evs")(), q = X("norm")(st.q || "");
  E = E.filter(function(e){ var s = e.start, en = e.end || e.start; return s && en >= FY0 && s <= FY1; });
  if (st.f === "live") E = E.filter(function(e){ return /prep|now|after/.test(X("phase")(e)) && e.state !== "Huỷ"; });
  if (st.f === "mine") E = E.filter(function(e){ return X("inTeam")(e) || X("tasksOf")(e.id).some(function(t){ return t.pic === X("me")(); }); });
  if (q) E = E.filter(function(e){ return X("norm")([e.name, e.city, e.type, e.Owner, e.products].join(" ")).indexOf(q) >= 0; });
  return E.sort(function(a, b){ return a.start < b.start ? -1 : a.start > b.start ? 1 : (a.name < b.name ? -1 : 1); });
}
var pct = function(iso){ var d0 = X("d0"), a = d0(FY0), d = d0(iso); return Math.max(0, Math.min(100, (d - a) / 864e5 / NDAY * 100)); };
var TYC = { exh: "var(--t-exh)", ws: "var(--t-ws)", sem: "var(--t-sem)", web: "var(--t-web)", oth: "var(--t-oth)" };
var HC = { ok: "var(--ok)", warn: "#D98A00", crit: "var(--crit)", mut: "#9AA8B4" };

function timeline(sel){
  var E = fyEvents(), esc = X("esc"), d0 = X("d0"), TISO = X("TISO"), fmt = X("fmt");
  var MON = ["T9", "T10", "T11", "T12", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"], h = "";
  var vw = window.innerWidth || 1200, zmin = Math.max(1, 960 / (vw < 980 ? vw : vw - 600));   /* tối thiểu ~80 px / tháng */
  h += '<div class="u2in" style="width:' + (Math.max(st.zoom, zmin) * 100) + '%"><div class="u2hd">';
  for (var i = 0; i < 12; i++){
    var y = i < 4 ? 2026 : 2027, m = (i + 8) % 12 + 1, x = pct(y + "-" + ("0" + m).slice(-2) + "-01");
    if (i % 3 === 0) h += '<span class="u2q" style="left:calc(' + x + '% + 8px)">Q' + (i / 3 + 1) + " · FY68</span>";
    h += '<span class="u2m" style="left:calc(' + x + '% + 8px)"><b>' + MON[i] + "</b> " + y + "</span>";
  }
  h += "</div>";
  for (i = 0; i < 12; i++){ y = i < 4 ? 2026 : 2027; m = (i + 8) % 12 + 1; h += '<span class="u2grid' + (i % 3 === 0 ? " q" : "") + '" style="left:' + pct(y + "-" + ("0" + m).slice(-2) + "-01") + '%"></span>'; }
  if (TISO >= FY0 && TISO <= FY1) h += '<span class="u2today" style="left:' + pct(TISO) + '%"><span>Hôm nay ' + fmt(TISO) + "</span></span>";
  h += '<div class="u2rows">';
  E.forEach(function(e, k){
    var s = X("stat")(X("tasksOf")(e.id)), hl = X("health")(e, s), a = pct(e.start), b = pct(e.end || e.start), w = Math.max(b - a + 100 / NDAY, .35);
    var due = X("leafs")(e.id).map(function(t){ return t.due; }).filter(Boolean).sort()[0], p0 = due && due < e.start ? pct(due < FY0 ? FY0 : due) : a, pw = Math.max(a - p0, 0);
    var c = TYC[X("tc")(e.type)], ph = X("phase")(e), right = b > 66;
    h += '<div class="u2row' + (sel && sel.id === e.id ? " sel" : "") + (/old|cancel|closed/.test(ph) ? " off" : "") + '" style="--c:' + c + ";--h:" + HC[hl.k] + '">' +
      (pw > 0 ? '<a class="u2bar" href="#ev-' + esc(e.id) + '" style="left:' + p0 + "%;width:" + pw + '%" title="' + esc("Chuẩn bị: " + s.done + "/" + s.total + " việc xong (" + s.pct + "%) · " + hl.t) + '"><i style="width:' + s.pct + '%"></i></a>' : "") +
      '<a class="u2ev" href="#ev-' + esc(e.id) + '" style="left:' + a + "%;width:" + w + '%" title="' + esc(e.name + " · " + X("evDates")(e) + " · " + s.pct + "% · " + hl.t) + '"></a>' +
      '<span class="u2dot" style="left:' + p0 + '%">' + (s.total ? s.pct : "–") + "</span>" +
      '<span class="u2lab" style="' + (right ? "right:calc(" + (100 - p0) + "% + 18px);text-align:right" : "left:calc(" + (a + w) + "% + 8px)") + '"><b>' + esc(e.name) + "</b> · " + esc(X("evDates")(e)) + (e.city ? " · " + esc(e.city) : "") + "</span>";
    if (sel && sel.id === e.id) X("leafs")(e.id).filter(function(t){ return X("isMs")(t) && t.due && t.due >= FY0 && t.due <= FY1; }).forEach(function(t){
      var stt = X("stateOf")(t); h += '<span class="u2ms ' + (stt === "done" ? "ok" : stt === "over" ? "crit" : "") + '" style="left:' + pct(t.due) + '%" title="' + esc(t.title + " · " + fmt(t.due)) + '"></span>'; });
    h += "</div>";
  });
  h += "</div></div>";
  if (!E.length) h += '<div class="u2empty">' + (st.q ? "Không có sự kiện khớp “" + esc(st.q) + "”." : "Chưa có sự kiện trong FY68 với bộ lọc này.") + "</div>";
  return h;
}
function legend(){
  return '<div class="u2leg"><button data-u2="leg">Chú giải <span>' + (st.leg ? "▾" : "▴") + "</span></button>" + (st.leg ? "<div>" +
    [["exh", "Triển lãm"], ["ws", "Workshop"], ["sem", "Hội thảo"], ["web", "Webinar"], ["oth", "Khác"]].map(function(t){ return '<span><i style="background:' + TYC[t[0]] + '"></i>' + t[1] + "</span>"; }).join("") +
    '<span><i style="background:#5B6B7B;width:12px;height:16px;border-radius:3px;margin:0 5px"></i>Ngày diễn ra</span>' +
    '<span><i style="background:linear-gradient(90deg,#9AA6B2 45%,#E2E7EC 45%)"></i>Chuẩn bị · phần đậm = % việc xong</span>' +
    '<span><i class="r" style="border-color:var(--ok)"></i>Số % · vòng xanh: đúng tiến độ</span><span><i class="r" style="border-color:#D98A00"></i>Cần chú ý</span><span><i class="r" style="border-color:var(--crit)"></i>Chậm tiến độ</span>' +
    '<span><i style="background:#E3B400;width:3px;height:14px;border-radius:0;margin:0 9px"></i>Hôm nay</span>' +
    '<span><i class="d"></i>Mốc quan trọng (sự kiện đang chọn)</span></div>' : "") + "</div>";
}

/* ───── bảng phải ───── */
function kcard(cls, v, lab, act){ return "<button" + (cls ? ' class="' + cls + '"' : "") + (act ? ' data-u2="' + act + '"' : "") + "><b>" + v + "</b><span>" + lab + "</span></button>"; }
function evRow(e, i){
  var esc = X("esc"), s = X("stat")(X("tasksOf")(e.id)), hl = X("health")(e, s), dy = X("dday")(e), c = HC[hl.k];
  return '<li><a href="#ev-' + esc(e.id) + '"><span class="no' + (i < 3 && hl.k === "crit" ? " hot" : "") + '">' + (i + 1) + '</span><span class="nm">' + esc(e.name) + "</span>" +
    '<span class="v">' + s.pct + "%<small>" + s.done + "/" + s.total + " việc</small></span>" +
    '<span class="br"><i style="width:' + s.pct + "%;background:" + c + '"></i>' + (s.total ? '<s style="left:' + s.planPct + '%"></s>' : "") + "</span>" +
    '<span class="mt"><span>' + esc(X("evDates")(e)) + " · " + esc(dy.big) + (e.Owner ? " · " + esc(e.Owner) : "") + (s.over ? ' · <b style="color:var(--crit)">' + s.over + " trễ</b>" : "") + '</span><span class="u2hp ' + hl.k + '">' + esc(hl.t) + "</span></span></a></li>";
}
function taskRow(t, withEv){
  var esc = X("esc"), stt = X("stateOf")(t), dl = X("dueLabel")(t), e = X("evById")(t.eventId);
  return '<button class="u2t' + (stt === "done" ? " done" : "") + '" data-open="' + esc(t.id) + '"><i class="d ' + stt + '"></i><span class="tt">' + esc(t.title) +
    (withEv && e ? "<small>" + esc(e.name) + "</small>" : "") + "</span>" + X("av")(t.pic, "s") + '<span class="ds ' + dl.c + '">' + esc(dl.s && dl.c ? dl.s : dl.t) + "</span></button>";
}
function overview(){
  var esc = X("esc"), E = fyEvents(), live = E.filter(function(e){ return /prep|now|after/.test(X("phase")(e)) && e.state !== "Huỷ"; });
  var all = [], meP = X("me")(); live.forEach(function(e){ all = all.concat(X("tasksOf")(e.id)); });
  var s = X("stat")(all), now = Date.now(), f7 = (X("S").D.files || []).filter(function(f){ return now - X("tsOf")(f.at) < 7 * 864e5 && E.some(function(e){ return e.id === f.eventId; }); }).length;
  var tabs = [["ov", "Tổng quan"], ["todo", "Cần xử lý", s.over + s.wait + s.none], ["mine", "Việc của tôi"], ["ppl", "Theo người"]];
  var h = '<div class="u2ph"><h2>Sự kiện FY68</h2><p>' + E.length + " sự kiện" + (st.f === "live" ? " đang theo dõi" : st.f === "mine" ? " tôi tham gia" : " trong FY68") + " · 09/2026 → 08/2027" + (X("S").loadedAt ? " · đọc lúc " + new Date(X("S").loadedAt).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) : "") + "</p></div>";
  h += '<div class="u2pb"><div class="u2tabs">' + tabs.map(function(t){ return '<button data-u2="rt:' + t[0] + '" aria-pressed="' + (st.rt === t[0]) + '">' + t[1] + (t[2] ? '<span class="n">' + t[2] + "</span>" : "") + "</button>"; }).join("") + "</div>";
  if (st.rt === "todo"){
    var L = []; live.forEach(function(e){ X("leafs")(e.id).forEach(function(t){ var k = X("stateOf")(t); if (k === "over" || t.status === "Chờ duyệt" || (!t.pic && !/done|skip/.test(k))) L.push(t); }); });
    L.sort(X("byDue"));
    var grp = [["Quá hạn", L.filter(function(t){ return X("stateOf")(t) === "over"; })], ["Chờ duyệt", L.filter(function(t){ return t.status === "Chờ duyệt" && X("stateOf")(t) !== "over"; })], ["Chưa giao người", L.filter(function(t){ return !t.pic && X("stateOf")(t) !== "over" && t.status !== "Chờ duyệt"; })]];
    grp.forEach(function(g){ if (!g[1].length) return; h += '<div class="u2h">' + g[0] + "<small>" + g[1].length + ' việc</small></div><div class="u2g">' + g[1].slice(0, 30).map(function(t){ return taskRow(t, true); }).join("") + "</div>"; });
    if (!L.length) h += '<p class="small muted">Không có việc quá hạn, chờ duyệt hay chưa giao.</p>';
    return h + foot() + "</div>";
  }
  if (st.rt === "mine"){
    var M = []; E.forEach(function(e){ X("leafs")(e.id).forEach(function(t){ if (t.pic === meP && !/done|skip/.test(X("stateOf")(t))) M.push(t); }); }); M.sort(X("byDue"));
    h += '<div class="u2h">Việc của tôi<small>' + M.length + " việc chưa xong · bấm 1 việc để nộp kết quả</small></div>" + (M.length ? '<div class="u2g">' + M.map(function(t){ return taskRow(t, true); }).join("") + "</div>" : '<p class="small muted">Bạn không có việc nào đang mở.</p>');
    return h + foot() + "</div>";
  }
  if (st.rt === "ppl"){
    var P = {}; live.forEach(function(e){ X("leafs")(e.id).forEach(function(t){ var k = X("stateOf")(t); if (/done|skip/.test(k) || !t.pic) return; var p = P[t.pic] = P[t.pic] || { n: 0, o: 0 }; p.n++; if (k === "over") p.o++; }); });
    var PL = Object.keys(P).sort(function(a, b){ return P[b].n - P[a].n; }), mx = PL.length ? P[PL[0]].n : 1;
    h += '<div class="u2h">Việc đang mở theo người<small>đỏ = quá hạn</small></div><ul class="u2rk">' + PL.map(function(p, i){
      return '<li><a href="javascript:void 0" style="cursor:default"><span class="no">' + (i + 1) + '</span><span class="nm">' + esc(p) + '</span><span class="v">' + P[p].n + "<small>" + (P[p].o ? '<b style="color:var(--crit)">' + P[p].o + " trễ</b>" : "việc") + '</small></span><span class="br"><i style="width:' + (P[p].n / mx * 100) + '%;background:var(--blue)"></i><i style="width:' + (P[p].o / mx * 100) + '%;background:var(--crit)"></i></span></a></li>'; }).join("") + "</ul>";
    return h + foot() + "</div>";
  }
  var up30 = live.filter(function(e){ var d = X("d0")(e.start); return d && (d - X("TODAY")) / 864e5 <= 30 && (d - X("TODAY")) / 864e5 >= 0; }).length;
  h += '<div class="u2k">' + kcard("", live.length, "Đang theo dõi · " + up30 + " trong 30 ngày", "f:live") + kcard("", s.pct + '%<small> / ' + s.planPct + "%</small>", "Tiến độ chung / kế hoạch") +
    kcard(s.over ? "crit" : "", s.over, "Việc quá hạn", "rt:todo") + kcard(s.wait ? "wait" : "", s.wait, "Chờ Owner duyệt", "rt:todo") + kcard(s.none ? "warn" : "", s.none, "Chưa giao người", "rt:todo") + kcard("", f7, "Ấn phẩm nộp 7 ngày") + "</div>";
  var R = live.slice().sort(function(a, b){ var o = { crit: 0, warn: 1, ok: 2, mut: 3 }; var x = o[X("health")(a).k] - o[X("health")(b).k]; return x || (a.start < b.start ? -1 : 1); });
  h += '<div class="u2h">Sự kiện theo tiến độ<small>vạch đen = phần lẽ ra đã xong đến hôm nay</small></div><ul class="u2rk">' + R.slice(0, 15).map(evRow).join("") + "</ul>";
  if (!R.length) h += '<p class="small muted">Chưa có sự kiện đang theo dõi.</p>';
  var T = {}; E.forEach(function(e){ var k = X("tc")(e.type); T[k] = (T[k] || 0) + 1; });
  var TN = { exh: "Triển lãm", ws: "Workshop", sem: "Hội thảo", web: "Webinar", oth: "Khác" }, TK = Object.keys(T).sort(function(a, b){ return T[b] - T[a]; });
  if (TK.length) h += '<div class="u2h">Theo loại sự kiện<small>' + E.length + ' sự kiện FY68</small></div><div class="u2st"><div class="bar2">' + TK.map(function(k){ return '<i style="width:' + (T[k] / E.length * 100) + "%;background:" + TYC[k] + '"></i>'; }).join("") + "</div>" +
    TK.map(function(k){ return '<div class="rw"><span><i style="background:' + TYC[k] + '"></i>' + TN[k] + "</span><b>" + T[k] + "</b></div>"; }).join("") + "</div>";
  return h + foot() + "</div>";
}
function foot(){
  var S = X("S"), smp = S.D.events.filter(function(e){ return e.sample; }).length;
  return '<div class="u2foot"><span>Giao diện thử nghiệm (kiểu Tender Map)</span><a href="?ui=1' + location.hash + '">Về giao diện cũ</a>' +
    (smp ? '<button data-act="togglesample">' + (S.hideSample ? "Hiện" : "Ẩn") + " " + smp + " sự kiện mẫu</button>" : "") + "</div>";
}
function eventPanel(e){
  var esc = X("esc"), S = X("S"), ts = X("tasksOf")(e.id), s = X("stat")(ts), hl = X("health")(e, s), dy = X("dday")(e), boss = X("canEv")(e), P = X("people")();
  var rank = fyEvents().indexOf(e);
  var h = '<div class="u2ph"><h2><a class="u2back" href="#dash" title="Về FY68" aria-label="Về FY68">‹</a>' + (rank >= 0 ? "<em>#" + (rank + 1) + "</em>" : "") + "<span>" + esc(e.name) + "</span></h2><p>" +
    esc([X("evDates")(e) + (e.start ? "/" + e.start.slice(0, 4) : ""), e.type, e.city, e.venue].filter(Boolean).join(" · ")) + (e.sample ? ' · <b style="color:#B88A00">MẪU</b>' : "") + "</p></div><div class=\"u2pb\">";
  var over = X("leafs")(e.id).filter(function(t){ return X("stateOf")(t) === "over"; }).sort(X("byDue")), wait = X("leafs")(e.id).filter(function(t){ return t.status === "Chờ duyệt"; });
  if (over.length) h += '<div class="u2al crit"><b>' + over.length + " việc quá hạn</b>" + over.slice(0, 3).map(function(t){ return '<a href="javascript:void 0" data-open="' + esc(t.id) + '">' + esc(t.title) + "</a> (" + esc(t.pic || "chưa giao") + ")"; }).join(" · ") + (over.length > 3 ? " · …" : "") + "</div>";
  if (wait.length) h += '<div class="u2al wait"><b>' + wait.length + " việc chờ duyệt</b>" + wait.slice(0, 3).map(function(t){ return '<a href="javascript:void 0" data-open="' + esc(t.id) + '">' + esc(t.title) + "</a>"; }).join(" · ") + "</div>";
  if (s.msLate) h += '<div class="u2al warn"><b>Trễ mốc quan trọng</b>' + s.msLate + " mốc đã qua hạn mà chưa xong.</div>";
  var tgt = +e.target || 0, act = +e.actual || 0;
  h += '<div class="u2k">' + kcard(hl.k === "crit" ? "crit" : hl.k === "warn" ? "warn" : "", s.pct + "%<small> / " + s.planPct + "%</small>", s.done + "/" + s.total + " việc · " + hl.t, "tab:progress") +
    kcard("", esc(dy.big), esc(dy.txt)) + kcard("", (act ? act + "/" : "") + (tgt || "—"), act ? "Khách thực tế / mục tiêu" : "Khách mục tiêu") + "</div>";
  h += '<div class="u2h" style="margin-top:4px">Đội sự kiện</div><div class="u2team">' + (S.D.roles || ["Owner", "Digital", "Design", "Trade", "Sales"]).map(function(r){
    var v = e[r] || "", lab = X("ROLE_VI")[r] || r;
    if (boss && (r !== "Owner" || S.me.manager)) return "<label>" + X("av")(v, "s") + "<span style=\"min-width:0\"><small>" + esc(lab) + '</small><select data-team="' + r + '"><option value="">Chưa chọn</option>' + P.concat(v && P.indexOf(v) < 0 ? [v] : []).map(function(p){ return "<option" + (p === v ? " selected" : "") + ">" + esc(p) + "</option>"; }).join("") + "</select></span></label>";
    return "<span>" + X("av")(v, "s") + "<span><small>" + esc(lab) + "</small><b>" + esc(v || "Chưa chọn") + "</b></span></span>"; }).join("") + "</div>";
  h += '<div class="u2acts">' + (boss ? '<button class="btn pri sm" data-act="quickadd">' + X("ic")("plus") + 'Thêm việc</button><button class="btn sm" data-act="remindteam">' + X("ic")("mail") + "Nhắc cả đội</button>" : "") +
    (boss ? '<button class="btn sm" data-act="editevent">' + X("ic")("edit") + "Sửa thông tin</button>" : "") + (e.planUrl ? '<a class="btn sm" href="' + esc(e.planUrl) + '" target="_blank" rel="noopener">' + X("ic")("out") + "File kế hoạch</a>" : "") + "</div>";
  var files = S.D.files.filter(function(f){ return f.eventId === e.id; }), cm = (X("IX").cmE[e.id] || []);
  var TABS = [["progress", "Việc", s.total], ["files", "Ấn phẩm", files.length], ["mkt", "MKT Offline · Online", X("mkCount")(e)], ["talk", "Thảo luận", cm.length], ["notes", "Biên bản", 0], ["plan", "Kế hoạch", 0], ["info", "Thông tin", 0], ["log", "Nhật ký", 0]];
  var tab = TABS.some(function(t){ return t[0] === S.tab; }) ? S.tab : "progress";
  h += '<div class="u2tabs" style="margin-top:16px">' + TABS.map(function(t){ return '<button data-u2="tab:' + t[0] + '" aria-pressed="' + (tab === t[0]) + '">' + t[1] + (t[2] ? '<span class="n">' + t[2] + "</span>" : "") + "</button>"; }).join("") + "</div>";
  if (tab === "progress"){
    h += '<div class="u2tabs">' + [["open", "Chưa xong"], ["all", "Tất cả"], ["mine", "Của tôi"]].map(function(t){ return '<button data-u2="tf:' + t[0] + '" aria-pressed="' + (st.tf === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</div>";
    var bigs = ts.filter(function(t){ return !t.parentId; }).sort(function(a, b){ return (parseInt(a.group) || 99) - (parseInt(b.group) || 99) || (+a.order || 0) - (+b.order || 0); }), any = false;
    bigs.forEach(function(b){
      var subs = X("subsOf")(b), sb = X("stat")(subs.length ? subs : [b]), L = (subs.length ? subs : [b]).filter(function(t){ var k = X("stateOf")(t); return st.tf === "all" || (st.tf === "open" && !/done|skip/.test(k)) || (st.tf === "mine" && t.pic === X("me")()); });
      if (!L.length && st.tf !== "all") return; any = true;
      h += '<section class="u2g"><header><span style="min-width:0"><b>' + esc(X("shortG")(b.title || b.group)) + "</b><small>" + esc(b.pic || "chưa giao") + '</small></span><span class="br' + (sb.over ? " crit" : "") + '"><i style="width:' + sb.pct + '%"></i></span><span class="n">' + sb.done + "/" + sb.total + (sb.over ? ' <b style="color:var(--crit)">· ' + sb.over + " trễ</b>" : "") + "</span></header>" + L.map(function(t){ return taskRow(t); }).join("") + "</section>";
    });
    if (!any) h += '<p class="small muted">' + (st.tf === "mine" ? "Bạn chưa có việc trong sự kiện này." : st.tf === "open" ? "Mọi việc đã xong." : "Sự kiện chưa có việc.") + "</p>";
  } else if (tab === "info"){
    h += '<dl class="u2kv">' + [["Loại", e.type], ["Thời gian", X("evDates")(e) + (e.start ? "/" + e.start.slice(0, 4) : "")], ["Thành phố", e.city], ["Địa điểm", e.venue], ["Đơn vị tổ chức", e.organizer], ["Sản phẩm", e.products], ["Mục đích", e.purpose], ["Đối tượng", e.audience], ["KPI", e.kpi], ["Ngân sách", X("money")(e.budgetPlan)], ["Giai đoạn", X("PHASE_VI")[X("phase")(e)]], ["Ghi chú", e.note]]
      .filter(function(r){ return r[1]; }).map(function(r){ return "<dt>" + r[0] + "</dt><dd>" + X("linkify")(String(r[1])) + "</dd>"; }).join("") + "</dl>";
  } else {
    h += tab === "files" ? X("pFiles")(e, files) : tab === "mkt" ? X("pMkt")(e) : tab === "talk" ? X("pTalk")(e) : tab === "notes" ? X("pNotes")(e) : tab === "plan" ? X("pPlan")(e, (S.D.plan || {})[e.id]) : X("pLog")(e);
  }
  return h + foot() + "</div>";
}

function top(){
  var S = X("S"), esc = X("esc"), ic = X("ic"), N = X("notes")(), seen = +LSG("eh_seen_" + X("me")()) || 0, unseen = N.filter(function(n){ return X("tsOf")(n.at) > seen; }).length;
  return (window.EH_DEMO ? '<div class="demo-note">Bản xem trước — dữ liệu mẫu, thao tác chỉ lưu trên máy này, không gửi email thật.</div>' : "") +
    '<header class="u2top"><a class="u2brand" href="#dash"><i>S<b>·</b></i><span>Sự kiện MKT</span></a>' +
    '<label class="u2srch">' + ic("search") + '<input id="u2q" type="search" placeholder="Tìm sự kiện, thành phố, Owner…" value="' + esc(st.q) + '" autocomplete="off"></label>' +
    '<span class="u2seg">' + [["tl", "Dòng thời gian"], ["cal", "Lịch tháng"]].map(function(t){ return '<button data-u2="left:' + t[0] + '" aria-pressed="' + (st.left === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</span>" +
    '<span class="u2seg lt">' + [["fy", "Cả FY68"], ["live", "Đang theo dõi"], ["mine", "Tôi tham gia"]].map(function(t){ return '<button data-u2="f:' + t[0] + '" aria-pressed="' + (st.f === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</span>" +
    '<span class="u2sp"></span>' +
    '<span style="position:relative"><button class="u2ib" data-act="bell" title="Thông báo" aria-label="Thông báo">' + ic("bell") + (unseen ? '<span class="badge">' + Math.min(unseen, 99) + "</span>" : "") + "</button>" + (S.pop === "bell" ? X("bellPop")(N, seen) : "") + "</span>" +
    (S.me && S.me.manager ? '<button class="u2ib" data-act="settings" title="Cài đặt" aria-label="Cài đặt">' + ic("gear") + "</button>" : "") +
    '<button class="u2ib" id="reload" title="Tải lại dữ liệu" aria-label="Tải lại">' + ic("refresh") + "</button>" +
    (S.me && S.me.manager ? '<button class="u2pri" data-act="newevent">' + ic("plus") + "Sự kiện mới</button>" : "") +
    (S.me ? '<span class="u2me">' + X("av")(S.me.pic) + "<span>" + esc(S.me.pic) + "<br><small>" + (S.me.manager ? "Quản lý" : "Thành viên") + "</small></span></span>" : "") + "</header>";
}

U.render = function(){
  var S = X("S"); if (!S.D) return false;
  css(); document.body.classList.add("u2");
  var tl = document.querySelector(".u2tl"), sx = tl ? tl.scrollLeft : null, sy = tl ? tl.scrollTop : 0, pan = document.querySelector(".u2pan"), py = pan ? pan.scrollTop : 0;
  var dsc = document.querySelector(".dr-b") ? document.querySelector(".dr-b").scrollTop : 0, ae = document.activeElement, focusId = ae && ae.id, sel0 = ae && ae.selectionStart;
  if (S.view === "mine") st.rt = "mine";
  var e = S.view === "event" ? X("evById")(S.evId) : null, prevEv = U._ev; U._ev = e ? e.id : null;
  var left = st.left === "cal" ? '<div class="u2cal">' + X("vCal")() + "</div>" :
    '<div class="u2tl">' + timeline(e) + '</div><div class="u2ctl"><button data-u2="zin" title="Phóng to" aria-label="Phóng to">+</button><button data-u2="zout" title="Thu nhỏ" aria-label="Thu nhỏ">−</button><button data-u2="home" title="Về hôm nay" aria-label="Về hôm nay">⌂</button></div>' +
    '<div class="u2pill' + (e ? "" : " root") + '">' + (e ? '<a href="#dash">‹ FY68</a><span>' + X("esc")(e.name) + "</span>" : "<span>Toàn bộ FY68</span>") + "</div>" + legend();
  document.getElementById("app").innerHTML = top() + '<main class="u2main"><section class="u2map" aria-label="Dòng thời gian sự kiện">' + left + '</section><aside class="u2pan">' + (e ? eventPanel(e) : overview()) + "</aside></main>" +
    X("drawer")() + X("modal")() + X("lightbox")();
  tl = document.querySelector(".u2tl");
  if (tl){
    if (sx != null && prevEv === U._ev) { tl.style.scrollBehavior = "auto"; tl.scrollLeft = sx; tl.scrollTop = sy; tl.style.scrollBehavior = ""; }
    else if (e){ var r = tl.querySelector(".u2row.sel"); if (r){ tl.style.scrollBehavior = "auto"; var bar = r.querySelector(".u2bar"); tl.scrollLeft = Math.max(0, bar.offsetLeft - 120); tl.scrollTop = Math.max(0, r.offsetTop - tl.clientHeight / 3); tl.style.scrollBehavior = ""; } }
    else if (sx == null) home(true);
  }
  pan = document.querySelector(".u2pan"); if (pan && prevEv === U._ev) pan.scrollTop = py;
  if (document.querySelector(".dr-b")) document.querySelector(".dr-b").scrollTop = dsc;
  if (focusId && document.getElementById(focusId)){ var el = document.getElementById(focusId); el.focus(); if (sel0 != null && el.setSelectionRange) try { el.setSelectionRange(sel0, sel0); } catch(x){} }
  X("wireDrop")();
  return true;
};
function home(instant){
  var tl = document.querySelector(".u2tl"), t = document.querySelector(".u2today"); if (!tl) return;
  if (instant) tl.style.scrollBehavior = "auto";
  tl.scrollLeft = t ? Math.max(0, t.offsetLeft - tl.clientWidth * .25) : 0;
  if (instant) tl.style.scrollBehavior = "";
}
function rr(){ X("render")(); }
document.addEventListener("click", function(ev){
  var a = ev.target.closest("[data-u2]"); if (!a) return;
  var k = a.dataset.u2, v = k.split(":")[1];
  if (k === "zin" || k === "zout"){ var tl = document.querySelector(".u2tl"), c = tl ? (tl.scrollLeft + tl.clientWidth / 2) / tl.scrollWidth : .5;
    st.zoom = Math.max(1, Math.min(6, k === "zin" ? st.zoom * 1.6 : st.zoom / 1.6)); if (st.zoom < 1.05) st.zoom = 1; LSS("eh_u2_zoom", st.zoom); rr();
    tl = document.querySelector(".u2tl"); if (tl){ tl.style.scrollBehavior = "auto"; tl.scrollLeft = c * tl.scrollWidth - tl.clientWidth / 2; tl.style.scrollBehavior = ""; } return; }
  if (k === "home"){ home(); return; }
  if (k === "leg"){ st.leg = !st.leg; LSS("eh_u2_leg", st.leg ? "1" : "0"); rr(); return; }
  if (/^left:/.test(k)){ st.left = v; LSS("eh_u2_left", v); rr(); return; }
  if (/^f:/.test(k)){ st.f = v; LSS("eh_u2_f", v); if (X("S").view === "event") location.hash = "dash"; else rr(); return; }
  if (/^rt:/.test(k)){ st.rt = v; var S = X("S"); if (S.view === "mine" && v !== "mine") { history.replaceState(null, "", "#dash"); S.view = "dash"; } rr(); var p = document.querySelector(".u2pan"); if (p) p.scrollTop = 0; return; }
  if (/^tab:/.test(k)){ X("S").tab = v; rr(); return; }
  if (/^tf:/.test(k)){ st.tf = v; rr(); return; }
}, true);
document.addEventListener("input", function(ev){ if (ev.target.id === "u2q"){ st.q = ev.target.value; clearTimeout(U.qt); U.qt = setTimeout(rr, 200); } });
})();
