import { describe, it, expect } from 'vitest';
import { calculateTuViChart } from './index';
import { generateTamMinhReport } from './tamMinhEngine';

describe('Tam Minh Interpretation Engine', () => {
  it('generates a comprehensive 3-pillar Tam Minh report', () => {
    const chart = calculateTuViChart({
      fullName: 'Trần Văn Minh',
      gender: 'nam',
      solarDay: 1,
      solarMonth: 1,
      solarYear: 1995,
      solarHour: 6,
      viewYear: 2026
    });

    const report = generateTamMinhReport(chart, 2026);

    // Thiên Minh
    expect(report.thienMinh).toBeDefined();
    expect(report.thienMinh.overview).toContain('Đương số tuổi');
    expect(report.thienMinh.strengths.length).toBeGreaterThan(0);
    expect(report.thienMinh.weaknesses.length).toBeGreaterThan(0);

    // Địa Minh
    expect(report.diaMinh).toBeDefined();
    expect(report.diaMinh.currentMajorPeriod.startAge).toBeGreaterThanOrEqual(2);
    expect(report.diaMinh.environmentOpportunities.length).toBeGreaterThan(0);

    // Nhân Minh
    expect(report.nhanMinh).toBeDefined();
    expect(report.nhanMinh.actionableAdvice.length).toBeGreaterThan(0);
    expect(report.nhanMinh.remedies.length).toBeGreaterThan(0);
    expect(report.nhanMinh.lifePhilosophy).toContain('Biết mình');
  });
});
