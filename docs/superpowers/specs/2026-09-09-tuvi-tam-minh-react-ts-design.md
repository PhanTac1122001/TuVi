# Thiết Kế Hệ Thống Lập Lá Số Tử Vi Tam Minh (React + TypeScript)

## 1. Tổng Quan Dự Án
Xây dựng một ứng dụng web React + TypeScript độc lập (`tuvi-tamminh-app`) phục vụ việc **Lập lá số Tử Vi** và **Luận giải vận mệnh** theo chuẩn kiến thức và triết lý từ bộ sách **"Tử Vi Tam Minh"**.

Ứng dụng kết hợp giữa tính toán học thuật chính xác cao (thiên văn Âm Dương lịch, thuật toán an sao đầy đủ 14 chính tinh và hơn 100 phụ tinh) với triết lý luận giải Tam Minh đặc thù:
- **Thiên Minh**: Phân tích cốt cách, tố chất bẩm sinh, định hướng sở trường/sở đoản.
- **Địa Minh**: Phân tích thời cuộc, hoàn cảnh, vận thế (đại vận 10 năm, tiểu vận hàng năm).
- **Nhân Minh**: Năng lực ứng biến, điều chỉnh hành vi, phát huy ý chí tự lực để làm chủ vận số.

---

## 2. Kiến Trúc Dự Án (`tuvi-tamminh-app`)

### 2.1 Cấu trúc thư mục
```text
tuvi-tamminh-app/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   ├── index.css            # Hệ thống design tokens: màu ngũ hành, typography, layout
│   │   └── chart.css            # Styles lưới 12 cung, bảng thiên bàn, huy hiệu sao
│   ├── types/
│   │   └── tuvi.types.ts        # Type definitions: Can, Chi, Ngũ Hành, Cục, Sao, Cung, Luận Giải
│   ├── data/
│   │   ├── stars118Data.ts      # Dữ liệu 118 sao từ sách Tam Minh (ngũ hành, đắc hãm, bệnh lý, tướng mạo, vật dụng)
│   │   └── tamMinhRules.ts      # Nguyên lý cốt lõi và các bộ mẫu luận giải Tam Minh
│   ├── engine/                  # Core Engine không phụ thuộc UI
│   │   ├── lunarCalendar.ts     # Chuyển đổi Dương ↔ Âm lịch chính xác cho giờ/ngày Việt Nam
│   │   ├── canChiNapAm.ts       # Tính Can Chi, Ngũ Hành Nạp Âm của 60 hoa giáp
│   │   ├── cucMenhThan.ts       # Xác định cung Mệnh, Thân và Định Cục
│   │   ├── starPlacer.ts        # An 14 chính tinh, 12 sao Bác Sĩ, 12 sao Thái Tuế, 12 sao Tràng Sinh, Lục Sát Tinh, Tứ Hóa, Tuần, Triệt, các sao phụ khác
│   │   ├── tamMinhEngine.ts     # Phân tích Thiên Minh - Địa Minh - Nhân Minh tự động
│   │   └── index.ts             # Facade function: calculateTuViChart(input) -> ChartResult
│   └── components/
│       ├── form/
│       │   └── ChartForm.tsx    # Form nhập họ tên, giới tính, ngày giờ sinh (Dương/Âm), năm xem
│       ├── chart/
│       │   ├── ChartBoard.tsx   # Lưới 4x4 truyền thống chuẩn Tử Vi
│       │   ├── PalaceCell.tsx   # Từng cung: tên cung, địa chi, chính tinh, cát tinh, hung tinh, triệt/tuần
│       │   ├── ThienBan.tsx     # Bảng trung tâm: bản mệnh, cục, thân cư, âm dương thuận nghịch
│       │   └── PalaceModal.tsx  # Modal soi chi tiết cung, tam hợp (chiếu), nhị hợp, xung chiếu
│       ├── interpretation/
│       │   ├── TamMinhReport.tsx# Báo cáo 3 phần: Thiên Minh - Địa Minh - Nhân Minh
│       │   └── StarDictionary.tsx# Tra cứu ý nghĩa 118 sao
│       └── common/
│           ├── Header.tsx
│           └── ElementBadge.tsx # Huy hiệu ngũ hành Kim - Mộc - Thủy - Hỏa - Thổ
```

