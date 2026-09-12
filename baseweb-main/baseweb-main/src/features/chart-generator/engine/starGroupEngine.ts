/**
 * Engine nhận diện và luận giải Bộ Sao Phụ Tinh Cát & Hung (TuViVietnam Standard)
 */

import { TuViPalace, StarGroupItem, StarGroupAnalysis, StarGroupLocation } from '../types/chart.types';

interface StarGroupDefinition {
  id: string;
  name: string;
  type: 'good' | 'bad';
  category: string;
  stars: string[];
  minMatch?: number;
  effect: string;
  remedy?: string;
}

// 1. Danh Mục Bộ Sao Phụ Tinh Cát (Auspicious Auxiliary Star Sets)
export const GOOD_STAR_GROUPS_DEF: StarGroupDefinition[] = [
  {
    id: 'ta-phu-huu-bat',
    name: 'Tả Phù - Hữu Bật (Tả Hữu Phò Tá)',
    type: 'good',
    category: 'Lục Cát Tinh',
    stars: ['Tả Phù', 'Hữu Bật'],
    effect: 'Chủ về sự tương trợ đắc lực, bạn bè cộng sự trung thành giúp đỡ, quy tụ lòng người, tăng cường uy quyền và hóa giải hoạn nạn.'
  },
  {
    id: 'van-xuong-van-khuc',
    name: 'Văn Xương - Văn Khúc (Xương Khúc Khoa Bảng)',
    type: 'good',
    category: 'Lục Cát Tinh',
    stars: ['Văn Xương', 'Văn Khúc'],
    effect: 'Chủ về trí tuệ mẫn tiệp, thông minh đĩnh ngộ, văn chương chữ nghĩa hoa mỹ, tài năng nghệ thuật, thi cử đỗ đạt hiển vinh.'
  },
  {
    id: 'thien-khoi-thien-viet',
    name: 'Thiên Khôi - Thiên Việt (Tọa Quý Hướng Quý)',
    type: 'good',
    category: 'Lục Cát Tinh',
    stars: ['Thiên Khôi', 'Thiên Việt'],
    effect: 'Đệ nhất quý nhân tinh, luôn có bậc bề trên nâng đỡ, quý nhân phò trợ trong lúc bế tắc, tư chất đứng đầu, danh dự uy tín cao quý.'
  },
  {
    id: 'tam-hoa-lien-chau',
    name: 'Tam Hóa Khoa - Quyền - Lộc (Tam Kỳ Giai Hội)',
    type: 'good',
    category: 'Tứ Hóa Cát',
    stars: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'],
    effect: 'Thượng cách cực quý, danh tài quyền tam toàn, trí tuệ xuất chúng, công danh lẫy lừng, sự nghiệp thành tựu phi thường.'
  },
  {
    id: 'hoa-khoa-hoa-quyen',
    name: 'Hóa Khoa - Hóa Quyền (Khoa Quyền Song Mỹ)',
    type: 'good',
    category: 'Tứ Hóa Cát',
    stars: ['Hóa Khoa', 'Hóa Quyền'],
    effect: 'Vừa có danh tiếng học vấn uyên thâm, vừa nắm giữ thực quyền chỉ huy và điều hành xuất sắc.'
  },
  {
    id: 'hoa-loc-hoa-quyen',
    name: 'Hóa Lộc - Hóa Quyền (Quyền Lộc Tương Phùng)',
    type: 'good',
    category: 'Tứ Hóa Cát',
    stars: ['Hóa Lộc', 'Hóa Quyền'],
    effect: 'Tài quan song mỹ, vừa giàu có về tiền bạc vừa có địa vị xã hội cao, cơ hội sinh sôi tài lộc dồi dào.'
  },
  {
    id: 'loc-ma-giao-tri',
    name: 'Lộc Tồn - Thiên Mã (Lộc Mã Giao Trì)',
    type: 'good',
    category: 'Tài Lộc Tinh',
    stars: ['Lộc Tồn', 'Thiên Mã'],
    effect: 'Càng năng động bôn ba càng làm ăn phát đạt, kinh doanh buôn bán phương xa sinh lợi lớn, tài lộc dồi dào chảy về như thác.'
  },
  {
    id: 'tam-minh-dao-hong-hy',
    name: 'Đào Hoa - Hồng Loan - Thiên Hỷ (Tam Minh)',
    type: 'good',
    category: 'Hỷ Duyên Tinh',
    stars: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    minMatch: 2,
    effect: 'Dung mạo thanh tú quyến rũ, ăn nói duyên dáng, tình duyên thuận hòa nhiều hỷ sự may mắn, danh tiếng rạng rỡ.'
  },
  {
    id: 'tu-duc',
    name: 'Tứ Đức (Long Đức, Phúc Đức, Thiên Đức, Nguyệt Đức)',
    type: 'good',
    category: 'Phúc Thiện Tinh',
    stars: ['Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức'],
    minMatch: 2,
    effect: 'Tâm tính từ bi lương thiện, được thần phật tổ tiên gia hộ, đức năng thắng số, giải trừ hung hiểm và tai nạn bệnh tật.'
  },
  {
    id: 'an-quang-thien-quy',
    name: 'Ân Quang - Thiên Quý (Quang Quý Ơn Trên)',
    type: 'good',
    category: 'Quý Thần Tinh',
    stars: ['Ân Quang', 'Thiên Quý'],
    effect: 'Chủ về thiện căn sâu dày, tâm tính từ hòa, hay làm phúc cứu người, gặp đại hạn luôn được ân nhân cứu vớt nhiệm màu.'
  },
  {
    id: 'tam-thai-bat-toa',
    name: 'Tam Thai - Bát Tọa (Thai Tọa An Khang)',
    type: 'good',
    category: 'Văn Phúc Tinh',
    stars: ['Tam Thai', 'Bát Tọa'],
    effect: 'Cuộc sống an nhàn thảnh thơi, có kẻ hầu người hạ trợ giúp, gia tăng bệ đỡ vững chắc cho địa vị và gia đạo.'
  },
  {
    id: 'long-tri-phuong-cac',
    name: 'Long Trì - Phượng Các (Long Phượng Quý Khí)',
    type: 'good',
    category: 'Quý Tinh',
    stars: ['Long Trì', 'Phượng Các'],
    effect: 'Gia đạo khang trang, nhà cửa điền sản bề thế thanh lịch, thần thái phong nhã sang trọng, thính giác thị giác tinh tế.'
  },
  {
    id: 'thai-phu-phong-cao',
    name: 'Thai Phụ - Phong Cáo (Cáo Phụ Ban Khen)',
    type: 'good',
    category: 'Khoa Danh Tinh',
    stars: ['Thai Phụ', 'Phong Cáo'],
    effect: 'Chủ về văn bằng, chứng chỉ, huân huy chương ban khen, có danh hiệu chính thức, được xã hội trọng vọng tán thưởng.'
  },
  {
    id: 'tuong-quan-quoc-an',
    name: 'Tướng Quân - Quốc Ấn (Binh Quyền Ấn Tín)',
    type: 'good',
    category: 'Quyền Tinh',
    stars: ['Tướng Quân', 'Quốc Ấn'],
    effect: 'Nắm giữ ấn tín con dấu quyền hành, có tư chất tướng soái chỉ huy quyết đoán, được giao trọng trách lớn trong tổ chức.'
  },
  {
    id: 'thien-quan-thien-phuc',
    name: 'Thiên Quan - Thiên Phúc (Phúc Thần Cứu Khổ)',
    type: 'good',
    category: 'Phúc Thiện Tinh',
    stars: ['Thiên Quan', 'Thiên Phúc'],
    effect: 'Tâm tính thanh tịnh, hướng thiện chuộng triết lý đạo pháp, phước duyên sâu dày giúp chuyển hóa nghịch cảnh thành thuận cảnh.'
  },
  {
    id: 'bac-si-thanh-long-tau-thu',
    name: 'Bác Sĩ - Thanh Long - Tấu Thư (Văn Bút Hùng Biện)',
    type: 'good',
    category: 'Văn Tài Tinh',
    stars: ['Thanh Long', 'Tấu Thư'],
    effect: 'Tài ăn nói lưu loát sắc bén, văn phong bay bổng, có lợi thi cử văn bằng và giải tỏa vướng mắc pháp lý hợp đồng.'
  },
  {
    id: 'hoa-loc-hoa-khoa',
    name: 'Hóa Lộc - Hóa Khoa (Khoa Lộc Tri Thức Phú Quý)',
    type: 'good',
    category: 'Tứ Hóa Cát',
    stars: ['Hóa Lộc', 'Hóa Khoa'],
    effect: 'Vừa có tài năng học vấn chuyên môn sâu sắc, vừa có khả năng kiếm tiền và sinh sôi tài lộc dồi dào chính trực.'
  },
  {
    id: 'tu-linh',
    name: 'Tứ Linh (Thanh Long - Bạch Hổ - Phượng Các - Hoa Cái)',
    type: 'good',
    category: 'Quý Danh Tinh',
    stars: ['Thanh Long', 'Bạch Hổ', 'Phượng Các', 'Hoa Cái'],
    minMatch: 3,
    effect: 'Tứ Linh chầu về (Thanh Long, Bạch Hổ, Phượng Các, Hoa Cái), chủ về nhân cách thanh cao, danh thơm tiếng tốt, phong thái đài các, đi đâu cũng được người đời trọng vọng nể phục.'
  },
  {
    id: 'dieu-y',
    name: 'Diêu Y (Thiên Diêu - Thiên Y)',
    type: 'good',
    category: 'Dược Thiện Tinh',
    stars: ['Thiên Diêu', 'Thiên Y'],
    effect: 'Bộ sao Diêu Y chủ về tài hoa nghệ thuật, năng khiếu y dược trị liệu, giác quan tâm linh nhạy bén và duyên nghiệp y học cứu người.'
  },
  {
    id: 'ma-khoc-khach',
    name: 'Mã - Khốc - Khách (Vó Ngựa Vang Danh / Tiền Hô Hậu Ủng)',
    type: 'good',
    category: 'Vận Hội Tinh',
    stars: ['Thiên Mã', 'Thiên Khốc', 'Điếu Khách'],
    minMatch: 2,
    effect: 'Thiên Mã đắc Khốc Khách như ngựa lành có người cổ vũ, lập nên công danh lớn lao nơi phương xa, tiếng tăm vang dội.'
  },
  {
    id: 'nhi-duc-thien-nguyet',
    name: 'Thiên Đức - Nguyệt Đức (Nhị Đức Giải Tai)',
    type: 'good',
    category: 'Phúc Thiện Tinh',
    stars: ['Thiên Đức', 'Nguyệt Đức'],
    effect: 'Phúc đức từ tâm sâu dày, thần phật gia hộ, giải trừ hoạn nạn nhẹ nhàng và đem lại sự êm ấm cho gia đạo.'
  },
  {
    id: 'song-loc',
    name: 'Song Lộc (Lộc Tồn - Hóa Lộc Triều Viên)',
    type: 'good',
    category: 'Tài Lộc Tinh',
    stars: ['Lộc Tồn', 'Hóa Lộc'],
    effect: 'Cách cục đại phú đại quý, tiền bạc dồi dào tụ về từ nhiều nguồn, kinh doanh buôn bán hay đầu tư tài chính đều sinh lời vượt trội.'
  },
  {
    id: 'tue-ho-phu',
    name: 'Tuế Hổ Phù (Thái Tuế - Bạch Hổ - Quan Phù)',
    type: 'good',
    category: 'Chính Khí Tinh',
    stars: ['Thái Tuế', 'Bạch Hổ', 'Quan Phù'],
    minMatch: 2,
    effect: 'Vòng Thái Tuế chính trực quang minh, tư cách đàng hoàng, có tài năng diễn thuyết biện luận sắc sảo, năng lực lãnh đạo và thượng tôn pháp luật.'
  },
  {
    id: 'dao-hong',
    name: 'Đào Hoa - Hồng Loan (Đào Hồng Hỷ Duyên)',
    type: 'good',
    category: 'Hỷ Duyên Tinh',
    stars: ['Đào Hoa', 'Hồng Loan'],
    effect: 'Dung mạo tú lệ, giao tiếp duyên dáng hấp dẫn, đa tài nghệ thuật, tình duyên nồng thắm và sớm gây dựng tình cảm êm ấm.'
  },
  {
    id: 'loan-hy',
    name: 'Hồng Loan - Thiên Hỷ (Loan Hỷ Trùng Phùng)',
    type: 'good',
    category: 'Hỷ Thần Tinh',
    stars: ['Hồng Loan', 'Thiên Hỷ'],
    effect: 'Bộ sao niềm vui và cát khánh, tâm hồn lạc quan vui tươi, cuộc sống tràn ngập hỷ sự may mắn, gia đạo thuận hòa yên vui.'
  },
  {
    id: 'tu-quy-van-tinh',
    name: 'Khôi - Việt - Xương - Khúc (Tứ Cát Khoa Bảng)',
    type: 'good',
    category: 'Đại Khoa Bảng',
    stars: ['Thiên Khôi', 'Thiên Việt', 'Văn Xương', 'Văn Khúc'],
    minMatch: 3,
    effect: 'Hội tụ tinh hoa trí tuệ và quý nhân, học rộng tài cao, văn chương đỗ đạt đứng đầu bảng vàng, công danh rực rỡ hiển vinh.'
  },
  {
    id: 'bac-si-tau-thu',
    name: 'Bác Sĩ - Tấu Thư (Bác Sĩ Biện Tài)',
    type: 'good',
    category: 'Văn Học Tinh',
    stars: ['Bác Sĩ', 'Tấu Thư'],
    effect: 'Văn phong bay bổng, ăn nói lưu loát sắc bén, có tài hùng biện, đắc lợi thi cử văn bằng và giải tỏa các vướng mắc văn bản giấy tờ.'
  },
  {
    id: 'duong-phu-quoc-an',
    name: 'Đường Phù - Quốc Ấn (Phù Ấn Trấn Giữ)',
    type: 'good',
    category: 'Quyền Tinh',
    stars: ['Đường Phù', 'Quốc Ấn'],
    effect: 'Nắm giữ cơ sở trụ sở bề thế, sở hữu văn bằng chứng chỉ ấn tín thực quyền, vị thế uy tín vững chắc trong cơ quan tổ chức.'
  },
  {
    id: 'cai-ho',
    name: 'Hoa Cái - Bạch Hổ (Cái Hổ Oai Phong)',
    type: 'good',
    category: 'Quyền Quý Tinh',
    stars: ['Hoa Cái', 'Bạch Hổ'],
    effect: 'Khí chất đài các oai phong kiêu hãnh, có tố chất tướng cách chỉ huy, đi đầu dẫn dắt phong trào, dễ được vinh danh nổi tiếng.'
  },
  {
    id: 'thien-tru-hoa-loc',
    name: 'Thiên Trù - Hóa Lộc (Thực Thần Đắc Lộc)',
    type: 'good',
    category: 'Tài Ẩm Tinh',
    stars: ['Thiên Trù', 'Hóa Lộc'],
    effect: 'Có lộc ăn uống phong phú, tài hoa sành sỏi về ẩm thực dinh dưỡng hoặc kinh doanh dịch vụ nhà hàng khách sạn ẩm thực phát tài.'
  },
  {
    id: 'thien-tai-thien-tho',
    name: 'Thiên Tài - Thiên Thọ (Tài Thọ Cân Bằng)',
    type: 'good',
    category: 'Phúc Thọ Tinh',
    stars: ['Thiên Tài', 'Thiên Thọ'],
    effect: 'Chủ về tài năng thiên phú đi đôi với phúc thọ trường an, tâm tính nhân từ phúc hậu, cân bằng giữa cống hiến và thụ hưởng phúc đức.'
  },
  {
    id: 'tam-duc',
    name: 'Tam Đức (Phúc Đức - Thiên Đức - Nguyệt Đức)',
    type: 'good',
    category: 'Phúc Thiện Tinh',
    stars: ['Phúc Đức', 'Thiên Đức', 'Nguyệt Đức'],
    minMatch: 2,
    effect: 'Phúc trạch sâu dày, tâm tính hiền hòa thiện lương, đức năng thắng số, luôn được tổ tiên thần phật chở che hóa giải hoạn nạn.'
  },
  {
    id: 'giai-than-phuong-cac',
    name: 'Giải Thần - Phượng Các (Phượng Giải Tiêu Tai)',
    type: 'good',
    category: 'Cứu Giải Tinh',
    stars: ['Giải Thần', 'Phượng Các'],
    effect: 'Bộ sao giải cứu tai ương đặc biệt, phong thái nho nhã thanh cao, phùng hung hóa cát, gia đạo bình an.'
  },
  {
    id: 'binh-hinh-tuong-an',
    name: 'Binh Hình Tướng Ấn (Phục Binh - Thiên Hình - Tướng Quân - Quốc Ấn)',
    type: 'good',
    category: 'Võ Cách Quyền Tinh',
    stars: ['Phục Binh', 'Thiên Hình', 'Tướng Quân', 'Quốc Ấn'],
    minMatch: 3,
    effect: 'Bộ võ tướng chỉ huy xuất chúng, nắm trong tay đại quyền sinh sát và quân kỷ nghiêm minh, tài mưu lược quyết đoán, bách chiến bách thắng trong sự nghiệp.'
  },
  {
    id: 'khoi-viet-quang-quy',
    name: 'Khôi - Việt - Quang - Quý (Đại Quý Nhân Phò Trợ)',
    type: 'good',
    category: 'Đại Quý Nhân',
    stars: ['Thiên Khôi', 'Thiên Việt', 'Ân Quang', 'Thiên Quý'],
    minMatch: 3,
    effect: 'Được thần phật tổ tiên và bề trên che chở tuyệt đối, quý nhân tột bậc nâng đỡ, tâm tính từ bi cao thượng, chuyển nguy thành an, phúc lộc trường tồn.'
  },
  {
    id: 'thanh-long-hoa-ky',
    name: 'Thanh Long - Hóa Kỵ (Long Kỵ Hóa Rồng / Rồng Gặp Mây Mưa)',
    type: 'good',
    category: 'Cát Hóa Cách',
    stars: ['Thanh Long', 'Hóa Kỵ'],
    effect: 'Tựa như rồng xanh gặp mây đen gió bão để vẫy vùng thăng hoa, biến nghịch cảnh trắc trở thành bàn đạp phi thường để kiến tạo đại nghiệp xuất chúng.'
  },
  {
    id: 'thanh-long-bach-ho',
    name: 'Thanh Long - Bạch Hổ (Long Hổ Tương Phùng)',
    type: 'good',
    category: 'Quyền Quý Tinh',
    stars: ['Thanh Long', 'Bạch Hổ'],
    effect: 'Khí thế oai phong lẫm liệt, có tài thao lược và vị thế vững vàng, công danh thăng tiến rực rỡ trong cơ quan tổ chức.'
  },
  {
    id: 'loc-ton-hoa-quyen',
    name: 'Lộc Tồn - Hóa Quyền (Tồn Quyền Song Toàn)',
    type: 'good',
    category: 'Tài Quyền Tinh',
    stars: ['Lộc Tồn', 'Hóa Quyền'],
    effect: 'Vừa có nguồn ngân sách dồi dào vững chắc, vừa nắm giữ thực quyền chỉ huy điều hành tối cao, danh tài lưỡng toàn.'
  },
  {
    id: 'thien-ma-phuong-cac',
    name: 'Thiên Mã - Phượng Các (Cỗ Xe Hoa Vinh Quy)',
    type: 'good',
    category: 'Quý Tinh',
    stars: ['Thiên Mã', 'Phượng Các'],
    effect: 'Ngựa lành kéo cỗ xe hoa, công danh hiển đạt nơi phương xa, vinh quy bái tổ, danh giá thanh tao phong lưu.'
  },
  {
    id: 'thien-ma-trang-sinh',
    name: 'Thiên Mã - Tràng Sinh (Tuấn Mã Phi Vạn Dặm)',
    type: 'good',
    category: 'Vận Hội Tinh',
    stars: ['Thiên Mã', 'Tràng Sinh'],
    effect: 'Tuấn mã đắc Sinh địa: Ngựa sung sức phi ngàn dặm không mỏi, chí hướng thanh vân bộc phát mạnh mẽ, càng bôn ba càng gặt hái nhiều thành tựu rực rỡ.'
  },
  {
    id: 'thai-phu-vuong-tuong',
    name: 'Thai - Phục - Vượng - Tướng (Bộ Duyên Tình / Tướng Cách)',
    type: 'good',
    category: 'Võ Cách Tinh',
    stars: ['Thai', 'Phục Binh', 'Tướng Quân', 'Đế Vượng'],
    minMatch: 3,
    effect: 'Trong công việc thì mưu lược dũng mãnh, dám nghĩ dám làm và có khí phách thống soái; trong tình cảm thì say đắm cuồng nhiệt, tiếng sét ái tình.'
  },
  {
    id: 'am-long-truc',
    name: 'Âm Long Trực (Thiếu Âm - Long Đức - Trực Phù)',
    type: 'good',
    category: 'Chính Khí Tinh',
    stars: ['Thiếu Âm', 'Long Đức', 'Trực Phù'],
    minMatch: 2,
    effect: 'Tam hợp vòng Thái Tuế tượng trưng cho đức khiêm nhường, nhẫn nại chịu thiệt, lấy ân báo oán, tâm tính từ bi lương thiện, đức năng thắng số, hậu vận bình an hưởng phúc ấm tổ tiên.'
  },
  {
    id: 'duong-tu-phuc',
    name: 'Dương Tử Phúc (Thiếu Dương - Tử Phù - Phúc Đức)',
    type: 'good',
    category: 'Phúc Thiện Tinh',
    stars: ['Thiếu Dương', 'Tử Phù', 'Phúc Đức'],
    minMatch: 2,
    effect: 'Tam hợp Thiếu Dương thông minh nhân ái, có trực giác nhạy bén, tâm tính hướng thiện, biết tùy cơ ứng biến và luôn có phúc thần che chở vượt qua sóng gió.'
  },
  {
    id: 'tang-tue-dieu',
    name: 'Tang Tuế Điếu (Tang Môn - Tuế Phá - Điếu Khách)',
    type: 'good',
    category: 'Vận Hội Khởi Nghiệp',
    stars: ['Tang Môn', 'Tuế Phá', 'Điếu Khách'],
    minMatch: 2,
    effect: 'Tam hợp Tuế Phá của vòng Thái Tuế: Biểu trưng cho mẫu người có tư duy phản biện sắc sảo, không an phận thủ thường, dám đi ngược số đông, có ý chí tiến thủ kiên cường trong thương trường và nghịch cảnh, càng thử thách càng bứt phá.'
  },
  {
    id: 'dac-tam-khong',
    name: 'Đắc Tam Không (Hội Tụ Tam Không Kỳ Cách)',
    type: 'good',
    category: 'Kỳ Cách Đặc Biệt',
    stars: ['Địa Không', 'Thiên Không', 'Tuần Không', 'Triệt Không'],
    minMatch: 3,
    effect: 'Cách cục Tam Không kỳ lạ trong Tử Vi: "Đắc Tam Không phú quý khả kỳ". Người có cách này sở hữu tư duy đột phá khác biệt số đông, biến nghịch cảnh thành thời cơ lớn, dễ bạo phát công danh tài lộc phi thường.'
  },
  {
    id: 'dac-tu-khong',
    name: 'Đắc Tứ Không (Tứ Không Triều Cung)',
    type: 'good',
    category: 'Kỳ Cách Đặc Biệt',
    stars: ['Địa Không', 'Thiên Không', 'Tuần Không', 'Triệt Không'],
    minMatch: 4,
    effect: 'Hội đủ Tứ Không (Địa Không, Thiên Không, Tuần Không, Triệt Không): Đại kỳ cách cực hiếm, tính tình xuất trần khoáng đạt, duyên nghiệp đặc biệt, dễ giác ngộ phi thường hoặc đại phát công danh ngoài dự liệu.'
  }
];

