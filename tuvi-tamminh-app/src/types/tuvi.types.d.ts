export type Can = 'Giáp' | 'Ất' | 'Bính' | 'Đinh' | 'Mậu' | 'Kỷ' | 'Canh' | 'Tân' | 'Nhâm' | 'Quý';
export type Chi = 'Tý' | 'Sửu' | 'Dần' | 'Mão' | 'Thìn' | 'Tỵ' | 'Ngọ' | 'Mùi' | 'Thân' | 'Dậu' | 'Tuất' | 'Hợi';
export type NguHanh = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
export type AmDuong = 'Dương Nam' | 'Âm Nam' | 'Dương Nữ' | 'Âm Nữ';
export type DacHam = 'Miếu' | 'Vượng' | 'Đắc' | 'Bình' | 'Hãm';
export type StarCategory = 'Chính tinh' | 'Cát tinh' | 'Sát tinh' | 'Tứ Hóa' | 'Vòng Bác Sĩ' | 'Vòng Thái Tuế' | 'Vòng Tràng Sinh' | 'Phụ tinh khác';
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
export interface PalaceData {
    index: number;
    chi: Chi;
    can: Can;
    name: string;
    isMenh: boolean;
    isThan: boolean;
    daiHan: number;
    tieuHanChi: Chi;
    stars: Star[];
    hasTuan: boolean;
    hasTriet: boolean;
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
    palaces: PalaceData[];
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
        remedies: string[];
        lifePhilosophy: string;
    };
}
