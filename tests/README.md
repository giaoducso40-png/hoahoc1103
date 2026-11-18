# Kiểm thử MolQuest

## Kiểm tra tĩnh trước khi đóng gói

Từ thư mục gốc dự án, chạy:

```bash
python3 tests/verify.py
```

Bản phát hành chỉ được đóng gói khi kết quả là `ĐẠT`. Bộ kiểm tra xác nhận:

- đủ dữ liệu lý thuyết, bài tập, sáu lab và ảnh sàn Thành phố;
- JSON và JavaScript hợp lệ;
- ID câu hỏi không trùng, nhãn phương án không lặp, đáp án tồn tại;
- tư liệu hình ảnh được tham chiếu đều có trong gói;
- câu A.11 có chuỗi phản ứng hoàn chỉnh và không còn ba thẻ ảnh rời;
- câu 9 Dẫn xuất halogen dùng đáp án D, giải thích đúng hai thí nghiệm (a) và (c);
- không còn lỗi chữ đã biết hoặc thẻ xuống dòng thủ công trong dữ liệu;
- bốn lớp CSS sửa lỗi đã được nạp sau CSS gốc.

## Kiểm tra trực tiếp trên trình duyệt

Khởi động máy chủ tĩnh từ thư mục gốc, chẳng hạn:

```bash
python3 -m http.server 8080
```

Mở ứng dụng tại `http://localhost:8080`. Trong DevTools Console, chạy:

```js
import('/tests/browser-smoke.js').then((module) => module.runSmoke())
```

Chạy lại ở các kích thước sau:

- 1366 × 768
- 1440 × 900
- 1920 × 1080
- 1024 × 768
- 768 × 1024
- 390 × 844

Kiểm tra lần lượt màn hình Thành phố, khung nhập tên, Dashboard, Sổ tay, Thử thách và sáu lab. Báo cáo không được có:

- cuộn ngang hoặc phần tử vượt khỏi khung nhìn;
- hai vùng cuộn dọc lồng nhau;
- nút hoặc vùng bấm nhỏ hơn 44 × 44 px;
- thẻ xuống dòng thủ công trong câu hỏi, đáp án, lý thuyết hoặc hướng dẫn lab;
- hộp thoại vượt màn hình;
- tên người chơi gắn cố định khi chưa tạo hồ sơ.