// 2. Danh Mục Bộ Sao Phụ Tinh Hung / Sát / Bại (Inauspicious Auxiliary Star Sets)
export const BAD_STAR_GROUPS_DEF: StarGroupDefinition[] = [
  {
    id: 'dia-khong-dia-kiep',
    name: 'Địa Không - Địa Kiếp (Không Kiếp Bạo Phát Bạo Tàn)',
    type: 'bad',
    category: 'Lục Sát Tinh',
    stars: ['Địa Không', 'Địa Kiếp'],
    effect: 'Sát tinh tàn phá mạnh nhất, gây thăng trầm sóng gió cực lớn, tiền bạc tụ tán bất thường, dễ thất bại chớp nhoáng hoặc bị lừa gạt.',
    remedy: 'Học cách biết đủ là phúc, tích đức hành thiện, đầu tư an toàn vào bất động sản tích lũy lâu dài, tuyệt đối tránh cờ bạc mạo hiểm hay kinh doanh phi pháp.'
  },
  {
    id: 'kinh-duong-da-la',
    name: 'Kình Dương - Đà La (Kình Đà Hình Thương Trắc Trở)',
    type: 'bad',
    category: 'Lục Sát Tinh',
    stars: ['Kình Dương', 'Đà La'],
    effect: 'Chủ về sự hình thương, mổ xẻ rách da thịt, trở ngại ngấm ngầm, va chạm tranh chấp, tính nóng nảy bộc trực hoặc dây dưa kéo dài.',
    remedy: 'Thận trọng khi tham gia giao thông và làm việc với kim khí sắc nhọn, học tính nhẫn nhịn hòa ái, định kỳ hiến máu nhân đạo để giải trừ hạn huyết quang.'
  },
  {
    id: 'hoa-tinh-linh-tinh',
    name: 'Hỏa Tinh - Linh Tinh (Hỏa Linh Bất Ngờ Họa Hại)',
    type: 'bad',
    category: 'Lục Sát Tinh',
    stars: ['Hỏa Tinh', 'Linh Tinh'],
    effect: 'Tai họa xảy đến bất ngờ như sấm sét, tính tình dễ nóng nảy mất kiểm soát, nguy cơ về hỏa hoạn bỏng điện hoặc thị phi tranh chấp chớp nhoáng.',
    remedy: 'Tập thiền định kiểm soát cảm xúc, cẩn trọng tuyệt đối với lửa điện hóa chất, không vội vàng ra quyết định khi đang trong cơn bực tức.'
  },
  {
    id: 'tang-mon-bach-ho',
    name: 'Tang Môn - Bạch Hổ (Tang Hổ Sầu Muộn Huyết Quang)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Tang Môn', 'Bạch Hổ'],
    effect: 'Chủ về lo âu, ưu tư phiền muộn, tang chế trong họ tộc, bệnh tật về máu huyết xương khớp, dễ vướng vào khẩu thiệt cửa công.',
    remedy: 'Quan tâm chăm sóc sức khỏe người thân trong gia đình, khám sức khỏe định kỳ, duy trì lối sống thanh tịnh và làm việc thiện giúp đời.'
  },
  {
    id: 'thien-khoc-thien-hu',
    name: 'Thiên Khốc - Thiên Hư (Khốc Hư Lệ Sầu Gian Nan)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Thiên Khốc', 'Thiên Hư'],
    effect: 'Chủ về nước mắt buồn tủi, gian truân buổi đầu lập nghiệp, tinh thần hay bi quan u sầu, sức đề kháng hô hấp yếu.',
    remedy: 'Rèn luyện thể thao nâng cao thể trạng, giao lưu với những người tích cực lạc quan, coi trở ngại thử thách là nấc thang tôi luyện ý chí.'
  },
  {
    id: 'co-than-qua-tu',
    name: 'Cô Thần - Quả Tú (Cô Quả Lẻ Loi Trắc Trở)',
    type: 'bad',
    category: 'Ám Tinh',
    stars: ['Cô Thần', 'Quả Tú'],
    effect: 'Nội tâm khép kín cô đơn, khó bộc bạch sẻ chia, đường nhân duyên tình cảm trắc trở muộn màng, vợ chồng dễ có khoảng cách lạnh nhạt.',
    remedy: 'Chủ động mở rộng lòng mình sẻ chia với mọi người, lắng nghe bạn đời, tích cực tham gia các hội nhóm văn hóa thiện nguyện vì cộng đồng.'
  },
  {
    id: 'dai-hao-tieu-hao',
    name: 'Đại Hao - Tiểu Hao (Song Hao Tán Tài Dời Đổi)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Đại Hao', 'Tiểu Hao'],
    effect: 'Khó tích lũy tiền mặt, tính tình chi tiêu rộng rãi phóng khoáng, hay có biến động thay đổi chỗ ở hoặc nơi làm việc, thích xê dịch.',
    remedy: 'Lập kế hoạch quản lý dòng tiền kỷ luật, hạn chế giữ quá nhiều tiền mặt nhàn rỗi, nên chuyển hóa thành tài sản cố định hoặc đầu tư tri thức.'
  },
  {
    id: 'thien-hinh-thien-dieu',
    name: 'Thiên Hình - Thiên Diêu (Hình Diêu Pháp Luật Ám Muội)',
    type: 'bad',
    category: 'Sát Ám Tinh',
    stars: ['Thiên Hình', 'Thiên Diêu'],
    effect: 'Thiên Hình chủ pháp luật kỷ luật sẹo tích dao kéo; Thiên Diêu chủ sắc dục phóng túng, nghi kỵ mê muội, dễ dính cạm bẫy tình cảm.',
    remedy: 'Tuân thủ pháp luật tuyệt đối, giữ gìn đạo đức chuẩn mực trong hôn nhân gia đình, tránh xa các cuộc vui phóng túng phù phiếm.'
  },
  {
    id: 'kinh-da-hiep-ky',
    name: 'Kình Đà Hiệp Kỵ (Bị Kẹp Cổ Hãm Hại)',
    type: 'bad',
    category: 'Hung Cách',
    stars: ['Kình Dương', 'Đà La', 'Hóa Kỵ'],
    effect: 'Thế cờ bị kẹp hiểm nghèo: Kình Dương đi trước, Đà La theo sau bao vây Hóa Kỵ. Dễ bị tiểu nhân ngầm hãm hại, gièm pha tranh đoạt tài sản.',
    remedy: 'Không đứng tên bảo lãnh nợ nần cho người khác, ký kết hợp đồng phải minh bạch chặt chẽ, khi có biến cố nên nhún nhường giữ mình chờ thời.'
  },
  {
    id: 'phuc-binh-hoa-ky',
    name: 'Phục Binh - Hóa Kỵ (Binh Kỵ Đâm Sau Lưng)',
    type: 'bad',
    category: 'Ám Tinh',
    stars: ['Phục Binh', 'Hóa Kỵ'],
    effect: 'Chủ về sự phản trắc, bị người thân tín hoặc đối tác đâm sau lưng, khẩu thiệt thị phi gièm pha, lừa dối trong làm ăn.',
    remedy: 'Bảo mật thông tin quan trọng cẩn thận, thẩm định uy tín đối tác kỹ càng trước khi bắt tay làm ăn, giữ tâm trong sáng ngay thẳng.'
  },
  {
    id: 'kiep-sat-pha-toai-luu-ha',
    name: 'Kiếp Sát - Phá Toái (Sát Phá Tổn Thương)',
    type: 'bad',
    category: 'Sát Bại Tinh',
    stars: ['Kiếp Sát', 'Phá Toái'],
    effect: 'Chủ về nguy cơ rủi ro mổ xẻ, bất hòa tranh chấp làm công việc đứt đoạn giữa chừng.',
    remedy: 'Cẩn trọng trong thao tác kỹ thuật máy móc, khi gặp mâu thuẫn cần điềm đạm hòa giải tránh để leo thang.'
  },
  {
    id: 'thien-la-dia-vong',
    name: 'Thiên La - Địa Võng (Lưới Trời Thìn Tuất)',
    type: 'bad',
    category: 'Hạn Tinh',
    stars: ['Thiên La', 'Địa Võng'],
    effect: 'Tượng như mạng lưới bủa vây, gây cảm giác bế tắc, tiến thoái lưỡng nan trong công danh sự nghiệp ở một giai đoạn đời người.',
    remedy: 'Kiên nhẫn bồi dưỡng năng lực, tĩnh tâm chờ thời cơ thuận lợi phá vỡ thế bế tắc, không hành động liều lĩnh khi vận khí chưa hanh thông.'
  },

  // 1. Nhóm Đào - Không - Sát
  {
    id: 'dao-khong-sat',
    name: 'Đào Không Sát (Đào Hoa - Thiên Không - Kiếp Sát)',
    type: 'bad',
    category: 'Sát Bại Tinh',
    stars: ['Đào Hoa', 'Thiên Không', 'Kiếp Sát'],
    effect: 'Cách cục biểu trưng cho sự bạo phát bạo tàn, tài hoa tột bậc nhưng dễ gãy cánh lưng trời (bán thiên chiết sí), tình duyên lận đận trắc trở, trắng tay vì ảo vọng ái ân hoặc đầu cơ mạo hiểm.',
    remedy: 'Tu tâm dưỡng tính, hướng về triết lý giác ngộ thiền định, hành thiện tích đức, không kiêu ngạo tự phụ, làm ăn chân chính minh bạch.'
  },
  {
    id: 'dao-khong',
    name: 'Đào Không (Đào Hoa - Thiên Không Sắc Không Nghiệp Duyên)',
    type: 'bad',
    category: 'Họa Nghiệp Tinh',
    stars: ['Đào Hoa', 'Thiên Không'],
    effect: 'Đào Hoa ngộ Thiên Không: Hoa rơi cửa Phật, tột đỉnh thông minh sắc sảo nhưng đa sầu đa cảm, duyên tình bẽ bàng dang dở, dễ sớm giác ngộ tôn giáo và triết lý tâm linh.',
    remedy: 'Giữ tâm thanh tịnh, tránh cố chấp trong chuyện tình duyên, lấy lòng bao dung và thiện nghiệp hóa giải trắc trở.'
  },
  {
    id: 'khong-sat',
    name: 'Không Sát (Thiên Không - Kiếp Sát Mưu Tính Họa Khởi)',
    type: 'bad',
    category: 'Sát Bại Tinh',
    stars: ['Thiên Không', 'Kiếp Sát'],
    effect: 'Tính tình nhiều mưu toan nóng vội, dễ bị phản phúc hỏng việc giữa chừng, đề phòng thương tích đổ máu hoặc mất mát tài sản bất ngờ.',
    remedy: 'Hành sự cẩn trọng tuân thủ pháp luật, thận trọng với kim khí sắc nhọn, tránh xa sự toan tính mưu mô hại người.'
  },

  // 2. Nhóm Mã - Cô - Tang và các bộ Thiên Mã hung
  {
    id: 'ma-co-tang',
    name: 'Mã Cô Tang (Thiên Mã - Cô Thần - Tang Môn Côi Cút)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Thiên Mã', 'Cô Thần', 'Tang Môn'],
    effect: 'Chủ về sự bôn ba ngàn dặm đơn độc côi cút, như ngựa kéo xe tang đơn lẻ giữa đường đời, tha hương mưu sinh nhiều gian truân nước mắt, cách biệt người thân.',
    remedy: 'Giữ gìn mối quan hệ gắn kết với người thân gia đình, xây dựng mạng lưới bạn bè tương trợ nơi đất khách, kiên nhẫn tích lũy nội lực.'
  },
  {
    id: 'ma-tang',
    name: 'Mã Tang (Thiên Mã - Tang Môn Kéo Xe Tang)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Thiên Mã', 'Tang Môn'],
    effect: 'Như ngựa kéo xe tang, chủ về bôn ba vất vả mang theo nhiều nỗi lo âu phiền muộn, đi xa dễ gặp sự cố trắc trở hoặc tin buồn tang chế.',
    remedy: 'Cẩn trọng khi tham gia giao thông và di chuyển xa xôi, chú ý chăm sóc sức khỏe thể chất và người lớn tuổi trong nhà.'
  },
  {
    id: 'ma-co',
    name: 'Mã Cô (Thiên Mã - Cô Thần Đơn Độc Tha Hương)',
    type: 'bad',
    category: 'Ám Tinh',
    stars: ['Thiên Mã', 'Cô Thần'],
    effect: 'Thiên Mã hội Cô Thần: Ngựa đơn độc phiêu bạt nơi đất khách, tính tình tự lập quật cường nhưng nội tâm cô đơn, ít người chia sẻ nâng đỡ.',
    remedy: 'Chủ động cởi mở giao lưu cộng đồng, sẻ chia tình cảm với bạn bè và đồng nghiệp.'
  },
  {
    id: 'ma-hinh',
    name: 'Mã Hình (Thiên Mã - Thiên Hình Yên Thiết)',
    type: 'bad',
    category: 'Sát Tinh',
    stars: ['Thiên Mã', 'Thiên Hình'],
    effect: 'Ngựa chiến mang yên thiết giáp, xông pha trận mạc bôn ba nguy hiểm, đề phòng tai nạn giao thông, té ngã chấn thương chân tay hoặc va chạm kim loại.',
    remedy: 'Tuyệt đối không lái xe ẩu hoặc phóng nhanh vượt ẩu, trang bị đồ bảo hộ đầy đủ khi làm việc vận động mạnh.'
  },
  {
    id: 'ma-da',
    name: 'Mã Đà (Thiên Mã - Đà La Chiết Túc Mã)',
    type: 'bad',
    category: 'Sát Bại Tinh',
    stars: ['Thiên Mã', 'Đà La'],
    effect: 'Chí hướng muốn vươn xa nhưng bị cản trở trói buộc, công việc bị trì hoãn bế tắc, di chuyển đi lại dễ vấp ngã trắc trở dây dưa.',
    remedy: 'Kiên nhẫn chờ thời, giải quyết các vướng mắc pháp lý thủ tục dứt điểm, không nóng vội hành động khi chưa chuẩn bị kỹ.'
  },
  {
    id: 'ma-tuyet',
    name: 'Mã Tuyệt (Thiên Mã - Tuyệt Ngựa Cùng Đường)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Thiên Mã', 'Tuyệt'],
    effect: 'Thiên Mã đóng tại Tuyệt địa: Ngựa chạy vào đường cùng kiệt sức, bôn ba vất vả tha hương mà sự nghiệp khó thành toại, dễ bế tắc phương hướng.',
    remedy: 'Tránh mạo hiểm xuất ngoại phiêu lưu khi vận hội chưa thông, nên tìm chốn an cư ổn định và bồi dưỡng chiều sâu chuyên môn.'
  },

  // 3. Nhóm Tang - Tuế - Điếu & Tứ Bại
  {
    id: 'tang-tue-dieu-bad',
    name: 'Tang Tuế Điếu (Tuế Phá Bất Mãn - Tang Điếu Hao Tổn)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Tang Môn', 'Tuế Phá', 'Điếu Khách'],
    minMatch: 2,
    effect: 'Vòng Tuế Phá bất mãn với hoàn cảnh, tính tình ngang tàng dám đi ngược số đông, cả đời phải chống đỡ bôn ba, đề phòng đam mê cờ bạc đỏ đen hoặc thị phi pháp luật.',
    remedy: 'Chuyển hóa năng lượng nổi loạn thành sáng tạo đổi mới trong công việc, tuyệt đối tránh xa trò đỏ đen may rủi và đầu cơ chớp nhoáng.'
  },
  {
    id: 'tang-ho-khoc-hu',
    name: 'Tang Hổ Khốc Hư (Tứ Đại Bại Tinh Sầu Bi)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư'],
    minMatch: 3,
    effect: 'Tứ Đại Bại Tinh hội tụ: Chủ về lệ sầu tang tóc, ưu tư muộn phiền dồn dập, máu huyết xương khớp suy nhược, gia đạo nhiều nỗi bi ai ly biệt.',
    remedy: 'Giữ lối sống thanh tịnh lành mạnh, khám sức khỏe định kỳ, tích cực làm việc thiện phóng sinh báo hiếu cha mẹ tổ tiên.'
  },

  // 4. Nhóm Ám Tinh, Hình Sát & Pháp Luật
  {
    id: 'tam-am-dieu-da-ky',
    name: 'Tam Ám Diêu Đà Kỵ (Thiên Diêu - Đà La - Hóa Kỵ)',
    type: 'bad',
    category: 'Ám Tinh',
    stars: ['Thiên Diêu', 'Đà La', 'Hóa Kỵ'],
    minMatch: 2,
    effect: 'Tam Ám tụ hội u ám mù mịt, dễ bị tiểu nhân gièm pha vu oan giá họa, tâm lý hay nghi kỵ mờ ám, đề phòng bệnh thầm kín, thị lực suy giảm hoặc cạm bẫy lừa gạt tình tiền.',
    remedy: 'Hành sự minh bạch quang minh chính đại, tránh xa những mối quan hệ mập mờ, kiểm tra sức khỏe mắt và nội tiết định kỳ.'
  },
  {
    id: 'kinh-hinh',
    name: 'Kình Dương - Thiên Hình (Hình Ngục Huyết Quang)',
    type: 'bad',
    category: 'Sát Tinh',
    stars: ['Kình Dương', 'Thiên Hình'],
    effect: 'Sát khí sắc bén hung hiểm, chủ về dao kéo phẫu thuật, mổ xẻ rách da thịt, thương tật thân thể, dễ vướng vào vòng lao lý kiện tụng cửa công.',
    remedy: 'Tuân thủ pháp luật nghiêm ngặt, tránh tranh chấp xô xát, chủ động hiến máu nhân đạo hoặc khám can thiệp y tế đúng lúc để ứng hạn huyết quang.'
  },
  {
    id: 'hoa-hinh',
    name: 'Hỏa Tinh - Thiên Hình (Lôi Hỏa Đao Binh)',
    type: 'bad',
    category: 'Sát Tinh',
    stars: ['Hỏa Tinh', 'Thiên Hình'],
    effect: 'Tai họa lửa điện bỏng cháy bất ngờ, tính khí hung hăng nóng giận mất kiểm soát dễ sinh ẩu đả đâm chém đổ máu.',
    remedy: 'Cẩn trọng tuyệt đối với điện lửa, rèn luyện sự nhẫn nhịn điềm tĩnh kiềm chế cơn thịnh nộ.'
  },
  {
    id: 'linh-hinh',
    name: 'Linh Tinh - Thiên Hình (Ám Hỏa Hình Thương)',
    type: 'bad',
    category: 'Sát Tinh',
    stars: ['Linh Tinh', 'Thiên Hình'],
    effect: 'Hiểm họa ngấm ngầm bùng phát, thương tích cơ thể hoặc bệnh tật kinh niên kéo dài, tâm lý dễ u uất căng thẳng.',
    remedy: 'Khám tầm soát sức khỏe thường xuyên, giải tỏa căng thẳng bằng thể thao và tĩnh tâm thiền định.'
  },
  {
    id: 'van-xuong-hoa-ky',
    name: 'Văn Xương - Hóa Kỵ (Xương Kỵ Trắc Trở Văn Bản)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Văn Xương', 'Hóa Kỵ'],
    effect: 'Xương Kỵ đồng độ hoặc hội chiếu: Trắc trở văn bằng thi cử, sai sót hợp đồng ký kết, giấy tờ pháp lý vướng mắc, tài hoa bị gièm pha đàm tiếu.',
    remedy: 'Rà soát kỹ lưỡng mọi điều khoản hợp đồng trước khi đặt bút ký, khiêm tốn học hỏi tránh tự phụ về kiến thức.'
  },
  {
    id: 'van-khuc-hoa-ky',
    name: 'Văn Khúc - Hóa Kỵ (Khúc Kỵ Thị Phi Giấy Tờ)',
    type: 'bad',
    category: 'Bại Tinh',
    stars: ['Văn Khúc', 'Hóa Kỵ'],
    effect: 'Khúc Kỵ tương ngộ: Nói năng dễ bị hiểu lầm xuyên tạc, hợp đồng chứng từ phát sinh tranh chấp khẩu thiệt, hao tài vì giấy tờ.',
    remedy: 'Cẩn ngôn thận trọng trong phát ngôn và giao dịch, mọi thỏa thuận kinh doanh cần văn bản rõ ràng minh bạch.'
  },

  // 5. Nhóm Tình Duyên & Đào Hoa Sát
  {
    id: 'dao-thai',
    name: 'Đào Hoa - Thai (Đào Thai Phong Lưu Đa Tình)',
    type: 'bad',
    category: 'Dâm Tinh',
    stars: ['Đào Hoa', 'Thai'],
    effect: 'Sức hấp dẫn tình ái mãnh liệt, dễ nếm trái cấm hoặc mang thai ngoài ý muốn trước hôn nhân, tình cảm phức tạp rắc rối đa đoan.',
    remedy: 'Tỉnh táo và giữ gìn giới hạn chuẩn mực trong tình yêu, có trách nhiệm với bạn đời để tránh đổ vỡ đau buồn.'
  },
  {
    id: 'dao-dieu',
    name: 'Đào Hoa - Thiên Diêu (Đào Diêu Nghiêng Nước Nghiêng Thành)',
    type: 'bad',
    category: 'Dâm Duyên Tinh',
    stars: ['Đào Hoa', 'Thiên Diêu'],
    effect: 'Dung nhan diễm lệ quyến rũ, phong lưu phóng túng, sức hút tình trường cực lớn nhưng dễ sa vào cạm bẫy sắc dục, duyên nợ nhiều sóng gió ngang trái.',
    remedy: 'Giữ lòng thủy chung son sắt, tiết chế dục vọng, chuyển hóa năng khiếu thẩm mỹ nghệ thuật vào công việc chuyên môn.'
  },
  {
    id: 'hong-dieu',
    name: 'Hồng Loan - Thiên Diêu (Hồng Diêu Diễm Lệ Đa Đoan)',
    type: 'bad',
    category: 'Dâm Duyên Tinh',
    stars: ['Hồng Loan', 'Thiên Diêu'],
    effect: 'Duyên dáng cuốn hút, tình cảm mặn nồng nhưng dễ vướng lưới tình rối ren, hôn nhân nhiều phen lận đận trắc trở.',
    remedy: 'Lựa chọn bạn đời thấu hiểu và vững chãi, vun đắp gia đình bằng sự tôn trọng và chung thủy.'
  },
  {
    id: 'hong-loan-dia-khong',
    name: 'Hồng Loan - Địa Không (Hồng Không Bạc Phận)',
    type: 'bad',
    category: 'Bại Duyên Tinh',
    stars: ['Hồng Loan', 'Địa Không'],
    effect: 'Hồng Loan ngộ Địa Không: Hồng nhan mệnh bạc, duyên tình bọt bèo trắc trở đứt đoạn, mối tình đầu dễ bẽ bàng cay đắng, khó vẹn tròn son sắt buổi đầu.',
    remedy: 'Nên kết hôn muộn, trân trọng thực tại, không lý tưởng hóa tình yêu quá mức.'
  },
  {
    id: 'hong-loan-dia-kiep',
    name: 'Hồng Loan - Địa Kiếp (Hồng Kiếp Duyên Bọt Bèo)',
    type: 'bad',
    category: 'Bại Duyên Tinh',
    stars: ['Hồng Loan', 'Địa Kiếp'],
    effect: 'Hồng Loan ngộ Địa Kiếp: Ái tình nhiều sóng gió thăng trầm, dễ bị lừa dối phụ bạc hoặc tổn thương sâu sắc trong tình cảm.',
    remedy: 'Tìm hiểu đối phương kỹ càng trước khi tiến tới hôn nhân, tránh vội vã cảm tính trong tình yêu.'
  },
  {
    id: 'dao-hoa-dia-kiep',
    name: 'Đào Hoa - Địa Kiếp (Đào Kiếp Tình Tan Vỡ)',
    type: 'bad',
    category: 'Bại Duyên Tinh',
    stars: ['Đào Hoa', 'Địa Kiếp'],
    effect: 'Đào Hoa hội Địa Kiếp: Tình cảm dễ bạo phát bạo tàn, dễ vì si mê mà hao tài tốn của hoặc vướng thị phi tình ái làm tổn hại sự nghiệp.',
    remedy: 'Giữ lý trí tỉnh táo trong quan hệ khác phái, không đem tài chính mạo hiểm vào các mối quan hệ tình cảm.'
  },

  // 6. Nhóm Đại Sát Tinh Cực Hung
  {
    id: 'tu-sat',
    name: 'Tứ Đại Sát Tinh (Kình Dương - Đà La - Hỏa Tinh - Linh Tinh)',
    type: 'bad',
    category: 'Lục Sát Tinh',
    stars: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    minMatch: 3,
    effect: 'Sát khí trùng trùng vây bọc, cuộc đời chịu nhiều sóng gió thử thách khắc nghiệt, thân thể dễ mang thương tích phẫu thuật, tôi luyện nên ý chí thép phi thường.',
    remedy: 'Rèn đức tính nhẫn nại, tập thiền định, tránh tranh chấp hơn thua, dùng trí tuệ và sự khiêm nhường chế ngự sát khí.'
  },
  {
    id: 'luc-sat-tinh',
    name: 'Lục Đại Sát Tinh (Không - Kiếp - Kình - Đà - Hỏa - Linh)',
    type: 'bad',
    category: 'Lục Sát Tinh',
    stars: ['Địa Không', 'Địa Kiếp', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'],
    minMatch: 4,
    effect: 'Lục Sát Trùng Phùng cực kỳ hung hiểm, thăng trầm sóng gió sinh tử dồn dập, tiền bạc tài sản bạo phát bạo tàn, đòi hỏi bản lĩnh phi thường và phúc đức sâu dày mới vượt qua nghịch cảnh.',
    remedy: 'Một lòng hướng thiện tu tâm tích phúc, không tham lam danh lợi phi pháp, làm việc thiện cứu người để hóa giải nghiệp lực.'
  },
  {
    id: 'tuong-quan-phuc-binh',
    name: 'Tướng Quân - Phục Binh (Binh Tướng Phản Trắc)',
    type: 'bad',
    category: 'Hung Tinh',
    stars: ['Tướng Quân', 'Phục Binh'],
    effect: 'Tướng Phục tương xung: Bị cấp dưới phản trắc, đồng nghiệp đố kỵ tranh đoạt công trạng, nội bộ chia rẽ ngấm ngầm.',
    remedy: 'Quản lý nhân sự minh bạch công bằng, thận trọng trong việc phân chia quyền lợi và bảo mật thông tin.'
  },
  {
    id: 'co-qua-tang-ho',
    name: 'Cô Quả Tang Hổ (Cô Thần - Quả Tú - Tang Môn - Bạch Hổ)',
    type: 'bad',
    category: 'Ám Bại Tinh',
    stars: ['Cô Thần', 'Quả Tú', 'Tang Môn', 'Bạch Hổ'],
    minMatch: 3,
    effect: 'Chủ về sự cô đơn sầu muộn tột cùng, hình khắc lục thân, gia đạo nhiều nỗi tang thương ly biệt, cả đời hay cảm thấy lẻ loi côi cút.',
    remedy: 'Chủ động xây dựng đời sống tâm linh vững vàng, hòa nhập cộng đồng, làm việc thiện hồi hướng cho gia đình tổ tiên.'
  }
];

