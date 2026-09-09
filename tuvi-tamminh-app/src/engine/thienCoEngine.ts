import { Can, Chi, CucType, TheDatType, CungMonType, CanTuHoa } from '../types/tuvi.types';

/**
 * 1. Xác định Sao Chủ Mệnh (dựa theo Chi của Cung Mệnh)
 * Theo "Mệnh Lý Thiên Cơ" Chương I.5:
 * Tý: Tham Lang
 * Sửu, Hợi: Cự Môn
 * Dần, Tuất: Lộc Tồn
 * Mão, Dậu: Văn Khúc
 * Thìn, Thân: Liêm Trinh
 * Tỵ, Mùi: Vũ Khúc
 * Ngọ: Phá Quân
 */
export function getChuMenh(menhChi: Chi): string {
  switch (menhChi) {
    case 'Tý': return 'Tham Lang';
    case 'Sửu':
    case 'Hợi': return 'Cự Môn';
    case 'Dần':
    case 'Tuất': return 'Lộc Tồn';
    case 'Mão':
    case 'Dậu': return 'Văn Khúc';
    case 'Thìn':
    case 'Thân': return 'Liêm Trinh';
    case 'Tỵ':
    case 'Mùi': return 'Vũ Khúc';
    case 'Ngọ': return 'Phá Quân';
    default: return 'Tử Vi';
  }
}

/**
 * 2. Xác định Sao Chủ Thân (dựa theo Chi năm sinh)
 * Theo "Mệnh Lý Thiên Cơ" Chương I.5:
 * Tý: Linh Tinh
 * Sửu, Mùi: Thiên Tướng
 * Dần, Thân: Thiên Lương
 * Mão, Dậu: Thiên Đồng
 * Thìn, Tuất: Văn Xương
 * Tỵ, Hợi: Thiên Cơ
 */
export function getChuThan(yearChi: Chi): string {
  switch (yearChi) {
    case 'Tý': return 'Linh Tinh';
    case 'Sửu':
    case 'Mùi': return 'Thiên Tướng';
    case 'Dần':
    case 'Thân': return 'Thiên Lương';
    case 'Mão':
    case 'Dậu': return 'Thiên Đồng';
    case 'Thìn':
    case 'Tuất': return 'Văn Xương';
    case 'Tỵ':
    case 'Hợi': return 'Thiên Cơ';
    default: return 'Thiên Tướng';
  }
}

/**
 * 3. Phân định Thế Đất & Cung Môn của 12 Cung
 * Theo "Mệnh Lý Thiên Cơ" Chương I.2:
 * - Tứ mã chi địa / Tứ sinh: Dần, Thân, Tỵ, Hợi (bôn ba, sóng gió, tự lực)
 * - Tứ bại chi địa / Đào hoa địa: Tý, Ngọ, Mão, Dậu (tình cảm, giao hữu, đa tài đa nghệ)
 * - Tứ mộ chi địa / Cô độc địa: Sửu, Mùi (cô đơn, trừng phạt, vươn lên)
 * - Thiên La: Thìn (lưới trời, cản trở, kiên định vượt khó)
 * - Địa Võng: Tuất (lưới đất, bức bách, đột phá trùng vây)
 * - Cung môn: Mão (Lôi Môn), Hợi (Thiên Môn), Tỵ (Địa Môn), Dần (Nhân Môn), Thân (Quỷ Môn), Tuất (Không Môn)
 */
export function getTheDat(chi: Chi): { theDat: TheDatType; cungMon: CungMonType; yNghia: string } {
  let theDat: TheDatType = 'Bình thường';
  let cungMon: CungMonType = 'Thường';
  let yNghia = '';

  if (['Dần', 'Thân', 'Tỵ', 'Hợi'].includes(chi)) {
    theDat = 'Tứ Mã (Tứ Sinh)';
    yNghia = 'Vị trí bôn ba vất vả, dịch chuyển, tự lực cánh sinh, trải qua sóng gió mới thành đại nghiệp.';
  } else if (['Tý', 'Ngọ', 'Mão', 'Dậu'].includes(chi)) {
    theDat = 'Tứ Bại (Đào Hoa)';
    yNghia = 'Đào hoa phong lưu, đa tài đa nghệ, quan hệ xã hội rộng rãi nhưng tình cảm hay biến động.';
  } else if (chi === 'Thìn') {
    theDat = 'Thiên La';
    yNghia = 'Lưới trời bao bọc, chủ về sự ràng buộc, thử thách ý chí và nỗ lực bứt phá.';
  } else if (chi === 'Tuất') {
    theDat = 'Địa Võng';
    yNghia = 'Lưới đất vây quanh, trải qua tôi luyện khắt khe để đạt tới thành tựu vững bền.';
  } else if (['Sửu', 'Mùi'].includes(chi)) {
    theDat = 'Tứ Mộ (Cô Độc)';
    yNghia = 'Kho tàng tiềm ẩn, chủ sự kín đáo, cô độc địa nhưng tích lũy nội lực thâm hậu.';
  }

  switch (chi) {
    case 'Mão':
      cungMon = 'Lôi Môn';
      break;
    case 'Hợi':
      cungMon = 'Thiên Môn';
      break;
    case 'Tỵ':
      cungMon = 'Địa Môn';
      break;
    case 'Dần':
      cungMon = 'Nhân Môn';
      break;
    case 'Thân':
      cungMon = 'Quỷ Môn';
      break;
    case 'Tuất':
      cungMon = 'Không Môn';
      break;
    default:
      cungMon = 'Thường';
  }

  return { theDat, cungMon, yNghia };
}

