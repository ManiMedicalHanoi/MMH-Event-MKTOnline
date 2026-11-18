# Sự kiện MKT · MMH

App theo dõi kế hoạch, giao việc và tiến độ sự kiện Marketing FY68 (GitHub Pages: `index.html`, v2.7).

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
- **v4.1 (18/11/2026) — giao diện điện thoại** (khối `v41-mobile` + script `v41-mobile-js` cuối file; người dùng: "giao diện lung tung, khó thao tác khi dùng trên mobile"). Chỉ áp dụng màn hình ≤ 860 px, máy tính giữ nguyên (ảnh 1440 px trước / sau giống hệt):
  ① **Thanh trên 1 dòng** (logo MANI · Sự kiện MKT · tìm · chuông · tài khoản), không còn chiếm 3 dòng khi cuộn; chạm kính lúp ⇒ hàng tìm mở ngay dưới thanh.
  ② **Menu chính ở thanh dưới** (ngón cái với tới): Tổng quan · Việc của tôi · Sự kiện · MKT Online · **Thêm** (Tuần này, Lịch, Phân tích, Trình bày, Tải lại dữ liệu, Cài app, Cài đặt, Ẩn dữ liệu mẫu). Số việc / số cần duyệt hiện trên biểu tượng; mở bàn phím thì thanh tự ẩn.
  ③ **Việc của tôi**: sửa lỗi tên việc bị bóp thành cột 1 chữ / dòng. **Danh sách việc trong sự kiện**: tên việc cả dòng + 1 dòng tóm tắt (trạng thái · người · hạn / trễ); chạm vào việc ⇒ mở khung chi tiết để đổi trạng thái / người / hạn (nút tròn vẫn đánh dấu Xong ngay).
  ④ Chip lọc thành **1 hàng cuộn ngang**; nút Tiến độ / Danh sách / Kanban / Dòng thời gian 1 hàng; tab sự kiện và 5 giai đoạn tự cuộn tới mục đang chọn; Kanban vuốt từng cột.
  ⑤ **Tổng quan**: mỗi sự kiện 1 khối (tên · 5 cổng G1–G5 có ngày · tuyển sinh · đang tắc). **MKT Online**: mỗi ấn phẩm / bài đăng 1 khối có nhãn (Thuộc · Người làm · Cập nhật); bảng Theo người cuộn ngang, cột tên đứng yên. Phân tích hết tràn ngang. Lịch: bỏ chữ "x xong" trong ô ngày.
  ⑥ Hộp thoại (Sự kiện mới, Thêm việc, Chọn việc theo mẫu…) mở từ dưới lên, tiêu đề + nút Lưu luôn thấy; khung chi tiết việc hết màn hình, nút Đóng to; ô nhập 16 px (iPhone không tự phóng to); vùng chạm ≥ 40 px; nút tròn ＋ Sự kiện mới nằm trên thanh dưới (ẩn khi trang đã có nút này).
  Lần đầu mở trên điện thoại hiện 1 dòng giới thiệu (`eh_m41`). Service worker `ehapp-v41`.
