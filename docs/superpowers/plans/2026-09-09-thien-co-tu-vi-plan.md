# Mệnh Lý Thiên Cơ Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Triển khai tích hợp toàn diện học thuật và kho tri thức luận giải của cuốn sách "Mệnh Lý Thiên Cơ" vào ứng dụng Tử Vi React, bao gồm Engine tính toán (Chủ Mệnh, Chủ Thân, Thế Đất 12 Cung, Kỵ Hành Cục, Cung Can Tứ Hóa) và Module Luận Giải Chuyên Sâu 12 Cung (Thân cư, Tàng tài chi khố, Mệnh Tật nhất thể, 12 tháng sinh).

**Architecture:** 
Mở rộng TypeScript definitions (`src/types/tuvi.types.ts`), xây dựng engine tính toán quy tắc Thiên Cơ (`src/engine/thienCoEngine.ts`), tạo cơ sở dữ liệu luận giải có cấu trúc (`src/data/thienCoData.ts`), tích hợp vào hàm tính lá số trung tâm (`src/engine/index.ts`), và phát triển component giao diện luận giải `ThienCoInterpretation.tsx` cùng với cập nhật `ThienBan.tsx` và `PalaceCell.tsx`.

**Tech Stack:** React 19, TypeScript, Vitest, CSS3 modern dark-mode aesthetic.

