/**
 * TypeScript definitions for TuVi Engine and Interpretation
 */

export type FiveElement = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export type StarType = 'Major' | 'Good' | 'Bad' | 'TuHoa' | 'Ring' | 'Neutral' | 'Luu';

export interface UserInfo {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  gender: 'Nam' | 'Nữ';
  viewYear: number;
  timezone?: number;
}

export interface LunarInfo {
  lunarDay: number;
  lunarMonth: number;
  lunarYear: number;
  isLeapMonth: boolean;
  yearCan: string;
  yearChi: string;
  yearCanIndex: number;
  yearChiIndex: number;
  monthCan: string;
  monthChi: string;
  monthCanIndex: number;
  monthChiIndex: number;
  dayCan: string;
  dayChi: string;
  hourCan: string;
  hourChi: string;
  hourChiIndex: number;
}

export interface MajorStar {
  name: string;
  strength: string;
  element: string;
}

export interface MinorStar {
  name: string;
  rawName?: string;
  element: string;
  type: StarType;
}

export interface TuViPalace {
  index: number;
  chi: string;
  can: string;
  canShorthand: string;
  name: string;
  isMenh: boolean;
  isThan: boolean;
  majorStars: MajorStar[];
  minorStars: MinorStar[];
  trangSinhStar: string;
  tuan: boolean;
  triet: boolean;
  daiVan: number;
  tieuVanChi: string;
  tieuVanMonth: string;
}

export interface ChartMeta {
  canChiYear: string;
  canChiMonth: string;
  canChiDay: string;
  canChiHour: string;
  viewYearCanChi: string;
  napAmMenh: {
    name: string;
    element: string;
  };
  cuc: {
    name: string;
    value: number;
    element: string;
  };
  chuMenh: string;
  chuThan: string;
  yinYangGender: string;
  yinYangHarmony: string;
  elementHarmony: string;
  thanCu: string;
}

export interface TuViChart {
  userInfo: UserInfo;
  lunarInfo: LunarInfo;
  canChi: {
    yearCan: string;
    yearChi: string;
    monthCan: string;
    monthChi: string;
    dayCan: string;
    dayChi: string;
    hourCan: string;
    hourChi: string;
  };
  meta: ChartMeta;
  palaces: TuViPalace[];
}

export interface ElementRelation {
  status: string;
  detail: string;
}

export interface OverviewInterpretation {
  summary: string;
  elementRelation: ElementRelation;
  thanCuDetail: string;
}

export interface CachCucItem {
  name: string;
  type: string;
  description: string;
}

export interface PalaceReading {
  name: string;
  chi: string;
  can: string;
  isMenh: boolean;
  isThan: boolean;
  daiVan: number;
  reading: string;
}

export interface VanHanReading {
  currentAge: number;
  currentDaiVanPalace: string;
  daiVanText: string;
  tieuVanText: string;
}

export interface TuViInterpretation {
  overview: OverviewInterpretation;
  palaceReadings: PalaceReading[];
  cachCuc: CachCucItem[];
  vanHan: VanHanReading;
}
