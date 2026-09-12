import { TuViPalace } from '../types/chart.types';

export type StarGroupType = 'chinh-tinh' | 'cat-tinh' | 'sat-tinh' | 'bai-tinh' | 'dao-hoa' | 'dac-biet';

export interface StarGroupDef {
  id: string;
  name: string;
  type: StarGroupType;
  stars: string[];
  description?: string;
}

// 1. Nhóm Chính Tinh (14 Chính Tinh theo 4 Đại Cách)
export const MAJOR_STAR_GROUPS: StarGroupDef[] = [
  {
    id: 'tu-phu-vu-tuong-liem',
    name: 'Tử Phủ Vũ Tướng Liêm (Đế Vương Thượng Cách)',
    type: 'chinh-tinh',
    stars: ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng', 'Liêm Trinh'],
    description: 'Chủ về vương quyền, lãnh đạo, tài lộc dồi dào, sự nghiệp vững bền bề thế'
  },
  {
    id: 'sat-pha-tham',
    name: 'Sát - Phá - Tham (Võ Cách Uy Dũng)',
    type: 'chinh-tinh',
    stars: ['Thất Sát', 'Phá Quân', 'Tham Lang'],
    description: 'Chủ về sự năng động, đột phá, dám nghĩ dám làm, khai sơn phá thạch, biến động lớn'
  },
  {
    id: 'co-nguyet-dong-luong',
    name: 'Cơ - Nguyệt - Đồng - Lương (Trí Tuệ Phúc Thọ)',
    type: 'chinh-tinh',
    stars: ['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'],
    description: 'Chủ về mưu lược, tham mưu, công chức văn phòng, phúc thọ an khang, cuộc sống êm ấm'
  },
  {
    id: 'cu-nhat',
    name: 'Cự - Nhật (Quang Minh Khẩu Tài)',
    type: 'chinh-tinh',
    stars: ['Cự Môn', 'Thái Dương'],
    description: 'Chủ về tài ăn nói hùng biện, khả năng đối ngoại, phát triển rực rỡ phương xa'
  },
  {
    id: 'nhat-nguyet',
    name: 'Nhật - Nguyệt (Âm Dương Tương Phùng)',
    type: 'chinh-tinh',
    stars: ['Thái Dương', 'Thái Âm'],
    description: 'Mặt trời và mặt trăng, chủ về công danh trí tuệ sáng láng, phú quý song toàn'
  }
];

