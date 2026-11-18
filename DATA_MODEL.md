# Mô hình dữ liệu lý thuyết và bài tập MolQuest

## 1. Nguyên tắc

- Dữ liệu học tập phải tách khỏi mã giao diện.
- Không lưu công thức dưới dạng chuỗi đã chèn xuống dòng thủ công.
- Chất phản ứng, sản phẩm, điều kiện, hiện tượng và giải thích là các trường riêng.
- Mỗi bản ghi có phiên bản nội dung, nguồn và trạng thái thẩm định.
- Chỉ dữ liệu đã kiểm tra Hóa học mới được đưa vào tuyến chơi chính.

## 2. Bản ghi lý thuyết

```json
{
  "id": "HAL-SUB-01",
  "moduleId": "halogen",
  "title": "Phản ứng thế nguyên tử halogen",
  "objectives": ["Phân biệt phản ứng thế và phản ứng tách"],
  "prerequisites": ["Liên kết C-X"],
  "conceptBlocks": [],
  "reactions": ["RX-AQOH"],
  "misconceptions": [],
  "safetyNotes": [],
  "relatedLabs": ["substitution"],
  "quickChecks": [],
  "sourceRef": "Tài liệu Dẫn xuất hydrocarbon lớp 11",
  "contentVersion": "4.0",
  "reviewStatus": "chemistry-reviewed"
}
```

## 3. Bản ghi phản ứng

```json
{
  "id": "RX-AQOH",
  "reactants": ["R-X", "NaOH"],
  "products": ["R-OH", "NaX"],
  "conditionAbove": "đun nóng",
  "conditionBelow": "dung dịch",
  "equationText": "R-X + NaOH -> R-OH + NaX",
  "equationTex": "\\ce{R-X + NaOH ->[t^\\circ] R-OH + NaX}",
  "phenomenon": "",
  "explanation": "Nhóm hydroxy thay nguyên tử halogen.",
  "balanced": true,
  "altText": "Dẫn xuất halogen phản ứng với natri hydroxide tạo alcohol"
}
```

## 4. Bản ghi bài tập

```json
{
  "id": "HAL-VD-008",
  "moduleId": "halogen",
  "level": "van-dung",
  "type": "single-choice",
  "stem": {
    "text": "Cho dãy chuyển hóa sau...",
    "reactionId": "RX-HAL-A11"
  },
  "choices": [
    {"id": "A", "text": "1-bromo-1-phenylethane và styrene"}
  ],
  "correctAnswer": "A",
  "solutionSteps": [],
  "hints": [],
  "misconceptionTags": [],
  "relatedTheory": ["HAL-SUB-01"],
  "relatedLab": "substitution",
  "sourceRef": "A.11",
  "reviewStatus": "verified"
}
```

## 5. Bản ghi lab

```json
{
  "id": "phenol-bromine",
  "moduleId": "phenol",
  "objective": "Nhận biết phenol bằng nước bromine",
  "chemicals": [],
  "equipment": [],
  "safety": [],
  "predictionOptions": [],
  "steps": [
    {
      "id": "add-bromine",
      "instruction": "Nhỏ từ từ nước bromine",
      "actionLabel": "Nhỏ 3 giọt",
      "effect": "decolorize-and-precipitate",
      "observation": "Màu bromine nhạt dần và kết tủa trắng xuất hiện"
    }
  ],
  "reactionId": "RX-PHE-BR2",
  "reviewStatus": "chemistry-reviewed"
}
```

## 6. Năm mô-đun lý thuyết

| Mô-đun | Nội dung tối thiểu |
|---|---|
| Dẫn xuất halogen | Khái niệm, phân loại, bậc, danh pháp, thế, tách HX, quy tắc sản phẩm chính, an toàn |
| Alcohol | Khái niệm, phân loại, danh pháp, liên kết hydrogen, Na, tách nước, CuO, Cu(OH)2, điều chế |
| Phenol | Phân biệt với alcohol thơm, tính acid, NaOH, nước bromine, nitro hóa, an toàn |
| Hợp chất carbonyl | Aldehyde, ketone, danh pháp, C=O, khử, Tollens, Cu(OH)2, iodoform, điều chế |
| Carboxylic acid | Khái niệm, danh pháp, liên kết hydrogen, tính acid, muối, carbonate, ester hóa |

## 7. Kiểm tra dữ liệu tự động

- ID phải duy nhất trong từng tập dữ liệu.
- `moduleId`, `reactionId`, `relatedTheory` và `relatedLab` phải tham chiếu tới bản ghi có thật.
- `correctAnswer` phải tồn tại trong `choices`.
- Câu `single-choice` không được có hai phương án cùng ID hoặc cùng nội dung.
- Câu có ảnh cấu tạo phải có đường dẫn ảnh tồn tại và văn bản thay thế.
- Phương trình phải có `balanced: true` sau khi đã kiểm tra nguyên tố và điện tích.
- Bản ghi có `reviewStatus: draft` không được xuất hiện trong tuyến thử thách chính.
- Không có `<br>`, ký tự rác hoặc chuỗi công thức đã ngắt dòng trong dữ liệu.

## 8. Phân tầng ngân hàng bài tập

Mục tiêu dài hạn là tối thiểu 150 câu đã thẩm định, mỗi mô-đun 30 câu:

| Mức độ | Số câu mỗi mô-đun |
|---|---:|
| Nhận biết | 8 |
| Thông hiểu | 12 |
| Vận dụng | 10 |

Mỗi câu cần có tối thiểu hai gợi ý tăng dần, lời giải theo bước và mã lỗi nhận thức. Phản hồi phải nêu đúng phần kiến thức cần xem lại, không chỉ báo “Chưa đúng”.