/**
 * 4. Xác định Cung Kỵ Hành theo Ngũ Hành Cục
 * Theo "Mệnh Lý Thiên Cơ" Chương I.3:
 * - Hỏa Lục Cục kị Tuất, Hợi (Quẻ Càn dương thủy khắc hỏa)
 * - Thủy Nhị Cục & Thổ Ngũ Cục kị Thìn, Tỵ (Quẻ Tốn âm mộc, mộc khắc thổ & thủy sinh mộc hao mòn)
 * - Kim Tứ Cục kị Sửu, Dần (Quẻ Cấn dương thổ)
 * - Mộc Tam Cục kị Thân, Dậu (Quẻ Khôn, Đoài âm kim khắc mộc)
 */
export function getKyHanh(cucName: string): { cung1: Chi; cung2: Chi; lyDo: string } {
  if (cucName.includes('Hỏa')) {
    return {
      cung1: 'Tuất',
      cung2: 'Hợi',
      lyDo: 'Hỏa Lục Cục kị hành cung Tuất, Hợi (tương ứng quẻ Càn dương thủy, thủy khắc hỏa)'
    };
  }
  if (cucName.includes('Thủy')) {
    return {
      cung1: 'Thìn',
      cung2: 'Tỵ',
      lyDo: 'Thủy Nhị Cục kị hành cung Thìn, Tỵ (tương ứng quẻ Tốn âm mộc, thủy sinh mộc hao mòn trí lực)'
    };
  }
  if (cucName.includes('Thổ')) {
    return {
      cung1: 'Thìn',
      cung2: 'Tỵ',
      lyDo: 'Thổ Ngũ Cục kị hành cung Thìn, Tỵ (tương ứng quẻ Tốn âm mộc, mộc khắc thổ gây trắc trở)'
    };
  }
  if (cucName.includes('Kim')) {
    return {
      cung1: 'Sửu',
      cung2: 'Dần',
      lyDo: 'Kim Tứ Cục kị hành cung Sửu, Dần (tương ứng quẻ Cấn dương thổ, ngoại lệ kị hành)'
    };
  }
  // Mộc Tam Cục
  return {
    cung1: 'Thân',
    cung2: 'Dậu',
    lyDo: 'Mộc Tam Cục kị hành cung Thân, Dậu (tương ứng quẻ Khôn, Đoài thuộc kim khắc mộc)'
  };
}

/**
 * 5. Cảnh báo Cấm Kỵ 12 Con Giáp
 * Theo "Mệnh Lý Thiên Cơ" Chương I.4
 */