/**
 * Phân tích toàn bộ các Bộ Sao Phụ Tinh Cát & Hung trên lá số
 */
export function analyzeStarGroups(palaces: TuViPalace[]): StarGroupAnalysis {
  const goodGroups: StarGroupItem[] = [];
  const badGroups: StarGroupItem[] = [];

  // Bản đồ tra cứu sao theo từng cung: { starName: palaceIndices[] }
  const starIndexMap = new Map<string, number[]>();
  palaces.forEach(p => {
    const allStars = [
      ...p.majorStars.map(s => s.name.trim()),
      ...p.minorStars.map(s => (s.rawName || s.name).replace(/\([^)]*\)/g, '').trim())
    ];
    if (p.trangSinhStar) {
      allStars.push(p.trangSinhStar.trim());
    }
    if (p.tuan) {
      allStars.push('Tuần');
      allStars.push('Tuần Không');
    }
    if (p.triet) {
      allStars.push('Triệt');
      allStars.push('Triệt Không');
    }
    allStars.forEach(st => {
      if (!starIndexMap.has(st)) starIndexMap.set(st, []);
      starIndexMap.get(st)!.push(p.index);
    });
  });

  // Hàm quét một định nghĩa bộ sao
  const scanGroup = (def: StarGroupDefinition): StarGroupItem | null => {
    const minRequired = def.minMatch || def.stars.length;
    const foundStars: string[] = [];
    const locations: StarGroupLocation[] = [];
    const prominentPalaces = new Set<string>();

    // Tìm xem mỗi sao trong bộ nằm ở những cung nào
    const starPalaceMatches: { star: string; palaceIndices: number[] }[] = [];
    def.stars.forEach(st => {
      let matches = starIndexMap.get(st) || [];
      if (matches.length === 0 && st === 'Bác Sĩ') {
        matches = starIndexMap.get('Bác Sỹ') || [];
      }
      if (matches.length > 0) {
        foundStars.push(st);
        starPalaceMatches.push({ star: st, palaceIndices: matches });
      }
    });

    if (foundStars.length < minRequired) {
      return null;
    }

    // 1. Kiểm tra Đồng Cung
    const palaceCountMap: Record<number, string[]> = {};
    starPalaceMatches.forEach(item => {
      item.palaceIndices.forEach(pIdx => {
        if (!palaceCountMap[pIdx]) palaceCountMap[pIdx] = [];
        palaceCountMap[pIdx].push(item.star);
      });
    });

    let isDongCung = false;
    let isTamHop = false;

    for (const [pIdxStr, starsInPalace] of Object.entries(palaceCountMap)) {
      const pIdx = Number(pIdxStr);
      const pal = palaces.find(p => p.index === pIdx);
      if (!pal) continue;

      if (starsInPalace.length >= minRequired || (starsInPalace.length >= 2 && def.stars.length >= 2)) {
        isDongCung = true;
        prominentPalaces.add(`${pal.name} (${pal.chi})`);
        starsInPalace.forEach(s => {
          locations.push({
            palaceName: pal.name,
            palaceChi: pal.chi,
            starName: s,
            relationType: 'Tọa Thủ'
          });
        });
      }
    }

    // 2. Kiểm tra Tam Phương Tứ Chính (Tam Hợp + Xung Chiếu)
    palaces.forEach(centerPalace => {
      const pCenter = centerPalace.index;
      const pTamHop1 = (pCenter + 4) % 12;
      const pTamHop2 = (pCenter + 8) % 12;
      const pXungChieu = (pCenter + 6) % 12;
      const clusterIndices = [pCenter, pTamHop1, pTamHop2, pXungChieu];

      const starsInCluster = new Set<string>();
      starPalaceMatches.forEach(item => {
        if (item.palaceIndices.some(idx => clusterIndices.includes(idx))) {
          starsInCluster.add(item.star);
        }
      });

      if (starsInCluster.size >= minRequired && starsInCluster.size >= 2) {
        isTamHop = true;
        prominentPalaces.add(`${centerPalace.name} (${centerPalace.chi})`);
        
        starPalaceMatches.forEach(item => {
          item.palaceIndices.forEach(idx => {
            if (clusterIndices.includes(idx)) {
              const pal = palaces.find(p => p.index === idx);
              if (pal) {
                let rel: 'Tọa Thủ' | 'Tam Hợp' | 'Xung Chiếu' = 'Tam Hợp';
                if (idx === pCenter) rel = 'Tọa Thủ';
                else if (idx === pXungChieu) rel = 'Xung Chiếu';

                if (!locations.some(l => l.palaceChi === pal.chi && l.starName === item.star)) {
                  locations.push({
                    palaceName: pal.name,
                    palaceChi: pal.chi,
                    starName: item.star,
                    relationType: rel
                  });
                }
              }
            }
          });
        });
      }
    });

    // 3. Kiểm tra Giáp Cung (Kẹp 2 bên liền kề của 1 cung)
    let isGiapCung = false;
    if (def.stars.length === 2 && foundStars.length === 2) {
      const star1Matches = starPalaceMatches.find(m => m.star === def.stars[0])?.palaceIndices || [];
      const star2Matches = starPalaceMatches.find(m => m.star === def.stars[1])?.palaceIndices || [];

      palaces.forEach(pal => {
        const pIdx = pal.index;
        const prevIdx = (pIdx - 1 + 12) % 12;
        const nextIdx = (pIdx + 1) % 12;

        const condition1 = star1Matches.includes(prevIdx) && star2Matches.includes(nextIdx);
        const condition2 = star2Matches.includes(prevIdx) && star1Matches.includes(nextIdx);

        if (condition1 || condition2) {
          isGiapCung = true;
          prominentPalaces.add(`Giáp Cung ${pal.name} (${pal.chi})`);
          locations.push({
            palaceName: pal.name,
            palaceChi: pal.chi,
            starName: `${def.stars.join(' & ')} Giáp Cung`,
            relationType: 'Giáp Cung'
          });
        }
      });
    }

    // 4. Nếu chưa ghi nhận location nhưng sao có trên lá số, ghi nhận vị trí thực tế
    if (locations.length === 0) {
      starPalaceMatches.forEach(item => {
        item.palaceIndices.forEach(idx => {
          const pal = palaces.find(p => p.index === idx);
          if (pal) {
            prominentPalaces.add(`${pal.name} (${pal.chi})`);
            locations.push({
              palaceName: pal.name,
              palaceChi: pal.chi,
              starName: item.star,
              relationType: 'Tọa Thủ'
            });
          }
        });
      });
    }

    let scope: 'Đồng Cung' | 'Tam Phương Tứ Chính' | 'Toàn Bàn' | 'Giáp Cung' = 'Toàn Bàn';
    if (isDongCung) scope = 'Đồng Cung';
    else if (isGiapCung) scope = 'Giáp Cung';
    else if (isTamHop) scope = 'Tam Phương Tứ Chính';

    return {
      id: def.id,
      name: def.name,
      type: def.type,
      category: def.category,
      stars: def.stars,
      foundStars,
      locations,
      scope,
      effect: def.effect,
      remedy: def.remedy,
      prominentPalaces: Array.from(prominentPalaces).slice(0, 4)
    };
  };

  GOOD_STAR_GROUPS_DEF.forEach(def => {
    const res = scanGroup(def);
    if (res) goodGroups.push(res);
  });

  BAD_STAR_GROUPS_DEF.forEach(def => {
    const res = scanGroup(def);
    if (res) badGroups.push(res);
  });

  // Kiểm tra Mệnh Không Thân Kiếp / Mệnh Kiếp Thân Không
  const menhPalaceForMK = palaces.find(p => p.isMenh);
  const thanPalaceForMK = palaces.find(p => p.isThan);
  if (menhPalaceForMK && thanPalaceForMK) {
    const menhStars = [
      ...menhPalaceForMK.majorStars.map(s => s.name),
      ...menhPalaceForMK.minorStars.map(s => (s.rawName || s.name).replace(/\([^)]*\)/g, '').trim())
    ];
    const thanStars = [
      ...thanPalaceForMK.majorStars.map(s => s.name),
      ...thanPalaceForMK.minorStars.map(s => (s.rawName || s.name).replace(/\([^)]*\)/g, '').trim())
    ];

    const menhHasKhong = menhStars.includes('Địa Không');
    const menhHasKiep = menhStars.includes('Địa Kiếp');
    const thanHasKhong = thanStars.includes('Địa Không');
    const thanHasKiep = thanStars.includes('Địa Kiếp');

    if ((menhHasKhong && thanHasKiep) || (menhHasKiep && thanHasKhong)) {
      const isMenhKhong = menhHasKhong && thanHasKiep;
      const groupName = isMenhKhong
        ? 'Mệnh Không Thân Kiếp (Bạo Phát Bạo Tàn / Dị Biệt Sáng Tạo)'
        : 'Mệnh Kiếp Thân Không (Gian Truân Thử Thách / Hậu Vận Giác Ngộ)';
      const desc = isMenhKhong
        ? 'Cung Mệnh tọa Địa Không, Cung Thân tọa Địa Kiếp: Cuộc đời nhiều thăng trầm sóng gió lớn, tiền tài tụ tán thất thường, nhưng sở hữu tư duy dị biệt vượt thời đại, giàu tính sáng tạo mạo hiểm, hợp nghiên cứu, công nghệ cao, triết lý tâm linh.'
        : 'Cung Mệnh tọa Địa Kiếp, Cung Thân tọa Địa Không: Buổi đầu lập nghiệp nhiều trắc trở gian nan, tôi luyện nên ý chí thép phi thường, hậu vận giác ngộ buông bỏ phù phiếm.';

      const locs: StarGroupLocation[] = [
        {
          palaceName: menhPalaceForMK.name,
          palaceChi: menhPalaceForMK.chi,
          starName: isMenhKhong ? 'Địa Không (Mệnh)' : 'Địa Kiếp (Mệnh)',
          relationType: 'Tọa Thủ'
        },
        {
          palaceName: thanPalaceForMK.name,
          palaceChi: thanPalaceForMK.chi,
          starName: isMenhKhong ? 'Địa Kiếp (Thân)' : 'Địa Không (Thân)',
          relationType: 'Tọa Thủ'
        }
      ];

      badGroups.unshift({
        id: isMenhKhong ? 'menh-khong-than-kiep' : 'menh-kiep-than-khong',
        name: groupName,
        type: 'bad',
        category: 'Mệnh Thân Kỳ Cách',
        stars: ['Địa Không', 'Địa Kiếp'],
        foundStars: ['Địa Không', 'Địa Kiếp'],
        locations: locs,
        scope: 'Toàn Bàn',
        effect: desc,
        remedy: 'Học cách kiểm soát lòng tham và rủi ro, không đầu cơ cờ bạc đỏ đen, tích đức hành thiện, đầu tư vào tài sản bền vững hoặc nghiên cứu chuyên sâu.',
        prominentPalaces: [`${menhPalaceForMK.name} (${menhPalaceForMK.chi})`, `${thanPalaceForMK.name} (${thanPalaceForMK.chi})`]
      });
    }
  }

  let totalGoodStars = 0;
  let totalBadStars = 0;
  palaces.forEach(p => {
    p.minorStars.forEach(s => {
      if (s.type === 'Good' || s.type === 'TuHoa') totalGoodStars++;
      else if (s.type === 'Bad') totalBadStars++;
    });
  });

  let balanceStatus = 'Cát Hung Tương Bán';
  let balanceComment = 'Lá số có sự đan xen hài hòa giữa cơ hội và thử thách. Vận số vững vàng khi biết tận dụng cát tinh để chế hóa sát tinh.';

  if (goodGroups.length >= badGroups.length * 2) {
    balanceStatus = 'Cát Khí Áp Đảo (Đại Cát)';
    balanceComment = 'Nhiều bộ cát tinh quý tụ hội mạnh mẽ, quý nhân trợ lực dồi dào, phúc khí sâu dày che chở giúp tai qua nạn khỏi.';
  } else if (goodGroups.length > badGroups.length) {
    balanceStatus = 'Cát Vượng Sát Nhược (Thuận Lợi)';
    balanceComment = 'Cát tinh chiếm ưu thế, cuộc đời nhiều thuận cảnh hanh thông, sát tinh chỉ mang tính xúc tác rèn luyện ý chí.';
  } else if (badGroups.length > goodGroups.length * 1.5) {
    balanceStatus = 'Sát Khí Trùng Trùng (Nhiều Thử Thách)';
    balanceComment = 'Nhiều bộ hung sát tinh hội tụ nhắc nhở gia chủ cần thận trọng trong đối nhân xử thế, tích cực tu tâm dưỡng tính và làm việc thiện để hóa giải nghiệp lực.';
  }

  return {
    statistics: {
      totalGoodStars,
      totalBadStars,
      goodGroupCount: goodGroups.length,
      badGroupCount: badGroups.length,
      balanceStatus,
      balanceComment
    },
    goodGroups,
    badGroups
  };
}

