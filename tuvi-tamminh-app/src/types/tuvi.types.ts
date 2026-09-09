export type Can = 'Giáp' | 'Ất' | 'Bính' | 'Đinh' | 'Mậu' | 'Kỷ' | 'Canh' | 'Tân' | 'Nhâm' | 'Quý';

export type Chi = 'Tý' | 'Sửu' | 'Dần' | 'Mão' | 'Thìn' | 'Tỵ' | 'Ngọ' | 'Mùi' | 'Thân' | 'Dậu' | 'Tuất' | 'Hợi';

export type NguHanh = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export type CucType = 'Thủy Nhị Cục' | 'Mộc Tam Cục' | 'Kim Tứ Cục' | 'Thổ Ngũ Cục' | 'Hỏa Lục Cục';

export type AmDuong = 'Dương Nam' | 'Âm Nam' | 'Dương Nữ' | 'Âm Nữ';

export type DacHam = 'Miếu' | 'Vượng' | 'Đắc' | 'Bình' | 'Hãm';

export type StarCategory = 
  | 'Chính tinh'
  | 'Cát tinh'
  | 'Sát tinh'
  | 'Tứ Hóa'
  | 'Vòng Bác Sĩ'
  | 'Vòng Thái Tuế'
  | 'Vòng Tràng Sinh'
  | 'Phụ tinh khác';

export interface Star {
  name: string;
  element: NguHanh;
  category: StarCategory;
  brightness?: DacHam;
  isGood: boolean;
  meaning?: string;
  vatDung?: string;
  benhLy?: string;
  tuongMao?: string;
  vanHan?: string;
}

export type TheDatType = 
  | 'Tứ Mã (Tứ Sinh)' 
  | 'Tứ Bại (Đào Hoa)' 
  | 'Tứ Mộ (Cô Độc)' 
  | 'Thiên La' 
  | 'Địa Võng'
  | 'Bình thường';

export type CungMonType = 
  | 'Thiên Môn' 
  | 'Địa Môn' 
  | 'Nhân Môn' 
  | 'Quỷ Môn' 
  | 'Lôi Môn' 
  | 'Không Môn' 
  | 'Thường';

export interface CanTuHoa {
  hoaLoc: string;
  hoaQuyen: string;
  hoaKhoa: string;
  hoaKi: string;
}

export interface PalaceData {
  index: number; // 0 to 11 corresponding to Tý (0) to Hợi (11)
  chi: Chi;
  can: Can;
  name: string; // Mệnh, Phụ Mẫu, Phúc Đức, Điền Trạch, Quan Lộc, Nô Bộc, Thiên Di, Tật Ách, Tài Bạch, Tử Tức, Phu Thê, Huynh Đệ
  isMenh: boolean;
  isThan: boolean;
  daiHan: number; // Tuổi bắt đầu đại hạn (vd: 2, 12, 22...)
  tieuHanChi: Chi; // Chi tiểu hạn
  trangSinhStar: string; // Tên sao vòng Trường Sinh tại cung này (Tràng Sinh, Mộc Dục, Đế Vượng, Mộ...)
  stars: Star[];
  hasTuan: boolean;
  hasTriet: boolean;
  theDat: TheDatType;
  cungMon: CungMonType;
  cungCanTuHoa: CanTuHoa;
}

export interface ChartInput {
  fullName: string;
  gender: 'nam' | 'nu';
  solarDay: number;
  solarMonth: number;
  solarYear: number;
  solarHour: number;
  solarMinute?: number;
  viewYear?: number;
  isLunarInput?: boolean;
  isLeapMonth?: boolean;
}

export interface LunarDate {
  day: number;
  month: number;
  year: number;
  isLeap: boolean;
}

export interface NapAmInfo {
  name: string;
  element: NguHanh;
}

export interface ChartResult {
  input: ChartInput;
  lunar: LunarDate;
  canChi: {
    canYear: Can;
    chiYear: Chi;
    canMonth: Can;
    chiMonth: Chi;
    canDay: Can;
    chiDay: Chi;
    canHour: Can;
    chiHour: Chi;
  };
  solarDateStr: string;
  lunarDateStr: string;
  gioSinhChi: Chi;
  amDuongNamNu: AmDuong;
  banMenh: NapAmInfo;
  cuc: {
    name: string;
    number: number;
    element: NguHanh;
  };
  menhChiIndex: number;
  thanChiIndex: number;
  amDuongThuanLy: boolean;
  cucMenhTuongSinh: 'TuongSinh' | 'TuongKhac' | 'BinhHoa' | 'CucKhacMenh' | 'MenhKhacCuc';
  palaces: PalaceData[]; // 12 cung từ Tý (0) đến Hợi (11)
  chuMenh?: string;
  chuThan?: string;
  kyHanhCuc?: {
    cung1: Chi;
    cung2: Chi;
    lyDo: string;
  };
  camKyConGiap?: string[];
  thangSinhLuanGiai?: string;
}

export interface TamMinhReportData {
  thienMinh: {
    overview: string;
    coreNature: string;
    strengths: string[];
    weaknesses: string[];
    careerAptitude: string;
  };
  diaMinh: {
    overview: string;
    currentMajorPeriod: {
      palace: string;
      startAge: number;
      endAge: number;
      analysis: string;
    };
    currentMinorPeriod: {
      year: number;
      palace: string;
      analysis: string;
    };
    environmentOpportunities: string[];
    risksAndThreats: string[];
  };
  nhanMinh: {
    overview: string;
    actionableAdvice: string[];
    remedies: string[]; // Phương pháp hóa giải chủ động
    lifePhilosophy: string;
  };
}
