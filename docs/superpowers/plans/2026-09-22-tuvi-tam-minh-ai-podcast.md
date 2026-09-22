# Kế Hoạch Triển Khai: AI Video Podcast "Tử Vi Tam Minh"

> **Mục tiêu**: Xây dựng ứng dụng Web AI Video Podcast tương tác cao cấp (Studio-grade) chuyển thể toàn diện cuốn sách **"Tử Vi Tam Minh"** thành trải nghiệm đối thoại sống động giữa 2 Host AI (Minh Triết & Tuệ Mẫn), đồng bộ slide trực quan, phụ đề thời gian thực, giọng đọc tiếng Việt và công cụ xuất file Video MP4/WebM để tải về.

## Danh Sách Nhiệm Vụ Triển Khai

### Task 1: Xây dựng Kịch bản Podcast & Dữ liệu 5 Chương (`podcast-data.js`)
- **Tập tin**: `c:\Users\Admin\Desktop\tuvi\tam-minh-podcast\podcast-data.js`
- **Nội dung**:
  - Trích xuất và biên tập tri thức từ `tu-vi-tam-ming.md` thành 5 chương đối thoại tự nhiên giữa Minh Triết (Host Nam uyên bác) và Tuệ Mẫn (Host Nữ phản biện, thực chiến).
  - Cấu trúc từng câu thoại kèm thông tin slide tương ứng (tiêu đề, thẻ phân loại, nội dung phân tích, hình họa SVG biểu tượng, câu đúc kết).

### Task 2: Thiết kế Giao diện Studio Podcast Dark Mode Huyền Học (`style.css`)
- **Tập tin**: `c:\Users\Admin\Desktop\tuvi\tam-minh-podcast\style.css`
- **Nội dung**:
  - Hệ màu Cyber-Mystic sang trọng: Nền Cosmic Navy `#0a0e1a`, ánh vàng kim Hoàng Đạo `#eab308`, viền Cyan thanh nhã `#06b6d4`, hiệu ứng Glassmorphism.
  - Khung Video Podcast chuẩn tỉ lệ 16:9 với 2 bục Host, Avatar viền hào quang phát sáng khi nói, sóng âm visualizer, màn hình trung tâm trình chiếu slide SVG sắc nét.

### Task 3: Xây dựng Khung HTML Cấu Trúc Studio (`index.html`)
- **Tập tin**: `c:\Users\Admin\Desktop\tuvi\tam-minh-podcast\index.html`
- **Nội dung**:
  - Khung giao diện Video Stage 16:9, thanh điều khiển, bộ chuyển chương, các tab phụ lục tra cứu và nút xuất Video MP4.

### Task 4: Xây dựng Bộ Máy Điều Khiển & Xuất Video (`app.js`)
- **Tập tin**: `c:\Users\Admin\Desktop\tuvi\tam-minh-podcast\app.js`
- **Nội dung**:
  - Web Speech API hỗ trợ giọng Nam và Nữ tiếng Việt.
  - Trình phát nhạc nền không gian thiền định bằng Web Audio API.
  - Đồng bộ Slide, phụ đề và transcript cuộn tự động.
  - Trình ghi hình Video Canvas + MediaRecorder xuất file MP4/WebM.
