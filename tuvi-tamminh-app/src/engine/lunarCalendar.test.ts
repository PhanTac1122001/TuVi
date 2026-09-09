import { describe, it, expect } from 'vitest';
import { solarToLunar, getChiHourFromHour, getLunarMonthName } from './lunarCalendar';
import { getYearCanChi, getMonthCanChi, getDayCanChi, getHourCanChi, getNapAm } from './canChiNapAm';

describe('Astronomical Module & Can Chi Nạp Âm', () => {
  it('converts Solar date to Lunar date accurately', () => {
    // 2024-02-10 is Mùng 1 Tết Giáp Thìn
    const lunar1 = solarToLunar(10, 2, 2024);
    expect(lunar1.day).toBe(1);
    expect(lunar1.month).toBe(1);
    expect(lunar1.year).toBe(2024);
    expect(lunar1.isLeap).toBe(false);

    // 1990-05-15
    const lunar2 = solarToLunar(15, 5, 1990);
    expect(lunar2.day).toBe(21);
    expect(lunar2.month).toBe(4);
    expect(lunar2.year).toBe(1990);
  });

  it('determines Chi of birth hour correctly', () => {
    expect(getChiHourFromHour(23)).toBe('Tý');
    expect(getChiHourFromHour(0)).toBe('Tý');
    expect(getChiHourFromHour(1)).toBe('Sửu');
    expect(getChiHourFromHour(6)).toBe('Mão');
    expect(getChiHourFromHour(12)).toBe('Ngọ');
    expect(getChiHourFromHour(18)).toBe('Dậu');
  });

  it('calculates Can Chi for Year, Month, Day, and Hour', () => {
    // Year 1984 is Giáp Tý
    const year1984 = getYearCanChi(1984);
    expect(year1984.can).toBe('Giáp');
    expect(year1984.chi).toBe('Tý');

    // Year 1990 is Canh Ngọ
    const year1990 = getYearCanChi(1990);
    expect(year1990.can).toBe('Canh');
    expect(year1990.chi).toBe('Ngọ');

    // Hour Can Chi: Can năm/ngày Giáp khởi Tý là Giáp Tý (Ngũ thử độn)
    const hourCanChi = getHourCanChi('Giáp', 'Tý');
    expect(hourCanChi.can).toBe('Giáp');
    expect(hourCanChi.chi).toBe('Tý');
  });

  it('determines Ngũ Hành Nạp Âm of 60 Hoa Giáp', () => {
    const napAmGiapTy = getNapAm('Giáp', 'Tý');
    expect(napAmGiapTy.element).toBe('Kim');
    expect(napAmGiapTy.name).toBe('Hải Trung Kim');

    const napAmCanhNgo = getNapAm('Canh', 'Ngọ');
    expect(napAmCanhNgo.element).toBe('Thổ');
    expect(napAmCanhNgo.name).toBe('Lộ Bàng Thổ');
  });
});
