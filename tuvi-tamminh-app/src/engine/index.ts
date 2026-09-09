import { ChartInput, ChartResult, PalaceData, Star } from '../types/tuvi.types';
import { CHI_LIST, solarToLunar, getChiHourFromHour, getChiIndex } from './lunarCalendar';
import { getYearCanChi, getMonthCanChi, getDayCanChi, getHourCanChi, getNapAm } from './canChiNapAm';
import { findMenhThan, findCuc, getPalaceCans, getPalaceNames } from './cucMenhThan';
import { 
  findTuViPosition, 
  determineAmDuong, 
  placeMajorStars, 
  placeThaiTueRing, 
  placeLocTonRing, 
  placeTrangSinhRing, 
  placeSatTinh, 
  placeTuHoa, 
  placeAuxiliaryStars, 
  findTuanTriet 
} from './starPlacer';
import { checkCucMenhRelation } from '../data/tamMinhRules';

export function calculateTuViChart(input: ChartInput): ChartResult {
  let lunar = input.isLunarInput 
    ? { day: input.solarDay, month: input.solarMonth, year: input.solarYear, isLeap: Boolean(input.isLeapMonth) }
    : solarToLunar(input.solarDay, input.solarMonth, input.solarYear);

  const hourChi = getChiHourFromHour(input.solarHour, input.solarMinute || 0);

  // Can Chi
  const yearCanChi = getYearCanChi(lunar.year);
  const monthCanChi = getMonthCanChi(yearCanChi.can, lunar.month);
  const dayCanChi = getDayCanChi(input.solarDay, input.solarMonth, input.solarYear);
  const hourCanChi = getHourCanChi(dayCanChi.can, hourChi);

  const amDuongNamNu = determineAmDuong(yearCanChi.can, input.gender);
  const banMenh = getNapAm(yearCanChi.can, yearCanChi.chi);

  // Mệnh & Thân
  const { menhChiIndex, thanChiIndex } = findMenhThan(lunar.month, hourChi);
  const cuc = findCuc(yearCanChi.can, menhChiIndex);

  // Âm Dương Thuận Lý / Nghịch Lý
  // Cung Dương: Tý (0), Dần (2), Thìn (4), Ngọ (6), Thân (8), Tuất (10) => index chẵn
  const isCungDuong = menhChiIndex % 2 === 0;
  const isDuongNguoi = amDuongNamNu === 'Dương Nam' || amDuongNamNu === 'Dương Nữ';
  const amDuongThuanLy = (isDuongNguoi && isCungDuong) || (!isDuongNguoi && !isCungDuong);

  // Cục Mệnh Tương Sinh / Khắc
  const cucMenhRel = checkCucMenhRelation(banMenh.element, cuc.element);

  // Cans và Names của 12 cung
  const palaceCans = getPalaceCans(yearCanChi.can);
  const palaceNames = getPalaceNames(menhChiIndex);

  // Khởi tạo mảng sao cho 12 cung
  const rawPalaceStars: Star[][] = Array.from({ length: 12 }, () => []);

  // 1. 14 Chính Tinh
  const tuViPos = findTuViPosition(cuc.number, lunar.day);
  placeMajorStars(tuViPos, rawPalaceStars);

  // 2. Vòng Thái Tuế
  placeThaiTueRing(yearCanChi.chi, rawPalaceStars);

  // 3. Vòng Lộc Tồn & Bác Sĩ
  placeLocTonRing(yearCanChi.can, amDuongNamNu, rawPalaceStars);

  // 4. Vòng Tràng Sinh
  const trangSinhMap = placeTrangSinhRing(cuc.element, amDuongNamNu, rawPalaceStars);

  // 5. Lục Sát Tinh
  placeSatTinh(yearCanChi.chi, yearCanChi.can, hourChi, amDuongNamNu, rawPalaceStars);

  // 6. Tứ Hóa
  placeTuHoa(yearCanChi.can, rawPalaceStars);

  // 7. Các sao phụ
  placeAuxiliaryStars(
    lunar.month,
    hourChi,
    yearCanChi.can,
    yearCanChi.chi,
    menhChiIndex,
    thanChiIndex,
    rawPalaceStars
  );

  // 8. Tuần Không & Triệt Không
  const { tuanIndices, trietIndices } = findTuanTriet(yearCanChi.can, yearCanChi.chi);

  // Đại Hạn: Bắt đầu từ Mệnh với số Cục
  const isThuanDaiHan = amDuongNamNu === 'Dương Nam' || amDuongNamNu === 'Âm Nữ';
  const daiHanAges: number[] = new Array(12);
  for (let step = 0; step < 12; step++) {
    const palaceIdx = isThuanDaiHan 
      ? (menhChiIndex + step) % 12 
      : (menhChiIndex - step + 12) % 12;
    daiHanAges[palaceIdx] = cuc.number + step * 10;
  }

  // Tiểu Hạn Chi:
  // Nam khởi Dần Ngọ Tuất tại Thìn, Thân Tý Thìn tại Tuất, Tỵ Dậu Sửu tại Mùi, Hợi Mão Mùi tại Sửu
  // Nam đi thuận, Nữ đi nghịch
  const yearChiIndex = getChiIndex(yearCanChi.chi);
  let tieuHanStartPos = 4;
  if ([2, 6, 10].includes(yearChiIndex)) tieuHanStartPos = 4; // Thìn
  else if ([8, 0, 4].includes(yearChiIndex)) tieuHanStartPos = 10; // Tuất
  else if ([5, 9, 1].includes(yearChiIndex)) tieuHanStartPos = 7; // Mùi
  else tieuHanStartPos = 1; // Sửu

  const isNam = input.gender === 'nam';

  // Lắp ráp 12 Cung (0 to 11 ứng với Tý to Hợi)
  const palaces: PalaceData[] = [];
  for (let i = 0; i < 12; i++) {
    const tieuHanOffset = isNam 
      ? (i - tieuHanStartPos + 12) % 12 
      : (tieuHanStartPos - i + 12) % 12;

    palaces.push({
      index: i,
      chi: CHI_LIST[i],
      can: palaceCans[i],
      name: palaceNames[i],
      isMenh: i === menhChiIndex,
      isThan: i === thanChiIndex,
      daiHan: daiHanAges[i],
      tieuHanChi: CHI_LIST[tieuHanOffset],
      trangSinhStar: trangSinhMap[i] || '',
      stars: rawPalaceStars[i],
      hasTuan: tuanIndices.includes(i),
      hasTriet: trietIndices.includes(i)
    });
  }

  return {
    input,
    lunar,
    canChi: {
      canYear: yearCanChi.can,
      chiYear: yearCanChi.chi,
      canMonth: monthCanChi.can,
      chiMonth: monthCanChi.chi,
      canDay: dayCanChi.can,
      chiDay: dayCanChi.chi,
      canHour: hourCanChi.can,
      chiHour: hourCanChi.chi
    },
    solarDateStr: `${input.solarDay}/${input.solarMonth}/${input.solarYear}`,
    lunarDateStr: `${lunar.day}/${lunar.month}/${lunar.year} (${lunar.isLeap ? 'Nhuận' : 'Chính'})`,
    gioSinhChi: hourChi,
    amDuongNamNu,
    banMenh,
    cuc,
    menhChiIndex,
    thanChiIndex,
    amDuongThuanLy,
    cucMenhTuongSinh: cucMenhRel.type,
    palaces
  };
}

export * from './lunarCalendar';
export * from './canChiNapAm';
export * from './cucMenhThan';
export * from './starPlacer';
