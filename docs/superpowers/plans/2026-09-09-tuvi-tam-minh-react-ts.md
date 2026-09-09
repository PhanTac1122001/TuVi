# Lập Lá Số Tử Vi Tam Minh (React + TypeScript) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng ứng dụng web React + TypeScript độc lập (`tuvi-tamminh-app`) để lập lá số Tử Vi chuẩn xác 12 cung, tích hợp hệ thống luận giải 3 trụ cột (Thiên Minh - Địa Minh - Nhân Minh) và tra cứu 118 sao từ sách "Tử Vi Tam Minh".

**Architecture:** Kiến trúc phân tầng tách biệt hoàn toàn giữa `engine` tính toán thiên văn / thuật toán an sao (Zero-dependency, pure TypeScript), `data` 118 sao và triết lý Tam Minh, và tầng `components` giao diện Lá số Tử Vi thẩm mỹ cao cấp (Dark Oriental Glassmorphism) cùng báo cáo luận giải tương tác.

**Tech Stack:** React 19, TypeScript, Vite, Lucide React, Vitest.

## Global Constraints
- Nguồn dữ liệu và thuật toán bám sát sách: `c:\Users\Admin\Desktop\tuvi\Tử Vi Tam Minh - Sách\Tử Vi Tam Minh - Sách.docx` (và bản trích xuất `tuvi_tam_minh_extracted.txt`).
- Khởi tạo trong thư mục độc lập: `c:\Users\Admin\Desktop\tuvi\tuvi-tamminh-app`.
- Không phụ thuộc vào backend, toàn bộ tính toán chạy client-side hiệu năng cao.
- Độ chính xác: Lịch Âm - Dương theo múi giờ Việt Nam (+7), an đủ 14 chính tinh, 12 sao Bác Sĩ, 12 sao Thái Tuế, 12 sao Tràng Sinh, Lục Sát Tinh, Tứ Hóa, Tuần Không, Triệt Không, các sao phụ và lưu niên.

---

### Task 1: Scaffolding dự án mới `tuvi-tamminh-app`

**Files:**
- Create: `tuvi-tamminh-app/package.json`
- Create: `tuvi-tamminh-app/tsconfig.json`
- Create: `tuvi-tamminh-app/tsconfig.app.json`
- Create: `tuvi-tamminh-app/tsconfig.node.json`
- Create: `tuvi-tamminh-app/vite.config.ts`
- Create: `tuvi-tamminh-app/index.html`
- Create: `tuvi-tamminh-app/src/main.tsx`
- Create: `tuvi-tamminh-app/src/App.tsx`

**Interfaces:**
- Produces: Môi trường chạy Vite + React 19 + TypeScript với lệnh `npm run dev`, `npm run build`, `npm run test`.

- [ ] **Step 1: Khởi tạo package.json và cài đặt dependencies**
- [ ] **Step 2: Cấu hình vite.config.ts và tsconfig**
- [ ] **Step 3: Tạo index.html, main.tsx và App.tsx khung cơ bản**
- [ ] **Step 4: Kiểm tra build thử nghiệm (`npm run build`)**
- [ ] **Step 5: Commit scaffolding**

---

### Task 2: Định nghĩa Types & Dữ liệu 118 Sao từ Sách Tam Minh

**Files:**
- Create: `tuvi-tamminh-app/src/types/tuvi.types.ts`
- Create: `tuvi-tamminh-app/src/data/stars118Data.ts`
- Create: `tuvi-tamminh-app/src/data/tamMinhRules.ts`

**Interfaces:**
- Produces: `Can`, `Chi`, `NguHanh`, `CucType`, `Star`, `PalaceData`, `ChartResult`, `TamMinhReportData`
- Produces: `STARS_118_DICTIONARY`: Record chứa 118 sao với ngũ hành, tính chất cát/hung, ý nghĩa vận hạn, bệnh lý, tướng mạo, đồ vật.