// 2. Nhóm Phụ Tinh (Lục Cát, Lục Sát, Tứ Hóa, Đào Hồng, Ám Bại, ...)
export const MINOR_STAR_GROUPS: StarGroupDef[] = [
  // Lục Cát Tinh
  {
    id: 'van-xuong-van-khuc',
    name: 'Văn Xương - Văn Khúc (Xương Khúc Khoa Bảng)',
    type: 'cat-tinh',
    stars: ['Văn Xương', 'Văn Khúc'],
    description: 'Khoa cử đỗ đạt, văn chương hoa mỹ, trí tuệ đĩnh ngộ'
  },
  {
    id: 'thien-khoi-thien-viet',
    name: 'Thiên Khôi - Thiên Việt (Khôi Việt Quý Nhân)',
    type: 'cat-tinh',
    stars: ['Thiên Khôi', 'Thiên Việt'],
    description: 'Đệ nhất quý nhân, đứng đầu thi cử, luôn có bậc bề trên nâng đỡ'
  },
  {
    id: 'ta-phu-huu-bat',
    name: 'Tả Phù - Hữu Bật (Tả Hữu Phò Tá)',
    type: 'cat-tinh',
    stars: ['Tả Phù', 'Hữu Bật'],
    description: 'Bè bạn đồng sự trợ lực đắc lực, tụ họp lòng người, hóa giải hoạn nạn'
  },

  // Tứ Hóa
  {
    id: 'tu-hoa',
    name: 'Tứ Hóa (Khoa - Quyền - Lộc - Kỵ)',
    type: 'cat-tinh',
    stars: ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Hóa Kỵ'],
    description: 'Tứ Hóa định hướng vận mệnh: Tài lộc, quyền uy, danh tiếng và thử thách'
  },

  // Lục Sát Tinh
  {
    id: 'dia-khong-dia-kiep',
    name: 'Địa Không - Địa Kiếp (Không Kiếp Bạo Phát Bạo Tàn)',
    type: 'sat-tinh',
    stars: ['Địa Không', 'Địa Kiếp'],
    description: 'Sóng gió thăng trầm cực lớn, tư duy đột phá xuất trần hoặc hao tán bất ngờ'
  },
  {
    id: 'kinh-duong-da-la',
    name: 'Kình Dương - Đà La (Kình Đà Hình Thương)',
    type: 'sat-tinh',
    stars: ['Kình Dương', 'Đà La'],
    description: 'Trở ngại va chạm, tính cương nghị quyết đoán, cẩn trọng phẫu thuật dao kéo'
  },
  {
    id: 'hoa-tinh-linh-tinh',
    name: 'Hỏa Tinh - Linh Tinh (Hỏa Linh Bất Ngờ Họa Hại)',
    type: 'sat-tinh',
    stars: ['Hỏa Tinh', 'Linh Tinh'],
    description: 'Tính cách nóng nảy bộc trực, tai họa bất ngờ như sấm sét'
  },

  // Hỷ Duyên / Đào Hoa
  {
    id: 'tam-minh-dao-hong-hy',
    name: 'Đào Hoa - Hồng Loan - Thiên Hỷ (Tam Minh)',
    type: 'dao-hoa',
    stars: ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ'],
    description: 'Duyên dáng thanh lịch, tình duyên thuận lợi, nhiều tin vui may mắn'
  },

  // Tài Tinh & Quyền Tinh
  {
    id: 'loc-ma-giao-tri',
    name: 'Lộc Tồn - Thiên Mã (Lộc Mã Giao Trì)',
    type: 'cat-tinh',
    stars: ['Lộc Tồn', 'Thiên Mã'],
    description: 'Càng bôn ba năng động càng phát tài lớn, kinh doanh buôn bán phương xa đắc lợi'
  },
  {
    id: 'tuong-quan-quoc-an',
    name: 'Tướng Quân - Quốc Ấn (Binh Quyền Ấn Tín)',
    type: 'cat-tinh',
    stars: ['Tướng Quân', 'Quốc Ấn'],
    description: 'Thực quyền chỉ huy, có ấn tín chức sắc được công nhận chính thức'
  },
  {
    id: 'thai-phu-phong-cao',
    name: 'Thai Phụ - Phong Cáo (Cáo Phụ Ban Khen)',
    type: 'cat-tinh',
    stars: ['Thai Phụ', 'Phong Cáo'],
    description: 'Bằng cấp, khen thưởng, huân huy chương, danh dự xã hội'
  },

  // Quý Thần & Phúc Thiện Tinh
  {
    id: 'an-quang-thien-quy',
    name: 'Ân Quang - Thiên Quý (Quang Quý Ơn Trên)',
    type: 'cat-tinh',
    stars: ['Ân Quang', 'Thiên Quý'],
    description: 'Thiện căn sâu dày, được thần phật tổ tiên và quý nhân che chở cứu vớt'
  },
  {
    id: 'tam-thai-bat-toa',
    name: 'Tam Thai - Bát Tọa (Thai Tọa An Khang)',
    type: 'cat-tinh',
    stars: ['Tam Thai', 'Bát Tọa'],
    description: 'Cuộc sống an nhàn thảnh thơi, có vị thế bệ đỡ vững vàng'
  },
  {
    id: 'long-tri-phuong-cac',
    name: 'Long Trì - Phượng Các (Long Phượng Quý Khí)',
    type: 'cat-tinh',
    stars: ['Long Trì', 'Phượng Các'],
    description: 'Khí chất đài các phong nhã, gia đạo khang trang, giác quan tinh tế'
  },
  {
    id: 'thien-quan-thien-phuc',
    name: 'Thiên Quan - Thiên Phúc (Phúc Thần Cứu Khổ)',
    type: 'cat-tinh',
    stars: ['Thiên Quan', 'Thiên Phúc'],
    description: 'Tâm tính từ thiện, cứu khổ cứu nạn, biến nguy thành an'
  },
  {
    id: 'tu-duc',
    name: 'Tứ Đức (Thiên Đức, Nguyệt Đức, Phúc Đức, Long Đức)',
    type: 'cat-tinh',
    stars: ['Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức'],
    description: 'Đức năng thắng số, từ tâm lương thiện, giải trừ hoạn nạn và bệnh tật'
  },
  {
    id: 'giai-than-phuong-cac',
    name: 'Giải Thần - Phượng Các (Phượng Giải Tiêu Tai)',
    type: 'cat-tinh',
    stars: ['Giải Thần', 'Phượng Các'],
    description: 'Cứu giải tai ách, phong thái nho nhã cao quý, gia đạo hòa thuận'
  },
  {
    id: 'thien-tai-thien-tho',
    name: 'Thiên Tài - Thiên Thọ (Tài Thọ Cân Bằng)',
    type: 'cat-tinh',
    stars: ['Thiên Tài', 'Thiên Thọ'],
    description: 'Chủ về tài năng thiên phú và phúc thọ nhân hậu, cân bằng nghiệp duyên và tuổi thọ an khang'
  },
  {
    id: 'dieu-y',
    name: 'Diêu Y (Thiên Diêu - Thiên Y)',
    type: 'cat-tinh',
    stars: ['Thiên Diêu', 'Thiên Y'],
    description: 'Bộ sao Diêu Y chủ về tài hoa nghệ thuật, năng khiếu y dược trị liệu, giác quan tâm linh nhạy bén và duyên nghiệp y học cứu người'
  },
  {
    id: 'tu-linh',
    name: 'Tứ Linh (Thanh Long - Bạch Hổ - Phượng Các - Hoa Cái)',
    type: 'cat-tinh',
    stars: ['Thanh Long', 'Bạch Hổ', 'Phượng Các', 'Hoa Cái'],
    description: 'Tứ Linh chầu về (Thanh Long, Bạch Hổ, Phượng Các, Hoa Cái) chủ về danh thơm tiếng tốt, công danh hiển đạt, đài các quý phái, đi đâu cũng được trọng vọng'
  },
  {
    id: 'bac-si-tau-thu',
    name: 'Bác Sĩ - Tấu Thư (Văn Bút Biện Tài)',
    type: 'cat-tinh',
    stars: ['Bác Sĩ', 'Tấu Thư'],
    description: 'Khẩu tài hùng biện, thông thạo văn chương chữ nghĩa và giải tỏa pháp lý'
  },

  // Ám Tinh & Bại Tinh
  {
    id: 'co-than-qua-tu',
    name: 'Cô Thần - Quả Tú (Cô Quả Lẻ Loi)',
    type: 'bai-tinh',
    stars: ['Cô Thần', 'Quả Tú'],
    description: 'Nội tâm khép kín cô đơn, duyên tình muộn màng, khó bộc bạch sẻ chia'
  },
  {
    id: 'thien-khoc-thien-hu',
    name: 'Thiên Khốc - Thiên Hư (Khốc Hư Lệ Sầu)',
    type: 'bai-tinh',
    stars: ['Thiên Khốc', 'Thiên Hư'],
    description: 'Gian truân lo toan, nhiều nước mắt u sầu buổi đầu khởi nghiệp'
  },
  {
    id: 'tang-mon-bach-ho',
    name: 'Tang Môn - Bạch Hổ (Tang Hổ Huyết Quang)',
    type: 'bai-tinh',
    stars: ['Tang Môn', 'Bạch Hổ'],
    description: 'Lo âu ưu tư sầu muộn, bệnh về huyết khí xương khớp hoặc tang chế'
  },
  {
    id: 'dai-hao-tieu-hao',
    name: 'Đại Hao - Tiểu Hao (Song Hao Tán Tài Dời Đổi)',
    type: 'bai-tinh',
    stars: ['Đại Hao', 'Tiểu Hao'],
    description: 'Tiền bạc khó tích lũy, chi tiêu phóng khoáng, hay dời đổi chỗ ở và nơi làm việc'
  },
  {
    id: 'thien-hinh-thien-dieu',
    name: 'Thiên Hình - Thiên Diêu (Hình Diêu Pháp Luật Ám Muội)',
    type: 'sat-tinh',
    stars: ['Thiên Hình', 'Thiên Diêu'],
    description: 'Kỷ luật pháp luật nghiêm minh kết hợp với tình cảm đam mê phóng túng'
  },
  {
    id: 'thien-la-dia-vong',
    name: 'Thiên La - Địa Võng (Lưới Trời Thìn Tuất)',
    type: 'bai-tinh',
    stars: ['Thiên La', 'Địa Võng'],
    description: 'Thế cờ bế tắc thử thách, cần kiên nhẫn tích lũy nội lực chờ thời bứt phá'
  },
  {
    id: 'kiep-sat-pha-toai',
    name: 'Kiếp Sát - Phá Toái (Sát Phá Trắc Trở)',
    type: 'sat-tinh',
    stars: ['Kiếp Sát', 'Phá Toái'],
    description: 'Công việc dễ bị đứt đoạn gãy đổ giữa chừng, đề phòng va chạm xô xát'
  },

  // Nhóm Vòng Thái Tuế
  {
    id: 'tue-ho-phu',
    name: 'Tuế Hổ Phù (Thái Tuế - Bạch Hổ - Quan Phù)',
    type: 'cat-tinh',
    stars: ['Thái Tuế', 'Bạch Hổ', 'Quan Phù'],
    description: 'Vòng Thái Tuế chính trực quang minh, thượng tôn pháp luật, tài biện luận sắc sảo'
  },
  {
    id: 'tang-tue-dieu',
    name: 'Tang Tuế Điếu (Tang Môn - Tuế Phá - Điếu Khách)',
    type: 'dac-biet',
    stars: ['Tang Môn', 'Tuế Phá', 'Điếu Khách'],
    description: 'Ý chí bất khuất không cam chịu số phận, dám đi ngược số đông để bứt phá'
  },
  {
    id: 'am-long-truc',
    name: 'Âm Long Trực (Thiếu Âm - Long Đức - Trực Phù)',
    type: 'cat-tinh',
    stars: ['Thiếu Âm', 'Long Đức', 'Trực Phù'],
    description: 'Đức tính khiêm nhường, nhẫn nại chịu thiệt, lấy ân báo oán, tích phúc hậu vận'
  },
  {
    id: 'duong-tu-phuc',
    name: 'Dương Tử Phúc (Thiếu Dương - Tử Phù - Phúc Đức)',
    type: 'cat-tinh',
    stars: ['Thiếu Dương', 'Tử Phù', 'Phúc Đức'],
    description: 'Thông minh nhân ái, mẫn tiệp ứng biến linh hoạt, có phúc thần che chở'
  }
];

