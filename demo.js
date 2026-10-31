/* Sự kiện MKT — CHẾ ĐỘ XEM TRƯỚC (index.html?demo=1): máy chủ giả lập trong trình duyệt, dữ liệu mẫu HƯ CẤU (không phải sự kiện / nhân sự thật).
   Cùng luật với backend MKT_EventHub.gs: quyền theo Owner / quản lý / người phụ trách, việc cần bằng chứng phải nộp trước khi Xong.
   ?as=<tên> để xem như người khác (vd. ?demo=1&as=Đức Anh). window.EH_DEMO_DATA (nếu có) thay dữ liệu mẫu. */
(function(){
  var T0 = new Date(); T0 = new Date(T0.getFullYear(), T0.getMonth(), T0.getDate());
  var iso = function(d){ return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); };
  var add = function(n){ var d = new Date(T0); d.setDate(d.getDate() + n); return iso(d); };
  var now = function(){ return new Date().toISOString().slice(0, 19); };
  var seq = 0, id = function(p){ return p + (Date.now().toString(36) + (++seq)).toUpperCase(); };
  var PEOPLE = ["Lan Anh", "Minh Khoa", "Đức Anh", "Hải Yến", "Quốc Bảo", "Thu Trang", "Văn Nam"];
  var TPL = [
    ["1. Kế hoạch & phê duyệt", "Owner", [["File kế hoạch tổng quan", "link", -30], ["Giám đốc duyệt kế hoạch + ngân sách", "", -28]]],
    ["2. KOL & đối tác", "Owner", [["Hợp đồng KOL + lịch di chuyển", "file", -30], ["Chia việc với NPP, Trường / Viện", "", -30], ["Họp với NPP", "file", -3]]],
    ["3. Tuyển sinh", "Digital", [["Form đăng ký", "link", -30], ["Nhóm Zalo khách tham dự", "link", -30], ["Sales / NPP gửi đủ thông tin khách", "", -5], ["Rà soát danh sách khách", "file", -3]]],
    ["4. Truyền thông", "Digital", [["Bài đăng teaser", "link", -14], ["Bài giới thiệu chương trình / KOL", "link", -10], ["Bài đếm ngược", "link", -3], ["Bài cảm ơn + ảnh recap", "link", 1], ["Video recap highlight", "link", 2]]],
    ["5. Thiết kế ấn phẩm", "Design", [["Key visual / poster sự kiện", "file", -21], ["Backdrop / vách gian hàng", "file", -10], ["Standee", "file", -10], ["Flyer / brochure / CTKM", "file", -10], ["Thẻ đeo, bảng tên, biểu mẫu check-in", "file", -7]]],
    ["6. Hậu cần & gian hàng", "Trade", [["Đặt địa điểm / gian hàng", "file", -30], ["Chốt setup, tea break, kỹ thuật", "", -14], ["Đồ MKT + đồ thực hành + quà NPP", "", -10], ["Set up hoàn thiện (ảnh gian hàng)", "image", -1]]],
    ["7. Ngày D", "Owner", [["Check-in có chữ ký", "file", 0], ["Ảnh / video sự kiện", "image", 0], ["Khảo sát QR trước bế mạc", "link", 0]]],
    ["8. Sau sự kiện", "Owner", [["Đối chiếu dữ liệu khách", "link", 3], ["Báo cáo sự kiện", "file", 5], ["Email báo cáo toàn MMH", "", 7]]],
    ["9. Follow-up", "Sales", [["Liên hệ lần đầu khách quan tâm", "", 5], ["Kết quả chuyển đổi đơn hàng", "", 20]]]
  ];
  var ROLE_SUB = { "Sales / NPP gửi đủ thông tin khách": "Sales", "Check-in có chữ ký": "Digital", "Ảnh / video sự kiện": "Digital", "Khảo sát QR trước bế mạc": "Digital", "Đối chiếu dữ liệu khách": "Digital" };
  var EVS = [
    ["Triển lãm nha khoa mùa thu (mẫu)", -14, 1, "Triển lãm", "Hà Nội", "JIZAI, Composite"],
    ["Workshop Composite thẩm mỹ răng trước (mẫu)", 9, 0, "Workshop", "Hà Nội", "Composite, MANI Bond"],
    ["Hội nghị Răng Hàm Mặt miền Bắc (mẫu)", 18, 2, "Triển lãm", "Hải Phòng", "JIZAI, Composite, Bleach'N Shine, #1559L"],
    ["Webinar nội nha với trâm NiTi (mẫu)", 33, 0, "Webinar", "Online", "JIZAI"],
    ["Hội thảo phẫu thuật nhãn khoa (mẫu)", 44, 1, "Hội thảo", "Đà Nẵng", "Ophthalmic Knife, Manipler"],
    ["Lớp hands-on JIZAI (mẫu)", 78, 0, "Workshop", "TP.HCM", "JIZAI"]
  ];
  function make(){
    var D = { events: [], tasks: [], files: [], log: [], plan: {}, people: PEOPLE.map(function(p){ return { pic: p }; }), roles: ["Owner", "Digital", "Design", "Trade", "Sales"],
              status: ["Chưa làm", "Đang làm", "Chờ duyệt", "Xong", "Bỏ qua"], groups: TPL.map(function(g){ return { group: g[0], role: g[1] }; }) };
    var rnd = (function(s){ return function(){ s = (s * 9301 + 49297) % 233280; return s / 233280; }; })(7);
    EVS.forEach(function(x, i){
      var e = { id: "DEMO-" + (i + 1), name: x[0], start: add(x[1]), end: add(x[1] + x[2]), type: x[3], city: x[4], products: x[5], follow: "Có", state: i === 4 ? "Chờ chốt" : "",
                Owner: "Lan Anh", Digital: "Minh Khoa", Design: i === 5 ? "" : "Đức Anh", Trade: x[3] === "Webinar" ? "" : "Hải Yến", Sales: "Quốc Bảo",
                venue: x[4] === "Online" ? "Zoom" : "Hội trường (mẫu) · " + x[4], organizer: "MMH", src: "FILE", planUrl: "", updatedAt: now() };
      D.events.push(e);
      var order = 0;
      TPL.forEach(function(g){
        if (g[0].indexOf("Hậu cần") >= 0 && e.type === "Webinar") return;
        var big = { id: id("T"), eventId: e.id, parentId: "", group: g[0], title: g[0].replace(/^\d+\.\s*/, ""), role: g[1], pic: e[g[1]] || "", due: "", status: "Chưa làm", proof: "", note: "", order: ++order };
        D.tasks.push(big);
        g[2].forEach(function(s){
          var role = ROLE_SUB[s[0]] || g[1], due = s[2] <= 0 ? add(x[1] + s[2]) : add(x[1] + x[2] + Math.ceil(s[2] * 1.4));
          var t = { id: id("T"), eventId: e.id, parentId: big.id, group: g[0], title: s[0], role: role, pic: e[role] || "", due: due, status: "Chưa làm", proof: s[1], note: "", order: ++order };
          var dd = (new Date(due) - T0) / 864e5, r = rnd();
          if (dd < 0) t.status = r < .82 ? "Xong" : r < .92 ? "Đang làm" : "Chưa làm";
          else if (dd <= 4) t.status = r < .3 ? "Xong" : r < .6 ? "Đang làm" : r < .8 ? "Chờ duyệt" : "Chưa làm";
          if (t.status === "Xong"){ t.doneAt = due + "T16:20:00"; if (t.proof){ var f = { id: id("F"), eventId: e.id, taskId: t.id, kind: t.proof === "link" ? "link" : t.proof === "image" ? "image" : "file", by: t.pic || "Lan Anh", at: due + "T16:00:00" };
            if (t.proof === "link"){ f.name = /Form/.test(t.title) ? "Google Form" : /Zalo/.test(t.title) ? "Nhóm Zalo" : /Bài|Video/.test(t.title) ? "Bài đăng Facebook" : "Google Sheet"; f.url = "https://www.facebook.com/"; }
            else { f.name = t.title.split(/[\/(+,]/)[0].trim().replace(/\s+/g, "_") + (t.proof === "image" ? ".jpg" : ".pdf"); f.url = "#"; f.mime = t.proof === "image" ? "image/jpeg" : "application/pdf"; }
            D.files.push(f); } }
          if (t.status === "Chờ duyệt" && t.proof){ D.files.push({ id: id("F"), eventId: e.id, taskId: t.id, kind: t.proof === "link" ? "link" : "file", name: t.proof === "link" ? "Bài đăng Facebook" : "Ban_nhap.pdf", url: t.proof === "link" ? "https://www.facebook.com/" : "#", mime: "application/pdf", by: t.pic, at: add(-1) + "T10:00:00" }); }
          D.tasks.push(t);
        });
      });
      D.plan[e.id] = { info: { format: x[3] + " (mẫu)", purpose: "Tiếp cận bác sĩ khu vực " + x[4] + "; giới thiệu " + x[5], audience: "Bác sĩ chuyên khoa", scale: "60 khách", speakers: "BS. (mẫu)", npp: "NPP (mẫu)" },
        tasks: [{ group: "TRUYỀN THÔNG", detail: "Key visual + nội dung chương trình", owner: "MMH", note: "Gửi Sales / NPP mời khách" }, { group: "BÀN TRƯNG BÀY", detail: "Bàn trưng bày, bán hàng của NPP", owner: "NPP + MMH", note: "" }],
        checklist: [{ group: "Display", item: "Sản phẩm trưng bày các size", qty: "2", unit: "pcs", pic: "Hải Yến", status: "Chưa chuẩn bị" }, { group: "Display", item: "Standee A4 chương trình khuyến mại", qty: "1", unit: "pcs", pic: "Hải Yến", status: "Đã chuẩn bị" },
                    { group: "Tài liệu", item: "Brochure", qty: "100", unit: "pcs", pic: "Hải Yến", status: "Chưa chuẩn bị" }],
        agenda: [{ date: e.start, kind: "Trong sự kiện", time: "8:00 - 8:30", detail: "Check-in, ký xác nhận tham dự", pic: "Digital" }, { date: e.start, kind: "Trong sự kiện", time: "8:30 - 11:30", detail: "Bài giảng + thực hành", pic: "KOL" }],
        staff: [{ company: "MANI", name: "Lan Anh", tasks: [{ phase: "Trước sự kiện", task: "Làm việc với BTC, chốt agenda" }, { phase: "Trong sự kiện", task: "Điều phối chương trình" }] }],
        promo: [], activities: [], sessions: [], gifts: [], results: [] };
    });
    D.log = [{ at: add(-1) + "T15:12:00", by: "Đức Anh", action: "Tải tệp", eventId: "DEMO-2", text: "Key_visual.pdf" }, { at: add(0) + "T09:05:00", by: "Minh Khoa", action: "Thêm link", eventId: "DEMO-2", text: "Bài đăng Facebook" },
             { at: add(0) + "T10:30:00", by: "Lan Anh", action: "Sửa sự kiện", eventId: "DEMO-3", text: "Design: → Đức Anh" }];
    return D;
  }
  var D = window.EH_DEMO_DATA || make();
  var AS = decodeURIComponent((/[?&]as=([^&]+)/.exec(location.search) || [])[1] || "") || (window.EH_DEMO_AS || "Lan Anh");
  var ME = { pic: AS, manager: AS === "Lan Anh" || !!window.EH_DEMO_MGR, admin: false, level: "" };
  var by = function(list, k, v){ return list.filter(function(x){ return x[k] === v; })[0]; };
  var canEv = function(e){ return ME.manager || (e && e.Owner === ME.pic); };
  var ok = function(o){ return new Promise(function(r){ setTimeout(function(){ r(JSON.parse(JSON.stringify(Object.assign({ ok: true }, o)))); }, 180); }); };
  var log = function(a, e, t, x){ D.log.push({ at: now(), by: ME.pic, action: a, eventId: e || "", taskId: t || "", text: x }); };
  window.EH_DEMO = { data: D, api: function(action, p){
    if (action === "ehBoot") return ok(Object.assign({}, D, { me: ME, sync: { at: Date.now(), msg: "Dữ liệu mẫu" } }));
    if (action === "ehUpload"){
      var e = by(D.events, "id", p.eventId), t = p.taskId ? by(D.tasks, "id", p.taskId) : null;
      if (!canEv(e) && !(t && t.pic === ME.pic)) return ok({ ok: false, error: "Chỉ người trong đội sự kiện được tải tệp lên." });
      var f = { id: id("F"), eventId: e.id, taskId: t ? t.id : "", kind: /^image\//.test(p.mime) ? "image" : "file", name: p.name, url: "#", mime: p.mime, by: ME.pic, at: now() };
      D.files.push(f); log("Tải tệp", e.id, f.taskId, p.name); return ok({ file: f });
    }
    if (action !== "ehSave") return ok({ ok: false, error: "Không rõ lệnh" });
    var d = p.data || {}, op = p.op;
    if (op === "event.update"){ var ev = by(D.events, "id", d.id); if (!canEv(ev)) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner của sự kiện được sửa." });
      var old = {}, moved = []; D.roles.forEach(function(r){ old[r] = ev[r] || ""; });
      Object.keys(d).forEach(function(k){ if (k !== "id") ev[k] = d[k]; });
      D.roles.forEach(function(r){ if (r in d) D.tasks.forEach(function(t){ if (t.eventId === ev.id && t.role === r && t.status !== "Xong" && (t.pic || "") === old[r]){ t.pic = d[r]; moved.push(t); } }); });
      log("Sửa sự kiện", ev.id, "", Object.keys(d).filter(function(k){ return k !== "id"; }).map(function(k){ return k + ": → " + d[k]; }).join(" · ")); return ok({ event: ev, tasks: moved }); }
    if (op === "task.add"){ var e2 = by(D.events, "id", d.eventId), par = d.parentId ? by(D.tasks, "id", d.parentId) : null;
      if (!canEv(e2) && !(par && par.pic === ME.pic)) return ok({ ok: false, error: "Chỉ quản lý, Owner hoặc người phụ trách task lớn được thêm việc." });
      var nt = Object.assign({}, d, { id: id("T"), status: "Chưa làm", createdBy: ME.pic }); D.tasks.push(nt); log("Thêm việc", nt.eventId, nt.id, nt.title); return ok({ task: nt }); }
    var tk = by(D.tasks, "id", d.id); if (!tk && op !== "link.add" && op !== "file.delete") return ok({ ok: false, error: "Không thấy việc." });
    if (op === "task.delete"){ if (!canEv(by(D.events, "id", tk.eventId))) return ok({ ok: false, error: "Chỉ quản lý hoặc Owner được xoá việc." });
      D.tasks = D.tasks.filter(function(t){ return t.id !== tk.id && t.parentId !== tk.id; }); window.EH_DEMO.data.tasks = D.tasks; log("Xoá việc", tk.eventId, tk.id, tk.title); return ok({}); }
    if (op === "task.update"){ var boss = canEv(by(D.events, "id", tk.eventId));
      if (!boss && tk.pic !== ME.pic) return ok({ ok: false, error: "Bạn không phụ trách việc này." });
      if (!boss && ["title", "pic", "due", "proof"].some(function(k){ return k in d && d[k] !== tk[k]; })) return ok({ ok: false, error: "Chỉ Owner / quản lý được đổi người, hạn, yêu cầu nộp." });
      if (d.status === "Xong" && tk.proof && !D.files.some(function(f){ return f.taskId === tk.id && (tk.proof !== "image" || f.kind === "image"); }))
        return ok({ ok: false, code: "PROOF", error: tk.proof === "link" ? "Dán link trước khi chuyển Xong." : "Tải file lên trước khi chuyển Xong." });
      Object.keys(d).forEach(function(k){ if (k !== "id") tk[k] = d[k]; }); if (d.status === "Xong") tk.doneAt = now();
      log("Cập nhật việc", tk.eventId, tk.id, tk.title + " · " + Object.keys(d).filter(function(k){ return k !== "id"; }).map(function(k){ return k + " → " + d[k]; }).join(" · ")); return ok({ task: tk }); }
    if (op === "link.add"){ var f2 = { id: id("F"), eventId: d.eventId, taskId: d.taskId || "", kind: "link", name: /facebook/i.test(d.url) ? "Bài đăng Facebook" : d.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0], url: d.url, by: ME.pic, at: now() };
      D.files.push(f2); log("Thêm link", d.eventId, f2.taskId, f2.url); return ok({ file: f2 }); }
    if (op === "file.delete"){ D.files = D.files.filter(function(f){ return f.id !== d.id; }); window.EH_DEMO.data.files = D.files; return ok({}); }
    return ok({ ok: false, error: "op không hợp lệ" });
  } };
})();
