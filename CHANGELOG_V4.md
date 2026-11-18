# Thay đổi MolQuest phiên bản 4

## Giao diện

- Thay nền Thành phố bằng ảnh sàn năm bệ do người dùng cung cấp.
- Bố trí lại năm trạm để quan sát và thao tác trong một màn hình desktop chuẩn.
- Làm rõ trạng thái, tiến độ và vùng bấm của từng trạm.
- Thu gọn nội dung chào và gợi ý để không che bản đồ.
- Chuẩn hóa modal bài tập và lab theo cấu trúc header, body cuộn duy nhất và footer cố định.
- Bổ sung quy tắc chống tràn, chống cuộn ngang và ngắt dòng vô lý.

## Cá nhân hóa

- Mở khung nhập tên ở lần truy cập đầu.
- Loại bỏ tên mẫu cố định.
- Đồng bộ tên và tiến độ trên Thành phố, Dashboard, Sổ tay, thử thách và lab.
- Bổ sung đổi tên, đặt lại hành trình và xử lý lỗi lưu cục bộ.

## Lab

- Chuyển toàn bộ sáu lab sang sơ đồ mô phỏng 2D sạch, không chồng ảnh thật với mảng hiệu ứng hình học.
- Thống nhất bố cục theo mẫu tham khảo: vùng mô phỏng lớn bên trái; mục tiêu, bước hiện tại, quan sát và một nút thao tác chính bên phải.
- Mỗi lab có bốn trạng thái riêng; hiện tượng nằm đúng trong dụng cụ và chỉ xuất hiện sau thao tác tương ứng.
- Tách hiệu ứng theo bản chất của từng phản ứng.
- Sửa mô phỏng CuO để đổi màu trên dây đồng, không phủ khối đen lên dụng cụ.
- Sửa phenol và nước bromine để cùng thể hiện mất màu và kết tủa trắng.
- Sửa tráng bạc để bạc bám dần trên mặt trong ống nghiệm.
- Sửa acid và hydrogencarbonate để CO2 sinh ở vùng tiếp xúc và giảm dần.
- Sửa ester hóa để hai lớp chỉ xuất hiện sau bước xử lý bằng dung dịch NaCl bão hòa.
- Sửa lab thế – tách để hai nhánh có điều kiện và sản phẩm riêng.

## Dữ liệu học tập

- Bổ sung mô hình dữ liệu lý thuyết, phản ứng, bài tập và lab có cấu trúc.
- Bổ sung kiểm tra mã câu, đáp án, tham chiếu, ảnh và trạng thái thẩm định.
- Sửa các lỗi nguồn đã xác định: nhãn phương án lặp, ký tự rác, lỗi chính tả và đáp án không khớp lời giải.
- Chuẩn hóa chuỗi chuyển hóa A.11 từ benzene đến styrene thành một sơ đồ hoàn chỉnh.
- Không nhập các câu bị mất hình hoặc chưa thể xác định phương án.

## Kiểm thử

- Chạy trực tiếp đủ 24 bước của sáu lab, xác nhận sáu phương trình chỉ mở sau bước cuối.
- Chạy trọn một chặng năm câu, xác nhận hộp thoại không tràn ngang, không có ngắt dòng thủ công và kết quả lưu đúng.
- Bổ sung kiểm tra tĩnh cho JSON, mô-đun lab, đường dẫn tài nguyên và cú pháp JavaScript.
- Bổ sung danh mục nghiệm thu P0, P1 và kiểm tra riêng cho từng lab.
- Bổ sung ma trận thiết bị, trình duyệt, thu phóng, khả năng tiếp cận và hiệu năng.

## Triển khai

- Giữ kiến trúc web tĩnh, tương thích GitHub Pages.
- Không thêm yêu cầu máy chủ hoặc khóa API.
- Giữ `index.html` ở thư mục gốc của gói phát hành.

