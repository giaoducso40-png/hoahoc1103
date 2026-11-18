# Danh mục kiểm thử MolQuest phiên bản 4

## 1. Cổng phát hành P0

Chỉ cần một mục P0 không đạt thì không được phát hành.

- [ ] Lần đầu mở web xuất hiện khung nhập tên trước khi có nội dung cá nhân hóa.
- [ ] Không có tên mẫu hoặc tên cố định trước khi người chơi nhập.
- [ ] Tải lại trang vẫn giữ tên và tiến độ đúng hồ sơ.
- [ ] Thành phố hiển thị đủ năm trạm tại 1366 × 768, 1440 × 900 và 1920 × 1080.
- [ ] Không có thanh cuộn ngang ở trang, modal, sơ đồ phản ứng hoặc đáp án.
- [ ] Modal chỉ có một vùng cuộn dọc; trang nền đứng yên khi modal mở.
- [ ] Footer không che phương án cuối hoặc nút hành động.
- [ ] Sáu lab thực hiện đúng thứ tự và đúng hiện tượng.
- [ ] Không có phương trình, điều kiện, sản phẩm hoặc đáp án sai.
- [ ] Không có lỗi JavaScript, nút chết, trang trắng hoặc mất trạng thái.
- [ ] Ảnh sàn Thành phố không bị kéo méo hoặc cắt mất bệ.

## 2. Giao diện và văn bản

- [ ] Không chèn `<br>` thủ công trong câu hỏi, phương án, lý thuyết và lời giải.
- [ ] Không ngắt dòng trước dấu câu.
- [ ] Không tách tên chất, công thức, số kèm đơn vị hoặc điều kiện phản ứng.
- [ ] Câu hỏi và lời giải dùng `text-align: justify` và `text-align-last: left`.
- [ ] Nút, nhãn, tiêu đề ngắn và phương án không bị kéo giãn khoảng trắng.
- [ ] Công thức dài tự co hoặc ngắt tại vị trí đã biên tập; không cuộn ngang.
- [ ] Tên người chơi dài không làm vỡ header hoặc Dashboard.
- [ ] Vùng bấm tối thiểu 44 × 44 px; viền focus nhìn rõ.
- [ ] Màu chữ và nền đạt WCAG AA.
- [ ] Giao diện vẫn dùng được ở mức thu phóng 200%.

## 3. Cá nhân hóa

- [ ] Tên 2–30 ký tự tiếng Việt được lưu chính xác.
- [ ] Tên toàn khoảng trắng hoặc ký tự không hợp lệ bị từ chối với thông báo rõ.
- [ ] Nhấn Enter xác nhận nhập tên; Esc không làm mất dữ liệu.
- [ ] Dashboard, Sổ tay, kết quả và lời chào dùng cùng một tên.
- [ ] Đổi tên cập nhật mọi vị trí nhưng giữ nguyên tiến độ.
- [ ] Hủy đặt lại không xóa dữ liệu.
- [ ] Xác nhận đặt lại xóa hồ sơ và trở về khung nhập tên.
- [ ] Khi `localStorage` lỗi, ứng dụng vẫn chạy và báo tiến độ chưa được lưu.

## 4. Kiểm tra từng lab

### Thế hay tách

- [ ] Hai nhánh hiển thị điều kiện khác nhau.
- [ ] Kiềm nước tạo propan-1-ol; KOH/ethanol và nhiệt tạo propene.
- [ ] Không tạo bong bóng ngẫu nhiên quanh cả hai ống.

### Alcohol và CuO

- [ ] Màu đen chỉ phủ trên bề mặt dây đồng sau khi nung.
- [ ] Phần CuO tiếp xúc alcohol giảm màu đen và lộ màu đỏ đồng.
- [ ] Không có khối đen che dụng cụ hoặc đổi màu toàn nền.

### Phenol và nước bromine

- [ ] Màu vàng nâu nhạt dần.
- [ ] Kết tủa trắng hình thành trong dung dịch và tăng dần.
- [ ] Không mô phỏng tạo khí.

### Tráng bạc

- [ ] Bạc bám dần ở mặt trong ống nghiệm ethanal.
- [ ] Ống propanone đối chứng không tạo lớp bạc.
- [ ] Gia nhiệt bằng bể nước, không đun trực tiếp.

### Acid và hydrogencarbonate

- [ ] Bọt CO2 chỉ xuất hiện sau khi hai chất tiếp xúc.
- [ ] Bọt sinh từ vùng chất rắn, nổi lên và giảm dần.
- [ ] Không dùng mô tả “không có kết tủa kim loại”.
- [ ] Hệ sinh khí không bịt kín.

### Điều chế ester

- [ ] Hỗn hợp không đổi màu đặc trưng khi ester hóa.
- [ ] Chỉ tách lớp sau bước làm nguội và thêm NaCl bão hòa.
- [ ] Lớp ester nằm trên pha nước muối.

## 5. Dữ liệu bài tập

- [ ] Mã câu không trùng.
- [ ] Mỗi câu một đáp án chỉ có đúng một đáp án hợp lệ.
- [ ] Không trùng nhãn A, B, C, D.
- [ ] Không có phương án rỗng do mất hình.
- [ ] Không còn lỗi “Đung nóng”, “cabonyl”, “car bonyl” hoặc ký tự `#d`.
- [ ] Câu dẫn xuất halogen về thí nghiệm tạo alcohol dùng (a), (c), đáp án 2.
- [ ] Chuỗi A.11 hiển thị nguyên vẹn từ benzene đến styrene, đáp án A.
- [ ] Các câu có công thức hoặc hình đã được xem lại ở 1366 × 768.

## 6. Thiết bị và trình duyệt

| Thiết bị | Kích thước | Chrome | Edge | Firefox hoặc Safari |
|---|---:|---|---|---|
| Laptop trường học | 1366 × 768 | [ ] | [ ] | [ ] |
| Laptop | 1440 × 900 | [ ] | [ ] | [ ] |
| Full HD | 1920 × 1080 | [ ] | [ ] | [ ] |
| Tablet ngang | 1024 × 768 | [ ] |  | [ ] |
| Tablet dọc | 768 × 1024 | [ ] |  | [ ] |
| Điện thoại | 390 × 844 | [ ] |  | [ ] |

## 7. Hiệu năng và khả năng tiếp cận

- [ ] LCP dưới 2,5 giây ở mạng 4G mô phỏng.
- [ ] CLS dưới 0,1.
- [ ] INP dưới 200 ms.
- [ ] Không rò bộ nhớ khi mở và đóng lab nhiều lần.
- [ ] Tab và Shift Tab đi theo thứ tự hợp lý.
- [ ] Enter hoặc Space kích hoạt được nút và trạm.
- [ ] Modal giữ focus; đóng modal trả focus về nút mở.
- [ ] `prefers-reduced-motion` làm giảm chuyển động nhưng không bỏ qua trạng thái.
- [ ] Trình đọc màn hình đọc được tên modal, bước lab và phản hồi đúng sai.

