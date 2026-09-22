# Design Document: AI Video Podcast "Tử Vi Tam Minh"

- **Ngày tạo**: 22/09/2026
- **Chủ đề**: Chuyển thể tri thức cuốn sách "Tử Vi Tam Minh" thành Ứng dụng Web AI Video Podcast tương tác và xuất video.
- **Tài liệu nguồn**: `tu-vi-tam-ming.md` / `Tử Vi Tam Minh - Sách.docx`

---

## 1. Mục Tiêu Dự Án (Objectives & Goals)
1. **Dễ hiểu, khai sáng**: Biến cuốn sách lý thuyết dày hơn 12.000 dòng thành chuỗi hội thoại Podcast sinh động, dễ tiếp thu, loại bỏ tính chất thần bí tiêu cực, đưa Tử Vi trở thành "tấm bản đồ chỉ đường cho cuộc sống hiện đại".
2. **Trải nghiệm Video Podcast chuẩn Studio**:
   - Hai Host AI đối thoại tự nhiên: **Minh Triết** (Host Nam - Uyên bác, điềm đạm) và **Tuệ Mẫn** (Host Nữ - Sắc sảo, thực tế, phản biện).
   - Avatar 3D/huyền học động với hiệu ứng sóng âm (Waveform/Glow) khi từng Host cất lời.
   - Sân khấu trực quan (Visual Presentation Stage) đồng bộ với nội dung trò chuyện (biểu đồ Tam Tài, ngũ hành, 14 chính tinh, 6 bước luận mệnh).
   - Phụ đề (Subtitles / Karaoke) thời gian thực theo lời nói.
   - Nhạc nền thiền tịnh cổ phong (Zen / Ambient Lo-fi oriental) êm dịu có thể bật/tắt.
3. **Tính năng Xuất Video (MP4 / WebM Exporter)**:
   - Sử dụng HTML5 Canvas Rendering + Web Audio API + MediaRecorder để ghi hình trực tiếp toàn bộ sàn diễn podcast thành file video chất lượng cao để tải về hoặc chia sẻ lên YouTube, TikTok, Facebook.
4. **Không phụ thuộc Server phức tạp**:
   - Hoàn toàn chạy được trên trình duyệt với HTML5, Vanilla CSS hiện đại và Vanilla JS cao cấp.

---

## 2. Cấu Trúc Nội Dung Podcast (5 Chương Trọng Tâm)

### Tập 1: Căn Nguyên & Trụ Cột Tam Minh (Thiên - Địa - Nhân)
- **Nội dung**: Nguồn gốc Tử Vi từ thời Tống đến hiện đại. Vì sao lối xem bói cổ điển nặng về định mệnh đã lỗi thời? Tam Minh là gì: Thiên Minh (tố chất bẩm sinh), Địa Minh (thời thế, hoàn cảnh sống), Nhân Minh (ý chí và hành động).
- **Trực quan hóa**: Biểu đồ hình học Tam Tài (Thiên - Địa - Nhân cân bằng), câu chân ngôn: *"Thiên định giới hạn, Địa cục mở đường, Nhân hành thành sự"*.

### Tập 2: Đạo Đức Luận Mệnh & Nguyên Lý Biện Cát - Hung
- **Nội dung**: Nguyên tắc vàng khi nhìn vào một lá số: Không phán đoán tuyệt đối hóa hung họa gây hoang mang. Phân biệt Động - Tĩnh. Cát - Hung theo 3 diện: Nếu Thiên cát mà Địa nghịch, Nhân buông xuôi thì vẫn bại; nếu Thiên bình thường nhưng Nhân nỗ lực thì vẫn tạo nên kỳ tích.
- **Trực quan hóa**: Bảng ma trận Cát - Hung Tam Diện, 5 nguyên tắc đạo đức của người giải mã vận mệnh.

### Tập 3: 6 Bước Luận Giải Thực Chiến
- **Nội dung**: Hướng dẫn quy trình chuẩn xác từng bước:
  1. Khảo sát Nhân (tiếp xúc, quan sát thực tế đương số).
  2. Xác định Thiên (ngày giờ sinh, cấu trúc bản mệnh).
  3. Định hình Địa cục (thời cuộc, gia đình, công việc hiện tại).
  4. Đọc lá số tổng thể (thế đứng các cung).
  5. Định vị hiện trạng và chu kỳ hạn.
  6. Đưa ra giải pháp hành động cụ thể.
