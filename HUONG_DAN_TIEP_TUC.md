# Hướng dẫn tiếp tục dự án MolQuest ở tài khoản khác

## 1. Tệp cần chuyển

Chỉ cần tải lên tài khoản mới tệp phát hành `MolQuest_Hoa11_GitHubPages_FINAL_V5.zip`. Gói này đã chứa:

- toàn bộ mã nguồn website chạy tĩnh trên GitHub Pages;
- ngân hàng câu hỏi tại `assets/data/questions.json`;
- dữ liệu lý thuyết tại `assets/data/theory.json`;
- tài liệu Word nguồn tại `sources/Dan_xuat_hydrocarbon_lop_11.docx`;
- sáu mô phỏng lab và bộ kiểm thử;
- chính tệp hướng dẫn này.

## 2. Câu lệnh giao việc ở tài khoản mới

Sau khi tải ZIP lên, có thể dùng nguyên văn yêu cầu sau:

> Giải nén gói MolQuest. Đọc README.md, HUONG_DAN_TIEP_TUC.md, QA_CHECKLIST.md và chạy `python3 tests/verify.py` trước khi sửa. Giữ website tĩnh tương thích GitHub Pages, không thêm framework hoặc API. Khi sửa lab phải kiểm tra trực tiếp đủ bốn trạng thái của cả sáu lab; dụng cụ 2D phải đúng cấu tạo, đúng vị trí, hiện tượng chỉ xuất hiện ở đúng bước. Không làm que đồng rơi hoặc biến dạng; CuO chỉ đổi màu trên dây; nước bromine mất màu đồng thời tạo kết tủa trắng; bạc bám thành trong ống A; CO₂ sinh từ vùng tiếp xúc; ester chỉ kết luận sau khi tách hai lớp với NaCl bão hòa. Sau khi sửa, chạy kiểm thử, xem ở 1366×768, 1024×768 và 390×844, rồi đóng ZIP với index.html ở ngay thư mục gốc.

## 3. Cách chạy và kiểm tra

Từ thư mục có `index.html`:

```bash
python3 tests/verify.py
python3 -m http.server 8080
```

Mở `http://localhost:8080` và kiểm tra:

1. Thành phố: tên khu không đè công trình, robot hoặc nút.
2. Giao diện chung: chữ tiếng Việt đúng font, không bị che, không tràn ngang.
3. Mỗi lab: bấm đủ bốn bước, đối chiếu hình vẽ với phần “Vừa quan sát”.
4. Dashboard, Sổ tay và Thử thách: dữ liệu tải được, nút hoạt động, không lỗi Console.
5. Chạy lại `python3 tests/verify.py`; chỉ phát hành khi kết quả là `ĐẠT`.

## 4. Chuẩn hình vẽ và hiện tượng bắt buộc

| Lab | Dụng cụ bắt buộc | Hiện tượng bắt buộc |
|---|---|---|
| Thế hay tách | Hai ống nghiệm trong bể cách thủy, nhánh dẫn khí riêng | Nhánh A tạo alcohol; nhánh B tạo propene, khí đi theo đường dẫn |
| Alcohol và CuO | Dây đồng có vòng, giá-kẹp, ống ethanol và đèn cồn | Dây đỏ hóa đen khi nung; phần CuO nóng hạ vào ethanol rồi trở lại màu đồng |
| Phenol–bromine | Ống nghiệm trên giá và ống nhỏ giọt có bóng bóp, thân, đầu nhỏ | Màu bromine mất dần; kết tủa trắng xuất hiện trong dung dịch; không sinh khí |
| Tráng bạc | Hai ống A/B, thuốc thử Tollens, bể nước ấm | Chỉ ống A có màng bạc mỏng bám mặt trong; ống B không đổi |
| Acid–hydrogencarbonate | Bình tam giác hở và thìa NaHCO₃ | Bột rơi vào dung dịch; bọt CO₂ xuất phát tại vùng tiếp xúc rồi đi lên |
| Điều chế ester | Ống phản ứng trong bể cách thủy, đèn cồn, ống nhận chứa NaCl bão hòa | Tắt đèn trước khi chuyển; sản phẩm tách hai lớp, pha hữu cơ ở trên |

## 5. Các tệp quan trọng

- `assets/js/stations/labs.js`: dựng sơ đồ SVG và điều phối trạng thái lab.
- `assets/js/labs/*.js`: nội dung bốn bước, hiện tượng và phương trình.
- `assets/css/lab-diagrams-v6.css`: hình học, màu và chuyển trạng thái của dụng cụ.
- `assets/css/lab-*-v5.css`: hiệu chỉnh riêng từng lab.
- `assets/data/questions.json`: câu hỏi số hóa.
- `assets/data/theory.json`: lý thuyết số hóa.
- `tests/verify.py`: kiểm tra tĩnh bắt buộc trước khi đóng gói.

## 6. Quy tắc đóng gói

- `index.html` phải nằm ngay tầng gốc của ZIP.
- Không đưa thư mục `work`, tệp tạm, ảnh chụp kiểm thử hoặc bộ nhớ trình duyệt vào ZIP.
- Không xóa thư mục `sources` vì đây là nguồn đối chiếu câu hỏi/lý thuyết.
- Không phát hành nếu bộ kiểm thử báo lỗi hoặc có lab chưa được chạy trực tiếp đủ bốn bước.

