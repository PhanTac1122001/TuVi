import { Star, NguHanh, StarCategory } from '../types/tuvi.types';

export interface StarDictionaryEntry {
  name: string;
  element: NguHanh;
  category: StarCategory;
  isGood: boolean;
  meaning: string;
  vanHan: string;
  vatDung: string;
  benhLy: string;
  tuongMao: string;
}

export const STARS_118_DICTIONARY: Record<string, StarDictionaryEntry> = {
  'Tử Vi': {
    name: 'Tử Vi',
    element: 'Thổ',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Đế tinh, chủ sự tôn quý, lãnh đạo, quyền uy, giải trừ tai ách.',
    vanHan: 'Vận đến Tử Vi mưu sự hanh thông, danh tài thăng tiến, quý nhân phò trợ.',
    vatDung: 'Đồ gốm sứ hoàng gia, ngọc bội, ấn chương, bàn làm việc gỗ quý.',
    benhLy: 'Tỳ vị, dạ dày, tiêu hóa, đau đầu do căng thẳng quản lý.',
    tuongMao: 'Diện mạo đĩnh đạc, trán cao, mắt sáng có thần, phong thái uy nghiêm.'
  },
  'Thiên Cơ': {
    name: 'Thiên Cơ',
    element: 'Mộc',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Thiện tinh, chủ mưu lược, trí tuệ, cơ biến, thủ công tinh xảo.',
    vanHan: 'Gặp thời cơ đổi mới, có sự thay đổi chỗ ở/công việc, học tập sáng suốt.',
    vatDung: 'Máy vi tính, thiết bị công nghệ, sách vở, bàn cờ, dụng cụ cơ khí.',
    benhLy: 'Thần kinh, gan mật, mất ngủ, chóng mặt, đau khớp chân tay.',
    tuongMao: 'Khuôn mặt thanh tú, dáng người thon, ánh mắt linh hoạt, nói năng nhã nhặn.'
  },
  'Thái Dương': {
    name: 'Thái Dương',
    element: 'Hỏa',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Nhật tinh, chủ quang minh, danh tiếng, phụ mẫu (cha), quang đại độ lượng.',
    vanHan: 'Công danh hiển đạt, rạng rỡ gia phong, mở rộng tầm ảnh hưởng.',
    vatDung: 'Đèn chiếu sáng, kính mắt, pin mặt trời, thiết bị quang học, vàng bạc.',
    benhLy: 'Mắt, tim mạch, huyết áp, nhiệt chứng trong người, tiền đình.',
    tuongMao: 'Mặt tròn đầy hồng hào, mắt sáng long lanh, giọng vang khỏe khoắn.'
  },
  'Vũ Khúc': {
    name: 'Vũ Khúc',
    element: 'Kim',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Tài tinh, võ tinh, chủ quản lý tiền tài, kỷ luật thép, quyết đoán.',
    vanHan: 'Thuận lợi về đầu tư, tài chính tích tụ, củng cố ngân sách vững chắc.',
    vatDung: 'Két sắt, tiền tệ, kim loại quý, dụng cụ tài chính, công cụ cơ khí.',
    benhLy: 'Phế quản, phổi, viêm họng, xương khớp, răng miệng.',
    tuongMao: 'Khuôn mặt góc cạnh, rắn rỏi, ánh mắt nghiêm nghị, vóc người cân đối chắc khỏe.'
  },
  'Thiên Đồng': {
    name: 'Thiên Đồng',
    element: 'Thủy',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Phúc tinh, chủ nhân từ, hòa nhã, hưởng thụ, thích nghi linh hoạt.',
    vanHan: 'An vui may mắn, có dịp du lịch, ẩm thực, quý nhân nâng đỡ, gia đạo bình hòa.',
    vatDung: 'Bể cá cảnh, bình nước lọc, thực phẩm cao cấp, đồ chơi giải trí.',
    benhLy: 'Bàng quang, thận, tiêu hóa do ăn uống thất thường, phù nề.',
    tuongMao: 'Mặt tròn phúc hậu, tính tình hồn nhiên, da trắng mịn, vóc người tròn trịa.'
  },
  'Liêm Trinh': {
    name: 'Liêm Trinh',
    element: 'Hỏa',
    category: 'Chính tinh',
    isGood: false,
    meaning: 'Tù tinh, đào hoa thứ, chủ kỷ cương pháp luật, tự tôn cao, nghiêm khắc.',
    vanHan: 'Cần chú ý giấy tờ pháp lý, tranh chấp hợp đồng, biến động tình cảm cảm xúc.',
    vatDung: 'Khóa cửa, camera giám sát, văn bản hành chính, đồ điện tử nhiệt cao.',
    benhLy: 'Máu huyết, tim, da liễu, viêm sưng, mất ngủ do áp lực.',
    tuongMao: 'Mắt lộ vẻ sắc sảo, sống mũi thẳng, khuôn mặt nghiêm cẩn, cá tính mạnh.'
  },
  'Thiên Phủ': {
    name: 'Thiên Phủ',
    element: 'Thổ',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Lệnh tinh, kho trời, chủ sự tích lũy, bao dung, quản trị tài sản và gia quyến.',
    vanHan: 'Tài chính ổn định, giữ vững cơ nghiệp, xây dựng củng cố gia môn.',
    vatDung: 'Tủ tài liệu, kho chứa hàng, bất động sản, két sắt, ví da cao cấp.',
    benhLy: 'Tỳ vị, bao tử, rối loạn chuyển hóa, tăng cân mất kiểm soát.',
    tuongMao: 'Tướng mạo đoan trang, trán rộng đầy đặn, giọng nói ấm áp từ hòa.'
  },
  'Thái Âm': {
    name: 'Thái Âm',
    element: 'Thủy',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Nguyệt tinh, chủ điền sản, tiền tài, mẫu thân (mẹ), tình cảm nội tâm sâu sắc.',
    vanHan: 'Lộc về bất động sản, gia đạo ấm êm, mẹ hoặc vợ mang lại may mắn.',
    vatDung: 'Gương soi, ngọc trai, mỹ phẩm, đồ ngủ mềm mại, tranh phong cảnh nước.',
    benhLy: 'Thận âm hư, phụ khoa, bệnh ngoài da, mắt mờ, mất ngủ.',
    tuongMao: 'Da trắng thanh tú, mắt dịu hiền, cử chỉ nhẹ nhàng uyển chuyển.'
  },
  'Tham Lang': {
    name: 'Tham Lang',
    element: 'Thủy',
    category: 'Chính tinh',
    isGood: false,
    meaning: 'Đào hoa tinh, chủ dục vọng, tài nghệ ngoại giao, tính thích phiêu lưu và tâm linh.',
    vanHan: 'Nhiều cơ hội giao tế, tiệc tùng, mở rộng quan hệ; cẩn trọng cám dỗ.',
    vatDung: 'Rượu vang, nước hoa, nhạc cụ nghệ thuật, đồ trang sức lấp lánh.',
    benhLy: 'Gan, mật, đường sinh dục, dị ứng thức ăn hoặc ngộ độc chất kích thích.',
    tuongMao: 'Dáng người cao ráo gợi cảm, mắt đa tình cuốn hút, nụ cười duyên.'
  },
  'Cự Môn': {
    name: 'Cự Môn',
    element: 'Thủy',
    category: 'Chính tinh',
    isGood: false,
    meaning: 'Ám tinh, chủ khẩu tài, ngôn ngữ biện thuyết, soi xét, nghi vấn và nghiên cứu.',
    vanHan: 'Tránh thị phi khẩu thiệt, cẩn ngôn trong giao tiếp; tốt cho giảng dạy/luật sư.',
    vatDung: 'Microphone, máy ghi âm, bàn phát thanh, loa đài, sách luật.',
    benhLy: 'Khoang miệng, vòm họng, răng lợi, hệ tiêu hóa dưới.',
    tuongMao: 'Môi mỏng hoặc khóe miệng sâu, nói năng lưu loát dứt khoát, mắt quan sát tỉ mỉ.'
  },
  'Thiên Tướng': {
    name: 'Thiên Tướng',
    element: 'Thủy',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Ấn tinh, tướng quân trợ tá, chủ sự công minh, trợ lực đắc lực, trọng danh dự.',
    vanHan: 'Thăng quan tiến chức, được ủy quyền trọng trách, đối tác tín nhiệm.',
    vatDung: 'Con dấu cơ quan, đồng phục sang trọng, bằng khen chứng chỉ, mũ nón.',
    benhLy: 'Mặt, đầu, bàng quang, sỏi thận hoặc dị ứng mỹ phẩm.',
    tuongMao: 'Mặt vuông vức đàng hoàng, phong thái chỉnh chu, mắt chính trực.'
  },
  'Thiên Lương': {
    name: 'Thiên Lương',
    element: 'Mộc',
    category: 'Chính tinh',
    isGood: true,
    meaning: 'Ấm tinh, thọ tinh, chủ che chở, giải ách trừ bệnh, đạo đức trưởng bối.',
    vanHan: 'Gặp dữ hóa lành, tai qua nạn khỏi nhờ phúc đức tổ tiên, làm việc thiện.',
    vatDung: 'Thuốc men, thảo dược, chuỗi hạt niệm phật, sách y thuật.',
    benhLy: 'Gan mật, đau nhức xương khớp mãn tính, hệ miễn dịch suy yếu theo tuổi.',
    tuongMao: 'Khuôn mặt đôn hậu, sống mũi cao, tóc hơi sớm bạc hoặc dáng điệu đạo mạo.'
  },
  'Thất Sát': {
    name: 'Thất Sát',
    element: 'Kim',
    category: 'Chính tinh',
    isGood: false,
    meaning: 'Tướng tinh dũng mãnh, chủ quyền lực độc lập, tiên phong đột phá, biến động lớn.',
    vanHan: 'Biến động mạnh mẽ trong sự nghiệp, thay đổi môi trường lớn, xông xáo.',
    vatDung: 'Dao kiếm sưu tầm, vật sắc nhọn, xe phân khối lớn, công cụ thi công.',
    benhLy: 'Phổi, phế quản, chấn thương tay chân, đau cột sống, sẹo mổ.',
    tuongMao: 'Mắt sắc lạnh có uy, lông mày rậm hoặc xếch, vóc người săn chắc nhanh nhẹn.'
  },
  'Phá Quân': {
    name: 'Phá Quân',
    element: 'Thủy',
    category: 'Chính tinh',
    isGood: false,
    meaning: 'Hao tinh dũng lược, chủ tiên phong phá cũ đổi mới, tiêu hao tài lực để tái sinh.',
    vanHan: 'Đập cũ xây mới, đầu tư mạo hiểm lớn, thay đổi mô hình kinh doanh.',
    vatDung: 'Búa, dụng cụ phá dỡ, công trình đang xây dở, tàu thuyền.',
    benhLy: 'Hệ tiết niệu, đường ruột, vết thương do va chạm, trĩ.',
    tuongMao: 'Khuôn mặt tròn nhưng đường nét dữ dội, vai rộng, lưng dày, cử chỉ mau lẹ.'
  },

  // Lục Cát Tinh
  'Tả Phù': {
    name: 'Tả Phù',
    element: 'Thổ',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Trợ tinh, giúp đỡ từ bằng hữu, đối tác, sự phối hợp bền vững.',
    vanHan: 'Có người gánh vác hỗ trợ đắc lực trong công việc.',
    vatDung: 'Bàn tay phụ tá, ghế tựa, phương tiện hỗ trợ.',
    benhLy: 'Tỳ vị hư suy do lo toan nhiều cho người khác.',
    tuongMao: 'Mặt tròn đầy đặn, ánh mắt từ hòa, dễ gần.'
  },
  'Hữu Bật': {
    name: 'Hữu Bật',
    element: 'Thổ',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Trợ tinh khéo léo, đồng tâm hiệp lực, hòa giải xoa dịu xung đột.',
    vanHan: 'Hanh thông nhờ tài khéo léo, có người mách nước chỉ lối.',
    vatDung: 'Tài liệu hướng dẫn, cầu nối giao thông, hợp đồng hợp tác.',
    benhLy: 'Khí huyết không đều, dạ dày ê ẩm.',
    tuongMao: 'Nụ cười tươi tắn, khuôn mặt ưa nhìn, nhanh nhẹn.'
  },
  'Văn Xương': {
    name: 'Văn Xương',
    element: 'Kim',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Khoa bảng tinh, chủ văn chương, bằng cấp, thi cử đỗ đạt, tài hoa giấy mực.',
    vanHan: 'Thi cử đỗ đạt, ký kết giấy tờ thuận lợi, danh tiếng học thuật.',
    vatDung: 'Bút viết, sách vở, bằng khen, máy in.',
    benhLy: 'Mắt cận thị, căng thẳng não bộ do đọc viết nhiều.',
    tuongMao: 'Thư sinh nho nhã, mặt trắng thanh thoát, ngón tay thon dài.'
  },
  'Văn Khúc': {
    name: 'Văn Khúc',
    element: 'Thủy',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Nghệ thuật tinh, chủ biện thuyết, tài lẻ, ca múa nhạc kịch, cảm xúc nhạy bén.',
    vanHan: 'Tỏa sáng về truyền thông nghệ thuật, duyên ăn nói thu hút công chúng.',
    vatDung: 'Nhạc cụ, đàn, tranh vẽ, sổ ghi chép nghệ thuật.',
    benhLy: 'Họng, thanh quản, ho khan kéo dài, tâm trạng đa sầu đa cảm.',
    tuongMao: 'Đôi mắt có hồn mơ màng, nụ cười duyên dáng.'
  },
  'Thiên Khôi': {
    name: 'Thiên Khôi',
    element: 'Hỏa',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Quý nhân tinh, đệ nhất quý tinh, người dẫn dắt cấp cao giúp đỡ trực tiếp.',
    vanHan: 'Được cấp trên cất nhắc, thi cử đứng đầu, gặp đại quý nhân.',
    vatDung: 'Vương miện tượng trưng, bảng vàng, thư giới thiệu từ lãnh đạo.',
    benhLy: 'Đau nửa đầu, nóng nhiệt bốc hỏa đỉnh đầu.',
    tuongMao: 'Tướng mạo khôi ngô tuấn tú, khí phách xuất chúng.'
  },
  'Thiên Việt': {
    name: 'Thiên Việt',
    element: 'Hỏa',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Quý nhân tinh ngầm, trợ lực âm thầm phía sau, may mắn bất ngờ trong nguy khó.',
    vanHan: 'Cơ hội bất ngờ mở ra, được nâng đỡ lúc khó khăn nhất.',
    vatDung: 'Phù trợ hộ mệnh, bảo hiểm nhân thọ, chìa khóa dự phòng.',
    benhLy: 'Nhiệt miệng, viêm xoang mũi.',
    tuongMao: 'Thần thái an tĩnh, đáng tin cậy, ánh mắt thiện cảm.'
  },

  // Lục Sát Tinh
  'Kình Dương': {
    name: 'Kình Dương',
    element: 'Kim',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Hình thương tinh, chủ xung kích, phẫu thuật, tranh đoạt quyết liệt.',
    vanHan: 'Đề phòng đụng độ, tai nạn xây xát chân tay, tiểu phẫu mổ xẻ.',
    vatDung: 'Kéo, dao găm, máy cắt, kim tiêm, cờ lê mũi nhọn.',
    benhLy: 'Chấn thương đầu mặt, mổ xẻ, viêm ruột thừa cấp.',
    tuongMao: 'Mắt có tia gân đỏ, mày xếch, nét mặt cương quyết sắc cạnh.'
  },
  'Đà La': {
    name: 'Đà La',
    element: 'Kim',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Trì trệ tinh, chủ dây dưa, âm mưu ngầm, ám hại, bệnh mãn tính kéo dài.',
    vanHan: 'Công việc bế tắc, tiến độ chậm chạp, vướng vào tranh cãi dai dẳng.',
    vatDung: 'Dây thừng xoắn, lưới đánh cá, ổ khóa rỉ sét, đầm lầy.',
    benhLy: 'Đau cột sống thắt lưng, bệnh ngoài da dai dẳng, viêm xoang mãn.',
    tuongMao: 'Mặt hơi tối, ánh mắt hay nhìn nghiêng hoặc ngẫm nghĩ trầm mặc.'
  },
  'Hỏa Tinh': {
    name: 'Hỏa Tinh',
    element: 'Hỏa',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Bạo liệt sát tinh, chủ bùng phát chớp nhoáng, tính nóng nảy như lửa đốt.',
    vanHan: 'Biến cố bất ngờ đến nhanh, cẩn thận cháy nổ chập điện, xung đột khẩu khí.',
    vatDung: 'Bật lửa, bếp ga, pháo hoa, lò nung, súng đạn.',
    benhLy: 'Sốt cao co giật, bỏng lửa nước sôi, huyết áp tăng vọt.',
    tuongMao: 'Râu tóc hơi đỏ quăn, mặt đỏ khi giận, đi đứng vội vã.'
  },
  'Linh Tinh': {
    name: 'Linh Tinh',
    element: 'Hỏa',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Âm hỏa sát tinh, chủ ấm ức trong lòng, tích tụ mưu tính ngấm ngầm.',
    vanHan: 'Trầm cảm, áp lực tinh thần vô hình, hiểm họa rình rập ngấm ngầm.',
    vatDung: 'Chuông gió kim loại, tro than ủ, dây điện âm tường.',
    benhLy: 'Suy nhược thần kinh, mất ngủ kéo dài, đau nhức xương tủy.',
    tuongMao: 'Khuôn mặt gầy, mắt sâu thăm thẳm, giọng nói trầm lạnh.'
  },
  'Địa Không': {
    name: 'Địa Không',
    element: 'Hỏa',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Đoạt tài sát tinh, chủ mất mát bất ngờ, trống rỗng, tư duy phá cách dị biệt.',
    vanHan: 'Đầu tư hao hụt bất ngờ, cảm giác hư vô thất thoát; tốt cho triết học tâm linh.',
    vatDung: 'Túi rỗng, hố sâu, vực thẳm, bóng bay nổ.',
    benhLy: 'Thiếu máu, suy kiệt năng lượng, huyết áp tụt, ảo giác.',
    tuongMao: 'Gương mặt có nét u uất hoặc siêu thực, ánh mắt như nhìn vào khoảng không.'
  },
  'Địa Kiếp': {
    name: 'Địa Kiếp',
    element: 'Hỏa',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Cướp đoạt sát tinh, chủ tai ương nhanh chóng, phá tán tàn nhẫn, tranh cướp.',
    vanHan: 'Đề phòng bị lừa gạt trắng trợn, phá sản chớp nhoáng nếu tham lam.',
    vatDung: 'Lưỡi cưa điện, sạt lở đất, bẫy sắt ngầm.',
    benhLy: 'Ngộ độc máu, mụn nhọt độc, chấn thương dập nát phần mềm.',
    tuongMao: 'Vẻ mặt hung dữ hoặc sắc bén lạnh lùng, phong thái quyết liệt.'
  },

  // Tứ Hóa
  'Hóa Lộc': {
    name: 'Hóa Lộc',
    element: 'Mộc',
    category: 'Tứ Hóa',
    isGood: true,
    meaning: 'Tài lộc đệ nhất hóa tinh, chủ may mắn hanh thông tài vận, duyên tốt lành.',
    vanHan: 'Nguồn thu nhập dồi dào, kinh doanh phát đạt, cuộc sống sung túc.',
    vatDung: 'Cây kim tiền, túi tiền vàng, quả mọng chín trĩu cành.',
    benhLy: 'Thừa mỡ, tiểu đường do tẩm bổ quá độ.',
    tuongMao: 'Gương mặt tươi cười hỷ hoan, da dẻ mịn màng phúc hậu.'
  },
  'Hóa Quyền': {
    name: 'Hóa Quyền',
    element: 'Mộc',
    category: 'Tứ Hóa',
    isGood: true,
    meaning: 'Quyền uy hóa tinh, chủ tăng cường quyền lực, tầm ảnh hưởng, tự chủ độc lập.',
    vanHan: 'Được trao quyền điều hành lãnh đạo, tiếng nói có trọng lượng lớn.',
    vatDung: 'Gậy quyền trượng, phù hiệu cấp bậc, ghế chủ tịch.',
    benhLy: 'Tăng huyết áp, đau vai gáy do gánh vác trách nhiệm.',
    tuongMao: 'Dáng đứng thẳng uy nghi, ánh nhìn dứt khoát kiểm soát.'
  },
  'Hóa Khoa': {
    name: 'Hóa Khoa',
    element: 'Thủy',
    category: 'Tứ Hóa',
    isGood: true,
    meaning: 'Đệ nhất giải ách hóa tinh, chủ danh tiếng học vấn, bằng cấp giải cứu hoạn nạn.',
    vanHan: 'Bảo vệ luận án thành công, danh dự nâng cao, gặp nạn có người giải cứu.',
    vatDung: 'Văn bằng cử nhân tiến sĩ, huân chương, thẻ chuyên gia.',
    benhLy: 'Sức khỏe mau phục hồi, tìm được thầy thuốc giỏi.',
    tuongMao: 'Phong thái trí thức, hòa nhã thanh tao, dễ gây cảm mến.'
  },
  'Hóa Kỵ': {
    name: 'Hóa Kỵ',
    element: 'Thủy',
    category: 'Tứ Hóa',
    isGood: false,
    meaning: 'Trở ngại hóa tinh, chủ đố kỵ thị phi, hiểu lầm, uất ức, trắc trở bế tắc.',
    vanHan: 'Cẩn thận hiểu lầm trong hợp tác, bị nghi ngờ oan uổng, mâu thuẫn gia đạo.',
    vatDung: 'Nước thải đục, đám mây mù u tối, kính bị nứt vỡ.',
    benhLy: 'Bệnh mãn tính khó chẩn đoán, dị ứng, trầm uất tâm lý.',
    tuongMao: 'Khuôn mặt nhiều âu lo suy tư, ánh mắt e dè nghi ngại.'
  },

  // Vòng Bác Sĩ
  'Lộc Tồn': {
    name: 'Lộc Tồn',
    element: 'Thổ',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Thiên lộc tài tinh, nguồn vốn tự nhiên, lộc trời ban, giữ tiền của cẩn mật.',
    vanHan: 'Tiền tài tích lũy an toàn, hưởng lộc gia truyền hoặc đầu tư chắc chắn.',
    vatDung: 'Kho lúa đầy ắp, két sắt cổ điển, sổ tiết kiệm ngân hàng.',
    benhLy: 'Tỳ vị đầy trướng, ít vận động gây béo phì.',
    tuongMao: 'Vóc người đẫy đà, nét mặt khoan thai cẩn trọng.'
  },
  'Bác Sĩ': {
    name: 'Bác Sĩ',
    element: 'Thủy',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Thông tuệ giải ách, bác học đa tài, học rộng hiểu nhiều, nhân hậu.',
    vanHan: 'Học vấn thăng tiến, suy nghĩ hanh thông, thân tâm an lạc.',
    vatDung: 'Tủ sách y khoa, ống nghe bác sĩ, nghiên mực.',
    benhLy: 'Khả năng tự chữa lành tốt, ít khi mắc bệnh hiểm nghèo.',
    tuongMao: 'Ánh mắt tinh anh, vầng trán thông thái, cử chỉ lịch thiệp.'
  },
  'Lực Sĩ': {
    name: 'Lực Sĩ',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Sức mạnh cơ bắp, dũng khí làm việc bền bỉ, sức chịu đựng phi thường.',
    vanHan: 'Khối lượng công việc nhiều nhưng đủ sức gánh vác thành công.',
    vatDung: 'Tạ tập thể hình, đòn gánh, công cụ lao động nặng.',
    benhLy: 'Căng cơ, thoát vị đĩa đệm do nâng vác nặng.',
    tuongMao: 'Cơ bắp cuồn cuộn, bắp tay to khỏe, dáng dấp rắn chắc.'
  },
  'Thanh Long': {
    name: 'Thanh Long',
    element: 'Thủy',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Rồng xanh may mắn, thăng tiến thuận lợi, hỷ tín tin vui liên tiếp.',
    vanHan: 'Cơ hội như rồng gặp mây, thi cử đỗ đạt, công danh rực rỡ.',
    vatDung: 'Tượng rồng ngọc bích, dòng sông xanh uốn lượn, bút lông cao cấp.',
    benhLy: 'Khí huyết lưu thông trôi chảy, tinh thần sảng khoái.',
    tuongMao: 'Khuôn mặt tươi sáng, mắt phượng mày ngài, thanh cao.'
  },
  'Tiểu Hao': {
    name: 'Tiểu Hao',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: false,
    meaning: 'Hao tán nhỏ, chi tiêu lặt vặt, hay thay đổi di chuyển chỗ ở ngắn hạn.',
    vanHan: 'Chi tiêu nhiều khoản nhỏ, sửa chữa nhà cửa, mua sắm đồ đạc.',
    vatDung: 'Ví tiền lẻ bị rách nhẹ, rổ thưa.',
    benhLy: 'Đầy hơi khó tiêu, tiêu chảy nhẹ do ăn hàng rong.',
    tuongMao: 'Dáng người nhỏ nhắn, nhanh nhẹn, hay nói hay cười.'
  },
  'Tướng Quân': {
    name: 'Tướng Quân',
    element: 'Mộc',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Quyền uy dũng phong, khả năng cầm quân chỉ huy, hiếu thắng.',
    vanHan: 'Được phong chức vụ mới, nắm quyền hành tại đơn vị.',
    vatDung: 'Lá cờ lệnh, kiếm chỉ huy, quân hàm sĩ quan.',
    benhLy: 'Bệnh tim do quá phấn khích hoặc căng thẳng thi đấu.',
    tuongMao: 'Dáng dấp oai phong, cằm vuông bặm môi, mắt nhìn thẳng.'
  },
  'Tấu Thư': {
    name: 'Tấu Thư',
    element: 'Kim',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Văn chương tấu trình, hoạt ngôn, tài năng pháp lý và khiếu nại đắc lợi.',
    vanHan: 'Hợp đồng, đơn từ được phê chuẩn thuận buồm xuôi gió.',
    vatDung: 'Đơn từ hành chính, con dấu thị thực, bản hợp đồng.',
    benhLy: 'Khàn tiếng, viêm amidan do thuyết trình nhiều.',
    tuongMao: 'Khuôn miệng khéo léo, giọng nói truyền cảm thuyết phục.'
  },
  'Phi Liêm': {
    name: 'Phi Liêm',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: false,
    meaning: 'Lưỡi hái bay, biến cố nhanh chóng, đồn thổi thị phi lan truyền chớp mắt.',
    vanHan: 'Tin tức bay xa chớp nhoáng, cẩn thận lời ra tiếng vào.',
    vatDung: 'Mũi tên bay, cánh quạt máy bay, chim bồ câu đưa thư.',
    benhLy: 'Chấn thương do vật bay trúng, cảm gió đột ngột.',
    tuongMao: 'Tóc bay trong gió, bước chân nhẹ thoăn thoắt.'
  },
  'Hỷ Thần': {
    name: 'Hỷ Thần',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: true,
    meaning: 'Niềm vui cưới hỏi, tin mừng liên hoan, gia đình đón thêm thành viên.',
    vanHan: 'Hỷ sự trong nhà, nhận quà tặng bất ngờ, kết hôn sinh con.',
    vatDung: 'Thiệp cưới đỏ, hoa hồng mừng tiệc, bánh pháo hoa.',
    benhLy: 'Tâm trạng hồ hởi, sức khỏe tràn đầy sinh khí.',
    tuongMao: 'Mắt cười híp mí, má lúm đồng tiền, luôn rạng rỡ.'
  },
  'Bệnh Phù': {
    name: 'Bệnh Phù',
    element: 'Thổ',
    category: 'Vòng Bác Sĩ',
    isGood: false,
    meaning: 'Khí sắc suy yếu, mỏi mệt mãn tính, lười vận động, bệnh tật đeo đẳng.',
    vanHan: 'Cần thăm khám sức khỏe định kỳ, phòng ngừa mệt mỏi suy nhược.',
    vatDung: 'Hộp thuốc tây, bông băng gạc, giường bệnh.',
    benhLy: 'Cảm mạo phong hàn, tỳ vị kém hấp thu, sút cân.',
    tuongMao: 'Sắc mặt vàng bủng hoặc tái nhợt, mi mắt hơi sưng sụp.'
  },
  'Đại Hao': {
    name: 'Đại Hao',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: false,
    meaning: 'Đại phá tài, tiêu tốn số tiền lớn, đổi mới hoàn toàn cơ sở vật chất.',
    vanHan: 'Dồn tiền mua nhà, mua xe lớn hoặc kinh doanh tái đầu tư quy mô lớn.',
    vatDung: 'Kho rỗng sau đợt xuất kho, hóa đơn thanh toán tiền tỷ.',
    benhLy: 'Mất nước nghiêm trọng, suy nhược cơ thể toàn diện.',
    tuongMao: 'Khuôn mặt hao gầy, mắt trũng sâu khi lo nghĩ tài chính.'
  },
  'Phục Binh': {
    name: 'Phục Binh',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: false,
    meaning: 'Kẻ thù ngấm ngầm mai phục, mưu mô gian lận sau lưng, trộm cắp thất thoát.',
    vanHan: 'Đề phòng kẻ gian trộm đạo, bị đồng nghiệp chơi xấu ngấm ngầm.',
    vatDung: 'Gương chiếu hậu bị vỡ, bẫy rập khuất góc, khóa mã số bị dò.',
    benhLy: 'Bệnh ủ trong người chưa phát triệu chứng rõ rệt.',
    tuongMao: 'Ánh mắt hay liếc xéo lấm lét, hay che miệng khi nói.'
  },
  'Quan Phủ': {
    name: 'Quan Phủ',
    element: 'Hỏa',
    category: 'Vòng Bác Sĩ',
    isGood: false,
    meaning: 'Cửa công môn, kiện cáo tranh chấp công quyền, giấy triệu tập pháp đình.',
    vanHan: 'Vướng vào thủ tục pháp lý phức tạp, thanh tra kiểm tra.',
    vatDung: 'Búa quan tòa, công văn trát đòi, biên bản thanh tra.',
    benhLy: 'Đau đầu mất ngủ vì áp lực kiện tụng điều trần.',
    tuongMao: 'Vẻ mặt đăm chiêu nặng trĩu âu lo, mày cau lại.'
  },

  // Vòng Thái Tuế
  'Thái Tuế': {
    name: 'Thái Tuế',
    element: 'Hỏa',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Năm tuổi, chấp chính quan, thị phi khẩu thiệt nhưng đắc quyền thì uy nghi tột bậc.',
    vanHan: 'Năm bản lề thay đổi lớn cuộc đời, cần thẳng thắn chính trực.',
    vatDung: 'Trống đồng, chuông đồng lớn, bàn làm việc hội đồng nhân dân.',
    benhLy: 'Bệnh tim mạch, căng thẳng thần kinh tột độ.',
    tuongMao: 'Tướng mạo uy phong lẫm liệt, giọng nói đanh thép vang xa.'
  },
  'Thiếu Dương': {
    name: 'Thiếu Dương',
    element: 'Hỏa',
    category: 'Vòng Thái Tuế',
    isGood: true,
    meaning: 'Ánh sáng non trẻ, thông minh lanh lợi nhưng dễ kiêu căng khinh địch.',
    vanHan: 'Khởi đầu kế hoạch mới nhiều hứa hẹn, trí tuệ sáng láng.',
    vatDung: 'Bình minh buổi sớm, nụ hoa chớm nở, bóng đèn học sinh.',
    benhLy: 'Đau mắt đỏ, nhiệt miệng do thức khuya học tập.',
    tuongMao: 'Khuôn mặt trẻ trung hơn tuổi thật, mắt sáng bừng sức sống.'
  },
  'Tang Môn': {
    name: 'Tang Môn',
    element: 'Mộc',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Ưu sầu tang tóc, nước mắt buồn tủi, mất mát người thân hoặc thú cưng.',
    vanHan: 'Gia đình có chuyện buồn, tâm trạng rầu rĩ, trắc trở tình duyên.',
    vatDung: 'Khăn tang trắng, hoa cúc vạn thọ, chuông tang lễ.',
    benhLy: 'Bệnh phổi mãn tính, ho có đờm, trầm cảm u uất.',
    tuongMao: 'Khóe mắt rủ xuống buồn bã, sắc mặt u tối thiểu não.'
  },
  'Thiếu Âm': {
    name: 'Thiếu Âm',
    element: 'Thủy',
    category: 'Vòng Thái Tuế',
    isGood: true,
    meaning: 'Sự nhu mì kín đáo, nhường nhịn bao dung, dễ bị người khác lấn lướt.',
    vanHan: 'Nên dĩ hòa vi quý, tránh đối đầu trực diện, tĩnh lặng dưỡng sinh.',
    vatDung: 'Màn ngủ lụa xanh, tách trà sen tĩnh tâm, ánh trăng mờ ảo.',
    benhLy: 'Hàn khí tích tụ, lạnh chân tay vào ban đêm.',
    tuongMao: 'Nét mặt dịu dàng nhu mì, ít khi tranh cãi lớn tiếng.'
  },
  'Quan Phù': {
    name: 'Quan Phù',
    element: 'Hỏa',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Phù hiệu quan chức, khẩu thiệt gièm pha, tranh biện đối chất nơi công cộng.',
    vanHan: 'Cẩn thận tranh cãi với đồng nghiệp, hiểu lầm văn bản cam kết.',
    vatDung: 'Bút ký cam kết, biên lai tranh chấp, bảng nội quy nghiêm ngặt.',
    benhLy: 'Viêm họng đỏ, đau dây thanh âm sau các buổi tranh luận.',
    tuongMao: 'Môi hơi vểnh biểu thị tính hay cãi lý và phản bác.'
  },
  'Tử Phù': {
    name: 'Tử Phù',
    element: 'Kim',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Ám khí sát hại ngầm, hoa rụng mùa thu, kết thúc một chu kỳ nhỏ.',
    vanHan: 'Dừng lại một mối quan hệ không phù hợp, buông bỏ chấp niệm.',
    vatDung: 'Lá vàng rụng, cành cây khô gãy, ảnh cũ phai màu.',
    benhLy: 'Sức đề kháng suy giảm khi giao mùa thu sang đông.',
    tuongMao: 'Dáng người mảnh mai có phần mong manh yếu ớt.'
  },
  'Tuế Phá': {
    name: 'Tuế Phá',
    element: 'Hỏa',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Phá phách chống đối, bất mãn thực tại, tinh thần quật khởi phản kháng.',
    vanHan: 'Bất đồng quan điểm với cấp trên, có xu hướng khởi nghiệp độc lập.',
    vatDung: 'Búa đập tường, áo giáp rách trận tiền, còi báo động.',
    benhLy: 'Đau răng mẻ răng, viêm chân răng, va chạm giao thông.',
    tuongMao: 'Hàm răng không đều hoặc hơi hô, ánh mắt ngang tàng.'
  },
  'Long Đức': {
    name: 'Long Đức',
    element: 'Thủy',
    category: 'Vòng Thái Tuế',
    isGood: true,
    meaning: 'Đức hạnh của rồng, phúc thiện cứu khổn phò nguy, lương tâm trong sáng.',
    vanHan: 'Tích đức nhận phước báo, hóa giải mọi hiểm họa bất ngờ.',
    vatDung: 'Tượng Phật Quan Âm nghìn mắt nghìn tay, giếng nước trong lành.',
    benhLy: 'Tâm an thì bệnh tật tự lui, phục hồi sau cơn ốm.',
    tuongMao: 'Gương mặt thánh thiện tỏa sáng từ bi, nụ cười phúc hậu.'
  },
  'Bạch Hổ': {
    name: 'Bạch Hổ',
    element: 'Kim',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Hổ trắng sát phạt, huyết quang thương tích, hùng dũng nhưng cô độc.',
    vanHan: 'Đề phòng chảy máu chân tay, mổ xẻ, khẩu thiệt thị phi đau đầu.',
    vatDung: 'Da hổ phong thủy, kiếm bạc nhọn, cờ trắng hiệu kỳ.',
    benhLy: 'Bệnh về máu, thiếu máu tán huyết, tai nạn thương tích.',
    tuongMao: 'Răng nanh nhọn sắc, ánh mắt gườm gườm cảnh giác cao độ.'
  },
  'Phúc Đức': {
    name: 'Phúc Đức',
    element: 'Thổ',
    category: 'Vòng Thái Tuế',
    isGood: true,
    meaning: 'Âm đức tổ tiên, lòng từ bi nhân hậu, tâm hồn hướng thiện thanh nhã.',
    vanHan: 'Gặp may mắn lớn từ phúc ấm ông bà để lại, tâm trí thảnh thơi.',
    vatDung: 'Lư hương đồng cổ, bát hương gia tiên, tràng hạt trầm hương.',
    benhLy: 'Tuổi thọ dài lâu, ít khi mắc bệnh hiểm nghèo nan giải.',
    tuongMao: 'Dái tai dày dài, ấn đường rộng sáng, tướng người trường thọ.'
  },
  'Điếu Khách': {
    name: 'Điếu Khách',
    element: 'Hỏa',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Khách đến viếng tang, cờ bạc phóng túng, nói khoác khoe khoang tiêu hoang.',
    vanHan: 'Tránh xa cá độ cờ bạc lô đề, cẩn thận vấp ngã từ trên cao.',
    vatDung: 'Bộ bài tây, quân cờ xúc xắc, ly rượu mạnh quán bar.',
    benhLy: 'Chấn thương đầu gối mắt cá do trượt ngã, gan nhiễm mỡ.',
    tuongMao: 'Miệng dẻo nói luôn mồm, mắt đảo lẹ làng, dáng vẻ phong trần.'
  },
  'Trực Phù': {
    name: 'Trực Phù',
    element: 'Kim',
    category: 'Vòng Thái Tuế',
    isGood: false,
    meaning: 'Thẳng thắn chịu thiệt thòi, gánh vác hộ người khác rồi bị mang tiếng.',
    vanHan: 'Làm ơn mắc oán, giúp đỡ bạn bè nhưng bị hiểu lầm vô căn cứ.',
    vatDung: 'Bao tải cát chắn lũ, bờ đê chịu sóng, ô dù che mưa.',
    benhLy: 'Đau mỏi cơ bắp do làm lụng vất vả, suy nhược toàn thân.',
    tuongMao: 'Lưng hơi còng hoặc vai so gánh vác, vẻ mặt chân chất thật thà.'
  },

  // Tuần & Triệt
  'Tuần Không': {
    name: 'Tuần Không',
    element: 'Hỏa',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Tuần Trung Không Vong: Dây xích vô hình giữ nhịp, làm chậm trễ, giảm 50% tính chất tốt/xấu.',
    vanHan: 'Mọi việc từ từ chậm rãi, không nên nóng vội bức tốc, tu dưỡng bản thân.',
    vatDung: 'Hàng rào phong tỏa, chiếc lưới mỏng vô hình, phanh hãm xe.',
    benhLy: 'Bệnh phát triển âm thầm chậm chạp, kéo dài không dứt.',
    tuongMao: 'Tướng người trầm tĩnh, ít biểu lộ cảm xúc ra ngoài mặt.'
  },
  'Triệt Không': {
    name: 'Triệt Không',
    element: 'Kim',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Triệt Lộ Không Vong: Thanh gươm sắc chặt đứt, đảo ngược thế cờ, ảnh hưởng mạnh tiền vận trước 30 tuổi.',
    vanHan: 'Bẻ gãy bế tắc cũ để tái sinh, cắt đứt dây mơ rễ má tiêu cực.',
    vatDung: 'Cầu gãy nhịp, bức tường ngăn cụt đường, thanh kiếm chém đôi.',
    benhLy: 'Cắt bỏ khối u, phẫu thuật chỉnh hình dứt điểm.',
    tuongMao: 'Trán có vết sẹo hoặc lông mày bị đứt đoạn nhẹ.'
  },

  // Vòng Tràng Sinh (12 giai đoạn sinh mệnh)
  'Tràng Sinh': {
    name: 'Tràng Sinh',
    element: 'Thủy',
    category: 'Vòng Tràng Sinh',
    isGood: true,
    meaning: 'Sự khởi sinh mãnh liệt, cội nguồn sinh lực dồi dào, thọ khang trường cửu.',
    vanHan: 'Sinh sôi nảy nở tài lộc, gia đình có thêm con cháu khỏe mạnh.',
    vatDung: 'Mầm cây non xanh tốt, suối nguồn đầu ngọn núi.',
    benhLy: 'Khí lực tràn trề, khả năng miễn dịch xuất sắc.',
    tuongMao: 'Dáng dấp thanh xuân, đôi mắt long lanh đầy nhiệt huyết.'
  },
  'Mộc Dục': {
    name: 'Mộc Dục',
    element: 'Thủy',
    category: 'Vòng Tràng Sinh',
    isGood: false,
    meaning: 'Tắm gội đào hoa, đam mê sắc dục chưng diện, thay đổi ý chí thất thường.',
    vanHan: 'Thích làm đẹp phẫu thuật thẩm mỹ, mua sắm áo quần lụa là.',
    vatDung: 'Bồn tắm sục hoa hồng, gương trang điểm, tủ váy dạ hội.',
    benhLy: 'Bệnh phụ khoa, mụn trứng cá viêm nang lông da liễu.',
    tuongMao: 'Ăn mặc thời thượng gợi cảm, da thơm mát mẻ.'
  },
  'Quan Đới': {
    name: 'Quan Đới',
    element: 'Kim',
    category: 'Vòng Tràng Sinh',
    isGood: true,
    meaning: 'Đeo đai áo mão, trưởng thành có vị thế trong xã hội, tham vọng quyền lực.',
    vanHan: 'Bắt đầu đảm đương chức danh mới, sự nghiệp vào guồng ổn định.',
    vatDung: 'Dây thắt lưng da hàng hiệu, cavat sang trọng, đồng hồ đeo tay.',
    benhLy: 'Căng tức vùng eo bụng do ngồi văn phòng lâu ngày.',
    tuongMao: 'Tác phong đĩnh đạc người lớn, cử chỉ đường hoàng.'
  },
  'Lâm Quan': {
    name: 'Lâm Quan',
    element: 'Kim',
    category: 'Vòng Tràng Sinh',
    isGood: true,
    meaning: 'Giai đoạn phát triển rực rỡ, tài chính tự chủ vững vàng, tự tin khẳng định bản thân.',
    vanHan: 'Thời kỳ vàng son của công danh bổng lộc, tiền tài sung mãn.',
    vatDung: 'Bàn giám đốc, xe hơi riêng, chìa khóa căn hộ cao cấp.',
    benhLy: 'Thể lực sung mãn, đỉnh cao phong độ thể chất.',
    tuongMao: 'Khí chất tự tin ngời sáng, thần thái đĩnh đạc tự chủ.'
  },
  'Đế Vượng': {
    name: 'Đế Vượng',
    element: 'Kim',
    category: 'Vòng Tràng Sinh',
    isGood: true,
    meaning: 'Cực thịnh vượng, quyền lực tối cao, đỉnh cao danh vọng nhưng cẩn thận qua đỉnh là thoái trào.',
    vanHan: 'Thời kỳ đỉnh cao của sự nghiệp, quyền uy nắm trọn trong tay.',
    vatDung: 'Ngai vàng bọc nhung, cúp vàng vô địch, cờ chiến thắng.',
    benhLy: 'Bệnh tim do quá tải hoạt động ở đỉnh cao quyền lực.',
    tuongMao: 'Thân hình vạm vỡ đường bệ, tiếng nói chấn động lòng người.'
  },
  'Suy': {
    name: 'Suy',
    element: 'Thủy',
    category: 'Vòng Tràng Sinh',
    isGood: false,
    meaning: 'Qua thời hoàng kim bắt đầu giảm tốc, thoái trào nhẹ, cần chuyển giao thế hệ.',
    vanHan: 'Nên củng cố hậu phương, không nên bành trướng mở rộng liều lĩnh.',
    vatDung: 'Mặt trời lặn sau núi, lá vàng đầu thu, lốp xe mòn dần.',
    benhLy: 'Khớp gối lục cục khi lên cầu thang, thị lực giảm nhẹ.',
    tuongMao: 'Tóc điểm hoa râm, nét mặt thoáng nét phong trần mệt mỏi.'
  },
  'Bệnh': {
    name: 'Bệnh',
    element: 'Hỏa',
    category: 'Vòng Tràng Sinh',
    isGood: false,
    meaning: 'Thời kỳ yếu nhược, sức khỏe giảm sút, tinh thần mẫn cảm dễ tổn thương.',
    vanHan: 'Dành thời gian nghỉ ngơi dưỡng bệnh, tránh lao lực quá độ.',
    vatDung: 'Nhiệt kế thủy ngân, ấm sắc thuốc bắc, chăn đắp giữ nhiệt.',
    benhLy: 'Dễ nhiễm trùng hô hấp, huyết áp dao động bất ổn.',
    tuongMao: 'Gò má hơi xanh xao, giọng nói yếu ớt hụt hơi.'
  },
  'Tử': {
    name: 'Tử',
    element: 'Thủy',
    category: 'Vòng Tràng Sinh',
    isGood: false,
    meaning: 'Sự tĩnh lặng tuyệt đối, khép lại hành trình cũ, tư duy sâu sắc về sinh tử triết học.',
    vanHan: 'Thanh lọc môi trường sống, kết thúc triệt để những ràng buộc lỗi thời.',
    vatDung: 'Ngọn nến tàn, đồng hồ cát chảy hết hạt cuối cùng.',
    benhLy: 'Trầm cảm nặng, suy giảm chức năng đa cơ quan tuổi già.',
    tuongMao: 'Ánh mắt xa xăm trầm lặng như mặt hồ không một gợn sóng.'
  },
  'Mộ': {
    name: 'Mộ',
    element: 'Thổ',
    category: 'Vòng Tràng Sinh',
    isGood: false,
    meaning: 'Chôn cất cất giữ trong kho, tích lũy ngầm, kín kẽ keo kiệt không để lộ ra ngoài.',
    vanHan: 'Thu gom tài sản cất két, an táng mồ mả tổ tiên chu toàn.',
    vatDung: 'Hầm rượu sâu dưới lòng đất, quan tài gỗ lũa, két sắt âm tường.',
    benhLy: 'Táo bón mãn tính, ứ huyết tĩnh mạch chi dưới.',
    tuongMao: 'Khuôn mặt lầm lì ít nói, che giấu tâm tư tuyệt hảo.'
  },
  'Tuyệt': {
    name: 'Tuyệt',
    element: 'Hỏa',
    category: 'Vòng Tràng Sinh',
    isGood: false,
    meaning: 'Đường cùng dứt điểm, trắng tay hoặc ngắt kết nối hoàn toàn để chuẩn bị mầm mống mới.',
    vanHan: 'Khủng hoảng điểm đáy (vực thẳm), tạo đà bật nhảy sang chu kỳ mới.',
    vatDung: 'Đốm lửa tàn trong đêm đông buốt giá, hố đen vũ trụ.',
    benhLy: 'Tủy xương cạn kiệt tế bào máu, suy kiệt sinh lực.',
    tuongMao: 'Người gầy gò khô khẳng, thần thái kỳ bí khó đoán.'
  },
  'Thai': {
    name: 'Thai',
    element: 'Thổ',
    category: 'Vòng Tràng Sinh',
    isGood: true,
    meaning: 'Thụ thai hình thành phôi mầm, ấp ủ ý tưởng kế hoạch mới trong bụng mẹ.',
    vanHan: 'Ý tưởng khởi nghiệp mới nảy sinh, phụ nữ có tin vui mang thai.',
    vatDung: 'Tổ chim đan bằng cỏ non, hạt giống vừa nứt vỏ dưới lòng đất.',
    benhLy: 'Nghén thai nghén, thay đổi hormone sinh lý nhẹ.',
    tuongMao: 'Nét mặt ngây thơ trong sáng như đứa trẻ sắp chào đời.'
  },
  'Dưỡng': {
    name: 'Dưỡng',
    element: 'Mộc',
    category: 'Vòng Tràng Sinh',
    isGood: true,
    meaning: 'Nuôi nấng chăm sóc, bồi dưỡng nhân tài, tích lũy kiến thức chuẩn bị xuất trận.',
    vanHan: 'Học nghề, tập sự nâng cao tay nghề, chăm sóc con thơ gia đình.',
    vatDung: 'Bình sữa ấm, chậu hoa non đang được tưới nước hàng ngày.',
    benhLy: 'Hồi phục sức khỏe nhanh chóng nhờ chế độ dinh dưỡng khoa học.',
    tuongMao: 'Da dẻ hồng hào mỡ màng, nụ cười an tâm ấm áp.'
  },

  // Các Sao Cát Tinh & Quý Tinh Quan Trọng Khác
  'Thiên Mã': {
    name: 'Thiên Mã',
    element: 'Hỏa',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Ngựa trời xông pha, chí tiến thủ, thay đổi di chuyển, đi xa lập nghiệp đắc lộc.',
    vanHan: 'Xuất ngoại du học, công tác xa nhà, mua xe hơi xe máy mới.',
    vatDung: 'Yên ngựa da, ô tô đường trường, vé máy bay quốc tế.',
    benhLy: 'Đau gân gót chân, giãn tĩnh mạch chân do di chuyển nhiều.',
    tuongMao: 'Cẳng chân dài thon, bước đi thoăn thoắt dứt khoát.'
  },
  'Đào Hoa': {
    name: 'Đào Hoa',
    element: 'Mộc',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Sắc đẹp xuân thì, duyên dáng thu hút, tài hoa nghệ thuật, nhân duyên sớm nở.',
    vanHan: 'Gặp gỡ tình yêu say đắm, danh tiếng nở rộ trong ngành giải trí.',
    vatDung: 'Nhánh hoa đào tươi, son môi đỏ thắm, gương cầm tay dát bạc.',
    benhLy: 'Bệnh tim mạch do xúc cảm thái quá, dị ứng phấn hoa.',
    tuongMao: 'Mắt ướt lệ hoa, môi mọng đỏ thắm, nụ cười làm xiêu lòng người.'
  },
  'Hồng Loan': {
    name: 'Hồng Loan',
    element: 'Thủy',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Hỷ sự hôn nhân chính phái, chim phượng hoàng báo tin vui, đức hạnh đoan trang.',
    vanHan: 'Đính hôn cưới hỏi long trọng, sinh con gái đầu lòng xinh xắn.',
    vatDung: 'Áo cưới cô dâu lộng lẫy, trầu cau dạm ngõ, nhẫn kim cương đính ước.',
    benhLy: 'Kinh nguyệt không đều, thiếu máu ở nữ giới trẻ.',
    tuongMao: 'Vẻ đẹp thanh tú kiều diễm, đôi lông mày cong như lá liễu.'
  },
  'Thiên Hỷ': {
    name: 'Thiên Hỷ',
    element: 'Thủy',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Trời ban niềm vui lớn, tiệc tùng chúc mừng rộn rã, tiếng cười xua tan hoạn nạn.',
    vanHan: 'Gặp may mắn bất ngờ, gia đình đón nhận hỷ tín liên tiếp.',
    vatDung: 'Pháo hoa nở rộ, rượu champagne nổ mừng, dải ruy băng ngũ sắc.',
    benhLy: 'Sảng khoái tinh thần, ngủ ngon giấc.',
    tuongMao: 'Gương mặt rạng rỡ hớn hở, thích cười đùa cởi mở.'
  },
  'Long Trì': {
    name: 'Long Trì',
    element: 'Thủy',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Ao rồng ngọc, quý tinh về đường mũi, nhan sắc thanh cao, nhà cửa khang trang.',
    vanHan: 'Sửa sang nhà cửa đẹp đẽ, nâng cao uy tín xã hội.',
    vatDung: 'Hồ sen phong thủy, đài phun nước mini, vòng ngọc cẩm thạch.',
    benhLy: 'Viêm mũi dị ứng thời tiết.',
    tuongMao: 'Sống mũi cao thẳng tắp, đầu mũi tròn trĩnh kín đáo.'
  },
  'Phượng Các': {
    name: 'Phượng Các',
    element: 'Thổ',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Lầu gác phượng hoàng, quý tinh về thính giác (tai), thi cử đỗ đạt, gia trang lộng lẫy.',
    vanHan: 'Mua đất cất nhà cao tầng, được vinh danh trong hội thảo chuyên ngành.',
    vatDung: 'Biệt thự sân vườn, tranh chim phượng hoàng dát vàng.',
    benhLy: 'Ù tai, viêm tai giữa nhẹ khi tắm.',
    tuongMao: 'Tai cao hơn lông mày, vành tai dày trắng hơn da mặt.'
  },
  'Giải Thần': {
    name: 'Giải Thần',
    element: 'Mộc',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Vị thần giải tai ách, tiêu trừ oán hận thị phi, bảo trợ thanh tịnh.',
    vanHan: 'Thoát khỏi hiểm nguy phút chót, hòa giải thành công xung đột.',
    vatDung: 'Bùa bình an chùa thiêng, chuông xoay Tây Tạng xông phòng.',
    benhLy: 'Cứu nguy bệnh nhân qua cơn thập tử nhất sinh.',
    tuongMao: 'Ánh mắt thuần hậu ấm áp, gương mặt tỏa nét an lành.'
  },
  'Hoa Cái': {
    name: 'Hoa Cái',
    element: 'Kim',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Lọng che hoàng gia, thanh cao quý phái, khiếu tâm linh huyền học nghệ thuật.',
    vanHan: 'Xuất hiện trước đám đông lộng lẫy, đắc duyên nghiên cứu tử vi huyền học.',
    vatDung: 'Chiếc lọng vàng thêu rồng, ô che nắng quý phái, vương miện.',
    benhLy: 'Đau nửa đầu do suy nghĩ quá cao xa.',
    tuongMao: 'Dáng đi kiêu hãnh, đầu ngẩng cao, mắt hướng lên bầu trời.'
  },
  'Thiên Tài': {
    name: 'Thiên Tài',
    element: 'Thổ',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Tài năng ứng biến trời cho, khả năng bổ trợ cung gặp gỡ, học nhanh hiểu rộng.',
    vanHan: 'Phát huy sở trường năng khiếu vượt bậc, giải quyết vấn đề hóc búa.',
    vatDung: 'Bảng tính thuật toán, bộ cờ vua thông minh.',
    benhLy: 'Não bộ hoạt động với cường độ cao.',
    tuongMao: 'Trán dô thông minh, mắt nhìn xoáy sâu hiểu thấu.'
  },
  'Thiên Thọ': {
    name: 'Thiên Thọ',
    element: 'Thổ',
    category: 'Cát tinh',
    isGood: true,
    meaning: 'Trời ban tuổi thọ, lòng vị tha sống vì người khác, trường thọ an khang.',
    vanHan: 'Sức khỏe dẻo dai tăng cường, sống thọ cùng con cháu sum vầy.',
    vatDung: 'Cây tùng bách ngàn năm, bình gốm trường thọ chữ Vạn.',
    benhLy: 'Ít ốm đau bệnh tật, cơ thể dẻo dai khỏe khoắn.',
    tuongMao: 'Lông mày dài rủ xuống khóe mắt, da dồi dào sinh khí.'
  },
  'Thiên Hình': {
    name: 'Thiên Hình',
    element: 'Hỏa',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Thanh kiếm công lý pháp luật, phẫu thuật dao kéo, chính trực nghiêm minh kỷ luật sắt.',
    vanHan: 'Liên quan tòa án kiểm sát, hoặc tiến hành mổ xẻ chữa bệnh dứt điểm.',
    vatDung: 'Thanh bảo kiếm sắc lẹm, dao mổ y tế tiệt trùng, búa pháp quan.',
    benhLy: 'Vết thương mổ xẻ trên người, sẹo phẫu thuật sâu.',
    tuongMao: 'Mặt có vết sẹo kiếm chém hoặc mắt lộ vẻ sát khí nghiêm cẩn.'
  },
  'Thiên Diêu': {
    name: 'Thiên Diêu',
    element: 'Thủy',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Đào hoa phong tình tà dâm, say sưa mê đắm rượu chè cờ bạc hoặc bùa ngải huyền bí.',
    vanHan: 'Cám dỗ tình ái vụng trộm, đam mê thế giới tâm linh bói toán ma mị.',
    vatDung: 'Chai rượu độc đắc, khói thuốc mê hoặc, lá bùa ngải quấn chỉ đỏ.',
    benhLy: 'Mắt có ghèn mờ, bệnh xã hội truyền nhiễm, trúng độc thức ăn.',
    tuongMao: 'Mắt đưa tình liếc ngang, dáng người lả lướt mềm mại.'
  },
  'Thiên Khốc': {
    name: 'Thiên Khốc',
    element: 'Thủy',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Tiếng khóc than trời đất, đau buồn phiền muộn, giọng nói đanh nhưng bi ai.',
    vanHan: 'Nỗi buồn riêng rơi lệ, thất vọng trong sự nghiệp hoặc tình cảm.',
    vatDung: 'Chiếc chuông đồng rạn nứt phát ra âm thanh bi tráng.',
    benhLy: 'Đau họng, mất tiếng vì khóc than nhiều, viêm xoang trán.',
    tuongMao: 'Đôi mắt có ngấn lệ buồn, đuôi mắt hơi cụp.'
  },
  'Thiên Hư': {
    name: 'Thiên Hư',
    element: 'Thủy',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Sự trống rỗng giả tạo, hư danh không có thực chất, phổi hư hàn khí suy.',
    vanHan: 'Tránh đầu tư vào những dự án ảo hão huyền, giữ gìn phổi.',
    vatDung: 'Bong bóng xà phòng ngũ sắc lấp lánh rồi vỡ tan.',
    benhLy: 'Ho khan lao phổi, khí huyết hư nhược, răng rỗng tủy.',
    tuongMao: 'Răng khấp khểnh hoặc thưa, nói chuyện hơi hụt hơi.'
  },
  'Cô Thần': {
    name: 'Cô Thần',
    element: 'Thổ',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Sự cô độc độc hành, khó hòa nhập bạn bè, thích ở một mình suy ngẫm chân lý.',
    vanHan: 'Cảm giác lẻ loi một mình gánh vác, khó tìm được bạn tri kỷ sẻ chia.',
    vatDung: 'Ngọn hải đăng giữa đảo hoang, tảng đá trơ trọi giữa đại ngàn.',
    benhLy: 'Trầm cảm, thu mình ngại giao tiếp xã hội.',
    tuongMao: 'Khuôn mặt lạnh lùng đơn độc, khóe môi khép chặt ít nói.'
  },
  'Quả Tú': {
    name: 'Quả Tú',
    element: 'Thổ',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Sự phòng thủ giấu kín, giữ chặt tài sản tình cảm, sợ bị tổn thương cự tuyệt.',
    vanHan: 'Khó mở lòng trong tình cảm lứa đôi, tích trữ tài chính chặt chẽ.',
    vatDung: 'Cánh cửa then cài ba lớp, hòm khóa bằng sắt rèn cổ.',
    benhLy: 'Tử cung lạnh, khó mang thai hoặc sợ tiếp xúc thân mật.',
    tuongMao: 'Ánh mắt e dè cẩn trọng, quần áo kín cổng cao tường.'
  },
  'Kiếp Sát': {
    name: 'Kiếp Sát',
    element: 'Hỏa',
    category: 'Sát tinh',
    isGood: false,
    meaning: 'Dao găm bất ngờ đâm sau lưng, cướp giật chém giết, tổn thất đột ngột.',
    vanHan: 'Đề phòng kẻ xấu giật túi xách, va quẹt giao thông chảy máu.',
    vatDung: 'Mảnh chai vỡ trên đường, kẽm gai rào biên giới.',
    benhLy: 'Chảy máu cam bất ngờ, đứt tay đứt chân khi làm bếp.',
    tuongMao: 'Mắt có tia hung quang khi giận dữ.'
  },
  'Phá Toái': {
    name: 'Phá Toái',
    element: 'Hỏa',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Làm vỡ nát vụn vặt, tắc nghẽn cổ họng, cản trở việc lớn sắp thành.',
    vanHan: 'Đổ vỡ chén bát, hỏng hóc đồ đạc gia dụng, trục trặc khâu cuối cùng.',
    vatDung: 'Mảnh gốm sứ vỡ vụn, dây xích bị đứt một mắt xích.',
    benhLy: 'Hóc xương cá, viêm amidan hốc mủ, vướng nghẹn ở cổ họng.',
    tuongMao: 'Răng khấp khểnh không đều, giọng nói nghèn nghẹt.'
  },
  'Đẩu Quân': {
    name: 'Đẩu Quân',
    element: 'Hỏa',
    category: 'Phụ tinh khác',
    isGood: true,
    meaning: 'Cái đấu đo lường lương thực, quản trị tài sản chặt chẽ nghiêm minh, tính toán chi ly.',
    vanHan: 'Nắm chìa khóa kho quỹ, tiết kiệm chi tiêu tối đa cho gia đình.',
    vatDung: 'Cái cân tiểu ly, cái đấu đong gạo bằng gỗ lim.',
    benhLy: 'Đau bao tử vì tính toán suy nghĩ chi tiêu quá khắt khe.',
    tuongMao: 'Mày hơi chau lại suy nghĩ, tay cầm sổ ghi chép.'
  },
  'Lưu Hà': {
    name: 'Lưu Hà',
    element: 'Thủy',
    category: 'Phụ tinh khác',
    isGood: false,
    meaning: 'Dòng sông cuộn sóng dữ, sông sâu nước lớn, họa về sông nước hoặc băng huyết.',
    vanHan: 'Tránh tắm sông biển mùa mưa bão, nữ giới cẩn trọng băng huyết hậu sản.',
    vatDung: 'Dòng sông lũ đỏ ngầu, phao cứu sinh, mỏ neo sắt.',
    benhLy: 'Băng huyết chảy máu không cầm, sặc nước, ngộ độc nguồn nước.',
    tuongMao: 'Ánh mắt long lanh như có sóng nước cuộn trào.'
  }
};
