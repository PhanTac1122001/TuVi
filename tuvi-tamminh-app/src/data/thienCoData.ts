/**
 * KHO TRI THỨC LUẬN GIẢI MỆNH LÝ THIÊN CƠ (TỬ VI NAM PHÁI)
 * Trích xuất và hệ thống hóa từ tài liệu "Mệnh Lý Thiên Cơ" (Lê Quang Lăng - tuvinamphai.vn)
 */

export interface ThangSinhInfo {
  title: string;
  dacDiem: string;
  ngheNghiep: string;
  luuY: string;
}

export interface ThanCuInfo {
  tenCung: string;
  yNghia: string;
  loiKhuyen: string;
}

export interface PalaceThienCoRule {
  khaiQuat: string;
  biQuyet: string[];
  nguyenLyDacBiet: string;
}

/**
 * Luận Mệnh theo 12 Tháng Sinh (Chương I mục 8)
 */
export const THANG_SINH_DATA: Record<number, ThangSinhInfo> = {
  1: {
    title: 'Sinh Tháng Giêng (Tháng Dần - Tiết Lập Xuân)',
    dacDiem: 'Khí xuân ấm áp, vạn vật bắt đầu sinh sôi nảy nở. Người sinh tháng này tính tình cương trực, hào sảng, có chí tiến thủ cao, tự tôn mạnh mẽ, thích độc lập tác chiến.',
    ngheNghiep: 'Thích hợp với các công việc quản lý, tự lập kinh doanh, quân sự, kỹ thuật tiên phong hoặc chính trị.',
    luuY: 'Dễ nôn nóng, đôi khi bảo thủ. Cần rèn luyện tính kiên nhẫn và biết lắng nghe ý kiến cộng sự.'
  },
  2: {
    title: 'Sinh Tháng Hai (Tháng Mão - Tiết Kinh Trập / Xuân Phân)',
    dacDiem: 'Mộc khí đương lệnh, mầm cây vươn cành. Người sinh tháng hai thông minh thanh nhã, có khiếu văn chương nghệ thuật, tính tình ôn hòa, biết ứng xử khéo léo nhưng nội tâm kiên cường.',
    ngheNghiep: 'Rất hợp ngành giáo dục, văn hóa, truyền thông, nghệ thuật, luật hoặc tư vấn chiến lược.',
    luuY: 'Dễ bị cảm xúc chi phối, đa sầu đa cảm. Cần rèn luyện tinh thần thực tế và dứt khoát trong các thời điểm quyết định.'
  },
  3: {
    title: 'Sinh Tháng Ba (Tháng Thìn - Tiết Thanh Minh / Cốc Vũ)',
    dacDiem: 'Thổ vượng sinh kim, dương khí dồi dào. Người sinh tháng này trí tuệ sâu sắc, tầm nhìn xa rộng, có tài thao lược, kiên định và có khả năng chịu đựng áp lực rất cao.',
    ngheNghiep: 'Thích hợp tài chính, ngân hàng, bất động sản, quy hoạch kiến trúc, nghiên cứu học thuật đỉnh cao.',
    luuY: 'Cẩn trọng tính độc đoán, dễ đa nghi. Cần học cách ủy quyền và tin tưởng người khác.'
  },
  4: {
    title: 'Sinh Tháng Bốn (Tháng Tỵ - Tiết Lập Hạ)',
    dacDiem: 'Đầu hạ hỏa vượng, khí thế hừng hực. Người sinh tháng tư nhiệt tình, sôi nổi, đầu óc nhanh nhạy, phản ứng linh hoạt, giàu ý tưởng sáng tạo và khả năng thuyết phục người khác rất tốt.',
    ngheNghiep: 'Ngoại giao, marketing, thương mại quốc tế, công nghệ thông tin, diễn thuyết hoặc nghệ thuật trình diễn.',
    luuY: 'Cả thèm chóng chán, dễ bộc phát nóng nảy. Cần tập trung vào mục tiêu dài hạn, tránh phân tán nguồn lực.'
  },
  5: {
    title: 'Sinh Tháng Năm (Tháng Ngọ - Tiết Mang Chủng / Hạ Chí)',
    dacDiem: 'Chính hạ thuần dương, ánh sáng rực rỡ nhất. Người sinh tháng này quang minh lỗi lạc, tính tình bộc trực, ghét sự ám muội, lòng tự trọng cao ngút, luôn muốn đứng ở vị trí dẫn đầu.',
    ngheNghiep: 'Lãnh đạo doanh nghiệp, chính khách, tư pháp, truyền thông đại chúng, chỉ huy quân đội.',
    luuY: 'Quá thẳng thắn dễ làm tổn thương người khác, dễ sinh kẻ thù ngầm. Cần học chữ "nhẫn" và thuật nhu đạo.'
  },
  6: {
    title: 'Sinh Tháng Sáu (Tháng Mùi - Tiết Tiểu Thử / Đại Thử)',
    dacDiem: 'Mùa thu hoạch hè, thổ khí nung nấu. Người sinh tháng sáu cẩn trọng, thực tế, làm việc bài bản có trách nhiệm cao, trọng chữ tín và biết lo xa cho hậu vận.',
    ngheNghiep: 'Kế toán, kiểm toán, thẩm định tài sản, nông nghiệp công nghệ cao, y dược hoặc hậu cần.',
    luuY: 'Đôi khi quá thận trọng làm mất thời cơ. Cần dám mạo hiểm có tính toán khi cơ hội lớn xuất hiện.'
  },
  7: {
    title: 'Sinh Tháng Bảy (Tháng Thân - Tiết Lập Thu)',
    dacDiem: 'Khí thu bắt đầu man mác, kim khí sắc bén. Người sinh tháng này sắc sảo, logic, lý trí mạnh mẽ, phân định công tư rạch ròi, giải quyết khủng hoảng cực kỳ quyết đoán.',
    ngheNghiep: 'Công nghệ, kỹ thuật cơ khí, tài chính đầu tư, giải phẫu y khoa, luật sư tranh tụng.',
    luuY: 'Dễ lạnh lùng, ít biểu lộ cảm xúc khiến người xung quanh xa cách. Cần bồi đắp lòng trắc ẩn và sự mềm mỏng.'
  },
  8: {
    title: 'Sinh Tháng Tám (Tháng Dậu - Tiết Bạch Lộ / Thu Phân)',
    dacDiem: 'Chính thu trong trẻo, trăng thanh gió mát. Người sinh tháng tám có phong thái tao nhã, tinh tế, thẩm mỹ vượt trội, giỏi quan sát tâm lý người khác và có tài hùng biện.',
    ngheNghiep: 'Thiết kế, quan hệ công chúng (PR), thời trang, quản trị nhân sự, ngoại giao, nghiên cứu ngôn ngữ.',
    luuY: 'Hay soi xét tiểu tiết, đôi khi cầu toàn thái quá tạo áp lực cho cấp dưới hoặc người thân.'
  },
  9: {
    title: 'Sinh Tháng Chín (Tháng Tuất - Tiết Hàn Lộ / Sương Giáng)',
    dacDiem: 'Cuối thu sang đông, thổ tàng hỏa. Người sinh tháng chín trung hậu, kiên trì, trọng tình nghĩa, có khả năng tích lũy kinh nghiệm và của cải bền bỉ, hậu vận thường rất sung túc.',
    ngheNghiep: 'Quản trị chuỗi cung ứng, kho vận bến bãi, tư vấn tài sản, bảo hiểm, an ninh trật tự.',
    luuY: 'Nội tâm hay lo lắng vu vơ, có xu hướng hoài niệm quá khứ. Cần mở lòng đón nhận cái mới.'
  },
  10: {
    title: 'Sinh Tháng Mười (Tháng Hợi - Tiết Lập Đông)',
    dacDiem: 'Đầu đông thủy khí tích tụ, âm khí sinh khởi. Người sinh tháng mười sâu sắc, đa mưu túc trí, giỏi che giấu cảm xúc và toan tính, có trực giác tâm linh và nhận thức nhạy bén.',
    ngheNghiep: 'Tư vấn chiến lược, công nghệ cao, nghiên cứu tâm lý, mật vụ, triết học, chiêm tinh phong thủy.',
    luuY: 'Dễ rơi vào trạng thái tiêu cực hoặc cô độc nội tâm. Cần giao lưu rộng rãi và giữ tinh thần lạc quan.'
  },
  11: {
    title: 'Sinh Tháng Mười Một (Tháng Tý - Tiết Đại Tuyết / Đông Chí)',
    dacDiem: 'Chính đông hàn lạnh, một dương sinh ra từ đáy vực. Người sinh tháng này mưu lược uyên thâm, linh hoạt như dòng nước, thích nghi cực tốt với mọi nghịch cảnh, biến nguy thành cơ.',
    ngheNghiep: 'Kinh doanh mạo hiểm, thương mại điện tử, tình báo, tài chính phái sinh, nghiên cứu khoa học hàn lâm.',
    luuY: 'Đôi khi tính toán quá sâu sắc khiến người khác e dè. Cần lấy sự chân thành làm gốc để thu phục nhân tâm.'
  },
  12: {
    title: 'Sinh Tháng Mười Hai (Tháng Sửu - Tiết Tiểu Hàn / Đại Hàn)',
    dacDiem: 'Cuối đông chờ đón mùa xuân mới, tích lũy tinh hoa đất trời. Người sinh tháng chạp kiên nhẫn, chịu thương chịu khó, giàu đức hy sinh, hành động chắc chắn, đáng tin cậy.',
    ngheNghiep: 'Quản lý dự án dài hạn, xây dựng, kiến trúc, hành chính công, giáo dục truyền thống, y tế dự phòng.',
    luuY: 'Thường chịu thiệt thòi về mình trong giai đoạn đầu đời. Cần tự tin đòi hỏi quyền lợi chính đáng.'
  }
};

