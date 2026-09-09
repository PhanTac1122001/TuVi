import { Can, Chi, LunarDate } from '../types/tuvi.types';

export const CAN_LIST: Can[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
export const CHI_LIST: Chi[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

export function jdn(day: number, month: number, year: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

export function getNewMoonDay(k: number, timeZone = 7): number {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = Math.PI / 180;

  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.00000347 * T3;
  Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);

  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;

  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * M * dr);
  C1 -= 0.4068 * Math.sin(Mpr * dr) - 0.0161 * Math.sin(2 * Mpr * dr);
  C1 += 0.0104 * Math.sin(2 * F * dr) - 0.0051 * Math.sin((M + Mpr) * dr);
  C1 -= 0.0074 * Math.sin((M - Mpr) * dr) + 0.0004 * Math.sin((2 * F + M) * dr);

  const JdNew = Jd1 + C1;
  return Math.floor(JdNew + 0.5 + timeZone / 24);
}

export function getSunLongitude(jdnDay: number, timeZone = 7): number {
  const T = (jdnDay - 2451545.5 - timeZone / 24) / 36525;
  const T2 = T * T;
  const dr = Math.PI / 180;
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2;
  const C = (1.9146 - 0.004817 * T) * Math.sin(M * dr) + (0.019993 - 0.000101 * T) * Math.sin(2 * M * dr);
  let L = (L0 + C) * dr;
  L = L - 2 * Math.PI * Math.floor(L / (2 * Math.PI));
  return Math.floor(L / (Math.PI / 6));
}

export function getLunarMonth11(yy: number, timeZone = 7): number {
  const off = jdn(31, 12, yy) - 2415021;
  const k = Math.floor(off / 29.5305888);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitude(nm, timeZone);
  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }
  return nm;
}

export function getLeapMonthOffset(a11: number, timeZone = 7): number {
  const k = Math.floor((a11 - 2415021) / 29.5305888 + 0.5);
  let last = getSunLongitude(getNewMoonDay(k, timeZone), timeZone);
  let i = 1;
  while (true) {
    const arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    if (arc === last) {
      return i;
    }
    last = arc;
    i++;
  }
}

export function getChiHourFromHour(hour: number, minute = 0): Chi {
  const totalMin = hour * 60 + minute;
  // Giờ Tý: 23:00 - 00:59
  if (totalMin >= 23 * 60 || totalMin < 1 * 60) return 'Tý';
  const index = Math.floor((totalMin - 60) / 120) + 1;
  return CHI_LIST[index % 12];
}

export function getChiIndex(chi: Chi): number {
  return CHI_LIST.indexOf(chi);
}

export function getCanIndex(can: Can): number {
  return CAN_LIST.indexOf(can);
}

export function solarToLunar(day: number, month: number, year: number, timeZone = 7): LunarDate {
  const dayNumber = jdn(day, month, year);
  const k = Math.floor((dayNumber - 2415021) / 29.5305888);
  let monthStart = getNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }
  let a11 = getLunarMonth11(year, timeZone);
  let b11 = a11;
  let lunarYear: number;
  if (a11 >= monthStart) {
    lunarYear = year;
    a11 = getLunarMonth11(year - 1, timeZone);
  } else {
    lunarYear = year + 1;
    b11 = getLunarMonth11(year + 1, timeZone);
  }

  const lunarDay = dayNumber - monthStart + 1;
  let diff = Math.round((monthStart - a11) / 29.5305888);
  let lunarLeap = 0;
  const leapMonthDiff = Math.round((b11 - a11) / 29.5305888);
  if (leapMonthDiff > 12) {
    const leap = getLeapMonthOffset(a11, timeZone);
    if (diff >= leap) {
      lunarLeap = diff === leap ? 1 : 0;
      diff = diff - 1;
    }
  }

  let lunarMonth = diff + 11;
  if (lunarMonth > 12) {
    lunarMonth = lunarMonth - 12;
  }

  let effectiveLunarYear = lunarYear;
  if (lunarMonth >= 11 && month <= 2) {
    effectiveLunarYear = year - 1;
  }

  return {
    day: lunarDay,
    month: lunarMonth,
    year: effectiveLunarYear,
    isLeap: Boolean(lunarLeap)
  };
}

export function getLunarMonthName(month: number, isLeap: boolean): string {
  return `${isLeap ? 'Nhuận ' : ''}Tháng ${month}`;
}
