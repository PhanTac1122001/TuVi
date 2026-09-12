/**
 * Từ điển luận giải chi tiết hơn 100 Tinh Đẩu Phụ Tinh, Sát Tinh & Vòng Sao Tử Vi Đẩu Số
 * (TuViVietnam Authentic Standard)
 */

export interface StarDescriptionDetail {
  name: string;
  category: string;
  element: string;
  yinYang?: string;
  huaKhi?: string;
  characteristics: string;
  goodAspects?: string;
  badAspects?: string;
  advice?: string;
}

export const MINOR_STARS_DICT: Record<string, StarDescriptionDetail> = {
  // --- BỘ TỨ HÓA ---
  'Hóa Lộc': {
    name: 'Hóa Lộc',
    category: 'Bộ Tứ Hóa',
    element: 'Mộc',
    yinYang: 'Âm',
    huaKhi: 'Tài Lộc, Cơ Hội, Duyên May & Sinh Khí Mùa Xuân',
    characteristics: 'Chủ về nguồn tiền bạc dồi dào, cơ hội làm ăn, sự hanh thông may mắn, tình duyên thuận lợi và nhân duyên tốt đẹp.',
    goodAspects: 'Gặp Tử Vi, Vũ Khúc, Lộc Tồn tạo cách Song Lộc Triều Viên, tài lộc như thác lũ, kinh doanh đại phát.',
    badAspects: 'Gặp Địa Không, Địa Kiếp hoặc Hóa Kỵ đồng cung thì lộc đến nhanh nhưng đi cũng nhanh, dễ bị thị phi tiền tài.',
    advice: 'Biết chia sẻ lợi ích, tích đức hành thiện và quản lý tài chính bền vững.'
  },
  'Hóa Quyền': {
    name: 'Hóa Quyền',
    category: 'Bộ Tứ Hóa',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Quyền Bính, Uy Thế, Lãnh Đạo & Khí Thế Mùa Hạ',
    characteristics: 'Chủ về nắm giữ thực quyền, ý chí kiên định, tài chỉ huy điều hành, tinh thần trách nhiệm cao độ và sự thăng tiến vượt bậc.',
    goodAspects: 'Hội cùng Hóa Lộc, Hóa Khoa tạo Tam Kỳ Giai Hội, danh lừng quyền uy khắp chốn.',
    badAspects: 'Gặp Kình Dương, Đà La hoặc Không Kiếp dễ biến thành chuyên quyền, độc đoán, áp đặt người khác dẫn đến cô lập.',
    advice: 'Lãnh đạo bằng sự thấu hiểu và bao dung, tránh lạm quyền làm mất lòng người.'
  },
  'Hóa Khoa': {
    name: 'Hóa Khoa',
    category: 'Bộ Tứ Hóa',
    element: 'Mộc',
    yinYang: 'Dương',
    huaKhi: 'Đệ Nhất Giải Thần, Danh Dự, Học Vấn & Mùa Thu Tri Thức',
    characteristics: 'Chủ về thi cử đỗ đạt, học hàm học vị, danh tiếng quang minh, trí tuệ uyên bác và năng lực hóa giải hung hiểm mạnh mẽ nhất.',
    goodAspects: 'Đóng tại Mệnh, Thân, Quan hoặc gặp đại hạn xấu: hóa hung thành cát, tiêu tan tai ách hoạn nạn.',
    badAspects: 'Gặp Tuần, Triệt hoặc Hóa Kỵ thì tiếng tăm bị ảnh hưởng, thi cử lận đận bước đầu.',
    advice: 'Không ngừng học hỏi, rèn luyện phẩm hạnh đạo đức để giữ gìn danh dự trong sáng.'
  },
  'Hóa Kỵ': {
    name: 'Hóa Kỵ',
    category: 'Bộ Tứ Hóa',
    element: 'Thủy',
    yinYang: 'Âm',
    huaKhi: 'Ám Tinh, Thị Phi, Trở Ngại & Khí Mùa Đông',
    characteristics: 'Chủ về sự nghi kỵ, tranh chấp, thị phi khẩu thiệt, những khúc mắc nội tâm sâu kín và bài học nghiệp lực cần chuyển hóa.',
    goodAspects: 'Đắc địa tại Tý, Sửu, Hợi hoặc đồng cung với Nhật Nguyệt phản vi kỳ cách, biến nghịch cảnh thành động lực vươn lên phi thường.',
    badAspects: 'Hãm địa gây trở ngại công danh, tình cảm hiểu lầm chia rẽ, đau đầu căng thẳng tâm lý.',
    advice: 'Giữ tâm bình thản trước điều tiếng thị phi, ăn ngay nói thẳng, cẩn thận giấy tờ hợp đồng.'
  },

  // --- LỤC CÁT TINH ---
  'Tả Phù': {
    name: 'Tả Phù',
    category: 'Lục Cát Tinh',
    element: 'Thổ',
    yinYang: 'Dương',
    huaKhi: 'Trợ Tinh Đắc Lực, Tương Trợ & Bè Bạn',
    characteristics: 'Chủ về sự tương trợ đắc lực từ đồng sự, bạn bè trung thành, năng lực quy tụ nhân tâm và phò tá lãnh đạo.',
    goodAspects: 'Cùng Hữu Bật phò trợ Tử Vi, Thiên Phủ tạo nên triều đình vững mạnh, quyền cao chức trọng.',
    badAspects: 'Gặp nhiều sát tinh thì tính tình cả nể, dễ bị bạn bè lợi dụng hoặc gánh vác việc không đáng.',
    advice: 'Chọn bạn mà chơi, dùng lòng chân thành để xây dựng tập thể gắn kết.'
  },
  'Hữu Bật': {
    name: 'Hữu Bật',
    category: 'Lục Cát Tinh',
    element: 'Thủy',
    yinYang: 'Âm',
    huaKhi: 'Trợ Tinh Khéo Léo, Quyền Biến & Hòa Giải',
    characteristics: 'Chủ về sự uyển chuyển mềm mỏng, tài giao tiếp ngoại giao, năng lực xử lý khủng hoảng và gỡ rối bế tắc.',
    goodAspects: 'Hội hợp cùng Tả Phù tạo thành bộ Tả Hữu phò tá toàn năng, trợ giúp đắc lực mọi mặt sự nghiệp.',
    badAspects: 'Đóng cung Phu Thê nếu gặp sát tinh dễ sinh chuyện tình cảm tay ba, đa duyên.',
    advice: 'Rạch ròi trong chuyện tình cảm, phát huy tài khéo léo vào công việc ngoại giao.'
  },
  'Văn Xương': {
    name: 'Văn Xương',
    category: 'Lục Cát Tinh',
    element: 'Kim',
    yinYang: 'Dương',
    huaKhi: 'Khoa Bảng Tinh, Văn Chương & Học Thuật',
    characteristics: 'Chủ về trí tuệ mẫn tiệp, thông minh đĩnh ngộ, thi cử đỗ đạt cao, phong thái nho nhã văn nhân.',
    goodAspects: 'Đi cùng Văn Khúc thành bộ Xương Khúc đệ nhất khoa bảng, tài hoa xuất chúng.',
    badAspects: 'Gặp Hóa Kỵ tạo cách Xương Khỵ chủ về thi cử lận đận, nhầm lẫn văn bản giấy tờ hợp đồng.',
    advice: 'Cẩn thận đọc kỹ điều khoản hợp đồng trước khi ký, trau dồi tri thức bài bản.'
  },
  'Văn Khúc': {
    name: 'Văn Khúc',
    category: 'Lục Cát Tinh',
    element: 'Thủy',
    yinYang: 'Âm',
    huaKhi: 'Văn Nghệ Tinh, Hùng Biện & Nghệ Thuật',
    characteristics: 'Chủ về tài năng nghệ thuật, thi ca nhạc họa, khẩu tài hùng biện sắc bén, tư duy cảm xúc tinh tế.',
    goodAspects: 'Hội hợp với Xương Khúc, Khôi Việt tạo văn võ song toàn, danh tiếng vang xa.',
    badAspects: 'Gặp nhiều sao đào hoa sát tinh dễ sa đà vào tình cảm lãng mạn ủy mị, phân tâm việc chính.',
    advice: 'Hướng tài năng nghệ thuật vào công việc sáng tạo, giữ lối sống kỷ luật.'
  },
  'Thiên Khôi': {
    name: 'Thiên Khôi',
    category: 'Lục Cát Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Đệ Nhất Quý Nhân, Khôi Nguyên & Tiên Phong',
    characteristics: 'Chủ về đứng đầu bảng vàng, tư chất thủ lĩnh, luôn có bậc bề trên quyền quý che chở nâng đỡ khi gặp khó.',
    goodAspects: 'Hội hợp Thiên Việt thành Tọa Quý Hướng Quý, con đường công danh rộng mở thênh thang.',
    badAspects: 'Gặp Tuần Triệt làm giảm bớt sức mạnh quý nhân, cần nỗ lực tự thân nhiều hơn.',
    advice: 'Biết ơn và đền đáp những ân nhân đã giúp đỡ mình, khi thành công cần nâng đỡ thế hệ sau.'
  },
  'Thiên Việt': {
    name: 'Thiên Việt',
    category: 'Lục Cát Tinh',
    element: 'Hỏa',
    yinYang: 'Âm',
    huaKhi: 'Âm Quý Nhân, Bề Trên Nâng Đỡ & May Mắn Thầm Lặng',
    characteristics: 'Chủ về quý nhân âm thầm phò trợ, phụ nữ hoặc bậc tiền bối giúp đỡ, cơ hội bất ngờ xuất hiện giải nguy.',
    goodAspects: 'Cùng Thiên Khôi hội chiếu cung Mệnh Quan Tài: sự nghiệp hanh thông, danh dự sáng ngời.',
    badAspects: 'Gặp sát tinh thì sự nâng đỡ đôi khi đi kèm điều kiện hoặc áp lực kỳ vọng lớn.',
    advice: 'Khiêm nhường học hỏi, giữ thái độ cung kính trước các bậc tiền nhân.'
  },

  // --- LỘC TỒN & TÀI QUÝ TINH ---
  'Lộc Tồn': {
    name: 'Lộc Tồn',
    category: 'Tài Tinh Quý',
    element: 'Thổ',
    yinYang: 'Âm',
    huaKhi: 'Thiên Lộc, Kho Tàng Của Cải & Giải Hung Hóa Cát',
    characteristics: 'Chủ về bổng lộc trời ban, của cải tích lũy vững vàng, tính tình thận trọng, tiết kiệm và tài quản lý tài sản.',
    goodAspects: 'Gặp Hóa Lộc tạo Song Lộc Triều Viên; gặp Thiên Mã thành Lộc Mã Giao Trì, kinh doanh buôn bán đại phát.',
    badAspects: 'Luôn bị Kình Dương và Đà La kẹp hai bên; nếu đồng cung Địa Không, Địa Kiếp gọi là Lộc Phùng Không Xung, dễ mất của.',
    advice: 'Không nên quá keo kiệt, dùng tài sản làm phương tiện phụng sự xã hội để bền phúc.'
  },
  'Thiên Mã': {
    name: 'Thiên Mã',
    category: 'Vận Hội Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Chiến Mã, Năng Động, Bôn Ba & Xuất Ngoại',
    characteristics: 'Chủ về ý chí tiến thủ, sự linh hoạt nhạy bén, thích dịch chuyển, xuất ngoại, giao thương buôn bán phương xa.',
    goodAspects: 'Gặp Lộc Tồn thành Lộc Mã Giao Trì; gặp Tràng Sinh thành Mã Ngộ Trường Sinh, càng đi càng phát tài.',
    badAspects: 'Gặp Đà La thành Mã Chiết Túc (ngựa gãy chân); gặp Tuyệt thành Mã Cùng Đồ, bế tắc tiến thoái lưỡng nan.',
    advice: 'Định hướng rõ ràng trước khi hành động, tránh bôn ba vô định tiêu hao sinh lực.'
  },

  // --- HỶ DUYÊN & ĐÀO HOA TINH ---
  'Đào Hoa': {
    name: 'Đào Hoa',
    category: 'Hỷ Duyên Tinh',
    element: 'Mộc',
    yinYang: 'Âm',
    huaKhi: 'Duyên Dáng, Hấp Dẫn Giới Tính & Nghệ Thuật',
    characteristics: 'Chủ về dung mạo thanh tú, ăn nói có duyên, thu hút người khác phái, khéo tay và có gu thẩm mỹ cao.',
    goodAspects: 'Gặp Hồng Loan, Thiên Hỷ tạo Tam Minh rạng rỡ, tình duyên như ý, danh tiếng nghệ thuật.',
    badAspects: 'Gặp Không Kiếp, Hóa Kỵ hoặc Kình Đà dễ dính vào lưới tình ngang trái, thị phi đào hoa.',
    advice: 'Chân thành và nghiêm túc trong tình yêu, dùng sức hút cá nhân phục vụ công việc thiện lương.'
  },
  'Hồng Loan': {
    name: 'Hồng Loan',
    category: 'Hỷ Duyên Tinh',
    element: 'Thủy',
    yinYang: 'Âm',
    huaKhi: 'Hôn Nhân Hỷ Sự, Duyên Nợ & Tình Cảm Sâu Sắc',
    characteristics: 'Chủ về hôn nhân thuận lợi, có tin vui cưới hỏi sớm, tâm tính lương thiện, đoan trang và được mọi người quý mến.',
    goodAspects: 'Hội cùng Thiên Hỷ, Đào Hoa: cuộc sống hôn nhân viên mãn, gia đạo đầm ấm nhiều hỷ sự.',
    badAspects: 'Khi vào hạn gặp Tang Môn, Bạch Hổ hoặc Địa Kiếp cần phòng chuyện buồn tình cảm hoặc huyết quang.',
    advice: 'Gìn giữ sự chung thủy và vun đắp cho mái ấm gia đình bền vững.'
  },
  'Thiên Hỷ': {
    name: 'Thiên Hỷ',
    category: 'Hỷ Thần Tinh',
    element: 'Thủy',
    yinYang: 'Dương',
    huaKhi: 'Niềm Vui, Tiếng Cười & Hỷ Tín Báo Về',
    characteristics: 'Chủ về tính tình vui tươi, cởi mở, lạc quan, mang lại tiếng cười may mắn cho người xung quanh, sinh con thuận lợi.',
    goodAspects: 'Hội cùng Hồng Loan thành Loan Hỷ Trùng Phùng, hóa giải nhiều muộn phiền u uất.',
    badAspects: 'Gặp sát tinh thì niềm vui ngắn ngủi, dễ có chuyện dở khóc dở cười.',
    advice: 'Giữ tinh thần lạc quan, lan tỏa năng lượng tích cực đến mọi người.'
  },
  'Hỷ Thần': {
    name: 'Hỷ Thần',
    category: 'Hỷ Thần Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Hỷ Sự, Duyên May & Giải Trừ Muộn Phiền',
    characteristics: 'Chủ về việc cưới hỏi, sinh nở hanh thông, tính tình vui vẻ hòa nhã, kéo dài tuổi thọ.',
    goodAspects: 'Hội hợp cùng Long Trì, Phượng Các: gia đạo thêm người thêm của.',
    badAspects: 'Gặp sao xấu thì giảm bớt niềm vui.',
    advice: 'Vui vẻ hoan hỷ trong cuộc sống hàng ngày.'
  },

  // --- QUÝ TINH & PHÚC ĐỨC TINH ---
  'Ân Quang': {
    name: 'Ân Quang',
    category: 'Quý Thần Tinh',
    element: 'Mộc',
    yinYang: 'Dương',
    huaKhi: 'Ân Đức Bề Trên, Thiện Căn & Tổ Tiên Phù Trợ',
    characteristics: 'Chủ về lòng nhân ái, có căn duyên với tâm linh tôn giáo, thường được thần phật tổ tiên và ân nhân cứu giúp nhiệm màu.',
    goodAspects: 'Cùng Thiên Quý tạo thành cặp Quang Quý, đại hạn nguy nan đều tai qua nạn khỏi.',
    badAspects: 'Gặp sát tinh thì tâm tốt nhưng dễ bị hiểu lầm.',
    advice: 'Thường xuyên làm việc thiện, phóng sinh tu đức để bồi đắp phúc báu.'
  },
  'Thiên Quý': {
    name: 'Thiên Quý',
    category: 'Quý Thần Tinh',
    element: 'Thổ',
    yinYang: 'Âm',
    huaKhi: 'Quý Khí Thần Phật, Báo Đáp Ơn Nghĩa & Cứu Khổ',
    characteristics: 'Chủ về tính tình thanh cao, trung thực, biết trước biết sau, trọng tình nghĩa và luôn được giúp đỡ khi cùng đường.',
    goodAspects: 'Hội tụ cùng Ân Quang: phúc thọ song toàn, gia đạo an vui.',
    badAspects: 'Gặp sát tinh thì cần cẩn thận kẻ phản trắc.',
    advice: 'Ăn ở có đức, lấy chữ nhân nghĩa làm đầu.'
  },
  'Tam Thai': {
    name: 'Tam Thai',
    category: 'Văn Phúc Tinh',
    element: 'Thủy',
    yinYang: 'Dương',
    huaKhi: 'Bệ Đỡ Uy Quyền, An Nhàn & Phong Thái Đường Bệ',
    characteristics: 'Chủ về cuộc sống thảnh thơi, có kẻ hầu người hạ trợ giúp, gia tăng bệ đỡ vững chắc cho công danh và địa vị.',
    goodAspects: 'Cùng Bát Tọa tạo cặp Thai Tọa, nhà cao cửa rộng, địa vị vững như bàn thạch.',
    badAspects: 'Nếu đi với sao xấu thì lười biếng, thích hưởng thụ.',
    advice: 'Tận dụng thời vận an nhàn để tu dưỡng bản thân, không ỷ lại.'
  },
  'Bát Tọa': {
    name: 'Bát Tọa',
    category: 'Văn Phúc Tinh',
    element: 'Mộc',
    yinYang: 'Âm',
    huaKhi: 'Thế Đứng Vững Chắc, Thảnh Thơi & Uy Nghi',
    characteristics: 'Chủ về gia thế ổn định, tâm lý vững vàng, ít sóng gió biến động, có danh tiếng và sự nể trọng trong cộng đồng.',
    goodAspects: 'Hội cùng Tam Thai: quan lộ thênh thang, cuộc sống yên bình.',
    badAspects: 'Gặp sát bại tinh thì an nhàn nửa vời.',
    advice: 'Duy trì sự khiêm tốn và mực thước trong sinh hoạt.'
  },
  'Phong Cáo': {
    name: 'Phong Cáo',
    category: 'Khoa Danh Tinh',
    element: 'Thổ',
    yinYang: 'Âm',
    huaKhi: 'Bằng Khen, Tôn Vinh, Huân Chương & Vinh Quy',
    characteristics: 'Chủ về bằng cấp khen thưởng, sự công nhận chính thức từ cơ quan nhà nước hoặc tổ chức lớn, vinh hiển danh dự.',
    goodAspects: 'Cùng Thai Phụ tạo Cáo Phụ Ban Khen, thi cử đỗ đạt, nhận danh hiệu cao quý.',
    badAspects: 'Gặp Tuần Triệt thì khen thưởng bị trì hoãn.',
    advice: 'Phấn đấu bằng năng lực thực chất để thành tích được bền lâu.'
  },
  'Thai Phụ': {
    name: 'Thai Phụ',
    category: 'Khoa Danh Tinh',
    element: 'Kim',
    yinYang: 'Dương',
    huaKhi: 'Thăng Chức, Được Tín Nhiệm & Phụ Tá Cấp Cao',
    characteristics: 'Chủ về được cấp trên tin cậy giao phó ấn tín, giữ chức vụ quan trọng, danh dự uy tín được củng cố vững vàng.',
    goodAspects: 'Hội cùng Phong Cáo: công danh rực rỡ, được xã hội tôn vinh.',
    badAspects: 'Gặp sát tinh thì áp lực trách nhiệm nặng nề.',
    advice: 'Trung thực và tận tụy với nhiệm vụ được giao phó.'
  },
  'Long Trì': {
    name: 'Long Trì',
    category: 'Quý Tinh',
    element: 'Thủy',
    yinYang: 'Dương',
    huaKhi: 'Quý Khí Rồng Nước, Nhà Cửa Đẹp & Thị Giác Tinh Tế',
    characteristics: 'Chủ về dòng dõi thanh cao, dung mạo tuấn tú, nhà cửa điền sản bề thế khang trang, mắt sáng tinh anh.',
    goodAspects: 'Hội Phượng Các, Bạch Hổ, Hoa Cái thành Tứ Linh oai phong lẫm liệt, đỗ đạt công danh.',
    badAspects: 'Gặp sát tinh thì mắt dễ cận thị hoặc bệnh về mũi xoang.',
    advice: 'Chăm sóc sức khỏe giác quan, giữ gìn phong thái nho nhã.'
  },
  'Phượng Các': {
    name: 'Phượng Các',
    category: 'Quý Tinh',
    element: 'Mộc',
    yinYang: 'Âm',
    huaKhi: 'Quý Khí Phượng Hoàng, Cung Đình & Thính Giác Nhạy',
    characteristics: 'Chủ về phong thái thanh lịch quý phái, nhà cửa trang nhã cổ kính, tai thính, có khiếu âm nhạc nghệ thuật.',
    goodAspects: 'Cùng Long Trì tạo cặp Long Phượng sang trọng, phùng hung hóa cát.',
    badAspects: 'Gặp Kình Đà Không Kiếp dễ có vấn đề về tai hoặc răng miệng.',
    advice: 'Lắng nghe chân thành, thưởng thức nghệ thuật lành mạnh.'
  },
  'Hoa Cái': {
    name: 'Hoa Cái',
    category: 'Quyền Quý Tinh',
    element: 'Kim',
    yinYang: 'Dương',
    huaKhi: 'Lọng Che Vua Chúa, Thanh Cao & Khiếu Nghệ Thuật',
    characteristics: 'Chủ về tự tôn cao, thích sự hoàn mỹ sang trọng, có năng khiếu đặc biệt về tôn giáo, tâm linh và nghệ thuật tạo hình.',
    goodAspects: 'Hội trong bộ Tứ Linh: danh giá uy nghiêm, có quý nhân phò trợ.',
    badAspects: 'Đôi khi quá kiêu ngạo, cô độc do tiêu chuẩn quá cao đối với người khác.',
    advice: 'Hạ bớt cái tôi, hòa đồng với quần chúng để được yêu mến bền lâu.'
  },
  'Bạch Hổ': {
    name: 'Bạch Hổ',
    category: 'Quyền Tinh / Bại Tinh',
    element: 'Kim',
    yinYang: 'Dương',
    huaKhi: 'Hổ Trắng Oai Vệ, Quyền Uy & Huyết Quang',
    characteristics: 'Chủ về sự quả cảm, dũng mãnh, quyết đoán, tài biện luận sắc sảo; nhưng cũng chủ về nguy cơ tai nạn máu me nếu hãm.',
    goodAspects: 'Đắc địa tại Dần, Thân hội Tứ Linh hoặc Tướng Quân: nắm binh quyền, tài chỉ huy lỗi lạc.',
    badAspects: 'Hãm địa đi cùng Tang Môn, Khốc Hư chủ về tang tóc, đau ốm kinh niên hoặc mổ xẻ.',
    advice: 'Thận trọng khi đi lại xe cộ, hiến máu nhân đạo định kỳ để giải hạn huyết quang.'
  },
  'Thiên Khốc': {
    name: 'Thiên Khốc',
    category: 'Bại Tinh',
    element: 'Kim',
    yinYang: 'Dương',
    huaKhi: 'Tiếng Khóc Trời Than, Nỗi Buồn & Khổ Luyện Thành Tài',
    characteristics: 'Chủ về nỗi trăn trở nội tâm sâu sắc, hay lo nghĩ, tuổi trẻ gặp nhiều gian nan tôi luyện ý chí kiên cường.',
    goodAspects: 'Đắc địa tại Tý, Ngọ hội cùng Thiên Hư: tiếng tăm vang dội như sấm truyền (Tiền bần hậu phú).',
    badAspects: 'Hãm địa chủ về bi quan, nước mắt, tai ương gia đạo, bệnh đường hô hấp.',
    advice: 'Rèn luyện tư duy tích cực, chuyển hóa nỗi đau thành động lực phấn đấu.'
  },
  'Thiên Hư': {
    name: 'Thiên Hư',
    category: 'Bại Tinh',
    element: 'Thủy',
    yinYang: 'Âm',
    huaKhi: 'Sự Trống Rỗng, Hư Hao & Thử Thách Ý Chí',
    characteristics: 'Chủ về những dự định dễ bị hư hao dang dở nếu không quyết tâm, thể chất nhược, tính tình đôi khi dễ nản lòng.',
    goodAspects: 'Đắc địa tại Tý, Ngọ cùng Thiên Khốc: biến khó khăn thành thành tựu vẻ vang.',
    badAspects: 'Hãm địa: hao tổn nguyên khí, thất thoát tiền bạc, răng yếu hoặc phổi kém.',
    advice: 'Làm việc gì cũng phải kiên trì tới cùng, chú trọng bồi bổ sức khỏe.'
  },
  'Thiên Hình': {
    name: 'Thiên Hình',
    category: 'Sát Ám Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Thanh Kiếm Công Lý, Kỷ Cương & Hình Pháp',
    characteristics: 'Chủ về tính kỷ luật sắt đá, công minh chính trực, dứt khoát; nhưng cũng tượng trưng cho dao kéo mổ xẻ và kiện cáo pháp luật.',
    goodAspects: 'Đắc địa tại Dần, Thân, Mão, Dậu: làm quan tòa, thẩm phán, bác sĩ ngoại khoa phẫu thuật tài ba.',
    badAspects: 'Hãm địa gặp sát tinh: tai nạn thương tật, vướng vòng lao lý kiện tụng.',
    advice: 'Tuyệt đối tôn trọng pháp luật, cẩn trọng khi thao tác vật sắc nhọn kim khí.'
  },
  'Thiên Diêu': {
    name: 'Thiên Diêu',
    category: 'Sát Ám Tinh',
    element: 'Thủy',
    yinYang: 'Âm',
    huaKhi: 'Đào Hoa Huyền Bí, Y Dược & Phóng Túng',
    characteristics: 'Chủ về sự quyến rũ ma mị, năng khiếu y dược huyền học, ăn chơi phong lưu nhưng dễ sa đà mê muội nếu thiếu tự chủ.',
    goodAspects: 'Đắc địa hội cùng sao y dược: thầy thuốc giỏi, nhà nghiên cứu tâm linh sâu sắc.',
    badAspects: 'Hãm địa: dâm đãng, nghiện ngập, dính líu cờ bạc rượu chè hoặc tai nạn sông nước.',
    advice: 'Giữ gìn lối sống lành mạnh điều độ, tránh xa các cám dỗ độc hại.'
  },
  'Địa Không': {
    name: 'Địa Không',
    category: 'Lục Sát Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Bạo Phát Bạo Tàn, Đột Phá & Hư Vô',
    characteristics: 'Ngôi sao của tư duy đột phá dị biệt, dám nghĩ dám làm việc người khác không dám; phát tài cực nhanh nhưng tán cũng cực chóng.',
    goodAspects: 'Đắc địa tại Tỵ, Hợi: phát dã như lôi (phát giàu như sấm sét), thành công rực rỡ ngoài sức tưởng tượng.',
    badAspects: 'Hãm địa: trắng tay bất ngờ, mất mát tài sản lớn, tâm lý cô độc nổi loạn.',
    advice: 'Khi phát đạt phải biết điểm dừng, đầu tư an toàn và trích tài sản làm phúc thiện.'
  },
  'Địa Kiếp': {
    name: 'Địa Kiếp',
    category: 'Lục Sát Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Cướp Bóc Bất Ngờ, Sóng Gió & Ý Chí Thép',
    characteristics: 'Chủ về những biến cố mãnh liệt không lường trước, thử thách bản lĩnh sinh tồn tối thượng, tôi luyện ý chí bất khuất.',
    goodAspects: 'Đắc địa tại Tỵ, Hợi cùng Địa Không: anh hùng thời loạn, tạo nên sự nghiệp kinh thiên động địa.',
    badAspects: 'Hãm địa: nguy cơ phá sản, bị lừa gạt cướp đoạt, tai nạn máu me bất thình lình.',
    advice: 'Không tham lam mạo hiểm, luôn có phương án dự phòng rủi ro cho mọi kế hoạch.'
  },
  'Kình Dương': {
    name: 'Kình Dương',
    category: 'Lục Sát Tinh',
    element: 'Kim',
    yinYang: 'Dương',
    huaKhi: 'Mũi Giáo Tiên Phong, Can Đảm & Hình Thương',
    characteristics: 'Chủ về tính tình quả cảm, bộc trực, dám xông pha trận mạc, không lùi bước; nhưng cũng chủ về sự hung bạo và tai nạn chấn thương.',
    goodAspects: 'Đắc địa tại Thìn, Tuất, Sửu, Mùi: võ tướng hiển hách, nhà lãnh đạo cải cách kiên cường.',
    badAspects: 'Hãm địa: tính tình nóng nảy hiếu thắng, dễ vướng mổ xẻ thương tật ở chân tay đầu mối.',
    advice: 'Kiềm chế sự nóng giận, học cách lắng nghe và tránh tranh chấp vũ lực.'
  },
  'Đà La': {
    name: 'Đà La',
    category: 'Lục Sát Tinh',
    element: 'Kim',
    yinYang: 'Âm',
    huaKhi: 'Bánh Xe Nghiền Ngẫm, Trì Hoãn & Thâm Trầm',
    characteristics: 'Chủ về sự kiên nhẫn thâm sâu, mưu mô kín kẽ, nhưng công việc thường bị trì trệ kéo dài, dây dưa không dứt.',
    goodAspects: 'Đắc địa tại Thìn, Tuất, Sửu, Mùi: mưu lược sâu xa, kiên trì theo đuổi mục tiêu dài hạn.',
    badAspects: 'Hãm địa: bệnh tật mãn tính dây dưa, công danh trắc trở, thị phi âm ỉ sau lưng.',
    advice: 'Hành sự dứt khoát minh bạch, không để các vấn đề dây dưa kéo dài quá lâu.'
  },
  'Hỏa Tinh': {
    name: 'Hỏa Tinh',
    category: 'Lục Sát Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Ngọn Lửa Bùng Cháy, Nóng Nảy & Tốc Chiến',
    characteristics: 'Chủ về phản ứng nhanh như chớp, khí thế hừng hực, nhiệt huyết; nhưng tính khí bốc đồng, dễ nổi trận lôi đình.',
    goodAspects: 'Đắc địa tại Dần, Mão, Tỵ, Ngọ hội cùng Tham Lang tạo Tham Hỏa tương phùng, phát tài lừng lẫy.',
    badAspects: 'Hãm địa: nóng nảy làm hỏng việc lớn, đề phòng hỏa hoạn cháy nổ và bệnh sốt cao.',
    advice: 'Tu tâm dưỡng tính, tập thiền định để hạ hỏa khí trong tâm can.'
  },
  'Linh Tinh': {
    name: 'Linh Tinh',
    category: 'Lục Sát Tinh',
    element: 'Hỏa',
    yinYang: 'Âm',
    huaKhi: 'Tia Chớp Ngầm, Thâm Sâu & Bền Bỉ',
    characteristics: 'Chủ về sự bền bỉ âm thầm, nội lực mạnh mẽ, nhưng hay ôm mối hận trong lòng, thù dai khó nguôi.',
    goodAspects: 'Đắc địa hội cùng Tham Lang tạo Tham Linh đắc cách, sự nghiệp bứt phá ngoạn mục.',
    badAspects: 'Hãm địa: tâm trạng u uất kéo dài, thần kinh căng thẳng, dễ bị ám ảnh tâm lý.',
    advice: 'Học cách buông xả tha thứ, giải tỏa cảm xúc tiêu cực kịp thời.'
  },

  // --- BỘ CÔ QUẢ & BẠI TINH ---
  'Cô Thần': {
    name: 'Cô Thần',
    category: 'Ám Tinh',
    element: 'Thổ',
    yinYang: 'Dương',
    huaKhi: 'Cô Đơn, Độc Lập & Khép Kín',
    characteristics: 'Chủ về tính cách độc lập tự chủ, thích một mình nghiên cứu, nhưng nhân duyên lạnh nhạt, khó chia sẻ cảm xúc.',
    goodAspects: 'Rất hợp cho nhà nghiên cứu khoa học, tu sĩ, triết gia cần sự tĩnh lặng tuyệt đối.',
    badAspects: 'Đóng tại Mệnh hoặc Phu Thê: chậm kết hôn, vợ chồng ít tâm sự chia sẻ.',
    advice: 'Mở lòng giao tiếp với thế giới xung quanh, tham gia các hoạt động xã hội cộng đồng.'
  },
  'Quả Tú': {
    name: 'Quả Tú',
    category: 'Ám Tinh',
    element: 'Thổ',
    yinYang: 'Âm',
    huaKhi: 'Góa Bụa, Giữ Của & Kín Đáo',
    characteristics: 'Chủ về sự gìn giữ của cải chặt chẽ, kín tiếng, tự lập; nhưng tình cảm lứa đôi dễ cô quạnh, xa cách người thân.',
    goodAspects: 'Giỏi giữ tiền, không tiêu xài hoang phí, bảo tồn gia sản tốt.',
    badAspects: 'Khó tính, hay nghi ngờ, dễ tạo khoảng cách ngăn cách với người bạn đời.',
    advice: 'Học cách bao dung và tin tưởng người khác, chia sẻ tâm tư với bạn đời.'
  },
  'Thiên La': {
    name: 'Thiên La',
    category: 'Hạn Tinh',
    element: 'Thổ',
    yinYang: 'Dương',
    huaKhi: 'Lưới Trời Thìn Cung, Ràng Buộc & Thử Thách',
    characteristics: 'Tượng như mạng lưới vô hình bủa vây tại cung Thìn, gây cảm giác bế tắc, tiến thoái lưỡng nan trong một giai đoạn đời người.',
    goodAspects: 'Gặp tuần triệt hoặc cát tinh miếu vượng phá lưới: tôi luyện ý chí phi thường, bứt phá thành công rực rỡ.',
    badAspects: 'Hành động liều lĩnh khi chưa đủ lực dễ bị trói buộc thất bại nặng nề.',
    advice: 'Kiên nhẫn chờ đợi thời cơ, tích lũy năng lực, không nóng vội phá rào.'
  },
  'Địa Võng': {
    name: 'Địa Võng',
    category: 'Hạn Tinh',
    element: 'Thổ',
    yinYang: 'Âm',
    huaKhi: 'Lưới Đất Tuất Cung, Gian Nan & Tôi Luyện',
    characteristics: 'Tượng như cạm bẫy trói buộc tại cung Tuất, thử thách sức chịu đựng và bản lĩnh vượt khó của đương số.',
    goodAspects: 'Được chính tinh miếu vượng cứu giải: phá vỡ xiềng xích, công danh hiển hách.',
    badAspects: 'Dễ rơi vào thế kẹt trong công việc hoặc hợp đồng tranh chấp.',
    advice: 'Làm việc minh bạch tuân thủ pháp luật, tĩnh tâm vượt qua giai đoạn giông bão.'
  },
  'Đại Hao': {
    name: 'Đại Hao',
    category: 'Bại Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Hao Tán Lớn, Dời Đổi & Tiêu Pha',
    characteristics: 'Chủ về sự thay đổi lớn, di chuyển chỗ ở liên tục, tiêu tiền quyển, thích đầu tư quy mô lớn.',
    goodAspects: 'Đắc địa tại Mão, Dậu hội cùng Tiểu Hao (Song Hao đắc địa): buôn bán xuyên quốc gia, tiền ra nhiều thì tiền vào càng lớn.',
    badAspects: 'Hãm địa: tán gia bại sản, nghiện ngập cờ bạc tiêu xài vô độ.',
    advice: 'Học cách quản lý dòng tiền chặt chẽ, đầu tư vào giá trị lâu dài thay vì tiêu sản.'
  },
  'Tiểu Hao': {
    name: 'Tiểu Hao',
    category: 'Bại Tinh',
    element: 'Hỏa',
    yinYang: 'Âm',
    huaKhi: 'Hao Tán Nhỏ, Tiêu Xài & Thay Đổi Thường Xuyên',
    characteristics: 'Chủ về tiêu pha lặt vặt liên tục, tính tình thoáng tính, thích mua sắm, thay đổi thị hiếu liên tục.',
    goodAspects: 'Cùng Đại Hao đắc địa tại Dần Thân Mão Dậu: đầu tư xoay vòng vốn tài tình.',
    badAspects: 'Hãm địa: tiền bạc rỉ rả trôi đi không giữ được tích lũy.',
    advice: 'Lập sổ theo dõi chi tiêu hàng tháng, hạn chế mua sắm theo cảm xúc nhất thời.'
  },
  'Kiếp Sát': {
    name: 'Kiếp Sát',
    category: 'Sát Bại Tinh',
    element: 'Hỏa',
    yinYang: 'Dương',
    huaKhi: 'Đoạt Mệnh, Mổ Xẻ & Tai Nạn',
    characteristics: 'Chủ về tính khí nóng nảy quyết liệt, nguy cơ rủi ro mổ xẻ thương tật nếu gặp thêm các sát tinh khác.',
    goodAspects: 'Hội cùng tướng tinh, võ tinh: dũng cảm xông pha trận mạc, không sợ hiểm nguy.',
    badAspects: 'Gặp Không Kiếp, Hình Riêu: đề phòng tai nạn bất ngờ hoặc phẫu thuật ngoại khoa.',
    advice: 'Giữ tâm thái điềm tĩnh, cẩn trọng khi tham gia giao thông và lao động nặng.'
  },
  'Phá Toái': {
    name: 'Phá Toái',
    category: 'Bại Tinh',
    element: 'Hỏa',
    yinYang: 'Âm',
    huaKhi: 'Đổ Vỡ Giữa Chừng, Trở Ngại & Bất Hòa',
    characteristics: 'Chủ về công việc hay bị đứt đoạn, cản trở giữa chừng, tính tình bướng bỉnh ngang ngạnh, cổ họng dễ bị viêm.',
    goodAspects: 'Ý chí kiên cường không chịu khuất phục khó khăn.',
    badAspects: 'Làm việc dễ bỏ dở nửa chừng, hay gây gổ bất hòa với đồng nghiệp.',
    advice: 'Tập tính kiên trì nhẫn nại, rèn luyện kỹ năng làm việc nhóm hòa hợp.'
  }
};