/**
 * Luận Giải Cung Thân Cư 6 Vị Trí (Chương II.I)
 */
export const THAN_CU_DATA: Record<string, ThanCuInfo> = {
  'Thân cư Mệnh': {
    tenCung: 'Thân Cư Mệnh (Sinh giờ Tý hoặc giờ Ngọ)',
    yNghia: 'Người có Mệnh Thân đồng cung luôn giữ vững lập trường, trước sau như một. Số phận cuộc đời chịu ảnh hưởng trực tiếp từ năng lực và cá tính tự thân, ít bị hoàn cảnh ngoại giới xô đẩy. Tính tự lập rất cao, thành bại đều do chính bàn tay mình làm nên.',
    loiKhuyen: 'Tránh rơi vào chủ quan hoặc bảo thủ. Thành công bền vững khi biết lắng nghe và linh hoạt thích ứng với thời cuộc.'
  },
  'Thân cư Phúc Đức': {
    tenCung: 'Thân Cư Phúc Đức (Sinh giờ Sửu hoặc giờ Mùi)',
    yNghia: 'Tâm hồn và hậu vận gắn chặt với đời sống tinh thần, phúc phận dòng tộc và mồ mả tổ tiên. Người này thường rất coi trọng họ hàng, luôn hướng về cội nguồn, dễ có khiếu về tâm linh, tôn giáo hoặc nghệ thuật thưởng ngoạn.',
    loiKhuyen: 'Cần năng làm việc thiện, tích đức hành thiện để nuôi dưỡng cội nguồn phúc trạch, cứu nguy lúc đại hạn.'
  },
  'Thân cư Quan Lộc': {
    tenCung: 'Thân Cư Quan Lộc (Sinh giờ Dần hoặc giờ Thân)',
    yNghia: 'Mẫu người say mê sự nghiệp, công danh là lẽ sống. Trung và hậu vận dành phần lớn tâm sức cho địa vị, công việc và trách nhiệm xã hội. Dù ở bất cứ cương vị nào cũng dốc hết tâm huyết để khẳng định giá trị bản thân.',
    loiKhuyen: 'Cân bằng giữa công việc và gia đình. Đừng để áp lực thăng tiến làm hao tổn sức khỏe và tình thân.'
  },
  'Thân cư Thiên Di': {
    tenCung: 'Thân Cư Thiên Di (Sinh giờ Mão hoặc giờ Dậu)',
    yNghia: 'Số mệnh hướng ngoại, càng đi xa quê hương lập nghiệp càng dễ phát đạt. Cuộc đời gắn liền với những chuyến đi, chuyển dời chỗ ở, thay đổi môi trường làm việc hoặc xuất ngoại.',
    loiKhuyen: 'Xây dựng mạng lưới giao tiếp rộng lớn và văn minh. Chú trọng an toàn giao thông và thích nghi tập quán mới.'
  },
  'Thân cư Tài Bạch': {
    tenCung: 'Thân Cư Tài Bạch (Sinh giờ Thìn hoặc giờ Tuất)',
    yNghia: 'Đầu óc thực tế, luôn nhạy bén với cơ hội tài chính và tiền bạc. Trung hậu vận tập trung vào việc gây dựng tài sản, đầu tư kinh doanh hoặc quản lý dòng tiền.',
    loiKhuyen: 'Coi đồng tiền là phương tiện, không để đồng tiền chi phối đạo đức sống. Quản trị rủi ro chặt chẽ, tránh đầu cơ mù quáng.'
  },
  'Thân cư Phu Thê': {
    tenCung: 'Thân Cư Phu Thê (Sinh giờ Tỵ hoặc giờ Hợi)',
    yNghia: 'Hôn nhân và người bạn đời đóng vai trò bước ngoặt quyết định của cuộc đời. Sau khi lập gia đình, sự nghiệp và tài vận thường thay đổi rõ rệt nhờ sự hỗ trợ đắc lực từ vợ/chồng.',
    loiKhuyen: 'Tôn trọng và đồng thuận cùng bạn đời. Mọi quyết định đại sự nên bàn bạc kỹ lưỡng trong gia đình.'
  }
};

