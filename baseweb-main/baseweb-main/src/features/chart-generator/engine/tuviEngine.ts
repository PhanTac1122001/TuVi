/**
 * Engine An Sao Tử Vi Việt Nam (TuViVietnam.vn Standard)
 */

import { UserInfo, TuViChart, TuViPalace, LunarInfo } from '../types/chart.types';
import { convertSolarToLunar, convertLunarToSolar, CAN, CHI } from './lunarCalendar';
import { STAR_METADATA } from './starMetadata';

export const PALACE_NAMES = [
  'Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch',
  'Quan Lộc', 'Nô Bộc', 'Thiên Di', 'Tật Ách',
  'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ'
];

export const CAN_SHORTHAND: Record<string, string> = {
  'Giáp': 'G.', 'Ất': 'Á.', 'Bính': 'B.', 'Đinh': 'Đ.', 'Mậu': 'M.',
  'Kỷ': 'K.', 'Canh': 'C.', 'Tân': 'T.', 'Nhâm': 'N.', 'Quý': 'Q.'
};

export const NAP_AM_NAMES: Record<string, string> = {
  'Giáp Tý': 'Hải Trung Kim', 'Ất Sửu': 'Hải Trung Kim',
  'Bính Dần': 'Lư Trung Hỏa', 'Đinh Mão': 'Lư Trung Hỏa',
  'Mậu Thìn': 'Đại Lâm Mộc', 'Kỷ Tỵ': 'Đại Lâm Mộc',
  'Canh Ngọ': 'Lộ Bàng Thổ', 'Tân Mùi': 'Lộ Bàng Thổ',
  'Nhâm Thân': 'Kiếm Phong Kim', 'Quý Dậu': 'Kiếm Phong Kim',
  'Giáp Tuất': 'Sơn Đầu Hỏa', 'Ất Hợi': 'Sơn Đầu Hỏa',
  'Bính Tý': 'Giản Hạ Thủy', 'Đinh Sửu': 'Giản Hạ Thủy',
  'Mậu Dần': 'Thành Đầu Thổ', 'Kỷ Mão': 'Thành Đầu Thổ',
  'Canh Thìn': 'Bạch Lạp Kim', 'Tân Tỵ': 'Bạch Lạp Kim',
  'Nhâm Ngọ': 'Dương Liễu Mộc', 'Quý Mùi': 'Dương Liễu Mộc',
  'Giáp Thân': 'Tuyền Trung Thủy', 'Ất Dậu': 'Tuyền Trung Thủy',
  'Bính Tuất': 'Ốc Thượng Thổ', 'Đinh Hợi': 'Ốc Thượng Thổ',
  'Mậu Tý': 'Tích Lịch Hỏa', 'Kỷ Sửu': 'Tích Lịch Hỏa',
  'Canh Dần': 'Tùng Bách Mộc', 'Tân Mão': 'Tùng Bách Mộc',
  'Nhâm Thìn': 'Trường Lưu Thủy', 'Quý Tỵ': 'Trường Lưu Thủy',
  'Giáp Ngọ': 'Sa Trung Kim', 'Ất Mùi': 'Sa Trung Kim',
  'Bính Thân': 'Sơn Hạ Hỏa', 'Đinh Dậu': 'Sơn Hạ Hỏa',
  'Mậu Tuất': 'Bình Địa Mộc', 'Kỷ Hợi': 'Bình Địa Mộc',
  'Canh Tý': 'Bích Thượng Thổ', 'Tân Sửu': 'Bích Thượng Thổ',
  'Nhâm Dần': 'Kim Bạch Kim', 'Quý Mão': 'Kim Bạch Kim',
  'Giáp Thìn': 'Phúc Đăng Hỏa', 'Ất Tỵ': 'Phúc Đăng Hỏa',
  'Bính Ngọ': 'Thiên Hà Thủy', 'Đinh Mùi': 'Thiên Hà Thủy',
  'Mậu Thân': 'Đại Trạch Thổ', 'Kỷ Dậu': 'Đại Trạch Thổ',
  'Canh Tuất': 'Thoa Xuyên Kim', 'Tân Hợi': 'Thoa Xuyên Kim',
  'Nhâm Tý': 'Tang Đố Mộc', 'Quý Sửu': 'Tang Đố Mộc',
  'Giáp Dần': 'Đại Khê Thủy', 'Ất Mão': 'Đại Khê Thủy',
  'Bính Thìn': 'Sa Trung Thổ', 'Đinh Tỵ': 'Sa Trung Thổ',
  'Mậu Ngọ': 'Thiên Thượng Hỏa', 'Kỷ Mùi': 'Thiên Thượng Hỏa',
  'Canh Thân': 'Thạch Lựu Mộc', 'Tân Dậu': 'Thạch Lựu Mộc',
  'Nhâm Tuất': 'Đại Hải Thủy', 'Quý Hợi': 'Đại Hải Thủy'
};

export const STAR_BRIGHTNESS: Record<string, string[]> = {
  'Tử Vi': ['B', 'Đ', 'M', 'B', 'V', 'M', 'M', 'Đ', 'M', 'B', 'V', 'B'],
  'Thiên Cơ': ['Đ', 'Đ', 'H', 'M', 'M', 'V', 'Đ', 'Đ', 'V', 'M', 'M', 'H'],
  'Thái Dương': ['H', 'Đ', 'V', 'V', 'V', 'M', 'M', 'Đ', 'H', 'H', 'H', 'H'],
  'Vũ Khúc': ['V', 'M', 'V', 'Đ', 'M', 'H', 'V', 'M', 'V', 'Đ', 'M', 'H'],
  'Thiên Đồng': ['V', 'H', 'M', 'Đ', 'H', 'Đ', 'H', 'H', 'M', 'H', 'H', 'Đ'],
  'Liêm Trinh': ['V', 'Đ', 'V', 'H', 'M', 'H', 'V', 'Đ', 'V', 'H', 'M', 'H'],
  'Thiên Phủ': ['M', 'M', 'M', 'B', 'V', 'Đ', 'M', 'M', 'M', 'B', 'V', 'Đ'],
  'Thái Âm': ['V', 'Đ', 'H', 'H', 'H', 'H', 'H', 'Đ', 'V', 'M', 'M', 'M'],
  'Tham Lang': ['H', 'M', 'Đ', 'H', 'V', 'H', 'H', 'M', 'Đ', 'H', 'V', 'H'],
  'Cự Môn': ['V', 'H', 'V', 'M', 'H', 'H', 'V', 'H', 'Đ', 'M', 'H', 'Đ'],
  'Thiên Tướng': ['V', 'Đ', 'M', 'H', 'V', 'Đ', 'V', 'Đ', 'M', 'H', 'V', 'Đ'],
  'Thiên Lương': ['V', 'Đ', 'M', 'V', 'M', 'H', 'M', 'Đ', 'M', 'H', 'M', 'H'],
  'Thất Sát': ['M', 'Đ', 'M', 'H', 'H', 'V', 'M', 'Đ', 'M', 'H', 'H', 'V'],
  'Phá Quân': ['M', 'V', 'H', 'H', 'Đ', 'H', 'M', 'V', 'H', 'H', 'Đ', 'H']
};

