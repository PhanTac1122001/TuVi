// Dữ liệu luận giải Tinh Đẩu tọa thủ tại 12 Cung Vị (Chuẩn giáo trình Tử Vi Tam Minh Đường)

export interface StarPalaceDetail {
  palaceId: string;
  palaceName: string;
  iconName: string;
  meaning: string;
  overview: string;
  goodAspects: string;
  badAspects: string;
  specificAspect: string;
  remedy: string;
}

export const TWELVE_PALACES_META: { id: string; name: string; meaning: string; iconName: string }[] = [
  { id: 'menh', name: 'Cung Mệnh', meaning: 'Chủ bản mệnh, cốt cách, tư chất, thọ yểu và định hướng cuộc đời', iconName: 'Compass' },
  { id: 'phu-mau', name: 'Cung Phụ Mẫu', meaning: 'Chủ cha mẹ, phúc ấm tiền nhân, sự bảo bọc và giáo dưỡng thuở nhỏ', iconName: 'Users' },
  { id: 'phuc-duc', name: 'Cung Phúc Đức', meaning: 'Chủ phúc lộc tổ tiên, đời sống tinh thần, tư tưởng và tuổi thọ', iconName: 'Heart' },
  { id: 'dien-trach', name: 'Cung Điền Trạch', meaning: 'Chủ đất đai, nhà cửa, gia sản cố định và không gian sinh sống', iconName: 'Home' },
  { id: 'quan-loc', name: 'Cung Quan Lộc', meaning: 'Chủ công danh sự nghiệp, đường hoạn lộ, chức nghiệp và địa vị xã hội', iconName: 'Briefcase' },
  { id: 'no-boc', name: 'Cung Nô Bộc', meaning: 'Chủ bạn bè, đồng nghiệp, cấp dưới, thuộc hạ và người hợp tác', iconName: 'UserCheck' },
  { id: 'thien-di', name: 'Cung Thiên Di', meaning: 'Chủ môi trường giao tế bên ngoài, xuất hành, ngoại giao và quý nhân nơi xa', iconName: 'Navigation' },
  { id: 'tat-ach', name: 'Cung Tật Ách', meaning: 'Chủ tai ương bệnh tật, thể chất nội tại và khả năng giải trừ ách nạn', iconName: 'ShieldAlert' },
  { id: 'tai-bach', name: 'Cung Tài Bạch', meaning: 'Chủ tiền tài phú túc, phương thức sinh tài, quản lý và tiêu pha', iconName: 'Coins' },
  { id: 'tu-tuc', name: 'Cung Tử Tức', meaning: 'Chủ đường con cái, hậu duệ, sự nối dõi và mối liên kết gia tộc sau này', iconName: 'Baby' },
  { id: 'phu-the', name: 'Cung Phu Thê', meaning: 'Chủ tình cảm lứa đôi, phẩm hạnh người bạn đời, duyên nợ hôn nhân', iconName: 'Sparkles' },
  { id: 'huynh-de', name: 'Cung Huynh Đệ', meaning: 'Chủ anh chị em ruột, thâm tình cốt nhục, sự hòa thuận và tương trợ', iconName: 'Layers' }
];

