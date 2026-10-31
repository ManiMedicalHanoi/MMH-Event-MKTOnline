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
      purpose: "Giới thiệu sản phẩm tẩy trắng", audience: "Bác sĩ nha khoa thẩm mỹ", kpi: "100 người xem" }
  ];
  var PICS = [[/key visual|poster/i, ["ws-comp-1.jpg", "ws-jizai-1.jpg", "ws-led-hn.jpg", "ws-restorative.jpg", "ws-led-vp.jpg", "knife-hero.jpg", "bleach-shine.png"]], [/backdrop|vách/i, ["ws-jizai-2.jpg"]], [/standee/i, ["standee.png"]],
    [/flyer|brochure|ctkm/i, ["line-01.png", "line-02.png", "diabur-ipr.png", "line-04.png"]], [/thẻ đeo|bảng tên/i, ["catalog-p3.png"]], [/set up|ảnh gian hàng/i, ["ws-jizai-kit.jpg"]], [/ảnh \/ video/i, ["ws-jizai-3.jpg", "ws-comp-2.jpg", "ws-comp-3.jpg"]],
    [/teaser|giới thiệu chương|đếm ngược|cảm ơn/i, ["line-03.png", "line-05.png", "line-06.png", "ws-comp-3.jpg", "comp-nano.png", "mani-bond.png"]], [/video recap/i, ["ws-jizai-3.jpg"]]];
  var imgFor = function(t, i){ for (var k = 0; k < PICS.length; k++) if (PICS[k][0].test(t)) return PICS[k][1][i % PICS[k][1].length]; return ""; };
  var ddiff = function(a, b){ return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 864e5); };
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
    var D = { events: [], tasks: [], files: [], comments: [], log: [], notify: [], plan: {}, people: PEOPLE.map(function(p){ return { pic: p }; }), roles: ["Owner", "Digital", "Design", "Trade", "Sales"],
              status: ["Chưa làm", "Đang làm", "Chờ duyệt", "Xong", "Bỏ qua"], groups: TPL.map(function(g){ return { group: g[0], role: g[1] }; }),
              cfg: { mailAssign: true, mailReview: true, mailComment: true, remind: true, remindHour: 8, before: 2, ownerDigest: true, weekly: true }, book: "", sync: { at: Date.now(), msg: "Bản xem trước — dữ liệu mẫu" } };
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
      if (past) cm(null, e.Owner, "Tổng kết: " + (x.actual || "") + " khách tham dự / mục tiêu " + x.target + ". Báo cáo đã gửi toàn MMH.", 24 * (ddiff(e.end, iso(T0)) - 6));
    });
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
  var by = function(list, k, v){ return list.filter(function(x){ return x[k] === v; })[0]; };
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
      D.events = keep(D.events); D.tasks = keep(D.tasks); D.files = keep(D.files); D.comments = keep(D.comments); D.log = D.log.filter(function(l){ return ids.indexOf(l.eventId) < 0; });
      if (p.op === "seed"){ var M = make(); ["events", "tasks", "files", "comments", "log"].forEach(function(k){ D[k] = D[k].concat(M[k]); }); Object.assign(D.plan, M.plan); return ok({ seeded: { events: M.events.length, tasks: M.tasks.length } }); }
      return ok({}); }
    if (action === "ehDaily"){ var lim = add(D.cfg.before || 0), per = {};
      D.tasks.forEach(function(t){ var e = by(D.events, "id", t.eventId); if (!e || !t.pic || !t.due || /Xong|Bỏ qua/.test(t.status) || t.due > lim) return; if (!t.parentId && D.tasks.some(function(x){ return x.parentId === t.id; })) return; var x = per[t.pic] = per[t.pic] || { late: 0, soon: 0 }; if (t.due < iso(T0)) x.late++; else x.soon++; });
      return ok({ dry: true, items: Object.keys(per).map(function(k){ var x = per[k]; return { to: k, subject: "[Sự kiện MKT] Việc cần làm " + iso(T0).slice(8) + "/" + iso(T0).slice(5, 7) + ": " + [x.late ? x.late + " quá hạn" : "", x.soon ? x.soon + " sắp đến hạn" : ""].filter(String).join(" · "), ok: "Xem trước" }; }) }); }
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
      var nt = d.template === false ? [] : tasksFor(ne, null, false); nt.forEach(function(t){ if (t.due && t.due < iso(T0)){ t.note = "Hạn theo mẫu " + t.due.slice(8) + "/" + t.due.slice(5, 7) + " đã qua lúc tạo sự kiện"; t.due = iso(T0); t.dueManual = "x"; } });
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
      if (!boss && ["title", "pic", "due", "proof", "priority"].some(function(k){ return k in d && d[k] !== tk[k]; })) return ok({ ok: false, error: "Chỉ Owner / quản lý được đổi người, hạn, yêu cầu nộp." });
      if (d.status === "Xong" && tk.proof && !D.files.some(function(f){ return f.taskId === tk.id && (tk.proof !== "image" || f.kind === "image"); }))
        return ok({ ok: false, code: "PROOF", error: tk.proof === "link" ? "Dán link trước khi chuyển Xong." : "Tải file lên trước khi chuyển Xong." });
      var picCh = "pic" in d && d.pic !== tk.pic;
      Object.keys(d).forEach(function(k){ if (k !== "id" && k !== "notify" && k !== "reason") tk[k] = d[k]; }); if (d.status === "Xong") tk.doneAt = now(); if ("due" in d) tk.dueManual = "x"; tk.updatedAt = now(); tk.updatedBy = ME.pic;
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