## Global Constraints
- Vitest cho tất cả unit tests, 100% tests phải PASS.
- Giữ vững kiến trúc hiện tại, không làm hỏng dữ liệu của Tam Minh Luận Đoán.
- Giao diện huyền học cao cấp: Dark theme hoàng gia phương Đông (#0b0f19, #c5a059, #e0c58a).

---

### Task 1: Engine Tính Toán Thiên Cơ (`thienCoEngine.ts` & types)

**Files:**
- Modify: `src/types/tuvi.types.ts`
- Create: `src/engine/thienCoEngine.ts`
- Create: `src/engine/thienCoEngine.test.ts`

**Interfaces:**
- Produces:
  ```typescript
  export function getChuMenh(menhChi: Chi): string;
  export function getChuThan(yearChi: Chi): string;
  export function getTheDat(chi: Chi): { theDat: TheDatType; cungMon: CungMonType; yNghia: string };
  export function getKyHanh(cucName: string): { cung1: Chi; cung2: Chi; lyDo: string };
  export function getCamKyConGiap(yearChi: Chi): string[];
  export function getCungCanTuHoa(can: Can): { hoaLoc: string; hoaQuyen: string; hoaKhoa: string; hoaKi: string };
  ```

- [ ] **Step 1: Write the failing tests in `src/engine/thienCoEngine.test.ts`**

```typescript
import { describe, it, expect } from 'vitest';
import { getChuMenh, getChuThan, getTheDat, getKyHanh, getCamKyConGiap, getCungCanTuHoa } from './thienCoEngine';

describe('thienCoEngine', () => {
  it('identifies correct Chu Menh and Chu Than', () => {
    expect(getChuMenh('Tý')).toBe('Tham Lang');
    expect(getChuMenh('Ngọ')).toBe('Phá Quân');
    expect(getChuMenh('Dần')).toBe('Lộc Tồn');
    expect(getChuThan('Tý')).toBe('Linh Tinh');
    expect(getChuThan('Thân')).toBe('Thiên Lương');
  });

  it('determines the dat and cung mon correctly', () => {
    expect(getTheDat('Dần').theDat).toBe('Tứ Mã (Tứ Sinh)');
    expect(getTheDat('Tý').theDat).toBe('Tứ Bại (Đào Hoa)');
    expect(getTheDat('Thìn').theDat).toBe('Thiên La');
    expect(getTheDat('Tuất').theDat).toBe('Địa Võng');
    expect(getTheDat('Mão').cungMon).toBe('Lôi Môn');
    expect(getTheDat('Hợi').cungMon).toBe('Thiên Môn');
  });

  it('calculates Ky Hanh according to Cuc', () => {
    const hoaKy = getKyHanh('Hỏa Lục Cục');
    expect(hoaKy.cung1).toBe('Tuất');
    expect(hoaKy.cung2).toBe('Hợi');
  });

  it('calculates Cung Can Tu Hoa correctly', () => {
    const giapHoa = getCungCanTuHoa('Giáp');
    expect(giapHoa.hoaLoc).toBe('Liêm Trinh');
    expect(giapHoa.hoaKi).toBe('Thái Dương');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/engine/thienCoEngine.test.ts`
Expected: FAIL (file or functions not found)

- [ ] **Step 3: Update `src/types/tuvi.types.ts` & Implement `src/engine/thienCoEngine.ts`**

Update `src/types/tuvi.types.ts` with `TheDatType`, `CungMonType`, and add fields to `PalaceData` and `ChartResult`.
Implement calculation functions in `src/engine/thienCoEngine.ts`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test src/engine/thienCoEngine.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/types/tuvi.types.ts src/engine/thienCoEngine.ts src/engine/thienCoEngine.test.ts
git commit -m "feat: implement thienCoEngine core calculations and types"
```

---

### Task 2: Kho Tri Thức Luận Giải Mệnh Lý Thiên Cơ (`src/data/thienCoData.ts`)

**Files:**
- Create: `src/data/thienCoData.ts`
- Create: `src/data/thienCoData.test.ts`

**Interfaces:**
- Produces:
  ```typescript
  export const THANG_SINH_DATA: Record<number, { title: string; dacDiem: string; ngheNghiep: string; luuY: string }>;
  export const THAN_CU_DATA: Record<string, { tenCung: string; yNghia: string; loiKhuyen: string }>;
  export const PALACE_THIENCO_DATA: Record<string, { khaiQuat: string; biQuyet: string[]; nguyenLyDacBiet: string }>;
  export const SPECIAL_CONCEPTS_DATA: { tangTaiChiKho: string; menhTatNhatThe: string; quanPhuTuongTac: string };
  ```

- [ ] **Step 1: Write test for `src/data/thienCoData.test.ts`**

```typescript
import { describe, it, expect } from 'vitest';
import { THANG_SINH_DATA, THAN_CU_DATA, PALACE_THIENCO_DATA, SPECIAL_CONCEPTS_DATA } from './thienCoData';

describe('thienCoData integrity', () => {
  it('contains interpretation for all 12 lunar months', () => {
    for (let m = 1; m <= 12; m++) {
      expect(THANG_SINH_DATA[m]).toBeDefined();
      expect(THANG_SINH_DATA[m].title).toBeTruthy();
    }
  });

  it('contains interpretation for all 12 palaces', () => {
    const palaceNames = ['Mệnh', 'Huynh Đệ', 'Phu Thê', 'Tử Nữ', 'Tài Bạch', 'Tật Ách', 'Thiên Di', 'Nô Bộc', 'Quan Lộc', 'Điền Trạch', 'Phúc Đức', 'Phụ Mẫu'];
    palaceNames.forEach(p => {
      expect(PALACE_THIENCO_DATA[p]).toBeDefined();
      expect(PALACE_THIENCO_DATA[p].biQuyet.length).toBeGreaterThan(0);
    });
  });

  it('contains special concepts from book', () => {
    expect(SPECIAL_CONCEPTS_DATA.tangTaiChiKho).toContain('Điền Trạch');
    expect(SPECIAL_CONCEPTS_DATA.menhTatNhatThe).toContain('nhất lục cộng tông');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/data/thienCoData.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement `src/data/thienCoData.ts` based on `thien-co-tu-vi.md`**

Extract and structure in-depth interpretations from pages 1-70 of `thien-co-tu-vi.md`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test src/data/thienCoData.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/data/thienCoData.ts src/data/thienCoData.test.ts
git commit -m "feat: add comprehensive Mệnh Lý Thiên Cơ interpretation dataset"
```

---

### Task 3: Tích Hợp Vào Engine Lập Lá Số (`src/engine/index.ts`)

**Files:**
- Modify: `src/engine/index.ts`
- Modify: `src/engine/starPlacer.test.ts`

**Interfaces:**
- Consumes: `getChuMenh`, `getChuThan`, `getTheDat`, `getKyHanh`, `getCamKyConGiap`, `getCungCanTuHoa` from `thienCoEngine`.
- Produces: Enriched `ChartResult` with full Thien Co attributes on chart and palaces.

- [ ] **Step 1: Write integration test assertions in `src/engine/starPlacer.test.ts`**

Verify that `calculateTuViChart` returns `chuMenh`, `chuThan`, `kyHanhCuc`, and palaces have `theDat` and `cungCanTuHoa`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/engine/starPlacer.test.ts`
Expected: FAIL

- [ ] **Step 3: Update `src/engine/index.ts`**

Map and assemble the new properties into `ChartResult` and each `PalaceData`.

- [ ] **Step 4: Run all tests to verify they pass**

Run: `npm test`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add src/engine/index.ts src/engine/starPlacer.test.ts
git commit -m "feat: integrate Thien Co calculations into chart result"
```

---

### Task 4: UI Enhancements & Module Luận Giải Thiên Cơ

**Files:**
- Modify: `src/components/chart/ThienBan.tsx`
- Modify: `src/components/chart/PalaceCell.tsx`
- Create: `src/components/report/ThienCoInterpretation.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/chart.css`

**Interfaces:**
- `ThienBan.tsx` displays Chủ Mệnh, Chủ Thân, Cung Kỵ Hành, Cấm Kỵ Con Giáp.
- `PalaceCell.tsx` displays badge thế đất: `[Mã]`, `[Đào]`, `[Mộ]`, `[La Võng]`.
- `ThienCoInterpretation.tsx` provides tabs/accordion for:
  + Luận Tổng Quan Mệnh Lý (Tháng Sinh, Thân cư cung nào, Mệnh Tật Nhất Thể, Tàng Tài Chi Khố).
  + Tra cứu chuyên sâu 12 Cung Vị.

- [ ] **Step 1: Update `ThienBan.tsx` & `PalaceCell.tsx`**

Add badge indicators and central board metadata display.

- [ ] **Step 2: Build `ThienCoInterpretation.tsx`**

Interactive rich panel with tabs for 12 Cung, Special Principles, and Month Analysis.

- [ ] **Step 3: Integrate Tab Switcher in `App.tsx`**

Allow toggle between "Tam Minh Luận Đoán" and "Mệnh Lý Thiên Cơ".

- [ ] **Step 4: Verify build and visual style**

Run: `npm run build`
Expected: Exit code 0, clean build.

- [ ] **Step 5: Commit**

```bash
git add src/components/chart/ThienBan.tsx src/components/chart/PalaceCell.tsx src/components/report/ThienCoInterpretation.tsx src/App.tsx src/styles/chart.css
git commit -m "feat: implement Thien Co UI views and comprehensive interpretation module"
```
