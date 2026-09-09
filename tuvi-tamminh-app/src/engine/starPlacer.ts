import { Can, Chi, DacHam, PalaceData, Star, ChartInput, LunarDate, AmDuong } from '../types/tuvi.types';
import { CHI_LIST, CAN_LIST, getChiIndex, getCanIndex } from './lunarCalendar';
import { STARS_118_DICTIONARY } from '../data/stars118Data';

/**
 * Tìm vị trí sao Tử Vi (0 to 11) dựa vào Cục và Ngày sinh Âm lịch
 */
export function findTuViPosition(cucNumber: number, lunarDay: number): number {
  let q = 0;
  let r = lunarDay % cucNumber;
  let k = 0;

  if (r === 0) {
    q = Math.floor(lunarDay / cucNumber);
    // Vị trí = Dần (2) + (q - 1)
    return (2 + (q - 1) + 12) % 12;
  } else {
    // Tìm k nhỏ nhất sao cho (lunarDay + k) chia hết cho cucNumber
    k = cucNumber - r;
    q = Math.floor((lunarDay + k) / cucNumber);
    if (k % 2 === 0) {
      // k chẵn: đi thuận thêm k cung
      return (2 + (q - 1) + k + 12) % 12;
    } else {
      // k lẻ: đi nghịch lùi k cung
      return (2 + (q - 1) - k + 12) % 12;
    }
  }
}

/**
 * Bảng Đắc Hãm 14 Chính Tinh tại 12 Cung (Tý -> Hợi)
 */
const BRIGHTNESS_TABLE: Record<string, DacHam[]> = {
  //                  Tý      Sửu     Dần     Mão     Thìn    Tỵ      Ngọ     Mùi     Thân    Dậu     Tuất    Hợi
  'Tử Vi':      ['Bình', 'Đắc',  'Miếu', 'Bình', 'Vượng', 'Đắc',  'Miếu', 'Đắc',  'Miếu', 'Bình', 'Vượng', 'Đắc'],
  'Thiên Cơ':   ['Đắc',  'Hãm',  'Miếu', 'Vượng', 'Đắc',  'Bình', 'Miếu', 'Hãm',  'Miếu', 'Vượng', 'Đắc',  'Bình'],
  'Thái Dương': ['Hãm',  'Hãm',  'Vượng', 'Miếu', 'Vượng', 'Miếu', 'Miếu', 'Đắc',  'Đắc',  'Bình', 'Hãm',  'Hãm'],
  'Vũ Khúc':    ['Vượng', 'Miếu', 'Vượng', 'Đắc',  'Miếu', 'Bình', 'Vượng', 'Miếu', 'Vượng', 'Đắc',  'Miếu', 'Bình'],
  'Thiên Đồng': ['Vượng', 'Hãm',  'Miếu', 'Đắc',  'Bình', 'Hãm',  'Hãm',  'Hãm',  'Miếu', 'Đắc',  'Bình', 'Miếu'],
  'Liêm Trinh': ['Bình', 'Đắc',  'Miếu', 'Hãm',  'Vượng', 'Hãm',  'Miếu', 'Đắc',  'Miếu', 'Hãm',  'Vượng', 'Hãm'],
  'Thiên Phủ':  ['Miếu', 'Miếu', 'Miếu', 'Bình', 'Miếu', 'Đắc',  'Vượng', 'Miếu', 'Miếu', 'Bình', 'Miếu', 'Đắc'],
  'Thái Âm':    ['Miếu', 'Đắc',  'Hãm',  'Hãm',  'Hãm',  'Hãm',  'Hãm',  'Đắc',  'Đắc',  'Miếu', 'Miếu', 'Miếu'],
  'Tham Lang':  ['Hãm',  'Miếu', 'Bình', 'Đắc',  'Hãm',  'Hãm',  'Vượng', 'Miếu', 'Bình', 'Đắc',  'Hãm',  'Hãm'],
  'Cự Môn':     ['Vượng', 'Hãm',  'Miếu', 'Miếu', 'Hãm',  'Bình', 'Vượng', 'Hãm',  'Miếu', 'Miếu', 'Hãm',  'Đắc'],
  'Thiên Tướng':['Vượng', 'Miếu', 'Miếu', 'Hãm',  'Vượng', 'Đắc',  'Vượng', 'Miếu', 'Miếu', 'Hãm',  'Vượng', 'Đắc'],
  'Thiên Lương':['Miếu', 'Vượng', 'Miếu', 'Miếu', 'Vượng', 'Hãm',  'Miếu', 'Vượng', 'Miếu', 'Miếu', 'Vượng', 'Hãm'],
  'Thất Sát':   ['Miếu', 'Đắc',  'Miếu', 'Hãm',  'Bình', 'Bình', 'Miếu', 'Đắc',  'Miếu', 'Hãm',  'Bình', 'Bình'],
  'Phá Quân':   ['Miếu', 'Vượng', 'Hãm',  'Hãm',  'Đắc',  'Hãm',  'Miếu', 'Vượng', 'Hãm',  'Hãm',  'Đắc',  'Hãm']
};

