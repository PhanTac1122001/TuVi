import { describe, it, expect } from 'vitest';
import { THANG_SINH_DATA, THAN_CU_DATA, PALACE_THIENCO_DATA, SPECIAL_CONCEPTS_DATA } from './thienCoData';

describe('thienCoData integrity', () => {
  it('contains interpretation for all 12 lunar months', () => {
    for (let m = 1; m <= 12; m++) {
      expect(THANG_SINH_DATA[m]).toBeDefined();
      expect(THANG_SINH_DATA[m].title).toBeTruthy();
      expect(THANG_SINH_DATA[m].dacDiem).toBeTruthy();
      expect(THANG_SINH_DATA[m].ngheNghiep).toBeTruthy();
    }
  });

  it('contains interpretation for all 6 Than Cu positions', () => {
    const thanCuList = ['Thân cư Mệnh', 'Thân cư Phúc Đức', 'Thân cư Quan Lộc', 'Thân cư Thiên Di', 'Thân cư Tài Bạch', 'Thân cư Phu Thê'];
    thanCuList.forEach(t => {
      expect(THAN_CU_DATA[t]).toBeDefined();
      expect(THAN_CU_DATA[t].yNghia).toBeTruthy();
    });
  });

  it('contains interpretation for all 12 palaces', () => {
    const palaceNames = ['Mệnh', 'Huynh Đệ', 'Phu Thê', 'Tử Tức', 'Tài Bạch', 'Tật Ách', 'Thiên Di', 'Nô Bộc', 'Quan Lộc', 'Điền Trạch', 'Phúc Đức', 'Phụ Mẫu'];
    palaceNames.forEach(p => {
      expect(PALACE_THIENCO_DATA[p]).toBeDefined();
      expect(PALACE_THIENCO_DATA[p].biQuyet.length).toBeGreaterThan(0);
    });
  });

  it('contains special concepts from book', () => {
    expect(SPECIAL_CONCEPTS_DATA.tangTaiChiKho).toContain('Điền Trạch');
    expect(SPECIAL_CONCEPTS_DATA.menhTatNhatThe.toLowerCase()).toContain('nhất lục cộng tông');
  });
});
