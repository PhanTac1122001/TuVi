export type ElementType = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ'

export interface ChapterSection {
  id: string
  title: string
  content: string[]
  keyPoints?: string[]
  tableData?: {
    headers: string[]
    rows: string[][]
  }
  callout?: {
    title?: string
    content: string
    type?: 'info' | 'warning' | 'tip' | 'quote'
  }
}

export interface Chapter {
  id: string
  number: string
  title: string
  subtitle: string
  icon: string
  summary: string
  sections: ChapterSection[]
}

export interface PalaceInfo {
  id: string
  name: string
  vietnameseName: string
  element: ElementType
  symbol: string
  meaning: string
  scope: string[]
  tamHopWith: string[]
  xungChieuWith: string
  nhiHopWith: string
  giapCungWith: [string, string]
  detailedAnalysis: string
}

export interface StarInfo {
  id: string
  name: string
  category:
    | '14 Chính Tinh'
    | 'Lục Sát Tinh'
    | 'Lục Cát Tinh'
    | 'Tứ Hóa'
    | 'Bộ Tứ Hóa'
    | 'Bộ Tứ Đức'
    | 'Vòng Bác Sĩ'
    | 'Vòng Thái Tuế'
    | 'Vòng Tràng Sinh'
    | 'Bộ Đài Các & Quý Tinh'
    | 'Sát Ám & Bại Tinh'
    | 'Sao Lưu Niên'
    | 'Phụ Tinh Quan Trọng'
    | 'Phụ Tinh Khác'
    | string
  group?: 'Tử Vi Tinh Hệ' | 'Thiên Phủ Tinh Hệ' | 'Bắc Đẩu' | 'Nam Đẩu' | 'Trung Thiên' | string
  element: ElementType
  yinYang: 'Dương' | 'Âm'
  huaKhi?: string
  mieuVuong: {
    mieu?: string[]
    vuong?: string[]
    dac?: string[]
    ham?: string[]
  }
  characteristics: string
  appearance: string
  personality: string
  careerWealth: string
  ungVanHan?: string
  tuongMao?: string
}

export interface CombinationPattern {
  id: string
  name: string
  category: 'Phú Quý Cách' | 'Văn Cách' | 'Vũ Cách' | 'Biến Động' | 'Bần Họa Cách'
  stars: string[]
  description: string
  suitableCareers: string[]
  notes: string
}

export interface NapAmItem {
  canChi: string
  napAm: string
  element: ElementType
  hanhChiTiet: string
  tinhChat: string
  hopVoi: string[]
  khacVoi: string[]
  loiKhuyen: string
}

export interface BirthInput {
  name: string
  gender: 'Nam' | 'Nữ'
  calendarType: 'duong' | 'am'
  solarYear: number
  solarMonth: number
  solarDay: number
  solarHour: number
  solarMinute: number
  viewYear?: number
}