---

## 3. Thuật Toán Lõi An Sao & Tính Toán

### 3.1 Chuyển đổi lịch & Can Chi
- Sử dụng thuật toán thiên văn chuẩn chuyển đổi ngày/tháng/năm Dương lịch sang Âm lịch (tính đúng múi giờ UTC+7).
- Tìm Can Chi Năm, Tháng (từ can năm qua bảng ngũ hổ độn), Ngày, Giờ (từ can ngày qua bảng ngũ thử độn).

### 3.2 Định Cung Mệnh & Thân
- Cung Dần là tháng 1, đếm thuận đến tháng sinh.
- Từ vị trí tháng sinh, cung này là giờ Tý, đếm nghịch đến giờ sinh => **Cung Mệnh**.
- Cũng từ tháng sinh, cung này là giờ Tý, đếm thuận đến giờ sinh => **Cung Thân**.
- Bố trí 12 cung theo chiều thuận từ Mệnh: Mệnh, Phụ Mẫu, Phúc Đức, Điền Trạch, Quan Lộc, Nô Bộc, Thiên Di, Tật Ách, Tài Bạch, Tử Tức, Phu Thê, Huynh Đệ.

### 3.3 Định Ngũ Hành Cục
Dựa vào Can Năm sinh và Địa chi của cung Mệnh:
- Thủy Nhị Cục (2)
- Mộc Tam Cục (3)
- Kim Tứ Cục (4)
- Thổ Ngũ Cục (5)
- Hỏa Lục Cục (6)

### 3.4 An 14 Chính Tinh
- **Sao Tử Vi**: Tra theo Cục và ngày sinh Âm lịch.
- **Bộ Tử Vi** (đi nghịch): Tử Vi -> Thiên Cơ -> (cách 1 cung) -> Thái Dương -> Vũ Khúc -> Thiên Đồng -> (cách 2 cung) -> Liêm Trinh.
- **Bộ Thiên Phủ**: Cung đối xứng trục Dần - Thân (Ví dụ: Tử Vi ở Dần thì Thiên Phủ ở Dần; Tử Vi ở Mão thì Thiên Phủ ở Sửu...). Đi thuận: Thiên Phủ -> Thái Âm -> Tham Lang -> Cự Môn -> Thiên Tướng -> Thiên Lương -> Thất Sát -> (cách 3 cung) -> Phá Quân.

### 3.5 An Các Vòng Sao Phụ & Sát Tinh
1. **Vòng Bác Sĩ / Lộc Tồn**: Khởi Lộc Tồn theo Can năm sinh. Đặt Bác Sĩ cùng Lộc Tồn, an 12 sao (Bác Sĩ, Lực Sĩ, Thanh Long, Tiểu Hao, Tướng Quân, Tấu Thư, Phi Liêm, Hỷ Thần, Bệnh Phù, Đại Hao, Phục Binh, Quan Phủ). Dương nam/Âm nữ đi thuận, Âm nam/Dương nữ đi nghịch.
2. **Vòng Thái Tuế**: Khởi Thái Tuế tại chi năm sinh, đi thuận qua 12 cung (Thái Tuế, Thiếu Dương, Tang Môn, Thiếu Âm, Quan Phù, Tử Phù, Tuế Phá, Long Đức, Bạch Hổ, Phúc Đức, Điếu Khách, Trực Phù).
3. **Vòng Tràng Sinh**: Căn cứ Cục để khởi Tràng Sinh (Thủy/Thổ khởi Thân, Mộc khởi Hợi, Kim khởi Tỵ, Hỏa khởi Dần). Dương nam/Âm nữ đi thuận, Âm nam/Dương nữ đi nghịch.
4. **Lục Sát Tinh**: Kình Dương (trước Lộc Tồn 1 cung), Đà La (sau Lộc Tồn 1 cung), Địa Không, Địa Kiếp (theo giờ sinh), Hỏa Tinh, Linh Tinh (theo năm sinh và giờ sinh).
5. **Tứ Hóa**: Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ (theo 10 Can năm sinh).
6. **Tuần & Triệt**: Xác định vị trí 2 cung bị Tuần Không và Triệt Không dựa trên Can Chi năm sinh.
7. **Sao theo năm/tháng/ngày/giờ**: Long Trì, Phượng Cát, Thiên Mã, Đào Hoa, Hồng Loan, Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc, Thiên Tài, Thiên Thọ, v.v.