export const AUX_STAR_BRIGHTNESS: Record<string, Record<number, string>> = {
  'Lộc Tồn': { 0: 'M', 2: 'B', 3: 'B', 6: 'M', 8: 'B', 9: 'B' },
  'Thiên Mã': { 2: 'Đ', 5: 'Đ', 8: 'Đ', 11: 'H' },
  'Kình Dương': { 1: 'Đ', 4: 'Đ', 7: 'Đ', 10: 'Đ', 0: 'H', 2: 'H', 3: 'H', 5: 'H', 6: 'H', 8: 'H', 9: 'H', 11: 'H' },
  'Đà La': { 1: 'Đ', 4: 'Đ', 7: 'Đ', 10: 'Đ', 0: 'H', 2: 'H', 3: 'H', 5: 'H', 6: 'H', 8: 'H', 9: 'H', 11: 'H' },
  'Hỏa Tinh': { 2: 'Đ', 4: 'Đ', 5: 'Đ', 6: 'Đ', 10: 'Đ', 0: 'H', 1: 'H', 3: 'H', 7: 'H', 8: 'H', 9: 'H', 11: 'H' },
  'Linh Tinh': { 2: 'Đ', 3: 'Đ', 5: 'Đ', 6: 'Đ', 0: 'H', 1: 'H', 4: 'H', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' },
  'Địa Kiếp': { 2: 'Đ', 5: 'Đ', 8: 'Đ', 11: 'Đ', 0: 'H', 1: 'H', 3: 'H', 4: 'H', 6: 'H', 7: 'H', 9: 'H', 10: 'H' },
  'Địa Không': { 2: 'Đ', 5: 'Đ', 8: 'Đ', 11: 'Đ', 0: 'H', 1: 'H', 3: 'H', 4: 'H', 6: 'H', 7: 'H', 9: 'H', 10: 'H' },
  'Tang Môn': { 2: 'Đ', 3: 'Đ', 8: 'Đ', 9: 'Đ', 0: 'H', 1: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 10: 'H', 11: 'H' },
  'Bạch Hổ': { 2: 'Đ', 3: 'Đ', 8: 'Đ', 9: 'Đ', 0: 'H', 1: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 10: 'H', 11: 'H' },
  'Thiên Khốc': { 0: 'Đ', 3: 'Đ', 6: 'Đ', 9: 'Đ', 1: 'H', 2: 'H', 4: 'H', 5: 'H', 7: 'H', 8: 'H', 10: 'H', 11: 'H' },
  'Thiên Hư': { 0: 'Đ', 3: 'Đ', 6: 'Đ', 9: 'Đ', 1: 'H', 2: 'H', 4: 'H', 5: 'H', 7: 'H', 8: 'H', 10: 'H', 11: 'H' },
  'Tiểu Hao': { 2: 'Đ', 3: 'Đ', 8: 'Đ', 9: 'Đ', 0: 'H', 1: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 10: 'H', 11: 'H' },
  'Đại Hao': { 2: 'Đ', 3: 'Đ', 8: 'Đ', 9: 'Đ', 0: 'H', 1: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 10: 'H', 11: 'H' },
  'Thiên Hình': { 2: 'Đ', 3: 'Đ', 8: 'Đ', 9: 'Đ', 10: 'Đ', 0: 'H', 1: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 11: 'H' },
  'Thiên Diêu': { 3: 'Đ', 9: 'Đ', 10: 'Đ', 0: 'H', 1: 'H', 2: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 8: 'H', 11: 'H' },
  'Văn Xương': { 1: 'Đ', 4: 'Đ', 5: 'Đ', 7: 'Đ', 10: 'Đ', 11: 'Đ', 2: 'H', 3: 'H', 8: 'H', 9: 'H' },
  'Văn Khúc': { 1: 'Đ', 4: 'Đ', 5: 'Đ', 7: 'Đ', 10: 'Đ', 11: 'Đ', 2: 'H', 3: 'H', 8: 'H', 9: 'H' },
  'Hóa Lộc': { 0: 'B', 1: 'B', 2: 'V', 3: 'V', 4: 'M', 5: 'M', 6: 'Đ', 7: 'B', 8: 'B', 9: 'B', 10: 'V', 11: 'H' },
  'Hóa Quyền': { 0: 'H', 1: 'B', 2: 'M', 3: 'Đ', 4: 'V', 5: 'M', 6: 'B', 7: 'V', 8: 'M', 9: 'Đ', 10: 'V', 11: 'M' },
  'Hóa Khoa': { 0: 'B', 1: 'B', 2: 'V', 3: 'V', 4: 'B', 5: 'B', 6: 'Đ', 7: 'B', 8: 'Đ', 9: 'H', 10: 'V', 11: 'B' },
  'Hóa Kỵ': { 0: 'B', 1: 'H', 2: 'Đ', 3: 'H', 4: 'Đ', 5: 'H', 6: 'H', 7: 'Đ', 8: 'Đ', 9: 'H', 10: 'Đ', 11: 'B' }
};

export const CHU_MENH: Record<number, string> = {
  0: 'Tham Lang', 1: 'Cự Môn', 2: 'Lộc Tồn', 3: 'Văn Khúc',
  4: 'Liêm Trinh', 5: 'Vũ Khúc', 6: 'Phá Quân', 7: 'Vũ Khúc',
  8: 'Liêm Trinh', 9: 'Văn Khúc', 10: 'Lộc Tồn', 11: 'Cự Môn'
};

export const CHU_THAN: Record<number, string> = {
  0: 'Linh Tinh', 1: 'Thiên Tướng', 2: 'Thiên Lương', 3: 'Thiên Đồng',
  4: 'Văn Xương', 5: 'Thiên Cơ', 6: 'Hỏa Tinh', 7: 'Thiên Tướng',
  8: 'Thiên Lương', 9: 'Thiên Đồng', 10: 'Văn Xương', 11: 'Thiên Cơ'
};

export function getNapAm(canName: string, chiName: string): { name: string; element: string } {
  const key = `${canName} ${chiName}`;
  const fullName = NAP_AM_NAMES[key] || 'Thành Đầu Thổ';
  let element = 'Thổ';
  if (fullName.includes('Kim')) element = 'Kim';
  else if (fullName.includes('Mộc')) element = 'Mộc';
  else if (fullName.includes('Thủy')) element = 'Thủy';
  else if (fullName.includes('Hỏa')) element = 'Hỏa';
  else if (fullName.includes('Thổ')) element = 'Thổ';
  return { name: fullName, element };
}

export function calculateCuc(menhCanName: string, menhChiName: string): { name: string; value: number; element: string } {
  const napAm = getNapAm(menhCanName, menhChiName);
  const CUC_MAP: Record<string, { name: string; value: number; element: string }> = {
    'Thủy': { name: 'Thủy nhị cục', value: 2, element: 'Thủy' },
    'Mộc': { name: 'Mộc tam cục', value: 3, element: 'Mộc' },
    'Kim': { name: 'Kim tứ cục', value: 4, element: 'Kim' },
    'Thổ': { name: 'Thổ ngũ cục', value: 5, element: 'Thổ' },
    'Hỏa': { name: 'Hỏa lục cục', value: 6, element: 'Hỏa' }
  };

  return CUC_MAP[napAm.element] || CUC_MAP['Thủy'];
}

export function generateTuViChart(userInfo: UserInfo): TuViChart {
  const {
    name = '',
    day,
    month,
    year,
    hour = 12,
    minute = 0,
    gender = 'Nam',
    viewYear = 2026,
    calendarType = 'duong',
    isLeapMonth = false,
    timezone = 7,
    showHanNam = false,
    luuTuHoa = true,
    luuTuanTriet = true,
    luuDaiVan = true,
    luuSaoKhac = true,
    locKyNhap = true,
    khoaQuyenNhap = true,
    xemVanTheo = 'LuuNien'
  } = userInfo;

  const normalizedHour = Math.floor(hour);
  const normalizedMinute = (minute !== undefined && minute !== 0) ? minute : Math.round((hour - normalizedHour) * 60);

  let lunar: LunarInfo;
  let solarDay = day;
  let solarMonth = month;
  let solarYear = year;

  if (calendarType === 'am') {
    const [sd, sm, sy] = convertLunarToSolar(day, month, year, isLeapMonth ? 1 : 0, timezone);
    if (sd > 0 && sm > 0 && sy > 0) {
      solarDay = sd;
      solarMonth = sm;
      solarYear = sy;
      lunar = convertSolarToLunar(sd, sm, sy, normalizedHour, normalizedMinute, timezone);
    } else {
      lunar = convertSolarToLunar(day, month, year, normalizedHour, normalizedMinute, timezone);
    }
  } else {
    lunar = convertSolarToLunar(day, month, year, normalizedHour, normalizedMinute, timezone);
  }

  const { yearCan, yearChi, yearCanIndex, yearChiIndex, lunarMonth, hourChiIndex, lunarDay } = lunar;

  const isDungCan = ['Giáp', 'Bính', 'Mậu', 'Canh', 'Nhâm'].includes(yearCan);
  const isMale = gender === 'Nam';
  const isForward = (isDungCan && isMale) || (!isDungCan && !isMale);

  const napAmMenh = getNapAm(yearCan, yearChi);

  // Mệnh & Thân Positions
  const menhIndex = (2 + (lunarMonth - 1) - hourChiIndex + 120) % 12;
  const thanIndex = (2 + (lunarMonth - 1) + hourChiIndex) % 12;

  // Initialize 12 Palaces with Ngũ Hổ Độn Standard (Starts from Dần)
  const palaces: TuViPalace[] = [];
  const ngoHoTanStartMap: Record<string, number> = {
    'Giáp': 2, 'Kỷ': 2, 'Ất': 4, 'Canh': 4, 'Bính': 6, 'Tân': 6, 'Đinh': 8, 'Nhâm': 8, 'Mậu': 0, 'Quý': 0
  };
  const ngoHoTanStart = ngoHoTanStartMap[yearCan] ?? 2;

  for (let i = 0; i < 12; i++) {
    const palaceNameIndex = (i - menhIndex + 120) % 12;
    const canIndex = (ngoHoTanStart + (i - 2 + 12) % 12) % 10;
    const canStr = CAN[canIndex];
    const chiStr = CHI[i];

    palaces.push({
      index: i,
      chi: chiStr,
      can: canStr,
      canShorthand: CAN_SHORTHAND[canStr] || canStr,
      name: PALACE_NAMES[palaceNameIndex],
      isMenh: i === menhIndex,
      isThan: i === thanIndex,
      majorStars: [],
      minorStars: [],
      trangSinhStar: '',
      tuan: false,
      triet: false,
      daiVan: 0,
      tieuVanChi: '',
      tieuVanMonth: ''
    });
  }

  // 1. Calculate Bottom-Left Chi (Địa Chi Tiểu Vận - Chuẩn Nam Phái TuViVietnam.vn)
  const startPalaceMap: Record<number, number> = {
    2: 4, 6: 4, 10: 4,   // Dần, Ngọ, Tuất -> Thìn (4)
    8: 10, 0: 10, 4: 10, // Thân, Tý, Thìn -> Tuất (10)
    5: 7, 9: 7, 1: 7,    // Tỵ, Dậu, Sửu -> Mùi (7)
    11: 1, 3: 1, 7: 1    // Hợi, Mão, Mùi -> Sửu (1)
  };
  const startPalace = startPalaceMap[yearChiIndex] !== undefined ? startPalaceMap[yearChiIndex] : 4;

  for (let i = 0; i < 12; i++) {
    const step = isMale
      ? (i - startPalace + 12) % 12
      : (startPalace - i + 12) % 12;
    const chiIdx = (yearChiIndex + step) % 12;
    const rawChi = CHI[chiIdx];
    palaces[i].tieuVanChi = (rawChi === 'Tý') ? 'Tí' : rawChi;
  }

  // 2. Calculate Bottom-Right Month (Nguyệt Hạn - Chuẩn Nam Phái TuViVietnam.vn)
  const viewYearChiIndex = (viewYear + 8) % 12;
  const viewYearChiName = (CHI[viewYearChiIndex] === 'Tý') ? 'Tí' : CHI[viewYearChiIndex];
  const viewYearCanIndex = (viewYear + 6) % 10;
  const viewYearCanName = CAN[viewYearCanIndex];
  const viewYearCanChi = `${viewYearCanName} ${viewYearChiName}`;

  let pView = 0;
  for (let i = 0; i < 12; i++) {
    if (palaces[i].tieuVanChi === viewYearChiName || (viewYearChiName === 'Tí' && palaces[i].tieuVanChi === 'Tý')) {
      pView = i;
      break;
    }
  }

  const pMonth1 = (pView - (lunarMonth - 1) + hourChiIndex + 120) % 12;
  for (let i = 0; i < 12; i++) {
    const monthNum = ((i - pMonth1 + 120) % 12) + 1;
    palaces[i].tieuVanMonth = `Tháng ${monthNum}`;
  }

  const cuc = calculateCuc(palaces[menhIndex].can, palaces[menhIndex].chi);

  // An Sao Tử Vi
  const C = cuc.value;
  let tuViIndex = 0;
  if (lunarDay % C === 0) {
    const K = lunarDay / C;
    tuViIndex = (2 + K - 1) % 12;
  } else {
    const R = lunarDay % C;
    const X = C - R;
    const K = Math.floor((lunarDay + X) / C);
    if (X % 2 !== 0) {
      tuViIndex = (2 + K - 1 - X + 120) % 12;
    } else {
      tuViIndex = (2 + K - 1 + X) % 12;
    }
  }

  // An 6 sao Vòng Tử Vi
  const tuViStars = [
    { name: 'Tử Vi', offset: 0 },
    { name: 'Thiên Cơ', offset: -1 },
    { name: 'Thái Dương', offset: -3 },
    { name: 'Vũ Khúc', offset: -4 },
    { name: 'Thiên Đồng', offset: -5 },
    { name: 'Liêm Trinh', offset: -8 }
  ];

  tuViStars.forEach(s => {
    const idx = (tuViIndex + s.offset + 120) % 12;
    const strength = STAR_BRIGHTNESS[s.name] ? STAR_BRIGHTNESS[s.name][idx] : 'Đ';
    const meta = STAR_METADATA[s.name] || { element: 'Thổ', type: 'Major' };
    palaces[idx].majorStars.push({ name: s.name, strength, element: meta.element });
  });

  // An 8 sao Vòng Thiên Phủ
  const thienPhuIndex = (4 - tuViIndex + 120) % 12;
  const thienPhuStars = [
    { name: 'Thiên Phủ', offset: 0 },
    { name: 'Thái Âm', offset: 1 },
    { name: 'Tham Lang', offset: 2 },
    { name: 'Cự Môn', offset: 3 },
    { name: 'Thiên Tướng', offset: 4 },
    { name: 'Thiên Lương', offset: 5 },
    { name: 'Thất Sát', offset: 6 },
    { name: 'Phá Quân', offset: 10 }
  ];

  thienPhuStars.forEach(s => {
    const idx = (thienPhuIndex + s.offset) % 12;
    const strength = STAR_BRIGHTNESS[s.name] ? STAR_BRIGHTNESS[s.name][idx] : 'Đ';
    const meta = STAR_METADATA[s.name] || { element: 'Thổ', type: 'Major' };
    palaces[idx].majorStars.push({ name: s.name, strength, element: meta.element });
  });

  // An Tuần & Triệt (Authentic Standard)
  const trietPairs: Record<string, number[]> = {
    'Giáp': [8, 9], 'Kỷ': [8, 9],
    'Ất': [6, 7], 'Canh': [6, 7],
    'Bính': [4, 5], 'Tân': [4, 5],
    'Đinh': [2, 3], 'Nhâm': [2, 3],
    'Mậu': [0, 1], 'Quý': [0, 1]
  };
  (trietPairs[yearCan] || [4, 5]).forEach(idx => palaces[idx].triet = true);

  // Tuần Không = (yearChiIndex - yearCanIndex + 10 + 12) % 12
  const tuanStart = (yearChiIndex - yearCanIndex + 10 + 12) % 12;
  palaces[tuanStart].tuan = true;
  palaces[(tuanStart + 1) % 12].tuan = true;

  // Helper to add minor star with strength tag
  const addMinorStar = (palaceIdx: number, sName: string) => {
    const meta = STAR_METADATA[sName] || { element: 'Thổ', type: 'Good' };
    let displayName = sName;
    if (AUX_STAR_BRIGHTNESS[sName] && AUX_STAR_BRIGHTNESS[sName][palaceIdx]) {
      displayName += `(${AUX_STAR_BRIGHTNESS[sName][palaceIdx]})`;
    }
    palaces[palaceIdx].minorStars.push({
      name: displayName,
      rawName: sName,
      element: meta.element,
      type: meta.type
    });
  };

  // 1. Lộc Tồn & 12 Sao Vòng Bác Sĩ
  const locTonPosMap: Record<string, number> = {
    'Giáp': 2, 'Ất': 3, 'Bính': 5, 'Mậu': 5, 'Đinh': 6, 'Kỷ': 6, 'Canh': 8, 'Tân': 9, 'Nhâm': 11, 'Quý': 0
  };
  const locTonPos = locTonPosMap[yearCan] ?? 2;
  const dir = isForward ? 1 : -1;

  const bacSiRing = ['Bác Sĩ', 'Lực Sĩ', 'Thanh Long', 'Tiểu Hao', 'Tướng Quân', 'Tấu Thư', 'Phi Liêm', 'Hỷ Thần', 'Bệnh Phù', 'Đại Hao', 'Phục Binh', 'Quan Phủ'];
  bacSiRing.forEach((sName, i) => {
    const idx = (locTonPos + i * dir + 120) % 12;
    addMinorStar(idx, sName);
  });

  addMinorStar(locTonPos, 'Lộc Tồn');
  addMinorStar((locTonPos + 1) % 12, 'Kình Dương');
  addMinorStar((locTonPos - 1 + 12) % 12, 'Đà La');

  // 2. Vòng Thái Tuế
  const thaiTueRing = ['Thái Tuế', 'Thiếu Dương', 'Tang Môn', 'Thiếu Âm', 'Quan Phù', 'Tử Phù', 'Tuế Phá', 'Long Đức', 'Bạch Hổ', 'Phúc Đức', 'Điếu Khách', 'Trực Phù'];
  thaiTueRing.forEach((sName, i) => {
    const idx = (yearChiIndex + i) % 12;
    addMinorStar(idx, sName);
  });

  // 3. Vòng Tràng Sinh
  const trangSinhStartMap: Record<number, number> = { 2: 8, 5: 8, 3: 11, 4: 5, 6: 2 };
  const trangSinhStart = trangSinhStartMap[cuc.value] ?? 8;
  const trangSinhRing = ['Tràng Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy', 'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'];
  trangSinhRing.forEach((sName, i) => {
    const idx = (trangSinhStart + i * dir + 120) % 12;
    palaces[idx].trangSinhStar = sName;
  });

  // 4. Phụ Tinh Theo Giờ
  const xuongPos = (10 - hourChiIndex + 12) % 12;
  const khucPos = (4 + hourChiIndex) % 12;
  addMinorStar(xuongPos, 'Văn Xương');
  addMinorStar(khucPos, 'Văn Khúc');

  const khongPos = (11 - hourChiIndex + 12) % 12;
  const kiepPos = (11 + hourChiIndex) % 12;
  addMinorStar(khongPos, 'Địa Không');
  addMinorStar(kiepPos, 'Địa Kiếp');

  // Hỏa Tinh, Linh Tinh
  const hoaStartMap: Record<number, number> = { 2: 1, 6: 1, 10: 1, 8: 2, 0: 2, 4: 2, 5: 3, 9: 3, 1: 3, 11: 9, 3: 9, 7: 9 };
  const hoaStart = hoaStartMap[yearChiIndex] || 1;
  const hoaPos = isForward ? (hoaStart + hourChiIndex) % 12 : (hoaStart - hourChiIndex + 120) % 12;
  
  const linhStartMap: Record<number, number> = { 2: 3, 6: 3, 10: 3, 8: 10, 0: 10, 4: 10, 5: 10, 9: 10, 1: 10, 11: 10, 3: 10, 7: 10 };
  const linhStart = linhStartMap[yearChiIndex] || 3;
  const linhPos = isForward ? (linhStart - hourChiIndex + 120) % 12 : (linhStart + hourChiIndex) % 12;
  addMinorStar(hoaPos, 'Hỏa Tinh');
  addMinorStar(linhPos, 'Linh Tinh');

  // 5. Phụ Tinh Theo Can Năm
  const khoiPosMap: Record<string, number> = { 'Giáp': 1, 'Ất': 0, 'Bính': 11, 'Đinh': 11, 'Mậu': 1, 'Kỷ': 0, 'Canh': 6, 'Tân': 2, 'Nhâm': 3, 'Quý': 3 };
  const vietPosMap: Record<string, number> = { 'Giáp': 7, 'Ất': 8, 'Bính': 9, 'Đinh': 9, 'Mậu': 7, 'Kỷ': 8, 'Canh': 2, 'Tân': 6, 'Nhâm': 5, 'Quý': 5 };
  addMinorStar(khoiPosMap[yearCan] ?? 1, 'Thiên Khôi');
  addMinorStar(vietPosMap[yearCan] ?? 7, 'Thiên Việt');

  addMinorStar((locTonPos + 8) % 12, 'Quốc Ấn');
  addMinorStar((locTonPos - 7 + 120) % 12, 'Đường Phù');

  const quanPosMap: Record<string, number> = { 'Giáp': 7, 'Ất': 4, 'Bính': 5, 'Đinh': 2, 'Mậu': 3, 'Kỷ': 9, 'Canh': 11, 'Tân': 9, 'Nhâm': 10, 'Quý': 6 };
  const phucPosMap: Record<string, number> = { 'Giáp': 9, 'Ất': 8, 'Bính': 0, 'Đinh': 11, 'Mậu': 3, 'Kỷ': 2, 'Canh': 6, 'Tân': 5, 'Nhâm': 6, 'Quý': 5 };
  addMinorStar(quanPosMap[yearCan] ?? 7, 'Thiên Quan');
  addMinorStar(phucPosMap[yearCan] ?? 9, 'Thiên Phúc');

  const lnVanTinhMap: Record<string, number> = { 'Giáp': 5, 'Ất': 6, 'Bính': 8, 'Đinh': 9, 'Mậu': 8, 'Kỷ': 9, 'Canh': 11, 'Tân': 0, 'Nhâm': 2, 'Quý': 3 };
  addMinorStar(lnVanTinhMap[yearCan] ?? 5, 'LN Văn Tinh');

  const truPosMap: Record<string, number> = { 'Giáp': 5, 'Ất': 6, 'Bính': 2, 'Đinh': 5, 'Mậu': 6, 'Kỷ': 8, 'Canh': 2, 'Tân': 6, 'Nhâm': 9, 'Quý': 10 };
  addMinorStar(truPosMap[yearCan] ?? 5, 'Thiên Trù');

  const luuHaMap: Record<string, number> = { 'Giáp': 9, 'Ất': 10, 'Bính': 7, 'Đinh': 8, 'Mậu': 5, 'Kỷ': 6, 'Canh': 3, 'Tân': 3, 'Nhâm': 0, 'Quý': 1 };
  addMinorStar(luuHaMap[yearCan] ?? 9, 'Lưu Hà');

  // 6. Phụ Tinh Theo Tháng Sinh
  const taPhuPos = (4 + lunarMonth - 1) % 12;
  const huuBatPos = (10 - (lunarMonth - 1) + 120) % 12;
  addMinorStar(taPhuPos, 'Tả Phù');
  addMinorStar(huuBatPos, 'Hữu Bật');

  const thienGiaiPos = (8 + lunarMonth - 1) % 12;
  const diaGiaiPos = (7 + lunarMonth - 1) % 12;
  addMinorStar(thienGiaiPos, 'Thiên Giải');
  addMinorStar(diaGiaiPos, 'Địa Giải');

  const thienDieuPos = (1 + lunarMonth - 1) % 12;
  addMinorStar(thienDieuPos, 'Thiên Diêu');
  addMinorStar(thienDieuPos, 'Thiên Y');

  const thienHinhPos = (6 + (lunarMonth - 10) + 120) % 12;
  addMinorStar(thienHinhPos, 'Thiên Hình');

  // 7. Phụ Tinh Theo Ngày Sinh
  const tamThaiPos = (taPhuPos + lunarDay - 1) % 12;
  const batToaPos = (huuBatPos - (lunarDay - 1) + 120) % 12;
  addMinorStar(tamThaiPos, 'Tam Thai');
  addMinorStar(batToaPos, 'Bát Tọa');

  const anQuangPos = (xuongPos + lunarDay - 1 - 1 + 120) % 12;
  const thienQuyPos = (khucPos - (lunarDay - 1 - 1) + 120) % 12;
  addMinorStar(anQuangPos, 'Ân Quang');
  addMinorStar(thienQuyPos, 'Thiên Quý');

  const thaiPhuPos = (6 + hourChiIndex) % 12;
  const phongCaoPos = (2 + hourChiIndex) % 12;
  addMinorStar(thaiPhuPos, 'Thai Phụ');
  addMinorStar(phongCaoPos, 'Phong Cáo');

  // 8. Phụ Tinh Theo Chi Năm
  const daoHoaMap: Record<number, number> = { 11: 0, 3: 0, 7: 0, 2: 3, 6: 3, 10: 3, 5: 6, 9: 6, 1: 6, 8: 9, 0: 9, 4: 9 };
  const hongLoanPos = (3 - yearChiIndex + 120) % 12;
  const thienHyPos = (hongLoanPos + 6) % 12;
  addMinorStar(daoHoaMap[yearChiIndex] ?? 0, 'Đào Hoa');
  addMinorStar(hongLoanPos, 'Hồng Loan');
  addMinorStar(thienHyPos, 'Thiên Hỷ');

  const thienMaMap: Record<number, number> = { 2: 8, 6: 8, 10: 8, 8: 2, 0: 2, 4: 2, 5: 11, 9: 11, 1: 11, 11: 5, 3: 5, 7: 5 };
  addMinorStar(thienMaMap[yearChiIndex] ?? 8, 'Thiên Mã');

  const hoaCaiMap: Record<number, number> = { 2: 10, 6: 10, 10: 10, 8: 4, 0: 4, 4: 4, 5: 1, 9: 1, 1: 1, 11: 7, 3: 7, 7: 7 };
  addMinorStar(hoaCaiMap[yearChiIndex] ?? 10, 'Hoa Cái');

  const longTriPos = (4 + yearChiIndex) % 12;
  const phuongCatPos = (10 - yearChiIndex + 120) % 12;
  addMinorStar(longTriPos, 'Long Trì');
  addMinorStar(phuongCatPos, 'Phượng Các');
  addMinorStar(phuongCatPos, 'Giải Thần');

  const nguyetDucPos = (5 + yearChiIndex) % 12;
  const thienDucPos = (9 + yearChiIndex) % 12;
  addMinorStar(nguyetDucPos, 'Nguyệt Đức');
  addMinorStar(thienDucPos, 'Thiên Đức');

  const coThanMap: Record<number, number> = { 11: 2, 0: 2, 1: 2, 2: 5, 3: 5, 4: 5, 5: 8, 6: 8, 7: 8, 8: 11, 9: 11, 10: 11 };
  const quaTuMap: Record<number, number> = { 11: 10, 0: 10, 1: 10, 2: 1, 3: 1, 4: 1, 5: 4, 6: 4, 7: 4, 8: 7, 9: 7, 10: 7 };
  addMinorStar(coThanMap[yearChiIndex] ?? 2, 'Cô Thần');
  addMinorStar(quaTuMap[yearChiIndex] ?? 10, 'Quả Tú');

  const kiepSatMap: Record<number, number> = { 8: 5, 0: 5, 4: 5, 2: 11, 6: 11, 10: 11, 5: 2, 9: 2, 1: 2, 11: 8, 3: 8, 7: 8 };
  const phaToaiMap: Record<number, number> = { 0: 5, 6: 5, 3: 5, 9: 5, 4: 1, 10: 1, 1: 1, 7: 1, 2: 9, 8: 9, 5: 9, 11: 9 };
  addMinorStar(kiepSatMap[yearChiIndex] ?? 5, 'Kiếp Sát');
  addMinorStar(phaToaiMap[yearChiIndex] ?? 5, 'Phá Toái');

  const thienKhocPos = (6 - yearChiIndex + 120) % 12;
  const thienHuPos = (6 + yearChiIndex) % 12;
  addMinorStar(thienKhocPos, 'Thiên Khốc');
  addMinorStar(thienHuPos, 'Thiên Hư');

  // Thiên Thương, Thiên Sứ (Nô Bộc & Tật Ách)
  addMinorStar((menhIndex + 5) % 12, 'Thiên Thương');
  addMinorStar((menhIndex + 7) % 12, 'Thiên Sứ');

  // Thiên La, Địa Võng
  addMinorStar(4, 'Thiên La');
  addMinorStar(10, 'Địa Võng');

  // Thiên Không, Đẩu Quân
  addMinorStar((yearChiIndex + 1) % 12, 'Thiên Không');
  const dauQuanPos = (yearChiIndex - (lunarMonth - 1) + hourChiIndex + 120) % 12;
  addMinorStar(dauQuanPos, 'Đẩu Quân');

  // Thiên Thọ, Thiên Tài
  const thienThoPos = (thanIndex + yearChiIndex) % 12;
  const thienTaiPos = (menhIndex + yearChiIndex) % 12;
  addMinorStar(thienThoPos, 'Thiên Thọ');
  addMinorStar(thienTaiPos, 'Thiên Tài');

  // Tứ Hóa
  const tuHoaMap: Record<string, Record<string, string>> = {
    'Giáp': { 'Liêm Trinh': 'Hóa Lộc', 'Phá Quân': 'Hóa Quyền', 'Vũ Khúc': 'Hóa Khoa', 'Thái Dương': 'Hóa Kỵ' },
    'Ất': { 'Thiên Cơ': 'Hóa Lộc', 'Thiên Lương': 'Hóa Quyền', 'Tả Phù': 'Hóa Khoa', 'Thái Âm': 'Hóa Kỵ' },
    'Bính': { 'Thiên Đồng': 'Hóa Lộc', 'Thiên Cơ': 'Hóa Quyền', 'Văn Xương': 'Hóa Khoa', 'Liêm Trinh': 'Hóa Kỵ' },
    'Đinh': { 'Thái Âm': 'Hóa Lộc', 'Thiên Đồng': 'Hóa Quyền', 'Thiên Cơ': 'Hóa Khoa', 'Cự Môn': 'Hóa Kỵ' },
    'Mậu': { 'Tham Lang': 'Hóa Lộc', 'Thái Âm': 'Hóa Quyền', 'Hữu Bật': 'Hóa Khoa', 'Thiên Cơ': 'Hóa Kỵ' },
    'Kỷ': { 'Vũ Khúc': 'Hóa Lộc', 'Tham Lang': 'Hóa Quyền', 'Thiên Lương': 'Hóa Khoa', 'Văn Khúc': 'Hóa Kỵ' },
    'Canh': { 'Thái Dương': 'Hóa Lộc', 'Vũ Khúc': 'Hóa Quyền', 'Thái Âm': 'Hóa Khoa', 'Thiên Đồng': 'Hóa Kỵ' },
    'Tân': { 'Cự Môn': 'Hóa Lộc', 'Thái Dương': 'Hóa Quyền', 'Văn Khúc': 'Hóa Khoa', 'Văn Xương': 'Hóa Kỵ' },
    'Nhâm': { 'Thiên Lương': 'Hóa Lộc', 'Tử Vi': 'Hóa Quyền', 'Tả Phù': 'Hóa Khoa', 'Vũ Khúc': 'Hóa Kỵ' },
    'Quý': { 'Phá Quân': 'Hóa Lộc', 'Cự Môn': 'Hóa Quyền', 'Thái Âm': 'Hóa Khoa', 'Tham Lang': 'Hóa Kỵ' }
  };

  const tuHoaYear = tuHoaMap[yearCan] || tuHoaMap['Giáp'];
  Object.entries(tuHoaYear).forEach(([starName, tuHoaName]) => {
    palaces.forEach((p, idx) => {
      if (p.majorStars.some(s => s.name === starName) || p.minorStars.some(s => s.rawName === starName)) {
        addMinorStar(idx, tuHoaName);
      }
    });
  });

  // Đại Vận Calculation
  palaces.forEach((p, i) => {
    const steps = isForward ? (i - menhIndex + 12) % 12 : (menhIndex - i + 12) % 12;
    p.daiVan = cuc.value + steps * 10;
  });

  // 9. Tùy biến xem vận (Sao Lưu, Lưu Tứ Hóa, Lưu Tuần Triệt, Lưu Đại Vận, Phi Tinh, Cung Niên Hạn)
  if (showHanNam) {
    const viewYearChiIdx = (viewYear + 8) % 12;
    const viewYearCanIdx = (viewYear + 6) % 10;
    const viewYearCanStr = CAN[viewYearCanIdx];
    const currentAge = (viewYear || 2026) - solarYear + 1;

    // 9.0. Lưu Niên 12 Cung & Tháng Hạn (T1..T12)
    const LN_CUNG_NAMES = [
      'LN. Mệnh', 'LN. P.Mẫu', 'LN. Phúc', 'LN. Điền',
      'LN. Quan', 'LN. Nô', 'LN. Di', 'LN. Tật',
      'LN. Tài', 'LN. Tử', 'LN. Thê', 'LN. Bào'
    ];
    for (let i = 0; i < 12; i++) {
      const targetPos = (viewYearChiIdx + i) % 12;
      palaces[targetPos].luuNienCung = LN_CUNG_NAMES[i];
    }

    const lDauQuanPos = (viewYearChiIdx - (lunarMonth - 1) + hourChiIndex + 120) % 12;
    for (let m = 1; m <= 12; m++) {
      const targetPos = (lDauQuanPos + m - 1) % 12;
      palaces[targetPos].thangHan = m;
    }

    // 9.1. Lưu các sao khác
    if (luuSaoKhac !== false) {
      const viewLocTonPos = locTonPosMap[viewYearCanStr] ?? 2;
      addMinorStar(viewYearChiIdx, 'L.Thái tuế');
      addMinorStar(viewLocTonPos, 'L.Lộc tồn');
      addMinorStar((viewLocTonPos + 1) % 12, 'L.Kình dương');
      addMinorStar((viewLocTonPos - 1 + 12) % 12, 'L.Đà la');
      addMinorStar((viewYearChiIdx + 2) % 12, 'L.Tang môn');
      addMinorStar((viewYearChiIdx + 8) % 12, 'L.Bạch hổ');
      addMinorStar((viewYearChiIdx + 6) % 12, 'L.Tuế phá');

      const lThienMaMap: Record<number, number> = { 2: 8, 6: 8, 10: 8, 8: 2, 0: 2, 4: 2, 5: 11, 9: 11, 1: 11, 11: 5, 3: 5, 7: 5 };
      addMinorStar(lThienMaMap[viewYearChiIdx] ?? 8, 'L.Thiên mã');

      const lThienKhocPos = (6 - viewYearChiIdx + 120) % 12;
      const lThienHuPos = (6 + viewYearChiIdx) % 12;
      addMinorStar(lThienKhocPos, 'L.Thiên khốc');
      addMinorStar(lThienHuPos, 'L.Thiên hư');

      // L.Đào Hoa, L.Hồng Loan, L.Thiên Hỷ
      const lDaoHoaMap: Record<number, number> = { 11: 0, 3: 0, 7: 0, 2: 3, 6: 3, 10: 3, 5: 6, 9: 6, 1: 6, 8: 9, 0: 9, 4: 9 };
      addMinorStar(lDaoHoaMap[viewYearChiIdx] ?? 0, 'L.Đào hoa');

      const lHongLoanPos = (3 - viewYearChiIdx + 120) % 12;
      const lThienHyPos = (lHongLoanPos + 6) % 12;
      addMinorStar(lHongLoanPos, 'L.Hồng loan');
      addMinorStar(lThienHyPos, 'L.Thiên hỷ');

      // L.Đại Hao, L.Tiểu Hao
      addMinorStar((viewYearChiIdx + 6) % 12, 'L.Đại hao');
      addMinorStar(viewYearChiIdx, 'L.Tiểu hao');

      // L.Thiên Khôi, L.Thiên Việt
      const lKhoiMap: Record<string, number> = {
        'Giáp': 1, 'Mậu': 1, 'Ất': 0, 'Kỷ': 0, 'Bính': 11, 'Đinh': 11, 'Canh': 6, 'Tân': 6, 'Nhâm': 3, 'Quý': 3
      };
      const lVietMap: Record<string, number> = {
        'Giáp': 7, 'Mậu': 7, 'Ất': 8, 'Kỷ': 8, 'Bính': 9, 'Đinh': 9, 'Canh': 2, 'Tân': 2, 'Nhâm': 5, 'Quý': 5
      };
      addMinorStar(lKhoiMap[viewYearCanStr] ?? 1, 'L.Thiên khôi');
      addMinorStar(lVietMap[viewYearCanStr] ?? 7, 'L.Thiên việt');

      // L.Văn Xương, L.Văn Khúc
      const lXuongMap: Record<string, number> = {
        'Giáp': 5, 'Ất': 6, 'Bính': 8, 'Đinh': 9, 'Mậu': 8, 'Kỷ': 9, 'Canh': 11, 'Tân': 0, 'Nhâm': 2, 'Quý': 3
      };
      const lKhucMap: Record<string, number> = {
        'Giáp': 9, 'Ất': 8, 'Bính': 6, 'Đinh': 5, 'Mậu': 6, 'Kỷ': 5, 'Canh': 3, 'Tân': 2, 'Nhâm': 0, 'Quý': 11
      };
      addMinorStar(lXuongMap[viewYearCanStr] ?? 5, 'L.Văn xương');
      addMinorStar(lKhucMap[viewYearCanStr] ?? 9, 'L.Văn khúc');

      // L.Đẩu Quân
      addMinorStar(lDauQuanPos, 'L.Đẩu quân');
    }

    // 9.2. Lưu Tứ Hóa & Lộc Kỵ nhập / Khoa Quyền nhập
    if (luuTuHoa !== false) {
      const tuHoaYearTransit = tuHoaMap[viewYearCanStr] || tuHoaMap['Giáp'];
      Object.entries(tuHoaYearTransit).forEach(([starName, tuHoaName]) => {
        palaces.forEach((p, idx) => {
          if (p.majorStars.some(s => s.name === starName) || p.minorStars.some(s => s.rawName === starName || s.name === starName)) {
            const hoaDisplayName = `L.${tuHoaName.charAt(0).toUpperCase() + tuHoaName.slice(1).toLowerCase()}`;
            addMinorStar(idx, hoaDisplayName);

            // Lộc Kỵ nhập & Khoa Quyền nhập tags
            if (!p.phiTinhTags) p.phiTinhTags = [];
            if (locKyNhap !== false) {
              if (tuHoaName === 'Hóa Lộc' && !p.phiTinhTags.includes('Lộc nhập')) {
                p.phiTinhTags.push('Lộc nhập');
              }
              if (tuHoaName === 'Hóa Kỵ' && !p.phiTinhTags.includes('Kỵ nhập')) {
                p.phiTinhTags.push('Kỵ nhập');
              }
            }
            if (khoaQuyenNhap !== false) {
              if (tuHoaName === 'Hóa Khoa' && !p.phiTinhTags.includes('Khoa nhập')) {
                p.phiTinhTags.push('Khoa nhập');
              }
              if (tuHoaName === 'Hóa Quyền' && !p.phiTinhTags.includes('Quyền nhập')) {
                p.phiTinhTags.push('Quyền nhập');
              }
            }
          }
        });
      });
    }

    // 9.3. Lưu Tuần Triệt
    if (luuTuanTriet !== false) {
      // Triệt theo Can năm xem hạn
      const trietMapTransit: Record<string, number[]> = {
        'Giáp': [8, 9], 'Kỷ': [8, 9],
        'Ất': [6, 7], 'Canh': [6, 7],
        'Bính': [4, 5], 'Tân': [4, 5],
        'Đinh': [2, 3], 'Nhâm': [2, 3],
        'Mậu': [0, 1], 'Quý': [0, 1]
      };
      const trietTransitPositions = trietMapTransit[viewYearCanStr] || [0, 1];
      trietTransitPositions.forEach(pos => {
        if (palaces[pos]) palaces[pos].luuTriet = true;
      });

      // Tuần theo Can-Chi năm xem hạn
      const tuanOffset = (viewYearChiIdx - viewYearCanIdx + 120) % 12;
      const tuanTransitPos1 = (10 + tuanOffset) % 12;
      const tuanTransitPos2 = (11 + tuanOffset) % 12;
      if (palaces[tuanTransitPos1]) palaces[tuanTransitPos1].luuTuan = true;
      if (palaces[tuanTransitPos2]) palaces[tuanTransitPos2].luuTuan = true;
    }

    // 9.4. Lưu Đại Vận
    const sortedByDaiVan = [...palaces].sort((a, b) => a.daiVan - b.daiVan);
    const activeDaiVanPalace = sortedByDaiVan.filter(p => p.daiVan <= currentAge).pop() || palaces[menhIndex];
    if (luuDaiVan !== false && activeDaiVanPalace) {
      activeDaiVanPalace.isCurrentDaiVan = true;

      // Gán 12 Cung Chức Đại Vận
      const DV_CUNG_NAMES = [
        'ĐV. Mệnh', 'ĐV. Phụ', 'ĐV. Phúc', 'ĐV. Điền',
        'ĐV. Quan', 'ĐV. Nô', 'ĐV. Di', 'ĐV. Tật',
        'ĐV. Tài', 'ĐV. Tử', 'ĐV. Thê', 'ĐV. Bào'
      ];
      for (let i = 0; i < 12; i++) {
        const targetPos = (activeDaiVanPalace.index + i) % 12;
        palaces[targetPos].daiVanCung = DV_CUNG_NAMES[i];
      }

      // An các sao Lưu Đại Vận (ĐV.) theo Can và Chi của cung Đại Vận
      const dvCan = activeDaiVanPalace.can;
      const dvChiIdx = activeDaiVanPalace.index;

      // ĐV. Tứ Hóa
      const dvTuHoa = tuHoaMap[dvCan] || tuHoaMap['Giáp'];
      Object.entries(dvTuHoa).forEach(([starName, tuHoaName]) => {
        palaces.forEach((p, idx) => {
          if (p.majorStars.some(s => s.name === starName) || p.minorStars.some(s => s.rawName === starName || s.name === starName)) {
            const dvHoaDisplayName = `ĐV.${tuHoaName.charAt(0).toUpperCase() + tuHoaName.slice(1).toLowerCase()}`;
            addMinorStar(idx, dvHoaDisplayName);
          }
        });
      });

      // ĐV. Lộc Tồn, Kình Dương, Đà La
      const dvLocTonPos = locTonPosMap[dvCan] ?? 2;
      addMinorStar(dvLocTonPos, 'ĐV.Lộc tồn');
      addMinorStar((dvLocTonPos + 1) % 12, 'ĐV.Kình dương');
      addMinorStar((dvLocTonPos - 1 + 12) % 12, 'ĐV.Đà la');

      // ĐV. Thiên Mã (theo tam hợp Chi của cung Đại Vận)
      const thienMaMap: Record<number, number> = { 2: 8, 6: 8, 10: 8, 8: 2, 0: 2, 4: 2, 5: 11, 9: 11, 1: 11, 11: 5, 3: 5, 7: 5 };
      addMinorStar(thienMaMap[dvChiIdx] ?? 8, 'ĐV.Thiên mã');

      // ĐV. Thiên Khôi, Thiên Việt
      const lKhoiMap: Record<string, number> = {
        'Giáp': 1, 'Mậu': 1, 'Ất': 0, 'Kỷ': 0, 'Bính': 11, 'Đinh': 11, 'Canh': 6, 'Tân': 6, 'Nhâm': 3, 'Quý': 3
      };
      const lVietMap: Record<string, number> = {
        'Giáp': 7, 'Mậu': 7, 'Ất': 8, 'Kỷ': 8, 'Bính': 9, 'Đinh': 9, 'Canh': 2, 'Tân': 2, 'Nhâm': 5, 'Quý': 5
      };
      addMinorStar(lKhoiMap[dvCan] ?? 1, 'ĐV.Thiên khôi');
      addMinorStar(lVietMap[dvCan] ?? 7, 'ĐV.Thiên việt');

      // ĐV. Văn Xương, Văn Khúc
      const lXuongMap: Record<string, number> = {
        'Giáp': 5, 'Ất': 6, 'Bính': 8, 'Đinh': 9, 'Mậu': 8, 'Kỷ': 9, 'Canh': 11, 'Tân': 0, 'Nhâm': 2, 'Quý': 3
      };
      const lKhucMap: Record<string, number> = {
        'Giáp': 9, 'Ất': 8, 'Bính': 6, 'Đinh': 5, 'Mậu': 6, 'Kỷ': 5, 'Canh': 3, 'Tân': 2, 'Nhâm': 0, 'Quý': 11
      };
      addMinorStar(lXuongMap[dvCan] ?? 5, 'ĐV.Văn xương');
      addMinorStar(lKhucMap[dvCan] ?? 3, 'ĐV.Văn khúc');
    }

    // 9.4b. Khâm Thiên Phi Tinh Tứ Hóa Nhập (Khoa, Quyền, Lộc, Kỵ)
    if (locKyNhap !== false || khoaQuyenNhap !== false) {
      const PALACE_SHORT_NAMES: Record<string, string> = {
        'Mệnh': 'Mệnh',
        'Phụ mẫu': 'P.Mẫu',
        'Phúc đức': 'Phúc',
        'Điền trạch': 'Điền',
        'Quan lộc': 'Quan',
        'Nô bộc': 'Nô',
        'Thiên di': 'Di',
        'Tật ách': 'Tật',
        'Tài bạch': 'Tài',
        'Tử tức': 'Tử',
        'Phu thê': 'Thê',
        'Huynh đệ': 'Bào'
      };

      const getPalaceOfStar = (starName: string): string => {
        const p = palaces.find(pal =>
          pal.majorStars.some(s => s.name === starName || s.name.startsWith(starName)) ||
          pal.minorStars.some(s => (s.rawName || s.name) === starName || s.name.startsWith(starName))
        );
        if (!p) return '';
        return PALACE_SHORT_NAMES[p.name] || p.name;
      };

      palaces.forEach(p => {
        const pTuHoa = tuHoaMap[p.can] || tuHoaMap['Giáp'];
        let starKhoa = '';
        let starQuyen = '';
        let starLoc = '';
        let starKy = '';

        Object.entries(pTuHoa).forEach(([sName, hoaName]) => {
          if (hoaName === 'Hóa Khoa') starKhoa = sName;
          if (hoaName === 'Hóa Quyền') starQuyen = sName;
          if (hoaName === 'Hóa Lộc') starLoc = sName;
          if (hoaName === 'Hóa Kỵ') starKy = sName;
        });

        p.phiTinhDetail = {};
        if (khoaQuyenNhap !== false) {
          if (starKhoa) p.phiTinhDetail.khoa = getPalaceOfStar(starKhoa);
          if (starQuyen) p.phiTinhDetail.quyen = getPalaceOfStar(starQuyen);
        }
        if (locKyNhap !== false) {
          if (starLoc) p.phiTinhDetail.loc = getPalaceOfStar(starLoc);
          if (starKy) p.phiTinhDetail.ky = getPalaceOfStar(starKy);
        }
      });
    }

    // 9.5. Xem vận năm theo: Lưu Niên | Tiểu Hạn | Lưu Niên Đại Vận
    if (xemVanTheo === 'TieuHan') {
      // Tiểu Hạn truyền thống
      const tieuHanStartMap: Record<number, number> = {
        2: 4, 6: 4, 10: 4,     // Dần, Ngọ, Tuất khởi Thìn (4)
        8: 10, 0: 10, 4: 10,   // Thân, Tý, Thìn khởi Tuất (10)
        5: 7, 9: 7, 1: 7,      // Tỵ, Dậu, Sửu khởi Mùi (7)
        11: 1, 3: 1, 7: 1      // Hợi, Mão, Mùi khởi Sửu (1)
      };
      const thStart = tieuHanStartMap[yearChiIndex] ?? 4;
      const thSteps = currentAge - 1;
      const isMale = gender === 'Nam';
      const targetPos = isMale ? (thStart + thSteps) % 12 : (thStart - thSteps + 1200) % 12;
      if (palaces[targetPos]) {
        palaces[targetPos].isNienHan = true;
        palaces[targetPos].nienHanLabel = `Tiểu Hạn ${viewYear}`;
      }
    } else if (xemVanTheo === 'LuuNienDaiVan') {
      // Lưu Niên Đại Vận (tính từ cung khởi Đại Vận hiện tại)
      const dvStartAge = activeDaiVanPalace.daiVan;
      const ageDiff = currentAge - dvStartAge;
      const targetPos = isForward
        ? (activeDaiVanPalace.index + ageDiff) % 12
        : (activeDaiVanPalace.index - ageDiff + 1200) % 12;
      if (palaces[targetPos]) {
        palaces[targetPos].isNienHan = true;
        palaces[targetPos].nienHanLabel = `LN.Đại Vận ${viewYear}`;
      }
    } else {
      // Mặc định: Lưu Niên (cung có Chi của năm xem)
      if (palaces[viewYearChiIdx]) {
        palaces[viewYearChiIdx].isNienHan = true;
        palaces[viewYearChiIdx].nienHanLabel = `Lưu Niên ${viewYear}`;
      }
    }
  }

  return {
    userInfo: {
      name,
      day: solarDay,
      month: solarMonth,
      year: solarYear,
      hour: normalizedHour,
      minute: normalizedMinute,
      gender,
      viewYear,
      calendarType,
      isLeapMonth: Boolean(isLeapMonth),
      showHanNam,
      luuTuHoa,
      luuTuanTriet,
      luuDaiVan,
      luuSaoKhac,
      locKyNhap,
      khoaQuyenNhap,
      xemVanTheo
    },
    lunarInfo: lunar,
    canChi: {
      yearCan,
      yearChi,
      monthCan: lunar.monthCan,
      monthChi: lunar.monthChi,
      dayCan: lunar.dayCan,
      dayChi: lunar.dayChi,
      hourCan: lunar.hourCan,
      hourChi: lunar.hourChi
    },
    meta: {
      canChiYear: `${yearCan} ${yearChi}`,
      canChiMonth: `${lunar.monthCan} ${lunar.monthChi}`,
      canChiDay: `${lunar.dayCan} ${lunar.dayChi}`,
      canChiHour: `${lunar.hourCan} ${lunar.hourChi}`,
      viewYearCanChi,
      napAmMenh,
      cuc,
      chuMenh: CHU_MENH[menhIndex] || 'Tham Lang',
      chuThan: CHU_THAN[yearChiIndex] || 'Linh Tinh',
      yinYangGender: `${isDungCan ? 'Dương' : 'Âm'} ${gender}`,
      yinYangHarmony: (isDungCan === ['Tý', 'Dần', 'Thìn', 'Ngọ', 'Thân', 'Tuất'].includes(palaces[menhIndex].chi))
        ? 'Âm Dương thuận lý'
        : 'Âm Dương nghịch lý',
      elementHarmony: (() => {
        if (cuc.element === napAmMenh.element) return 'Mệnh Cục bình hoà';
        const SINH: Record<string, string> = { 'Kim': 'Thủy', 'Thủy': 'Mộc', 'Mộc': 'Hỏa', 'Hỏa': 'Thổ', 'Thổ': 'Kim' };
        if (SINH[cuc.element] === napAmMenh.element) return 'Cục sinh Mệnh';
        if (SINH[napAmMenh.element] === cuc.element) return 'Mệnh sinh Cục';
        const KHAC: Record<string, string> = { 'Kim': 'Mộc', 'Mộc': 'Thổ', 'Thổ': 'Thủy', 'Thủy': 'Hỏa', 'Hỏa': 'Kim' };
        if (KHAC[cuc.element] === napAmMenh.element) return 'Cục khắc Mệnh';
        if (KHAC[napAmMenh.element] === cuc.element) return 'Mệnh khắc Cục';
        return 'Mệnh Cục bình hoà';
      })(),
      thanCu: `Thân cư ${PALACE_NAMES[(thanIndex - menhIndex + 12) % 12]}`
    },
    palaces
  };
}