export function createStar(name: string, palaceIndex: number): Star {
  const dict = STARS_118_DICTIONARY[name];
  const brightness = BRIGHTNESS_TABLE[name] ? BRIGHTNESS_TABLE[name][palaceIndex] : undefined;
  if (!dict) {
    return {
      name,
      element: 'Thổ',
      category: 'Phụ tinh khác',
      brightness,
      isGood: true
    };
  }
  return {
    name,
    element: dict.element,
    category: dict.category,
    brightness,
    isGood: dict.isGood,
    meaning: dict.meaning,
    vatDung: dict.vatDung,
    benhLy: dict.benhLy,
    tuongMao: dict.tuongMao,
    vanHan: dict.vanHan
  };
}

export function determineAmDuong(yearCan: Can, gender: 'nam' | 'nu'): AmDuong {
  const isDuongCan = ['Giáp', 'Bính', 'Mậu', 'Canh', 'Nhâm'].includes(yearCan);
  if (gender === 'nam') {
    return isDuongCan ? 'Dương Nam' : 'Âm Nam';
  } else {
    return isDuongCan ? 'Dương Nữ' : 'Âm Nữ';
  }
}

/**
 * An 14 Chính Tinh
 */
export function placeMajorStars(tuViPos: number, palaces: Star[][]) {
  // Hệ Tử Vi (đi nghịch)
  palaces[tuViPos].push(createStar('Tử Vi', tuViPos));
  const tc = (tuViPos - 1 + 12) % 12;
  palaces[tc].push(createStar('Thiên Cơ', tc));
  const td = (tuViPos - 3 + 12) % 12;
  palaces[td].push(createStar('Thái Dương', td));
  const vk = (tuViPos - 4 + 12) % 12;
  palaces[vk].push(createStar('Vũ Khúc', vk));
  const tdon = (tuViPos - 5 + 12) % 12;
  palaces[tdon].push(createStar('Thiên Đồng', tdon));
  const lt = (tuViPos - 8 + 12) % 12;
  palaces[lt].push(createStar('Liêm Trinh', lt));

  // Hệ Thiên Phủ: Trục đối xứng Dần (2) - Thân (8) => pos(TP) = (16 - tuViPos) % 12
  const tp = (16 - tuViPos + 12) % 12;
  palaces[tp].push(createStar('Thiên Phủ', tp));
  const ta = (tp + 1) % 12;
  palaces[ta].push(createStar('Thái Âm', ta));
  const tl = (tp + 2) % 12;
  palaces[tl].push(createStar('Tham Lang', tl));
  const cm = (tp + 3) % 12;
  palaces[cm].push(createStar('Cự Môn', cm));
  const ttuong = (tp + 4) % 12;
  palaces[ttuong].push(createStar('Thiên Tướng', ttuong));
  const tluong = (tp + 5) % 12;
  palaces[tluong].push(createStar('Thiên Lương', tluong));
  const ts = (tp + 6) % 12;
  palaces[ts].push(createStar('Thất Sát', ts));
  const pq = (tp + 10) % 12;
  palaces[pq].push(createStar('Phá Quân', pq));
}