export const ALL_STAR_GROUPS = [...MAJOR_STAR_GROUPS, ...MINOR_STAR_GROUPS];

/**
 * Chuẩn hóa tên sao: gỡ bỏ dấu ngoặc độ sáng (H), (Đ), (V), (M), (B) và tiền tố L., ĐV.
 */
export function getCleanStarName(name: string): string {
  if (!name) return '';
  return name
    .replace(/\([^)]*\)/g, '')
    .replace(/^(L\.|ĐV\.)/, '')
    .trim();
}

/**
 * Tra cứu định nghĩa bộ sao phù hợp nhất cho một ngôi sao
 */
export function findStarGroup(rawName: string, isMajor: boolean): StarGroupDef | null {
  const clean = getCleanStarName(rawName);
  if (!clean) return null;

  // Nếu là chính tinh, tìm trong nhóm chính tinh trước
  if (isMajor) {
    const majorMatch = MAJOR_STAR_GROUPS.find(g => g.stars.includes(clean));
    if (majorMatch) return majorMatch;
  }

  // Danh sách ưu tiên cho các sao phổ biến tránh nhập nhằng
  const PRIORITY_MAP: Record<string, string> = {
    'Thiên Diêu': 'dieu-y',
    'Thiên Y': 'dieu-y',
    'Thanh Long': 'tu-linh',
    'Hoa Cái': 'tu-linh',
    'Bạch Hổ': 'tu-linh',
    'Phượng Các': 'long-tri-phuong-cac',
    'Tang Môn': 'tang-mon-bach-ho',
    'Thái Tuế': 'tue-ho-phu',
    'Hóa Lộc': 'tu-hoa',
    'Hóa Quyền': 'tu-hoa',
    'Hóa Khoa': 'tu-hoa',
    'Hóa Kỵ': 'tu-hoa',
    'Lộc Tồn': 'loc-ma-giao-tri',
    'Thiên Mã': 'loc-ma-giao-tri',
    'Đào Hoa': 'tam-minh-dao-hong-hy',
    'Hồng Loan': 'tam-minh-dao-hong-hy',
    'Thiên Hỷ': 'tam-minh-dao-hong-hy',
    'Long Trì': 'long-tri-phuong-cac',
    'Quốc Ấn': 'tuong-quan-quoc-an',
    'Tướng Quân': 'tuong-quan-quoc-an',
    'Phong Cáo': 'thai-phu-phong-cao',
    'Thai Phụ': 'thai-phu-phong-cao',
    'Thiên Hình': 'thien-hinh-thien-dieu',
    'Thiên Khốc': 'thien-khoc-thien-hu',
    'Thiên Hư': 'thien-khoc-thien-hu',
    'Cô Thần': 'co-than-qua-tu',
    'Quả Tú': 'co-than-qua-tu',
    'Đại Hao': 'dai-hao-tieu-hao',
    'Tiểu Hao': 'dai-hao-tieu-hao',
    'Văn Xương': 'van-xuong-van-khuc',
    'Văn Khúc': 'van-xuong-van-khuc',
    'Thiên Khôi': 'thien-khoi-thien-viet',
    'Thiên Việt': 'thien-khoi-thien-viet',
    'Tả Phù': 'ta-phu-huu-bat',
    'Hữu Bật': 'ta-phu-huu-bat',
    'Địa Không': 'dia-khong-dia-kiep',
    'Địa Kiếp': 'dia-khong-dia-kiep',
    'Kình Dương': 'kinh-duong-da-la',
    'Đà La': 'kinh-duong-da-la',
    'Hỏa Tinh': 'hoa-tinh-linh-tinh',
    'Linh Tinh': 'hoa-tinh-linh-tinh',
    'Ân Quang': 'an-quang-thien-quy',
    'Thiên Quý': 'an-quang-thien-quy',
    'Tam Thai': 'tam-thai-bat-toa',
    'Bát Tọa': 'tam-thai-bat-toa',
    'Thiên Quan': 'thien-quan-thien-phuc',
    'Thiên Phúc': 'thien-quan-thien-phuc',
    'Thiên Đức': 'tu-duc',
    'Nguyệt Đức': 'tu-duc',
    'Phúc Đức': 'duong-tu-phuc',
    'Long Đức': 'am-long-truc',
    'Thiếu Âm': 'am-long-truc',
    'Trực Phù': 'am-long-truc',
    'Thiếu Dương': 'duong-tu-phuc',
    'Tử Phù': 'duong-tu-phuc',
    'Điếu Khách': 'tang-tue-dieu',
    'Tuế Phá': 'tang-tue-dieu',
    'Bác Sĩ': 'bac-si-tau-thu',
    'Tấu Thư': 'bac-si-tau-thu',
    'Kiếp Sát': 'kiep-sat-pha-toai',
    'Phá Toái': 'kiep-sat-pha-toai',
    'Thiên La': 'thien-la-dia-vong',
    'Địa Võng': 'thien-la-dia-vong',
    'Thiên Thọ': 'thien-tai-thien-tho',
    'Thiên Tài': 'thien-tai-thien-tho',
    'Giải Thần': 'giai-than-phuong-cac'
  };

  const priorityId = PRIORITY_MAP[clean];
  if (priorityId) {
    const match = ALL_STAR_GROUPS.find(g => g.id === priorityId);
    if (match) return match;
  }

  // Tìm trong tất cả nhóm
  return ALL_STAR_GROUPS.find(g => g.stars.includes(clean)) || null;
}