- [ ] **Step 1: Tạo types định nghĩa đầy đủ cấu trúc dữ liệu Tử Vi & Tam Minh**
- [ ] **Step 2: Xây dựng cơ sở dữ liệu `stars118Data.ts` từ file sách trích xuất**
- [ ] **Step 3: Xây dựng bộ quy tắc luận giải `tamMinhRules.ts`**
- [ ] **Step 4: Viết test kiểm tra tính toàn vẹn của dữ liệu sao**
- [ ] **Step 5: Commit Task 2**

---

### Task 3: Astronomical Module & Can Chi Nạp Âm

**Files:**
- Create: `tuvi-tamminh-app/src/engine/lunarCalendar.ts`
- Create: `tuvi-tamminh-app/src/engine/canChiNapAm.ts`
- Test: `tuvi-tamminh-app/src/engine/lunarCalendar.test.ts`

**Interfaces:**
- Produces: `solarToLunar(day, month, year, timeZone): LunarDate`
- Produces: `getCanChi(lunarDate, hour): { canYear, chiYear, canMonth, chiMonth, canDay, chiDay, canHour, chiHour }`
- Produces: `getNapAm(can, chi): { element: NguHanh, name: string }`

- [ ] **Step 1: Viết failing test cho chuyển đổi Âm Dương lịch & Can Chi**
- [ ] **Step 2: Hiện thực `lunarCalendar.ts` (thuật toán Hồ Ngọc Đức chuẩn VN UTC+7)**
- [ ] **Step 3: Hiện thực `canChiNapAm.ts` (Lục thập hoa giáp, Ngũ hổ độn, Ngũ thử độn)**
- [ ] **Step 4: Chạy test kiểm tra độ chính xác mốc ngày tháng**
- [ ] **Step 5: Commit Task 3**

---

### Task 4: Core Star Placer & Engine An Sao

**Files:**
- Create: `tuvi-tamminh-app/src/engine/cucMenhThan.ts`
- Create: `tuvi-tamminh-app/src/engine/starPlacer.ts`
- Create: `tuvi-tamminh-app/src/engine/index.ts`
- Test: `tuvi-tamminh-app/src/engine/starPlacer.test.ts`

**Interfaces:**
- Produces: `findMenhThan(month, hour): { menhChiIndex, thanChiIndex }`
- Produces: `findCuc(canYear, menhChiIndex): CucType`
- Produces: `placeAllStars(chartInput): Record<number, PalaceData>`
- Produces: `calculateTuViChart(input: ChartInput): ChartResult`

- [ ] **Step 1: Viết test cho thuật toán an 14 chính tinh & các vòng sao**
- [ ] **Step 2: Cài đặt định Cung Mệnh, Thân và Định Ngũ Hành Cục**
- [ ] **Step 3: Cài đặt an 14 Chính tinh (hệ Tử Vi và hệ Thiên Phủ kèm đắc hãm)**
- [ ] **Step 4: Cài đặt các vòng: Bác Sĩ (Lộc Tồn), Thái Tuế, Tràng Sinh, Lục Sát Tinh, Tứ Hóa, Tuần, Triệt và các sao chi/can/giờ/tháng**
- [ ] **Step 5: Chạy test xác minh lá số mẫu chuẩn xác và commit**

---

### Task 5: Động Cơ Luận Giải Tam Minh (`TamMinhEngine`)

**Files:**
- Create: `tuvi-tamminh-app/src/engine/tamMinhEngine.ts`
- Test: `tuvi-tamminh-app/src/engine/tamMinhEngine.test.ts`

**Interfaces:**
- Produces: `generateTamMinhReport(chart: ChartResult): TamMinhReportData`
  - `thienMinh`: Phân tích cốt cách, tư chất bẩm sinh, sở trường, bản mệnh vs cục, âm dương thuận nghịch.
  - `diaMinh`: Vận thế, đại hạn 10 năm hiện tại, tiểu hạn năm xem, môi trường xung quanh.
  - `nhanMinh`: Năng lực ứng biến, khuyến nghị hành động, phương pháp hóa giải chủ động.

