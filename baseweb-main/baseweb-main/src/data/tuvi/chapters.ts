import { Chapter } from '@/types/tuvi'

export const TUVI_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHƯƠNG I: CĂN NGUYÊN & TRIẾT LÝ TAM MINH
  // ==========================================
  {
    id: 'chuong-1',
    number: 'I',
    title: 'Căn Nguyên & Triết Lý Tam Minh',
    subtitle: 'Nguồn gốc Tử Vi, Sự tiến hóa Tam Minh, 3 Trụ Cột Thiên - Địa - Nhân & 4 Nguyên Lý Cốt Lõi',
    icon: 'Compass',
    summary: 'Kế thừa nền tảng uyên thâm từ Tinh Đẩu học cổ điển và Hi Di Trần Đoàn, Tam Minh mở ra ánh sáng mới: kết hợp Thiên Mệnh với hoàn cảnh thời cuộc và ý chí tự do của con người để tự khai mở tương lai.',
    sections: [
      {
        id: '1-1',
        title: '1. Nguồn Gốc Tử Vi Đẩu Số & Sự Tiến Hóa Đến Tam Minh',
        content: [
          'Từ thời xa xưa, nhân loại ngước nhìn bầu trời, nhận ra quy luật tuần hoàn của các vì sao liên hệ mật thiết với mùa màng, khí hậu và sự thịnh suy nơi trần thế. Hệ thống Tinh Đẩu học (28 chòm sao Nhị Thập Bát Tú, Can Chi, Âm Dương Ngũ Hành) đã đặt nền móng tiên quyết.',
          'Đến thời nhà Tống, Hi Di Trần Đoàn Lão Tổ đã đúc kết và sáng tạo nên môn Tử Vi Đẩu Số — lấy sao Tử Vi làm Đế Tinh, dùng giờ ngày tháng năm sinh để lập thành bức họa đồ số mệnh riêng biệt cho mỗi cá nhân.',
          'Thế kỷ XXI, thế giới biến chuyển từng giờ: công nghệ số, toàn cầu hóa khiến con người đối mặt vô số cơ hội và thách thức đan xen. Các lối luận cổ nặng về định mệnh an bài ("số đã định thì chịu"), xem nhẹ tác động của môi trường và ý chí con người đã dần bộc lộ khuyết điểm.',
          'Tam Minh ra đời như một bước tiến hóa tất yếu: Kế thừa tinh hoa cổ điển nhưng mở rộng ra thực tế thời đại mới, coi số mệnh là bức tranh nền, còn hành động của con người chính là nét vẽ hoàn thiện bức tranh đó.'
        ],
        keyPoints: [
          'Thủy tổ: Trần Đoàn Lão Tổ (Thời Tống)',
          'Hạn chế của lối luận cổ: Quá trọng định mệnh, xem nhẹ môi trường và ý chí',
          'Sứ mệnh Tam Minh: Giải mã vận mệnh để tự làm chủ và khai mở tương lai'
        ],
        callout: {
          title: 'Khẩu quyết Tam Minh',
          content: '"Thiên địa chi đại đức viết sinh, nhân chi đại đức viết minh." (Đức lớn của Trời Đất là sinh hóa, đức lớn của con người là sáng tỏ). Số phận không phải sợi dây trói buộc, mà là tấm bản đồ để người thức tỉnh nắm tay chèo lái.',
          type: 'quote'
        }
      },
      {
        id: '1-2',
        title: '2. Ba Trụ Cột: Thiên Minh – Địa Minh – Nhân Minh',
        content: [
          'Tam Minh xác định vận mệnh một đời người không thể nhìn phiến diện qua một góc, mà phải được phân tích đồng thời trên 3 trụ cột vững chắc:',
          '1. Thiên Minh: Hiểu rõ căn cơ, năng lực, tư chất và thiên hướng bẩm sinh nguyên thủy được phản ánh qua Mệnh Bàn (cung Mệnh, Thân, Phúc và hệ thống tinh đẩu).',
          '2. Địa Minh: Nhận thức sâu sắc hoàn cảnh sống, gia đình, nền tảng giáo dục, môi trường xã hội, xu thế thời cuộc và thiên thời địa lợi.',
          '3. Nhân Minh: Soi sáng hành động, tư duy, sự tự chủ, ý chí rèn luyện và đạo đức của mỗi cá nhân trong việc phản ứng trước nghịch cảnh và nắm bắt thời cơ.'
        ],
        keyPoints: [
          'Thiên Minh: Tố chất nguyên thủy (Năng lực bẩm sinh)',
          'Địa Minh: Môi trường & Thời thế (Cơ hội và thách thức xã hội)',
          'Nhân Minh: Điểm cải biến tối thượng (Ý chí và hành động thực tế)'
        ],
        tableData: {
          headers: ['Trụ Cột', 'Nội Dung Cốt Lõi', 'Ý Nghĩa Thực Tiễn'],
          rows: [
            ['Thiên Minh', 'Tố chất bẩm sinh, cấu trúc sao Mệnh - Thân', 'Biết mình là ai, sở trường sở đoản ở đâu'],
            ['Địa Minh', 'Môi trường sống, xu thế kinh tế - xã hội, đại vận', 'Hiểu thời thế, biết lúc nào nên tiến hay thoái'],
            ['Nhân Minh', 'Hành vi, tư duy, sự tu dưỡng đạo đức và nỗ lực', 'Chìa khóa chuyển bại thành thắng, cải biến vận số']
          ]
        }
      },
      {
        id: '1-3',
        title: '3. Bốn Nguyên Lý Nền Tảng Của Tam Minh',
        content: [
          'Nguyên lý 1 - Tam Tài bất khả phân: Thiên - Địa - Nhân gắn kết hữu cơ, không thể luận đoán tách rời. Một người có số làm tướng (Thiên tốt) nhưng sinh ra thời bình không có chiến tranh (Địa không mở) và lười nhác thể lực (Nhân kém) thì không thể thành danh tướng.',
          'Nguyên lý 2 - Động Tĩnh phân minh: Tinh đẩu Mệnh Bàn là Tĩnh (tiềm năng), Đại Vận và Lưu Niên là Động (thời điểm trổ quả). Cần xem cái Tĩnh định hướng và cái Động kích hoạt.',
          'Nguyên lý 3 - Minh biện Cát Hung theo tam diện: Không có sao nào hoàn toàn Cát hay Hung. Sát tinh (Kình, Đà, Không, Kiếp) khi đắc địa trong thời loạn hoặc ngành kỹ nghệ, mạo hiểm lại là động lực bứt phá phi thường.',
          'Nguyên lý 4 - Lấy Nhân Minh làm điểm cải biến: Đức năng thắng số. Số mệnh cho ta bộ bài, nhưng cách chơi bài thuộc về ý chí và sự tỉnh thức của chính bản thân.'
        ],
        keyPoints: [
          'Tam Tài bất khả phân: Luôn kết hợp Mệnh lý + Thời cuộc + Hành vi',
          'Động - Tĩnh tương tác: Tiềm năng gặp thời cơ mới phát tác',
          'Đức năng thắng số: Ý thức tu dưỡng là chìa khóa chuyển nghiệp'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG II: CẤU TRÚC MỆNH BÀN & QUY TRÌNH LUẬN ĐOÁN
  // ==========================================
  {
    id: 'chuong-2',
    number: 'II',
    title: 'Cấu Trúc Mệnh Bàn & Quy Trình Luận Đoán',
    subtitle: '12 Cung Chức Năng, 6 Vị Trí Thân Cư, Vòng Trường Sinh & Quy Trình 5 Bước Tam Minh',
    icon: 'LayoutGrid',
    summary: 'Hệ thống hóa 12 cung chức năng trên địa bàn phản ánh trọn vẹn mọi phương diện đời người, kết hợp vị trí Thân Cư và quy trình 5 bước luận mệnh chuẩn mực của Tam Minh Đường.',
    sections: [
      {
        id: '2-1',
        title: '1. Ý Nghĩa Chi Tiết 12 Cung Chức Năng',
        content: [
          'Mệnh Bàn gồm 12 cung vị cố định trên mặt đất từ Tý đến Hợi, đại diện cho 12 lĩnh vực cốt lõi:',
          '1. Cung Mệnh: Căn cốt, bản lĩnh, tư chất, ngoại hình và số phận tổng quan.',
          '2. Cung Phụ Mẫu: Cha mẹ, phúc ấm dòng họ, sự che chở của cấp trên và trưởng bối.',
          '3. Cung Phúc Đức: Thế giới nội tâm, phước báu tích lũy, mức độ an lạc và tuổi thọ.',
          '4. Cung Điền Trạch: Đất đai, nhà cửa, kho chứa tài sản (tích tài khố) và gia phong nơi ở.',
          '5. Cung Quan Lộc: Sự nghiệp, đường công danh, vị thế xã hội và năng lực chuyên môn.',
          '6. Cung Nô Bộc (Bạn bè, đối tác): Bạn bè, cấp dưới, mạng lưới xã hội và sự trung thành.',
          '7. Cung Thiên Di: Hoạt động đối ngoại, đi lại xa, cơ hội lập nghiệp phương xa.',
          '8. Cung Tật Ách: Điểm yếu thể chất, bệnh lý tiềm ẩn, tai ách cần phòng tránh.',
          '9. Cung Tài Bạch: Phương thức kiếm tiền, dòng tiền lưu chuyển và tư duy tài chính.',
          '10. Cung Tử Tức: Con cái, đường sinh nở, mối liên kết thế hệ tương lai.',
          '11. Cung Phu Thê: Hôn nhân, tính cách bạn đời và mức độ hòa hợp lứa đôi.',
          '12. Cung Huynh Đệ: Anh chị em ruột thịt, bằng hữu đồng chí hướng gắn bó.'
        ],
        keyPoints: [
          'Trục Tam Hợp cốt lõi: Mệnh - Tài - Quan (Sự nghiệp) và Phúc - Phối - Điền (Gia đạo)',
          'Quan hệ đối cung: Mệnh xung Di, Tài xung Phúc, Quan xung Thê'
        ]
      },
      {
        id: '2-2',
        title: '2. Thân Cư & Ý Nghĩa 6 Vị Trí Thân Cư',
        content: [
          'Nếu Cung Mệnh quản tiền vận (trước 30-36 tuổi) thì Cung Thân quản hậu vận và phương thức hành động thực tế của con người:',
          'Thân cư Mệnh (Sinh giờ Tý, Ngọ): Nhất quán trước sau, tự lực cánh sinh, cuộc đời dựa vào chính năng lực của mình.',
          'Thân cư Phúc Đức (Sinh giờ Sửu, Mùi): Đặt nặng đời sống tâm linh, tư tưởng, quan tâm sâu sắc phúc ấm dòng tộc.',
          'Thân cư Quan Lộc (Sinh giờ Dần, Thân): Coi trọng công danh sự nghiệp, đam mê công việc, khát vọng khẳng định địa vị.',
          'Thân cư Thiên Di (Sinh giờ Mão, Dậu): Hướng ngoại, thích dịch chuyển, thành bại gắn liền với các hoạt động bên ngoài xã hội.',
          'Thân cư Tài Bạch (Sinh giờ Thìn, Tuất): Tư duy thực tế, coi tiền bạc là bảo chứng an toàn cho cuộc sống.',
          'Thân cư Phu Thê (Sinh giờ Tỵ, Hợi): Cuộc đời và tài lộc chịu ảnh hưởng sâu sắc từ người bạn đời.'
        ],
        keyPoints: [
          'Mệnh là hạt giống, Thân là hoa trái trổ sinh',
          'Vị trí Thân Cư chỉ rõ trọng tâm hành động và sự quan tâm nửa sau cuộc đời'
        ]
      },
      {
        id: '2-3',
        title: '3. Quy Trình 5 Bước Luận Đoán Tam Minh Chuẩn Mực',
        content: [
          'Để việc luận đoán đạt độ chính xác và mang lại giá trị định hướng cao nhất, người học Tam Minh cần tuân thủ 5 bước:',
          'Bước 1: Chuẩn hóa dữ liệu giờ sinh và kiểm tra thực tế (hỏi các sự kiện đã qua để xác thực lá số).',
          'Bước 2: Phân tích Thiên Minh (Căn cơ, Mệnh Thân Cục, 14 Chính tinh miếu hãm, năng lực sở trường).',
          'Bước 3: Soi chiếu Địa Minh (Đại vận đang đi, môi trường ngành nghề thực tế, thời cuộc kinh tế xã hội).',
          'Bước 4: Định vị Nhân Minh (Khảo sát ý chí, thói quen hành vi hiện tại của đương số để tìm nút thắt).',
          'Bước 5: Tổng hợp & Đề xuất giải pháp hành động (Không dừng ở việc phán đoán mà chỉ rõ việc nên làm, cách chuyển hóa vận xấu).'
        ],
        keyPoints: [
          'Luôn đi từ Xác thực -> Phân tích Thiên -> Soi chiếu Địa -> Định vị Nhân -> Giải pháp thực tế',
          'Không bao giờ chỉ phán số phận mà thiếu hướng dẫn giải pháp'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG III: HỆ THỐNG TƯỚNG MẠO & NHÂN DIỆN TỬ VI
  // ==========================================
  {
    id: 'chuong-3',
    number: 'III',
    title: 'Hệ Thống Tướng Mạo & Nhân Diện Tử Vi',
    subtitle: 'Ứng Dụng Quan Sát Tướng Trong Tam Minh, Nhận Diện 14 Chính Tinh & Hung Sát Tinh',
    icon: 'Star',
    summary: 'Tướng tự tâm sinh, hình thần câu hiển. Quan sát nhân tướng mạo trong Tam Minh là công cụ kiểm nghiệm tính xác thực của lá số và đánh giá mức độ phát triển khí chất thực tế của đương số.',
    sections: [
      {
        id: '3-1',
        title: '1. Ý Nghĩa & Nguyên Tắc Quan Sát Tướng Mạo',
        content: [
          'Tướng là phần biểu hiện của Tâm – Khí – Mệnh ra bên ngoài. Trong Tam Minh, quan sát tướng mạo giúp:',
          '- Kiểm nghiệm tính xác thực của lá số khi giờ sinh không hoàn toàn chắc chắn.',
          '- Đánh giá khí chất và xu hướng hành động thực tế của đương số ở thời điểm hiện tại.',
          '- Điều chỉnh lời khuyên cho sát hợp với thể trạng và tâm thế thực tế.',
          'Nguyên tắc cơ bản:',
          '1. Quan sát tổng thể trước, chi tiết sau (Hình khung -> Ngũ quan -> Thần thái).',
          '2. Ưu tiên Khí sắc và Thần thái hơn đường nét hình tướng chết.',
          '3. Kết hợp Động tướng (dáng đi, cử chỉ, giọng nói) với Tĩnh tướng (khuôn mặt, thân thể khi ngồi yên).'
        ],
        keyPoints: [
          'Tướng không thay thế lá số, mà là bổ trợ kiểm chứng',
          'Khí sắc biến chuyển theo tâm tính và vận hạn từng thời kỳ'
        ]
      },
      {
        id: '3-2',
        title: '2. Các Nhóm Yếu Tố Quan Sát Chính',
        content: [
          '3.1. Tổng thể hình khung: Người cân đối vững vàng chủ về mệnh vượng khí bền; người gầy gò mảnh mai chủ về tinh thần nhạy cảm; người to lớn nhưng vụng về khí lực chưa điều hòa.',
          '3.2. Đôi mắt (Thần khí chủ yếu): Mắt sáng trong nhìn thẳng biểu hiện quang minh lỗi lạc; mắt sắc lẹm có tia sát khí biểu hiện tính quyết đoán sát phạt; mắt ướt mơ màng chủ về phong lưu tình cảm; mắt lấm lét đảo quanh chủ về đa nghi gian xảo.',
          '3.3. Giọng nói: Tiếng trầm ấm vang từ đan điền biểu thị nội lực dồi dào, hậu vận tốt; tiếng the thé gãy vụn biểu thị khí đoản, dễ nóng nảy bỏ dở việc.',
          '3.4. Dáng đi & cử chỉ: Bước đi thanh thoát vững chắc như nước chảy biểu thị sự tự tin; bước chân vội vã chân không chạm đất biểu thị tâm thần bất an, dễ bôn ba vất vả.'
        ],
        keyPoints: [
          'Mắt là cửa sổ của thần khí',
          'Giọng nói biểu thị gốc rễ đan điền và hậu vận'
        ],
        tableData: {
          headers: ['Yếu Tố Quan Sát', 'Dấu Hiệu Cát Lợi', 'Dấu Hiệu Cần Chú Ý'],
          rows: [
            ['Khuôn mặt', 'Sáng sủa, tròn đầy hoặc vuông vắn, ấn đường rộng', 'U tối, lõm khuyết, gò má quá nhô cao nhọn hoắt'],
            ['Đôi mắt', 'Trong trẻo, tròng đen trắng phân minh, có thần quang', 'Vằn tia máu đỏ, mắt đục mờ, hay liếc xéo dò xét'],
            ['Khí sắc da', 'Hồng hào nhuận sắc, tươi tắn tự nhiên', 'Xám xịt, xanh xao ảm đạm hoặc đỏ rực thái quá'],
            ['Giọng nói', 'Trầm ấm, rõ ràng từng lời, dứt khoát', 'The thé, hụt hơi, ngắt quãng hoặc gắt gỏng thô kệch']
          ]
        }
      },
      {
        id: '3-3',
        title: '3. Nhân Diện Tướng Mạo Qua 14 Chính Tinh',
        content: [
          'Tử Vi: Mặt vuông chữ điền hoặc tròn đầy, da hồng hào, tướng mạo đĩnh đạc uy nghiêm của bậc trượng phu.',
          'Thiên Phủ: Khuôn mặt thanh tú phúc hậu, mắt sáng hiền hòa, vành tai dày nở, phong thái khoan dung cẩn trọng.',
          'Thái Dương: Mặt tròn trán cao, mắt sáng rực quang minh nhìn thẳng, nụ cười rạng rỡ hào sảng.',
          'Thái Âm: Mặt trái xoan thanh nhã, mắt phượng ướt tình cảm, da trắng mịn, phong thái mềm mại thanh lịch.',
          'Vũ Khúc: Dáng người chắc nịch cơ bắp, cằm vuông bạnh, cử chỉ dứt khoát, ánh mắt cương trực sắt đá.',
          'Thiên Đồng: Mặt tròn trịa đồng nhan (trẻ hơn tuổi), hay cười, tính tình hiền lành đôn hậu.',
          'Liêm Trinh: Chân mày rậm xếch nhẹ, mắt lộ thần khí, phong thái sắc sảo kỷ luật nghiêm ngặt.',
          'Thất Sát: Ánh mắt sắc lạnh như kiếm bén, cơ mặt săn chắc cương nghị, bước chân dài vững vàng.',
          'Phá Quân: Lưng dày vai rộng, bước đi thoăn thoắt, ánh mắt kiên định bất khuất dám đập cũ xây mới.',
          'Tham Lang: Dáng dấp phong lưu lãng tử, mắt lá răm đa tình, giọng nói có sức hút duyên dáng.',
          'Cự Môn: Khóe môi sâu, ánh mắt dò xét tinh tường, giọng nói vang xa và thuyết phục.',
          'Thiên Tướng: Tướng mạo đoan chính mực thước, ấn đường nở rộng, ăn mặc chỉnh tề lịch thiệp.',
          'Thiên Lương: Khuôn mặt dài đạo mạo, lông mày thanh tú, cốt cách thanh cao của bậc hiền triết.',
          'Thiên Cơ: Dáng cao ráo mảnh khảnh, nét mặt lanh lợi thông tuệ, ngón tay thon dài của người mưu lược.'
        ],
        keyPoints: [
          'Tướng mạo sao miếu vượng: Đĩnh đạc, quang minh, hài hòa',
          'Tướng mạo sao hãm địa: Dễ mang nét thô kệch hoặc khuyết hãm cần rèn giũa'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG IV: 60 NẠP ÂM NGŨ HÀNH & SAO CỨU GIẢI
  // ==========================================
  {
    id: 'chuong-4',
    number: 'IV',
    title: '60 Nạp Âm Ngũ Hành & Bộ Sao Cứu Giải',
    subtitle: 'Bảng Nạp Âm 60 Hoa Giáp, Quy Luật Tương Hợp Khắc Tuổi, Tứ Hóa, Tứ Đức & Cảnh Báo La Võng',
    icon: 'Sparkles',
    summary: 'Giải mã chi tiết 60 Nạp Âm Ngũ Hành theo Can Chi, bí quyết xem tuổi hợp - tuổi khắc trong hợp tác hôn nhân, cùng ý nghĩa cứu giải của Tứ Hóa và Tứ Đức.',
    sections: [
      {
        id: '4-1',
        title: '1. Bảng 60 Nạp Âm Ngũ Hành & Ứng Dụng Xem Hợp Khắc',
        content: [
          'Khác với Ngũ hành đơn thuần (Kim, Mộc, Thủy, Hỏa, Thổ), Nạp Âm Hoa Giáp là sự biến hóa vi diệu của 60 cặp Can Chi:',
          '- Hành Kim (6 nạp âm): Hải Trung Kim (vàng biển sâu), Kim Bạch Kim (vàng nén), Bạch Lạp Kim (vàng trong sáp), Sa Trung Kim (vàng trong cát), Kiếm Phong Kim (vàng mũi kiếm), Thoa Xuyến Kim (vàng trang sức).',
          '- Hành Mộc (6 nạp âm): Đại Lâm Mộc (cây rừng lớn), Dương Liễu Mộc (cây liễu mềm), Tùng Bách Mộc (cây tùng bách), Bình Địa Mộc (cây đồng bằng), Tang Đố Mộc (cây dâu), Thạch Lựu Mộc (cây lựu đá).',
          '- Hành Thủy (6 nạp âm): Giản Hạ Thủy (nước khe suối), Tuyền Trung Thủy (nước giếng trong), Trường Lưu Thủy (dòng sông dài), Thiên Hà Thủy (nước mưa trời), Đại Khê Thủy (nước khe lớn), Đại Hải Thủy (nước biển mênh mông).',
          '- Hành Hỏa (6 nạp âm): Lư Trung Hỏa (lửa trong lò), Sơn Đầu Hỏa (lửa đỉnh núi), Tích Lịch Hỏa (lửa sấm sét), Sơn Hạ Hỏa (lửa chân núi), Phúc Đăng Hỏa (ngọn đèn dầu), Thiên Thượng Hỏa (lửa mặt trời).',
          '- Hành Thổ (6 nạp âm): Lộ Bàng Thổ (đất ven đường), Thành Đầu Thổ (đất bờ thành), Ốc Thượng Thổ (ngói nóc nhà), Bích Thượng Thổ (đất tường vách), Đại Trạch Thổ (đất cồn bãi), Sa Trung Thổ (đất phù sa).'
        ],
        keyPoints: [
          'Kiếm Phong Kim và Sa Trung Kim không sợ Hỏa mà cần Hỏa tôi luyện mới thành tài vật',
          'Đại Hải Thủy và Thiên Hà Thủy không sợ Thổ vì nước trời và biển lớn đất không ngăn nổi'
        ]
      },
      {
        id: '4-2',
        title: '2. Bộ Tứ Hóa – Linh Hồn Biến Hóa Của Tử Vi',
        content: [
          'Tứ Hóa đại diện cho 4 mùa luân chuyển của vũ trụ và dòng chảy khí số của đời người:',
          'Hóa Lộc (Mùa Xuân): Vạn vật đâm chồi, tượng trưng cho cơ hội tài lộc dồi dào, tình cảm sinh sôi, mở mang duyên may.',
          'Hóa Quyền (Mùa Hạ): Khí thế bừng bừng, tượng trưng cho quyền lực tối cao, ý chí cạnh tranh, tinh thần lãnh đạo quyết liệt.',
          'Hóa Khoa (Mùa Thu): Gặt hái tri thức, danh tiếng khoa cử, đệ nhất giải thần cứu nạn, chuyển nguy nan thành bình an.',
          'Hóa Kỵ (Mùa Đông): Thu tàng tích trữ, tượng trưng cho thử thách, thị phi, chấp niệm sâu sắc, bài học nghiệp lực để thức tỉnh.'
        ],
        keyPoints: [
          'Tứ Hóa gắn liền với Thiên Can của năm sinh và Đại vận',
          'Hóa Khoa là ngôi sao cứu giải mạnh nhất trong bộ Tứ Hóa'
        ]
      },
      {
        id: '4-3',
        title: '3. Bộ Tứ Đức & Các Sao Cứu Giải – Cảnh Báo',
        content: [
          'Bộ Tứ Đức (Thiên Đức, Nguyệt Đức, Long Đức, Phúc Đức): Bốn tấm khiên phước báu che chở, giải trừ tai họa bệnh tật, biến nguy thành an nhờ đức hạnh chân thật.',
          'Thiên La (cư Thìn) & Địa Võng (cư Tuất): Lưới trời lưới đất bủa vây thử thách nghị lực con người. Cần sao sáng hoặc Hóa Quyền xé lưới bứt phá.',
          'Thiên Thương (tại Nô Bộc) & Thiên Sứ (tại Tật Ách): Lời cảnh tỉnh sâu sắc về quan hệ đối đãi với thuộc hạ/bạn bè và sự chăm sóc sức khỏe thể chất.'
        ],
        keyPoints: [
          'Đức năng thắng số: Tứ Đức gặp sát tinh sẽ giảm trừ đáng kể hung họa',
          'La Võng là bài kiểm tra ý chí sinh tồn của bậc vĩ nhân'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG V: PHƯƠNG PHÁP LUẬN GIẢI LÁ SỐ & VẬN HẠN
  // ==========================================
  {
    id: 'chuong-5',
    number: 'V',
    title: 'Phương Pháp Luận Giải Lá Số & Vận Hạn',
    subtitle: 'Nguyên Tắc Tam Phương Tứ Chính, Luận Đại Vận, Niên Vận (Lưu Niên), Nguyệt Hạn, Nhật Hạn',
    icon: 'Layers',
    summary: 'Quy trình luận giải toàn diện từ tĩnh sang động: Xem gốc rễ Mệnh Cục, truy tìm dòng thời gian qua Đại Vận 10 năm, định vị điểm rơi từng năm (Lưu Niên) và tháng ngày thực chiến.',
    sections: [
      {
        id: '5-1',
        title: '1. Nguyên Tắc Cốt Lõi: Tam Phương Tứ Chính & Mệnh Cục',
        content: [
          'Khi luận bất kỳ một cung vị nào, tuyệt đối không được nhìn đơn độc một cung mà phải xét toàn diện:',
          '1. Cung Tọa Thủ (Chính cung): Nắm giữ 50% ảnh hưởng trực tiếp.',
          '2. Cung Xung Chiếu (Đối cung): Chiếu rọi năng lượng mạnh mẽ (30%).',
          '3. Hai Cung Tam Hợp: Cung cấp nguồn lực hỗ trợ bền vững (20%).',
          '4. Hai Cung Giáp (Giáp tả, giáp hữu): Môi trường bao bọc bên cạnh.',
          'Xét Mệnh Cục tương phối: Mệnh sinh Cục (vất vả vì môi trường), Cục sinh Mệnh (thuận buồm xuôi gió), Mệnh Cục tỷ hòa (ổn định tự tại).'
        ],
        keyPoints: [
          'Toàn cục vi thượng, chi tiết vi hạ',
          'Xét kỹ sự tương tác giữa Cung Tọa và Cung Chiếu'
        ]
      },
      {
        id: '5-2',
        title: '2. Phương Pháp Luận Đại Vận (10 Năm) Chuẩn Xác',
        content: [
          'Đại Vận 10 năm đại diện cho thời thế và môi trường sống của đương số trong một thập kỷ:',
          '- Gốc rễ: Cung Mệnh là Gốc, Đại Vận là Thân cành. Gốc tốt gặp Đại Vận xấu vẫn chống chọi được; gốc yếu gặp Vận xấu dễ ngã quỵ.',
          '- Xét ngũ hành: Bản mệnh có được ngũ hành cung Đại Vận tương sinh không?',
          '- Xét bộ chính tinh Đại Vận: Có hòa hợp với bộ chính tinh tại Mệnh không? (Ví dụ: Mệnh Sát Phá Tham đi vào Đại Vận Tử Phủ Vũ Tướng thì chuyển sang thế ổn định xây dựng cơ ngơi; Mệnh Cơ Nguyệt Đồng Lương đi vào Vận Sát Phá Tham thì gặp nhiều biến động xáo trộn).'
        ],
        keyPoints: [
          'Đại vận tốt kích hoạt tiềm năng ngủ quên của bản mệnh',
          'Đại vận xấu là thời kỳ phòng thủ tích lũy nội lực, chờ thời cơ'
        ]
      },
      {
        id: '5-3',
        title: '3. Luận Lưu Niên, Nguyệt Hạn & Nhật Hạn Thực Chiến',
        content: [
          'Lưu Niên (1 năm): Cho biết điểm rơi cơ hội và thách thức cụ thể của năm đó. Cần kết hợp Lưu Niên Thái Tuế (vị trí chi của năm đó) và Cung Hạn của năm.',
          'Nguyệt Hạn (Tháng): Theo dõi nhịp điệu dòng tiền, sức khỏe và các biến cố vi mô trong 12 tháng.',
          'Nhật Hạn (Ngày): Mẹo thực chiến cho các quyết định ký hợp đồng, xuất hành, đàm phán quan trọng.',
          '5 Câu hỏi lớn giải mã cuộc đời khi luận vận:',
          '1. Tôi là ai, ưu khuyết điểm cốt lõi là gì? (Mệnh - Thân).',
          '2. Tôi nên làm ngành nghề gì để phát huy cao nhất? (Quan Lộc - Tài Bạch).',
          '3. Tôi nên sống ở đâu, nội địa hay xuất ngoại? (Thiên Di - Điền Trạch).',
          '4. Đâu là nguy cơ lớn nhất về sức khỏe/pháp lý? (Tật Ách - Nô Bộc).',
          '5. Đâu là thời điểm thiên thời để bứt phá? (Đại Vận & Lưu Niên).'
        ],
        keyPoints: [
          'Lưu Niên là hoa trái đơm bông của cây đại thụ',
          'Hành động đúng lúc (đắc thời) mang lại hiệu quả gấp bội'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG VI: CÁC CÁCH CỤC THÀNH BẠI & PHÚ QUÝ
  // ==========================================
  {
    id: 'chuong-6',
    number: 'VI',
    title: 'Các Cách Cục Phú Quý & Bần Họa',
    subtitle: 'Định Cục Thượng Cách, Điều Kiện Thành Bại & Các Cách Cục Hung Hiểm',
    icon: 'Crown',
    summary: 'Nhận diện các mẫu hình bố cục tinh đẩu kinh điển quyết định quy mô thành tựu xã hội, sự nghiệp hiển đạt hay bần hàn gian truân, cùng phương pháp hóa giải.',
    sections: [
      {
        id: '6-1',
        title: '1. Tiêu Chí Xác Định "Hình" & "Thế" Của Cách Cục',
        content: [
          'Trong Tam Minh, cách cục được thẩm định qua hai tiêu chuẩn sống còn:',
          'Hình: Bản thân bộ sao có trọn vẹn, đúng vị trí đắc miếu, hội tụ đầy đủ cát tinh hỗ trợ không.',
          'Thế: Môi trường tam hợp, xung chiếu, nhị hợp xung quanh nâng đỡ hay triệt hạ.',
          'Hình đẹp + Thế mạnh -> ĐẠI PHÚ ĐẠI QUÝ.',
          'Hình xấu + Thế yếu -> ĐẠI BẠI TRẮC TRỞ.',
          'Hình đẹp mà Thế bị phá -> Có tài mà không gặp thời, dễ gãy đổ giữa đường.'
        ],
        keyPoints: [
          'Chính tinh miếu vượng là nền móng',
          'Lục Cát Tinh phò tá là cánh tay nâng đỡ',
          'Tối kỵ gặp Sát tinh hãm địa phá cách'
        ]
      },
      {
        id: '6-2',
        title: '2. Các Thượng Cách Phú Quý Kinh Điển',
        content: [
          'Tử Phủ Vũ Tướng: Cách cục đế vương, cơ cấu vững chắc, tài quan song toàn, văn võ kiêm toàn, lãnh đạo tầm vĩ mô.',
          'Quân Thần Khánh Hội: Tử Vi hội tụ đủ Tả Hữu, Xương Khúc, Khôi Việt — bầy tôi phò tá vua sáng, sự nghiệp lẫy lừng.',
          'Nhật Nguyệt Tịnh Minh: Thái Dương cư Ngọ, Thái Âm cư Tý — Âm Dương điều hòa rực rỡ, danh tiếng vươn xa muôn phương.',
          'Sát Phá Tham: Cách mạng bứt phá, dũng cảm mạo hiểm, giàu nhanh trong thời loạn, rất cần Hóa Quyền hoặc Sát tinh đắc địa kích hoạt.',
          'Cơ Nguyệt Đồng Lương: Văn nhân mưu lược, tham mưu hoạch định, y tế giáo dục, đạo đức thanh tao thọ trường.',
          'Cự Nhật (Cự Môn - Thái Dương): Ăn nói hùng biện, ngoại giao, luật sư, truyền thông đại chúng danh tiếng lừng lẫy.'
        ],
        keyPoints: [
          'Mỗi cách cục phù hợp với môi trường ngành nghề riêng biệt',
          'Không có cách cục nào tốt tuyệt đối cho mọi hoàn cảnh'
        ]
      },
      {
        id: '6-3',
        title: '3. Các Cách Cục Hung Bại & Phương Pháp Hóa Giải',
        content: [
          'Linh Xương Đà Vũ: Cổ văn cảnh báo "hạn chí đầu hà". Rất dễ gặp tai nạn sông nước, phá sản hoặc bế tắc tinh thần cùng cực.',
          'Kình Đà Hiệp Kỵ: Lộc Tồn bị Hóa Kỵ đồng cung, Kình Dương và Đà La kẹp chặt hai bên. Tai bay vạ gió, tiểu nhân tranh đoạt tài sản.',
          'Hình Tù Giáp Ấn: Thiên Tướng bị Liêm Trinh và Kình Dương/Thiên Hình kẹp. Dễ vướng lao lý, tranh chấp kiện tụng pháp luật.',
          'Không Kiếp Hãm Địa: Tiền tài bạo phát bạo tàn như sóng biển xô bờ cát.',
          'Phương pháp hóa giải theo Nhân Minh: Giữ tâm chính trực, thượng tôn pháp luật tuyệt đối, chủ động tích lũy phước đức và nhún nhường ẩn nhẫn khi gặp vận hạn.'
        ],
        keyPoints: [
          'Biết trước nguy cơ để phòng vệ sớm là đỉnh cao của xem mệnh',
          'Lấy đức năng thắng số, không tham lam lợi lộc phi pháp'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG VII: CHUYÊN ĐỀ TỰ HÓA & PHI HÓA
  // ==========================================
  {
    id: 'chuong-7',
    number: 'VII',
    title: 'Chuyên Đề Tự Hóa & Phi Hóa',
    subtitle: 'Sinh Niên Tứ Hóa, Tự Hóa Xuất, Tự Hóa Nhập & Cầu Nối Khởi Nhân - Lạc Quả',
    icon: 'Zap',
    summary: 'Kỹ thuật chuyên sâu phái Khâm Thiên và Tam Hợp: Theo dõi dòng chảy năng lượng khí số, truy vết nguồn gốc nhân duyên và quy luật nhân quả giữa các cung vị.',
    sections: [
      {
        id: '7-1',
        title: '1. Bản Chất Sinh Niên Tứ Hóa & Tự Hóa',
        content: [
          'Sinh Niên Tứ Hóa là Nghiệp Tiên Thiên: Là nguồn năng lượng cố định sinh ra đã mang theo, định hình toàn bộ tư chất và duyên nợ cả đời.',
          'Tự Hóa là Không Gian Tương Tác: Khi can của chính cung đó làm biến đổi sao trong cung, biểu thị sự chủ động phản ứng tự thân:',
          '- Tự Hóa Lộc: Tự mình tạo ra cơ hội, nhưng cũng dễ tự do phóng túng tiêu hao.',
          '- Tự Hóa Quyền: Tự mình tranh đấu, tự khẳng định bản thân, dễ dẫn đến cái tôi quá lớn.',
          '- Tự Hóa Khoa: Tự mình cứu giải, tự học hỏi trau dồi, phong thái điềm tĩnh.',
          '- Tự Hóa Kỵ: Tự mình gây rắc rối cho mình, tự dằn vặt chấp niệm, hoặc chủ động buông bỏ.'
        ],
        keyPoints: [
          'Sinh Niên Hóa: Nghiệp tiền định cố định',
          'Tự Hóa: Sự biến đổi động năng tại chỗ'
        ]
      },
      {
        id: '7-2',
        title: '2. Tự Hóa Xuất & Tự Hóa Nhập',
        content: [
          'Tự Hóa Xuất: Năng lượng bung tỏa ra bên ngoài, không giữ lại được. Ví dụ: Cung Tài Bạch có Tự Hóa Lộc Xuất thì kiếm được bao nhiêu tiêu bấy nhiêu, không đọng lại tiền.',
          'Tự Hóa Nhập: Năng lượng thu vào bên trong, giữ chặt lấy. Ví dụ: Cung Tài Bạch có Tự Hóa Kỵ Nhập thì vô cùng chắt chiu, lo sợ mất tiền, chấp niệm giữ của.',
          'Nguyên tắc: Lộc xuất thì hao tán, Lộc nhập thì đắc lợi; Kỵ xuất thì buông xả, Kỵ nhập thì mắc kẹt tâm trí.'
        ],
        keyPoints: [
          'Xuất là bung tỏa ra ngoài cho tha nhân',
          'Nhập là thu tàng vào nội tại bản thân'
        ]
      },
      {
        id: '7-3',
        title: '3. Phi Hóa – Cầu Nối Nhân Quả Giữa Các Cung Vị',
        content: [
          'Phi Hóa là việc lấy Thiên Can của một cung để tra xem Hóa Tinh (Lộc, Quyền, Khoa, Kỵ) bay về cung nào khác:',
          '- Cung phát xuất gọi là Cung Khởi Nhân (Nguyên nhân xảy ra sự việc).',
          '- Cung tiếp nhận gọi là Cung Lạc Quả (Kết quả thu được).',
          'Ví dụ thực chiến:',
          '- Cung Quan Lộc phi Hóa Lộc sang Cung Huynh Đệ: Công việc làm ăn sinh lời giúp đỡ cho anh chị em bạn bè.',
          '- Cung Phu Thê phi Hóa Kỵ sang Cung Mệnh: Người bạn đời mang lại áp lực, ràng buộc hoặc tổn thương tâm lý cho bản thân.'
        ],
        keyPoints: [
          'Phi Hóa giải thích logic: Vì sao việc này xảy ra và dẫn đến kết cục gì',
          'Kỹ thuật đỉnh cao giúp truy vết dòng tiền và tình cảm'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG VIII: 11 HẠNG MỤC LUẬN GIẢI THỰC TẾ
  // ==========================================
  {
    id: 'chuong-8',
    number: 'VIII',
    title: 'Thủ Pháp Luận 11 Hạng Mục Thực Tế',
    subtitle: 'Giải Mã Bài Toán Đời Thường: Tiền Tài, Hôn Nhân, Nhà Đất, Đầu Tư, Việc Làm, Kiện Tụng...',
    icon: 'ListChecks',
    summary: 'Ứng dụng các quy tắc Tam Minh để giải quyết chính xác 11 bài toán thực tế nhức nhối nhất trong cuộc sống hiện đại của đương số.',
    sections: [
      {
        id: '8-1',
        title: '1. Nhóm Kinh Tế: Tiền Bạc, Nhà Đất & Đầu Tư',
        content: [
          'Hạng mục 1 - Dòng tiền & Tài lộc: Xem trục Mệnh - Tài - Phúc. Lộc Tồn cần cất giữ, Hóa Lộc cần xoay vòng dòng tiền. Kỵ gặp Không Kiếp tại Tài kẻo bạo tán.',
          'Hạng mục 2 - Bất động sản & Điền sản: Xem cung Điền Trạch và Phúc Đức. Cung Điền có Tử Phủ, Vũ Âm là đại phú điền sản; có Cự Môn, Phá Quân dễ tranh chấp đất đai hoặc chuyển nhà nhiều lần.',
          'Hạng mục 3 - Đầu tư cổ phiếu & Tài chính mạo hiểm: Cần xem bộ Sát Phá Tham, Hóa Quyền và Không Kiếp đắc địa. Tuyệt đối không đầu cơ khi vận vào Kiếp Sát hoặc Hóa Kỵ.'
        ],
        keyPoints: [
          'Tài sản bền vững nhìn Điền Trạch và Phúc Đức',
          'Tiền mặt lưu động nhìn Tài Bạch và Hóa Lộc'
        ]
      },
      {
        id: '8-2',
        title: '2. Nhóm Sự Nghiệp: Việc Làm, Khởi Nghiệp & Đối Tác',
        content: [
          'Hạng mục 4 - Chuyển việc, thăng chức: Xem cung Quan Lộc và Lưu Niên. Có Tướng Tinh, Khôi Việt, Hóa Quyền là thời cơ thăng chức nhảy vọt.',
          'Hạng mục 5 - Khởi nghiệp độc lập hay Làm công ăn lương: Bộ Tử Phủ Vũ Tướng / Sát Phá Tham hợp làm chủ độc lập; Bộ Cơ Nguyệt Đồng Lương hợp làm chuyên môn, cố vấn, tổ chức lớn.',
          'Hạng mục 6 - Quan hệ sếp & đối tác: Xem cung Phụ Mẫu (cấp trên) và Nô Bộc (cộng sự/đối tác). Tránh hợp tác nếu Nô Bộc có Kình Đà, Phục Binh quấy nhiễu.',
          'Hạng mục 7 - Phòng ngừa kiện tụng hợp đồng: Tránh ký kết dự án lớn khi Đại vận hoặc Lưu niên gặp Liêm Trinh, Cự Môn, Thiên Hình, Quan Phù hội Hóa Kỵ.'
        ],
        keyPoints: [
          'Chọn mô hình nghề nghiệp đúng sở trường Mệnh Bàn',
          'Quản trị rủi ro pháp lý trước khi xảy ra tranh chấp'
        ]
      },
      {
        id: '8-3',
        title: '3. Nhóm Đời Sống: Hôn Nhân, Định Cư, Sức Khỏe & Con Cái',
        content: [
          'Hạng mục 8 - Hôn nhân gia đạo: Xem cung Phu Thê, Phúc Đức và sao Đào Hoa, Cô Quả. Hóa giải muộn màng bằng cách chọn bạn đời phù hợp Nạp Âm ngũ hành.',
          'Hạng mục 9 - Xuất ngoại & Định cư: Xem cung Thiên Di và sao Thiên Mã. Thiên Mã ngộ Lộc, Tràng Sinh đi xa đại lợi.',
          'Hạng mục 10 - Tầm soát sức khỏe bệnh tật: Cung Tật Ách chỉ rõ cơ quan nội tạng suy yếu (Kim - phổi phế quản; Mộc - gan mật; Thủy - thận tiết niệu; Hỏa - tim mạch huyết áp; Thổ - tỳ vị tiêu hóa).',
          'Hạng mục 11 - Giáo dục con cái: Xem cung Tử Tức để định hướng giáo dục sớm phù hợp với năng khiếu tự nhiên của trẻ.'
        ],
        keyPoints: [
          'Hôn nhân lấy sự thấu hiểu và bao dung làm gốc',
          'Phòng bệnh hơn chữa bệnh, chú trọng dưỡng sinh đúng ngũ hành'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG IX: TỬ VI SỐ PHÁI (ĐỊNH LƯỢNG BÀN TAY)
  // ==========================================
  {
    id: 'chuong-9',
    number: 'IX',
    title: 'Tử Vi Số Phái & Bấm Độn Bàn Tay',
    subtitle: 'Khoa Học Định Lượng Số Hóa, Thang Điểm Cát Hung (+3 Đến -3), Đồ Hình Bàn Tay Trái',
    icon: 'Calculator',
    summary: 'Phương pháp toán học hóa Tử Vi: Quy đổi trạng thái miếu vượng đắc hãm thành thang điểm định lượng chuẩn xác và kỹ thuật bấm độn 12 cung trên lòng bàn tay trái.',
    sections: [
      {
        id: '9-1',
        title: '1. Nguyên Lý Định Lượng Hóa Của Số Phái',
        content: [
          'Tử Vi Số Phái chủ trương: "Ưu tiên định lượng trước định tính". Tránh việc xem số cảm tính mơ hồ:',
          'Mỗi trạng thái của tinh đẩu được gán một mức năng lượng điểm số cụ thể:',
          '- Miếu địa: +3 điểm (Cực thịnh, phát huy 100% năng lượng cát lành).',
          '- Vượng địa: +2 điểm (Rất tốt, năng lượng mạnh mẽ).',
          '- Đắc địa: +1 điểm (Khá tốt, có năng lực phát tác).',
          '- Hãm địa (cát tinh): -1 điểm (Mất sức mạnh, dễ bị chi phối).',
          '- Hãm địa (hung sát tinh): -2 đến -3 điểm (Tác hại hung hiểm dữ dội).'
        ],
        keyPoints: [
          'Định lượng giúp so sánh sức mạnh thực sự giữa các cung',
          'Tổng điểm cung vị > +5 điểm: Cung cực vượng; < 0 điểm: Cung suy yếu'
        ],
        tableData: {
          headers: ['Trạng Thái Tinh Đẩu', 'Điểm Số', 'Ý Nghĩa Năng Lượng'],
          rows: [
            ['Miếu địa (M)', '+3', 'Cực đại cát khí, uy lực rực rỡ trọn vẹn'],
            ['Vượng địa (V)', '+2', 'Năng lượng mạnh mẽ, phát triển thuận lợi'],
            ['Đắc địa (Đ)', '+1', 'Đủ năng lực phát huy ưu thế bản thân'],
            ['Bình hòa (B)', '0', 'Trung tính, phụ thuộc vào sao đồng cung'],
            ['Hãm địa cát tinh (H)', '-1', 'Suy giảm quang minh, khó lòng trợ lực'],
            ['Hãm địa sát tinh (H)', '-2 đến -3', 'Tác hại hung hiểm, tổn thất khó lường']
          ]
        }
      },
      {
        id: '9-2',
        title: '2. Cách Tính Điểm Tổng Cung & Đánh Giá Vận Hạn',
        content: [
          'Công thức tính điểm tổng quát của một cung:',
          'Điểm Cung = (Tổng điểm sao tọa thủ × 2) + (Điểm đối cung × 1) + (Điểm tam hợp × 0.5) - (Điểm sát tinh hãm).',
          'Ứng dụng đánh giá Đại Vận 10 năm:',
          '- Điểm Vận >= +8: Thập kỷ vàng son, dồn toàn lực mở rộng đầu tư, tiến công giành thắng lợi lớn.',
          '- Điểm Vận từ +3 đến +7: Giai đoạn ổn định, củng cố nền tảng, phát triển đều đặn.',
          '- Điểm Vận < 0: Thập kỷ thử thách khắc nghiệt, chuyển sang chiến lược phòng thủ, bảo toàn lực lượng, học tập tu dưỡng.'
        ],
        keyPoints: [
          'Điểm số định lượng chỉ rõ quy mô thành bại',
          'Biết điểm mạnh điểm yếu để phân bổ nguồn lực tối ưu'
        ]
      },
      {
        id: '9-3',
        title: '3. Kỹ Thuật Bấm Độn 12 Cung Trên Lòng Bàn Tay Trái',
        content: [
          'Bàn tay trái là bảo bối của người học Tử Vi. 12 cung địa bàn được an cố định trên các lóng tay:',
          '- Cung Tý: Đốt dưới cùng ngón tay đeo nhẫn (ngón áp út).',
          '- Cung Sửu: Đốt dưới cùng ngón giữa.',
          '- Cung Dần: Đốt dưới cùng ngón trỏ.',
          '- Cung Mão: Đốt giữa ngón trỏ.',
          '- Cung Thìn: Đốt trên cùng ngón trỏ.',
          '- Cung Tỵ: Đốt trên cùng ngón giữa.',
          '- Cung Ngọ: Đốt trên cùng ngón áp út.',
          '- Cung Mùi: Đốt trên cùng ngón út.',
          '- Cung Thân: Đốt giữa ngón út.',
          '- Cung Dậu: Đốt dưới cùng ngón út.',
          '- Cung Tuất: Đốt thứ 2 từ dưới lên của ngón út.',
          '- Cung Hợi: Đốt thứ 3 từ dưới lên của ngón út.',
          'Thuộc lòng vị trí bàn tay giúp an sao bấm hạn chớp nhoáng trong vài giây mà không cần tra sách.'
        ],
        keyPoints: [
          'Vận hành 12 cung theo chiều kim đồng hồ quanh bàn tay',
          'Công cụ thực chiến đỉnh cao của các bậc thầy Tử Vi'
        ]
      }
    ]
  },

  // ==========================================
  // CHƯƠNG X: ĐẠO ĐỨC HÀNH NGHỀ & BẢNG 118 SAO
  // ==========================================
  {
    id: 'chuong-10',
    number: 'X',
    title: 'Đạo Đức Luận Mệnh & 118 Sao Ứng Hạn',
    subtitle: 'Tâm Pháp Tam Minh, Giới Luật Đạo Đức, Checklist 7 Bước & Bảng 118 Sao Ứng Vận Hạn',
    icon: 'BookOpen',
    summary: 'Cương lĩnh đạo đức cốt tử của người hành nghề luận mệnh Tam Minh: Tâm thiện lành, không trục lợi hù dọa; cùng bộ từ điển tra cứu nhanh 118 sao ứng với vận hạn.',
    sections: [
      {
        id: '10-1',
        title: '1. Cương Lĩnh & Giới Luật Đạo Đức Luận Mệnh',
        content: [
          'Phần 4 của tài liệu Tử Vi Tam Minh xác lập các chuẩn mực đạo đức tối thượng:',
          '1. Tâm trong sáng, thiện lành: Người luận mệnh lấy sự sáng suốt và từ bi làm gốc, giúp người thức tỉnh chứ không phải phô diễn tài năng.',
          '2. Tuyệt đối không hù dọa trục lợi: Cấm kỵ việc lợi dụng vận hạn xấu để dọa dẫm khách hàng nhằm bán dịch vụ cúng bái, bùa chú dị đoan kiếm tiền.',
          '3. Tôn trọng tự do ý chí: Không bao giờ ép buộc đương số phải tin hoặc hành động theo ý mình, trao quyền tự quyết cho đương số.',
          '4. Giữ bí mật thông tin tuyệt đối: Mọi thông tin đời tư, tài chính, gia đạo của khách hàng phải được bảo mật kín kẽ.',
          '5. Không luận số trẻ em dưới 16 tuổi khi không cần thiết: Trẻ em tâm tính và vận trình còn biến động lớn, tránh gán nhãn định kiến lên tương lai của trẻ.'
        ],
        keyPoints: [
          'Người luận mệnh là bác sĩ tâm hồn, không phải thầy bói gieo rắc sợ hãi',
          'Đạo đức là bảo chứng cho tuổi thọ và sự thanh thản của người xem số'
        ],
        callout: {
          title: 'Tâm pháp Tam Minh',
          content: '"Không nói lời dọa dẫm làm hoang mang lòng người. Không biến số mệnh thành xiềng xích gông cùm. Dùng trí tuệ soi sáng bóng tối, dùng từ bi nâng đỡ bước chân."',
          type: 'quote'
        }
      },
      {
        id: '10-2',
        title: '2. Mẫu Checklist 7 Bước Trước Khi Luận Mệnh Thực Tế',
        content: [
          'Để buổi luận đoán diễn ra chuẩn xác và tôn nghiêm, người luận mệnh cần kiểm tra đầy đủ danh mục:',
          '1. Đã kiểm tra giờ sinh chính xác qua các biến cố quá khứ chưa?',
          '2. Đã lắng nghe thấu đáo mong muốn và câu hỏi thực tế của đương số chưa?',
          '3. Đã xác lập đầy đủ 3 yếu tố Thiên (bản mệnh) – Địa (thời thế) – Nhân (ý chí hành vi) chưa?',
          '4. Đã chuẩn bị ngôn ngữ giải thích thuật ngữ đơn giản, dễ hiểu cho người phổ thông chưa?',
          '5. Đã soạn sẵn hướng giải quyết và biện pháp chuyển hóa thực tế cho các vận hạn xấu chưa?',
          '6. Đã kiểm soát cảm xúc, giữ tâm thế bình thản, kiên nhẫn và không thiên vị chưa?',
          '7. Luận đúng trọng tâm câu hỏi của đương số trước, tránh lan man phân tán.'
        ],
        keyPoints: [
          'Chuẩn bị kỹ lưỡng trước khi luận giải',
          'Luôn mang lại giải pháp thực tiễn có tính khả thi'
        ],
        tableData: {
          headers: ['Nội Dung Kiểm Tra', 'Trạng Thái', 'Tiêu Chuẩn Đạt'],
          rows: [
            ['Kiểm tra giờ sinh', 'Bắt buộc', 'Khớp ít nhất 2-3 sự kiện lớn trong quá khứ'],
            ['Lắng nghe mong muốn', 'Bắt buộc', 'Nắm rõ câu hỏi trọng tâm đương số trăn trở'],
            ['Thiên - Địa - Nhân', 'Bắt buộc', 'Đủ 3 trụ cột: Tố chất + Hoàn cảnh + Hành động'],
            ['Ngôn ngữ đối thoại', 'Bắt buộc', 'Trong sáng, dễ hiểu, không dùng thuật ngữ bí hiểm'],
            ['Đề xuất giải pháp', 'Bắt buộc', 'Có ít nhất 1-2 hành động cụ thể để cải biến vận xấu']
          ]
        }
      },
      {
        id: '10-3',
        title: '3. Bảng Tra Cứu 118 Sao Ứng Với Vận Hạn',
        content: [
          'Cẩm nang tra cứu nhanh tác động của các tinh đẩu khi bay vào Đại Vận hoặc Lưu Niên:',
          '- Tử Vi: Quyền chức tăng tiến, vinh hiển quang minh, gặp vận hội lớn bứt phá sự nghiệp.',
          '- Thiên Cơ: Thay đổi công việc, di chuyển nhiều, kế hoạch hay biến động đổi mới.',
          '- Thái Dương: Thăng tiến danh vọng; nếu hãm địa dễ hao tốn sức lực, đau đầu mắt.',
          '- Vũ Khúc: Biến động vốn tài chính lớn; cẩn trọng tranh chấp tiền của nếu gặp sát tinh.',
          '- Thiên Đồng: Đi lại xê dịch, thay đổi chỗ ở, tình cảm có nhiều biến chuyển.',
          '- Liêm Trinh: Dễ dính líu thị phi pháp luật hoặc kiện tụng nếu hãm địa.',
          '- Thiên Phủ: Tài sản tích lũy gia tăng, có quý nhân nâng đỡ ổn định vững chắc.',
          '- Thái Âm: Tài lộc bất ngờ, nhân duyên tốt đẹp; hãm địa hao tài cho nữ giới.',
          '- Tham Lang: Tham vọng và giao tế tăng cao; cẩn trọng thị phi scandal ái tình.',
          '- Cự Môn: Khẩu thiệt tranh cãi, thị phi đàm tiếu; cần cẩn trọng lời ăn tiếng nói.',
          '- Thiên Tướng: Được giao phó quyền bính, cứu giải nạn tai hoạn nạn.',
          '- Thiên Lương: Gặp phúc lớn, tai qua nạn khỏi, tuổi thọ bình an.',
          '- Thất Sát: Biến động mang tính bước ngoặt; cẩn trọng chấn thương hình thương.',
          '- Phá Quân: Phá cũ xây mới, biến động dữ dội, hao tổn tiền của đột xuất.',
          '- Hóa Lộc: Tiền bạc thăng hoa, may mắn tình duyên.',
          '- Hóa Quyền: Quyền lực mở rộng, cạnh tranh thắng lợi.',
          '- Hóa Khoa: Đệ nhất cứu giải, thi cử đỗ đạt, hóa hung thành cát.',
          '- Hóa Kỵ: Trắc trở thị phi, vướng mắc hợp đồng, chấp niệm phiền muộn.',
          '- Kình Dương: Đề phòng tai nạn giao thông, phẫu thuật dao kéo.',
          '- Đà La: Tiểu nhân ngầm hãm hại, bệnh tật kéo dài dây dưa.',
          '- Hỏa Tinh / Linh Tinh: Đề phòng hỏa hoạn cháy nổ, điện giật, nóng giận hỏng việc.',
          '- Địa Không / Địa Kiếp: Thất thoát tiền bạc lớn, bài học vô thường đắt giá.',
          '- Đào Hoa / Hồng Loan: Hỷ sự cưới hỏi, tình duyên đơm hoa, sinh con quý tử.',
          '- Đại Hao / Tiểu Hao: Chi tiêu hao tán lớn, tiền vào cửa trước ra cửa sau.'
        ],
        keyPoints: [
          'Tra cứu nhanh khi xem vận hạn hàng năm',
          'Phối hợp sao Lưu Niên với sao gốc của bản mệnh'
        ]
      }
    ]
  }
]