export function getCamKyConGiap(yearChi: Chi): string[] {
  const warnings: Record<Chi, string[]> = {
    'Tý': [
      'Sợ tuần hành qua cung Ngọ (Tý - Ngọ chính xung).',
      'Cần cẩn trọng khi đi qua hai cung Dần, Thân.'
    ],
    'Sửu': [
      'Sợ đi qua hai cung Sửu, Ngọ.',
      'Đặc biệt sợ tuần hành qua vận hạn của Thất Sát tinh (tai họa gia tăng).'
    ],
    'Dần': [
      'Sợ đi qua cung Thân (Dần - Thân tương xung).',
      'Đề phòng khi tuần hành qua hai cung Tỵ, Hợi.'
    ],
    'Mão': [
      'Sợ đi qua cung Dậu (Mão - Dậu tương xung).',
      'Đề phòng khi tuần hành qua hai cung Tỵ, Hợi.'
    ],
    'Thìn': [
      'Nhất thiết cần đề phòng năm bản mệnh (năm Thìn).',
      'Sợ tuần hành qua hai cung Thiên La - Địa Võng (Thìn, Tuất), chủ về vướng mắc khó phân định.'
    ],
    'Tỵ': [
      'Cần đề phòng năm bản mệnh (năm Tỵ).',
      'Sợ đi qua cung Tỵ.'
    ],
    'Ngọ': [
      'Sợ đi qua hai cung Sửu, Ngọ.',
      'Rất kị tuần hành qua cung hạn có Thất Sát tinh thủ chiếu.'
    ],
    'Mùi': [
      'Sợ đi qua hai cung Dậu, Hợi.',
      'Tuyệt đối không nên gặp Kình Dương tại tứ mộ chi địa (Thìn, Tuất, Sửu, Mùi).'
    ],
    'Thân': [
      'Sợ đi qua năm bản mệnh (năm Thân).',
      'Sợ trong cung đại hạn đứng đầu là Hỏa Tinh hoặc Linh Tinh.',
      'Sợ tuần hành qua cung Dần (Dần - Thân tương xung).'
    ],
    'Dậu': [
      'Sợ năm Mão và tuần hành qua cung Mão (Mão - Dậu tương xung).',
      'Sợ đi qua các cung có Kình Dương và Hỏa Tinh.'
    ],
    'Tuất': [
      'Sợ đi qua các cung hội tụ Kình Dương và Hỏa Tinh.',
      'Sợ tuần hành qua hai cung Thiên La - Địa Võng (Thìn, Tuất).'
    ],
    'Hợi': [
      'Sợ đi qua các cung có Kình Dương và Hỏa Tinh.',
      'Cần lưu tâm hòa khí gia đạo trong các năm xung khắc.'
    ]
  };

  return warnings[yearChi] || [];
}

/**
 * 6. Tứ Hóa của 10 Thiên Can (Dùng để an Tứ Hóa cho từng Can Cung)
 * Theo "Mệnh Lý Thiên Cơ" Chương III.3
 */
const CAN_TU_HOA_MAP: Record<Can, CanTuHoa> = {
  'Giáp': { hoaLoc: 'Liêm Trinh', hoaQuyen: 'Phá Quân', hoaKhoa: 'Vũ Khúc', hoaKi: 'Thái Dương' },
  'Ất':   { hoaLoc: 'Thiên Cơ',   hoaQuyen: 'Thiên Lương', hoaKhoa: 'Tử Vi',    hoaKi: 'Thái Âm' },
  'Bính': { hoaLoc: 'Thiên Đồng', hoaQuyen: 'Thiên Cơ',   hoaKhoa: 'Văn Xương', hoaKi: 'Liêm Trinh' },
  'Đinh': { hoaLoc: 'Thái Âm',    hoaQuyen: 'Thiên Đồng', hoaKhoa: 'Thiên Cơ',   hoaKi: 'Cự Môn' },
  'Mậu':  { hoaLoc: 'Tham Lang',  hoaQuyen: 'Thái Âm',    hoaKhoa: 'Hữu Bật',   hoaKi: 'Thiên Cơ' },
  'Kỷ':   { hoaLoc: 'Vũ Khúc',    hoaQuyen: 'Tham Lang',  hoaKhoa: 'Thiên Lương', hoaKi: 'Văn Khúc' },
  'Canh': { hoaLoc: 'Thái Dương', hoaQuyen: 'Vũ Khúc',    hoaKhoa: 'Thái Âm',   hoaKi: 'Thiên Đồng' },
  'Tân':  { hoaLoc: 'Cự Môn',     hoaQuyen: 'Thái Dương', hoaKhoa: 'Văn Khúc',  hoaKi: 'Văn Xương' },
  'Nhâm': { hoaLoc: 'Thiên Lương', hoaQuyen: 'Tử Vi',     hoaKhoa: 'Tả Phù',    hoaKi: 'Vũ Khúc' },
  'Quý':  { hoaLoc: 'Phá Quân',   hoaQuyen: 'Cự Môn',     hoaKhoa: 'Thái Âm',   hoaKi: 'Tham Lang' }
};

export function getCungCanTuHoa(can: Can): CanTuHoa {
  return CAN_TU_HOA_MAP[can] || {
    hoaLoc: 'Hóa Lộc',
    hoaQuyen: 'Hóa Quyền',
    hoaKhoa: 'Hóa Khoa',
    hoaKi: 'Hóa Kị'
  };
}