/**
 * An Vòng Thái Tuế (12 sao, luôn đi thuận từ Chi năm sinh)
 */
export function placeThaiTueRing(yearChi: Chi, palaces: Star[][]) {
  const startPos = getChiIndex(yearChi);
  const ringStars = [
    'Thái Tuế', 'Thiếu Dương', 'Tang Môn', 'Thiếu Âm', 'Quan Phù', 'Tử Phù',
    'Tuế Phá', 'Long Đức', 'Bạch Hổ', 'Phúc Đức', 'Điếu Khách', 'Trực Phù'
  ];
  for (let i = 0; i < 12; i++) {
    const pos = (startPos + i) % 12;
    palaces[pos].push(createStar(ringStars[i], pos));
  }
}

/**
 * An Vòng Lộc Tồn & Bác Sĩ (12 sao) cùng Kình Dương, Đà La
 */
export function placeLocTonRing(yearCan: Can, amDuongNamNu: AmDuong, palaces: Star[][]) {
  // Lộc Tồn theo Can
  const locTonMap: Record<Can, number> = {
    'Giáp': 2, // Dần
    'Ất': 3,   // Mão
    'Bính': 5, // Tỵ
    'Đinh': 6, // Ngọ
    'Mậu': 5,  // Tỵ
    'Kỷ': 6,   // Ngọ
    'Canh': 8, // Thân
    'Tân': 9,  // Dậu
    'Nhâm': 11,// Hợi
    'Quý': 0   // Tý
  };
  const locTonPos = locTonMap[yearCan];
  palaces[locTonPos].push(createStar('Lộc Tồn', locTonPos));

  // Kình Dương trước Lộc Tồn 1 cung, Đà La sau Lộc Tồn 1 cung
  const kinhPos = (locTonPos + 1) % 12;
  const daPos = (locTonPos - 1 + 12) % 12;
  palaces[kinhPos].push(createStar('Kình Dương', kinhPos));
  palaces[daPos].push(createStar('Đà La', daPos));

  // Vòng Bác Sĩ
  const isThuan = amDuongNamNu === 'Dương Nam' || amDuongNamNu === 'Âm Nữ';
  const bacSiStars = [
    'Bác Sĩ', 'Lực Sĩ', 'Thanh Long', 'Tiểu Hao', 'Tướng Quân', 'Tấu Thư',
    'Phi Liêm', 'Hỷ Thần', 'Bệnh Phù', 'Đại Hao', 'Phục Binh', 'Quan Phủ'
  ];

  for (let i = 0; i < 12; i++) {
    const pos = isThuan 
      ? (locTonPos + i) % 12 
      : (locTonPos - i + 12) % 12;
    palaces[pos].push(createStar(bacSiStars[i], pos));
  }
}

/**
 * An Vòng Tràng Sinh (12 sao)
 */
export function placeTrangSinhRing(cucElement: string, amDuongNamNu: AmDuong, palaces: Star[][]) {
  let startPos = 8; // Thủy / Thổ khởi Thân (8)
  if (cucElement === 'Mộc') startPos = 11; // Hợi
  else if (cucElement === 'Kim') startPos = 5; // Tỵ
  else if (cucElement === 'Hỏa') startPos = 2; // Dần

  const isThuan = amDuongNamNu === 'Dương Nam' || amDuongNamNu === 'Âm Nữ';
  const trangSinhStars = [
    'Tràng Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy',
    'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'
  ];

  for (let i = 0; i < 12; i++) {
    const pos = isThuan 
      ? (startPos + i) % 12 
      : (startPos - i + 12) % 12;
    palaces[pos].push(createStar(trangSinhStars[i], pos));
  }
}

/**
 * An Địa Không, Địa Kiếp, Hỏa Tinh, Linh Tinh
 */
