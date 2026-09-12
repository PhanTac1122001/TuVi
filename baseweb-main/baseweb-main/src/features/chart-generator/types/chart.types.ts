/**
 * Dedicated Types for TuVi Chart Generator Feature (TuViVietnam Standard)
 */

export type FiveElement = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export type StarType = 'Major' | 'Good' | 'Bad' | 'TuHoa' | 'Ring' | 'Neutral' | 'Luu';

export type XemVanType = 'LuuNien' | 'TieuHan' | 'LuuNienDaiVan';

export interface UserInfo {
  name?: string;
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  gender: 'Nam' | 'Nữ';
  viewYear: number;
  calendarType?: 'duong' | 'am';
  isLeapMonth?: boolean;
  timezone?: number;
  // Tùy biến xem vận (theo chuẩn tuvi.cohoc.net)
  showHanNam?: boolean;
  luuTuHoa?: boolean;
  luuTuanTriet?: boolean;
  luuDaiVan?: boolean;
  luuSaoKhac?: boolean;
  locKyNhap?: boolean;
  khoaQuyenNhap?: boolean;
  xemVanTheo?: XemVanType;
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
  // Tùy biến xem vận
  luuTuan?: boolean;
  luuTriet?: boolean;
  isCurrentDaiVan?: boolean;
  isNienHan?: boolean;
  nienHanLabel?: string;
  phiTinhTags?: string[];
  luuNienCung?: string;
  thangHan?: number;
  daiVanCung?: string;
  phiTinhDetail?: {
    khoa?: string;
    quyen?: string;
    loc?: string;
    ky?: string;
  };
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

export interface StarGroupLocation {
  palaceName: string;
  palaceChi: string;
  starName: string;
  relationType: 'Tọa Thủ' | 'Tam Hợp' | 'Xung Chiếu' | 'Giáp Cung';
}

export interface StarGroupItem {
  id: string;
  name: string;
  type: 'good' | 'bad';
  category: string;
  stars: string[];
  foundStars: string[];
  locations: StarGroupLocation[];
  scope: 'Đồng Cung' | 'Tam Phương Tứ Chính' | 'Tam Hợp' | 'Toàn Bàn' | 'Giáp Cung';
  effect: string;
  remedy?: string;
  prominentPalaces: string[];
}

export interface StarGroupStatistics {
  totalGoodStars: number;
  totalBadStars: number;
  goodGroupCount: number;
  badGroupCount: number;
  balanceStatus: string;
  balanceComment: string;
}

export interface StarGroupAnalysis {
  statistics: StarGroupStatistics;
  goodGroups: StarGroupItem[];
  badGroups: StarGroupItem[];
}

export interface PalaceReading {
  name: string;
  chi: string;
  can: string;
  isMenh: boolean;
  isThan: boolean;
  daiVan: number;
  reading: string;
  goodGroups?: string[];
  badGroups?: string[];
}

export interface VanHanReading {
  currentAge: number;
  currentDaiVanPalace: string;
  daiVanText: string;
  tieuVanText: string;
}

export interface TamMinhPillar {
  name: string;
  score: number;
  status: string;
  highlights: string[];
  advice: string;
}

export interface TamMinhStrategyItem {
  title: string;
  detail: string;
  action: string;
}

export interface TamMinhStrategy {
  career: TamMinhStrategyItem;
  wealth: TamMinhStrategyItem;
  relationship: TamMinhStrategyItem;
  health: TamMinhStrategyItem;
}

export interface TamMinhActionPlanItem {
  timeline: string;
  focus: string;
  actions: string[];
}

export interface TamMinhAnalysis {
  theCo: {
    name: string;
    badgeColor: string;
    overview: string;
    strategySummary: string;
  };
  pillars: {
    thien: TamMinhPillar;
    dia: TamMinhPillar;
    nhan: TamMinhPillar;
  };
  strategies: TamMinhStrategy;
  actionPlans: TamMinhActionPlanItem[];
}

export interface TuViInterpretation {
  overview: OverviewInterpretation;
  palaceReadings: PalaceReading[];
  cachCuc: CachCucItem[];
  vanHan: VanHanReading;
  starGroupAnalysis: StarGroupAnalysis;
  tamMinh?: TamMinhAnalysis;
}
