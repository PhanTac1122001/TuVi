import { Can, Chi, NguHanh, NapAmInfo } from '../types/tuvi.types';
import { CAN_LIST, CHI_LIST, jdn } from './lunarCalendar';

export function getYearCanChi(lunarYear: number): { can: Can; chi: Chi; canIndex: number; chiIndex: number } {
  let canIndex = (lunarYear + 6) % 10;
  if (canIndex < 0) canIndex += 10;
  let chiIndex = (lunarYear + 8) % 12;
  if (chiIndex < 0) chiIndex += 12;

  return {
    can: CAN_LIST[canIndex],
    chi: CHI_LIST[chiIndex],
    canIndex,
    chiIndex
  };
}

export function getMonthCanChi(yearCan: Can, lunarMonth: number): { can: Can; chi: Chi; canIndex: number; chiIndex: number } {
  const yearCanIndex = CAN_LIST.indexOf(yearCan);
  const chiIndex = (lunarMonth + 1) % 12; // Tháng 1 là Dần (index 2)
  const canIndex = (yearCanIndex * 2 + lunarMonth + 1) % 10;

  return {
    can: CAN_LIST[canIndex],
    chi: CHI_LIST[chiIndex],
    canIndex,
    chiIndex
  };
}

export function getDayCanChi(day: number, month: number, year: number): { can: Can; chi: Chi; canIndex: number; chiIndex: number } {
  const dayNumber = jdn(day, month, year);
  let canIndex = (dayNumber + 9) % 10;
  if (canIndex < 0) canIndex += 10;
  let chiIndex = (dayNumber + 1) % 12;
  if (chiIndex < 0) chiIndex += 12;

  return {
    can: CAN_LIST[canIndex],
    chi: CHI_LIST[chiIndex],
    canIndex,
    chiIndex
  };
}

export function getHourCanChi(dayCan: Can, hourChi: Chi): { can: Can; chi: Chi; canIndex: number; chiIndex: number } {
  const dayCanIndex = CAN_LIST.indexOf(dayCan);
  const hourChiIndex = CHI_LIST.indexOf(hourChi);
  const hourCanIndex = (dayCanIndex * 2 + hourChiIndex) % 10;

  return {
    can: CAN_LIST[hourCanIndex],
    chi: hourChi,
    canIndex: hourCanIndex,
    chiIndex: hourChiIndex
  };
}