export function placeSatTinh(yearChi: Chi, yearCan: Can, hourChi: Chi, amDuongNamNu: AmDuong, palaces: Star[][]) {
  const hourIndex = getChiIndex(hourChi);
  const yearChiIndex = getChiIndex(yearChi);

  // Địa Không, Địa Kiếp: Khởi từ Hợi (11)
  // Không đi nghịch đến giờ sinh, Kiếp đi thuận đến giờ sinh
  const diaKhongPos = (11 - hourIndex + 12) % 12;
  const diaKiepPos = (11 + hourIndex) % 12;
  palaces[diaKhongPos].push(createStar('Địa Không', diaKhongPos));
  palaces[diaKiepPos].push(createStar('Địa Kiếp', diaKiepPos));

  // Hỏa Tinh & Linh Tinh:
  // Dần Ngọ Tuất: Hỏa khởi Sửu (1), Linh khởi Mão (3)
  // Thân Tý Thìn: Hỏa khởi Dần (2), Linh khởi Tuất (10)
  // Tỵ Dậu Sửu: Hỏa khởi Mão (3), Linh khởi Tuất (10)
  // Hợi Mão Mùi: Hỏa khởi Dậu (9), Linh khởi Tuất (10)
  let hoaStart = 1;
  let linhStart = 3;
  if ([2, 6, 10].includes(yearChiIndex)) { // Dần Ngọ Tuất
    hoaStart = 1; linhStart = 3;
  } else if ([8, 0, 4].includes(yearChiIndex)) { // Thân Tý Thìn
    hoaStart = 2; linhStart = 10;
  } else if ([5, 9, 1].includes(yearChiIndex)) { // Tỵ Dậu Sửu
    hoaStart = 3; linhStart = 10;
  } else { // Hợi Mão Mùi
    hoaStart = 9; linhStart = 10;
  }

  const isThuan = amDuongNamNu === 'Dương Nam' || amDuongNamNu === 'Âm Nữ';
  const hoaPos = isThuan ? (hoaStart + hourIndex) % 12 : (hoaStart - hourIndex + 12) % 12;
  const linhPos = isThuan ? (linhStart - hourIndex + 12) % 12 : (linhStart + hourIndex) % 12;

  palaces[hoaPos].push(createStar('Hỏa Tinh', hoaPos));
  palaces[linhPos].push(createStar('Linh Tinh', linhPos));
}

/**
 * An Tứ Hóa
 */
export function placeTuHoa(yearCan: Can, palaces: Star[][]) {
  const tuHoaMap: Record<Can, { loc: string; quyen: string; khoa: string; ky: string }> = {
    'Giáp': { loc: 'Liêm Trinh', quyen: 'Phá Quân', khoa: 'Vũ Khúc', ky: 'Thái Dương' },
    'Ất':   { loc: 'Thiên Cơ', quyen: 'Thiên Lương', khoa: 'Tử Vi', ky: 'Thái Âm' },
    'Bính': { loc: 'Thiên Đồng', quyen: 'Thiên Cơ', khoa: 'Văn Xương', ky: 'Liêm Trinh' },
    'Đinh': { loc: 'Thái Âm', quyen: 'Thiên Đồng', khoa: 'Thiên Cơ', ky: 'Cự Môn' },
    'Mậu':  { loc: 'Tham Lang', quyen: 'Thái Âm', khoa: 'Hữu Bật', ky: 'Thiên Cơ' },
    'Kỷ':   { loc: 'Vũ Khúc', quyen: 'Tham Lang', khoa: 'Thiên Lương', ky: 'Văn Khúc' },
    'Canh': { loc: 'Thái Dương', quyen: 'Vũ Khúc', khoa: 'Thái Âm', ky: 'Thiên Đồng' },
    'Tân':  { loc: 'Cự Môn', quyen: 'Thái Dương', khoa: 'Văn Khúc', ky: 'Văn Xương' },
    'Nhâm': { loc: 'Thiên Lương', quyen: 'Tử Vi', khoa: 'Thiên Phủ', ky: 'Vũ Khúc' },
    'Quý':  { loc: 'Phá Quân', quyen: 'Cự Môn', khoa: 'Thái Âm', ky: 'Tham Lang' }
  };

  const target = tuHoaMap[yearCan];
  const findAndAdd = (starName: string, hoaName: string) => {
    for (let i = 0; i < 12; i++) {
      if (palaces[i].some(s => s.name === starName)) {
        palaces[i].push(createStar(hoaName, i));
        break;
      }
    }
  };

  findAndAdd(target.loc, 'Hóa Lộc');
  findAndAdd(target.quyen, 'Hóa Quyền');
  findAndAdd(target.khoa, 'Hóa Khoa');
  findAndAdd(target.ky, 'Hóa Kỵ');
}

