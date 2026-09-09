import { describe, it, expect } from 'vitest';
import { STARS_118_DICTIONARY } from './stars118Data';
import { checkCucMenhRelation } from './tamMinhRules';

describe('Data Integrity & Rules', () => {
  it('contains all 14 major stars (Thập Tứ Chính Tinh)', () => {
    const majorStars = [
      'Tử Vi', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng', 'Liêm Trinh',
      'Thiên Phủ', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương',
      'Thất Sát', 'Phá Quân'
    ];
    for (const name of majorStars) {
      expect(STARS_118_DICTIONARY[name]).toBeDefined();
      expect(STARS_118_DICTIONARY[name].category).toBe('Chính tinh');
    }
  });

  it('contains Lục Sát Tinh and Tứ Hóa', () => {
    const satTinh = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'];
    for (const name of satTinh) {
      expect(STARS_118_DICTIONARY[name]).toBeDefined();
      expect(STARS_118_DICTIONARY[name].category).toBe('Sát tinh');
    }

    const tuHoa = ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Hóa Kỵ'];
    for (const name of tuHoa) {
      expect(STARS_118_DICTIONARY[name]).toBeDefined();
      expect(STARS_118_DICTIONARY[name].category).toBe('Tứ Hóa');
    }
  });

  it('evaluates Cục vs Mệnh relations correctly', () => {
    // Thủy sinh Mộc: Cục Thủy sinh Mệnh Mộc
    const rel1 = checkCucMenhRelation('Mộc', 'Thủy');
    expect(rel1.type).toBe('TuongSinh');
    expect(rel1.title).toContain('Cục Sinh Mệnh');

    // Thổ khắc Thủy: Cục Thổ khắc Mệnh Thủy
    const rel2 = checkCucMenhRelation('Thủy', 'Thổ');
    expect(rel2.type).toBe('CucKhacMenh');

    // Kim - Kim: Bình hòa
    const rel3 = checkCucMenhRelation('Kim', 'Kim');
    expect(rel3.type).toBe('BinhHoa');
  });
});