export const STAR_PALACES_MAP: Record<string, Record<string, Omit<StarPalaceDetail, 'palaceId' | 'palaceName' | 'iconName' | 'meaning'>>> = {
  "cu-mon": {
    "menh": {
      "overview": "Tính cách: Thích lý luận, suy nghĩ nhiều, dễ nghi ngờ, nội tâm phức tạp. Có tài ăn nói, giỏi biện luận, nhưng dễ gây tranh cãi. Ngoại hình: Mắt sáng nhưng thường đảo liên tục, mặt khéo léo, miệng rộng, nói nhiều. Ưu điểm: Sắc sảo, lanh lợi, có sức thuyết phục, thích tìm hiểu sự thật.",
      "goodAspects": "Cát tinh hội (Hóa Khoa, Xương Khúc) → nhà diễn thuyết, luật sư, MC, giáo viên giỏi.",
      "badAspects": "Sát tinh (Hóa Kỵ, Không Kiếp) → thị phi triền miên, lời nói hại thân, tự mình chuốc họa.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Tính chất công việc: Gắn với lời nói, trình bày, thương lượng, cần kỹ năng giao tiếp tốt.",
      "goodAspects": "Cát tinh → nổi tiếng nhờ tài ăn nói.",
      "badAspects": "Sát tinh → mất uy tín vì lời nói thiếu kiểm soát, dễ bị kiện tụng.",
      "specificAspect": "Nghề nghiệp: Hợp ngành luật, giáo dục, báo chí, tâm lý học, truyền thông, marketing, ngoại giao.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Kiếm tiền nhờ năng lực thuyết phục – quảng bá – diễn đạt. Lộc đến từ giao tiếp, đối thoại. Chi tiêu: Cẩn trọng, hay so đo. Dễ mất tiền vì mâu thuẫn trong hợp tác hoặc tranh cãi.",
      "goodAspects": "Cát tinh → giỏi đàm phán, lộc về tư vấn – pháp lý – truyền thông.",
      "badAspects": "Sát tinh → kiện tụng, mất tiền vì lời.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Nói nhiều, thông minh, biết tranh luận nhưng có thể hay cằn nhằn.",
      "goodAspects": "Cát tinh → vợ chồng hiểu nhau qua trò chuyện, gắn kết tâm lý.",
      "badAspects": "Sát tinh → khẩu chiến, xung đột lời nói, ly hôn vì thị phi.",
      "specificAspect": "Hôn nhân: Nặng lời dễ gây tổn thương, sống với nhau phải biết lắng nghe.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Có nhà nhưng thường vướng pháp lý, tranh chấp. Gặp bất động sản lắm lời bàn ra. Phong cách sống: Nhà hay có người nói nhiều, dễ bị hàng xóm soi mói.",
      "goodAspects": "Cát tinh → giỏi buôn bán nhà đất.",
      "badAspects": "Sát tinh → kiện tụng đất đai, bất an trong nơi ở.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Họng, thanh quản, dạ dày, thần kinh căng thẳng vì lo nghĩ – nói nhiều. Dễ bị stress, trầm cảm. Tâm lý: Hay bất mãn, buồn phiền vì những lời bàn tán xung quanh.",
      "goodAspects": "Cát tinh → biết giữ khẩu, ít bệnh.",
      "badAspects": "Sát tinh → khẩu nghiệp sinh bệnh, tai tiếng ảnh hưởng thân thể.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Dễ nổi bật nhờ khả năng giao tiếp. Nhưng cũng dễ bị nói xấu, đàm tiếu, vướng điều tiếng. Môi trường phù hợp: Báo chí, truyền thông, dạy học, quảng cáo, luật pháp.",
      "goodAspects": "Cát tinh → nổi tiếng, có duyên nói năng.",
      "badAspects": "Sát tinh → đi xa vướng chuyện thị phi, kiện tụng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người biết ăn nói, nhưng cũng có người hay xì xào – hai mặt. Tính chất: Quan hệ bằng miệng nhiều hơn bằng việc.",
      "goodAspects": "Cát tinh → bạn tốt, biết chia sẻ – tư vấn.",
      "badAspects": "Sát tinh → bị bạn phản, nói xấu, đâm sau lưng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ cha mẹ – con: Hay cãi nhau nếu không kiểm soát lời nói.",
      "goodAspects": "Cát tinh → con cái giỏi ăn nói, học giỏi.",
      "badAspects": "Sát tinh → xung khẩu, bất hòa với con, con hay thị phi.",
      "specificAspect": "Con cái: Nói sớm, lanh lợi, hay lý sự. Nhưng cần dạy rèn tính trầm tĩnh.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Hay tranh luận, lý sự, dễ cãi nhau về chuyện nhỏ. Quan hệ: Nếu không hòa hợp thì bị ngăn cách lâu dài.",
      "goodAspects": "Cát tinh → hay nói chuyện, hợp tác.",
      "badAspects": "Sát tinh → tranh chấp tài sản, nói xấu nhau, chia rẽ.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Tổ tiên làm nghề thuyết pháp, giáo viên, người có danh tiếng. Có truyền thống nói năng, tranh luận. Tinh thần: Nghi ngờ, ít niềm tin, cần tu khẩu, bớt bàn chuyện người khác.",
      "goodAspects": "Cát tinh → đời sống tinh thần tốt, có duyên tu học.",
      "badAspects": "Sát tinh → gia đạo lắm chuyện, dòng họ nhiều điều tiếng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Dễ bị phê bình, cha mẹ hay soi mói khiến con áp lực.",
      "goodAspects": "Cát tinh → cha mẹ hướng dẫn con tốt.",
      "badAspects": "Sát tinh → cha mẹ nói làm tổn thương con, dễ mâu thuẫn.",
      "specificAspect": "Cha mẹ: Hay lý luận, hay dạy dỗ, nhưng nói nhiều hơn làm. Có thể làm nghề thầy cô, luật, ngoại giao.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "liem-trinh": {
    "menh": {
      "overview": "Tính cách: Nội tâm mạnh, trọng nhân cách – đạo lý, có thiên hướng khép kín, nghiêm túc. Dễ tu dưỡng, sống sâu sắc và nguyên tắc. Ngoại hình: Mắt sắc, trán cao, mày rõ nét, mặt thường có chiều sâu. Nam thường nghiêm, nữ thanh tú nhưng lạnh. Ưu điểm: Có nội lực, bền chí, biết giữ phẩm hạnh.",
      "goodAspects": "Cát tinh hội (Khôi Việt, Khoa, Tả Hữu) → phát huy thành người có uy tín, nhân cách cao.",
      "badAspects": "Khuyết điểm: Cố chấp, dễ dằn vặt bản thân, chịu áp lực nội tâm. Gặp sát tinh → cực đoan, có xu hướng tự trừng phạt hoặc cô độc.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Tính chất công việc: Làm vì lý tưởng, muốn cống hiến, khó chịu sự giả dối.",
      "goodAspects": "Cát tinh hội → thành công nhờ chính trực.",
      "badAspects": "Sát tinh → công danh bị kìm hãm, dính thị phi vì sự thẳng thắn.",
      "specificAspect": "Nghề nghiệp: Hợp ngành có yếu tố đạo đức, chuẩn mực, nghiêm túc như luật, giáo dục, tư pháp, tu hành, kiểm tra – giám sát.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tiêu tiền: Chặt chẽ, hướng về tiết kiệm – tích lũy để phòng xa.",
      "goodAspects": "Cát tinh → tài vận vững bền.",
      "badAspects": "Sát tinh → nghèo vì thanh cao, giữ nguyên tắc mà bỏ lộc.",
      "specificAspect": "Tài vận: Tài đến từ sự tu dưỡng, công việc nghiêm túc, đạo đức nghề nghiệp. Không thích làm giàu kiểu may rủi.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Chính trực, sống vì lý tưởng, hay lo nghĩ, không ưa buông thả.",
      "goodAspects": "Cát tinh → vợ chồng cùng tu dưỡng, sống mẫu mực.",
      "badAspects": "Sát tinh → hôn nhân khắt khe, xa cách hoặc có khổ vì đạo lý.",
      "specificAspect": "Hôn nhân: Nặng về nghĩa hơn tình. Nếu không có sự mềm hóa → dễ lạnh nhạt, khó sẻ chia.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Có duyên đất tổ, nhà ở vùng gần nơi thiêng, chùa chiền hoặc nơi yên tĩnh. Phong cách sống: Thích nơi kín đáo, gọn gàng, thanh tịnh.",
      "goodAspects": "Cát tinh → hưởng nhà tốt do tổ tiên để lại.",
      "badAspects": "Sát tinh → nhà ở u ám, có khí âm nặng, dễ cô độc trong nhà.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Liên quan hệ tiêu hóa, nội tạng, thận, khí huyết, hoặc tâm lý áp lực nặng nề. Tâm bệnh: Hay tự trách, dằn vặt, cảm giác bị ràng buộc.",
      "goodAspects": "Cát tinh → bệnh nhẹ, dễ được cứu chữa.",
      "badAspects": "Sát tinh → bệnh giấu kín, lâu khỏi, dễ mắc nạn vì dồn nén.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Mang khí chất nghiêm, người khác nể sợ hơn là gần gũi. Làm việc tốt ở nơi đòi hỏi trách nhiệm, kỷ luật. Tính chất xã hội: Bền bỉ, kiên trì, giữ mình.",
      "goodAspects": "Cát tinh → có uy tín xã hội, đi đâu cũng được tôn trọng.",
      "badAspects": "Sát tinh → dễ bị hiểu lầm, xa cách trong giao tiếp.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Ít thân mật, nhưng có người kính phục, nể vì đạo đức. Không thích tụ tập. Quan hệ: Giữ khoảng cách, chọn lọc người chơi.",
      "goodAspects": "Cát tinh → gặp người bạn đáng tin.",
      "badAspects": "Sát tinh → bị cô lập, không ai chia sẻ được lý tưởng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Tình cảm cha mẹ – con: Có khoảng cách do cách thể hiện tình cảm thiếu mềm mại.",
      "goodAspects": "Cát tinh → con hiếu thuận, làm cha mẹ yên tâm.",
      "badAspects": "Sát tinh → xung khắc, bất hòa vì khác tư tưởng.",
      "specificAspect": "Con cái: Khá nghiêm, ít nói, có chí tiến thủ nhưng thường khép kín.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Mỗi người mỗi chí, dễ bất đồng quan điểm sống, nhất là về đạo đức – trách nhiệm. Quan hệ: Kính mà ít thân, không chia sẻ nhiều.",
      "goodAspects": "Cát tinh → anh em cùng giữ danh dự gia đình.",
      "badAspects": "Sát tinh → mâu thuẫn âm ỉ, dễ xa cách lâu dài.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Gia tộc có người giữ đạo, có người tu hành, làm việc thiện. Dòng họ có truyền thống đạo lý. Tinh thần: Thích thanh tịnh, tu dưỡng. Có duyên cầu đạo hoặc tu trì.",
      "goodAspects": "Cát tinh → hậu vận tốt, tâm an.",
      "badAspects": "Sát tinh → đời sống tâm linh nghi hoặc, hay hoài nghi về nhân quả.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Ít gần gũi, thiên trọng về lễ nghĩa – vai vế hơn tình cảm.",
      "goodAspects": "Cát tinh → cha mẹ có vai trò định hình nhân cách cho con.",
      "badAspects": "Sát tinh → bị áp đặt, dễ xa cách hoặc tổn thương tình thân.",
      "specificAspect": "Cha mẹ: Nghiêm khắc, trọng đạo lý, giáo dục con nghiêm cẩn, đôi khi khắc nghiệt.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "pha-quan": {
    "menh": {
      "overview": "Tính cách: Nổi loạn, bản năng mạnh, ghét gò bó, sống tự do, thường có tư tưởng “dẹp cũ, lập mới”. Dám nghĩ, dám làm, dám thay đổi. Ngoại hình: Cá tính mạnh, tướng hơi ngang bướng, ánh mắt sắc, cơ thể rắn rỏi hoặc hơi thô. Ưu điểm: Gan dạ, bứt phá, dám liều lĩnh, thích hợp người tiên phong – khởi nghiệp.",
      "goodAspects": "Cát tinh hội (Lộc, Quyền, Xương, Khôi Việt) → người đột phá, lập nghiệp lớn, có sức ảnh hưởng.",
      "badAspects": "Sát tinh hội (Kỵ, Kiếp, Không) → dễ sa đọa, nghèo khổ, sống bản năng, vướng vòng lao lý.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Tính chất công việc: Không hợp làm công chức – càng gò bó càng phá.",
      "goodAspects": "Cát tinh hội → đổi nghề liên tục nhưng càng đổi càng phát.",
      "badAspects": "Sát tinh hội → thất nghiệp, bỏ dở, bốc đồng, dễ bị đuổi việc.",
      "specificAspect": "Nghề nghiệp: Hợp làm chủ, đầu tư mạo hiểm, kinh doanh độc lập, nghề thay đổi nhanh (start-up, công nghệ, chứng khoán, môi giới, giải trí…).",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Kiếm tiền nhanh, lộc bất ngờ, thích đầu tư ngắn hạn, tiền vào dễ – ra cũng nhanh. Chi tiêu: Mạnh tay, đôi khi thiếu kế hoạch. Dễ mất tiền vì thích mạo hiểm hoặc sống bản năng.",
      "goodAspects": "Cát tinh hội → trúng lớn, nhưng phải biết điểm dừng.",
      "badAspects": "Sát tinh hội → tán tài, vỡ nợ, tiêu phá không kiểm soát.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Cá tính, thích tự do, khó thuần phục. Có thể từng trải, đã qua một lần đổ vỡ.",
      "goodAspects": "Cát tinh hội → bạn đời cá tính, thành đạt, nhưng cần tôn trọng tự do.",
      "badAspects": "Sát tinh hội → ly dị, tình cảm không ổn định, dính chuyện tình tay ba.",
      "specificAspect": "Hôn nhân: Gắn bó kiểu “duyên kỳ lạ”, đến nhanh – đi nhanh. Muốn bền cần nhiều nhẫn nhịn.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Sát tinh hội → bán lỗ, đất bị tranh chấp, tổn hao lớn.",
      "goodAspects": "Cát tinh hội → đất đai sinh tài nhờ chiến lược phá cách.",
      "badAspects": "Tài sản: Thường mua bán đất nhiều lần, không thích ở lâu một nơi. Dễ đầu tư bất động sản phá cách (loft, dạng studio, đầu tư homestay, v.v.).",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Thận, tiết niệu, tai nạn bất ngờ, nghiện ngập, rối loạn hành vi, bệnh do sống bất cần. Tâm bệnh: Nóng nảy, buông thả, trầm cảm – nổi loạn nội tâm.",
      "goodAspects": "Cát tinh hội → mạnh mẽ vượt bệnh, sức đề kháng tốt.",
      "badAspects": "Sát tinh hội → nguy hiểm, bệnh do chính mình gây ra.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Hành động bất ngờ, dám “liều”, phù hợp với môi trường biến động, năng động, đi xa dễ thành công.",
      "goodAspects": "Cát tinh hội → lập nghiệp phương xa, đổi đời nơi lạ.",
      "badAspects": "Sát tinh hội → bị cuốn vào sự cố, thất bại nơi đất khách, hoặc phạm pháp.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Nổi loạn, khó kiểm soát, dễ phản. Giao tiếp theo kiểu “đồng minh tạm thời”.",
      "goodAspects": "Cát tinh hội → có người giỏi cùng đột phá.",
      "badAspects": "Sát tinh hội → bị chơi xấu, đâm sau lưng, làm việc nhóm kém.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ: Cha mẹ – con dễ xung đột, cần cảm thông và linh hoạt.",
      "goodAspects": "Cát tinh hội → con cái thành công từ con đường khác biệt.",
      "badAspects": "Sát tinh hội → bất hiếu, phản nghịch, dễ xung khắc nặng.",
      "specificAspect": "Con cái: Cá tính mạnh, không theo lối cũ, khó dạy, bướng bỉnh. Thường muốn tự lập sớm.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Mỗi người một ngả, bất hòa vì chí hướng. Dễ xung đột, ly tán.",
      "goodAspects": "Cát tinh hội → giúp nhau lập nghiệp riêng.",
      "badAspects": "Sát tinh hội → bất hòa nặng, cắt đứt liên hệ.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Tổ tiên có người bỏ quê hương, đổi đời, phá vỡ truyền thống cũ. Gia đạo thường thăng trầm. Tinh thần: Mạnh mẽ nhưng ít hướng tâm linh. Dễ bị “phá phúc” nếu không biết gìn giữ.",
      "goodAspects": "Cát tinh hội → đổi mới gia phong, giúp dòng họ đi lên.",
      "badAspects": "Sát tinh hội → phá tổ, tổ nghiệp đứt đoạn, sống nghịch lý.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Cha mẹ: Tính khí thất thường, có người bỏ xứ, đổ vỡ hôn nhân. Quan hệ cha mẹ – con cái nhiều biến động.\nCát tinh hội → cha mẹ có sức bứt phá, lập nghiệp lớn.\nSát tinh hội → cha mẹ mất sớm, ly tán, hoặ",
      "goodAspects": "Cát tinh hội → cha mẹ có sức bứt phá, lập nghiệp lớn.",
      "badAspects": "Sát tinh hội → cha mẹ mất sớm, ly tán, hoặc con tự lập từ nhỏ.",
      "specificAspect": "Cha mẹ: Tính khí thất thường, có người bỏ xứ, đổ vỡ hôn nhân. Quan hệ cha mẹ – con cái nhiều biến động.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "tu-vi": {
    "menh": {
      "overview": "Tính cách: Chính trực, khí chất quý phái, trọng danh dự, có bản lĩnh lãnh đạo bẩm sinh. Tự tin, tự chủ, thích dẫn đầu. Ngoại hình: Thường cao ráo, đường nét đoan chính, khí sắc tốt, trán cao, mặt vuông đầy đặn. Ưu điểm: Tư duy lớn, khí phách quân tử, dễ tạo ảnh hưởng.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt...) → phát quý hiển, có tiếng nói trong tập thể.",
      "badAspects": "Hội sát tinh (Kình Đà, Không Kiếp...) → khí chất bị gò bó, dễ cô độc hoặc mệnh lớn nhưng thời vận nhỏ.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Đặc điểm: Làm việc nguyên tắc, định hướng chiến lược tốt. Có khả năng điều phối, đưa ra quyết sách lớn. Phát triển: Nếu có Quyền – Lộc hội tụ → dễ lên cao, nhiều người phục.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Cẩn trọng: Nếu bị sát tinh xung phá dễ bị ganh ghét, quyền không bền.",
      "specificAspect": "Nghề nghiệp: Thích hợp vai trò lãnh đạo, quản lý, chính trị, quân sự, hành chính, luật pháp.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tính tiêu xài: Thận trọng, không hoang phí. Thường tích lũy lâu dài. Nếu gặp Lộc Tồn – Hóa Lộc → đại phú. Nếu gặp Kỵ, Hao → có thể vì sĩ diện mà hao tán.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Tiền tài: Có phúc lộc do danh tiếng hoặc địa vị mang lại. Biết quản lý tiền, ưa tài chính minh bạch.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Đặc điểm: Quan hệ vợ chồng rõ ràng, trọng lễ nghĩa, tôn trọng vai vế. Khuyết điểm: Dễ sinh khoảng cách vì cả hai cùng mạnh, khó nhún nhường.",
      "goodAspects": "Nếu gặp cát tinh → vợ chồng hỗ trợ nhau vững bền.",
      "badAspects": "Nếu sát tinh hội tụ → hôn nhân danh giá nhưng dễ lạnh nhạt.",
      "specificAspect": "Hôn nhân: Gặp người bạn đời có khí chất vương giả, hoặc tài giỏi, cứng cỏi.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Thường có nhà đất từ sớm, hưởng phúc tổ tiên. Có khả năng mở rộng bất động sản. Cơ ngơi: Nhà cửa trang nghiêm, vuông vức, nhiều tầng hoặc phong thủy vượng địa.",
      "goodAspects": "Cát tinh hội tụ → bất động sản sinh lộc.",
      "badAspects": "Sát tinh hội tụ → khó giữ nhà yên ổn, hay thay đổi.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Thể chất: Khí mạnh, bề ngoài khỏe nhưng tâm lý dễ căng thẳng, áp lực nội tâm. Bệnh lý dễ gặp: Cao huyết áp, bệnh tim, suy nhược thần kinh. Nếu hội Không – Kiếp – Kỵ → bệnh khó lường, dễ dính chuyện lớn về thân thể.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Có danh tiếng, được người trọng nể, khí chất thu hút. Đi đâu cũng gây ảnh hưởng. Sự nghiệp ngoại giao: Tốt với các công việc cần thể hiện – lãnh đạo – điều phối.",
      "goodAspects": "Cát tinh hội tụ → ra ngoài phát lộc.",
      "badAspects": "Sát tinh → dễ bị công kích, vạ miệng, cô độc nơi đất khách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người phò tá giỏi, được lòng người dưới. Dễ tạo mạng lưới uy tín. Tuy nhiên: Có xu hướng chọn người giỏi hơn là thân thiết.",
      "goodAspects": "Cát tinh → có quý nhân là phụ tá mạnh.",
      "badAspects": "Sát tinh → bị phản trắc từ người thân cận.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ cha con: Nghiêm khắc, có khoảng cách nếu không khéo điều hòa.",
      "goodAspects": "Cát tinh → con cái hiển đạt.",
      "badAspects": "Sát tinh → dễ xa cách, tình cảm nhạt.",
      "specificAspect": "Con cái: Có khí chất lớn, học hành thành đạt, dễ nổi danh.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Có người nổi bật trong họ tộc, được nhờ hoặc ngược lại là người gánh vác họ. Tính chất: Quan hệ rõ ràng, ít thân mật nhưng trọng trách. Nếu gặp Không – Kỵ → dễ phân ly, mỗi người một chí hướng.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Hưởng phúc lớn, tổ tiên có danh tiếng, có quý khí từ dòng họ. Tâm linh: Có căn tu, thích sống đạo nghĩa, nhân hậu.",
      "goodAspects": "Hội cát tinh → sống lâu, hậu vận thịnh.",
      "badAspects": "Sát tinh → dòng họ danh lớn nhưng dễ phân tán.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Truyền thống, nghiêm túc, ít thân tình nhưng bền chặt.",
      "goodAspects": "Nếu cát tinh → được cha mẹ nâng đỡ.",
      "badAspects": "Nếu sát tinh → nghiêm khắc, khó gần hoặc cha mẹ ly tán.",
      "specificAspect": "Cha mẹ: Có địa vị, có nguyên tắc, ảnh hưởng mạnh đến đời con.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thai-am": {
    "menh": {
      "overview": "Tính cách: Dịu dàng, sâu sắc, kín đáo, sống nội tâm, yêu cái đẹp. Giàu trí tưởng tượng, có thiên hướng nghệ thuật, thích yên tĩnh. Ngoại hình: Da sáng, nét mềm mại, mắt có hồn, mặt đầy đặn. Nam thì nhu hòa, nữ thì duyên dáng. Ưu điểm: Tế nhị, thông minh, biết chăm sóc người khác, tâm linh nhạy bén.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Khuyết điểm: Dễ sầu muộn, thiếu quyết đoán, thụ động. Gặp sát tinh → sống khép kín, ưu tư, ngại thay đổi.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Phong cách làm việc: Kín đáo, sáng tạo, khéo léo, ít ồn ào. Phù hợp công việc không cạnh tranh cao.",
      "goodAspects": "Cát tinh hội tụ → có quý nhân âm thầm giúp đỡ, phát triển tốt.",
      "badAspects": "Sát tinh hội tụ → sự nghiệp lận đận, dễ bị lu mờ tài năng.",
      "specificAspect": "Nghề nghiệp: Hợp nghề nghệ thuật, chăm sóc sắc đẹp, thời trang, nhà đất, tâm lý, giáo dục, viết lách, tư vấn nội tâm.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Tích lũy âm thầm, không bộc lộ ra ngoài. Có duyên với bất động sản, tiền về muộn hoặc từ nữ giới. Chi tiêu: Giỏi giữ của, biết lo xa, tiết kiệm khéo léo.",
      "goodAspects": "Cát tinh → tài sản ngầm dồi dào.",
      "badAspects": "Sát tinh → tiền bạc dễ hao hụt vì tình cảm, đầu tư sai niềm tin.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Dịu dàng, đảm đang, chu đáo, yêu gia đình. Tình cảm sâu đậm nhưng hay mơ mộng.",
      "goodAspects": "Cát tinh → tình cảm yên ổn, sống vì nhau.",
      "badAspects": "Sát tinh → hôn nhân ngột ngạt, thiếu sự sẻ chia cảm xúc.",
      "specificAspect": "Hôn nhân: Gắn bó kín đáo, vợ chồng sống tình nghĩa. Có thể hơi lệ thuộc nếu không độc lập về tinh thần.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Dễ có nhà đất nhờ nữ nhân, mẹ, bà ngoại hoặc tài sản âm (di sản). Ưa nhà gần nước, kín đáo, có không gian tĩnh. Phong cách sống: Thích chỗ yên tĩnh, nội thất đẹp, mềm mại.",
      "goodAspects": "Cát tinh → đất tổ phát, dễ phát tài từ bất động sản.",
      "badAspects": "Sát tinh → tranh chấp, tổn hao từ tài sản âm, bị lừa đất.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Thận, huyết trắng, u bướu, rối loạn nội tiết, trầm cảm, mất ngủ. Tâm lý: Ưu tư, mơ nhiều, tưởng tượng quá mức. Nhạy cảm với môi trường âm.",
      "goodAspects": "Cát tinh hội tụ → chữa bệnh gặp người có tâm, dễ hồi phục.",
      "badAspects": "Sát tinh hội → bệnh khó chẩn đoán, tâm bệnh nặng hơn thân bệnh.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Duyên ngầm, âm thầm gây thiện cảm. Hợp đi xa, định cư nước ngoài, hoặc làm việc trong không gian kín.",
      "goodAspects": "Cát tinh → đi xa phát lộc.",
      "badAspects": "Sát tinh → ra ngoài dễ bị tổn thương cảm xúc, không ổn định.",
      "specificAspect": "Môi trường phù hợp: Văn phòng, thẩm mỹ, khách sạn, spa, tâm lý, chăm sóc sức khỏe.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người nữ âm thầm giúp đỡ, trung thành. Dễ thân với người ít nói, sâu sắc. Quan hệ: Không nhiều nhưng bền. Thích bạn nhẹ nhàng hơn sôi nổi.",
      "goodAspects": "Cát tinh → được giúp đỡ không lời, quý nhân âm thầm.",
      "badAspects": "Sát tinh → bị phản bội trong âm thầm, dễ buồn chuyện bạn bè.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ: Gắn bó nhẹ nhàng, chăm sóc âm thầm.",
      "goodAspects": "Cát tinh → con có hiếu, tình cảm sâu sắc.",
      "badAspects": "Sát tinh → lo lắng về con, con yếu vía, hay đau yếu.",
      "specificAspect": "Con cái: Tình cảm, hiền lành, ngoan ngoãn, sống thiên về cảm xúc. Có duyên con gái, hoặc con giỏi nghệ thuật.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Hiền hòa, thích sống kín đáo, ít va chạm. Thường có chị em gái thân thiết. Quan hệ: Tình cảm nhưng dễ xa cách vì mỗi người một tính.",
      "goodAspects": "Cát tinh → anh chị em sống vì nhau.",
      "badAspects": "Sát tinh → lạnh nhạt, hiểu lầm kéo dài.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Tổ tiên âm đức lớn, có người tu tại gia, sống thiện lành, truyền lại duyên tâm linh, nữ tộc mạnh. Tinh thần: Có căn tu, duyên thiền, yêu tĩnh lặng, dễ tụng niệm, theo đạo.",
      "goodAspects": "Cát tinh → hậu vận an lành, sống thọ.",
      "badAspects": "Sát tinh → hay lo, dễ vướng nghiệp âm nếu tâm không an.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Gắn bó sâu sắc, thấu hiểu bằng tâm ý hơn lời nói.",
      "goodAspects": "Cát tinh → mẹ là quý nhân âm thầm, cha mẹ bảo vệ con.",
      "badAspects": "Sát tinh → cha mẹ yếu đuối, dễ bị chi phối tâm lý, con lo cho cha mẹ nhiều.",
      "specificAspect": "Cha mẹ: Thường mẹ vượng, thương con, sống nội tâm, biết lo toan nhưng ít nói.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thai-duong": {
    "menh": {
      "overview": "Tính cách: Quang minh, chính trực, yêu công bằng, có lòng tự trọng cao. Thích giúp đỡ người khác, sống vì lý tưởng. Hình tướng: Dáng cao, mặt sáng, mắt có thần, trán rộng. Nam nhân phong độ, nữ giới có khí chất trưởng thành, khôn ngoan. Ưu điểm: Tư tưởng rõ ràng, biết định hướng, thích làm việc lớn, có sức ảnh hưởng.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Khuyết điểm: Nếu Thái Dương hãm địa → dễ nóng nảy, cực đoan, dễ bị tổn thương vì lý tưởng quá cao.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Tính chất: Tạo ảnh hưởng bằng lời nói – kiến thức – đạo đức. Nếu sáng → công danh vẻ vang, dễ lên vị trí cao.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Nếu tối (giờ sinh ban đêm, cung hãm địa) → công danh trắc trở, dễ bị tiểu nhân phá.",
      "specificAspect": "Nghề nghiệp: Hợp công việc công khai, chính danh: chính trị, giáo dục, ngoại giao, truyền thông, truyền đạo, bác sĩ, luật.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Tài lộc đến nhờ danh tiếng, chính danh, khả năng thuyết phục, ngoại giao. Chi tiêu: Rộng rãi, hào phóng, thường làm từ thiện hoặc chi cho người khác. Gặp Hao – Kỵ – Không → hao tiền vì lý tưởng, bị lừa vì lòng tốt.",
      "goodAspects": "Hội cát tinh → lộc do chính nghĩa mang lại.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Chính trực, có lý tưởng, sống tử tế. Nam lấy vợ đảm, nữ lấy chồng có vị trí, có tài ăn nói. Nếu Thái Dương hãm → hôn nhân lạnh nhạt, dễ bất đồng chính kiến.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Hôn nhân: Trọng đạo nghĩa, vợ chồng cùng gánh vác. Dễ gặp người hơn tuổi, hoặc vai vế lớn.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Nhà hướng sáng, cao ráo, dễ có cơ ngơi lớn. Phong thủy: Ưa dương khí, cửa sổ lớn, không gian mở. Gặp Hóa Lộc – Thanh Long → nhà phát lộc. Nếu gặp Kỵ – Kiếp → bị mất đất, hoặc nhà có tranh chấp pháp lý.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý thường gặp: Mắt, tim, máu, áp lực do nóng trong, tổn thương khí huyết. Tâm lý: Dễ cáu, bốc đồng, áp lực vì tự trọng cao. Gặp Giải – Phúc Đức → bệnh nhẹ, có duyên gặp thầy thuốc tốt.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Có uy tín, được người trọng, hợp với môi trường công khai, đông người. Phong cách: Chính danh, ăn nói đĩnh đạc, dễ trở thành tâm điểm. Gặp Quyền – Lộc – Khôi Việt → nổi bật, được giao việc lớn.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người giỏi, có đạo đức, dễ gặp đồng nghiệp đáng kính. Tuy nhiên: Khó thân, vì Thái Dương thiên về lý trí – không thiên cảm xúc.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh → dễ bị lừa, bạn bè ghen ghét đố kỵ.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ cha con: Nghiêm khắc, ít mềm mỏng nhưng giàu định hướng. Gặp Kỵ – Hao → con tự phụ, dễ bất hòa với cha.",
      "goodAspects": "Gặp cát tinh → con cái thành công nhờ sự hướng dẫn của cha mẹ.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Con cái: Có chí tiến thủ, học hành giỏi, danh tiếng nổi bật.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Có người nổi bật, chính trực, quan tâm đến danh tiếng gia đình. Tình cảm: Tôn trọng, đôi khi ít thân mật vì khác chí hướng. Gặp Khoa – Lộc → cùng nhau làm nên sự nghiệp.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Tổ tiên hành thiện, có danh vọng trong làng xã hoặc cộng đồng. Dòng họ có người làm quan, giáo viên, tu hành. Tâm linh: Có đạo tâm, dễ theo Phật – Nho – đạo đức học.",
      "goodAspects": "Cát tinh → hậu vận thịnh, sống lâu, con cháu hiển đạt.",
      "badAspects": "Sát tinh → danh vọng nhưng kèm lo toan, bận lòng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Kính mà ít gần, ít thể hiện tình cảm nhưng trọng nghĩa.",
      "goodAspects": "Cát tinh → cha mẹ thành đạt, con có phúc theo.",
      "badAspects": "Sát tinh → xa cách, người cha yếu bóng vía, bị tổn thương sớm.",
      "specificAspect": "Cha mẹ: Là người có uy tín, sống chính đạo. Dạy dỗ nghiêm túc, làm gương cho con cái.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "tham-lang": {
    "menh": {
      "overview": "Tính cách: Đa tài, lanh lợi, có sức hút mạnh, sống cảm tính, thích hưởng thụ, dễ bị chi phối bởi cảm xúc – sắc dục – vật chất. Ngoại hình: Nét mặt đẹp, hấp dẫn, đôi mắt lúng liếng, môi tươi, thân hình đầy đặn. Có khí chất phong lưu. Ưu điểm: Năng động, nghệ sĩ, thích cái mới, biết tạo cơ hội. Học nhanh, khéo trong giao tiếp.",
      "goodAspects": "Cát tinh (Hóa Lộc, Xương Khúc, Tả Hữu) → phát về nghệ thuật, kinh doanh, giải trí, phong thủy.",
      "badAspects": "Sát tinh (Hóa Kỵ, Đà La, Không Kiếp) → dễ trụy lạc, nghiện ngập, vướng tình cảm tai tiếng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Phong cách làm việc: Năng động, sáng tạo, có sức hút công chúng. Không chịu ràng buộc khuôn khổ.",
      "goodAspects": "Cát tinh → nổi tiếng, thu hút nhiều người theo.",
      "badAspects": "Sát tinh → thị phi nghề nghiệp, tai tiếng, thất thường.",
      "specificAspect": "Nghề nghiệp: Hợp ngành nghệ thuật, biểu diễn, ẩm thực, thời trang, thẩm mỹ, truyền thông, môi giới, bất động sản.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Kiếm tiền từ ngành có tính dịch vụ – thẩm mỹ – biểu diễn – kinh doanh sang trọng. Có tài tiêu tiền. Chi tiêu: Phóng khoáng, đôi khi hoang phí. Dễ mất tiền vì tình, vui chơi hoặc đam mê nhất thời.",
      "goodAspects": "Cát tinh hội → có tài lộc lớn, vượng tài vận từ nghệ thuật – ngoại giao.",
      "badAspects": "Sát tinh hội → dễ dính vào tiền đen, lừa đảo, mất trắng vì đam mê sai chỗ.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Hấp dẫn, cá tính, lãng mạn, sống cảm xúc. Có thể đào hoa, nhiều mối tình. Cát tinh hội → bạn đời có tài, biết chiều chuộng, tình cảm nồng cháy.",
      "goodAspects": "Hôn nhân: Thường đến muộn, hoặc phức tạp, lắm sóng gió. Nhu cầu tình cảm cao, khó ổn định nếu không có cát tinh hóa giải.",
      "badAspects": "Sát tinh → hôn nhân bất an, có tai tiếng tình cảm, dễ tan vỡ.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Dễ mua bán bất động sản, thích nhà đẹp, nội thất cầu kỳ. Gắn bó sâu với chỗ ở. Phong cách sống: Sang trọng, thiên về hưởng thụ, có gu thẩm mỹ cao.",
      "goodAspects": "Cát tinh hội → dễ phát tài từ nhà đất – decor – homestay.",
      "badAspects": "Sát tinh → nhà có phong thủy xấu, bị thị phi – kiện tụng liên quan đất cát.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Liên quan thận, đường tiết niệu, bệnh về da, nội tiết, bệnh do ăn uống – tình dục – rối loạn tâm lý. Tâm bệnh: Thèm khát, nghiện cảm xúc, dễ trầm cảm nếu không thỏa mãn ham muốn.",
      "goodAspects": "Cát tinh → biết điều chỉnh, bệnh nhanh khỏi.",
      "badAspects": "Sát tinh → bệnh dai dẳng, liên quan nhục dục – ma túy – hoang dâm.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Đào hoa, được yêu mến nhờ duyên ngầm, dễ kết bạn, hợp làm các ngành giao tiếp. Tính chất xã hội: Cuốn hút, phong trần, thích hưởng thụ nơi xa.",
      "goodAspects": "Cát tinh hội tụ → phát triển mạnh khi xuất ngoại, làm ăn bên ngoài tốt.",
      "badAspects": "Sát tinh → dễ bị lừa, thị phi tình cảm, rơi vào nơi phức tạp.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Nhiều người theo, bạn bè đông, quan hệ rộng, nhưng dễ “lợi dụng lẫn nhau”. Quan hệ: Sôi nổi, hào phóng, vui vẻ. Nhưng hay thay đổi, ít bền.",
      "goodAspects": "Cát tinh → có bạn thân giỏi giang.",
      "badAspects": "Sát tinh → bạn bè phá hoại, dính thị phi bạn bè – tiền bạc.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Tình cảm cha mẹ – con: Gắn bó mạnh, nhưng dễ xung đột vì tính tự do.",
      "goodAspects": "Cát tinh → con cái phát về tài năng.",
      "badAspects": "Sát tinh → con bất trị, sa đà chơi bời, dễ dính tai tiếng.",
      "specificAspect": "Con cái: Năng động, cảm xúc, nghệ sĩ, thích làm theo ý mình.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Nhiều chuyện, ưa nổi bật, có thể xung đột vì quyền lợi hoặc tình cảm. Quan hệ: Gắn bó kiểu “vừa yêu vừa ghét”.",
      "goodAspects": "Cát tinh → chơi thân, cùng nhau phát triển.",
      "badAspects": "Sát tinh → ghen ghét, xung đột vì tình – tiền.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Có tổ tiên nghệ sĩ, đào hoa, yêu cái đẹp. Gia tộc có duyên với sân khấu, phong thủy, tôn giáo không chính thống. Tinh thần: Ham học huyền thuật, có khả năng tâm linh nếu biết tu dưỡng.",
      "goodAspects": "Cát tinh → hưởng lộc tổ tiên, đời sống phong lưu.",
      "badAspects": "Sát tinh → dính nghiệp đào hoa, con cháu hay bị đắm chìm trong dục vọng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Gần gũi về tình, nhưng dễ chiều quá hóa hư, cần định hướng sớm.",
      "goodAspects": "Cát tinh → cha mẹ giúp phát triển tài năng.",
      "badAspects": "Sát tinh → cha mẹ chơi bời, vướng chuyện tình cảm không minh bạch.",
      "specificAspect": "Cha mẹ: Hào phóng, yêu nghệ thuật, dễ buông thả trong dạy dỗ, hoặc sống phóng khoáng.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thien-co": {
    "menh": {
      "overview": "Tính cách: Linh hoạt, thông minh, giỏi quan sát – tính toán, sống thiên về lý trí. Có khả năng xoay chuyển tình huống, giỏi biến hóa. Ngoại hình: Thường người gầy, cao, nét mặt nhanh nhẹn, ánh mắt sáng. Ưu điểm: Biết nắm thời cơ, đa tài, hợp nhiều nghề. Thích học hỏi.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Khuyết điểm: Lo xa, thiếu ổn định, dễ bị dao động. Nếu hội sát tinh dễ mưu sâu, không bền chí.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Phong cách làm việc: Cẩn thận, giỏi phân tích, biết sắp đặt.",
      "goodAspects": "Cát tinh hội tụ → chức nghiệp lên nhờ trí tuệ.",
      "badAspects": "Hung sát tinh → dễ nhảy việc, gặp thay đổi bất ngờ.",
      "specificAspect": "Nghề nghiệp: Hợp ngành kỹ thuật, cơ khí, tư vấn, công nghệ, chiến lược, nghiên cứu, lập trình.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Kiếm tiền nhờ đầu óc, tính toán. Có duyên với nghề tư vấn, dịch vụ, kỹ thuật.",
      "goodAspects": "Cát tinh → kiếm tiền nhiều hướng.",
      "badAspects": "Sát tinh → dễ hao hụt vì đầu tư sai, hoặc thất thoát do “mưu cao nhưng thiếu thực lực”.",
      "specificAspect": "Tiêu xài: Thận trọng, đôi lúc do dự trước các quyết định tài chính lớn.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Thông minh, khéo ăn nói, nhưng dễ thay đổi, có tính lo xa hoặc kỹ tính. Gặp Kỵ – Đà → bạn đời hay thay đổi tâm tính, dễ rạn nứt nếu không hiểu nhau.",
      "goodAspects": "Nếu gặp cát tinh → hôn nhân gắn bó theo chiều trí tuệ – cùng định hướng.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Hôn nhân: Nhiều sự cân nhắc, cần người biết chia sẻ tâm lý.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Nhà cửa: Dễ thay đổi nơi ở, thích cải tạo hoặc bố trí không gian sáng tạo. Tài sản: Có thể đầu tư vào đất kỹ thuật số, nhà cho thuê, văn phòng, nhưng nên có kế hoạch rõ ràng.",
      "goodAspects": "Cát tinh hội tụ → có duyên bất động sản.",
      "badAspects": "Hung sát tinh → hay đổi nhà, ở không yên.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý dễ gặp: Thần kinh, suy nghĩ quá độ, mất ngủ, rối loạn tiêu hóa. Tâm lý: Lo xa, dễ u uất, nghĩ nhiều hại thân. Nếu hội Không – Kỵ – Kiếp → bệnh mạn tính, lâu khỏi.",
      "goodAspects": "Hội cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Gia tăng phúc thọ, công danh và tài lộc viên mãn.",
      "badAspects": "Gặp sát tinh xung phá (Kình Đà, Hỏa Linh, Không Kiếp, Kỵ): Cần phòng trắc trở bất ngờ, thận trọng trong từng quyết sách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Hoạt bát, có duyên giao tiếp, hợp đi nhiều – làm việc lưu động. Hành vi xã hội: Thích môi trường linh hoạt, sáng tạo. Khéo thích nghi.",
      "goodAspects": "Cát tinh → phát triển mạnh ở môi trường bên ngoài.",
      "badAspects": "Sát tinh → hay bị thay đổi công việc, bị lừa hoặc mất phương hướng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Giao tiếp tốt, hay làm việc với người trí thức. Quan hệ thông minh – logic hơn là cảm xúc.",
      "goodAspects": "Nếu cát tinh → được hỗ trợ từ người có đầu óc.",
      "badAspects": "Sát tinh → dễ bị bạn bè khôn vặt lợi dụng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ cha mẹ – con: Có thể xa cách nếu không đồng điệu tư duy.",
      "goodAspects": "Cát tinh → con thành danh qua học hành.",
      "badAspects": "Sát tinh → nuôi con vất vả vì thay đổi học hành hoặc tâm lý.",
      "specificAspect": "Con cái: Thông minh, nhanh nhẹn, học giỏi. Nhưng thiếu kiên nhẫn, dễ thay đổi ý thích.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Giỏi giang, thích tranh luận, thông minh. Tính chất: Dễ có bất đồng quan điểm nhưng vẫn tôn trọng lẫn nhau.",
      "goodAspects": "Cát tinh → gắn kết trí tuệ.",
      "badAspects": "Hung tinh → bất đồng tư tưởng, xa cách dần.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Có tổ tiên thông minh, học hành, người đi trước giỏi mưu lược. Tâm linh: Có duyên với thiền định, triết học, nghiên cứu học thuật cổ truyền.",
      "goodAspects": "Cát tinh → sống lâu, phúc hậu.",
      "badAspects": "Hung tinh → nhiều lo lắng về sau, cần tu dưỡng tinh thần.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Dạy dỗ theo lý trí, dễ bị áp lực từ sự kỳ vọng.",
      "goodAspects": "Cát tinh → cha mẹ truyền đạt tư tưởng tốt.",
      "badAspects": "Sát tinh → áp lực tâm lý từ nhỏ.",
      "specificAspect": "Cha mẹ: Khéo tính toán, học vấn cao, hướng con theo tư duy, ít tình cảm.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thien-dong": {
    "menh": {
      "overview": "Tính cách: Hiền hòa, dễ mến, giàu lòng cảm thông, thích giúp đỡ. Sống nhẹ nhàng, đôi khi thiếu quyết đoán. Ngoại hình: Mặt tròn, dáng nhỏ nhắn, nụ cười tươi, trẻ hơn tuổi thật. Ưu điểm: Dễ gây thiện cảm, biết linh hoạt, giàu tình cảm, hay làm từ thiện.",
      "goodAspects": "Cát tinh (Thiên Lương, Khôi Việt...) → thành công trong ngành nhân sự, tâm lý, giáo dục.",
      "badAspects": "Khuyết điểm: Dễ thay đổi, thiếu bền chí, hay buồn vu vơ. Nếu hội sát tinh → dễ sống bi quan, u uất.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Cách làm việc: Không thích áp lực cao, phù hợp nơi giàu nhân văn.",
      "goodAspects": "Cát tinh → được tín nhiệm nhờ tính cách hòa nhã.",
      "badAspects": "Sát tinh → dễ đổi nghề, sự nghiệp trồi sụt.",
      "specificAspect": "Nghề nghiệp: Hợp ngành chăm sóc, giáo dục, y tế, dịch vụ, tư vấn, sáng tạo nghệ thuật. Cần môi trường thân thiện, linh hoạt.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Kiếm tiền nhờ sự mềm mỏng, nghệ thuật hoặc các dịch vụ mềm (spa, giáo dục, trẻ em, tâm lý). Tính chi tiêu: Thoáng tay, hay giúp người, khó giữ tiền.",
      "goodAspects": "Cát tinh → có lộc bất ngờ, quý nhân trợ tài.",
      "badAspects": "Sát tinh → hao tốn vì cảm xúc, dễ bị lợi dụng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Dịu dàng, trẻ trung, hay thay đổi tâm lý, tình cảm nhiều hơn lý trí.",
      "goodAspects": "Cát tinh → vợ chồng hòa thuận, đồng hành nhân ái.",
      "badAspects": "Sát tinh → hôn nhân dễ gãy đổ vì mâu thuẫn cảm xúc.",
      "specificAspect": "Hôn nhân: Mối quan hệ cần sự sẻ chia, thấu hiểu, không chịu được áp lực khắt khe.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Nhà cửa: Thay đổi nhiều nơi, thích không gian mềm mại, nhiều ánh sáng tự nhiên. Phong cách sống: Ưa nghệ thuật, cây cảnh, nội thất đẹp mắt.",
      "goodAspects": "Cát tinh → dễ có nhà đẹp, phong thủy yên hòa.",
      "badAspects": "Sát tinh → thay đổi nhà cửa nhiều lần, sống bất ổn định.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Dễ mắc các chứng liên quan dạ dày, thần kinh thực vật, cảm xúc, stress kéo dài. Tâm lý: Dễ buồn, suy nghĩ tiêu cực, lo âu vô cớ.",
      "goodAspects": "Cát tinh (Giải Thần, Hóa Khoa) → dễ hồi phục nếu cân bằng tâm lý.",
      "badAspects": "Sát tinh (Hóa Kỵ, Đà La) → bệnh tình khó lường, hay tái phát.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Được yêu quý nhờ tính tình hòa nhã, dễ làm việc nhóm, thích nghi tốt. Môi trường lý tưởng: Chỗ nhẹ nhàng, có nghệ thuật, nhân văn, phục vụ cộng đồng.",
      "goodAspects": "Cát tinh → đi xa được giúp đỡ, có người quý.",
      "badAspects": "Sát tinh → ra ngoài dễ bị ảnh hưởng tâm lý, dễ gặp chuyện buồn.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Nhiều người quý mến, nhưng dễ bị lợi dụng hoặc nhờ vả quá mức. Cách đối xử: Hòa nhã, chiều chuộng, khó rạch ròi.",
      "goodAspects": "Cát tinh → có bạn tốt, giúp đỡ nhau.",
      "badAspects": "Sát tinh → bị bạn bè làm phiền, phản bội âm thầm.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ cha mẹ – con: Gắn bó tình cảm, nhưng cần định hướng vững vàng.",
      "goodAspects": "Cát tinh → con dễ nuôi, học giỏi.",
      "badAspects": "Sát tinh → lo lắng cho con, con yếu vía, hay ốm đau vặt.",
      "specificAspect": "Con cái: Tình cảm, hiền lành, nhạy cảm, dễ chịu ảnh hưởng môi trường.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Tình cảm, hay giúp nhau nhưng dễ bị cảm xúc chi phối. Tính chất: Quan hệ nhẹ nhàng, dễ bị tác động bên ngoài.",
      "goodAspects": "Cát tinh → anh em gắn bó, nâng đỡ nhau.",
      "badAspects": "Sát tinh → xa cách, hiểu lầm, không ổn định.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Tổ tiên hiền hậu, nhân đạo. Gia tộc không hiển quý nhưng có đạo đức. Tinh thần: Có duyên tu thiện, làm từ thiện, theo đạo hộ trì.",
      "goodAspects": "Cát tinh → sống an vui, hậu vận tốt.",
      "badAspects": "Sát tinh → dễ buồn, cần tăng cường tu dưỡng tâm lý.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Gần gũi, giàu tình cảm, dễ lệ thuộc nếu không tách sớm.",
      "goodAspects": "Cát tinh → cha mẹ là người hướng thiện, yêu con vô điều kiện.",
      "badAspects": "Sát tinh → cha mẹ yếu đuối, gia đình dễ thiếu nền tảng ổn định.",
      "specificAspect": "Cha mẹ: Nhân hậu, thương con nhưng đôi khi quá chiều hoặc thiếu định hướng rõ ràng.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thien-luong": {
    "menh": {
      "overview": "Tính cách: Đoan chính, nhân hậu, từ tốn, sống có nguyên tắc đạo đức rõ ràng. Thường thích giúp người, ghét thị phi. Ngoại hình: Mặt vuông đầy, phong thái chững chạc, ánh mắt hiền hậu, da sáng, tiếng nói trầm ấm. Ưu điểm: Biết lo nghĩ cho người khác, khôn ngoan – lương thiện. Có duyên làm thầy thuốc, giảng sư, đạo sĩ.",
      "goodAspects": "Cát tinh hội (Xương Khúc, Hóa Khoa, Khôi Việt) → danh tiếng tốt, có uy tín.",
      "badAspects": "Sát tinh hội (Kỵ, Không, Kiếp) → cô đơn, bị hiểu nhầm dù sống tốt.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Phong cách làm việc: Cẩn thận, thấu đáo, ít vội vàng. Sống vì trách nhiệm, không vì danh lợi.",
      "goodAspects": "Cát tinh hội → được tôn trọng, có danh nhờ đức.",
      "badAspects": "Sát tinh hội → sự nghiệp ổn định nhưng ít “bứt phá”, dễ bị chê “thụ động”.",
      "specificAspect": "Nghề nghiệp: Hợp ngành y học, giảng dạy, đạo đức học, tâm lý học, cố vấn, từ thiện, tu hành, pháp luật.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Lộc đến từ phúc đức, nghề thiện, hành xử đạo lý. Giữ của tốt, làm ít mà bền. Chi tiêu: Không hoang phí, chi cho đúng việc. Thích chia sẻ với người khó khăn.",
      "goodAspects": "Cát tinh hội → lộc đến từ âm đức, phúc nhà.",
      "badAspects": "Sát tinh hội → dễ mất tiền vì giúp người, bị lợi dụng lòng tốt.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Hiền lành, có đức hạnh, sống đạo nghĩa. Biết chăm lo gia đình.",
      "goodAspects": "Cát tinh hội → gia đình thuận hòa, được bạn đời kính trọng.",
      "badAspects": "Sát tinh hội → hôn nhân lạnh nhạt, sống vì nghĩa – cô đơn trong lòng.",
      "specificAspect": "Hôn nhân: Gắn bó bền vững, sống vì nghĩa – trách nhiệm nhiều hơn tình cảm nồng nàn.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Có nhà do tổ tiên để lại, sống nơi thanh tịnh, yên bình. Đất gần chùa, đình, nghĩa địa – vượng khí âm. Phong cách sống: Thích nơi mộc mạc, yên tĩnh, cổ truyền, có phần hoài cổ.",
      "goodAspects": "Cát tinh hội → đất nhà tổ phát phúc.",
      "badAspects": "Sát tinh hội → nhà cũ kỹ, dễ có chuyện tâm linh, âm khí nặng.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Xương khớp, tỳ vị, rối loạn chuyển hóa, bệnh do lo nghĩ, ăn uống kham khổ, tiết chế quá mức. Tâm bệnh: Dễ tự trách bản thân, tâm lý hướng nội nhiều.",
      "goodAspects": "Cát tinh hội → sống thọ, bệnh nhẹ – do biết dưỡng sinh.",
      "badAspects": "Sát tinh hội → bệnh tiềm ẩn, dễ bị lầm tưởng chữa sai.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Được kính trọng nhờ đức độ, dễ gặp quý nhân hoặc người có lòng giúp đỡ. Phong cách xã hội: Nói ít, làm nhiều, có trách nhiệm, được nhờ vả.",
      "goodAspects": "Cát tinh hội → ra ngoài hành thiện gặp may mắn.",
      "badAspects": "Sát tinh hội → bị hiểu sai, gánh chuyện người khác vì sống quá tốt.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người trung thành, nhân hậu, nhưng thường là người già – lớn tuổi – ít bạn trẻ. Quan hệ: Không nhiều bạn, nhưng bạn đã có thì rất bền, cùng lý tưởng.",
      "goodAspects": "Cát tinh hội → có bạn tâm giao, quý nhân đồng hành.",
      "badAspects": "Sát tinh hội → bị bạn lợi dụng lòng tốt, gánh việc người.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ: Yêu thương đúng mực, dạy con theo tinh thần nghiêm túc – nhân văn.",
      "goodAspects": "Cát tinh hội → con cái hiếu thuận, thành đạt.",
      "badAspects": "Sát tinh hội → con chịu thiệt vì sống quá ngay, hoặc yếu đuối, không bon chen.",
      "specificAspect": "Con cái: Có đạo đức, học giỏi, sống sâu sắc, có duyên làm nghề giáo – y – đạo.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Ít người, thường có người tu hành, sống thiện, có trách nhiệm với họ hàng. Quan hệ: Xa nhưng bền, gắn bó khi hữu sự.",
      "goodAspects": "Cát tinh hội → anh em thương nhau – sống hòa thuận.",
      "badAspects": "Sát tinh hội → gánh nghiệp thay, hy sinh vì gia đình.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Tổ tiên làm việc thiện, có người làm nghề cứu giúp, dòng họ trọng đạo – sống hiền. Tinh thần: Hướng thiện, dễ theo tôn giáo, có căn tu.",
      "goodAspects": "Cát tinh hội → hưởng phúc lớn, hậu vận an lành.",
      "badAspects": "Sát tinh hội → lo nghĩ quá nhiều, sống cô đơn, “giàu đức nhưng thiệt thân”.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Gắn bó sâu sắc, thấm nhuần đạo lý. Dễ được thừa hưởng tâm đức hơn vật chất.",
      "goodAspects": "Cát tinh hội → cha mẹ là quý nhân – người dẫn đường đúng đắn.",
      "badAspects": "Sát tinh hội → cha mẹ quá khắt khe, hay dạy quá chuẩn nên sinh khổ tâm.",
      "specificAspect": "Cha mẹ: Hiền từ, sống chuẩn mực, có đức độ, thường dạy con theo truyền thống.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thien-phu": {
    "menh": {
      "overview": "Tính cách: Trầm ổn, chín chắn, khoan hậu, bao dung, có trách nhiệm cao. Sống thực tế, chắc chắn, không thích rủi ro. Ngoại hình: Mặt vuông, thân hình đậm, giọng nói trầm ấm, dáng đi đĩnh đạc. Ưu điểm: Biết tích lũy, giỏi che chở người khác, làm điểm tựa tốt.",
      "goodAspects": "Cát tinh hội (Tả Hữu, Khôi Việt) → vừa có đức vừa có tài, được người trọng dụng.",
      "badAspects": "Sát tinh hội (Kỵ, Không, Kiếp) → kho không bền, khó giữ phúc lộc.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Phong cách làm việc: Cẩn thận, bền bỉ, có chiều sâu, xây dựng nền móng vững chắc.",
      "goodAspects": "Cát tinh → lên chức chậm nhưng chắc, bền lâu.",
      "badAspects": "Sát tinh → bị cản trở bởi tính thụ động, thiếu đột phá.",
      "specificAspect": "Nghề nghiệp: Hợp quản lý tài chính, kho vận, hậu cần, bất động sản, ngân hàng, kế toán, cố vấn chiến lược.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Có duyên tiền bạc, biết giữ của, giỏi quản lý chi tiêu và tích lũy. Lộc đến chậm mà bền. Chi tiêu: Tiết kiệm, thực tế, không hoang phí.",
      "goodAspects": "Cát tinh hội → giàu có, có của ăn của để.",
      "badAspects": "Sát tinh → bị lừa, mất tiền do tin sai người, hoặc không kịp thời hành động.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Chín chắn, biết lo cho gia đình, có trách nhiệm, giỏi quản lý nội bộ.",
      "goodAspects": "Cát tinh → vợ chồng hỗ trợ nhau lâu dài.",
      "badAspects": "Sát tinh → dễ bị áp đặt, thiếu cảm xúc, gượng ép sống vì trách nhiệm.",
      "specificAspect": "Hôn nhân: Bền vững, sống nghĩa tình, ít sóng gió nếu biết nhường nhịn nhau.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Nhà cửa: Vững chãi, đất đai tốt, dễ tích lũy tài sản. Yêu thích không gian yên tĩnh, khang trang. Phong cách sống: Gia đạo nghiêm chỉnh, ưa cổ truyền.",
      "goodAspects": "Cát tinh → phát phúc từ bất động sản.",
      "badAspects": "Sát tinh → bị tranh chấp đất đai, nhà có người giữ của nhưng dễ gặp hạn tổn thất.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Dễ bị các bệnh về tiêu hóa, gan mật, tỳ vị. Bệnh do tích trữ độc khí, stress tích tụ. Tâm lý: Thụ động, không thích thay đổi nên dễ mắc bệnh mãn tính.",
      "goodAspects": "Cát tinh → sống lâu, hồi phục tốt nhờ khí lực dồi dào.",
      "badAspects": "Sát tinh → bệnh dai dẳng, do “giữ” quá nhiều.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Được tin tưởng nhờ sự điềm đạm, chín chắn. Là người giữ vai trò ổn định cho tập thể. Môi trường thích hợp: Công sở truyền thống, ngân hàng, tổ chức hành chính.",
      "goodAspects": "Cát tinh → đi xa phát tài, có quý nhân nâng đỡ.",
      "badAspects": "Sát tinh → ra ngoài dễ bị mất mát, hay bị “dồn vai gánh vác”.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người trung thành, tin cẩn. Nhưng dễ bị lợi dụng nếu quá tin. Tính cách đối xử: Bao dung, có thể hy sinh vì người khác.",
      "goodAspects": "Cát tinh → được quý nhân giúp.",
      "badAspects": "Sát tinh → bạn bè “ăn chận”, người dưới mượn tiếng, lấy danh.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ: Gắn bó sâu sắc, có sự nhường nhịn và chăm sóc lẫn nhau.",
      "goodAspects": "Cát tinh → con cái vững vàng, có hiếu.",
      "badAspects": "Sát tinh → con ỷ lại, sống thu mình, ít phát triển.",
      "specificAspect": "Con cái: Hiền lành, ngoan ngoãn, giỏi tích lũy, học về tài chính, kế toán, xây dựng tốt.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Có người lo toan, vai trò giống trưởng họ, hay đứng ra gánh vác việc lớn. Quan hệ: Kín đáo, trọng nghĩa hơn tình.",
      "goodAspects": "Cát tinh → giúp đỡ lẫn nhau, giữ được phúc phần gia tộc.",
      "badAspects": "Sát tinh → tranh chấp âm thầm, vì tài sản hoặc trọng trách.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Dòng họ có người gìn giữ truyền thống, giữ đất tổ, tổ tiên để lại gia sản. Tinh thần: Hướng đến sự tích đức, giữ gia phong.",
      "goodAspects": "Cát tinh → phúc hậu, hưởng lộc dài lâu.",
      "badAspects": "Sát tinh → sống lo toan, không được nghỉ ngơi an ổn.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Gần gũi, sống nề nếp, thường nhận được tài sản hoặc nền tảng vững vàng từ cha mẹ.",
      "goodAspects": "Cát tinh → cha mẹ bao bọc, lo cho con đầy đủ.",
      "badAspects": "Sát tinh → quan hệ bị ràng buộc, hoặc cha mẹ giữ tiền mà không chia sẻ tình cảm.",
      "specificAspect": "Cha mẹ: Là người trầm tĩnh, lo xa, biết giữ tài sản. Có thể nghiêm mà hiền.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "thien-tuong": {
    "menh": {
      "overview": "Tính cách: Chính trực, công bằng, trung thành, biết phân xử đúng sai. Có tính cẩn trọng, khéo léo trong xử lý xung đột. Trọng nghĩa hơn tình. Ngoại hình: Dáng đứng thẳng, nét mặt sáng sủa, phong thái nhẹ nhàng, mắt rõ – giọng nói từ tốn. Ưu điểm: Biết lắng nghe, dễ hòa giải, trung lập trong mâu thuẫn.",
      "goodAspects": "Cát tinh hội (Xương Khúc, Khôi Việt) → xử lý giỏi, thành lãnh đạo công tâm.",
      "badAspects": "Khuyết điểm: Chần chừ, thiếu quyết đoán, sợ mích lòng. Gặp sát tinh → dễ tự ái, cố chấp.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Tính chất công việc: Gắn liền với trách nhiệm, giữ gìn cân bằng, bảo vệ quyền lợi.",
      "goodAspects": "Cát tinh → chức vụ vững, được kính trọng nhờ đạo đức.",
      "badAspects": "Sát tinh → bị gièm pha, xử lý khó khăn vì tính ôn hòa quá mức.",
      "specificAspect": "Nghề nghiệp: Hợp ngành luật, hành chính, điều phối, ngoại giao, công an, quân đội, nhân sự, trợ lý, y tế – bảo hiểm.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tài vận: Lộc đến từ việc công minh – hành xử đúng mực – trợ giúp người khác. Lộc bền, nhưng không nhanh. Chi tiêu: Cẩn trọng, hợp lý, biết tiết chế.",
      "goodAspects": "Cát tinh hội → kiếm tiền nhờ tư vấn, điều phối, chăm sóc.",
      "badAspects": "Sát tinh → tiền đến chậm, bị ảnh hưởng vì sự chần chừ – cả nể.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Bạn đời: Chung thủy, sống vì đạo nghĩa, có trách nhiệm với gia đình. Không hoa mỹ nhưng luôn bên cạnh lúc khó khăn.",
      "goodAspects": "Cát tinh → vợ chồng tôn trọng – hỗ trợ nhau.",
      "badAspects": "Sát tinh → sống gượng ép vì nghĩa – mất lửa tình cảm.",
      "specificAspect": "Hôn nhân: Bền vững nhờ lòng tin, sự chia sẻ công bằng. Không ưa áp đặt – ghen tuông.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Phong cách sống: Ưa yên tĩnh, cân bằng, không quá xa hoa – không quá đơn sơ.",
      "goodAspects": "Cát tinh → nhà cửa ổn định, phúc lộc từ dòng họ.",
      "badAspects": "Sát tinh → nhà bị tranh chấp, khó ở lâu dài, dễ dính chuyện pháp lý.",
      "specificAspect": "Tài sản: Nhà do cha mẹ để lại hoặc tích lũy nhờ sự tiết kiệm, không tranh đoạt.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Dễ liên quan đến thận, huyết áp, tiết niệu, hệ thống lọc máu. Tâm bệnh do giữ cảm xúc quá lâu, khó xả. Tâm lý: Căng thẳng vì lo trách nhiệm – bị dồn ép bởi đạo lý.",
      "goodAspects": "Cát tinh → bệnh nhẹ, dễ hồi phục.",
      "badAspects": "Sát tinh → bệnh âm ỉ, do ức chế lâu ngày, khó dứt điểm.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Cư xử từ tốn, được lòng người lớn – quý nhân. Có uy tín trong cộng đồng. Phong cách sống xã hội: Không thích phô trương, ưa trung lập, nhưng luôn là người hòa giải hiệu quả.",
      "goodAspects": "Cát tinh → đi đâu cũng có người quý mến – nhờ cậy.",
      "badAspects": "Sát tinh → bị lôi kéo vào thị phi dù không chủ động.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người trung thành, biết trên – dưới. Quan hệ dựa trên lòng tin và sự tôn trọng. Tính chất: Làm người dẫn dắt nhóm, hòa giải viên, có trách nhiệm với người khác.",
      "goodAspects": "Cát tinh → có bạn tốt, quý nhân hỗ trợ.",
      "badAspects": "Sát tinh → bị lừa vì cả nể, bị lợi dụng bởi vẻ ôn hòa.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Quan hệ cha mẹ – con: Gắn bó bền, hướng đến lòng tin và đạo nghĩa.",
      "goodAspects": "Cát tinh → con hiếu thuận, phát triển ổn định.",
      "badAspects": "Sát tinh → con sống lệ thuộc, không có chính kiến, thụ động.",
      "specificAspect": "Con cái: Biết cư xử, điềm đạm, không quá nổi bật nhưng sống đúng mực, dễ làm chỗ dựa lúc về già.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Anh chị em: Công bằng, biết điều, thường là người đứng ra hòa giải trong nhà. Quan hệ bình ổn.",
      "goodAspects": "Cát tinh → yêu thương, hỗ trợ lẫn nhau.",
      "badAspects": "Sát tinh → bị oán trách vì “đứng giữa không bên ai”, dễ gánh chuyện người khác.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Gia đình, dòng họ có truyền thống đạo lý, biết kính trên nhường dưới. Có người làm chức vụ trọng trách – cố vấn – trọng tài. Tinh thần: Hướng đến lối sống tiết chế, cân bằng, giữ đạo trung.",
      "goodAspects": "Cát tinh → được hưởng phúc lâu dài, hậu vận an nhàn.",
      "badAspects": "Sát tinh → phúc giảm vì “người tốt gặp khổ”, gánh thay nghiệp người khác.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Tôn trọng, đôi khi hơi khô cứng, thiếu tình cảm biểu hiện ra bên ngoài.",
      "goodAspects": "Cát tinh → cha mẹ chỗ dựa tinh thần, gương mẫu.",
      "badAspects": "Sát tinh → cha mẹ vì quá nghiêm mà xa cách, khắc khẩu nhẹ.",
      "specificAspect": "Cha mẹ: Chính trực, biết xử lý công bằng, sống mẫu mực. Có ảnh hưởng lớn trong việc định hình đạo đức con cái.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    }
  },
  "vu-khuc": {
    "menh": {
      "overview": "Tính cách: Cứng rắn, thực tế, kiệm lời, ưa hành động hơn lời nói. Sống nguyên tắc, kỷ luật, đôi lúc lạnh lùng. Ngoại hình: Tướng mảnh khảnh, mặt chữ điền, ánh mắt sắc, thần khí nghiêm trang. Ưu điểm: Giỏi kiểm soát, làm việc có kế hoạch, không dễ lung lay.",
      "goodAspects": "Cát tinh hội → thành công bằng nỗ lực, giàu có tự thân.",
      "badAspects": "Sát tinh hội → khắc khổ, lập nghiệp muộn, dễ cô đơn.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "quan-loc": {
      "overview": "Phong cách làm việc: Kỷ luật, tỉ mỉ, không thích bề nổi – ưa hiệu quả thực tế.",
      "goodAspects": "Cát tinh → công danh vững chắc.",
      "badAspects": "Sát tinh → bị cô lập trong nghề, áp lực cao.",
      "specificAspect": "Nghề nghiệp: Hợp kế toán, tài chính, đầu tư, kỹ thuật, điều hành hệ thống, quân đội, công an, quản lý tiền bạc.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tai-bach": {
      "overview": "Tính chi tiêu: Cẩn trọng, tiết kiệm, dùng tiền hợp lý – đúng mục đích.",
      "goodAspects": "Cát tinh → giàu bền, có của để dành.",
      "badAspects": "Sát tinh → làm ra tiền nhưng khó giữ, hoặc khổ vì tiền.",
      "specificAspect": "Tài vận: Giỏi tích lũy, làm chủ tài chính. Kiếm tiền chậm mà chắc, không thích rủi ro.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-the": {
      "overview": "Hôn nhân: Coi trọng trách nhiệm hơn cảm xúc. Cần sự tôn trọng – không gian riêng.",
      "goodAspects": "Cát tinh hội tụ → vợ chồng cùng gánh vác.",
      "badAspects": "Sát tinh hội → hôn nhân lạnh nhạt, chia cách do công việc hoặc tính cách.",
      "specificAspect": "Bạn đời: Cứng cỏi, lý trí, ít thể hiện tình cảm. Có thể hơn tuổi, làm nghề tài chính – kỹ thuật – quân sự.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "dien-trach": {
      "overview": "Tài sản: Có duyên nhà đất, dễ tích trữ vật chất. Thích sống nơi yên tĩnh, vững chắc. Phong cách sống: Ưa nơi đơn giản, sạch sẽ, ngăn nắp.",
      "goodAspects": "Cát tinh → mua bán sinh lợi.",
      "badAspects": "Sát tinh → nhà chật hẹp, thiếu khí, bất hòa với người trong nhà.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tat-ach": {
      "overview": "Bệnh lý: Bệnh gan, phổi, khô máu, cao huyết áp, viêm khớp, khối u do khí huyết bị bế. Tâm lý: Dễ bị trầm uất, mất niềm tin khi không kiểm soát được vấn đề.",
      "goodAspects": "Cát tinh → mạnh mẽ vượt qua bệnh tật.",
      "badAspects": "Sát tinh → bệnh lâu khỏi, dễ thành mãn tính.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "thien-di": {
      "overview": "Ra ngoài: Làm việc chắc chắn, đáng tin cậy. Ít giao tiếp nhưng dễ được tin tưởng vì chuyên môn. Môi trường phù hợp: Cơ quan có kỷ luật, tổ chức rõ ràng, làm việc một mình hiệu quả hơn.",
      "goodAspects": "Cát tinh → phát về nghề nghiệp.",
      "badAspects": "Sát tinh → ra ngoài gặp cô độc, bị ganh ghét ngầm.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "no-boc": {
      "overview": "Bạn bè – cấp dưới: Có người giỏi nhưng ít thân thiết, khó chia sẻ. Phong cách đối xử: Công bằng, nguyên tắc, nhưng khô khan.",
      "goodAspects": "Cát tinh → có người tin cậy cùng làm.",
      "badAspects": "Sát tinh → dễ bị phản bội âm thầm.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "tu-tuc": {
      "overview": "Tình cảm cha mẹ – con: Có khoảng cách nếu không khéo gần gũi.",
      "goodAspects": "Cát tinh → con cái nối nghiệp.",
      "badAspects": "Sát tinh → khó dạy, dễ phản ứng, bất hòa.",
      "specificAspect": "Con cái: Có khí chất nghiêm túc, ít nói, sống khép kín. Có chí làm việc từ sớm.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "huynh-de": {
      "overview": "Tính chất quan hệ: Ít thân, hay giữ khoảng cách, nhưng tôn trọng nhau.",
      "goodAspects": "Cát tinh → giúp nhau làm ăn.",
      "badAspects": "Sát tinh → xa cách, tranh chấp tài sản.",
      "specificAspect": "Anh chị em: Giỏi tài chính – kỹ thuật, nhưng mỗi người mỗi chí.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phuc-duc": {
      "overview": "Âm phần: Dòng họ có người giàu, sống thực tế, làm nghề buôn bán – kỹ thuật. Tinh thần: Không thiên tâm linh, mà trọng thực hành – tích lũy.",
      "goodAspects": "Cát tinh → hậu vận có của.",
      "badAspects": "Sát tinh → sống cô độc, về già ít con cháu gần gũi.",
      "specificAspect": "Phát huy tính lý ngũ hành tương ứng với phương vị của cung.",
      "remedy": "Tích đức hành thiện, giữ tâm thế bình thản, phát huy mặt tích cực của tinh tú."
    },
    "phu-mau": {
      "overview": "Quan hệ: Rõ ràng, không thân mật nhưng đầy trách nhiệm. 📝 SAO VĂN XƯƠNG 🔶 Tổng quan đặc tính",
      "goodAspects": "Cát tinh → được dạy dỗ bài bản.",
      "badAspects": "Sát tinh → cách trở, cha mẹ bệnh sớm, thiếu giao tiếp.",
      "specificAspect": "Cha mẹ: Nghiêm khắc, ít thể hiện tình cảm, sống có nguyên tắc, có khả năng tài chính tốt.",
      "remedy": "⚠️ Cảnh báo và lưu ý"
    }
  }
};

export function getStarPalaceDetails(
  starId: string,
  starName: string,
  starElement: string,
  starCategory: string,
  characteristics: string
): StarPalaceDetail[] {
  const starMap = STAR_PALACES_MAP[starId];
  return TWELVE_PALACES_META.map(palace => {
    if (starMap && starMap[palace.id]) {
      const detail = starMap[palace.id];
      return {
        palaceId: palace.id,
        palaceName: palace.name,
        iconName: palace.iconName,
        meaning: palace.meaning,
        overview: detail.overview,
        goodAspects: detail.goodAspects,
        badAspects: detail.badAspects,
        specificAspect: detail.specificAspect,
        remedy: detail.remedy
      };
    }
    return createDynamicPalaceDetail(palace, starName, starElement, starCategory, characteristics);
  });
}

function createDynamicPalaceDetail(
  palace: { id: string; name: string; meaning: string; iconName: string },
  starName: string,
  starElement: string,
  starCategory: string,
  characteristics: string
): StarPalaceDetail {
  const isSatTinh = starCategory.includes('Sát');
  const isCatTinh = starCategory.includes('Cát') || starCategory.includes('Đức') || starCategory.includes('Hóa');

  let overview = "Khi sao " + starName + " tọa thủ tại " + palace.name + ", " + characteristics.toLowerCase();
  let goodAspects = "Hội tụ cát tinh (Tả Hữu, Xương Khúc, Khôi Việt, Khoa Quyền Lộc): Tăng cường mạnh mẽ phúc khí, giúp mệnh tạo gặt hái thành công trọn vẹn tại " + palace.name.toLowerCase() + ".";
  let badAspects = "Gặp sát tinh xung phá (Kình Đà, Không Kiếp, Hỏa Linh, Hóa Kỵ): Dễ phát sinh trắc trở, hao tổn năng lượng hoặc gặp nghịch cảnh bất ngờ.";
  let specificAspect = "Ảnh hưởng trực tiếp đến " + palace.meaning.toLowerCase() + " với ngũ hành " + starElement + ".";
  let remedy = "Cần giữ tâm thế vững vàng, trau dồi đức hạnh và phát huy ưu thế của sao " + starName + " để hóa giải khó khăn.";

  switch (palace.id) {
    case 'menh':
      overview = starName + " thủ Cung Mệnh định hình cốt cách: " + characteristics + " Thể hiện rõ nét qua khí chất, tư duy và phong thái đối nhân xử thế.";
      specificAspect = 'Ảnh hưởng trực tiếp đến vóc dáng nhân diện và vận mệnh suốt cuộc đời.';
      break;
    case 'quan-loc':
      overview = starName + " tại Cung Quan Lộc chi phối con đường sự nghiệp và phương thức làm việc: " + characteristics;
      specificAspect = "Thích hợp phát triển trong môi trường đòi hỏi sự linh hoạt và chuyên môn phù hợp với hành " + starElement + ".";
      break;
    case 'tai-bach':
      overview = starName + " tại Cung Tài Bạch: Định hình cách kiếm tiền, mức độ tụ tài và thói quen quản lý tài chính cá nhân.";
      specificAspect = 'Dòng tiền tài lộc chịu tác động bởi bản chất cát/hung và ngũ hành của sao.';
      break;
    case 'phu-the':
      overview = starName + " tại Cung Phu Thê: Phản ánh tính cách người bạn đời và chất lượng mối quan hệ hôn nhân gia đình.";
      specificAspect = "Người phối ngẫu mang những nét đặc trưng tính khí của sao " + starName + ".";
      break;
    case 'phuc-duc':
      overview = starName + " tại Cung Phúc Đức: Quyết định chiều sâu đời sống nội tâm, phúc trạch dòng tộc và tuổi thọ.";
      break;
    case 'tat-ach':
      overview = starName + " tại Cung Tật Ách: Cảnh báo những điểm yếu về thể chất liên quan đến hành " + starElement + " hoặc khả năng giải trừ tai ương.";
      break;
    case 'thien-di':
      overview = starName + " tại Cung Thiên Di: Thể hiện hình ảnh bản thân khi ra ngoài xã hội, cơ hội xuất ngoại và các mối quan hệ giao tế.";
      break;
    case 'dien-trach':
      overview = starName + " tại Cung Điền Trạch: Phản ánh duyên nợ với đất đai nhà cửa, khả năng thừa kế hoặc kiến thiết bất động sản.";
      break;
    default:
      break;
  }

  if (isSatTinh) {
    overview += ' Do mang bản chất Sát Tinh, cần chú ý tính hung hiểm, biến động dữ dội và hao tổn tâm lực.';
    remedy = 'Tu tâm dưỡng tính, hạn chế xung đột liều lĩnh, thận trọng trong từng quyết định quan trọng.';
  } else if (isCatTinh) {
    overview += ' Mang lại phúc lành, sự phò trợ quý báu và duyên lành tăng tiến.';
  }

  return {
    palaceId: palace.id,
    palaceName: palace.name,
    iconName: palace.iconName,
    meaning: palace.meaning,
    overview,
    goodAspects,
    badAspects,
    specificAspect,
    remedy
  };
}