/**
 * Trích xuất danh sách các bộ sao liên quan đến một cung cụ thể kèm quan hệ (Tọa Thủ, Đồng Cung, Chiếu, Giáp Cung)
 */
export function getPalaceStarGroups(
  palaceIndex: number,
  starGroupAnalysis: StarGroupAnalysis,
  palaces: TuViPalace[]
): { good: string[]; bad: string[] } {
  const targetPalace = palaces.find(p => p.index === palaceIndex);
  if (!targetPalace) return { good: [], bad: [] };

  const targetChi = targetPalace.chi;
  const pTamHop1 = (palaceIndex + 4) % 12;
  const pTamHop2 = (palaceIndex + 8) % 12;
  const pXungChieu = (palaceIndex + 6) % 12;
  const clusterIndices = [palaceIndex, pTamHop1, pTamHop2, pXungChieu];
  const clusterChis = palaces.filter(p => clusterIndices.includes(p.index)).map(p => p.chi);

  const filterGroups = (groups: StarGroupItem[]) => {
    return groups
      .filter(g => {
        return g.locations.some(loc => loc.palaceChi === targetChi || clusterChis.includes(loc.palaceChi));
      })
      .map(g => {
        const exactLoc = g.locations.find(loc => loc.palaceChi === targetChi);
        let tag = '';
        if (exactLoc?.relationType === 'Giáp Cung') {
          tag = ' (Giáp Cung)';
        } else if (g.scope === 'Đồng Cung' && exactLoc) {
          tag = ' (Đồng Cung)';
        } else if (exactLoc?.relationType === 'Tọa Thủ') {
          tag = ' (Tọa Thủ)';
        } else {
          tag = ' (Chiếu)';
        }
        return `${g.name.split('(')[0].trim()}${tag}`;
      });
  };

  return {
    good: filterGroups(starGroupAnalysis.goodGroups),
    bad: filterGroups(starGroupAnalysis.badGroups)
  };
}

