# Kế hoạch nâng cấp MolQuest phiên bản 4

## 1. Mục tiêu

Phiên bản 4 tập trung xử lý bốn nhóm lỗi chính: giao diện Thành phố khó quan sát, thiếu cá nhân hóa người chơi, mô phỏng lab chưa phản ánh đúng hiện tượng hóa học, và nội dung lý thuyết – bài tập chưa được kiểm soát bằng dữ liệu có cấu trúc.

Web tiếp tục là ứng dụng tĩnh chạy trên GitHub Pages. Hồ sơ và tiến độ được lưu trong `localStorage`; không yêu cầu cơ sở dữ liệu hoặc máy chủ riêng.

## 2. Phân công tác nhân

| Mã | Vai trò | Trách nhiệm |
|---|---|---|
| A0 | Điều phối | Khóa phạm vi, quản lý phiên bản, tích hợp và đóng gói |
| A1 | Thiết kế giao diện | Thành phố, trạm, modal, responsive, hệ thống chữ |
| A2 | Lập trình cá nhân hóa | Nhập tên, lưu hồ sơ, Dashboard, đổi tên, đặt lại dữ liệu |
| A3 | Kỹ sư mô phỏng | Máy trạng thái và hiệu ứng riêng cho sáu lab |
| A4 | Kiểm tra Hóa học | Phương trình, điều kiện, hiện tượng, kết luận, an toàn |
| A5 | Nội dung học tập | Lý thuyết, câu hỏi, đáp án, giải thích, lỗi thường gặp |
| A6 | Kiểm thử | Giao diện, chức năng, nội dung, hồi quy và hiệu năng |

Mỗi lab chỉ được khóa khi A3 hoàn tất mô phỏng, A4 xác nhận nội dung và A6 vượt qua toàn bộ kiểm tra bắt buộc.

## 3. Kế hoạch thực hiện

### Giai đoạn 0 Kiểm kê và sao lưu

- Giữ nguyên gói V3 làm bản đối chiếu.
- Kiểm kê route, mô-đun JavaScript, CSS, ảnh, âm thanh và dữ liệu câu hỏi.
- Xác định lỗi P0, P1 và P2.
- Chốt ảnh sàn năm bệ làm nền Thành phố.
- Chốt ba kích thước desktop bắt buộc: 1366 × 768, 1440 × 900 và 1920 × 1080.

### Giai đoạn 1 Thành phố và cá nhân hóa

- Đặt năm trạm trên đúng năm bệ của ảnh sàn.
- Hiển thị đủ năm trạm trong một vùng nhìn; không kéo trang để tìm trạm.
- Thu gọn lời chào, gợi ý và tiến độ thành lớp phủ không che trạm.
- Mỗi trạm có tên, biểu tượng, vùng bấm rõ và trạng thái chưa học, đang học hoặc hoàn thành.
- Lần đầu truy cập phải mở khung nhập tên; không hiển thị tên mẫu cố định.
- Lưu tên, tiến độ, kết quả câu hỏi và lab trên thiết bị.
- Cho phép đổi tên nhưng giữ tiến độ; đặt lại dữ liệu phải xác nhận hai bước.
- Dashboard và Sổ tay dùng đúng hồ sơ người đang chơi.

### Giai đoạn 2 Chuẩn hóa ba lab đầu

1. **Thế hay tách:** hai nhánh NaOH dung dịch và KOH trong ethanol phải khác rõ điều kiện, sản phẩm và diễn biến.
2. **Alcohol và CuO:** dây đồng đỏ chuyển đen khi tạo CuO, sau đó phần CuO tiếp xúc alcohol trở lại màu đỏ đồng.
3. **Phenol và nước bromine:** màu bromine nhạt dần đồng thời kết tủa trắng hình thành trong dung dịch.

### Giai đoạn 3 Chuẩn hóa ba lab còn lại

4. **Phản ứng tráng bạc:** bạc bám dần trên mặt trong ống nghiệm; ketone đối chứng không tạo lớp bạc.
5. **Acid và hydrogencarbonate:** bọt CO2 phát sinh tại vùng tiếp xúc, nổi lên và giảm dần khi chất phản ứng cạn.
6. **Điều chế ester:** chỉ tách hai lớp sau khi gia nhiệt cách thủy, làm nguội và xử lý bằng dung dịch NaCl bão hòa; không dùng đổi màu để kết luận tạo ester.

