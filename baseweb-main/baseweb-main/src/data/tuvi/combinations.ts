import { CombinationPattern } from '@/types/tuvi'

export const TUVI_COMBINATIONS: CombinationPattern[] = [
  // ==========================================
  // I. THƯỢNG CÁCH PHÚ QUÝ
  // ==========================================
  {
    id: 'tu-phu-vu-tuong-liem',
    name: 'Tử Phủ Vũ Tướng Liêm',
    category: 'Phú Quý Cách',
    stars: ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng', 'Liêm Trinh'],
    description: 'Cách cục đế vương quyền quý bậc nhất, cơ cấu ổn định vững chắc như bàn thạch, tài quan song toàn, văn võ kiêm toàn, có tài lãnh đạo vĩ mô và nắm quyền lực lớn trong xã hội.',
    suitableCareers: ['Lãnh đạo nhà nước', 'Tổng giám đốc điều hành (CEO)', 'Quản trị tập đoàn kinh tế', 'Chính trị gia cao cấp'],
    notes: 'Rất cần hội họp cùng Tả Hữu, Xương Khúc, Khôi Việt, Lộc Tồn để thành Quân Thần Khánh Hội; tối kỵ gặp Không Kiếp hãm địa phá cách khiến quyền lực sụp đổ bất ngờ.'
  },
  {
    id: 'tu-phu-dong-cung',
    name: 'Tử Phủ Đồng Cung Cách (Cư Dần/Thân)',
    category: 'Phú Quý Cách',
    stars: ['Tử Vi', 'Thiên Phủ'],
    description: 'Hai vị đế tinh cùng đóng tại Dần hoặc Thân. Đời sống vật chất cực kỳ sung túc dư dả, phúc thọ song toàn, tính cách hiền hòa phúc hậu và có tài tổ chức quy mô lớn.',
    suitableCareers: ['Chủ tịch hội đồng quản trị', 'Thống đốc ngân hàng', 'Quản lý tài chính quốc gia', 'Nhà ngoại giao'],
    notes: 'Ưu điểm phúc thọ vẹn toàn nhưng dễ cô độc về mặt tinh thần hoặc muộn đường hôn phối; nếu gặp Kình Dương đồng cung cần giữ tâm đức chính trực tránh biến tướng thành gian thương.'
  },
  {
    id: 'quan-than-khanh-hoi',
    name: 'Quân Thần Khánh Hội Cách',
    category: 'Phú Quý Cách',
    stars: ['Tử Vi', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc'],
    description: 'Vua gặp bầy tôi giỏi quần tụ chúc mừng. Đế tinh Tử Vi được Lục Cát Tinh phò tá đắc lực quanh mình, thiên hạ quy phục, sự nghiệp lẫy lừng muôn thuở.',
    suitableCareers: ['Người sáng lập đế chế kinh doanh', 'Chính khách kiệt xuất', 'Thủ lĩnh cộng đồng', 'Hiệu trưởng đại học danh tiếng'],
    notes: 'Cách cục hoàn hảo không tì vết nếu không bị Tuần Triệt phân ly hay Tứ Sát tinh quấy nhiễu.'
  },
  {
    id: 'nhat-nguyet-tinh-minh',
    name: 'Nhật Nguyệt Tịnh Minh Cách',
    category: 'Phú Quý Cách',
    stars: ['Thái Dương', 'Thái Âm'],
    description: 'Thái Dương sáng rực tại Ngọ/Thìn, Thái Âm trong trẻo tại Tý/Tuất. Âm Dương điều hòa nhật nguyệt giao quang, trí tuệ kiệt xuất, quý nhân đa phương phò tá, danh thơm muôn đời.',
    suitableCareers: ['Học giả uyên bác', 'Nhà ngoại giao quốc tế', 'Chính khách danh tiếng', 'Nghệ thuật đỉnh cao'],
    notes: 'Tối kỵ gặp Hóa Kỵ hoặc Tuần Triệt làm mờ ánh sáng vầng nhật nguyệt (mây mờ che trăng, nhật thực nguyệt thực).'
  },
  {
    id: 'minh-chau-xuat-hai',
    name: 'Minh Châu Xuất Hải Cách (Mệnh cư Mùi)',
    category: 'Phú Quý Cách',
    stars: ['Thái Dương', 'Thái Âm', 'Thiên Lương', 'Thiên Đồng'],
    description: 'Viên ngọc sáng nhô lên khỏi mặt biển. Mệnh vô chính diệu tại Mùi được Thái Dương ở Mão và Thái Âm ở Hợi đồng thời chiếu sáng rực rỡ, tài năng xuất chúng thanh nhã.',
    suitableCareers: ['Giáo sư viện sĩ', 'Nhà văn kiệt xuất', 'Kiến trúc sư trưởng', 'Chuyên gia tư vấn cấp cao'],
    notes: 'Cần giữ tâm hồn trong sáng, không dính líu vào các cuộc đấu đá tranh giành danh lợi hèn mọn.'
  },

  // ==========================================
  // II. VĂN CÁCH & VŨ CÁCH
  // ==========================================
  {
    id: 'co-nguyet-dong-luong',
    name: 'Cơ Nguyệt Đồng Lương Cách',
    category: 'Văn Cách',
    stars: ['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    description: 'Cách cục văn nhân mưu lược, trí tuệ sâu sắc, đạo đức mực thước và ổn định bền lâu. Tư duy chiến lược xuất sắc, cuộc sống thanh nhàn thọ trường.',
    suitableCareers: ['Cố vấn chiến lược', 'Công chức cơ quan nhà nước', 'Bác sĩ giáo sư y khoa', 'Giảng viên đại học', 'Chuyên gia tài chính'],
    notes: 'Phát triển tốt nhất trong môi trường tổ chức bài bản quy củ; không thích hợp trực tiếp buôn bán mạo hiểm hoặc đối đầu vũ lực.'
  },
  {
    id: 'cu-nhat',
    name: 'Cự Nhật Đồng Cung (Cư Dần/Thân)',
    category: 'Văn Cách',
    stars: ['Cự Môn', 'Thái Dương'],
    description: 'Thái Dương quang minh xua tan ám khí nghi kỵ của Cự Môn. Chủ về tài ăn nói hùng biện sắc bén, tư duy phản biện xuất chúng và uy danh vang dội bốn phương.',
    suitableCareers: ['Luật sư danh tiếng', 'Nhà ngoại giao', 'Diễn thuyết gia', 'Nhà báo truyền thông quốc tế', 'Chính trị gia'],
    notes: 'Tốt nhất tại Dần (Thái Dương vượng); tại Thân (chiều tà) cần bổ sung thêm Hóa Lộc, Hóa Quyền để bảo toàn sự nghiệp lâu dài.'
  },
  {
    id: 'vu-sat',
    name: 'Vũ Sát (Vũ Khúc - Thất Sát)',
    category: 'Vũ Cách',
    stars: ['Vũ Khúc', 'Thất Sát'],
    description: 'Song Kim Sát Phạt Cách. Quyết đoán, cương nghị sắt đá, kỷ luật thép, có tầm nhìn chiến lược thực dụng và năng lực quản lý tài chính dòng tiền uy lực.',
    suitableCareers: ['Ngân hàng đầu tư mạo hiểm', 'Chỉ huy quân sự cảnh sát', 'Kinh doanh sản xuất công nghiệp nặng', 'Pháp chế tài chính'],
    notes: 'Cần tôi luyện đức tính từ bi, hòa ái với gia đình và cộng sự để hóa giải khí cô độc hình thương của Song Kim.'
  },

  // ==========================================
  // III. BIẾN ĐỘNG & ĐỘT PHÁ
  // ==========================================
  {
    id: 'sat-pha-tham',
    name: 'Sát Phá Tham Cách',
    category: 'Biến Động',
    stars: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    description: 'Cách cục biến động và bứt phá mạnh mẽ nhất trong Tử Vi. Cuộc đời nhiều thăng trầm sóng gió, dám nghĩ dám làm điều người khác sợ hãi, làm giàu đột biến trong thời loạn.',
    suitableCareers: ['Khởi nghiệp mạo hiểm', 'Đầu tư tài chính quốc tế', 'Khai phá thị trường mới', 'Chỉ huy quân đội tác chiến'],
    notes: 'Cần môi trường cạnh tranh khắc nghiệt mới phát huy hết tài năng; rất cần gặp Hóa Quyền, Hóa Lộc hoặc Tứ Sát đắc địa; tối kỵ sát tinh hãm địa gây bạo phát bạo tàn.'
  },

  // ==========================================
  // IV. CÁCH CỤC HUNG BẠI & NGUY HIỂM (CẦN TU DƯỠNG CẢI BIẾN)
  // ==========================================
  {
    id: 'linh-xuong-da-vu',
    name: 'Linh Xương Đà Vũ Cách (Hạn Đến Sông Nước)',
    category: 'Bần Họa Cách',
    stars: ['Linh Tinh', 'Văn Xương', 'Đà La', 'Vũ Khúc'],
    description: 'Cách cục cực kỳ nguy hiểm trong Tử Vi. Cổ văn dạy: "Linh Xương Đà Vũ, hạn chí đầu hà" (đến hạn dễ tai nạn sông nước, phá sản hoặc quẫn bách tinh thần).',
    suitableCareers: ['Cần tu dưỡng tâm tính, tránh xa cờ bạc đầu tư ảo, tránh xa vùng nước xoáy hiểm trở'],
    notes: 'Hóa giải bằng Tam Minh: Giữ tâm minh bạch, không tham lam lợi lộc phi pháp, khi hạn đến chủ động nhún nhường, tích phúc phóng sinh.'
  },
  {
    id: 'kinh-da-hiep-ky',
    name: 'Kình Đà Hiệp Kỵ Cách (Bị Kẹp Cổ)',
    category: 'Bần Họa Cách',
    stars: ['Kình Dương', 'Đà La', 'Hóa Kỵ', 'Lộc Tồn'],
    description: 'Lộc Tồn đồng cung với Hóa Kỵ thì bị Kình Dương đi trước và Đà La theo sau kẹp chặt hai bên. Tai bay vạ gió, tiểu nhân ngầm hãm hại tranh đoạt tài sản.',
    suitableCareers: ['Tránh đứng tên đại diện pháp lý cho người khác, thận trọng trong ủy quyền tài chính'],
    notes: 'Hóa giải: Tuyệt đối không cho vay mượn thiếu chứng từ, không tham lam của cải bất chính, ẩn nhẫn chờ thời.'
  },
  {
    id: 'hinh-tu-giap-an',
    name: 'Hình Tù Giáp Ấn Cách',
    category: 'Bần Họa Cách',
    stars: ['Thiên Hình', 'Liêm Trinh', 'Thiên Tướng', 'Kình Dương'],
    description: 'Ấn Tinh (Thiên Tướng) bị kẹp bởi Liêm Trinh (Tù tinh) và Thiên Hình hoặc Kình Dương. Dễ vướng vào vòng lao lý, thanh tra pháp luật, kiện tụng tranh chấp hợp đồng.',
    suitableCareers: ['Làm việc thượng tôn pháp luật, kiểm toán minh bạch, tuyệt đối không lách luật'],
    notes: 'Hóa giải: Luôn làm đúng quy trình pháp lý chuẩn mực, không bao che sai phạm, tích cực làm việc thiện nguyện.'
  },
  {
    id: 'khong-kiep-ham-hoi-sat',
    name: 'Không Kiếp Hãm Địa Hội Sát Tinh',
    category: 'Bần Họa Cách',
    stars: ['Địa Không', 'Địa Kiếp', 'Hỏa Tinh', 'Linh Tinh'],
    description: 'Hai sát tinh Không Kiếp hãm địa hội họp tàn phá cung Tài, Mệnh hoặc Điền. Tiền tài tụ tán bất thường như bọt nước đại dương, bạo phát thì bạo tàn.',
    suitableCareers: ['Không nên kinh doanh đầu cơ lướt sóng, nên mua bất động sản để tích lũy an toàn'],
    notes: 'Hóa giải theo Nhân Minh: Biết đủ là phúc, chia sẻ tài lộc cho cộng đồng, không tham lam làm giàu bất chính.'
  }
]