/**
 * Chọn bộ sao tối ưu nhất trong phạm vi 3 cung Tam Hợp
 */
export function findBestStarGroupForTamHop(
  rawName: string,
  isMajor: boolean,
  tamHopPalaces: TuViPalace[]
): StarGroupDef | null {
  const clean = getCleanStarName(rawName);
  if (!clean) return null;

  if (isMajor) {
    const majorMatch = MAJOR_STAR_GROUPS.find(g => g.stars.includes(clean));
    if (majorMatch) return majorMatch;
  }

  // Thu thập tất cả các sao có mặt trong 3 cung Tam Hợp này
  const starsInTamHop = new Set<string>();
  tamHopPalaces.forEach(p => {
    p.majorStars.forEach(s => starsInTamHop.add(getCleanStarName(s.name)));
    p.minorStars.forEach(s => starsInTamHop.add(getCleanStarName(s.rawName || s.name)));
  });

  const pool = isMajor ? MAJOR_STAR_GROUPS : MINOR_STAR_GROUPS;
  const candidateGroups = pool.filter(g => g.stars.includes(clean));

  if (candidateGroups.length === 0) {
    return ALL_STAR_GROUPS.find(g => g.stars.includes(clean)) || null;
  }

  if (candidateGroups.length === 1) {
    return candidateGroups[0];
  }

  // Đếm số lượng sao của từng bộ có mặt trong Tam Hợp
  let bestGroup: StarGroupDef | null = null;
  let maxMatched = 0;

  candidateGroups.forEach(g => {
    const matchedCount = g.stars.filter(st => starsInTamHop.has(st)).length;
    if (matchedCount > maxMatched) {
      maxMatched = matchedCount;
      bestGroup = g;
    }
  });

  if (bestGroup && maxMatched >= 2) {
    return bestGroup;
  }

  return findStarGroup(rawName, isMajor);
}