Mỗi lab phải có trạng thái ban đầu, thao tác theo bước, hiện tượng tương ứng, phản hồi khi sai thứ tự, nút làm lại, kết luận và câu hỏi kiểm tra.

### Giai đoạn 4 Dữ liệu lý thuyết và bài tập

- Tổ chức dữ liệu theo chuỗi: chủ đề → bài học → khái niệm → phản ứng → lab → câu hỏi.
- Tách chất phản ứng, sản phẩm, điều kiện, hiện tượng và giải thích thành các trường riêng.
- Không đưa nguyên văn tài liệu Word vào ứng dụng khi công thức hoặc hình đã mất.
- Mỗi câu có mã, chủ đề, mức độ, đề, phương án, đáp án, lời giải, gợi ý, lỗi thường gặp và trạng thái thẩm định.
- Sửa câu có đáp án, nhãn phương án, công thức hoặc chính tả sai trước khi nhập.
- Không nhập câu chỉ còn A, B, C, D rỗng do mất hình cấu tạo.

### Giai đoạn 5 Kiểm thử và đóng gói

- Chạy kiểm tra dữ liệu và cú pháp JavaScript.
- Kiểm tra mọi route và sáu lab trên Chrome, Edge và Firefox.
- Chụp và đối chiếu giao diện ở các kích thước bắt buộc.
- Kiểm tra thao tác bàn phím, độ tương phản và chế độ giảm chuyển động.
- Kiểm tra không có thanh cuộn ngang, cuộn lồng hoặc footer che nội dung.
- Nén toàn bộ nội dung thư mục dự án sao cho `index.html` nằm ngay ở gốc tệp ZIP.

## 4. Tiêu chuẩn hoàn thành

### Giao diện

- Không có cuộn ngang trên trang hoặc modal.
- Thành phố hiển thị đủ năm trạm trong một màn hình desktop chuẩn.
- Nút chính, đáp án và trạng thái luôn nhìn thấy và thao tác được.
- Không có chữ bị cắt, chồng, mất dấu hoặc xuống dòng giữa cụm chưa hết nghĩa.
- Đoạn lý thuyết, câu hỏi và lời giải căn đều hai lề; nhãn và nút không căn đều.

### Mô phỏng

- Mỗi thao tác tạo đúng một thay đổi quan sát được.
- Hiệu ứng xảy ra đúng vị trí, đúng thời điểm và đúng chiều diễn biến.
- Không dùng chung hiệu ứng bọt, đổi màu hoặc kết tủa cho các phản ứng khác bản chất.
- Không thể bỏ qua bước bắt buộc; làm lại đưa lab về đúng trạng thái ban đầu.

### Nội dung

- Phương trình cân bằng, điều kiện và sản phẩm đúng.
- Đáp án tồn tại trong danh sách phương án và lời giải dẫn đến đúng đáp án.
- Không trùng mã câu, nhãn phương án hoặc nội dung phương án.
- Công thức hóa học, chỉ số và mũi tên hiển thị nguyên vẹn.

## 5. Cách chạy cục bộ

Từ thư mục chứa `index.html`, chạy một máy chủ tĩnh:

```bash
python3 -m http.server 8000
```

Mở `http://localhost:8000`. Không mở trực tiếp bằng đường dẫn `file://` vì mô-đun JavaScript và dữ liệu JSON có thể bị trình duyệt chặn.

## 6. Cách đóng gói và đưa lên GitHub Pages

1. Chạy `python3 tests/verify.py` và chỉ đóng gói khi kiểm tra đạt.
2. Nén toàn bộ nội dung bên trong thư mục dự án, không nén thêm một thư mục bọc bên ngoài.
3. Kiểm tra `index.html`, `.nojekyll`, `assets/` và `tests/` nằm ở tầng gốc của ZIP.
4. Tải toàn bộ nội dung lên nhánh phát hành.
5. Bật GitHub Pages theo nhánh và thư mục gốc.

