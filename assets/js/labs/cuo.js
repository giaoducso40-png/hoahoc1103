export default{
 id:"cuo",
 name:"Alcohol và CuO",
 topic:"alcohol",
 warning:"Dây đồng nóng và ethanol dễ cháy. Phải đưa dây ra khỏi ngọn lửa trước khi hạ vào mẫu; không ngửi trực tiếp ethanal.",
 objective:"Quan sát đúng sự biến đổi trên bề mặt dây đồng: Cu đỏ chuyển thành CuO đen, rồi CuO bị ethanol khử để lộ lại Cu đỏ.",
 liquid:"#eef1e9",
 prediction:[
  "Lớp CuO đen giảm dần và đồng đỏ xuất hiện trở lại",
  "Toàn bộ chất lỏng chuyển thành màu đen"
 ],
 steps:[
  {
   title:"Nung dây đồng sạch trong không khí",
   text:"Đưa phần giữa của dây đồng vào ngọn lửa. Giữ cố định để oxygen trong không khí oxi hóa đều bề mặt dây.",
   action:"Nung dây đồng",
   observation:"Màu đỏ đồng tối dần rồi chuyển thành lớp CuO màu đen chỉ trên bề mặt dây; dụng cụ và chất lỏng không đổi màu.",
   visual:"black-cuo"
  },
  {
   title:"Đưa dây ra khỏi ngọn lửa và hạ vào ethanol",
   text:"Tắt gia nhiệt, di chuyển dây CuO còn nóng sang ống nghiệm và hạ phần phủ đen vào mẫu ethanol.",
   action:"Hạ dây vào ethanol",
   observation:"Dây rời khỏi vùng lửa rồi hạ xuống mẫu. Chỉ phần CuO tiếp xúc ethanol bắt đầu phản ứng; không có khối đen che dụng cụ.",
   visual:"immersed-cuo"
  },
  {
   title:"Theo dõi lớp CuO bị khử",
   text:"Giữ dây trong mẫu và quan sát màu thay đổi lan dần dọc theo phần dây đang tiếp xúc với ethanol.",
   action:"Quan sát đổi màu",
   observation:"Lớp CuO đen mất dần để lộ màu đỏ đồng. Đồng thời, ethanol bị oxi hóa thành ethanal và tạo nước.",
   visual:"copper-restored"
  },
  {
   title:"Đối chiếu hiện tượng và chốt kết luận",
   text:"Dấu hiệu trực quan phải nằm trên dây: Cu đỏ tạo CuO đen khi nung, sau đó CuO đen trở lại Cu đỏ khi oxi hóa ethanol.",
   action:"Hoàn tất lab",
   observation:"Dây đồng trở lại màu đỏ ở vùng đã phản ứng; mẫu không bị nhuộm đen và không xuất hiện bọt khí vô căn cứ.",
   visual:"cuo-concluded"
  }
 ],
 equation:"2Cu + O₂ → 2CuO\nCH₃CH₂OH + CuO → CH₃CHO + Cu + H₂O"
};
