import { describe, it, expect } from 'vitest';
import { getChuMenh, getChuThan, getTheDat, getKyHanh, getCamKyConGiap, getCungCanTuHoa } from './thienCoEngine';

describe('thienCoEngine', () => {
  it('identifies correct Chu Menh and Chu Than', () => {
    expect(getChuMenh('Tý')).toBe('Tham Lang');
    expect(getChuMenh('Ngọ')).toBe('Phá Quân');
    expect(getChuMenh('Dần')).toBe('Lộc Tồn');
    expect(getChuMenh('Thìn')).toBe('Liêm Trinh');
    expect(getChuMenh('Tỵ')).toBe('Vũ Khúc');
    expect(getChuMenh('Mão')).toBe('Văn Khúc');
    expect(getChuMenh('Sửu')).toBe('Cự Môn');

    expect(getChuThan('Tý')).toBe('Linh Tinh');
    expect(getChuThan('Thân')).toBe('Thiên Lương');
    expect(getChuThan('Sửu')).toBe('Thiên Tướng');
    expect(getChuThan('Mão')).toBe('Thiên Đồng');
    expect(getChuThan('Thìn')).toBe('Văn Xương');
    expect(getChuThan('Tỵ')).toBe('Thiên Cơ');
  });

  it('determines the dat and cung mon correctly', () => {
    expect(getTheDat('Dần').theDat).toBe('Tứ Mã (Tứ Sinh)');
    expect(getTheDat('Thân').theDat).toBe('Tứ Mã (Tứ Sinh)');
    expect(getTheDat('Tý').theDat).toBe('Tứ Bại (Đào Hoa)');
    expect(getTheDat('Ngọ').theDat).toBe('Tứ Bại (Đào Hoa)');
    expect(getTheDat('Thìn').theDat).toBe('Thiên La');
    expect(getTheDat('Tuất').theDat).toBe('Địa Võng');
    expect(getTheDat('Sửu').theDat).toBe('Tứ Mộ (Cô Độc)');
    expect(getTheDat('Mùi').theDat).toBe('Tứ Mộ (Cô Độc)');

    expect(getTheDat('Mão').cungMon).toBe('Lôi Môn');
    expect(getTheDat('Hợi').cungMon).toBe('Thiên Môn');
    expect(getTheDat('Tỵ').cungMon).toBe('Địa Môn');
    expect(getTheDat('Dần').cungMon).toBe('Nhân Môn');
    expect(getTheDat('Thân').cungMon).toBe('Quỷ Môn');
    expect(getTheDat('Tuất').cungMon).toBe('Không Môn');
  });

  it('calculates Ky Hanh according to Cuc', () => {
    const hoaKy = getKyHanh('Hỏa Lục Cục');
    expect(hoaKy.cung1).toBe('Tuất');
    expect(hoaKy.cung2).toBe('Hợi');

    const thuyKy = getKyHanh('Thủy Nhị Cục');
    expect(thuyKy.cung1).toBe('Thìn');
    expect(thuyKy.cung2).toBe('Tỵ');

    const kimKy = getKyHanh('Kim Tứ Cục');
    expect(kimKy.cung1).toBe('Sửu');
    expect(kimKy.cung2).toBe('Dần');

    const mocKy = getKyHanh('Mộc Tam Cục');
    expect(mocKy.cung1).toBe('Thân');
    expect(mocKy.cung2).toBe('Dậu');
  });

  it('calculates Cung Can Tu Hoa correctly', () => {
    const giapHoa = getCungCanTuHoa('Giáp');
    expect(giapHoa.hoaLoc).toBe('Liêm Trinh');
    expect(giapHoa.hoaQuyen).toBe('Phá Quân');
    expect(giapHoa.hoaKhoa).toBe('Vũ Khúc');
    expect(giapHoa.hoaKi).toBe('Thái Dương');

    const atHoa = getCungCanTuHoa('Ất');
    expect(atHoa.hoaLoc).toBe('Thiên Cơ');
    expect(atHoa.hoaKi).toBe('Thái Âm');

    const canhHoa = getCungCanTuHoa('Canh');
    expect(canhHoa.hoaLoc).toBe('Thái Dương');
    expect(canhHoa.hoaKi).toBe('Thiên Đồng');
  });

  it('returns warnings for con giap', () => {
    const tyWarnings = getCamKyConGiap('Tý');
    expect(tyWarnings.length).toBeGreaterThan(0);
    expect(tyWarnings.some(w => w.includes('Ngọ'))).toBe(true);
  });
});