export interface TamHopStarGroupResult {
  palaceIndex: number;
  targetPalace: TuViPalace;
  tamHopPalaces: TuViPalace[];
  tamHopChiString: string;
  tamHopPalaceNames: string;
  goodGroups: StarGroupItem[];
  badGroups: StarGroupItem[];
  palaceStarGroupsMap: Record<number, { good: string[]; bad: string[] }>;
  palaceStarGroupItemsMap: Record<number, { good: StarGroupItem[]; bad: StarGroupItem[] }>;
}

export function getCanonicalTamHopChiString(chi: string): string {
  const norm = (chi === 'Tý' || chi === 'Tí') ? 'Tí' : chi;
  if (['Thân', 'Tí', 'Thìn'].includes(norm)) {
    return 'Thân - Tí - Thìn';
  }
  if (['Tỵ', 'Dậu', 'Sửu'].includes(norm)) {
    return 'Tỵ - Dậu - Sửu';
  }
  if (['Hợi', 'Mão', 'Mùi'].includes(norm)) {
    return 'Hợi - Mão - Mùi';
  }
  if (['Dần', 'Ngọ', 'Tuất'].includes(norm)) {
    return 'Dần - Ngọ - Tuất';
  }
  return chi;
}

/**
 * Trích xuất và phân tích các bộ sao phụ tinh CHỈ theo Tam Hợp của một cung chỉ định
 * (Theo nguyên lý Tử Vi Đẩu Số: chỉ xét 3 cung trong tam hợp, không lấy toàn bàn)
 */