/**
 * An các sao theo Tháng, Giờ, Năm, Chi
 */
export function placeAuxiliaryStars(
  lunarMonth: number,
  hourChi: Chi,
  yearCan: Can,
  yearChi: Chi,
  menhChiIndex: number,
  thanChiIndex: number,
  palaces: Star[][]
) {
  const hourIndex = getChiIndex(hourChi);
  const yearChiIndex = getChiIndex(yearChi);

  // Tả Phù: khởi Thìn (4) đi thuận theo tháng sinh
  const taPhuPos = (4 + (lunarMonth - 1)) % 12;
  palaces[taPhuPos].push(createStar('Tả Phù', taPhuPos));

  // Hữu Bật: khởi Tuất (10) đi nghịch theo tháng sinh
  const huuBatPos = (10 - (lunarMonth - 1) + 12) % 12;
  palaces[huuBatPos].push(createStar('Hữu Bật', huuBatPos));

  // Văn Xương: khởi Tuất (10) đi nghịch theo giờ sinh
  const vanXuongPos = (10 - hourIndex + 12) % 12;
  palaces[vanXuongPos].push(createStar('Văn Xương', vanXuongPos));

  // Văn Khúc: khởi Thìn (4) đi thuận theo giờ sinh
  const vanKhucPos = (4 + hourIndex) % 12;
  palaces[vanKhucPos].push(createStar('Văn Khúc', vanKhucPos));

  // Thiên Khôi & Thiên Việt theo Can năm
  const khoiVietMap: Record<Can, { khoi: number; viet: number }> = {
    'Giáp': { khoi: 1, viet: 7 },  // Sửu, Mùi
    'Ất':   { khoi: 0, viet: 8 },  // Tý, Thân
    'Bính': { khoi: 11, viet: 9 }, // Hợi, Dậu
    'Đinh': { khoi: 11, viet: 9 }, // Hợi, Dậu
    'Mậu':  { khoi: 1, viet: 7 },  // Sửu, Mùi
    'Kỷ':   { khoi: 0, viet: 8 },  // Tý, Thân
    'Canh': { khoi: 1, viet: 7 },  // Sửu, Mùi
    'Tân':  { khoi: 6, viet: 2 },  // Ngọ, Dần
    'Nhâm': { khoi: 3, viet: 5 },  // Mão, Tỵ
    'Quý':  { khoi: 3, viet: 5 }   // Mão, Tỵ
  };
  const kv = khoiVietMap[yearCan];
  palaces[kv.khoi].push(createStar('Thiên Khôi', kv.khoi));
  palaces[kv.viet].push(createStar('Thiên Việt', kv.viet));

  // Thiên Mã theo Tam Hợp Chi năm sinh
  // Dần Ngọ Tuất: Thân (8)
  // Thân Tý Thìn: Dần (2)
  // Tỵ Dậu Sửu: Hợi (11)
  // Hợi Mão Mùi: Tỵ (5)
  let maPos = 8;
  if ([2, 6, 10].includes(yearChiIndex)) maPos = 8;
  else if ([8, 0, 4].includes(yearChiIndex)) maPos = 2;
  else if ([5, 9, 1].includes(yearChiIndex)) maPos = 11;
  else maPos = 5;
  palaces[maPos].push(createStar('Thiên Mã', maPos));

  // Đào Hoa theo Chi năm
  // Dần Ngọ Tuất: Mão (3)
  // Thân Tý Thìn: Dậu (9)
  // Tỵ Dậu Sửu: Ngọ (6)
  // Hợi Mão Mùi: Tý (0)
  let daoHoaPos = 3;
  if ([2, 6, 10].includes(yearChiIndex)) daoHoaPos = 3;
  else if ([8, 0, 4].includes(yearChiIndex)) daoHoaPos = 9;
  else if ([5, 9, 1].includes(yearChiIndex)) daoHoaPos = 6;
  else daoHoaPos = 0;
  palaces[daoHoaPos].push(createStar('Đào Hoa', daoHoaPos));

  // Hồng Loan: Khởi Mão (3) đi nghịch đến Chi năm
  const hongLoanPos = (3 - yearChiIndex + 12) % 12;
  palaces[hongLoanPos].push(createStar('Hồng Loan', hongLoanPos));

  // Thiên Hỷ: Đối cung Hồng Loan
  const thienHyPos = (hongLoanPos + 6) % 12;
  palaces[thienHyPos].push(createStar('Thiên Hỷ', thienHyPos));

  // Long Trì: Khởi Thìn (4) đi thuận theo Chi năm
  const longTriPos = (4 + yearChiIndex) % 12;
  palaces[longTriPos].push(createStar('Long Trì', longTriPos));

  // Phượng Các: Khởi Tuất (10) đi nghịch theo Chi năm
  const phuongCacPos = (10 - yearChiIndex + 12) % 12;
  palaces[phuongCacPos].push(createStar('Phượng Các', phuongCacPos));
  palaces[phuongCacPos].push(createStar('Giải Thần', phuongCacPos));

  // Hoa Cái: Dần Ngọ Tuất tại Tuất; Thân Tý Thìn tại Thìn; Tỵ Dậu Sửu tại Sửu; Hợi Mão Mùi tại Mùi
  let hoaCaiPos = 10;
  if ([2, 6, 10].includes(yearChiIndex)) hoaCaiPos = 10;
  else if ([8, 0, 4].includes(yearChiIndex)) hoaCaiPos = 4;
  else if ([5, 9, 1].includes(yearChiIndex)) hoaCaiPos = 1;
  else hoaCaiPos = 7;
  palaces[hoaCaiPos].push(createStar('Hoa Cái', hoaCaiPos));

  // Thiên Tài: Từ Mệnh đi thuận đến Chi năm sinh
  const thienTaiPos = (menhChiIndex + yearChiIndex) % 12;
  palaces[thienTaiPos].push(createStar('Thiên Tài', thienTaiPos));

  // Thiên Thọ: Từ Thân đi thuận đến Chi năm sinh
  const thienThoPos = (thanChiIndex + yearChiIndex) % 12;
  palaces[thienThoPos].push(createStar('Thiên Thọ', thienThoPos));

  // Thiên Hình: Khởi Dậu (9) đi thuận đến tháng sinh
  const hinhPos = (9 + (lunarMonth - 1)) % 12;
  palaces[hinhPos].push(createStar('Thiên Hình', hinhPos));

  // Thiên Diêu: Khởi Sửu (1) đi thuận đến tháng sinh
  const dieuPos = (1 + (lunarMonth - 1)) % 12;
  palaces[dieuPos].push(createStar('Thiên Diêu', dieuPos));

  // Thiên Khốc & Thiên Hư: Khởi Ngọ (6), Khốc nghịch, Hư thuận
  const khocPos = (6 - yearChiIndex + 12) % 12;
  const huPos = (6 + yearChiIndex) % 12;
  palaces[khocPos].push(createStar('Thiên Khốc', khocPos));
  palaces[huPos].push(createStar('Thiên Hư', huPos));

  // Cô Thần & Quả Tú:
  // Dần Mão Thìn: Cô tại Tỵ (5), Quả tại Sửu (1)
  // Tỵ Ngọ Mùi: Cô tại Thân (8), Quả tại Thìn (4)
  // Thân Dậu Tuất: Cô tại Hợi (11), Quả tại Mùi (7)
  // Hợi Tý Sửu: Cô tại Dần (2), Quả tại Tuất (10)
  let coPos = 5, quaPos = 1;
  if ([2, 3, 4].includes(yearChiIndex)) { coPos = 5; quaPos = 1; }
  else if ([5, 6, 7].includes(yearChiIndex)) { coPos = 8; quaPos = 4; }
  else if ([8, 9, 10].includes(yearChiIndex)) { coPos = 11; quaPos = 7; }
  else { coPos = 2; quaPos = 10; }
  palaces[coPos].push(createStar('Cô Thần', coPos));
  palaces[quaPos].push(createStar('Quả Tú', quaPos));

  // Kiếp Sát: Dần Ngọ Tuất tại Hợi (11); Thân Tý Thìn tại Tỵ (5); Tỵ Dậu Sửu tại Dần (2); Hợi Mão Mùi tại Thân (8)
  let kiepSatPos = 11;
  if ([2, 6, 10].includes(yearChiIndex)) kiepSatPos = 11;
  else if ([8, 0, 4].includes(yearChiIndex)) kiepSatPos = 5;
  else if ([5, 9, 1].includes(yearChiIndex)) kiepSatPos = 2;
  else kiepSatPos = 8;
  palaces[kiepSatPos].push(createStar('Kiếp Sát', kiepSatPos));

  // Phá Toái: Tỵ Dậu Sửu tại Tỵ (5); Dần Ngọ Tuất tại Dậu (9); Thân Tý Thìn tại Sửu (1); Hợi Mão Mùi tại Tỵ (5)
  let phaToaiPos = 5;
  if ([5, 9, 1].includes(yearChiIndex)) phaToaiPos = 5;
  else if ([2, 6, 10].includes(yearChiIndex)) phaToaiPos = 9;
  else if ([8, 0, 4].includes(yearChiIndex)) phaToaiPos = 1;
  else phaToaiPos = 5;
  palaces[phaToaiPos].push(createStar('Phá Toái', phaToaiPos));

  // Đẩu Quân: Từ Thái Tuế đi nghịch đến tháng sinh, rồi đi thuận đến giờ sinh
  const dauQuanPos = (yearChiIndex - (lunarMonth - 1) + hourIndex + 24) % 12;
  palaces[dauQuanPos].push(createStar('Đẩu Quân', dauQuanPos));

  // Lưu Hà theo Can năm
  const luuHaMap: Record<Can, number> = {
    'Giáp': 9, // Dậu
    'Ất': 10,  // Tuất
    'Bính': 7, // Mùi
    'Đinh': 8, // Thân
    'Mậu': 5,  // Tỵ
    'Kỷ': 6,   // Ngọ
    'Canh': 8, // Thân
    'Tân': 3,  // Mão
    'Nhâm': 11,// Hợi
    'Quý': 2   // Dần
  };
  const luuHaPos = luuHaMap[yearCan];
  palaces[luuHaPos].push(createStar('Lưu Hà', luuHaPos));
}

