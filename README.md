# Sự kiện MKT · MMH

App theo dõi kế hoạch, giao việc và tiến độ sự kiện Marketing FY68 (GitHub Pages: `index.html`, v2.2).

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