export function getTamHopStarGroups(
  palaceIndex: number,
  palaces: TuViPalace[]
): TamHopStarGroupResult {
  const targetPalace = palaces.find(p => p.index === palaceIndex) || palaces[0];
  const pTamHop1 = (targetPalace.index + 4) % 12;
  const pTamHop2 = (targetPalace.index + 8) % 12;
  const pal1 = targetPalace;
  const pal2 = palaces.find(p => p.index === pTamHop1) || targetPalace;
  const pal3 = palaces.find(p => p.index === pTamHop2) || targetPalace;
  const tamHopPalaces = [pal1, pal2, pal3];
  const tamHopIndices = [pal1.index, pal2.index, pal3.index];

  const tamHopChiString = getCanonicalTamHopChiString(targetPalace.chi);
  const tamHopPalaceNames = `${pal1.name} - ${pal2.name} - ${pal3.name}`;

  interface PalaceStarInfo {
    palaceIndex: number;
    palaceName: string;
    palaceChi: string;
  }
  const starPalaceMap = new Map<string, PalaceStarInfo[]>();
  tamHopPalaces.forEach(p => {
    const allStars = [
      ...p.majorStars.map(s => s.name.trim()),
      ...p.minorStars.map(s => (s.rawName || s.name).replace(/\([^)]*\)/g, '').trim())
    ];
    if (p.trangSinhStar) {
      allStars.push(p.trangSinhStar.trim());
    }
    if (p.tuan) {
      allStars.push('Tuần');
      allStars.push('Tuần Không');
    }
    if (p.triet) {
      allStars.push('Triệt');
      allStars.push('Triệt Không');
    }
    allStars.forEach(st => {
      if (!starPalaceMap.has(st)) starPalaceMap.set(st, []);
      starPalaceMap.get(st)!.push({
        palaceIndex: p.index,
        palaceName: p.name,
        palaceChi: p.chi
      });
    });
  });

  const evaluateGroupInTamHop = (def: StarGroupDefinition): StarGroupItem | null => {
    const minRequired = def.minMatch || def.stars.length;
    const foundStars: string[] = [];
    const locations: StarGroupLocation[] = [];
    const prominentPalaces: string[] = [];
    const palaceCount: Record<number, number> = {};

    def.stars.forEach(st => {
      let matches = starPalaceMap.get(st) || [];
      if (matches.length === 0 && st === 'Bác Sĩ') {
        matches = starPalaceMap.get('Bác Sỹ') || [];
      }
      if (matches.length > 0) {
        foundStars.push(st);
        matches.forEach(m => {
          palaceCount[m.palaceIndex] = (palaceCount[m.palaceIndex] || 0) + 1;
          prominentPalaces.push(`${st}: ${m.palaceName} (${m.palaceChi})`);
          locations.push({
            palaceName: m.palaceName,
            palaceChi: m.palaceChi,
            starName: st,
            relationType: m.palaceIndex === targetPalace.index ? 'Tọa Thủ' : 'Tam Hợp'
          });
        });
      }
    });

    if (foundStars.length < minRequired) return null;

    const isDongCung = Object.values(palaceCount).some(cnt => cnt >= foundStars.length);
    const scope = isDongCung ? 'Đồng Cung' : 'Tam Hợp';

    return {
      id: def.id,
      name: def.name,
      type: def.type,
      category: def.category,
      stars: def.stars,
      foundStars,
      locations,
      scope,
      effect: def.effect,
      remedy: def.remedy,
      prominentPalaces
    };
  };

  const rawGoodGroups: StarGroupItem[] = [];
  const rawBadGroups: StarGroupItem[] = [];

  GOOD_STAR_GROUPS_DEF.forEach(def => {
    const res = evaluateGroupInTamHop(def);
    if (res) rawGoodGroups.push(res);
  });

  BAD_STAR_GROUPS_DEF.forEach(def => {
    const res = evaluateGroupInTamHop(def);
    if (res) rawBadGroups.push(res);
  });

  // Khử trùng lặp bộ sao con khi bộ sao mẹ đầy đủ hơn đã xuất hiện trong cùng tam hợp
  const goodIds = new Set(rawGoodGroups.map(g => g.id));
  const goodGroups = rawGoodGroups.filter(g => {
    if (goodIds.has('tu-duc') && (g.id === 'tam-duc' || g.id === 'nhi-duc-thien-nguyet')) return false;
    if (goodIds.has('tam-minh-dao-hong-hy') && (g.id === 'dao-hong' || g.id === 'loan-hy')) return false;
    if (goodIds.has('tam-hoa-lien-chau') && (g.id === 'hoa-khoa-hoa-quyen' || g.id === 'hoa-loc-hoa-quyen' || g.id === 'hoa-loc-hoa-khoa')) return false;
    if (goodIds.has('tu-linh') && (g.id === 'long-tri-phuong-cac' || g.id === 'cai-ho')) return false;
    if (goodIds.has('binh-hinh-tuong-an') && g.id === 'tuong-quan-quoc-an') return false;
    if (goodIds.has('khoi-viet-quang-quy') && (g.id === 'thien-khoi-thien-viet' || g.id === 'an-quang-thien-quy')) return false;
    if (goodIds.has('dac-tu-khong') && g.id === 'dac-tam-khong') return false;
    return true;
  });

  const badIds = new Set(rawBadGroups.map(g => g.id));
  const badGroups = rawBadGroups.filter(g => {
    if (badIds.has('dao-khong-sat') && (g.id === 'dao-khong' || g.id === 'khong-sat')) return false;
    if (badIds.has('ma-co-tang') && (g.id === 'ma-tang' || g.id === 'ma-co')) return false;
    if (badIds.has('tang-ho-khoc-hu') && (g.id === 'tang-mon-bach-ho' || g.id === 'thien-khoc-thien-hu')) return false;
    if (badIds.has('luc-sat-tinh') && (g.id === 'tu-sat' || g.id === 'kinh-duong-da-la' || g.id === 'hoa-tinh-linh-tinh' || g.id === 'dia-khong-dia-kiep')) return false;
    if (badIds.has('tu-sat') && (g.id === 'kinh-duong-da-la' || g.id === 'hoa-tinh-linh-tinh')) return false;
    return true;
  });

  // Kiểm tra Mệnh Không Thân Kiếp trong Tam Hợp khi đang xem Cung Mệnh hoặc Cung Thân
  const menhPalaceRef = palaces.find(p => p.isMenh);
  const thanPalaceRef = palaces.find(p => p.isThan);
  if (menhPalaceRef && thanPalaceRef && (targetPalace.isMenh || targetPalace.isThan)) {
    const menhStars = [
      ...menhPalaceRef.majorStars.map(s => s.name),
      ...menhPalaceRef.minorStars.map(s => (s.rawName || s.name).replace(/\([^)]*\)/g, '').trim())
    ];
    const thanStars = [
      ...thanPalaceRef.majorStars.map(s => s.name),
      ...thanPalaceRef.minorStars.map(s => (s.rawName || s.name).replace(/\([^)]*\)/g, '').trim())
    ];

    const menhHasKhong = menhStars.includes('Địa Không');
    const menhHasKiep = menhStars.includes('Địa Kiếp');
    const thanHasKhong = thanStars.includes('Địa Không');
    const thanHasKiep = thanStars.includes('Địa Kiếp');

    if ((menhHasKhong && thanHasKiep) || (menhHasKiep && thanHasKhong)) {
      const isMenhKhong = menhHasKhong && thanHasKiep;
      const mkItem: StarGroupItem = {
        id: isMenhKhong ? 'menh-khong-than-kiep' : 'menh-kiep-than-khong',
        name: isMenhKhong
          ? 'Mệnh Không Thân Kiếp (Bạo Phát Bạo Tàn / Dị Biệt Sáng Tạo)'
          : 'Mệnh Kiếp Thân Không (Gian Truân Thử Thách / Hậu Vận Giác Ngộ)',
        type: 'bad',
        category: 'Mệnh Thân Kỳ Cách',
        stars: ['Địa Không', 'Địa Kiếp'],
        foundStars: ['Địa Không', 'Địa Kiếp'],
        locations: [
          {
            palaceName: menhPalaceRef.name,
            palaceChi: menhPalaceRef.chi,
            starName: isMenhKhong ? 'Địa Không (Mệnh)' : 'Địa Kiếp (Mệnh)',
            relationType: 'Tọa Thủ'
          },
          {
            palaceName: thanPalaceRef.name,
            palaceChi: thanPalaceRef.chi,
            starName: isMenhKhong ? 'Địa Kiếp (Thân)' : 'Địa Không (Thân)',
            relationType: 'Tọa Thủ'
          }
        ],
        scope: 'Toàn Bàn',
        effect: isMenhKhong
          ? 'Cung Mệnh tọa Địa Không, Cung Thân tọa Địa Kiếp: Cuộc đời nhiều thăng trầm sóng gió lớn, tiền tài tụ tán thất thường, nhưng sở hữu tư duy dị biệt vượt thời đại, giàu tính sáng tạo mạo hiểm, hợp nghiên cứu, công nghệ cao, triết lý tâm linh.'
          : 'Cung Mệnh tọa Địa Kiếp, Cung Thân tọa Địa Không: Buổi đầu lập nghiệp nhiều trắc trở gian nan, tôi luyện nên ý chí thép phi thường, hậu vận giác ngộ buông bỏ phù phiếm.',
        remedy: 'Học cách kiểm soát lòng tham và rủi ro, không đầu cơ cờ bạc đỏ đen, tích đức hành thiện, đầu tư vào tài sản bền vững hoặc nghiên cứu chuyên sâu.',
        prominentPalaces: [`${menhPalaceRef.name} (${menhPalaceRef.chi})`, `${thanPalaceRef.name} (${thanPalaceRef.chi})`]
      };
      badGroups.unshift(mkItem);
    }
  }

  // Map bộ sao cho 12 cung: CHỈ các cung thuộc Tam Hợp mới có danh sách bộ sao
  const palaceStarGroupsMap: Record<number, { good: string[]; bad: string[] }> = {};
  const palaceStarGroupItemsMap: Record<number, { good: StarGroupItem[]; bad: StarGroupItem[] }> = {};
  palaces.forEach(p => {
    if (!tamHopIndices.includes(p.index)) {
      palaceStarGroupsMap[p.index] = { good: [], bad: [] };
      palaceStarGroupItemsMap[p.index] = { good: [], bad: [] };
    } else {
      const pGoodItems = goodGroups.filter(g => g.locations.some(l => l.palaceChi === p.chi));
      const pGood = pGoodItems.map(g => {
        const locsAtPalace = g.locations.filter(l => l.palaceChi === p.chi);
        const isFullHere = locsAtPalace.length >= g.foundStars.length;
        const tag = isFullHere ? ' (Đồng Cung)' : '';
        return `${g.name.split('(')[0].trim()}${tag}`;
      });

      const pBadItems = badGroups.filter(g => g.locations.some(l => l.palaceChi === p.chi));
      const pBad = pBadItems.map(g => {
        const locsAtPalace = g.locations.filter(l => l.palaceChi === p.chi);
        const isFullHere = locsAtPalace.length >= g.foundStars.length;
        const tag = isFullHere ? ' (Đồng Cung)' : '';
        return `${g.name.split('(')[0].trim()}${tag}`;
      });

      palaceStarGroupsMap[p.index] = { good: pGood, bad: pBad };
      palaceStarGroupItemsMap[p.index] = { good: pGoodItems, bad: pBadItems };
    }
  });

  return {
    palaceIndex: targetPalace.index,
    targetPalace,
    tamHopPalaces,
    tamHopChiString,
    tamHopPalaceNames,
    goodGroups,
    badGroups,
    palaceStarGroupsMap,
    palaceStarGroupItemsMap
  };
}

