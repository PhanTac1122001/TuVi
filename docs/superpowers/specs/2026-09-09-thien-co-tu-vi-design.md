# Thiết Kế Triển Khai: Mệnh Lý Thiên Cơ (Thiên Cơ Tử Vi)

## 1. Mục tiêu & Phạm vi
Tích hợp trọn vẹn nền tảng học thuật và kho tri thức luận giải chuyên sâu từ tài liệu **"Mệnh Lý Thiên Cơ"** (biên dịch bởi Lê Quang Lăng, chuyên phái Tam Hợp Nam Phái) vào ứng dụng [tuvi-tamminh-app](file:///c:/Users/Admin/Desktop/tuvi/tuvi-tamminh-app).

Bao gồm hai trụ cột lớn:
1. **Engine Lập Số & Thông Số Thiên Cơ**: Bổ sung Chủ Mệnh, Chủ Thân, Phân loại thế đất 12 Cung (Tứ Sinh/Mã, Tứ Bại/Đào Hoa, Tứ Mộ/Cô Độc, Thiên La/Địa Võng, Thiên/Địa/Nhân/Quỷ/Lôi/Không Môn), Kỵ Hành Cục, Cấm Kỵ 12 Con Giáp, và Tứ Hóa Can Cung (Phi Tinh).
2. **Hệ Thống Luận Đoán Chuyên Sâu**: Tích hợp các bộ quy tắc suy luận đặc sắc từ Chương I & Chương II của tài liệu:
   - Thân cư 6 vị trí và phối hợp tam phương tứ chính.
   - Nguyên lý *Nhất lục cộng tông* (Mệnh - Tật nhất thể).
   - Cơ chế *Tàng tài chi khố* (Tài Bạch - Điền Trạch - Huynh Đệ).
   - Tương tác sự nghiệp & phối ngẫu (Quan Lộc - Phu Thê).
   - Phong thủy và bất động sản (Điền Trạch - Tử Nữ).
   - Luận tính cách & nghề nghiệp theo 12 tháng sinh.

---

## 2. Kiến Trúc Dữ Liệu & Engine (`src/types/tuvi.types.ts`, `src/engine/`)

### 2.1. Cập nhật Types
- Thêm trường `TheDatType` cho 12 cung:
  ```typescript
  export type TheDatType = 
    | 'Tứ Mã (Tứ Sinh)' 
    | 'Tứ Bại (Đào Hoa)' 
    | 'Tứ Mộ (Cô Độc)' 
    | 'Thiên La' 
    | 'Địa Võng'
    | 'Bình thường';

  export type CungMonType = 'Thiên Môn' | 'Địa Môn' | 'Nhân Môn' | 'Quỷ Môn' | 'Lôi Môn' | 'Không Môn' | 'Thường';
  ```
- Thêm vào `PalaceData`:
  - `theDat: TheDatType`
  - `cungMon: CungMonType`
  - `cungCanTuHoa: { hoaLoc: string; hoaQuyen: string; hoaKhoa: string; hoaKi: string }`
- Thêm vào `ChartResult`:
  - `chuMenh: string` (Ví dụ: Tham Lang, Liêm Trinh...)
  - `chuThan: string` (Ví dụ: Linh Tinh, Thiên Lương...)
  - `kyHanhCuc: { cung1: Chi; cung2: Chi; lyDo: string }`
  - `camKyConGiap: string[]`
  - `thangSinhLuanGiai: string`

### 2.2. Bổ sung Engine Modules
1. **`src/engine/thienCoEngine.ts`**:
   - `getChuMenh(menhChi: Chi): string`:
     - Tý: Tham Lang, Sửu/Hợi: Cự Môn, Dần/Tuất: Lộc Tồn, Mão/Dậu: Văn Khúc, Thìn/Thân: Liêm Trinh, Tỵ/Mùi: Vũ Khúc, Ngọ: Phá Quân.
   - `getChuThan(yearChi: Chi): string`:
     - Tý: Linh Tinh, Sửu/Mùi: Thiên Tướng, Dần/Thân: Thiên Lương, Mão/Dậu: Thiên Đồng, Thìn/Tuất: Văn Xương, Tỵ/Hợi: Thiên Cơ.
   - `getTheDat(chi: Chi): { theDat: TheDatType; cungMon: CungMonType; yNghia: string }`:
     - Phân định tứ mã tứ sinh (Dần, Thân, Tỵ, Hợi), tứ bại đào hoa (Tý, Ngọ, Mão, Dậu), tứ mộ cô độc (Thìn, Tuất, Sửu, Mùi).
     - La Võng tại Thìn, Tuất.
     - Cung môn: Mão (Lôi môn), Hợi (Thiên môn), Tỵ (Địa môn), Dần (Nhân môn), Thân (Quỷ môn), Tuất & Hợi (Không môn).
   - `getKyHanh(cuc: CucType): { cung1: Chi; cung2: Chi; lyDo: string }`:
     - Hỏa lục cục kị Tuất, Hợi.
     - Thủy nhị cục & Thổ ngũ cục kị Thìn, Tỵ.
     - Kim tứ cục kị Sửu, Dần.
     - Mộc tam cục kị Thân, Dậu.
   - `getCamKyConGiap(yearChi: Chi): string[]`:
     - Tổng hợp cảnh báo xung sát theo 12 con giáp từ tài liệu.
   - `getCungCanTuHoa(cungCan: Can)`:
     - 10 thiên can hóa Lộc, Quyền, Khoa, Kị của từng cung.

2. **`src/data/thienCoData.ts`**:
   - Kho văn bản luận giải trích xuất từ 70 trang của *Mệnh Lý Thiên Cơ*:
     - Luận 12 tháng sinh.
     - Luận Thân cư 6 cung.
     - Luận chi tiết 12 cung (Mệnh, Huynh Đệ, Phu Thê, Tử Nữ, Tài Bạch, Tật Ách, Thiên Di, Nô Bộc, Quan Lộc, Điền Trạch, Phúc Đức, Phụ Mẫu).
     - Luận thế *Tàng tài chi khố* & *Mệnh Tật nhất thể*.

3. **Tích hợp vào `calculateTuViChart` trong `src/engine/index.ts`**.

---

## 3. Giao Diện Người Dùng (UI/UX)
1. **Thiên Bàn Trung Tâm (`ThienBan.tsx`)**:
   - Hiển thị thêm:
     - Chủ Mệnh & Chủ Thân
     - Cung Kỵ Hành của Bản Cục
     - Khuyến cáo con giáp bản mệnh
2. **Cung Vị 12 Ô (`PalaceCell.tsx`)**:
   - Huy hiệu (Badge) thế đất: `[Mã]`, `[Đào]`, `[Mộ]`, `[La Võng]`.
   - Tooltip / click hiển thị chi tiết Cung Môn & Tứ Hóa Phi Tinh của can cung.
3. **Tab Luận Giải Mới: "Mệnh Lý Thiên Cơ" (`ThienCoInterpretation.tsx`)**:
   - Thẻ điều hướng linh hoạt giữa **"Tam Minh Luận Đoán"** và **"Mệnh Lý Thiên Cơ"**.
   - Bảng phân tích chi tiết:
     - **Tâm Tính & Tháng Sinh**: Luận giải theo tháng sinh của bản mệnh.
     - **Thế Đứng Mệnh - Thân**: Phân tích vị trí đóng của Cung Thân và thế đất Mệnh.
     - **Tài Khố & Sự Nghiệp**: Phân tích Tàng tài chi khố (Điền Trạch - Tài Bạch - Huynh Đệ) và Quan Lộc - Phu Thê.
     - **Sức Khỏe & Thể Chất**: Phân tích quy tắc Mệnh Tật nhất thể.
     - **Khảo Cứu 12 Cung**: Chọn hoặc click vào bất kỳ cung nào để đọc bài luận chuyên biệt của cung đó theo sách.

---

## 4. Kế Hoạch Kiểm Thử
- **Unit Tests (`thienCoEngine.test.ts`)**:
  - Kiểm tra tính chính xác của Chủ Mệnh, Chủ Thân cho 12 địa chi.
  - Kiểm tra thế đất, cung môn, kỵ hành cục.
  - Kiểm tra tứ hóa phi tinh của 10 can cung.
- **Build & UI Verification**:
  - `npm test` vượt qua toàn bộ test cases.
  - `npm run build` không phát sinh lỗi TypeScript hay CSS.