/**
 * Luận Giải 12 Cung Theo Mệnh Lý Thiên Cơ (Chương II)
 */
export const PALACE_THIENCO_DATA: Record<string, PalaceThienCoRule> = {
  'Mệnh': {
    khaiQuat: 'Cung Mệnh là Thái cực của toàn bộ lá số, biểu thị cốt cách tiên thiên, bản tính bẩm sinh, dung mạo, năng lực cốt lõi và xu hướng vận mệnh suốt cuộc đời.',
    biQuyet: [
      'Xem Mệnh phải xét cả Mệnh Vô Chính Diệu: nếu không có chính tinh cần mượn chính tinh đối cung (Thiên Di) hoặc xem xét cát hung của các sát tinh độc thủ.',
      'Tam phương tứ chính hội tụ cát tinh (Tả Phù, Hữu Bật, Khôi, Việt, Khoa, Quyền, Lộc) thì phú quý song toàn.',
      'Gặp Kình Đà Không Kiếp nhập Mệnh là thế nghịch cảnh tôi luyện, cần dùng ý chí sắt đá để chuyển họa thành phúc.',
      'Nếu can cung Mệnh dẫn đến Tứ Hóa phi vào các cung khác: phi Hóa Lộc là đem may mắn đến cho cung đó, phi Hóa Kị là gánh vác nợ nần hoặc xung đột.'
    ],
    nguyenLyDacBiet: 'Quy tắc Mệnh - Thân: Mệnh là gốc tiên thiên (nửa đời đầu), Thân là ngọn hậu thiên (từ 30 tuổi trở đi). Mệnh tốt không bằng Thân tốt, Thân tốt không bằng Vận tốt.'
  },
  'Huynh Đệ': {
    khaiQuat: 'Biểu thị tình nghĩa anh chị em ruột thịt, bạn bè tri kỷ chí thân, đồng thời là đối cung của Bộc Dịch và là "Tài khố qua đường".',
    biQuyet: [
      'Cung Huynh Đệ là một tài khố mang tính lưu thông, tiền tài hay chuyển hóa thành các chi phí tiêu dùng ra ngoài.',
      'Nếu cung Huynh Đệ có Hóa Lộc thì anh em giàu có, hỗ trợ tài chính cho mình.',
      'Nếu cung Huynh Đệ và cung Bộc Dịch gặp Kị tinh: cẩn trọng tiền bạc hao hụt nhanh như nước chảy, không nên cho vay mượn lớn không có tài sản bảo đảm.',
      'Đường chéo Huynh Đệ - Thiên Di nên tĩnh không nên động, tránh can cung dẫn đến Hóa Kị xung phá.'
    ],
    nguyenLyDacBiet: 'Phân biệt Tài khố: Điền Trạch là kho tích lũy giữ gìn (tàng trữ), Huynh Đệ là kho luân chuyển chi tiêu (tiêu đi).'
  },
  'Phu Thê': {
    khaiQuat: 'Suy đoán đường tình duyên, tính cách người phối ngẫu, mức độ hòa hợp hôn nhân và sự hỗ trợ của bạn đời đối với sự nghiệp.',
    biQuyet: [
      'Cung Phu Thê phản chiếu trực tiếp sang cung Quan Lộc: nếu vợ chồng hòa thuận, sự nghiệp phát triển thuận lợi; nếu vợ chồng bất hòa, sự nghiệp hao tổn một nửa.',
      'Cung Phu Thê có Hóa Quyền: bạn đời là người tháo vát, quyền uy, thường âm thầm trợ giúp đắc lực cho công danh của đương số.',
      'Nếu có Hóa Lộc: tình cảm vợ chồng nồng thắm, lấy nhau về gia tăng tài lộc.',
      'Gặp Hóa Kị hoặc Sát tinh nặng: nên kết hôn muộn để hóa giải sóng gió hôn nhân.'
    ],
    nguyenLyDacBiet: 'Tam giác Mệnh - Phu Thê - Quan Lộc là trục bản lề của gia đạo và sự nghiệp trong Mệnh Lý Thiên Cơ.'
  },
  'Tử Tức': {
    khaiQuat: 'Xem đường con cái, hậu duệ, sự phát triển của thế hệ sau, đồng thời là đối cung của Điền Trạch, phản chiếu vận đào hoa và đầu tư địa ốc.',
    biQuyet: [
      'Cung Tử Nữ và Điền Trạch là cặp cung đối chiếu: Tử Nữ có Tài tinh (Vũ Khúc, Thiên Phủ, Hóa Lộc) thì tài vận gia đình cực kỳ hưng thịnh.',
      'Can cung Đại Hạn dẫn đến sao trong cung Tử Nữ Hóa Kị xung chiếu Điền Trạch: năm hạn đó thường phát sinh việc mua nhà, chuyển nhà hoặc gia tăng tài sản bất động sản.',
      'Nếu Tử Nữ gặp Đào Hoa, Tham Lang, Liêm Trinh: đương số là người đa tình, phong lưu, cần giữ gìn tiết hạnh gia đạo.'
    ],
    nguyenLyDacBiet: 'Quan hệ Tử Nữ - Điền Trạch: Tử Nữ là sự sinh sôi nảy nở, Điền Trạch là đất đai nâng đỡ dung chứa.'
  },
  'Tài Bạch': {
    khaiQuat: 'Cung chủ về tiền tài, phương thức kiếm tiền, dòng tiền lưu chuyển và khả năng quản lý tài chính của đương số.',
    biQuyet: [
      'Tài tinh đắc vị: Vũ Khúc, Thiên Phủ, Thái Âm, Lộc Tồn, Hóa Lộc nhập Tài Bạch là cách cục kinh doanh buôn bán đại phú.',
      'Cung Tài Bạch tốt mà Điền Trạch xấu thì kiếm được nhiều nhưng giữ không được, dễ hao tán vào tiêu xài hoặc rủi ro.',
      'Gặp Địa Không, Địa Kiếp: tiền đến bất ngờ nhưng đi cũng chóng vánh, tuyệt đối không tham gia cờ bạc đỏ đen.',
      'Có Hóa Quyền: nắm giữ quyền hành tài chính, quản lý ngân sách lớn.'
    ],
    nguyenLyDacBiet: 'Cung Tài Bạch là ngọn biểu hiện dòng tiền, cung Điền Trạch là gốc tích trữ tài sản bền vững.'
  },
  'Tật Ách': {
    khaiQuat: 'Xem sức khỏe bẩm sinh, thể tạng, nguy cơ bệnh tật, tai ách bất ngờ và các bộ phận dễ tổn thương trên cơ thể.',
    biQuyet: [
      'Thấu triệt nguyên lý "Mệnh Tật nhất thể, nhất lục cộng tông": Cung Mệnh là số 1, Cung Tật Ách là số 6 trong hệ thống bát quái.',
      'Tật Ách biểu thị thể xác, tâm bệnh và nơi ẩn náu của tạng phủ.',
      'Nếu cung Tật Ách có sao Hóa Lộc: thể chất sung mãn, tính tình lạc quan, gặp nạn dễ có quý nhân giúp đỡ.',
      'Có Hóa Kị hoặc Kình Đà Linh Hỏa: cần chú ý bệnh mãn tính, tai nạn xe cộ, nên duy trì lối sống lành mạnh và thường xuyên kiểm tra sức khỏe.'
    ],
    nguyenLyDacBiet: 'Mệnh là linh hồn, Tật Ách là thân xác vật lý. Tâm an thì thân khỏe, tu tâm dưỡng tính là liều thuốc hóa giải sâu sắc nhất.'
  },
  'Thiên Di': {
    khaiQuat: 'Biểu thị môi trường xã hội bên ngoài, khả năng xuất ngoại, mối quan hệ giao tế công cộng và vận may khi rời xa quê hương.',
    biQuyet: [
      'Thiên Di là đối cung trực chiếu Cung Mệnh, có ảnh hưởng đến 50% tính cách và hành vi xã hội.',
      'Thiên Di có Tả Phù, Hữu Bật, Khôi Việt: ra ngoài được xã hội trọng vọng, quý nhân tương trợ, mở rộng tầm nhìn.',
      'Thiên Di gặp Thiên Mã: số bôn ba di chuyển, làm việc trong các tập đoàn đa quốc gia hoặc thường xuyên công tác.',
      'Có Hóa Kị: ra ngoài dễ gặp điều tiếng thị phi, lái xe cần tập trung cao độ.'
    ],
    nguyenLyDacBiet: 'Tại cung Tứ Mã (Dần, Thân, Tỵ, Hợi), Thiên Di càng phát huy mạnh mẽ bản năng hướng ngoại và dịch chuyển.'
  },
  'Nô Bộc': {
    khaiQuat: 'Còn gọi là Cung Giao Hữu, biểu thị đồng nghiệp, cấp dưới, bạn bè xã giao và đối tác hợp tác làm ăn.',
    biQuyet: [
      'Can cung Bộc Dịch phi Hóa Lộc nhập Cung Mệnh: đây là dấu hiệu đương số đi đòi nợ hoặc nhờ vả đối tác cực kỳ thuận lợi và hanh thông.',
      'Nếu can cung Bộc Dịch phi Hóa Kị vào Mệnh: cẩn trọng bị bạn bè phản bội, cấp dưới làm thất thoát tài sản.',
      'Cung Nô Bộc có nhiều cát tinh: lãnh đạo giỏi dùng người, cấp dưới trung thành tận tụy.',
      'Cung Nô Bộc gặp Sát tinh: không nên đứng tên bảo lãnh nợ nần cho bạn bè.'
    ],
    nguyenLyDacBiet: 'Nô Bộc là cung đo lường năng lực nhân sự và uy tín lãnh đạo trong xã hội hiện đại.'
  },
  'Quan Lộc': {
    khaiQuat: 'Còn gọi là Cung Sự Nghiệp, biểu thị năng lực chuyên môn, địa vị xã hội, cơ hội thăng tiến và khả năng tự lập doanh nghiệp.',
    biQuyet: [
      'Muốn xem Quan Lộc chuẩn xác phải phối hợp chặt chẽ với cung Phu Thê, cung Mệnh và cung Tài Bạch.',
      'Cung Quan Lộc có Vũ Khúc, Thiên Phủ, Lộc Tồn: dễ bộc phát làm ăn lớn, giữ cương vị trọng trách tài chính doanh nghiệp.',
      'Nếu Quan Lộc có Hóa Kị: rất thích hợp làm việc trong lĩnh vực giáo dục, đào tạo, nghiên cứu chuyên sâu hoặc kỹ thuật hàn lâm.',
      'Gặp Tứ Hóa cát tinh (Khoa, Quyền, Lộc): đường công danh rộng mở, có cơ hội thăng quan tiến chức lớn.'
    ],
    nguyenLyDacBiet: 'Xem hướng ngồi làm việc: lấy can cung Quan Lộc phi hóa xem cung nào đắc Lộc/Quyền để định hướng tài vị.'
  },
  'Điền Trạch': {
    khaiQuat: 'Cung "Tàng tài chi khố", biểu thị khả năng tích lũy bất động sản, gia sản thừa kế, phong thủy nơi ở và môi trường làm việc.',
    biQuyet: [
      'Điền Trạch là gốc của cải: dù Tài Bạch kiếm được nhiều bao nhiêu nhưng Điền Trạch không giữ được thì cũng khó bền.',
      'Cung Điền Trạch thích nhất Lộc Tồn, Hóa Lộc, Vũ Khúc, Thiên Phủ: tiền vào là giữ được, đất đai gia tăng theo năm tháng.',
      'Can cung Điền Trạch kị tọa vào Bính, Đinh, Kỷ, Tân, Nhâm (dẫn đến Liêm Trinh, Cự Môn, Vũ Khúc, Xương Khúc Hóa Kị): dễ gặp tranh chấp pháp lý nhà đất.',
      'Hóa Kị nằm ở Điền Trạch: trước 35 tuổi không nên tự đứng tên mua nhà lần đầu, nhà ở thường phải sửa sang, cải tạo.',
      'Thế đất Điền Trạch: tọa Tứ Mã chi địa (Dần, Thân, Tỵ, Hợi) thì nhà thường ở ngoại ô; tọa Tứ Mộ (Thìn, Tuất, Sửu, Mùi) thì nhà ở đô thị kiên cố.'
    ],
    nguyenLyDacBiet: 'Điền Trạch là bản thể sâu kín của cung Tài Bạch theo nguyên lý "Mệnh Tật nhất thể, nhất lục cộng tông".'
  },
  'Phúc Đức': {
    khaiQuat: 'Biểu thị đời sống tinh thần, tư tưởng nội tâm, phúc ấm tổ tiên và tuổi thọ bình an của đương số.',
    biQuyet: [
      'Cung Phúc Đức là gốc rễ nâng đỡ toàn bộ 12 cung, chi phối sâu sắc đời sống nội tâm và hạnh phúc hôn nhân.',
      'Phúc Đức có Thái Dương, Thái Âm sáng sủa, Thiên Đồng, Thiên Lương: tâm hồn an lạc, sống thọ, con cháu hiếu thảo.',
      'Gặp Kình Đà Không Kiếp: nội tâm hay trăn trở, lo toan, cần tu dưỡng thiền định và làm việc thiện để tâm bình an.',
      'Phúc Đức tốt chiếu sang Tài Bạch sẽ giúp đương số kiếm tiền chân chính, lương thiện và thanh thản.'
    ],
    nguyenLyDacBiet: 'Phúc Đức biểu thị năng lượng tinh thần vô hình, quyết định mức độ thanh thản và hạnh phúc đích thực của đời người.'
  },
  'Phụ Mẫu': {
    khaiQuat: 'Còn gọi là Cung Tướng Mạo, Cung Văn Thư, biểu thị phúc phận cha mẹ, di truyền dung mạo và đường giấy tờ thi cử pháp lý.',
    biQuyet: [
      'Cung Phụ Mẫu sáng sủa có Văn Xương, Văn Khúc, Hóa Khoa: học hành thông minh, thi cử đỗ đạt cao, gia đình có truyền thống hiếu học.',
      'Phụ Mẫu hội tụ sát tinh: nên lập nghiệp xa nhà sớm để tránh xung khắc thế hệ.',
      'Là cung Văn Thư: khi hạn đến cung Phụ Mẫu có cát tinh thì dễ ký kết hợp đồng lớn, xin visa hoặc thăng hàm chức danh thuận lợi.'
    ],
    nguyenLyDacBiet: 'Cung Phụ Mẫu và Cung Huynh Đệ kẹp hai bên Cung Mệnh, tạo thành thế bảo bọc gia đình ruột thịt từ thuở ấu thơ.'
  }
};