/**
 * Trích xuất chi tiết các đối tượng bộ sao liên quan đến một cung cụ thể
 */
export function getPalaceStarGroupDetails(
  palaceIndex: number,
  starGroupAnalysis: StarGroupAnalysis,
  palaces: TuViPalace[]
): { good: StarGroupItem[]; bad: StarGroupItem[] } {
  const targetPalace = palaces.find(p => p.index === palaceIndex);
  if (!targetPalace) return { good: [], bad: [] };

  const targetChi = targetPalace.chi;
  const pTamHop1 = (palaceIndex + 4) % 12;
  const pTamHop2 = (palaceIndex + 8) % 12;
  const pXungChieu = (palaceIndex + 6) % 12;
  const clusterIndices = [palaceIndex, pTamHop1, pTamHop2, pXungChieu];
  const clusterChis = palaces.filter(p => clusterIndices.includes(p.index)).map(p => p.chi);

  const filterGroups = (groups: StarGroupItem[]) => {
    return groups.filter(g => {
      return g.locations.some(loc => loc.palaceChi === targetChi || clusterChis.includes(loc.palaceChi));
    });
  };

  return {
    good: filterGroups(starGroupAnalysis.goodGroups),
    bad: filterGroups(starGroupAnalysis.badGroups)
  };
}



