import { describe, it, expect } from 'vitest';
import { findTuViPosition } from './starPlacer';
import { calculateTuViChart } from './index';

describe('Star Placer & Chart Calculation', () => {
  it('places Tu Vi star correctly according to Cục and Lunar Day', () => {
    // Thủy Nhị Cục (2), ngày 1 Âm lịch: 1 + 1 = 2 => q = 1, k = 1 (lẻ) => Dần (2) + (1-1) - 1 = Sửu (1)
    expect(findTuViPosition(2, 1)).toBe(1); // Sửu

    // Thủy Nhị Cục (2), ngày 2 Âm lịch: 2 chia 2 = 1 => Dần (2)
    expect(findTuViPosition(2, 2)).toBe(2); // Dần

    // Hỏa Lục Cục (6), ngày 6 Âm lịch: 6 chia 6 = 1 => Dần (2)
    expect(findTuViPosition(6, 6)).toBe(2); // Dần
  });

  it('calculates a full Tử Vi chart with all 14 major stars and 12 palaces', () => {
    const chart = calculateTuViChart({
      fullName: 'Nguyễn Văn A',
      gender: 'nam',
      solarDay: 15,
      solarMonth: 5,
      solarYear: 1990,
      solarHour: 10,
      solarMinute: 30
    });

    expect(chart.palaces).toHaveLength(12);
    expect(chart.canChi.canYear).toBe('Canh');
    expect(chart.canChi.chiYear).toBe('Ngọ');
    expect(chart.amDuongNamNu).toBe('Dương Nam');
    expect(chart.banMenh.element).toBe('Thổ'); // Canh Ngọ là Lộ Bàng Thổ

    // Check that Mệnh palace exists and has Dai Han = Cuc Number
    const menhPalace = chart.palaces.find(p => p.isMenh);
    expect(menhPalace).toBeDefined();
    expect(menhPalace?.daiHan).toBe(chart.cuc.number);

    // Collect all star names across 12 palaces
    const allStars = chart.palaces.flatMap(p => p.stars.map(s => s.name));
    const majorStars = [
      'Tử Vi', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng', 'Liêm Trinh',
      'Thiên Phủ', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương',
      'Thất Sát', 'Phá Quân'
    ];

    for (const starName of majorStars) {
      expect(allStars).toContain(starName);
    }

    // Check Tuần and Triệt
    const tuanPalaces = chart.palaces.filter(p => p.hasTuan);
    const trietPalaces = chart.palaces.filter(p => p.hasTriet);
    expect(tuanPalaces).toHaveLength(2);
    expect(trietPalaces).toHaveLength(2);

    // Check Vòng Trường Sinh on all 12 palaces
    const validTrangSinhStars = [
      'Tràng Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy',
      'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'
    ];
    for (const palace of chart.palaces) {
      expect(palace.trangSinhStar).toBeDefined();
      expect(validTrangSinhStars).toContain(palace.trangSinhStar);
    }

    // Check Thien Co attributes
    expect(chart.chuMenh).toBeDefined();
    expect(chart.chuThan).toBeDefined();
    expect(chart.kyHanhCuc).toBeDefined();
    expect(chart.camKyConGiap).toBeDefined();
    expect(chart.camKyConGiap?.length).toBeGreaterThan(0);

    for (const palace of chart.palaces) {
      expect(palace.theDat).toBeDefined();
      expect(palace.cungMon).toBeDefined();
      expect(palace.cungCanTuHoa).toBeDefined();
      expect(palace.cungCanTuHoa.hoaLoc).toBeTruthy();
      expect(palace.cungCanTuHoa.hoaKi).toBeTruthy();
    }
  });
});

