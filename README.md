# Sự kiện MKT · MMH

App theo dõi kế hoạch, giao việc và tiến độ sự kiện Marketing FY68 (GitHub Pages: `index.html`, v2.4).

- **Bảng điều khiển** (quản lý / giám đốc): thẻ sự kiện có ảnh + sức khoẻ tiến độ (Đúng tiến độ / Cần chú ý / Chậm — so % xong với % lẽ ra phải xong),
  thực tế so với kế hoạch, cần xử lý, trạng thái việc, việc theo tuần, khối lượng theo người, tiến độ theo hạng mục, ấn phẩm mới nộp, hoạt động.
- **Lịch**: lịch tháng (T2–CN, sự kiện kéo dài qua các ngày, số việc đến hạn mỗi ngày) + cả năm FY68.
- **Sự kiện**: lưới thẻ ảnh, lọc sắp tới / đã qua / cần chú ý / tôi tham gia; **＋ Sự kiện mới** (quản lý) tạo sẵn việc theo mẫu SOP.
- **Buồng điều phối** (1 sự kiện): vòng %, D−n, đội (đổi người ⇒ việc chuyển theo + email), Cần bạn xử lý (duyệt / trả lại / giao / nhắc / đổi hạn),
  danh sách việc sửa tại chỗ, bảng Theo trạng thái (kéo thẻ giữa các cột Chưa làm / Đang làm / Chờ duyệt / Xong), Dòng thời gian (tích luỹ + lịch việc theo ngày D), Ấn phẩm & tệp (xem ảnh lớn), Thảo luận (@Tên), Kế hoạch, Nhật ký.
- **MKT Offline · Online** (tab trong từng sự kiện, v2.1, chỉ đọc): dòng sự kiện ở file *2. Vietnam - Marketing Offline FY68* (trạng thái, KOL, khách tham dự KPI,
  doanh số, Event review, bằng chứng tham dự), số khách đăng ký / xác nhận tham dự đếm từ CUSTOMER LIST (không hiện tên / SĐT), bài đăng EVENT REPORT và yêu cầu thiết kế ORDER REPORT
  của file *3. Vietnam - Digital Marketing & Design FY68*. Khi nộp việc Truyền thông / Thiết kế, app gợi ý link có sẵn trên file Digital (bấm 1 lần để nộp).
- **Thêm việc** (Owner / quản lý): chọn hạng mục có sẵn hoặc **＋ Hạng mục khác** (tự đặt tên); ô Tên việc nhiều dòng = nhiều việc con một lần. "Ngày D" hiển thị là "Trong ngày sự kiện".
- **Vai trò mặc định** (tab TEAM của file Event Hub): Owner = Thuong · Truyền thông (Digital) = Minh Trang · Ấn phẩm (Design) = Duc Anh · Hậu cần (Trade: địa điểm, hàng thực hành, đồ MKT, quà NPP, gửi đồ, setup) = Trang · Sales chọn theo từng sự kiện.
- **Thông báo** (chuông): việc mới giao cho bạn, việc chờ bạn duyệt, bình luận nhắc tên bạn / ở việc của bạn — mỗi dòng ghi rõ bình luận ở việc nào. Không phải khung chat.
- **Việc của tôi**: việc xếp theo hạn — tải file / dán link / gửi duyệt / xong ngay tại chỗ.
- Email (backend): giao việc, chờ duyệt, trả lại, bình luận / @nhắc, nhắc cả đội, nhắc việc hằng ngày + tổng hợp thứ Hai. Cài đặt (bánh răng, quản lý).
- Đăng nhập: email công ty + mã 6 số (dùng chung phiên với Report Hub / CRM).
- Backend: `ManiMedicalHanoi/mmh-backend` ▸ `backends/marketing/MKT_EventHub.gs` + `MKT_EventHubPlus.gs`. Dữ liệu: Google Sheet "MMH · Event Hub FY68" trong thư mục Drive Event FY68.
- Xem thử với dữ liệu mẫu: `index.html?demo=1` (`&as=Đức Anh` để xem như thành viên). `sample/tai-lieu-mau.pdf` = file PDF của dữ liệu mẫu.
- App Quiz cũ: `quiz.html`.
- **v2.3 (02/11/2026)**: tab **Việc** gộp 3 cách xem (Danh sách · Kanban · Dòng thời gian); nút **＋ Thêm việc** ở cuối mỗi hạng mục (thay ô "gõ tên rồi Enter");
  **Biên bản họp** (tab + khối bên phải: ngày họp, người dự, nội dung, việc cần làm sau họp — thêm / sửa / xoá); gõ **@** ⇒ gợi ý tên (đội sự kiện lên trước);
  người được @nhắc nhận email + thông báo trên app này và nút **Nhắc tôi** của Report Hub / CRM (hộp thông báo chung Training Hub `RH_Notify`);
  link `#ev-<id>/notes` · `#ev-<id>/talk` mở đúng tab; giao diện gọn hơn (khung không đổ bóng, đội sự kiện gọn + nút Đổi, điều khiển trên dòng việc chỉ hiện khi rê chuột).

