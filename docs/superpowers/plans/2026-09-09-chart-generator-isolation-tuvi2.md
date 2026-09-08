# Kế Hoạch Triển Khai: Tách Biệt Module Lập Lá Số & Tích Hợp Chuẩn TuVi-2

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tách riêng kiến trúc module Lập Lá Số thành một feature độc lập trong `baseweb-main` (`src/features/chart-generator`), port nguyên bản Engine, CSS Paper Theme truyền thống, bàn cờ 4x4, Thiên Bàn triện đỏ, phù hiệu Tuần Triệt viền, 4 tab luận giải và công cụ in ấn từ `TuVi-2`.

**Architecture:** Tạo module tự quản `src/features/chart-generator` chứa đầy đủ Engine an sao (Nam Phái chuẩn TuViVietnam.vn), hệ thống Types, CSS giao diện giấy độc lập không bị ảnh hưởng bởi theme Dark/Light của trang giáo trình, các component con phân rã rõ ràng (Form, Thiên Bàn, 12 Cung, Phù hiệu Tuần Triệt, 4 Tab Luận giải, Actions).

**Tech Stack:** React 18, TypeScript, Vanilla CSS (Authentic TuViVietnam paper palette), Vite.

## Global Constraints
- Engine an sao phải khớp 100% kết quả từ `TuVi-2` (bao gồm Nguyệt Hạn, Tiểu Vận Nam Phái, Thiên Phủ Vượng tại Tuất).
- Màu sắc ngũ hành hiển thị trên lá số tuyệt đối không bị đảo hay biến dạng khi đổi theme web: Kim (Xám #888888), Mộc (Xanh lục #008000), Thủy (Đen #000000), Hỏa (Đỏ #cc0000), Thổ (Cam vàng #d97706).
- Không làm ảnh hưởng hay phá vỡ các trang hiện có: Giáo trình (`/giao-trinh`), Bàn 12 Cung (`/12-cung`), Tra cứu (`/tra-cuu`).

---

### Task 1: Thiết Lập Cấu Trúc Module & Port Engine An Sao Chuẩn TuVi-2

**Files:**
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/types/chart.types.ts`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/engine/lunarCalendar.ts`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/engine/starMetadata.ts`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/engine/tuviEngine.ts`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/engine/tuviInterpreter.ts`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/engine/index.ts`
- Test: `baseweb-main/baseweb-main/src/features/chart-generator/engine/tuviEngine.test.ts`

**Interfaces:**
- Produces: `generateTuViChart(userInfo: UserInfo): TuViChart`, `generateInterpretation(chart: TuViChart): TuViInterpretation`

- [ ] **Step 1: Tạo file types `chart.types.ts`**
Định nghĩa đầy đủ kiểu dữ liệu: `UserInfo`, `MajorStar`, `MinorStar`, `Palace`, `TuViChart`, `TuViInterpretation`, `CachCucItem`, `PalaceReading`.

- [ ] **Step 2: Port các tệp Engine sang TypeScript chuẩn**
Đưa `lunarCalendar.ts`, `starMetadata.ts`, `tuviEngine.ts`, `tuviInterpreter.ts` vào `src/features/chart-generator/engine/` với TypeScript typing chặt chẽ.

- [ ] **Step 3: Viết test runner kiểm thử 6 test cases chuẩn của TuVi-2**
Tạo file kiểm thử `tuviEngine.test.ts` kiểm tra:
1. Nam Bính Dần 1986 xem 2026.
2. Nữ Tân Tỵ 2001 xem 2026.
3. Nam Canh Thìn 2000.
4. Nữ Kỷ Mão 1999.
5. Hồ sơ mặc định (Nguyễn Văn An 01/12/2001).
6. Thiên Phủ(V) tại Tuất chuẩn ảnh TuViVietnam.vn.

- [ ] **Step 4: Chạy test xác nhận Engine an sao đạt 100% pass**
Chạy: `npx ts-node` hoặc node test runner cho test file.

- [ ] **Step 5: Commit Task 1**
`git commit -m "feat(chart): create isolated chart-generator engine and types from TuVi-2"`

---

### Task 2: Port CSS Giao Diện Giấy Truyền Thống & Xây Dựng Component Bàn Cờ 4x4

**Files:**
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/styles/tuviVietnamChart.css`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/ThienBanCell.tsx`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/PalaceCell.tsx`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/BorderBadges.tsx`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/ChartBoard.tsx`

**Interfaces:**
- Consumes: `TuViChart` từ `engine/tuviEngine`
- Produces: `<ChartBoard chart={chart} userName={name} />`

- [ ] **Step 1: Tạo stylesheet `tuviVietnamChart.css`**
Cách ly toàn bộ class dưới namespace `.tuvi-authentic-chart` để đảm bảo theme giấy trắng viền đen mực tàu, chữ ngũ hành chuẩn không bị ảnh hưởng bởi theme của web. Hỗ trợ Media Query `@media print` để xuất bản in A4 sắc nét.

- [ ] **Step 2: Tạo `ThienBanCell.tsx`**
Hiển thị đầy đủ thông tin: Tiêu đề Diễn đàn Tử Vi Việt Nam, LÁ SỐ TỬ VI, bảng thông tin Âm Dương, Mệnh Cục, Chủ Mệnh, Chủ Thân, Mệnh Cục thuận/nghịch lý, Thân cư, và Triện đỏ đóng dấu góc phải.

- [ ] **Step 3: Tạo `PalaceCell.tsx`**
Hiển thị Can Chi cung viết tắt, Tên cung (+ Thân nếu có), Đại Vận; Chính tinh kèm miếu hãm (M, V, Đ, B, H); Phụ tinh chia 2 cột trái (Cát tinh/Tứ Hóa) & phải (Sát bại tinh); Chân ô hiển thị Chi tiểu vận, Tràng sinh, Nguyệt hạn.

- [ ] **Step 4: Tạo `BorderBadges.tsx` & `ChartBoard.tsx`**
Lắp ghép 12 cung vào lưới Địa Bàn 4x4 và đặt phù hiệu Tuần / Triệt chính xác tại viền chia các ô cung tương ứng.

- [ ] **Step 5: Commit Task 2**
`git commit -m "feat(chart): implement authentic 4x4 paper chart board components"`

---

### Task 3: Xây Dựng Form Nhập Liệu, 4 Tab Luận Giải & Thanh Công Cụ In Ấn

**Files:**
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/ChartForm.tsx`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/InterpretationTabs.tsx`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/components/ChartActions.tsx`
- Create: `baseweb-main/baseweb-main/src/features/chart-generator/index.ts`

**Interfaces:**
- Consumes: `TuViChart`, `TuViInterpretation`
- Produces: Module `chart-generator` sẵn sàng nhúng vào bất kỳ đâu

- [ ] **Step 1: Tạo `ChartForm.tsx`**
Form nhập liệu chuẩn, responsive, tự động chuyển đổi Dương lịch - Âm lịch, hỗ trợ chọn năm xem hạn.

- [ ] **Step 2: Tạo `InterpretationTabs.tsx`**
4 Tab luận giải chuẩn từ TuVi-2:
1. TỔNG QUAN LÁ SỐ
2. CÁCH CỤC ĐẶC BIỆT
3. LUẬN GIẢI 12 CUNG
4. LUẬN VẬN HẠN (Đại Vận & Tiểu Vận)

- [ ] **Step 3: Tạo `ChartActions.tsx`**
Các nút chức năng: In lá số (window.print() với CSS in chuyên biệt), Chế độ tập trung (Fullscreen/Focus mode), Tải lại mẫu mặc định.

- [ ] **Step 4: Tạo `index.ts` export toàn bộ module**

- [ ] **Step 5: Commit Task 3**
`git commit -m "feat(chart): implement ChartForm, InterpretationTabs, and ChartActions"`

---

### Task 4: Cập Nhật Trang `ChartGeneratorPage.tsx` & Phân Tách Menu Điều Hướng

**Files:**
- Modify: `baseweb-main/baseweb-main/src/pages/ChartGeneratorPage.tsx`
- Modify: `baseweb-main/baseweb-main/src/components/layout/Header.tsx`
- Modify: `baseweb-main/baseweb-main/src/utils/tuviCalculator.ts`

- [ ] **Step 1: Cập nhật `ChartGeneratorPage.tsx`**
Thay thế toàn bộ ruột trang bằng module độc lập `src/features/chart-generator`, bọc trong container độc lập có nút mở rộng / in ấn.

- [ ] **Step 2: Cập nhật `Header.tsx`**
Phân nhóm rõ ràng trên menu hoặc làm nổi bật nút "Lập Bàn Lá Số" như một công cụ chuyên biệt phân biệt với nhóm tài liệu học thuật (Giáo trình, 12 Cung, Tra cứu).

- [ ] **Step 3: Cập nhật `tuviCalculator.ts`**
Re-export từ module `features/chart-generator` mới để đảm bảo tính tương thích ngược.

- [ ] **Step 4: Commit Task 4**
`git commit -m "feat(page): wire isolated chart-generator module to ChartGeneratorPage and Header"`

---

### Task 5: Kiểm Tra Toàn Diện, Type Checking & Build Verification

**Files:**
- Test: Toàn bộ project `baseweb-main`

- [ ] **Step 1: Chạy Typecheck**
Chạy `npx tsc --noEmit` trong `baseweb-main` để xác nhận không có bất kỳ lỗi TypeScript nào.

- [ ] **Step 2: Chạy Build**
Chạy `npm run build` trong `baseweb-main` để xác minh bundle thành công.

- [ ] **Step 3: Kiểm tra giao diện trên trình duyệt**
Kiểm tra tính năng an sao, tính năng xem 4 tab luận giải, tính năng in lá số không lỗi layout.

- [ ] **Step 4: Commit Task 5 & Hoàn thiện**
`git commit -m "chore(chart): finalize chart isolation, verification passes"`