/**
 * Các Nguyên Lý Đặc Sắc của Sách "Mệnh Lý Thiên Cơ"
 */
export const SPECIAL_CONCEPTS_DATA = {
  tangTaiChiKho: `Nguyên Lý Tàng Tài Chi Khố:
Trong Tử Vi Nam Phái (Mệnh Lý Thiên Cơ), việc luận đoán giàu nghèo không chỉ nhìn vào Cung Tài Bạch mà bắt buộc phải kiểm tra Cung Điền Trạch và Cung Huynh Đệ.
- Cung Điền Trạch là "Tàng tài chi khố": Mang tính chất thu lại, tàng trữ và cố định hóa dòng tiền thành tài sản vững chắc (nhà cửa, đất đai, vàng bạc tích lũy). Điền Trạch có Lộc Tồn, Hóa Lộc, Vũ Khúc, Thiên Phủ thì của cải đời đời hưng vượng.
- Cung Huynh Đệ là "Tài khố qua đường": Tuy là tài khố chính tông nhưng mang tính luân chuyển, biến đổi thành chi phí và tiêu tán ra ngoài.
- Nếu cả Huynh Đệ và Bộc Dịch hoặc Điền Trạch và Tử Nữ đồng thời bị Hóa Kị: Tiền tiêu như nước chảy, cần cẩn trọng nguy cơ nợ nần.`,

  menhTatNhatThe: `Nguyên Lý Mệnh Tật Nhất Thể ("Nhất lục cộng tông"):
Dựa vào Dịch học và số Lạc Thư, Cung Mệnh là số 1, Cung Tật Ách là số 6. Hai cung này tuy ở hai đầu đối xứng nhưng thực chất là một thể thống nhất.
- Cung Mệnh biểu thị "Phần Hồn", tư tưởng, ý chí và tính cách bẩm sinh.
- Cung Tật Ách biểu thị "Phần Xác", thể tạng, sức chịu đựng thể chất và những tiềm ẩn bệnh tật.
- Khí sắc của Mệnh suy thì bệnh phát tác ở Tật; ngược lại thân thể khỏe mạnh tại Tật Ách thì ý chí tại Mệnh mới phát huy trọn vẹn. Tương tự, Điền Trạch (vị trí 10) là bản thể của Tài Bạch (vị trí 5) theo cùng nguyên tắc tương hỗ này.`,

  quanPhuTuongTac: `Nguyên Lý Quan Lộc Phối Chiếu Phu Thê:
"Hậu phương vững chắc thì tiền tuyến mới an tâm lập công". Mệnh Lý Thiên Cơ nhấn mạnh:
Sự nghiệp của một người gắn bó mật thiết với tình cảm gia đình. Nếu cung Phu Thê hài hòa, cung Quan Lộc được tiếp thêm 50% sức mạnh. Nếu cung Phu Thê gặp Hóa Quyền, người bạn đời sẽ là quân sư đắc lực, âm thầm tạo dựng uy tín cho đương số. Nếu cung Phu Thê lục đục, phong ba thì công danh sự nghiệp cũng dễ gãy đổ giữa đường.`,

  dienTuTuongTac: `Nguyên Lý Điền Trạch Phối Chiếu Tử Nữ:
Trục Điền Trạch - Tử Nữ phản ánh tài vận thế hệ và phong thủy cư trú. Khi đại hạn hoặc lưu niên kích hoạt Tứ Hóa xung chiếu giữa hai cung này, các sự kiện trọng đại về mua bán nhà cửa, chuyển dời chỗ ở, hoặc sinh nở thêm con cái sẽ đồng thời phát sinh.`
};