- **v4.0.1 (18/11/2026)**: máy đang nhớ giao diện thử `?ui=2` tự về giao diện chính 1 lần (`eh_ui40`; muốn dùng lại thì mở `?ui=2`); số phiên bản hiện cạnh tên app; service worker lấy trang / script mới nhất (`cache: no-cache`) để bản mới hiện ngay.
- **v4.0 (18/11/2026) — gọn & rõ** (khối `v40-css` + script v4.0 cuối file; người dùng: "trang sự kiện liệt kê ô, màu mè, rối mắt"; "mọi người đều thấy luồng việc của nhau, quản lý overview được"): ① **Trang sự kiện** = 1 khối đầu (tên · ngày · địa điểm · 6 con số Còn / Việc xong / Trễ hạn / Đăng ký / Ấn phẩm & bài đăng / Tình hình · đội · 5 giai đoạn trên 1 dòng + "Điều kiện từng cổng" · dòng "Đang tắc ở …") + 6 tab **Việc · Tuyển sinh & khách · Ấn phẩm & bài đăng · Họp & trao đổi · Dữ liệu MKT & kế hoạch · Nhật ký**; bỏ cột phụ bên phải (Cần bạn xử lý / Việc của bạn thu gọn thành dòng "Cần xử lý" đầu tab Việc); mặc định xem Danh sách; link cũ `#ev-<id>/notes|talk|partners|plan…` vẫn mở đúng tab gộp. ② Menu **MKT Online** (`#online`, thay "Duyệt", ai cũng thấy): đếm theo bước duyệt (bấm để lọc) · bảng ấn phẩm / bài đăng (bấm 1 dòng = mở chi tiết + nút duyệt) · lọc loại / nhóm / người làm · bảng **Theo người** · **Việc truyền thông & ấn phẩm trong sự kiện** (vai trò Truyền thông / Ấn phẩm, hạn ≤ 14 ngày hoặc trễ). Tổng quan có 1 dòng MKT Online. ③ Màu trầm: thanh trạng thái navy / xanh thép, đỏ chỉ cho trễ. ④ Giao diện thử `?ui=2`: thêm nút MKT Online, màn MKT Online / Trình bày dùng giao diện chính.
- **v3.6 (18/11/2026) — Duyệt ấn phẩm / bài đăng 3 cấp · MKT Online · Thiết kế · Trình bày** (backend Event Hub v2.3 `MKT_EventHubApv.gs`): menu **Duyệt** (`#apv`, số = việc cần tôi xử lý) với tab Cần tôi xử lý · **Bài đăng MKT Online** (`#online`) · **Thiết kế** (`#design`) · Tất cả; nút **Gửi duyệt** (loại · thuộc sự kiện / sản phẩm Product Data / khác · loại ấn phẩm · designer ngoài · file nháp hoặc link) ⇒ file vào MKT Online ▸ Draft ⇒ ① Thương ⇒ ② Giang xác nhận nội dung (email người làm, CC Thương · chị Hà · chị Tuyên) ⇒ ③ chị Tuyên ⇒ thiết kế: file chuyển vào folder Product Data / Event Access; bài đăng: Chờ đăng ⇒ dán link ⇒ Đã đăng (xem bài Facebook ngay trên app). Trả lại cần nhận xét; người làm tải bản sửa ⇒ Nộp lại. Tab Ấn phẩm của sự kiện có khối duyệt riêng. Đầu trang sự kiện hiện **Key task Report Hub** của sự kiện (chỉ đọc). Phân tích ▸ **Trình bày (họp)** (`#present`): sự kiện 90 ngày qua (đăng ký, tham dự, việc xong, follow-up, ai đang follow up) rồi sự kiện 90 ngày tới (tiến độ trước · trong · sau, đăng ký), In / lưu PDF.
- **v3.5 (18/11/2026) — folder sự kiện tự tạo** (backend Event Hub v2.0 `ehFolders`, `event.add` + `place`): form Sự kiện mới có khối **Folder lưu trữ của sự kiện** — Folder riêng trong Event FY68 · Trong folder của báo cáo viên (chọn folder DR. có sẵn hoặc ＋ Báo cáo viên mới). Hệ thống tạo folder + Plan (file tổng chép từ mẫu) · Event Access · Media · Survey; file tải lên từ app vào đúng folder con. Sự kiện cũ giữ nguyên chỗ.
- **v3.4 (18/11/2026) — Style M + cài app**: khối `v34-stylem` theo brand MMH Style M (Aptos mọi chữ, navy #2C4A5E, steel #5A84A6, viền #BCD4E6, nền trắng, không đổ bóng, mục menu đang chọn nền #99C1DE, bảng tiêu đề #D6E2E9, logo MANI ô vàng `img/mani_logo_box.png` ở thanh trên, chỉ giao diện sáng: khối `@media (prefers-color-scheme: dark)` bị gỡ lúc chạy). **Cài app**: `manifest.webmanifest` + `sw.js` (chỉ lưu file của app, trang chính lấy bản mới trước) + nút **Cài app** trên thanh trên / menu tài khoản (`instGo`: hộp cài của trình duyệt, hoặc hướng dẫn từng bước cho iPhone / Safari / Zalo).
- **v3.3 (18/11/2026, họp Marketing với Thương)**: việc theo mẫu đọc thẳng sheet **Event form_Task** (Report Hub Marketing; backend Event Hub v1.9 `ehForm`). Tạo sự kiện ⇒ mở ngay bảng **Chọn việc theo mẫu** (`mPick`): 3 giai đoạn (trước / trong / sau), tick chọn, đổi PIC, hạn hiện NGÀY THẬT tính từ ngày D (hạn đã qua tô đỏ); sự kiện có sẵn: nút "Chọn việc theo mẫu" (việc đã có hiện "đã có") ⇒ `ehSave event.pick`. Tuyển sinh: sự kiện chưa có link Form riêng đếm từ file Data đăng ký tổng (Done · Pending · Cancel · MANI / NPP tuyển — chỉ số đếm). Việc Chờ duyệt chỉ Owner / quản lý duyệt; trả lại ⇒ file đã nộp vào Thùng rác Drive. Bản xem trước `?demo=1` có mẫu giả lập (`FORM9` trong demo.js).
- Giao diện (v3.2, người dùng yêu cầu 18/11/2026): BỎ ảnh bìa / ảnh sản phẩm ở mọi nơi (thẻ sự kiện, đầu trang sự kiện, lịch, danh sách việc, màn đăng nhập, form sự kiện) ⇒ ô màu sáng + icon nét mảnh theo loại sự kiện (`evIcon` / `evChip`, khối CSS `v32-calm`); bảng màu xanh xám dịu theo video luồng dữ liệu, font tiêu đề Be Vietnam Pro.
- Đăng nhập (v3.1): **email công ty + mật khẩu** (Training Hub `rhAuthPw`, POST). Lần đầu / quên mật khẩu ⇒ "Nhận mã qua email" (mã 6 số, `rhAuthStart` / `rhAuthVerify`)
  ⇒ đặt mật khẩu ngay (`rhAuthPwSet`, ≥ 8 ký tự; quên mật khẩu không cần mật khẩu cũ). Phiên `mmh_tk` dùng chung Report Hub / CRM / Tender Map, còn < 25 ngày ⇒ tự gia hạn (`rhAuthRenew`).
  Trình duyệt nhớ mật khẩu (PasswordCredential ⇒ tự đăng nhập lại). Menu tên ▸ Đặt / Đổi mật khẩu · Đăng xuất. Đọc Training Hub bằng `fetch` không kèm cookie
  (thẻ `<script>` lỗi trên điện thoại / Chrome đăng nhập Gmail khác ⇒ "Không kết nối được máy chủ đăng nhập"), lỗi mạng mới quay về thẻ `<script>`.
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
    nhắc hằng ngày cũng hiện ở nút **Nhắc tôi** của Report Hub / CRM · ~~việc sự kiện tự thành sub-task chỉ đọc dưới Key task trùng tên trong Report Hub~~ (đã bỏ ở v2.7).
  - Sửa lỗi: nút chuyển Danh sách / Kanban / Dòng thời gian không bấm được; Dòng thời gian thiếu thanh chuyển cách xem.
- **Giao diện thử kiểu Tender Map** (`ui2.js`, 11/2026): mở `index.html?ui=2` (nhớ trên máy; `?ui=1` để về giao diện cũ). Trái: dòng thời gian FY68 —
  mỗi sự kiện 1 dòng, khối đậm = ngày diễn ra, thanh nhạt = thời gian chuẩn bị (phần đậm = % việc xong), vòng số % màu theo tiến độ, vạch Hôm nay, + / − / ⌂, chú giải; hoặc Lịch tháng.
  Phải: bảng chi tiết cuộn riêng — FY68 (số tổng, sự kiện theo tiến độ, theo loại, cần xử lý, việc của tôi, theo người) ⇒ 1 sự kiện (cảnh báo trễ / chờ duyệt, đội, việc theo hạng mục, các tab cũ) ⇒ 1 việc (khung chi tiết cũ).
  Dùng chung dữ liệu và thao tác với giao diện cũ (đọc hàm nội bộ qua `window.EH_X`, hook đầu `render()`).
- **v2.5 (09/11/2026) — Tiến độ từng sự kiện**: tab Việc có cách xem mặc định mới **Tiến độ**:
  - Đầu trang: vòng % đã xong + thanh nhiều màu theo trạng thái (Xong · Chờ duyệt · Đang làm · Pending · Trễ hạn · Chưa làm — bấm số để lọc), mức hoàn thành có tính việc đang làm, kế hoạch đến hôm nay, số hạng mục đã xong.
  - Mỗi hạng mục 1 thẻ: vòng %, nhãn Xong / n trễ / n Pending / Tuần này, thanh trạng thái.
  - Mỗi việc 1 dòng có thanh tiến độ riêng: Chưa làm 0% · Pending 40% · Đang làm 50% · Chờ duyệt 85% · Xong 100%; quá hạn tô đỏ.
  - Thanh nhiều màu cũng dùng ở màn Tuần này và thẻ sự kiện (thay thanh 1 màu).
- **v2.6 (09/11/2026) — mở app nhanh**: lưu bản dữ liệu trên máy (mỗi tài khoản 1 bản, ≤ 1,5 MB, 14 ngày) ⇒ lần mở sau hiện ngay rồi tự cập nhật ở nền (chữ "Đang cập nhật…" cạnh nút tải lại);
  lần đầu: màn chờ có khung giao diện + dòng báo tiến trình (máy chủ khởi động / mạng chậm), quá 60 giây báo lỗi + nút Thử lại; máy chủ lỗi mà đã có bản lưu ⇒ vẫn xem được;
  kết nối trước tới máy chủ Google (`preconnect`). Backend Event Hub v1.6 lưu đệm dữ liệu lớn chia mảnh + giữ đệm nóng (trước: không bao giờ đệm được dữ liệu thật).
- **v2.7 (11/11/2026, người dùng yêu cầu)**:
  - **Kết quả bằng chữ**: việc cần nộp file / ảnh / link nay chuyển **Xong** được khi đã ghi *Kết quả bằng chữ* (ô mới trong khung chi tiết việc, tự lưu khi rời ô) —
    không bắt tải file khi chỉ cần ghi lại. Nút trên thẻ việc đổi thành **Nộp kết quả** (mở khung, con trỏ ở ô kết quả). Backend Event Hub v1.7: cột TASKS.result.
  - **Bỏ liên kết sang Report Hub**: việc của app không còn tự thành sub-task chỉ đọc trong Report Hub (backend marketing Event_Sync v2.3 gỡ toàn bộ sub đã đẩy,
    kể cả bản lặp — sao lưu sheet ẩn EVS_Removed). Nhân sự cập nhật Report Hub như bình thường, không phải vào app này bấm Xong.
- **v3.0 (17/11/2026) — Quy trình 5 giai đoạn · tuyển sinh · thông báo đối tác / NPP** (họp MA 11/2026, mục "Tiến độ cải tiến event: quy trình event / thông báo đối tác / các check point quan trọng"):
  - **Giao diện theo bộ slide MMH Management Practices**: chữ Aptos, navy `#2C4A5E`, xanh `#5A84A6`, nền nhạt `#E3EAF2`, tiêu đề IN HOA + dòng phụ xám, ô vàng = điểm kiểm soát (khối `v30-css`).
  - **Tổng quan** (`#board`, mặc định cho quản lý): sơ đồ 5 giai đoạn (Khởi động → Chuẩn bị → Tuyển sinh & hoàn thiện → Ngày D → Follow-up), 4 số (đang theo dõi · đang tắc ở cổng · tuyển sinh chậm · thông báo đối tác chờ gửi),
    bảng làn: mỗi sự kiện 1 dòng, 5 nút cổng (đã qua · đang tới · sắp tới mốc · quá mốc), thanh tuyển sinh (đã đăng ký / mục tiêu, vạch = nhịp cần đạt hôm nay), **Đang tắc ở** (cổng + điều kiện còn thiếu).
  - **5 cổng kiểm soát** `gates()` (GIỐNG HỆT backend `ehgGates_`) theo **Quy trình tổ chức sự kiện 21/10/2026** (file Word trong thư mục Drive Event FY68):
    G1 Chốt kế hoạch · mở tuyển sinh (D−30: đội, mục tiêu, kế hoạch tổng quan, GĐ duyệt, KOL, chia việc NPP / Viện, form đăng ký, file đăng ký ghi nguồn từng khách, khai báo đối tác)
    · G2 Ấn phẩm & hậu cần (D−7) · G3 Chốt danh sách · họp NPP (D−3: họp NPP, rà soát dữ liệu khách, ≥ 80% mục tiêu, việc chuẩn bị xong)
    · G4 Tổ chức & check-in (D+1: check-in ký tay / báo cáo Zoom, khảo sát, số khách) · G5 Báo cáo & đóng (D+14: đối chiếu dữ liệu, báo cáo, email nội bộ, follow-up, đóng sự kiện).
    Khung **Quy trình sự kiện** đầu trang sự kiện; cổng quá mốc ⇒ dải đỏ "Đang tắc ở …" bấm vào điều kiện để xử lý.
  - **Tab Tuyển sinh**: đăng ký / mục tiêu / nhịp cần đạt (mở tuyển sinh D−30 · D−21 30% · D−14 50% · D−7 80% · D−3 100%) / xác nhận / còn lại, biểu đồ tích luỹ so với nhịp, theo đối tác / NPP, theo nguồn;
    Owner dán **link Google Sheet câu trả lời của Form đăng ký** (hoặc file danh sách đăng ký — cột “Anh chị biết đến sự kiện qua” / NPP được đếm theo đối tác) (Form ▸ Câu trả lời ▸ Liên kết với Trang tính) — máy chủ đọc SỐ ĐẾM mỗi 20 phút (cột Dấu thời gian · SĐT · Họ tên · NPP / nguồn · Xác nhận), không đọc tên / SĐT về app.
    Chưa có file ⇒ dùng số CUSTOMER LIST của file MKT Offline (thường chỉ đủ sau sự kiện).
  - **Tab Đối tác & thông báo**: đối tác / NPP cùng tổ chức (email, CC, chỉ tiêu, từ khoá khớp cột NPP của file đăng ký; gợi ý từ cột Partner của REPORT_EVENT) · **luật thông báo theo từng sự kiện**
    (Cập nhật tuyển sinh D−21/14/7/3 · Nhắc đối tác chưa đạt chỉ tiêu · Nhắc lịch D−1 · Báo nội bộ khi tuyển sinh chậm; mỗi luật: mốc + "Chờ bấm Gửi" hoặc "Tự động gửi")
    · **Chờ gửi**: xem trước email (sửa lời mở đầu) ⇒ **Gửi** (tên Owner — Thương, CC Owner, đối tác trả lời về hộp thư Owner) hoặc **Tự gửi từ hộp thư** · lịch sử đã gửi.
  - **Trang theo dõi cho đối tác** `doi-tac.html?k=<mã>` (không đăng nhập, mỗi đối tác 1 mã): tổng đăng ký / mục tiêu, nhịp cần đạt, số của chính đối tác / chỉ tiêu, biểu đồ theo ngày — chỉ số đếm.
  - Backend Event Hub v1.8 (`MKT_EventHubGate.gs`): tab PARTNERS · PNOTICE · REG; nhắc hằng ngày tạo thông báo theo luật + báo Owner có thông báo chờ gửi; cổng mới quá mốc ⇒ email 1 lần (Owner + quản lý);
    thứ Hai: bảng tuyển sinh & cổng trong email tổng hợp tuần của quản lý.