- [ ] **Step 1: Viết test cho hàm sinh báo cáo Tam Minh**
- [ ] **Step 2: Hiện thực logic luận giải Thiên Minh, Địa Minh, Nhân Minh**
- [ ] **Step 3: Chạy test xác minh báo cáo sinh ra mạch lạc, đầy đủ dữ kiện**
- [ ] **Step 4: Commit Task 5**

---

### Task 6: Giao Diện Lá Số 12 Cung & Thiên Bàn

**Files:**
- Create: `tuvi-tamminh-app/src/styles/chart.css`
- Create: `tuvi-tamminh-app/src/components/chart/PalaceCell.tsx`
- Create: `tuvi-tamminh-app/src/components/chart/ThienBan.tsx`
- Create: `tuvi-tamminh-app/src/components/chart/ChartBoard.tsx`
- Create: `tuvi-tamminh-app/src/components/chart/PalaceInspectorModal.tsx`

**Interfaces:**
- Produces: Grid 4x4 chuẩn xác, bố trí 12 cung Tý -> Hợi bao quanh Thiên Bàn.
- Produces: Click chọn cung kích hoạt chiếu Tam Hợp (cung tam hợp 1, 2) và Xung Chiếu với hiệu ứng viền phát sáng nổi bật.

- [ ] **Step 1: Viết CSS tokens phong thủy cao cấp (màu ngũ hành, viền kim loại, glassmorphism)**
- [ ] **Step 2: Hiện thực component `PalaceCell` hiển thị chính tinh, phụ tinh, đại tiểu hạn, tuần/triệt**
- [ ] **Step 3: Hiện thực component `ThienBan` hiển thị thông tin đương số trang trọng ở giữa**
- [ ] **Step 4: Hiện thực component `ChartBoard` kết nối lưới 12 cung và hỗ trợ tương tác soi cung**
- [ ] **Step 5: Commit Task 6**

---

### Task 7: Form Nhập Liệu & Tab Luận Giải Tam Minh

**Files:**
- Create: `tuvi-tamminh-app/src/components/form/ChartInputForm.tsx`
- Create: `tuvi-tamminh-app/src/components/interpretation/TamMinhReportView.tsx`
- Create: `tuvi-tamminh-app/src/components/interpretation/StarDictionaryModal.tsx`

**Interfaces:**
- Produces: Form nhập thông tin mượt mà hỗ trợ chuyển đổi Dương lịch ↔ Âm lịch nhanh.
- Produces: Giao diện xem luận giải 3 trụ cột (Thiên - Địa - Nhân) có thể in/đọc dễ dàng.
- Produces: Bảng tra cứu 118 sao với đầy đủ vận hạn, đồ vật, tướng mạo, bệnh lý.

- [ ] **Step 1: Tạo `ChartInputForm` với các trường họ tên, giới tính, ngày giờ sinh, năm xem hạn**
- [ ] **Step 2: Tạo `TamMinhReportView` với tabs Thiên Minh - Địa Minh - Nhân Minh**
- [ ] **Step 3: Tạo `StarDictionaryModal` hỗ trợ tìm kiếm và tra cứu chi tiết 118 sao**
- [ ] **Step 4: Commit Task 7**

---

### Task 8: Tích Hợp Ứng Dụng & Xác Minh Hoàn Thiện

**Files:**
- Modify: `tuvi-tamminh-app/src/App.tsx`
- Modify: `tuvi-tamminh-app/src/styles/index.css`

- [ ] **Step 1: Tích hợp toàn bộ form, lá số và báo cáo luận giải vào `App.tsx`**
- [ ] **Step 2: Chạy toàn bộ test suite (`npm run test`)**
- [ ] **Step 3: Kiểm tra build production (`npm run build`)**
- [ ] **Step 4: Khởi động dev server và kiểm thử giao diện trực quan**
- [ ] **Step 5: Commit hoàn thiện dự án**