- **Trực quan hóa**: Sơ đồ dòng chảy quy trình 6 bước (Workflow infographic).

### Tập 4: Giải Mã 14 Chính Tinh & Cách Cục Hiện Đại
- **Nội dung**: 4 nhóm sao lớn:
  - Bộ Tử Phủ Vũ Tướng (Nhà lãnh đạo, kiến thiết, tài chính).
  - Bộ Sát Phá Tham (Nhà tiên phong, dám đột phá, đối mặt biến động).
  - Bộ Cơ Nguyệt Đồng Lương (Chiến lược gia, chuyên môn sâu, công chức, giáo dục).
  - Bộ Cự Nhật (Truyền thông, luật pháp, ăn nói, phát quang tỏa sáng).
- **Trực quan hóa**: Thẻ bài 14 Chính Tinh với Ngũ hành, biểu tượng và ứng dụng thực tiễn trong nghề nghiệp hiện đại.

### Tập 5: Nghệ Thuật "Hóa Mệnh" - Tự Chủ Số Phận
- **Nội dung**: Điểm độc đáo nhất của Tử Vi Tam Minh: *"Không chỉ xem số, mà là dùng số; không chỉ nhận mệnh, mà là hóa mệnh"*. Cách dùng ý chí và hành vi (Nhân Minh) để bổ khuyết khi gặp cung xấu, đại vận hung, hóa giải thế cùng bằng nhận thức và hành động đúng đắn.
- **Trực quan hóa**: Bánh xe chuyển hóa vận mệnh (Mindset Shift & Action Plan).

---

## 3. Kiến Trúc Kỹ Thuật (Technical Architecture)

```
c:\Users\Admin\Desktop\tuvi\tam-minh-podcast/
├── index.html            # Khung giao diện Studio Podcast, Video Stage, Controls
├── style.css             # Thiết kế Dark Mode huyền học cao cấp (Glassmorphism, Cyber-Mystic)
├── podcast-data.js       # Toàn bộ kịch bản đối thoại 5 chương, timeline, slides data
└── app.js                # Bộ máy phát audio/TTS, animation avatar, đồng bộ slide, ghi hình MP4
```

### Các Module Thành Phần:
1. **Audio Synthesis & TTS Engine**:
   - Sử dụng Web Speech API với 2 profile giọng: Nam (pitch thấp ấm, tốc độ đĩnh đạc) và Nữ (pitch tự nhiên, trong trẻo, phản xạ nhanh).
   - Tích hợp Ambient Audio Synth phát nhạc nền cổ phong nhẹ nhàng bằng Web Audio API không phụ thuộc file ngoài.
2. **Stage Renderer & Avatar Animation**:
   - Hai nhân vật Host (Minh Triết & Tuệ Mẫn) có trạng thái: Nói (Sóng âm quanh avatar, cử động môi/mắt), Lắng nghe (Gật đầu nhẹ, sóng âm tắt).
   - Màn hình trung tâm trình chiếu Slide đồ họa SVG chất lượng cao (infographics sắc nét).
3. **Subtitle / Karaoke Sync**:
   - Hiển thị từng dòng phụ đề khớp với thời điểm nói, highlight câu hiện tại.
4. **MediaRecorder Video Exporter**:
   - Kết hợp Canvas 1920x1080 (hoặc 1280x720) vẽ lại màn hình Studio thời gian thực + Audio Destination Stream -> Xuất file `.webm`/`.mp4` tải thẳng về máy.

---

## 4. Kế Hoạch Xác Minh & Kiểm Thử (Verification)
- Kiểm tra hiển thị giao diện trên Chrome/Edge/Firefox ở độ phân giải máy tính bàn & di động.
- Kiểm tra giọng đọc phát âm tiếng Việt chuẩn xác, chuyển đổi mượt mà giữa 2 host.
- Kiểm tra chức năng chuyển chương, tạm dừng, tiếp tục, tua lại.
- Kiểm tra tính năng Ghi hình & Xuất video tải về phát thử lại xem hình ảnh và âm thanh có đồng bộ không.
