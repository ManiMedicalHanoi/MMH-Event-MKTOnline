# Kiểm tra backend · Sự kiện MKT (19/11/2026)

Người dùng: "kiểm tra tất cả các cái backend, nhưng mà không lấy dữ liệu thật đưa vào".
Cách làm: chỉ đọc code (`ManiMedicalHanoi/mmh-backend`) và gửi lệnh không đăng nhập. Không đọc dữ liệu sự kiện / khách / việc.

## 1. Backend app đang gọi

| Backend | Dùng ở | Trong mmh-backend | Gõ cửa (không đăng nhập) | Phiên bản đang chạy |
|---|---|---|---|---|
| marketing · Event Hub | `index.html`, `doi-tac.html` | có: `marketing` | `ehBoot` / `ehSave` ⇒ `AUTH`; `ehPartner` mã sai ⇒ "Link không hợp lệ." | **2.3** = code trong kho (`EH.VER`) |
| training · Training Hub (đăng nhập) | `index.html` | có: `training` | `ping` ⇒ ok; `rhAuthPw` email trống ⇒ `EMAIL`; `rhAuthRenew` không phiên ⇒ `AUTH` | **3.47** = code trong kho |
| mkt-reg · Data đăng ký | đọc ở máy chủ (Event Hub) | có trong `backends.json` (script gắn Sheet, không web app) | — | — |
| Quiz cũ | `quiz.html` | **chưa có** (`scan-app.mjs`: MỚI) | action lạ ⇒ "Unknown action" | không rõ |

Đồng bộ Event Hub (lệnh trạng thái công khai `ehSync mode=status`, chỉ có giờ + 1 dòng tóm tắt): chạy 2 phút trước lúc kiểm tra,
**mất 196 giây** — Apps Script giới hạn 6 phút / lượt ⇒ cần theo dõi khi số sự kiện / file kế hoạch tăng.

## 2. App gọi gì ⇄ backend có xử lý không

`python3 tools/kiem_tra_backend.py <mmh-backend/backends>` — **0 chỗ thiếu**:
- 9 lệnh marketing (`ehBoot`, `ehSave`, `ehDaily`, `ehFolders`, `ehForm`, `ehLink`, `ehSample`, `ehSync`, `ehUpload`) + `ehPartner` (trang đối tác).
- 33 thao tác ghi `ehSave op` (sự kiện, việc, bình luận, biên bản, tệp / link, check-in, cài đặt, đối tác, luật thông báo, nguồn đăng ký,
  thông báo đối tác, duyệt ấn phẩm `apv.*`, nhắc việc, đóng / mở lại sự kiện) — máy chủ giả lập `demo.js` có đủ cả 33.
- 5 lệnh đăng nhập Training Hub (`rhAuthPw`, `rhAuthPwSet`, `rhAuthRenew`, `rhAuthStart`, `rhAuthVerify`).
- 24 trường dữ liệu app đọc từ `ehBoot` (events, tasks, files, meetings, roles, comments, partners, pnotice, apv, online, checkins, plan, …): backend trả đủ.
- Quyền đóng / sửa sự kiện: app `canEv` = backend `ehCanEv_` (quản lý hoặc Owner trùng đúng tên).
- `node tools/syntax.mjs` (kho backend): 252 file, 0 lỗi.
- `.pull.json` của marketing còn `pending` (ghi chú cũ 06/10): công cụ deploy chỉ chặn khi bản đang chạy vẫn là bản 76 — đã deploy nhiều lần sau đó ⇒ không chặn.

## 3. Đã sửa ở app (v4.1.4)

- Phiên đăng nhập hết hạn: backend dùng chung trả "Cần đăng nhập bằng email công ty **để duyệt công tác**" ⇒ app báo
  "Phiên đăng nhập đã hết hạn — đăng nhập lại bằng email công ty."
- Phiên hết hạn trước đây hiện khung "Chưa tải được dữ liệu · Thử lại" (máy chưa lưu dữ liệu) hoặc vẽ dữ liệu cũ đè lên màn đăng nhập
  (máy đã lưu) ⇒ nay xử lý như Đăng xuất: chỉ còn màn đăng nhập.

## 4. Còn để người dùng quyết

- `quiz.html` (app Quiz cũ) gọi 1 backend chưa có trong kho mmh-backend: còn dùng ⇒ thêm vào kho (`scan-app.mjs --add`); không dùng ⇒ bỏ trang.
- Thời gian đồng bộ Event Hub 196 giây / 360 giây: nếu tăng tiếp, nên tách lượt đồng bộ (sửa backend `marketing`, qua PR kho mmh-backend).
