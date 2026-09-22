/**
 * KỊCH BẢN AI PODCAST TỬ VI TAM MINH
 * Dựa trên tài liệu gốc: Tử Vi Tam Minh - Sách
 * Hai nhân vật:
 * - Minh Triết: Chuyên gia nghiên cứu lý số sâu sắc, điềm đạm, uyên bác.
 * - Tuệ Mẫn: Nhà phân tích thực tế, thông minh, sắc sảo, liên tục đặt câu hỏi gợi mở cho khán giả.
 */

const PODCAST_DATA = {
  meta: {
    title: "Tử Vi Tam Minh - Bản Đồ Giải Mã Vận Mệnh Hiện Đại",
    subtitle: "Thấu hiểu Thiên Phần - Nhận thức Địa Cục - Khai mở Nhân Hành",
    author: "Tam Minh Đường & Ban Biên Tập",
    hosts: [
      {
        id: "triet",
        name: "Minh Triết",
        role: "Nhà nghiên cứu Lý Số",
        gender: "male",
        color: "#38bdf8",
        voicePitch: 0.9,
        voiceRate: 0.98,
        avatar: "assets/host-triet.svg"
      },
      {
        id: "man",
        name: "Tuệ Mẫn",
        role: "Nhà phân tích Thực tế & Đời sống",
        gender: "female",
        color: "#f472b6",
        voicePitch: 1.15,
        voiceRate: 1.02,
        avatar: "assets/host-man.svg"
      }
    ]
  },
  chapters: [
    {
      id: 1,
      title: "Chương 1: Căn Nguyên & Tam Trụ (Thiên - Địa - Nhân)",
      desc: "Nguồn gốc Tử Vi, sự lỗi thời của bói toán định mệnh và cốt lõi triết lý Tam Minh.",
      badge: "Triết Lý Cốt Lõi",
      icon: "☯️",
      segments: [
        {
          id: "c1_s1",
          speaker: "man",
          text: "Chào mừng các bạn đã đến với chuỗi Podcast đặc biệt: Khám phá cuốn sách Tử Vi Tam Minh. Mình là Tuệ Mẫn. Anh Triết này, khi nhắc đến Tử Vi, rất nhiều người ngày nay vẫn nghĩ đó là một bộ môn bói toán huyền bí mang tính định mệnh: số sướng thì ngồi mát ăn bát vàng, còn số khổ thì dù có vùng vẫy cỡ nào cũng không thoát được. Cuốn sách Tử Vi Tam Minh này có góc nhìn như thế nào về điều đó?",
          slide: {
            title: "Tử Vi Cổ Điển vs Tử Vi Hiện Đại",
            badge: "Dẫn Nhập Khám Phá",
            points: [
              "Quan niệm cũ: Định mệnh an bài, con người thụ động cam chịu số phận",
              "Thách thức thời đại mới: Xã hội thay đổi từng giờ, cơ hội và biến số liên tục",
              "Góc nhìn Tam Minh: Số mệnh là tấm bản đồ dẫn đường, không phải bản án trói buộc"
            ],
            quote: "Vận mệnh không phải sợi dây trói buộc, mà là tấm bản đồ để người thức tỉnh nắm tay chèo lái.",
            visualType: "comparison"
          }
        },
        {
          id: "c1_s2",
          speaker: "triet",
          text: "Một câu hỏi rất hay của Tuệ Mẫn. Ngay từ lời nói đầu, sách đã khẳng định: 'Thiên địa chi đại đức viết sinh, nhân chi đại đức viết minh' - Đức lớn của Trời Đất là sinh hóa, nhưng đức lớn nhất của con người là sự sáng tỏ. Tử Vi Đẩu Số khởi phát từ thời Tống bởi Trần Đoàn Lão Tổ, vốn dĩ là tấm gương phản chiếu quy luật tự nhiên của vũ trụ lên con người. Nhưng qua hàng thế kỷ, nhiều lối luận cổ quá nặng về định mệnh, coi con người bất lực trước Thiên ý. Tam Minh ra đời chính là để thắp sáng lại bản chất nguyên thủy: giúp con người thấu hiểu chính mình để làm chủ tương lai.",
          slide: {
            title: "Khởi Nguồn & Tinh Thần Nguyên Thủy",
            badge: "Lịch Sử & Tinh Hoa",
            points: [
              "Trần Đoàn Lão Tổ (Thời Tống): Hệ thống hóa 14 Chính Tinh & Tinh Bàn",
              "Nguyên lý: Tinh Đẩu vận hành kết hợp Âm Dương, Ngũ Hành, Thiên Can, Địa Chi",
              "Mục tiêu tối thượng: Tự hiểu thiên phận, thuận ứng thời thế, rèn luyện nhân cách"
            ],
            quote: "Tử Vi mang ý nghĩa giáo dục nhân sinh sâu sắc, không đơn thuần là trò xem bói họa phúc.",
            visualType: "history"
          }
        },
        {
          id: "c1_s3",
          speaker: "man",
          text: "Rất ấn tượng! Vậy từ 'Tam Minh' nghĩa là ba nguồn ánh sáng soi chiếu vận mệnh đúng không anh? Cụ thể ba nguồn sáng đó là gì?",
          slide: {
            title: "Tam Minh: Ba Nguồn Ánh Sáng",
            badge: "Mô Hình Tam Tài",
            points: [
              "Thiên Minh: Sáng tỏ căn cơ, tố chất và bẩm tính nguyên thủy",
              "Địa Minh: Sáng tỏ hoàn cảnh, thời cuộc và môi trường sống",
              "Nhân Minh: Sáng tỏ ý chí, sự tự chủ và hành động thực tế"
            ],
            quote: "Thiên định giới hạn, Địa cục mở đường, Nhân hành thành sự.",
            visualType: "tamtai"
          }
        },
        {
          id: "c1_s4",
          speaker: "triet",
          text: "Chính xác, Tuệ Mẫn! Tam Minh lấy mô hình Tam Tài làm trụ cột: Thiên Minh - Địa Minh - Nhân Minh. Thiên Minh là soi sáng phần Tĩnh: tố chất bẩm sinh, ưu khuyết điểm di truyền từ lúc sinh ra. Địa Minh là soi sáng hoàn cảnh: gia đình, thời cuộc, thị trường kinh tế, nơi chốn bạn đang sống. Và quan trọng nhất là Nhân Minh: ngọn đèn soi chiếu ý chí, đạo đức và những quyết định hành động mỗi ngày. Ba trụ này tạo thành một chân kiềng vững chắc.",
          slide: {
            title: "Trụ Cột Thiên - Địa - Nhân",
            badge: "Cơ Chế Tương Tác",
            points: [
              "Thiên (Phần Tĩnh): Tiềm năng nguyên thủy ghi trên lá số",
              "Địa (Phần Tĩnh - Động): Sóng gió thị trường, vận hội và thách thức xã hội",
              "Nhân (Phần Động): Điểm then chốt mà con người có toàn quyền cải tạo"
            ],
            quote: "Số mệnh là bức tranh nền. Hành động của con người chính là những nét vẽ hoàn thiện bức tranh đó.",
            visualType: "pillars"
          }
        },
        {
          id: "c1_s5",
          speaker: "man",
          text: "Nghĩa là nếu chúng ta có một lá số nhiều sao tốt, tức là Thiên Minh sáng, nhưng chúng ta lại đặt mình vào một môi trường sai lầm, hoặc lười biếng không hành động, thì kết quả vẫn có thể thất bại đúng không anh?",
          slide: {
            title: "Mối Tương Quan Bất Khả Phân",
            badge: "Quy Luật Thực Tế",
            points: [
              "Thiên Cát + Địa Nghịch + Nhân Lười → Lụi bại, lãng phí tiềm năng",
              "Thiên Bình + Địa Thuận + Nhân Nỗ Lực → Đạt thành tựu phi thường",
              "Nhân Minh chính là đòn bẩy duy nhất con người có thể làm chủ 100%"
            ],
            quote: "Người có tố chất thiên bẩm tốt mà buông xuôi ắt gãy đổ; người tư chất bình thường nhưng biết thuận thời và bền chí ắt làm nên nghiệp lớn.",
            visualType: "balance"
          }
        },
        {
          id: "c1_s6",
          speaker: "triet",
          text: "Hoàn toàn đúng! Cuốn sách đã đúc kết một chân ngôn tuyệt vời: 'Thiên định giới hạn, Địa cục mở đường, Nhân hành thành sự'. Đừng ngồi đó cầu xin hay đổ lỗi cho lá số. Hãy hiểu rõ bản thân để biết sở trường, nhìn nhận thời thế để không đi ngược dòng, và lấy hành động kiên trì làm chìa khóa mở cánh cửa tương lai.",
          slide: {
            title: "Đúc Kết Chương 1: Tinh Thần Tam Minh",
            badge: "Chân Ngôn Tam Minh",
            points: [
              "Hiểu mình (Minh Thiên) để biết phát huy thế mạnh",
              "Thuận thời (Minh Địa) để nắm bắt thời cơ",
              "Chủ động (Minh Nhân) để viết nên vận mệnh của chính mình"
            ],
            quote: "Hiểu mình – Thuận thời – Chủ động.",
            visualType: "summary"
          }
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Đạo Đức Luận Mệnh & Nguyên Lý Biện Cát - Hung",
      desc: "Quy tắc vàng của người xem số hiện đại: không mê tín hù dọa, phân biệt Động - Tĩnh.",
      badge: "Đạo Đức & Nguyên Lý",
      icon: "⚖️",
      segments: [
        {
          id: "c2_s1",
          speaker: "man",
          text: "Bước sang Phần 4 của cuốn sách, em thấy tác giả dành hẳn một chương rất dài về Đạo đức luận mệnh. Trong thực tế, có rất nhiều người đi xem bói về bị trầm cảm, lo sợ vì thầy phán: cung này xấu, năm nay đại hạn chết chóc hoặc tán gia bại sản. Sách Tử Vi Tam Minh giải quyết vấn đề này thế nào thưa anh?",
          slide: {
            title: "Vấn Nạn 'Hù Dọa' Trong Tử Vi Cũ",
            badge: "Đạo Đức Luận Mệnh",
            points: [
              "Tâm lý tiêu cực: Người xem số bị gieo rắc nỗi sợ, hoang mang bất an",
              "Lợi dụng mê tín: Ép cúng giải hạn tốn kém, vô bổ",
              "Quan điểm Tam Minh: Người luận giải là người tư vấn định hướng, không phải quan tòa tuyên án"
            ],
            quote: "Luận mệnh chân chính là trao thêm niềm tin và phương hướng, tuyệt đối không được gieo rắc sợ hãi để trục lợi.",
            visualType: "ethics"
          }
        },
        {
          id: "c2_s2",
          speaker: "triet",
          text: "Đó là một thực trạng rất nhức nhối mà trường phái Tam Minh kiên quyết loại bỏ. Sách đưa ra 5 chuẩn mực đạo đức sắt đá: Thứ nhất, không tuyệt đối hóa định mệnh; thứ hai, không dùng hung họa để hù dọa trục lợi; thứ ba, luôn đồng hành cùng giải pháp; thứ tư, bảo mật đời tư của đương số; và thứ năm, xem việc luận giải là gieo hạt giống thức tỉnh. Không có cung số nào là xấu 100%, cũng không có hung tinh nào chỉ đem lại tai ương.",
          slide: {
            title: "5 Chuẩn Mực Đạo Đức Của Tam Minh",
            badge: "Quy Tắc Hành Nghề",
            points: [
              "1. Tôn trọng tự do ý chí: Không phán quyết tuyệt đối",
              "2. Từ bi & Xây dựng: Không gieo sợ hãi, không vụ lợi cúng bái",
              "3. Luận Hung phải kèm Giải Pháp: Tìm lối thoát trong nghịch cảnh",
              "4. Bảo mật tuyệt đối thông tin và tôn trọng cuộc đời đương số",
              "5. Hướng thiện: Khơi dậy trách nhiệm sống và tu dưỡng tâm tính"
            ],
            quote: "Mỗi lá số là một cuộc đời sống động, không phải là một ván cờ vô cảm.",
            visualType: "ethics5"
          }
        },
        {
          id: "c2_s3",
          speaker: "man",
          text: "Một nguyên lý rất hay nữa trong sách là 'Nguyên lý Biện Cát - Hung theo Tam Diện'. Anh có thể giải thích rõ hơn về cách nhìn Cát - Hung này được không?",
          slide: {
            title: "Nguyên Lý Biện Cát - Hung Tam Diện",
            badge: "Tư Duy Đa Chiều",
            points: [
              "Cát về Thiên: Tố chất phù hợp với việc đang làm",
              "Cát về Địa: Môi trường ủng hộ, đúng xu thế thời đại",
              "Cát về Nhân: Năng lực hành động, sự tỉnh thức và đạo đức cá nhân"
            ],
            quote: "Cát hay Hung không nằm đơn độc trong một ngôi sao, mà nằm ở sự hòa hợp giữa tố chất, thời thế và hành vi.",
            visualType: "cathung"
          }
        },
        {
          id: "c2_s4",
          speaker: "triet",
          text: "Rất trực quan thôi Tuệ Mẫn: Một ngôi sao như Thất Sát hay Hóa Kỵ trong sách cổ hay coi là hung tinh. Nhưng trong Tam Minh: Nếu Thiên phần là người can trường chịu khó (Sát tinh đắc lực), Địa cục là môi trường cạnh tranh khốc liệt như thương trường hoặc nghiên cứu kỹ thuật cao, và Nhân hành là người đó chăm chỉ, trung thực - thì chính 'Hung tinh' đó lại trở thành động lực giúp họ bứt phá thành công rực rỡ. Hung hóa thành Cát chính là ở chỗ này.",
          slide: {
            title: "Chuyển Hóa Hung Thành Cát",
            badge: "Thuật Ứng Biến",
            points: [
              "Sát tinh (Kình, Đà, Hỏa, Linh): Năng lượng bộc phá, tính chiến đấu, tinh thần thép",
              "Hóa Kỵ: Bài học khó khăn, sự cảnh giác cao độ, chuyên môn hóa tỉ mỉ",
              "Bí quyết: Dùng môi trường đúng và kỷ luật thép để tôi luyện năng lượng sao hung"
            ],
            quote: "Không có ngôi sao nào vô dụng; người thợ gốm giỏi biết dùng cả bùn lầy để nung nên bảo vật.",
            visualType: "transform"
          }
        }
      ]
    },
    {
      id: 3,
      title: "Chương 3: 6 Bước Luận Giải Thực Chiến",
      desc: "Quy trình khảo sát từ đời thực đến lá số: 6 bước chuẩn xác của người luận mệnh Tam Minh.",
      badge: "Quy Trình 6 Bước",
      icon: "🧭",
      segments: [
        {
          id: "c3_s1",
          speaker: "man",
          text: "Em thấy ở các trường phái khác, vừa gặp là thầy mở ngay lá số ra phán như đúng rồi. Nhưng trong Phần 3 của sách Tử Vi Tam Minh, tác giả đưa ra một quy trình gồm đúng 6 bước, và bước 1 lại không phải là đọc lá số! Tại sao lại như vậy hả anh?",
          slide: {
            title: "6 Bước Luận Giải Tam Minh",
            badge: "Khảo Sát Thực Tế",
            points: [
              "Bước 1: Tiếp xúc thực tế (Khảo sát Nhân)",
              "Bước 2: Xem xét ngày giờ sinh (Xác định Thiên phần)",
              "Bước 3: Phân tích vận thế xã hội (Định hình Địa cục)",
              "Bước 4: Đọc lá số tổng thể (Chân dung vận mệnh)",
              "Bước 5: Định vị hiện trạng và chu kỳ thời điểm",
              "Bước 6: Dự báo xu hướng & Đưa ra định hướng hành động"
            ],
            quote: "Không thể hiểu một cái cây nếu chỉ nhìn hạt giống mà không nhìn thổ nhưỡng và khí hậu nơi nó mọc.",
            visualType: "flow6"
          }
        },
        {
          id: "c3_s2",
          speaker: "triet",
          text: "Bởi vì bước 1 là 'Khảo sát Nhân - Hiện diện thực tế'. Cùng một ngày giờ sinh ra đời, nhưng một người lớn lên ở vùng nông thôn, một người ở trung tâm tài chính New York; một người được giáo dục tử tế, một người bỏ bê học hành thì số phận đã phân nhánh rất xa. Nếu không lắng nghe hoàn cảnh sống, thần thái, tâm lý thực tại của đương số mà vội vàng phán đoán trên giấy, thì đó chỉ là bói mò.",
          slide: {
            title: "Bước 1: Khảo Sát Nhân & Hiện Diện",
            badge: "Bước Nền Tảng",
            points: [
              "Quan sát thần sắc, tác phong, giọng nói của đương số",
              "Lắng nghe trăn trở và môi trường sống gia đình hiện tại",
              "Tránh 'Đồng thanh đồng khí' võ đoán khi chưa hiểu bối cảnh đời thực"
            ],
            quote: "Cùng một hạt giống, gieo vào đất cằn cỗi sẽ khác với gieo trên đất phù sa phì nhiêu.",
            visualType: "step1"
          }
        },
        {
          id: "c3_s3",
          speaker: "man",
          text: "Thật khoa học! Sau khi khảo sát Nhân, chúng ta mới bước sang Bước 2 là Thiên phần (ngày giờ sinh) và Bước 3 là Địa cục (thời thế xã hội). Vậy Bước 4, 5 và 6 kết nối lại như thế nào?",
          slide: {
            title: "Tổng Hòa 6 Bước Luận Mệnh",
            badge: "Chu Trình Phân Tích",
            points: [
              "Bước 2 (Thiên): Xác định lá số chuẩn xác, cấu trúc Mệnh - Thân - Cục",
              "Bước 3 (Địa): Xem xu hướng thời đại (AI, công nghệ, chuyển dịch nghề nghiệp)",
              "Bước 4: Đọc tương quan 12 cung (Mệnh, Tài, Quan, Phúc, Di...)",
              "Bước 5: Xem hạn hiện tại (Đại vận 10 năm & Lưu niên)",
              "Bước 6: Đưa ra chiến lược hành động thực tế, khả thi"
            ],
            quote: "Mục đích cuối cùng của việc xem số là giải quyết vấn đề của ngày hôm nay và ngày mai.",
            visualType: "flowchart"
          }
        },
        {
          id: "c3_s4",
          speaker: "triet",
          text: "Ở Bước 6, người luận Tam Minh không chỉ đưa ra dự đoán 'năm nay bạn có tiền hay mất tiền', mà đưa ra khuyến nghị hành động cụ thể: Ví dụ nếu năm nay cung Tài gặp Hao tinh nhưng cung Quan gặp Hóa Khoa, thì lời khuyên tốt nhất là: Hãy chủ động đầu tư tiền vào việc học hành, chứng chỉ, nâng cao kỹ năng! Tiền sẽ 'hao' một cách có ích thay vì bị lừa đảo hay tiêu tán vô cớ. Đó chính là biến bị động thành chủ động.",
          slide: {
            title: "Bước 6: Định Hướng Hành Động Thông Minh",
            badge: "Ứng Dụng Thực Tiễn",
            points: [
              "Gặp sao Hao + Hóa Khoa: Chủ động chi tiền đi học, nâng cấp bản thân",
              "Gặp Triệt / Tuần ở cung Quan: Tập trung củng cố nội lực, không mạo hiểm bành trướng",
              "Gặp Thiên Mã + Lưu Hà: Chủ động tìm kiếm cơ hội đi xa, phát triển thị trường mới"
            ],
            quote: "Khi biết trước mùa đông sắp đến, người thông thái không than thở về cái lạnh, mà chuẩn bị sẵn củi lửa và áo ấm.",
            visualType: "action"
          }
        }
      ]
    },
    {
      id: 4,
      title: "Chương 4: 14 Chính Tinh & Cách Cục Hiện Đại",
      desc: "Khám phá 4 nhóm chòm sao chủ lực dưới góc nhìn nghề nghiệp và tính cách thời đại 4.0.",
      badge: "Hệ Thống Tinh Đẩu",
      icon: "✨",
      segments: [
        {
          id: "c4_s1",
          speaker: "man",
          text: "Chương này chắc chắn là phần được rất nhiều bạn mong đợi: Hệ thống 14 Chính Tinh trong Tử Vi. Trong sách Tam Minh, tác giả phân chia 14 chính tinh thành 4 cụm cách cục lớn rất dễ nhớ. Anh Triết có thể điểm qua 4 cụm này để mọi người cùng hình dung không ạ?",
          slide: {
            title: "4 Cụm Chính Tinh Cốt Lõi",
            badge: "Bản Đồ 14 Chính Tinh",
            points: [
              "1. Bộ Tử Phủ Vũ Tướng: Nhà lãnh đạo, quản trị, điều hành tài chính",
              "2. Bộ Sát Phá Tham: Tiên phong, khai phá, khởi nghiệp mạo hiểm",
              "3. Bộ Cơ Nguyệt Đồng Lương: Chiến lược gia, công chức, chuyên môn cao",
              "4. Bộ Cự Nhật: Truyền thông, phát ngôn, luật sư, lan tỏa tri thức"
            ],
            quote: "14 vì sao là 14 dạng năng lượng nguyên mẫu (Archetypes) trong tâm lý học con người.",
            visualType: "stars4"
          }
        },
        {
          id: "c4_s2",
          speaker: "triet",
          text: "Đúng vậy! Thứ nhất là bộ 'Tử Phủ Vũ Tướng' gồm Tử Vi, Thiên Phủ, Vũ Khúc, Thiên Tướng. Đây là hình mẫu của người làm quản lý cấp cao, CEO, chủ doanh nghiệp, người giữ tay hòm chìa khóa. Đặc điểm là đĩnh đạc, bao quát, có uy quyền và khả năng tổ chức tuyệt vời. Thứ hai là bộ 'Sát Phá Tham' gồm Thất Sát, Phá Quân, Tham Lang - đây là những chiến tướng xông pha, những nhà khởi nghiệp dám chấp nhận rủi ro, chịu áp lực biến động mạnh.",
          slide: {
            title: "Bộ Tử Phủ Vũ Tướng & Sát Phá Tham",
            badge: "Lãnh Đạo & Tiên Phong",
            points: [
              "Tử Vi (Đế tinh): Khí chất người dẫn đầu, uy nghiêm, chính trực",
              "Thiên Phủ (Kho bạc): Tài chính vững vàng, quản trị bảo thủ an toàn",
              "Thất Sát: Quyết đoán, độc lập, sẵn sàng chịu thương đau để chiến thắng",
              "Phá Quân: Phá bỏ khuôn mẫu cũ, sáng tạo đổi mới không ngừng"
            ],
            quote: "Tử Phủ kiến thiết giang sơn, Sát Phá mở mang bờ cõi.",
            visualType: "leader_scout"
          }
        },
        {
          id: "c4_s3",
          speaker: "man",
          text: "Thế còn hai bộ còn lại: 'Cơ Nguyệt Đồng Lương' và 'Cự Nhật' thì phù hợp với những công việc nào trong xã hội hiện đại ngày nay hở anh?",
          slide: {
            title: "Bộ Cơ Nguyệt Đồng Lương & Cự Nhật",
            badge: "Chuyên Gia & Ngôn Luận",
            points: [
              "Thiên Cơ: Tư duy logic nhạy bén, lập trình, cố vấn chiến lược",
              "Thái Âm / Thiên Đồng: Nghệ thuật, sáng tạo nội dung, nhân sự, dịch vụ",
              "Thiên Lương: Giáo dục, y tế, cố vấn pháp lý, hoạt động xã hội",
              "Cự Môn + Thái Dương: Diễn thuyết, marketing, truyền thông quốc tế"
            ],
            quote: "Cơ Lương mưu trí tột cùng, Cự Nhật tỏa rạng muôn nơi.",
            visualType: "advisor_media"
          }
        },
        {
          id: "c4_s4",
          speaker: "triet",
          text: "Bộ 'Cơ Nguyệt Đồng Lương' là những chuyên gia thượng thặng: Kỹ sư phần mềm, nhà nghiên cứu khoa học, bác sĩ, giảng viên đại học, chuyên viên hoạch định chính sách. Họ cần sự ổn định và chiều sâu trí tuệ. Còn bộ 'Cự Nhật' với Thái Dương chủ về ánh sáng quang minh và Cự Môn chủ về khẩu tài thì cực kỳ hợp với thời đại Digital: Làm KOL, phát ngôn viên, luật sư, chuyên gia ngoại giao hoặc truyền thông đa phương tiện. Hiểu được sao của mình là biết mình nên đặt chân vào sân chơi nào để tỏa sáng rực rỡ nhất!",
          slide: {
            title: "Định Vị Nghề Nghiệp Theo Chính Tinh",
            badge: "Hướng Nghiệp 4.0",
            points: [
              "Không có sao sang - sao hèn: Chỉ có đặt đúng người vào đúng vị trí",
              "Người Sát Phá Tham không thể bắt ngồi làm giấy tờ bàn giấy 8 tiếng",
              "Người Cơ Nguyệt Đồng Lương không nên ép lao vào đầu tư mạo hiểm đỏ đen",
              "Thấu hiểu chính tinh là chìa khóa phát huy tối đa sở trường bản thân"
            ],
            quote: "Mỗi con cá sinh ra để bơi lội, đừng bắt nó phải leo cây rồi chê nó ngu ngốc.",
            visualType: "career"
          }
        }
      ]
    },
    {
      id: 5,
      title: "Chương 5: Nghệ Thuật 'Hóa Mệnh' - Tự Chủ Tương Lai",
      desc: "Đỉnh cao của Tử Vi Tam Minh: Dùng Nhân Minh để chuyển hóa vận số, làm chủ cuộc đời.",
      badge: "Đỉnh Cao Ứng Dụng",
      icon: "🌟",
      segments: [
        {
          id: "c5_s1",
          speaker: "man",
          text: "Chúng ta đã đi đến phần kết và cũng là phần cốt tủy thăng hoa nhất của cuốn sách: Thuật 'Hóa Mệnh'. Rất nhiều cuốn sách khác kết thúc bằng việc xem hạn tốt xấu, nhưng Tử Vi Tam Minh lại nâng tầm lên thành việc 'Chuyển hóa số mệnh'. Anh Triết có thể tóm lược triết lý 'Hóa Mệnh' này để gửi tặng quý thính giả không ạ?",
          slide: {
            title: "Thuật 'Hóa Mệnh' Trong Tam Minh",
            badge: "Tự Chủ Vận Mệnh",
            points: [
              "Tử Vi thường tình: Xem số để tò mò, bất an, phó mặc cho may rủi",
              "Tử Vi Tam Minh: Xem số để hiểu mình, dùng số để kiến tạo cuộc đời",
              "Khái niệm Hóa Mệnh: Dùng Nhận thức đúng (Minh) và Hành vi đúng (Hành) để biến họa thành phúc"
            ],
            quote: "Không chỉ biết số mà là dùng số; không chỉ nhận mệnh mà là hóa mệnh.",
            visualType: "hoamenh"
          }
        },
        {
          id: "c5_s2",
          speaker: "triet",
          text: "Đây chính là lý do cuốn sách mang tên Tam Minh Đường. 'Hóa Mệnh' gồm 3 bước chuyển biến: Thứ nhất là 'Hóa Tâm' - thay đổi tư duy, từ bỏ tâm lý nạn nhân oán trách hoàn cảnh. Thứ hai là 'Hóa Cảnh' - biết chọn bạn mà chơi, biết chọn môi trường lành mạnh để nuôi dưỡng hạt giống thiện lương. Và thứ ba là 'Hóa Hành' - kỷ luật trong hành động, kiên trì trau dồi tri thức và đạo đức.",
          slide: {
            title: "3 Nấc Thang Chuyển Hóa Vận Mệnh",
            badge: "Quy Trình Chuyển Hóa",
            points: [
              "1. Hóa Tâm: Thay đổi nhận thức, chịu trách nhiệm 100% về đời mình",
              "2. Hóa Cảnh: Thay đổi môi trường sống và mối quan hệ xung quanh",
              "3. Hóa Hành: Kỷ luật hành động mỗi ngày, tu dưỡng đạo đức và trí tuệ"
            ],
            quote: "Tâm đổi thì Tướng đổi, Tướng đổi thì Mệnh đổi, Mệnh đổi thì Vận thông.",
            visualType: "steps3"
          }
        },
        {
          id: "c5_s3",
          speaker: "man",
          text: "Thật sự quá sâu sắc và truyền cảm hứng! Nghe xong những chia sẻ này, em cảm thấy Tử Vi không còn là một môn bói toán mơ hồ nữa, mà thực sự là một môn khoa học tâm lý học và nhân sinh học phương Đông vô cùng hiện đại, văn minh.",
          slide: {
            title: "Tử Vi Hiện Đại: Khoa Học Nhân Sinh",
            badge: "Nhận Thức Mới",
            points: [
              "Khoa học thống kê tính cách & chu kỳ nhịp sinh học vũ trụ",
              "Tâm lý học hành vi: Giải mã điểm mù và tiềm năng vô thức",
              "Triết học hành động: Hướng tới sự an lạc, sáng suốt và tử tế"
            ],
            quote: "Tử Vi là tấm gương soi tâm, giúp ta nhìn thấu điểm mù để hoàn thiện nhân cách.",
            visualType: "reflection"
          }
        },
        {
          id: "c5_s4",
          speaker: "triet",
          text: "Đúng vậy Tuệ Mẫn. Hãy nhớ rằng: Các vì tinh tú trên bầu trời hàng triệu năm trước đã xoay vần, nhưng trái tim và khối óc của bạn đang đập ở giây phút này. Đừng để bất kỳ lá số nào định nghĩa giới hạn của bạn. Hãy để ánh sáng Tam Minh - Thiên rõ, Địa thông, Nhân tường - dẫn lối cho bạn bước đi vững vàng, an nhiên và thành công trên mọi nẻo đường đời!",
          slide: {
            title: "Lời Kết: Khai Mở Tương Lai",
            badge: "Thông Điệp Tri Ân",
            points: [
              "Thiên Rõ: Tôn trọng căn cơ, thấu triệt sở trường",
              "Địa Thông: Hòa hợp cùng thời đại, chọn đúng môi trường",
              "Nhân Tường: Bền chí, chủ động kiến tạo vận may"
            ],
            quote: "Cánh cửa đã mở. Ánh sáng Tam Minh đang chờ đợi những người xứng đáng bước vào.",
            visualType: "ending"
          }
        }
      ]
    }
  ],
  glossary: [
    { term: "Thiên Minh", def: "Sáng tỏ phần Tĩnh bẩm sinh: tính cách, tài năng, giới hạn nguyên thủy của đương số." },
    { term: "Địa Minh", def: "Sáng tỏ phần Hoàn cảnh: môi trường sống, gia đình, xu hướng thời cuộc và thời vận xã hội." },
    { term: "Nhân Minh", def: "Sáng tỏ phần Hành động: ý chí, đạo đức, sự lựa chọn và phản ứng chủ động của đương số." },
    { term: "Tam Tài", def: "Mô hình phối hợp Thiên - Địa - Nhân cổ điển tạo nên sự hài hòa trọn vẹn của vạn vật." },
    { term: "Hóa Mệnh", def: "Phương pháp chủ động dùng nhận thức và hành vi đạo đức để chuyển hóa hung thành cát." },
    { term: "Chính Tinh", def: "14 ngôi sao chủ chốt trên tinh bàn định hình tính cách và khung sườn của một đời người." }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PODCAST_DATA;
}
