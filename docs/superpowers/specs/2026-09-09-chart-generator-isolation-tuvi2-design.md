# Thiết Kế Chi Tiết: Tách Biệt Module Lập Lá Số & Tích Hợp Chuẩn TuVi-2

- **Ngày tạo:** 2026-09-09
- **Trạng thái:** Đã phê duyệt (Approved)
- **Hệ thống mục tiêu:** `baseweb-main`
- **Mã nguồn tham chiếu:** `TuVi-2`

---

## 1. Mục Tiêu & Bối Cảnh

Hệ thống hiện tại của `baseweb-main` đang tích hợp cả Giáo trình 10 chương, Tra cứu 12 Cung chức năng, Tra cứu Tinh đẩu và Lập lá số. Tuy nhiên phần Lập lá số hiện tại:
- Chưa hoàn toàn tối ưu và chuẩn xác như phiên bản độc lập `TuVi-2`.
- Bị phụ thuộc vào theme dark/light của web dẫn tới các xung đột màu sắc ngũ hành, đường biên lá số giấy truyền thống.
- Cần được đóng gói độc lập (`src/features/chart-generator`) để không xung đột với dữ liệu giáo trình và tra cứu học thuật.

Mục tiêu là:
1. Tách biệt kiến trúc mã nguồn của phần Lập lá số thành module chuyên biệt độc lập.
2. Port toàn bộ Engine, Types, Luận giải và giao diện giấy truyền thống chuẩn TuViVietnam.vn từ `TuVi-2` vào `baseweb-main`.
3. Cung cấp các tính năng chuyên dụng: In ấn (Print CSS), Xuất hình ảnh lá số, Xem toàn màn hình (Fullscreen view), 4 tab luận giải (Tổng quan, Cách cục, 12 Cung, Vận hạn).

---

## 2. Kiến Trúc & Cấu Trúc Module

Mã nguồn được đặt tại `src/features/chart-generator/`:

```
src/features/chart-generator/
├── engine/
│   ├── lunarCalendar.ts        # Thuật toán chuyển đổi Dương Lịch - Âm Lịch, Tiết khí, Can Chi
│   ├── starMetadata.ts         # Metadata ngũ hành, loại sao, tính chất sao
│   ├── tuviEngine.ts           # Thuật toán An sao chính/phụ, Đại vận, Tiểu vận, Nguyệt hạn (Nam Phái)
│   ├── tuviInterpreter.ts      # Luận giải 4 phần: Tổng quan, Cách cục đặc biệt, 12 Cung, Vận hạn
│   └── index.ts
├── components/
│   ├── ChartForm.tsx           # Form nhập liệu (Họ tên, ngày tháng năm giờ sinh, giới tính, năm xem hạn)
│   ├── ChartBoard.tsx          # Toàn bộ bàn cờ Địa Bàn 4x4 + Thiên Bàn trung tâm
│   ├── ThienBanCell.tsx        # Ô Thiên Bàn (Thông tin bản mệnh, can chi, cục, triện đỏ)
│   ├── PalaceCell.tsx          # Từng ô cung vị (12 ô: Tỵ -> Thìn theo chiều kim đồng hồ)
│   ├── BorderBadges.tsx        # Huy hiệu Tuần / Triệt đặt đúng vị trí viền giữa các ô
│   ├── InterpretationTabs.tsx  # 4 Tab luận giải bản mệnh, cách cục, cung vị, vận hạn
│   └── ChartActions.tsx        # Thanh công cụ tương tác: In lá số (Print), Xuất ảnh, Fullscreen
├── styles/
│   └── tuviVietnamChart.css    # CSS Paper Theme truyền thống, bảo vệ ngũ hành màu sắc không bị theme đảo
├── types/
│   └── chart.types.ts          # Type definitions cho UserInfo, TuViChart, Palace, Star, Interpretation
└── index.ts                    # Public exports
```

---

## 3. Quy Cách Giao Diện & Trình Bày Lá Số

1. **Địa Bàn 4x4 Grid:**
   - Cung Tỵ (pos-chi-5) tại góc trên cùng bên trái.
   - Cung Ngọ (pos-chi-6), Mùi (pos-chi-7), Thân (pos-chi-8) trên hàng 1.
   - Cung Dậu (pos-chi-9), Tuất (pos-chi-10), Hợi (pos-chi-11) cột phải.
   - Cung Tý (pos-chi-0), Sửu (pos-chi-1), Dần (pos-chi-2) hàng đáy.
   - Cung Mão (pos-chi-3), Thìn (pos-chi-4) cột trái.
   - Thiên Bàn (`pos-thienban`) chiếm vị trí trung tâm 2x2.

2. **Quy ước màu Ngũ Hành chuẩn TuViVietnam.vn:**
   - Kim: Xám bạc (`#888888`)
   - Mộc: Xanh lục (`#008000`)
   - Thủy: Đen (`#000000`)
   - Hỏa: Đỏ (`#cc0000`)
   - Thổ: Cam vàng (`#d97706`)

3. **Vị trí Tuần & Triệt:**
   - Đặt chính xác trên đường biên giữa 2 cung (Border Badge) sử dụng absolute positioning.

4. **Cách ly Theme:**
   - Vùng bàn lá số có nền giấy sáng (`#ffffff`), viền mực đen nét rõ (`#222222`), không bị ảnh hưởng khi người dùng bật Dark Mode toàn web.

---

## 4. Kế Hoạch Kiểm Thử & Xác Minh

1. **Unit Test Engine:**
   - Chạy kiểm thử an sao với 6 test cases chuẩn trong `testNguyetHan.js` (các tuổi Dần, Tỵ, Thìn, Mão, lá số mẫu TuViVietnam).
2. **Build & Type Checking:**
   - Đảm bảo `npm run build` hoặc `npx tsc --noEmit` thành công 100%, không còn lỗi type.
3. **Kiểm tra UI & Tương Tác:**
   - Mở giao diện trên trình duyệt tại route `/lap-la-so`.
   - Kiểm tra nhập liệu, render lá số, chuyển tab luận giải mượt mà, tính năng in ấn hoạt động chuẩn xác.