// Bảng Ngũ Hành Nạp Âm 60 Hoa Giáp
const NAP_AM_TABLE: Record<string, NapAmInfo> = {
  'Giáp Tý': { name: 'Hải Trung Kim', element: 'Kim' },
  'Ất Sửu': { name: 'Hải Trung Kim', element: 'Kim' },
  'Bính Dần': { name: 'Lư Trung Hỏa', element: 'Hỏa' },
  'Đinh Mão': { name: 'Lư Trung Hỏa', element: 'Hỏa' },
  'Mậu Thìn': { name: 'Đại Lâm Mộc', element: 'Mộc' },
  'Kỷ Tỵ': { name: 'Đại Lâm Mộc', element: 'Mộc' },
  'Canh Ngọ': { name: 'Lộ Bàng Thổ', element: 'Thổ' },
  'Tân Mùi': { name: 'Lộ Bàng Thổ', element: 'Thổ' },
  'Nhâm Thân': { name: 'Kiếm Phong Kim', element: 'Kim' },
  'Quý Dậu': { name: 'Kiếm Phong Kim', element: 'Kim' },
  'Giáp Tuất': { name: 'Sơn Đầu Hỏa', element: 'Hỏa' },
  'Ất Hợi': { name: 'Sơn Đầu Hỏa', element: 'Hỏa' },
  'Bính Tý': { name: 'Giản Hạ Thủy', element: 'Thủy' },
  'Đinh Sửu': { name: 'Giản Hạ Thủy', element: 'Thủy' },
  'Mậu Dần': { name: 'Thành Đầu Thổ', element: 'Thổ' },
  'Kỷ Mão': { name: 'Thành Đầu Thổ', element: 'Thổ' },
  'Canh Thìn': { name: 'Bạch Lạp Kim', element: 'Kim' },
  'Tân Tỵ': { name: 'Bạch Lạp Kim', element: 'Kim' },
  'Nhâm Ngọ': { name: 'Dương Liễu Mộc', element: 'Mộc' },
  'Quý Mùi': { name: 'Dương Liễu Mộc', element: 'Mộc' },
  'Giáp Thân': { name: 'Tuyền Trung Thủy', element: 'Thủy' },
  'Ất Dậu': { name: 'Tuyền Trung Thủy', element: 'Thủy' },
  'Bính Tuất': { name: 'Ốc Thượng Thổ', element: 'Thổ' },
  'Đinh Hợi': { name: 'Ốc Thượng Thổ', element: 'Thổ' },
  'Mậu Tý': { name: 'Tích Lịch Hỏa', element: 'Hỏa' },
  'Kỷ Sửu': { name: 'Tích Lịch Hỏa', element: 'Hỏa' },
  'Canh Dần': { name: 'Tùng Bách Mộc', element: 'Mộc' },
  'Tân Mão': { name: 'Tùng Bách Mộc', element: 'Mộc' },
  'Nhâm Thìn': { name: 'Trường Lưu Thủy', element: 'Thủy' },
  'Quý Tỵ': { name: 'Trường Lưu Thủy', element: 'Thủy' },
  'Giáp Ngọ': { name: 'Sa Trung Kim', element: 'Kim' },
  'Ất Mùi': { name: 'Sa Trung Kim', element: 'Kim' },
  'Bính Thân': { name: 'Sơn Hạ Hỏa', element: 'Hỏa' },
  'Đinh Dậu': { name: 'Sơn Hạ Hỏa', element: 'Hỏa' },
  'Mậu Tuất': { name: 'Bình Địa Mộc', element: 'Mộc' },
  'Kỷ Hợi': { name: 'Bình Địa Mộc', element: 'Mộc' },
  'Canh Tý': { name: 'Bích Thượng Thổ', element: 'Thổ' },
  'Tân Sửu': { name: 'Bích Thượng Thổ', element: 'Thổ' },
  'Nhâm Dần': { name: 'Kim Bạch Kim', element: 'Kim' },
  'Quý Mão': { name: 'Kim Bạch Kim', element: 'Kim' },
  'Giáp Thìn': { name: 'Phú Đăng Hỏa', element: 'Hỏa' },
  'Ất Tỵ': { name: 'Phú Đăng Hỏa', element: 'Hỏa' },
  'Bính Ngọ': { name: 'Thiên Hà Thủy', element: 'Thủy' },
  'Đinh Mùi': { name: 'Thiên Hà Thủy', element: 'Thủy' },
  'Mậu Thân': { name: 'Đại Trạch Thổ', element: 'Thổ' },
  'Kỷ Dậu': { name: 'Đại Trạch Thổ', element: 'Thổ' },
  'Canh Tuất': { name: 'Thoa Xuyến Kim', element: 'Kim' },
  'Tân Hợi': { name: 'Thoa Xuyến Kim', element: 'Kim' },
  'Nhâm Tý': { name: 'Tang Đố Mộc', element: 'Mộc' },
  'Quý Sửu': { name: 'Tang Đố Mộc', element: 'Mộc' },
  'Giáp Dần': { name: 'Đại Khê Thủy', element: 'Thủy' },
  'Ất Mão': { name: 'Đại Khê Thủy', element: 'Thủy' },
  'Bính Thìn': { name: 'Sa Trung Thổ', element: 'Thổ' },
  'Đinh Tỵ': { name: 'Sa Trung Thổ', element: 'Thổ' },
  'Mậu Ngọ': { name: 'Thiên Thượng Hỏa', element: 'Hỏa' },
  'Kỷ Mùi': { name: 'Thiên Thượng Hỏa', element: 'Hỏa' },
  'Canh Thân': { name: 'Thạch Lựu Mộc', element: 'Mộc' },
  'Tân Dậu': { name: 'Thạch Lựu Mộc', element: 'Mộc' },
  'Nhâm Tuất': { name: 'Đại Hải Thủy', element: 'Thủy' },
  'Quý Hợi': { name: 'Đại Hải Thủy', element: 'Thủy' }
};

export function getNapAm(can: Can, chi: Chi): NapAmInfo {
  const key = `${can} ${chi}`;
  return NAP_AM_TABLE[key] || { name: 'Hải Trung Kim', element: 'Kim' };
}
