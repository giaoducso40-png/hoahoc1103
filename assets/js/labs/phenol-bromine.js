const phenolBromineLab = {
  id: "phenol-bromine",
  name: "Phenol và nước bromine",
  topic: "phenol",
  warning: "Phenol độc, gây bỏng; bromine độc và ăn mòn. Thí nghiệm thật phải dùng kính, găng tay và thực hiện trong tủ hút.",
  objective: "Theo dõi đồng thời sự mất màu của nước bromine và sự hình thành kết tủa trắng 2,4,6-tribromophenol.",
  liquid: "#d98732",
  prediction: [
    "Màu bromine mất dần và kết tủa trắng xuất hiện",
    "Chỉ xuất hiện bọt khí không màu"
  ],
  steps: [
    {
      id: "phenol-sample",
      stage: "Mẫu ban đầu",
      title: "Chuẩn bị mẫu phenol",
      text: "Đặt ống nghiệm chứa dung dịch phenol loãng, gần như không màu, vào giá đỡ.",
      action: "Đặt mẫu phenol",
      observation: "Dung dịch phenol loãng gần như không màu; chưa có kết tủa trong ống nghiệm.",
      visual: "phenol-ready",
      effect: {
        bromineColor: 1,
        precipitateLevel: 0,
        dropCount: 0
      }
    },
    {
      id: "add-bromine",
      stage: "Thao tác",
      title: "Thêm nước bromine từng giọt",
      text: "Nhỏ chậm từng giọt nước bromine vào mẫu để quan sát rõ vùng tiếp xúc; không rót nhanh toàn bộ thuốc thử.",
      action: "Nhỏ từng giọt",
      observation: "Các giọt màu vàng nâu đi vào dung dịch; màu bắt đầu nhạt tại vùng tiếp xúc với phenol.",
      visual: "bromine-drops",
      effect: {
        bromineColor: 0.65,
        precipitateLevel: 0.18,
        dropCount: 3
      }
    },
    {
      id: "observe-reaction",
      stage: "Hiện tượng",
      title: "Theo dõi mất màu và tạo kết tủa",
      text: "Lắc nhẹ ống nghiệm rồi chờ phản ứng diễn ra. Quan sát màu dung dịch và lượng chất rắn trắng trong lòng chất lỏng.",
      action: "Quan sát phản ứng",
      observation: "Màu bromine mất dần; các hạt kết tủa trắng 2,4,6-tribromophenol xuất hiện và tăng dần.",
      visual: "precipitate-growing",
      effect: {
        bromineColor: 0.12,
        precipitateLevel: 0.78,
        dropCount: 0
      }
    },
    {
      id: "phenol-conclusion",
      stage: "Kết luận",
      title: "Chốt dấu hiệu nhận biết",
      text: "Nhóm hydroxy hoạt hóa vòng benzene, làm bromine thế vào các vị trí 2, 4 và 6 của vòng thơm.",
      action: "Hoàn tất lab",
      observation: "Nước bromine mất màu và kết tủa trắng xuất hiện là hai dấu hiệu phải được quan sát đồng thời.",
      visual: "precipitate-settled",
      effect: {
        bromineColor: 0,
        precipitateLevel: 1,
        dropCount: 0
      }
    }
  ],
  equation: "C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ + 3HBr",
  product: "2,4,6-tribromophenol",
  conclusion: "Phenol làm mất màu nước bromine và tạo kết tủa trắng 2,4,6-tribromophenol.",
  commonErrors: [
    "Chỉ mô phỏng nước bromine mất màu nhưng không tạo kết tủa trắng.",
    "Tạo bọt khí hoặc đổi dung dịch sang màu không có trong hiện tượng thật.",
    "Cho kết tủa xuất hiện trước khi nước bromine tiếp xúc với phenol."
  ]
};

export default phenolBromineLab;