import { getCanonicalTamHopChiString } from './starGroupEngine';

export interface StarGroupMemberLocation {
  starName: string;
  cleanName: string;
  rawStarName: string;
  palaceIndex: number;
  palaceName: string;
  palaceChi: string;
  isMajor: boolean;
}

export interface StarGroupHoverResult {
  sourceStar: string;
  cleanSourceStar: string;
  groupName: string;
  groupType: StarGroupType;
  targetStars: string[];
  foundMembers: StarGroupMemberLocation[];
  palaceIndices: number[];
  tamHopChiString: string;
  tamHopPalaceNames: string;
  matchRatio: string;
  missingStars: string[];
  relationSummary?: string;
  description?: string;
}

/**
 * Tìm các thành viên trong bộ sao chỉ hiển thị THEO TAM HỢP của cung đang xét
 * (Theo nguyên lý Tử Vi Đẩu Số: chỉ xét 3 cung trong tam hợp, không lấy ngoài tam hợp)
 */
export function getStarGroupHoverInfo(
  rawStarName: string,
  isMajor: boolean,
  palaces: TuViPalace[],
  palaceIndex: number
): StarGroupHoverResult | null {
  const cleanSource = getCleanStarName(rawStarName);

  const targetPalace = palaces.find(p => p.index === palaceIndex) || palaces[0];
  const pTamHop1 = (targetPalace.index + 4) % 12;
  const pTamHop2 = (targetPalace.index + 8) % 12;
  const tamHopIndices = [targetPalace.index, pTamHop1, pTamHop2];
  const tamHopPalaces = palaces.filter(p => tamHopIndices.includes(p.index));
  const tamHopChiString = getCanonicalTamHopChiString(targetPalace.chi);
  const tamHopPalaceNames = tamHopPalaces.map(p => p.name).join(' - ');

  const group = findBestStarGroupForTamHop(rawStarName, isMajor, tamHopPalaces);

  if (!group) {
    // Nếu không thuộc bộ nào đã định nghĩa, chỉ trả về chính ngôi sao đó tại cung này
    const foundMembers: StarGroupMemberLocation[] = [{
      starName: rawStarName,
      cleanName: cleanSource,
      rawStarName,
      palaceIndex: targetPalace.index,
      palaceName: targetPalace.name,
      palaceChi: targetPalace.chi,
      isMajor
    }];

    return {
      sourceStar: rawStarName,
      cleanSourceStar: cleanSource,
      groupName: `Sao ${cleanSource}`,
      groupType: isMajor ? 'chinh-tinh' : 'dac-biet',
      targetStars: [cleanSource],
      foundMembers,
      palaceIndices: [targetPalace.index],
      tamHopChiString,
      tamHopPalaceNames,
      matchRatio: 'Sao độc thủ',
      missingStars: []
    };
  }

  const targetStars = group.stars;
  const targetStarsSet = new Set(targetStars);
  const foundMembers: StarGroupMemberLocation[] = [];

  // CHỈ QUÉT DUY NHẤT 3 CUNG TRONG TAM HỢP
  tamHopPalaces.forEach(p => {
    // 1. Quét chính tinh trong Tam Hợp
    p.majorStars.forEach(s => {
      const cName = getCleanStarName(s.name);
      if (targetStarsSet.has(cName)) {
        foundMembers.push({
          starName: s.name,
          cleanName: cName,
          rawStarName: s.name,
          palaceIndex: p.index,
          palaceName: p.name,
          palaceChi: p.chi,
          isMajor: true
        });
      }
    });

    // 2. Quét phụ tinh trong Tam Hợp
    p.minorStars.forEach(s => {
      const cName = getCleanStarName(s.rawName || s.name);
      if (targetStarsSet.has(cName)) {
        foundMembers.push({
          starName: s.name,
          cleanName: cName,
          rawStarName: s.rawName || s.name,
          palaceIndex: p.index,
          palaceName: p.name,
          palaceChi: p.chi,
          isMajor: false
        });
      }
    });
  });

  const palaceIndices = Array.from(new Set(foundMembers.map(m => m.palaceIndex)));
  const foundStarNames = new Set(foundMembers.map(m => m.cleanName));
  const missingStars = targetStars.filter(st => !foundStarNames.has(st));

  // Tỷ lệ xuất hiện trong Tam Hợp
  const matchRatio = foundStarNames.size === targetStars.length
    ? `Hội đủ ${targetStars.length}/${targetStars.length} sao trong Tam Hợp`
    : `Có ${foundStarNames.size}/${targetStars.length} sao trong Tam Hợp`;

  // Tóm tắt quan hệ hình học trong Tam Hợp
  let relationSummary = '';
  if (foundMembers.length === 1) {
    relationSummary = `Đơn thủ tại ${targetPalace.name} (${targetPalace.chi})`;
  } else {
    const uniquePalaces = Array.from(new Set(foundMembers.map(m => m.palaceIndex)));
    if (uniquePalaces.length === 1) {
      relationSummary = `Đồng Cung tại ${foundMembers[0].palaceName} (${foundMembers[0].palaceChi})`;
    } else {
      relationSummary = `Hội Tam Hợp (${tamHopChiString})`;
    }
  }

  return {
    sourceStar: rawStarName,
    cleanSourceStar: cleanSource,
    groupName: group.name,
    groupType: group.type,
    targetStars,
    foundMembers,
    palaceIndices,
    tamHopChiString,
    tamHopPalaceNames,
    matchRatio,
    missingStars,
    relationSummary,
    description: group.description
  };
}