/**
 * Tìm vị trí Tuần Không và Triệt Không
 */
export function findTuanTriet(yearCan: Can, yearChi: Chi): {
  tuanIndices: [number, number];
  trietIndices: [number, number];
} {
  const canIdx = getCanIndex(yearCan);
  const chiIdx = getChiIndex(yearChi);

  // Tuần Không: Hai cung sau khi đi hết 10 can từ chi năm
  // Vị trí con giáp Giáp: (chiIdx - canIdx + 12) % 12
  const giapChiIdx = (chiIdx - canIdx + 12) % 12;
  // Hai cung tuần không là (giapChiIdx + 10) % 12 và (giapChiIdx + 11) % 12
  const tuanIndices: [number, number] = [
    (giapChiIdx + 10) % 12,
    (giapChiIdx + 11) % 12
  ];

  // Triệt Không theo Can năm sinh
  let trietIndices: [number, number] = [8, 9]; // Thân Dậu (Giáp, Kỷ)
  if (yearCan === 'Giáp' || yearCan === 'Kỷ') {
    trietIndices = [8, 9]; // Thân Dậu
  } else if (yearCan === 'Ất' || yearCan === 'Canh') {
    trietIndices = [6, 7]; // Ngọ Mùi
  } else if (yearCan === 'Bính' || yearCan === 'Tân') {
    trietIndices = [4, 5]; // Thìn Tỵ
  } else if (yearCan === 'Đinh' || yearCan === 'Nhâm') {
    trietIndices = [2, 3]; // Dần Mão
  } else { // Mậu Quý
    trietIndices = [0, 1]; // Tý Sửu
  }

  return { tuanIndices, trietIndices };
}
