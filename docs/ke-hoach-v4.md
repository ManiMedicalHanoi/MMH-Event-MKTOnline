# Kế hoạch v4 · Sự kiện MKT trong Report Hub (họp Thương 18/11/2026)

## Quyết định (người dùng chọn 18/11/2026)
1. **Report Hub có khung Sự kiện riêng** cho nhóm Marketing (đọc thẳng kho Event Hub). App Sự kiện giữ làm nơi thao tác chi tiết, 2 bên có nút chuyển qua lại.
   KHÔNG chép việc sự kiện vào sheet WEEKLY của Report Hub (đã ngắt 18/11/2026: lỗi 1 key 859 sub-task).
2. **Mẫu việc đọc thẳng sheet `Event form_Task`** (file "1. Vietnam - Sales & Marketing Action FY67-FY68" = Report Hub Marketing):
   3 mẫu Exhibition · Seminar · Workshop; mỗi mẫu 3 phase (I Chuẩn bị / Trước sự kiện · II Trong sự kiện · III Sau sự kiện); mỗi việc có PIC cố định + hạn bắt đầu / kết thúc dạng `D – n`.
   Tạo sự kiện ⇒ hiện checklist 3 phase để tick chọn (thêm / bớt), PIC theo mẫu (sửa được sau), hạn hiện NGÀY THẬT tính từ ngày D (ngày sự kiện), không hiện "D – n".
   Mẫu chọn theo loại sự kiện (Type ở REPORT_EVENT).
3. **Duyệt ấn phẩm**: nộp ⇒ Under review (Chờ duyệt) ⇒ Owner (Thương) hoặc quản lý duyệt ⇒ Complete; Reject ⇒ file đã nộp chuyển vào Thùng rác Drive (khôi phục 30 ngày) + ghi nhật ký.
   Đức Anh cập nhật ORDER REPORT (file MKT Online) · Minh Trang cập nhật EVENT / PRODUCT REPORT (plan + report trong 1 sheet) ⇒ app chỉ ĐỌC trạng thái, hiển thị theo sự kiện. Minh Trang duyệt bài theo luồng mail như cũ.
4. **Tuyển sinh chỉ số đếm**: file "MMH - Data đăng ký sự kiện FY67" (`1fzV1vc-…`, backend `mkt-reg`): mỗi KOL 1 tab, cột A EVENT NAME (Marketing dán tay),
   "Tiến trình" done / cancel / pending, "Anh chị biết đến sự kiện qua" (MANI = MMH tuyển, khác = NPP tuyển). Mục tiêu = cột Target participant (R) của REPORT_EVENT.

## Màn hình cần có
- Theo sự kiện: 3 phase, việc từng phase, trạng thái, hạn ngày thật.
- Tổng: mọi sự kiện, chọn khoảng thời gian.
- Theo PIC: ai đang làm gì, việc pending / trễ.
- Trình bày (báo cáo tháng): sự kiện đã diễn ra trước (tổng hợp nội bộ + NPP: doanh số, tiếp cận khách, vấn đề; follow-up: ai làm tiếp) rồi sự kiện sắp tới (tiến độ chuẩn bị).
