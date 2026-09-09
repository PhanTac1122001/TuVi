import { Can, Chi, NguHanh, CucType } from '../types/tuvi.types';
import { CAN_LIST, CHI_LIST, getChiIndex, getCanIndex } from './lunarCalendar';
import { getMonthCanChi, getNapAm } from './canChiNapAm';

export const PALACE_NAMES = [
  'Mệnh',
  'Phụ Mẫu',
  'Phúc Đức',
  'Điền Trạch',
  'Quan Lộc',
  'Nô Bộc',
  'Thiên Di',
  'Tật Ách',
  'Tài Bạch',
  'Tử Tức',
  'Phu Thê',
  'Huynh Đệ'
];

/**
 * Xác định Cung Mệnh và Cung Thân:
 * - Tháng 1 khởi tại Dần (index 2), đếm thuận đến tháng sinh
 * - Từ cung tháng sinh coi là giờ Tý:
 *   - Đếm nghịch đến giờ sinh -> Cung Mệnh
 *   - Đếm thuận đến giờ sinh -> Cung Thân
 */
export function findMenhThan(lunarMonth: number, hourChi: Chi): { menhChiIndex: number; thanChiIndex: number } {
  const hourChiIndex = getChiIndex(hourChi);
  // Tháng 1 khởi tại Dần (index 2)
  const monthPos = (2 + (lunarMonth - 1)) % 12;

  // Mệnh: nghịch từ Tý (0) đến giờ sinh
  const menhChiIndex = (monthPos - hourChiIndex + 12) % 12;

  // Thân: thuận từ Tý (0) đến giờ sinh
  const thanChiIndex = (monthPos + hourChiIndex) % 12;

  return { menhChiIndex, thanChiIndex };
}

/**
 * Định Ngũ Hành Cục dựa trên Can năm sinh và vị trí Cung Mệnh:
 * - Khởi Can cung Dần bằng ngũ hổ độn từ Can năm
 * - Đi thuận đến cung Mệnh để tìm Can của Cung Mệnh
 * - Nạp Âm của Cung Mệnh quy định Cục
 */
export function findCuc(yearCan: Can, menhChiIndex: number): {
  name: string;
  number: number;
  element: NguHanh;
} {
  // Can tháng 1 tại Dần (index 2)
  const danCanInfo = getMonthCanChi(yearCan, 1);
  const danCanIndex = CAN_LIST.indexOf(danCanInfo.can);

  // Khoảng cách từ Dần (index 2) đến menhChiIndex
  const distance = (menhChiIndex - 2 + 12) % 12;
  const menhCanIndex = (danCanIndex + distance) % 10;
  const menhCan = CAN_LIST[menhCanIndex];
  const menhChi = CHI_LIST[menhChiIndex];

  // Nạp âm của cung Mệnh
  const napAm = getNapAm(menhCan, menhChi);

  switch (napAm.element) {
    case 'Thủy':
      return { name: 'Thủy Nhị Cục', number: 2, element: 'Thủy' };
    case 'Mộc':
      return { name: 'Mộc Tam Cục', number: 3, element: 'Mộc' };
    case 'Kim':
      return { name: 'Kim Tứ Cục', number: 4, element: 'Kim' };
    case 'Thổ':
      return { name: 'Thổ Ngũ Cục', number: 5, element: 'Thổ' };
    case 'Hỏa':
      return { name: 'Hỏa Lục Cục', number: 6, element: 'Hỏa' };
  }
}

/**
 * Gán Can cho 12 cung Tý -> Hợi dựa trên Can năm sinh (Ngũ hổ độn từ Dần)
 */
export function getPalaceCans(yearCan: Can): Can[] {
  const danCanInfo = getMonthCanChi(yearCan, 1);
  const danCanIndex = CAN_LIST.indexOf(danCanInfo.can);

  const cans: Can[] = new Array(12);
  // Dần là index 2
  for (let i = 0; i < 12; i++) {
    const distFromDan = (i - 2 + 12) % 12;
    cans[i] = CAN_LIST[(danCanIndex + distFromDan) % 10];
  }
  return cans;
}

/**
 * Tính Cung chức năng (Mệnh, Phụ Mẫu, Phúc Đức...) cho 12 cung
 */
export function getPalaceNames(menhChiIndex: number): string[] {
  const names: string[] = new Array(12);
  for (let i = 0; i < 12; i++) {
    const roleIndex = (i - menhChiIndex + 12) % 12;
    names[i] = PALACE_NAMES[roleIndex];
  }
  return names;
}