---

## 4. Hệ Thống Luận Giải Tam Minh
Báo cáo luận giải tự động sinh từ cấu trúc lá số:
1. **Thiên Minh (Bẩm sinh & Tố chất)**:
   - Bản Mệnh & Cục (Tương sinh, tương khắc hay bình hòa).
   - Âm Dương Nam Nữ và vị trí cung Mệnh (Âm Dương thuận lý hay nghịch lý).
   - Tính cách cốt lõi từ 14 chính tinh và vị trí Đắc/Hãm tại Mệnh/Thân.
   - Thân cư ở đâu (Thân cư Thê/Phu, Tài, Quan, Thiên Di, Phúc Đức) phản ánh trọng tâm cuộc đời.
2. **Địa Minh (Hoàn cảnh & Vận thế)**:
   - Phân tích vị trí Đại Hạn 10 năm hiện tại.
   - Tiểu Hạn năm đang xem.
   - Các sao kích hoạt vận trình (Hóa Lộc, Hóa Quyền, Lộc Tồn hay Kình Đà, Không Kiếp).
3. **Nhân Minh (Hành động & Hóa giải)**:
   - Chỉ ra điểm yếu/nguy cơ (ví dụ sát tinh hội tụ ở Tật Ách hay Tài Bạch).
   - Lời khuyên định hướng nghề nghiệp, giao tiếp, tâm tính và cách hóa giải chủ động theo triết lý sách Tam Minh ("Tâm cải biến tướng, Ý chí dẫn lối số mệnh").

---

## 5. Thiết Kế Giao Diện (UI/UX)
- **Phong cách thẩm mỹ**: Dark Oriental Glassmorphism – nền sẫm huyền bí, viền vàng kim cao cấp, điểm xuyết hoa văn âm dương tinh tế.
- **Bố cục 12 Cung**:
  - Dạng Grid 4x4: Góc trên bên trái là Tỵ, góc trên bên phải là Thân, góc dưới bên phải là Hợi, góc dưới bên trái là Dần. 4 ô ở giữa gộp thành Thiên Bàn.
  - Mỗi cung hiển thị rõ ràng: Tên cung chức năng (Mệnh, Quan, Tài...), Can Chi cung, Chính tinh (kèm độ sáng: Miếu, Vượng, Đắc, Hãm), Cát tinh (màu xanh lá/vàng), Sát tinh (màu đỏ/tím), Đại hạn/Tiểu hạn.
  - Có thể click vào bất kỳ cung nào để kích hoạt **Chế độ Soi Chiếu**: làm sáng cung đang chọn, cung Xung chiếu và 2 cung Tam hợp.

---

## 6. Kế Hoạch Xác Minh (Verification)
- **Kiểm thử Unit Test**:
  - Test thuật toán chuyển đổi âm dương lịch với các mốc năm nhuận và ngày lễ quan trọng.
  - Test các trường hợp an sao kinh điển (ví dụ: Giáp Tý, Canh Ngọ, Bính Thìn...) đối chiếu với bảng an sao mẫu trong sách Tam Minh.
- **Kiểm thử Trực quan**:
  - Khởi động dev server Vite trên localhost.
  - Tạo thử lá số với các tùy chọn ngày giờ khác nhau.
  - Kiểm tra giao diện hiển thị 12 cung, bảng Thiên Bàn, và báo cáo luận giải Tam Minh.
