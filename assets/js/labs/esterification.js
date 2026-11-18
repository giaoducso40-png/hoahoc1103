export default {
  id: "esterification",
  name: "Điều chế ester",
  topic: "acid",
  warning: "H₂SO₄ đặc ăn mòn mạnh; ethanol và ethyl ethanoate dễ cháy. Chỉ đun cách thủy, không ngửi trực tiếp sản phẩm.",
  objective: "Theo dõi đúng trình tự ester hóa thuận nghịch và nhận biết sản phẩm qua sự tách hai lớp sau khi thêm dung dịch NaCl bão hòa.",
  liquid: "#e5eee2",
  prediction: [
    "Sau khi thêm NaCl bão hòa, lớp ester tách ở phía trên",
    "Hỗn hợp đổi màu là bằng chứng đã tạo ester"
  ],
  steps: [
    {
      title: "Trộn các chất phản ứng",
      text: "Cho ethanol và acetic acid vào ống nghiệm khô, sau đó thêm từ từ vài giọt H₂SO₄ đặc. Lắc nhẹ để hỗn hợp đồng nhất.",
      action: "Trộn ethanol, acid và xúc tác",
      observation: "Ba chất tạo hỗn hợp lỏng đồng nhất, gần như không màu. Chưa có dấu hiệu màu sắc nào chứng minh ester đã hình thành.",
      visual: "ester-mixing"
    },
    {
      title: "Đun cách thủy",
      text: "Đặt ống nghiệm vào bể nước ấm. Nhiệt truyền từ nước sang hỗn hợp; không đun trực tiếp bằng ngọn lửa.",
      action: "Bật bể cách thủy",
      observation: "Nước trong bể chuyển động nhẹ và hỗn hợp ấm dần nhưng vẫn gần như không màu. H₂SO₄ đặc làm xúc tác và hỗ trợ hút nước.",
      visual: "ester-water-bath"
    },
    {
      title: "Làm nguội và thêm NaCl bão hòa",
      text: "Lấy ống nghiệm khỏi bể, để nguội rồi rót hỗn hợp vào ống chứa dung dịch NaCl bão hòa. Lắc nhẹ và đặt yên.",
      action: "Làm nguội và thêm nước muối",
      observation: "Hỗn hợp được chuyển sang pha nước muối. Ranh giới giữa hai pha bắt đầu xuất hiện từ mờ đến rõ.",
      visual: "ester-brine-transfer"
    },
    {
      title: "Quan sát hai lớp",
      text: "Để yên ống nghiệm. Ethyl ethanoate ít tan và có khối lượng riêng nhỏ hơn pha nước muối nên tập trung ở lớp trên.",
      action: "Quan sát sự tách lớp",
      observation: "Hai lớp tách rõ: lớp ester ở phía trên, pha nước muối ở phía dưới. Sự tách lớp sau xử lý là dấu hiệu quan sát; đổi màu không phải bằng chứng.",
      visual: "ester-two-layers"
    }
  ],
  equation: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O  (H₂SO₄ đặc, đun cách thủy)"
};