- **v2.4 (03/11/2026) — không để rơi việc lập kế hoạch / follow-up / báo cáo**:
  - **Tuần này** (màn hình chính, thay Bảng điều khiển): 4 số (Trễ hạn · Pending · Chờ Owner duyệt · Đến hạn tuần này — bấm để lọc),
    sự kiện đang theo dõi chia **Đang diễn ra / Sắp diễn ra / Sau sự kiện · chưa đóng** (chấm Xanh / Vàng / Đỏ do Owner tự đánh giá, thanh tiến độ, **mốc tiếp theo**, Đã cập nhật tuần chưa),
    chế độ **Lộ trình** (11 tuần, mốc quan trọng = hình thoi), danh sách việc trễ / Pending / chờ duyệt / theo ngày trong tuần, **Ai đang bị dồn việc** (người × tuần).
  - **Phân tích**: các biểu đồ cũ + **Đúng hạn theo người** (tháng này / tháng trước / FY68) + khối lượng 8 tuần.
  - Sự kiện đã diễn ra **vẫn được theo dõi tới khi Owner bấm “Đóng sự kiện”** (còn việc ⇒ ghi lý do, việc còn lại chuyển Bỏ qua; mở lại được).
  - **Lập kế hoạch muộn**: không còn tự “Bỏ qua” việc có hạn mẫu đã qua — hạn được dồn lại (nhãn “hạn dồn”), sự kiện hiện cảnh báo.
  - **Trạng thái “Pending”** (bắt buộc ghi lý do, Owner nhận email, cột riêng trong Kanban) · **mốc quan trọng** (dải mốc đầu tab Việc, ◆ trên dòng thời gian; trễ mốc ⇒ “Trễ mốc quan trọng”).
  - **Tình hình tuần** (Owner / đội: Xanh · Vàng · Đỏ, đã làm · Pending · cần hỗ trợ · tuần tới — app điền sẵn từ danh sách việc; Đỏ / cần hỗ trợ ⇒ quản lý nhận email).
  - **Biên bản họp ⇒ việc**: mỗi dòng “Việc cần làm sau họp” tự thành 1 việc (hạng mục “Việc sau họp”, @Tên = người làm, hạn đọc từ chữ), biên bản hiện trạng thái từng việc.
  - **Follow-up khách**: phễu Đăng ký → Tham dự → Cần liên hệ → Đã liên hệ → Ra đơn; Sales nhập số ở việc follow-up.
  - **Việc của tôi**: thêm “Chờ bạn xử lý (bạn là Owner)” (duyệt / trả lại / xử lý Pending ngay tại chỗ).
  - Nhắc việc (backend v1.5): “Chờ duyệt” chỉ nhắc Owner · trễ ≥ 3 ngày / Pending ≥ 2 ngày ⇒ quản lý mỗi ngày · thứ Sáu nhắc cập nhật tuần ·
    nhắc hằng ngày cũng hiện ở nút **Nhắc tôi** của Report Hub / CRM · việc sự kiện tự thành sub-task chỉ đọc dưới Key task trùng tên trong Report Hub.
  - Sửa lỗi: nút chuyển Danh sách / Kanban / Dòng thời gian không bấm được; Dòng thời gian thiếu thanh chuyển cách xem.
