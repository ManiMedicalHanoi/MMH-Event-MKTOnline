/* Sự kiện MKT — CHẾ ĐỘ XEM TRƯỚC (index.html?demo=1): máy chủ giả lập trong trình duyệt, dữ liệu mẫu HƯ CẤU (không phải sự kiện / nhân sự thật).
   Cùng luật với backend MKT_EventHub.gs + MKT_EventHubPlus.gs: quyền theo Owner / quản lý / người phụ trách, việc cần bằng chứng phải nộp trước khi Xong,
   email giao việc / chờ duyệt / bình luận chỉ ghi vào danh sách "Email đã gửi" (không gửi thật).
   ?as=<tên> để xem như người khác (vd. ?demo=1&as=Đức Anh). window.EH_DEMO_DATA (nếu có) thay dữ liệu mẫu. */
(function(){
  var T0 = window.EH_TODAY ? new Date(window.EH_TODAY + "T00:00:00") : new Date(); T0 = new Date(T0.getFullYear(), T0.getMonth(), T0.getDate());
  var iso = function(d){ return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); };
  var add = function(n){ var d = new Date(T0); d.setDate(d.getDate() + n); return iso(d); };
  var now = function(){ var d = new Date(); return iso(d) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":00"; };
  var seq = 0, uid = function(p){ return p + (Date.now().toString(36) + (++seq)).toUpperCase(); };
  var IMG = "https://manimedicalhanoi.github.io/Training-Hub/media/brand/";
  var MGR = "Lan Anh", PEOPLE = ["Lan Anh", "Minh Khoa", "Đức Anh", "Hải Yến", "Quốc Bảo", "Thu Trang", "Văn Nam", "Ngọc Mai"];
  var MKT = ["Thu Trang", "Minh Khoa", "Đức Anh", "Hải Yến", "Ngọc Mai"], SALES = ["Quốc Bảo", "Văn Nam"];
  var TPL = [
    ["1. Kế hoạch & phê duyệt", "Owner", [["File kế hoạch tổng quan (Overview, nhân sự, checklist)", "Owner", "link", -30], ["Giám đốc duyệt kế hoạch + ngân sách", "Owner", "", -28]]],
    ["2. KOL & đối tác", "Owner", [["Hợp đồng KOL + lịch di chuyển", "Owner", "file", -30], ["Chia việc với NPP, Trường / Viện", "Owner", "", -30], ["Họp với NPP (agenda, nhân sự, bán hàng)", "Owner", "file", -3]]],
    ["3. Tuyển sinh", "Digital", [["Form đăng ký (khảo sát trước, đồng ý dữ liệu)", "Digital", "link", -30], ["Nhóm Zalo khách tham dự", "Digital", "link", -30], ["Sales / NPP gửi đủ thông tin khách đăng ký hộ", "Sales", "", -5], ["Rà soát danh sách khách trước sự kiện", "Digital", "file", -3]]],
    ["4. Truyền thông", "Digital", [["Bài đăng teaser", "Digital", "link", -14], ["Bài giới thiệu chương trình / KOL", "Digital", "link", -10], ["Bài đếm ngược", "Digital", "link", -3], ["Bài cảm ơn + ảnh recap", "Digital", "link", 1], ["Video recap highlight", "Digital", "link", 2]]],
    ["5. Thiết kế ấn phẩm", "Design", [["Key visual / poster sự kiện", "Design", "file", -21], ["Backdrop / vách gian hàng", "Design", "file", -10, "live"], ["Standee", "Design", "file", -10, "live"], ["Flyer / brochure / CTKM", "Design", "file", -10], ["Thẻ đeo, bảng tên, biểu mẫu check-in", "Design", "file", -7, "live"]]],
    ["6. Hậu cần & gian hàng", "Trade", [["Đặt địa điểm / gian hàng", "Trade", "file", -30], ["Chốt setup, tea break, kỹ thuật", "Trade", "", -14], ["Đồ MKT + đồ thực hành + quà tạm ứng NPP", "Trade", "", -10], ["Set up hoàn thiện (ảnh gian hàng)", "Trade", "image", -1]], "live"],
    ["7. Ngày D", "Owner", [["Check-in có chữ ký (webinar: báo cáo Zoom)", "Digital", "file", 0], ["Ảnh / video sự kiện", "Digital", "image", 0], ["Khảo sát QR trước bế mạc", "Digital", "link", 0], ["Bán hàng tại sự kiện", "Sales", "", 0, "live"]]],
    ["8. Sau sự kiện", "Owner", [["Đối chiếu dữ liệu khách ⇒ CUSTOMER LIST", "Digital", "link", 3], ["Kiểm kê quà tạm ứng NPP", "Trade", "", 3, "live"], ["Báo cáo sự kiện", "Owner", "file", 5], ["Email báo cáo toàn MMH", "Owner", "", 7]]],
    ["9. Follow-up", "Sales", [["Liên hệ lần đầu khách quan tâm", "Sales", "", 5], ["Kết quả chuyển đổi đơn hàng", "Sales", "", 20]]]
  ];
  var EVS = [
    { name: "Workshop Composite thẩm mỹ răng trước (mẫu)", s: 6, n: 0, type: "Workshop", city: "Hà Nội", venue: "Phòng hội thảo tầng 5 (mẫu)", products: "Composite, MANI Bond", target: 40, budget: 45e6, cover: "ws-comp-1.jpg", owner: "Lan Anh",
      purpose: "Giới thiệu bộ Composite MANI cho phục hình răng trước, tăng khách dùng thử", audience: "Bác sĩ phục hình, nha khoa thẩm mỹ", kpi: "40 khách tham dự · 15 khách mua thử" },
    { name: "Webinar nội nha với trâm JIZAI (mẫu)", s: 13, n: 0, type: "Webinar", city: "Online", venue: "Zoom Webinar", products: "JIZAI", target: 150, budget: 8e6, cover: "ws-jizai-3.jpg", owner: "Thu Trang",
      purpose: "Chia sẻ quy trình tạo hình ống tủy với JIZAI", audience: "Bác sĩ nội nha toàn quốc", kpi: "150 người đăng ký · 90 người xem trực tiếp" },
    { name: "Triển lãm Răng Hàm Mặt miền Bắc (mẫu)", s: 20, n: 2, type: "Triển lãm", city: "Hải Phòng", venue: "Trung tâm Hội nghị (mẫu) · gian B12", products: "JIZAI, Composite, Bleach'N Shine, #1559L", target: 300, budget: 180e6, cover: "carbide-app.jpg", owner: "Lan Anh",
      purpose: "Gian hàng 18m², bán hàng cùng NPP, thu thông tin khách", audience: "Bác sĩ RHM miền Bắc", kpi: "300 lượt ghé gian hàng · 120 khách để lại thông tin" },
    { name: "Hội thảo phẫu thuật nhãn khoa (mẫu)", s: 41, n: 1, type: "Hội thảo", city: "Đà Nẵng", venue: "Khách sạn (chờ chốt)", products: "Ophthalmic Knife, Manipler", target: 80, budget: 90e6, cover: "knife-hero.jpg", state: "Chờ chốt", owner: "Thu Trang", noDesign: true,
      purpose: "Giới thiệu dao nhãn khoa MANI cho bác sĩ phẫu thuật", audience: "Bác sĩ nhãn khoa miền Trung", kpi: "80 khách · 10 bệnh viện dùng thử" },
    { name: "JIZAI Journey — hands-on (mẫu)", s: 70, n: 1, type: "Workshop", city: "TP.HCM", venue: "Trung tâm đào tạo (mẫu)", products: "JIZAI", target: 30, budget: 60e6, cover: "ws-jizai-1.jpg", owner: "Minh Khoa",
      purpose: "Thực hành tạo hình ống tủy trên răng nhựa", audience: "Bác sĩ nội nha", kpi: "30 học viên · 20 bộ JIZAI bán ra" },
    { name: "Hội nghị Phục hình thẩm mỹ (mẫu)", s: -18, n: 1, type: "Hội thảo", city: "Hà Nội", venue: "Khách sạn (mẫu)", products: "Composite, Dia-Burs", target: 120, actual: 134, budget: 70e6, spent: 64.5e6, cover: "ws-restorative.jpg", owner: "Lan Anh",
      purpose: "Báo cáo khoa học + gian hàng", audience: "Bác sĩ phục hình", kpi: "120 khách · 30 đơn hàng" },
    { name: "Webinar Bleach'N Shine (mẫu)", s: -35, n: 0, type: "Webinar", city: "Online", venue: "Zoom Webinar", products: "Bleach'N Shine", target: 100, actual: 96, budget: 6e6, spent: 5.2e6, cover: "bleach-shine.png", owner: "Thu Trang",
      purpose: "Giới thiệu sản phẩm tẩy trắng", audience: "Bác sĩ nha khoa thẩm mỹ", kpi: "100 người xem" },
    { name: "Hội thảo ghim da Manipler cấp tốc (mẫu)", s: 9, n: 0, type: "Hội thảo", city: "Hà Nội", venue: "Bệnh viện (mẫu)", products: "Manipler", target: 50, budget: 25e6, cover: "manipler-4.png", owner: "Lan Anh", late: true,
      purpose: "Sự kiện chốt gấp theo lời mời của bệnh viện — minh hoạ lập kế hoạch muộn", audience: "Bác sĩ ngoại khoa", kpi: "50 khách" }
  ];
  var PICS = [[/key visual|poster/i, ["ws-comp-1.jpg", "ws-jizai-1.jpg", "ws-led-hn.jpg", "ws-restorative.jpg", "ws-led-vp.jpg", "knife-hero.jpg", "bleach-shine.png"]], [/backdrop|vách/i, ["ws-jizai-2.jpg"]], [/standee/i, ["standee.png"]],
    [/flyer|brochure|ctkm/i, ["line-01.png", "line-02.png", "diabur-ipr.png", "line-04.png"]], [/thẻ đeo|bảng tên/i, ["catalog-p3.png"]], [/set up|ảnh gian hàng/i, ["ws-jizai-kit.jpg"]], [/ảnh \/ video/i, ["ws-jizai-3.jpg", "ws-comp-2.jpg", "ws-comp-3.jpg"]],
    [/teaser|giới thiệu chương|đếm ngược|cảm ơn/i, ["line-03.png", "line-05.png", "line-06.png", "ws-comp-3.jpg", "comp-nano.png", "mani-bond.png"]], [/video recap/i, ["ws-jizai-3.jpg"]]];
  var imgFor = function(t, i){ for (var k = 0; k < PICS.length; k++) if (PICS[k][0].test(t)) return PICS[k][1][i % PICS[k][1].length]; return ""; };
  var ddiff = function(a, b){ return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 864e5); };
  var by = function(list, k, v){ return list.filter(function(x){ return x[k] === v; })[0]; };
  /* v2.4 — giống backend MKT_EventHubFlow.gs */
  var nrm = function(x){ return String(x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, " ").trim(); };
  var wk0 = function(d){ var x = new Date(d + "T00:00:00"); x.setDate(x.getDate() - (x.getDay() + 6) % 7); return iso(x); };
  function parseDue(s0, base){
    var b = new Date(base + "T00:00:00"), m = /(^|[^\d])(\d{1,2})[\/.\-](\d{1,2})(?:[\/.\-](\d{2,4}))?(?!\d)/.exec(s0);
    if (m){ var dd0 = +m[2], mo = +m[3] - 1, y = m[4] ? (+m[4] < 100 ? 2000 + +m[4] : +m[4]) : b.getFullYear(); if (dd0 >= 1 && dd0 <= 31 && mo >= 0 && mo < 12){ var x = new Date(y, mo, dd0); if (!m[4] && x < b) x = new Date(y + 1, mo, dd0); return iso(x); } }
    var t = " " + nrm(s0) + " ", next = / tuan sau | tuan toi /.test(t), dow = -1, W = { hai: 1, ba: 2, tu: 3, nam: 4, sau: 5, bay: 6 }, w1 = / (?:thu|t) ?([2-7]) /.exec(t), w2 = / thu (hai|ba|tu|nam|sau|bay) /.exec(t), r = new Date(b);
    if (w1) dow = +w1[1] - 1; else if (w2) dow = W[w2[1]]; else if (/ chu nhat /.test(t)) dow = 0;
    if (dow >= 0){ r.setDate(r.getDate() + ((dow - b.getDay() + 7) % 7 || 7)); if (next && wk0(iso(r)) === wk0(base)) r.setDate(r.getDate() + 7); return iso(r); }
    if (/ ngay mai /.test(t)){ r.setDate(r.getDate() + 1); return iso(r); }
    if (next){ r.setDate(r.getDate() + 7); return iso(r); }
    return "";
  }
  function workAdd(base, n){ var x = new Date(base + "T00:00:00"), k = 0; while (k < n){ x.setDate(x.getDate() + 1); if (x.getDay() && x.getDay() !== 6) k++; } return iso(x); }
  function noteTasks(D, ev, nt, who){
    var lines = String(nt.actions || "").split(/\n/).map(function(x){ return x.replace(/^[\s•\-*+·–\d.)]+/, "").trim(); }).filter(function(x){ return x.length > 1; });
    var mine = D.tasks.filter(function(t){ return t.noteId === nt.id; }), byK = {}; mine.forEach(function(t){ byK[nrm(t.title)] = t; });
    if (!lines.length && !mine.length) return [];
    var par = D.tasks.filter(function(t){ return t.eventId === ev.id && !t.parentId && nrm(t.title) === "viec sau hop"; })[0], out = [], seen = {};
    if (!par && lines.length){ var n0 = Math.max.apply(null, [0].concat(D.tasks.filter(function(t){ return t.eventId === ev.id && !t.parentId; }).map(function(t){ return parseInt(t.group) || 0; }))) + 1;
      par = { id: uid("T"), eventId: ev.id, parentId: "", group: n0 + ". Việc sau họp", title: "Việc sau họp", role: "Owner", pic: ev.Owner || "", due: "", status: "Chưa làm", proof: "", note: "", order: 900, sample: ev.sample }; D.tasks.push(par); out.push(par); }
    var NM = PEOPLE.slice().sort(function(a, b){ return b.length - a.length; });
    lines.forEach(function(line){
      var w = NM.filter(function(p){ return line.toLowerCase().indexOf("@" + p.toLowerCase()) >= 0; })[0] || "", ti = line;
      if (w){ var i = ti.toLowerCase().indexOf("@" + w.toLowerCase()); ti = (ti.slice(0, i) + ti.slice(i + w.length + 1)).replace(/^[\s:,\-–]+/, "").replace(/\s{2,}/g, " ").trim(); }
      ti = ti || line; ti = ti.charAt(0).toUpperCase() + ti.slice(1);
      var k = nrm(ti); if (!k || seen[k]) return; seen[k] = 1;
      var pd = parseDue(ti, nt.date), due = pd || workAdd(nt.date, 3); if (!pd && due < iso(T0)) due = iso(T0);
      var ex = byK[k]; if (ex){ if (w && w !== ex.pic && ex.status !== "Xong"){ ex.pic = w; out.push(ex); if (typeof mail === "function") mail(w, "assign", ev, ex, "Việc mới: " + ex.title); } if (ex.status === "Bỏ qua" && /Đã bỏ khỏi biên bản/.test(ex.note)){ ex.status = "Chưa làm"; ex.note = ""; out.push(ex); } return; }
      var t = { id: uid("T"), eventId: ev.id, parentId: par.id, group: par.group, title: ti, role: "Owner", pic: w || ev.Owner || "", due: due, dueManual: "x", status: "Chưa làm", proof: "", note: "Từ biên bản họp " + nt.date.slice(8) + "/" + nt.date.slice(5, 7) + " · " + nt.title, order: 901, noteId: nt.id, sample: ev.sample, createdBy: who };
      D.tasks.push(t); out.push(t); if (t.pic && typeof mail === "function") mail(t.pic, "assign", ev, t, "Việc mới: " + t.title);
    });
    mine.forEach(function(t){ if (seen[nrm(t.title)] || /Xong|Bỏ qua/.test(t.status)) return; t.status = "Bỏ qua"; t.note = "Đã bỏ khỏi biên bản họp"; out.push(t); });
    return out;
  }
  function compress(e, list){
    var today = iso(T0), late = list.filter(function(o){ return o.parentId && o.due && o.due < today && !/Xong|Bỏ qua/.test(o.status); }); if (!late.length) return 0;
    var left = Math.max(0, ddiff(today, e.start)), room = Math.max(0, Math.floor((left - 1) / 3)), min = late.map(function(o){ return o.due; }).sort()[0], span = Math.max(1, ddiff(min, today));
    late.forEach(function(o){ var old = o.due, n = room ? Math.round(ddiff(min, old) / span * room) : 0; o.due = add(n); o.dueManual = "nén"; o.note = "Lập kế hoạch muộn — hạn theo mẫu " + old.slice(8) + "/" + old.slice(5, 7) + " đã qua, dồn lại"; });
    return Math.max(1, left);
  }
  function tasksFor(e, rnd, sample){
    var out = [], order = 0, live = e.type !== "Webinar", past = (e.end || e.start) < iso(T0);
    TPL.forEach(function(g){
      if (g[3] === "live" && !live) return;
      var big = { id: uid("T"), eventId: e.id, parentId: "", group: g[0], title: g[0].replace(/^\d+\.\s*/, ""), role: g[1], pic: e[g[1]] || "", due: "", status: "Chưa làm", proof: "", note: "", order: ++order, sample: sample ? "x" : "" };
      out.push(big);
      g[2].forEach(function(s){
        if (s[4] === "live" && !live) return;
        var role = s[1], due = s[3] <= 0 ? add(ddiff(iso(T0), e.start) + s[3]) : add(ddiff(iso(T0), e.end || e.start) + Math.ceil(s[3] * 1.4));
        out.push({ id: uid("T"), eventId: e.id, parentId: big.id, group: g[0], title: s[0], role: role, pic: e[role] || "", due: due, offset: s[3], status: "Chưa làm", proof: s[2], note: "", order: ++order, sample: sample ? "x" : "",
                   hint: s[2] === "link" ? "Dán link kết quả" : s[2] === "image" ? "Ảnh chụp" : s[2] === "file" ? "PDF hoặc ảnh" : "" });
      });
    });
    if (!rnd) return out;
    out.forEach(function(t){
      if (!t.parentId) return;
      var dd = ddiff(iso(T0), t.due), r = rnd(), st;
      if (past) st = (/chuyển đổi/i.test(t.title) && r < .5) ? "Đang làm" : "Xong";
      else if (dd < -3) st = r < .9 ? "Xong" : "Đang làm";
      else if (dd < 0) st = r < .55 ? "Xong" : r < .85 ? "Đang làm" : "Chưa làm";
      else if (dd <= 4) st = r < .2 ? "Xong" : r < .55 ? "Chờ duyệt" : r < .82 ? "Đang làm" : "Chưa làm";
      else if (dd <= 10) st = r < .15 ? "Xong" : r < .4 ? "Đang làm" : "Chưa làm";
      else st = r < .06 ? "Đang làm" : "Chưa làm";
      if (st === "Chờ duyệt" && !t.proof) st = "Đang làm";
      t.status = st; if (r > .93 && st !== "Xong") t.priority = "Cao";
    });
    return out;
  }
  function make(){
    var seed = 11, rnd = function(){ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    var D = { events: [], tasks: [], files: [], comments: [], meetings: [], checkins: [], log: [], notify: [], plan: {}, people: PEOPLE.map(function(p){ return { pic: p }; }), roles: ["Owner", "Digital", "Design", "Trade", "Sales"],
              status: ["Chưa làm", "Đang làm", "Pending", "Chờ duyệt", "Xong", "Bỏ qua"], groups: TPL.map(function(g){ return { group: g[0], role: g[1] }; }),
              cfg: { mailAssign: true, mailReview: true, mailComment: true, remind: true, remindHour: 8, before: 2, ownerDigest: true, weekly: true, escalate: true, escDays: 3, checkin: true }, book: "", sync: { at: Date.now(), msg: "Bản xem trước — dữ liệu mẫu" } };
    EVS.forEach(function(x, i){
      var e = { id: "EVMAU-" + (i + 1), name: x.name, start: add(x.s), end: add(x.s + x.n), type: x.type, city: x.city, venue: x.venue, organizer: "MMH", purpose: x.purpose, audience: x.audience, scale: x.target + " khách", kpi: x.kpi,
                products: x.products, state: x.state || "", follow: "Có", src: "SAMPLE", cover: x.cover, target: x.target, actual: x.actual || "", budgetPlan: x.budget, budgetActual: x.spent || "", npp: "NPP khu vực (mẫu)", sample: "x", updatedAt: now(), updatedBy: "Hệ thống",
                Owner: x.owner, Digital: MKT[(i + 1) % MKT.length], Design: x.noDesign ? "" : "Đức Anh", Trade: x.type === "Webinar" ? "" : "Hải Yến", Sales: SALES[i % 2] };
      D.events.push(e);
      var ts = tasksFor(e, rnd, true);
      ts.forEach(function(t, j){
        if (!(t.status === "Xong" || t.status === "Chờ duyệt")) return;
        var dn = new Date(t.due + "T00:00:00"); dn.setDate(dn.getDate() - Math.floor(rnd() * 3)); if (dn > T0) dn = new Date(T0);
        var at = iso(dn) + "T" + ("0" + (9 + Math.floor(rnd() * 8))).slice(-2) + ":" + ("0" + Math.floor(rnd() * 60)).slice(-2) + ":00";
        if (t.status === "Xong") t.doneAt = at; t.updatedAt = at; t.updatedBy = t.pic || e.Owner;
        D.log.push({ at: at, by: t.pic || e.Owner, action: "Cập nhật việc", eventId: e.id, taskId: t.id, text: t.title + " · status → " + t.status });
        if (!t.proof) return;
        var im = imgFor(t.title, i + j), f = { id: "FMAU-" + i + "-" + j, eventId: e.id, taskId: t.id, by: t.pic || e.Owner, at: at, sample: "x" };
        if (t.proof === "link"){ f.kind = "link";
          if (/form/i.test(t.title)){ f.name = "Google Form đăng ký (mẫu)"; f.url = "https://docs.google.com/forms/"; }
          else if (/zalo/i.test(t.title)){ f.name = "Nhóm Zalo khách tham dự (mẫu)"; f.url = "https://zalo.me/"; }
          else if (/video/i.test(t.title)){ f.name = "Video recap (mẫu)"; f.url = IMG + (im || "ws-jizai-3.jpg"); f.thumb = f.url; }
          else if (/kế hoạch|đối chiếu|khảo sát/i.test(t.title)){ f.name = /khảo sát/i.test(t.title) ? "Kết quả khảo sát QR (mẫu)" : "Google Sheet (mẫu)"; f.url = "https://docs.google.com/spreadsheets/"; }
          else { f.name = "Bài đăng Facebook (mẫu)"; f.url = IMG + (im || "line-03.png"); f.thumb = f.url; } }
        else if (im){ f.kind = "image"; f.mime = /png$/.test(im) ? "image/png" : "image/jpeg"; f.url = IMG + im; f.thumb = f.url; f.name = t.title.split(/[\/(,]/)[0].trim() + " (mẫu)." + im.split(".").pop(); }
        else { f.kind = "file"; f.mime = "application/pdf"; f.url = "sample/tai-lieu-mau.pdf"; f.name = t.title.split(/[\/(,+]/)[0].trim().replace(/\s+/g, "_") + "_(mau).pdf"; }
        D.files.push(f); D.log.push({ at: at, by: f.by, action: f.kind === "link" ? "Thêm link" : "Tải tệp", eventId: e.id, taskId: t.id, text: f.name });
      });
      D.tasks = D.tasks.concat(ts);
      var leaf = ts.filter(function(t){ return t.parentId; }), kv = leaf.filter(function(t){ return /key visual/i.test(t.title); })[0], fm = leaf.filter(function(t){ return /form đăng ký/i.test(t.title); })[0];
      var cAt = function(h){ var d = new Date(Date.now() - h * 3600e3); return iso(d) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":00"; };
      var cm = function(t, by, txt, h){ D.comments.push({ id: "CMAU-" + i + "-" + D.comments.length, eventId: e.id, taskId: t ? t.id : "", by: by, at: cAt(h), text: txt, mentions: "", sample: "x" }); };
      var past = e.end < iso(T0);
      if (!past && i < 4){
        if (kv && e.Design){ cm(kv, e.Design, "Bản v2 đã chỉnh logo MANI và thêm QR đăng ký. @" + e.Owner + " xem giúp em nhé.", 30 + i * 5); cm(kv, e.Owner, "Ổn rồi, đổi chữ ngày sang màu vàng MANI là duyệt.", 26 + i * 5); }
        if (fm) cm(fm, e.Digital, "Form đã có câu hỏi \"Đồng ý sử dụng dữ liệu\" và trường Nơi công tác.", 50 + i * 3);
        cm(null, e.Owner, (e.Trade ? "@" + e.Trade + " chốt giúp phòng / gian hàng trước thứ Sáu. " : "") + "@" + e.Sales + " cập nhật số khách NPP đăng ký hộ vào nhóm Zalo.", 20 + i * 7);
        cm(null, e.Sales, "NPP báo đã có " + Math.round(x.target * .45) + " khách đăng ký, em gửi danh sách trong nhóm Zalo rồi ạ.", 8 + i * 4);
      }
      if (!past && i < 4){
        D.meetings.push({ id: "MMAU-" + i + "-1", eventId: e.id, date: add(-9 - i), title: "Họp khởi động", attendees: [e.Owner, e.Digital, e.Design, e.Trade, e.Sales].filter(Boolean).join(", "),
          content: "- Chốt chủ đề, KOL và địa điểm.\n- Mục tiêu " + x.target + " khách, ngân sách dự kiến " + Math.round(x.budget / 1e6) + " triệu.\n- NPP hỗ trợ mời khách khu vực.",
          actions: (e.Design ? "@" + e.Design + " gửi key visual bản 1 trước " + add(-2 - i).slice(8) + "/" + add(-2 - i).slice(5, 7) + "\n" : "") + "@" + e.Digital + " mở form đăng ký + nhóm Zalo", by: e.Owner, at: add(-9 - i) + "T15:00:00", sample: "x" });
        D.meetings.push({ id: "MMAU-" + i + "-2", eventId: e.id, date: add(-2), title: "Họp với NPP", attendees: [e.Owner, e.Sales, "NPP (mẫu)"].join(", "),
          content: "- NPP xác nhận " + Math.round(x.target * .45) + " khách đăng ký.\n- Thống nhất chương trình khuyến mại tại sự kiện.\n- Chia ca trực bàn bán hàng.",
          actions: "@" + e.Sales + " gửi danh sách khách trước " + add(1).slice(8) + "/" + add(1).slice(5, 7) + (e.Trade ? "\n@" + e.Trade + " chuẩn bị quà tạm ứng NPP" : ""), by: e.Owner, at: add(-2) + "T10:30:00", sample: "x" });
      }
      if (past) cm(null, e.Owner, "Tổng kết: " + (x.actual || "") + " khách tham dự / mục tiêu " + x.target + ". Báo cáo đã gửi toàn MMH.", 24 * (ddiff(e.end, iso(T0)) - 6));
      /* v2.4 */
      if (!past && i < 3) D.checkins.push({ id: "KMAU-" + i, eventId: e.id, week: wk0(iso(T0)), rag: ["Xanh", "Vàng", "Đỏ"][i], by: e.Owner, at: add(0) + "T09:" + (10 + i) + ":00", sample: "x",
        done: ["Đã chốt KOL, mở form đăng ký, key visual đã duyệt.", "Đã có 60 người đăng ký, bài teaser đã đăng.", "Đã đặt gian hàng, NPP xác nhận tham gia."][i],
        block: ["", "Chưa chốt được link Zoom Webinar bản trả phí.", "Backdrop chưa in kịp, nhà in báo trễ 3 ngày."][i], help: i === 2 ? "Cần duyệt thêm 5 triệu chi phí in gấp." : "",
        next: ["Đăng bài giới thiệu KOL, chốt danh sách check-in.", "Đăng bài đếm ngược, gửi nhắc lịch cho khách.", "Gửi đồ đi Hải Phòng, chốt ca trực gian hàng."][i] });
      if (!past && i < 3) D.checkins.push({ id: "KMAU-" + i + "b", eventId: e.id, week: wk0(add(-7)), rag: "Xanh", by: e.Owner, at: add(-3) + "T16:00:00", sample: "x", done: "Họp khởi động, chốt địa điểm.", block: "", help: "", next: "Mở form đăng ký." });
      if (!past && i === 1){ var bt = leaf.filter(function(t){ return !/Xong|Chờ duyệt/.test(t.status) && t.due >= iso(T0); })[0]; if (bt){ bt.status = "Pending"; bt.block = "Chờ NPP xác nhận số lượng — cần Owner gọi NPP giúp"; bt.updatedAt = add(-1) + "T11:00:00"; } }
      if (past) ts.forEach(function(t){ var n = x.actual || x.target; if (/liên hệ lần đầu/i.test(t.title)){ t.fuTotal = Math.round(n * .4); t.fuDone = Math.round(n * .25); } if (/chuyển đổi/i.test(t.title)){ t.fuTotal = Math.round(n * .4); t.fuOrder = Math.round(n * .07); } });
      if (past && /Bleach/.test(x.name)){ ts.forEach(function(t){ if (t.parentId && t.status !== "Xong"){ t.status = "Xong"; t.doneAt = add(-4) + "T09:00:00"; } }); e.closedAt = add(-3) + "T16:00:00"; e.closedBy = e.Owner; e.closeNote = ""; }
      if (x.late){ e.latePlan = String(compress(e, ts)); }
    });
    D.meetings.forEach(function(m){ noteTasks(D, by(D.events, "id", m.eventId), m, m.by); });
    D.tasks.forEach(function(t){ if (t.noteId && t.due < add(-1) && t.title.indexOf("Mở form") === 0) { t.status = "Xong"; t.doneAt = t.due + "T10:00:00"; } });
    D.comments.forEach(function(c){ c.mentions = PEOPLE.filter(function(n){ return c.text.indexOf("@" + n) >= 0; }).join(", "); });
    D.log.sort(function(a, b){ return a.at < b.at ? -1 : 1; });
    D.notify = [{ at: add(-1) + "T08:10:00", to: "Đức Anh", kind: "daily", subject: "[Sự kiện MKT] Việc cần làm: 2 sắp đến hạn", ok: "Đã gửi", by: "Hệ thống" },
                { at: add(-1) + "T10:22:00", to: "Hải Yến", kind: "assign", eventId: "EVMAU-3", subject: "[Sự kiện MKT] Việc mới: Đặt địa điểm / gian hàng · Triển lãm Răng Hàm Mặt miền Bắc (mẫu)", ok: "Đã gửi", by: "Lan Anh" }];
    D.plan["EVMAU-3"] = { info: { format: "Triển lãm + gian hàng (mẫu)", purpose: "Bán hàng cùng NPP, thu thông tin khách", audience: "Bác sĩ RHM miền Bắc", scale: "300 lượt ghé", speakers: "BS. A (mẫu), BS. B (mẫu)", npp: "NPP khu vực (mẫu)", fee: "Miễn phí", kpi: "120 khách để lại thông tin" },
      tasks: [{ group: "TRUYỀN THÔNG", detail: "Key visual + nội dung chương trình", owner: "MMH", note: "Gửi Sales / NPP mời khách" }, { group: "GIAN HÀNG", detail: "Thiết kế + thi công gian 18m²", owner: "MMH + nhà thầu", note: "" }, { group: "BÁN HÀNG", detail: "Bàn trưng bày, bán hàng của NPP", owner: "NPP + MMH", note: "Bảng giá CTKM riêng" }],
      checklist: [{ group: "Display", item: "Sản phẩm trưng bày các size", qty: "2", unit: "bộ", pic: "Hải Yến", status: "Đã chuẩn bị" }, { group: "Display", item: "Standee A4 chương trình khuyến mại", qty: "2", unit: "cái", pic: "Hải Yến", status: "Chưa chuẩn bị" },
                  { group: "Tài liệu", item: "Brochure", qty: "300", unit: "tờ", pic: "Hải Yến", status: "Chưa chuẩn bị" }, { group: "Quà", item: "Túi vải MANI", qty: "200", unit: "cái", pic: "Hải Yến", status: "Đã chuẩn bị" }],
      agenda: [{ date: add(20), kind: "Trước sự kiện", time: "14:00 - 18:00", detail: "Setup gian hàng", pic: "Hải Yến" }, { date: add(21), kind: "Trong sự kiện", time: "8:00 - 17:00", detail: "Mở gian hàng, demo sản phẩm, thu thông tin khách", pic: "Cả đội" }],
      staff: [{ company: "MANI", name: "Lan Anh", tasks: [{ phase: "Trước sự kiện", task: "Làm việc với BTC, chốt vị trí gian" }, { phase: "Trong sự kiện", task: "Điều phối gian hàng" }] }, { company: "MANI", name: "Hải Yến", tasks: [{ phase: "Trước sự kiện", task: "Thi công + đồ trưng bày" }] }],
      promo: [{ product: "JIZAI", offer: "Mua 3 tặng 1", gift: "Túi vải", qty: "50" }, { product: "Composite", offer: "Giảm 15%", gift: "", qty: "" }], activities: [], sessions: [], gifts: [], results: [] };
    D.plan["EVMAU-6"] = { info: { format: "Hội thảo (mẫu)" }, results: [{ metric: "Khách tham dự", unit: "người", actual: "134" }, { metric: "Đơn hàng tại sự kiện", unit: "đơn", actual: "27" }, { metric: "Khách để lại thông tin", unit: "người", actual: "88" }],
      gifts: [{ npp: "NPP (mẫu)", item: "Túi vải", advance: "100", used: "92", diff: "8", status: "Đã hoàn" }], tasks: [], checklist: [], agenda: [], staff: [], promo: [], activities: [], sessions: [] };
    /* v2.1: dữ liệu file MKT Offline / Digital (giống backend MKT_EventHubLink.gs) — hư cấu */
    D.link = {};
    D.events.forEach(function(e, i){
      var x = EVS[i], past = e.end < iso(T0), sheet = "https://docs.google.com/spreadsheets/";
      var reg = Math.round(x.target * (past ? 1.2 : .55)), conf = past ? Math.max(Math.round(reg * .82), (x.actual || 0) + 3) : 0, okc = past ? Math.min(conf, x.actual || Math.round(conf * .95)) : 0;
      var L = { off: { src: past ? "R" : "P", row: 40 + i, url: sheet, name: e.name, start: e.start, end: e.end, type: e.type, form: e.type === "Webinar" ? "Webinar" : "Trực tiếp", segment: /nhãn/i.test(e.name) ? "Surgical" : "Dental",
                       topic: x.purpose, product: e.products, kol: "BS. A (mẫu)", partner: "NPP khu vực (mẫu)", place: e.city, plan: "Approved", action: past ? "As planned" : "", folderUrl: "https://drive.google.com/drive/",
                       review: past ? "Khách quan tâm nhiều tới phần thực hành; nên tăng thời lượng hands-on và chuẩn bị thêm bộ mẫu (mẫu)." : "", tPart: x.target, aPart: past ? okc : "", tJ: /JIZAI/.test(e.products) ? 20 : "", aJ: past && /JIZAI/.test(e.products) ? 14 : "",
                       tC: /Composite/.test(e.products) ? 15 : "", aC: past && /Composite/.test(e.products) ? 17 : "", amount: past ? 86500000 : "", proof: past ? "https://drive.google.com/file/" : "" },
                cust: { reg: reg, conf: conf, ok: okc, sign: e.type === "Webinar" ? 0 : conf, zoom: e.type === "Webinar" ? conf : 0, url: sheet }, postsUrl: sheet, designsUrl: sheet };
      var P = [["Teaser", "Image", -14], ["Giới thiệu KOL", "Image", -10], ["Countdown", "Video", -3], ["Recap / cảm ơn", "Album", 1]];
      L.posts = P.map(function(p, k){ var d = add(x.s + p[2]), up = d < iso(T0) && !(k === 2 && i === 0);
        return { k: p[0], f: p[1], pl: "Event", pg: /nhãn/i.test(e.name) ? "MMH Surgical" : "MMH Dental", m: "", d: d, a: up ? d : "", st: up ? "On air đúng hạn" : "", n: "", lk: up ? IMG + imgFor(/teaser|giới thiệu/i.test(p[0]) ? "teaser" : "cảm ơn", k + i) : "", row: 100 + i * 5 + k }; });
      L.designs = [["Key visual", 1, -21], ["Standee", 2, -10], ["Backdrop", 1, -10]].filter(function(d){ return e.type !== "Webinar" || d[0] === "Key visual"; }).map(function(d, k){ var dl = add(x.s + d[2]), dn = dl < iso(T0);
        return { task: e.name + " - " + d[0], type: d[0], qty: d[1], dl: dl, st: dn ? "Completed" : "In progress", chk: dn ? "On time" : "", res: "", lk: dn ? IMG + imgFor(/key/i.test(d[0]) ? "key visual" : d[0].toLowerCase(), i) : "", done: dn ? dl : "", pic: "Đức Anh", req: e.Owner, pts: 2, row: 200 + i * 5 + k }; });
      D.link[e.id] = L;
    });
    return D;
  }
  var D = window.EH_DEMO_DATA || make();
  var AS = decodeURIComponent((/[?&]as=([^&]+)/.exec(location.search) || [])[1] || "") || (window.EH_DEMO_AS || MGR);
  var ME = { pic: AS, manager: AS === MGR || !!window.EH_DEMO_MGR, admin: AS === MGR, level: "" };
  var canEv = function(e){ return ME.manager || (e && e.Owner === ME.pic); };
  var ok = function(o){ return new Promise(function(r){ setTimeout(function(){ r(JSON.parse(JSON.stringify(Object.assign({ ok: true }, o)))); }, 160); }); };
  var log = function(a, e, t, x){ D.log.push({ at: now(), by: ME.pic, action: a, eventId: e || "", taskId: t || "", text: x }); };
  var N = [];
  /* email giả: dữ liệu mẫu ⇒ không "gửi"; sự kiện tạo mới trên bản xem trước ⇒ ghi vào "Email đã gửi" */
  var mail = function(to, kind, ev, task, subj){ if (!to || to === ME.pic) return; if (ev && ev.sample){ N.push({ pic: to, ok: "Dữ liệu mẫu — không gửi email thật" }); return; }
    D.notify.push({ at: now(), to: to, kind: kind, eventId: ev ? ev.id : "", taskId: task ? task.id : "", subject: "[Sự kiện MKT] " + subj, ok: "Đã gửi", by: ME.pic }); N.push({ pic: to, ok: "Đã gửi" }); };
  var reply = function(o){ var m = N.slice(); N = []; var seen = {}; o.mailed = m.filter(function(x){ if (seen[x.pic]) return false; seen[x.pic] = 1; return true; }); return ok(o); };
  window.EH_DEMO = { data: D, api: function(action, p){
    N = [];
    if (action === "ehBoot") return ok(Object.assign({}, D, { me: ME }));
    if (action === "ehSync") return ok({ message: "Bản xem trước — không có file kế hoạch thật để đồng bộ." });
    if (action === "ehLink") return ok({ message: "Bản xem trước — dữ liệu file MKT Offline / Digital là dữ liệu mẫu." });
    if (action === "ehSample"){ if (!ME.admin) return ok({ ok: false, error: "Chỉ Admin được nạp / xoá dữ liệu mẫu." });
      var keep = function(L){ return L.filter(function(x){ return !x.sample; }); };
      var ids = D.events.filter(function(e){ return e.sample; }).map(function(e){ return e.id; });
      D.events = keep(D.events); D.tasks = keep(D.tasks); D.files = keep(D.files); D.comments = keep(D.comments); D.meetings = keep(D.meetings || []); D.checkins = keep(D.checkins || []); D.log = D.log.filter(function(l){ return ids.indexOf(l.eventId) < 0; });
      if (p.op === "seed"){ var M = make(); ["events", "tasks", "files", "comments", "meetings", "checkins", "log"].forEach(function(k){ D[k] = (D[k] || []).concat(M[k]); }); Object.assign(D.plan, M.plan); return ok({ seeded: { events: M.events.length, tasks: M.tasks.length } }); }
      return ok({}); }
    if (action === "ehDaily"){ var lim = add(D.cfg.before || 0), per = {};
      D.tasks.forEach(function(t){ var e = by(D.events, "id", t.eventId); if (!e || e.closedAt || /Xong|Bỏ qua/.test(t.status)) return; if (!t.parentId && D.tasks.some(function(x){ return x.parentId === t.id; })) return;
        var X = function(p){ return per[p] = per[p] || { late: 0, soon: 0, wait: 0, block: 0 }; };
        if (t.status === "Chờ duyệt"){ if (e.Owner && e.Owner !== t.pic) X(e.Owner).wait++; return; }
        if (t.status === "Pending"){ if (e.Owner && e.Owner !== t.pic) X(e.Owner).block++; return; }
        if (!t.pic || !t.due || t.due > lim) return; var x = X(t.pic); if (t.due < iso(T0)) x.late++; else x.soon++; });
      return ok({ dry: true, items: Object.keys(per).map(function(k){ var x = per[k]; return { to: k, subject: "[Sự kiện MKT] Việc cần làm " + iso(T0).slice(8) + "/" + iso(T0).slice(5, 7) + ": " + [x.late ? x.late + " quá hạn" : "", x.soon ? x.soon + " sắp đến hạn" : "", x.wait ? x.wait + " chờ bạn duyệt" : "", x.block ? x.block + " Pending" : ""].filter(String).join(" · "), ok: "Xem trước" }; }) }); }
    if (action === "ehUpload"){
      var e = by(D.events, "id", p.eventId), t = p.taskId ? by(D.tasks, "id", p.taskId) : null;
      if (!canEv(e) && !(t && t.pic === ME.pic) && ["Owner", "Digital", "Design", "Trade", "Sales"].every(function(r){ return e[r] !== ME.pic; })) return ok({ ok: false, error: "Chỉ người trong đội sự kiện được tải tệp lên." });
      var f = { id: uid("F"), eventId: e.id, taskId: t ? t.id : "", kind: /^image\//.test(p.mime) ? "image" : "file", name: p.name, url: "#", mime: p.mime, by: ME.pic, at: now(), sample: e.sample };
      D.files.push(f); log("Tải tệp", e.id, f.taskId, p.name); return ok({ file: f });
    }
    if (action !== "ehSave") return ok({ ok: false, error: "Không rõ lệnh" });
    var d = p.data || {}, op = p.op;
    if (op === "cfg.save"){ if (!ME.manager) return ok({ ok: false, error: "Chỉ quản lý được đổi cài đặt." }); D.cfg = Object.assign({}, D.cfg, d); return ok({ cfg: D.cfg }); }
    if (op === "event.add"){ if (!ME.manager) return ok({ ok: false, error: "Chỉ quản lý được tạo sự kiện mới." });
      var ne = Object.assign({}, d, { id: "EV" + d.start.replace(/-/g, "").slice(2) + "-" + uid("").slice(-4), follow: "Có", src: "APP", updatedAt: now(), updatedBy: ME.pic }); delete ne.template; delete ne.notify;
      var nt = d.template === false ? [] : tasksFor(ne, null, false), lp = compress(ne, nt); if (lp) ne.latePlan = String(lp);   /* v2.4: dồn hạn (không Bỏ qua) */
      D.events.push(ne); D.tasks = D.tasks.concat(nt); log("Tạo sự kiện", ne.id, "", ne.name + " · " + nt.length + " việc theo mẫu");
      if (d.notify !== false){ var seen = {}; ["Owner", "Digital", "Design", "Trade", "Sales"].forEach(function(r){ var w = ne[r]; if (w && !seen[w]){ seen[w] = 1; mail(w, "team", ne, null, "Sự kiện mới: " + ne.name); } }); }
      return reply({ event: ne, tasks: nt }); }
    if (op === "event.delete"){ var ed = by(D.events, "id", d.id); if (!ME.manager) return ok({ ok: false, error: "Chỉ quản lý được xoá sự kiện." });
      D.events = D.events.filter(function(x){ return x !== ed; }); D.tasks = D.tasks.filter(function(t){ return t.eventId !== d.id; }); D.files = D.files.filter(function(f){ return f.eventId !== d.id; }); return ok({}); }
    if (op === "event.update"){ var ev = by(D.events, "id", d.id); if (!canEv(ev)) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner của sự kiện được sửa." });
      var old = {}, moved = []; D.roles.forEach(function(r){ old[r] = ev[r] || ""; }); var os = ev.start, oe = ev.end;
      Object.keys(d).forEach(function(k){ if (k !== "id" && k !== "notify") ev[k] = d[k]; });
      D.roles.forEach(function(r){ if (r in d) D.tasks.forEach(function(t){ if (t.eventId === ev.id && t.role === r && t.status !== "Xong" && (t.pic || "") === old[r]){ t.pic = d[r]; moved.push(t); if (t.pic && t.parentId) mail(t.pic, "assign", ev, t, "Bạn được giao việc · " + ev.name); } }); });
      if (ev.start !== os || ev.end !== oe) D.tasks.forEach(function(t){ if (t.eventId !== ev.id || t.dueManual || t.offset == null || t.offset === "") return; t.due = t.offset <= 0 ? add(ddiff(iso(T0), ev.start) + t.offset) : add(ddiff(iso(T0), ev.end || ev.start) + Math.ceil(t.offset * 1.4)); if (moved.indexOf(t) < 0) moved.push(t); });
      log("Sửa sự kiện", ev.id, "", Object.keys(d).filter(function(k){ return k !== "id"; }).map(function(k){ return k + " → " + d[k]; }).join(" · ")); return reply({ event: ev, tasks: moved }); }
    if (op === "comment.add"){ var ce = by(D.events, "id", d.eventId), ct = d.taskId ? by(D.tasks, "id", d.taskId) : null;
      var c = { id: uid("C"), eventId: d.eventId, taskId: d.taskId || "", by: ME.pic, at: now(), text: d.text, mentions: PEOPLE.filter(function(n){ return d.text.indexOf("@" + n) >= 0; }).join(", "), sample: ce.sample };
      D.comments.push(c); log("Bình luận", d.eventId, c.taskId, (ct ? ct.title + " · " : "") + d.text.slice(0, 120));
      var sent = {}; c.mentions.split(", ").filter(Boolean).forEach(function(n){ sent[n] = 1; mail(n, "mention", ce, ct, ME.pic + " nhắc đến bạn"); });
      if (ct && ct.pic && !sent[ct.pic]){ sent[ct.pic] = 1; mail(ct.pic, "comment", ce, ct, ME.pic + " bình luận · " + ct.title); }
      if (ce.Owner && !sent[ce.Owner]) mail(ce.Owner, "comment", ce, ct, ME.pic + " bình luận · " + ce.name);
      return reply({ comment: c }); }
    if (op === "note.add" || op === "note.update"){ var ne6 = by(D.events, "id", d.eventId);
      if (!canEv(ne6) && ["Owner", "Digital", "Design", "Trade", "Sales"].every(function(r){ return ne6[r] !== ME.pic; })) return ok({ ok: false, error: "Chỉ người trong đội sự kiện được ghi biên bản họp." });
      var nt6 = op === "note.update" ? by(D.meetings, "id", d.id) : null, old6 = nt6 ? (nt6.content + " " + nt6.actions) : "";
      if (op === "note.update" && !nt6) return ok({ ok: false, error: "Không thấy biên bản." });
      if (!nt6){ nt6 = { id: uid("M"), eventId: d.eventId, by: ME.pic, at: now(), sample: ne6.sample }; D.meetings.push(nt6); }
      ["date", "title", "attendees", "content", "actions"].forEach(function(k){ nt6[k] = d[k] || ""; }); nt6.updatedAt = now(); nt6.updatedBy = ME.pic;
      log(op === "note.add" ? "Thêm biên bản họp" : "Sửa biên bản họp", d.eventId, "", nt6.title);
      PEOPLE.forEach(function(n){ var k = "@" + n; if ((nt6.content + " " + nt6.actions + " " + nt6.attendees).indexOf(k) >= 0 && old6.indexOf(k) < 0) mail(n, "mention", ne6, null, ME.pic + " nhắc đến bạn trong biên bản họp · " + ne6.name); });
      return reply({ note: nt6, tasks: noteTasks(D, ne6, nt6, ME.pic) }); }
    if (op === "event.close" || op === "event.reopen"){ var ec = by(D.events, "id", d.id); if (!canEv(ec)) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner của sự kiện được đóng / mở lại sự kiện." });
      var par9 = {}; D.tasks.forEach(function(t){ if (t.parentId) par9[t.parentId] = 1; });
      if (op === "event.reopen"){ var back = D.tasks.filter(function(t){ return t.eventId === ec.id && t.status === "Bỏ qua" && /^Đóng sự kiện: /.test(t.note || ""); }); back.forEach(function(t){ t.status = "Chưa làm"; t.note = String(t.note).split("\n").slice(1).join("\n"); });
        ec.closedAt = ""; ec.closedBy = ""; ec.closeNote = ""; log("Mở lại sự kiện", ec.id, "", ec.name); return ok({ event: ec, tasks: back }); }
      var open9 = D.tasks.filter(function(t){ return t.eventId === ec.id && (t.parentId || !par9[t.id]) && !/Xong|Bỏ qua/.test(t.status); });
      if (open9.length && !d.note) return ok({ ok: false, code: "OPEN", open: open9.length, error: "Còn " + open9.length + " việc chưa xong — ghi lý do để đóng sự kiện." });
      open9.forEach(function(t){ t.status = "Bỏ qua"; t.note = "Đóng sự kiện: " + d.note + (t.note ? "\n" + t.note : ""); });
      ec.closedAt = now(); ec.closedBy = ME.pic; ec.closeNote = d.note || ""; log("Đóng sự kiện", ec.id, "", ec.name); return ok({ event: ec, tasks: open9 }); }
    if (op === "checkin.save"){ var ek = by(D.events, "id", d.eventId);
      if (!canEv(ek) && ["Owner", "Digital", "Design", "Trade", "Sales"].every(function(r){ return ek[r] !== ME.pic; })) return ok({ ok: false, error: "Chỉ đội sự kiện được cập nhật tình hình tuần." });
      if (!/^(Xanh|Vàng|Đỏ)$/.test(d.rag || "")) return ok({ ok: false, error: "Chọn tình hình: Xanh · Vàng · Đỏ." });
      var w = wk0(iso(T0)), ck = D.checkins.filter(function(c){ return c.eventId === ek.id && c.week === w; })[0], old7 = ck ? { rag: ck.rag, help: ck.help } : {};
      if (!ck){ ck = { id: uid("K"), eventId: ek.id, week: w, sample: ek.sample }; D.checkins.push(ck); }
      ["rag", "done", "block", "help", "next"].forEach(function(k){ ck[k] = d[k] || ""; }); ck.by = ME.pic; ck.at = now();
      if ((ck.rag === "Đỏ" && old7.rag !== "Đỏ") || (ck.help && ck.help !== old7.help)) mail(MGR, "checkin", ek, null, "Cập nhật tuần: " + ek.name);
      log("Cập nhật tuần", ek.id, "", ck.rag + " · " + (ck.done || "").slice(0, 120)); return reply({ checkin: ck }); }
    if (op === "note.delete"){ D.meetings = D.meetings.filter(function(x){ return x.id !== d.id; }); window.EH_DEMO.data.meetings = D.meetings; return ok({}); }
    if (op === "comment.delete"){ D.comments = D.comments.filter(function(x){ return x.id !== d.id; }); return ok({}); }
    if (op === "task.remind"){ var tr = by(D.tasks, "id", d.id), er = by(D.events, "id", tr.eventId); if (!canEv(er)) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner của sự kiện được gửi nhắc." });
      mail(tr.pic, "remind", er, tr, "Nhắc việc: " + tr.title); log("Nhắc việc", er.id, tr.id, tr.title + " ⇒ " + tr.pic); return reply({ reminded: [tr.pic] }); }
    if (op === "event.remind"){ var em = by(D.events, "id", d.eventId); if (!canEv(em)) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner của sự kiện được gửi nhắc." });
      var who = {}, lim2 = add(+d.days || 7); D.tasks.forEach(function(t){ if (t.eventId === em.id && t.parentId && t.pic && t.pic !== ME.pic && !/Xong|Bỏ qua/.test(t.status) && t.due && t.due <= lim2 && (!d.pics || d.pics.indexOf(t.pic) >= 0)) who[t.pic] = (who[t.pic] || 0) + 1; });
      Object.keys(who).forEach(function(w){ mail(w, "remind", em, null, "Nhắc việc: " + who[w] + " việc · " + em.name); }); log("Nhắc việc", em.id, "", "Nhắc " + Object.keys(who).join(", ")); return reply({ reminded: Object.keys(who) }); }
    if (op === "task.add"){ var e2 = by(D.events, "id", d.eventId), par = d.parentId ? by(D.tasks, "id", d.parentId) : null;
      if (!canEv(e2) && !(par && par.pic === ME.pic)) return ok({ ok: false, error: "Chỉ quản lý, Owner hoặc người phụ trách hạng mục được thêm việc." });
      var nt2 = Object.assign({}, d, { id: uid("T"), status: "Chưa làm", createdBy: ME.pic, sample: e2.sample }); delete nt2.notify; D.tasks.push(nt2); log("Thêm việc", nt2.eventId, nt2.id, nt2.title + (nt2.pic ? " · giao " + nt2.pic : ""));
      if (nt2.pic && d.notify !== false) mail(nt2.pic, "assign", e2, nt2, "Việc mới: " + nt2.title);
      return reply({ task: nt2 }); }
    var tk = by(D.tasks, "id", d.id); if (!tk && op !== "link.add" && op !== "file.delete") return ok({ ok: false, error: "Không thấy việc." });
    if (op === "task.delete"){ if (!canEv(by(D.events, "id", tk.eventId))) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner được xoá việc." });
      D.tasks = D.tasks.filter(function(t){ return t.id !== tk.id && t.parentId !== tk.id; }); window.EH_DEMO.data.tasks = D.tasks; log("Xoá việc", tk.eventId, tk.id, tk.title); return ok({}); }
    if (op === "task.update"){ var e3 = by(D.events, "id", tk.eventId), boss = canEv(e3), st0 = tk.status;
      if (!boss && tk.pic !== ME.pic) return ok({ ok: false, error: "Bạn không phụ trách việc này." });
      if (!boss && ["title", "pic", "due", "proof", "priority", "milestone"].some(function(k){ return k in d && d[k] !== tk[k]; })) return ok({ ok: false, error: "Chỉ Owner / quản lý được đổi người, hạn, yêu cầu nộp." });
      if (d.status === "Pending" && !(d.block || tk.block)) return ok({ ok: false, code: "BLOCK", error: "Ghi rõ lý do Pending (cần ai hỗ trợ) để Owner biết." });
      if (d.status === "Xong" && tk.proof && !D.files.some(function(f){ return f.taskId === tk.id && (tk.proof !== "image" || f.kind === "image"); }))
        return ok({ ok: false, code: "PROOF", error: tk.proof === "link" ? "Dán link trước khi chuyển Xong." : "Tải file lên trước khi chuyển Xong." });
      var picCh = "pic" in d && d.pic !== tk.pic;
      Object.keys(d).forEach(function(k){ if (k !== "id" && k !== "notify" && k !== "reason") tk[k] = d[k]; }); if (d.status === "Xong") tk.doneAt = now(); if ("due" in d) tk.dueManual = "x"; tk.updatedAt = now(); tk.updatedBy = ME.pic;
      if (tk.status !== "Pending") tk.block = "";
      if (d.status === "Pending" && st0 !== "Pending") mail(e3.Owner, "block", e3, tk, "Lý do Pending: " + tk.title);
      if (picCh && tk.pic && d.notify !== false) mail(tk.pic, "assign", e3, tk, "Việc mới: " + tk.title);
      if (d.status === "Chờ duyệt" && st0 !== "Chờ duyệt") mail(e3.Owner, "review", e3, tk, "Chờ duyệt: " + tk.title);
      if (st0 === "Chờ duyệt" && /Đang làm|Chưa làm/.test(d.status || "")) mail(tk.pic, "return", e3, tk, "Cần chỉnh sửa: " + tk.title);
      log("Cập nhật việc", tk.eventId, tk.id, tk.title + " · " + Object.keys(d).filter(function(k){ return k !== "id" && k !== "notify"; }).map(function(k){ return k + " → " + d[k]; }).join(" · ")); return reply({ task: tk }); }
    if (op === "link.add"){ var f2 = { id: uid("F"), eventId: d.eventId, taskId: d.taskId || "", kind: "link", name: /facebook/i.test(d.url) ? "Bài đăng Facebook" : d.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0], url: d.url, by: ME.pic, at: now() };
      D.files.push(f2); log("Thêm link", d.eventId, f2.taskId, f2.url); return ok({ file: f2 }); }
    if (op === "file.delete"){ D.files = D.files.filter(function(f){ return f.id !== d.id; }); window.EH_DEMO.data.files = D.files; return ok({}); }
    return ok({ ok: false, error: "op không hợp lệ" });
  } };
})();
