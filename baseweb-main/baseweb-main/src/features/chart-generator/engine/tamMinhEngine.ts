/**
 * Engine Phân Tích & Luận Giải Tử Vi Tam Minh (Thiên - Địa - Nhân)
 * Hợp nhất triết lý Tam Minh Đường và Mệnh Lý Thiên Cơ Nam Phái
 */

import {
  TuViChart,
  StarGroupAnalysis,
  TamMinhAnalysis,
  TamMinhPillar,
  TamMinhStrategy,
  TamMinhActionPlanItem
} from '../types/chart.types';

export function analyzeTamMinh(chart: TuViChart, starGroupAnalysis: StarGroupAnalysis): TamMinhAnalysis {
  const { meta, palaces, userInfo } = chart;
  const menhPalace = palaces.find(p => p.isMenh) || palaces[0];
  const thanPalace = palaces.find(p => p.isThan) || menhPalace;

  // 1. Phân Tích THIÊN MINH (Tố chất nguyên bản)
  let thienScore = 55;
  const thienHighlights: string[] = [];

  // Xét ngũ hành Mệnh & Cục
  if (meta.elementHarmony.includes('Sinh Mệnh')) {
    thienScore += 12;
    thienHighlights.push('Cục Sinh Mệnh: Bản mệnh được hưởng hồng phước môi trường, có quý nhân vô hình nâng đỡ.');
  } else if (meta.elementHarmony.includes('Tương Hòa')) {
    thienScore += 8;
    thienHighlights.push('Mệnh Cục Tương Hòa: Khả năng thích ứng tự nhiên cao, cuộc đời bình ổn, ít tao ngộ trắc trở lớn.');
  } else if (meta.elementHarmony.includes('Mệnh Khắc Cục')) {
    thienScore += 5;
    thienHighlights.push('Mệnh Khắc Cục: Bản lĩnh tự lập cao, dám đương đầu trở ngại để làm chủ hoàn cảnh.');
  } else {
    thienScore -= 6;
    thienHighlights.push('Cục Khắc Mệnh / Mệnh Sinh Cục: Thường phải cống hiến hao tổn tâm lực nhiều mới đạt thành quả.');
  }

  // Xét thế đứng Chính Tinh cung Mệnh
  const mStars = menhPalace.majorStars || [];
  if (mStars.length === 0) {
    thienHighlights.push('Mệnh Vô Chính Diệu: Tư duy linh hoạt, đa chiều nhưng dễ bị tác động bởi môi trường bên ngoài.');
  } else {
    const starNames = mStars.map(s => s.name).join(', ');
    const isMieuOrVuong = (st: string) => ['M', 'V', 'Miếu', 'Vượng'].includes(st);
    const isHam = (st: string) => ['H', 'Hãm'].includes(st);
    const hasMieu = mStars.some(s => isMieuOrVuong(s.strength));
    const hasHam = mStars.some(s => isHam(s.strength));
    
    if (hasMieu && !hasHam) {
      thienScore += 15;
      thienHighlights.push(`Chính Tinh sáng sủa (${starNames}): Tư chất thông tuệ, phong thái đĩnh đạc, năng lực cốt lõi mạnh.`);
    } else if (hasHam) {
      thienScore -= 8;
      thienHighlights.push(`Chính Tinh Lạc Hãm (${starNames}): Nhiều tài năng tiềm ẩn nhưng nội tâm hay mâu thuẫn, dễ tự tạo áp lực.`);
    } else {
      thienScore += 6;
      thienHighlights.push(`Chính Tinh tọa thủ (${starNames}): Năng lực chuyên môn vững vàng, tính cách rõ nét.`);
    }
  }

  // Xét cát/hung tại Mệnh
  const menhGood = menhPalace.minorStars.filter(s => s.type === 'Good' || s.type === 'TuHoa').length;
  const menhBad = menhPalace.minorStars.filter(s => s.type === 'Bad').length;
  thienScore += (menhGood * 3) - (menhBad * 4);
  thienScore = Math.max(30, Math.min(95, thienScore));

  const thienStatus = thienScore >= 75 ? 'Đại Cát Vượng' : thienScore >= 55 ? 'Cân Bằng Ổn Định' : 'Cần Rèn Luyện';
  const thienAdvice = thienScore >= 70
    ? 'Tố chất bẩm sinh rất mạnh mẽ. Hãy phát huy tối đa sở trường lãnh đạo hoặc chuyên môn sâu, tránh tự mãn kiêu ngạo.'
    : 'Cần chú trọng việc học tập chuyên sâu, rèn luyện tính kiên trì và kỷ luật bản thân để biến các điểm yếu thành bàn đạp.';

  const thienPillar: TamMinhPillar = {
    name: 'Thiên Minh (Bản Lĩnh & Căn Cơ)',
    score: thienScore,
    status: thienStatus,
    highlights: thienHighlights,
    advice: thienAdvice
  };

  // 2. Phân Tích ĐỊA MINH (Thời Thế & Vận Khí)
  let diaScore = 50;
  const diaHighlights: string[] = [];

  const currentAge = (userInfo.viewYear || 2026) - userInfo.year + 1;
  const sortedPalaces = [...palaces].sort((a, b) => a.daiVan - b.daiVan);
  const currentDaiVanPalace = sortedPalaces.filter(p => p.daiVan <= currentAge).pop() || menhPalace;

  diaHighlights.push(`Hiện tại đang ở Đại Vận 10 năm tại Cung ${currentDaiVanPalace.name} (${currentDaiVanPalace.daiVan} - ${currentDaiVanPalace.daiVan + 9} tuổi).`);

  // Kiểm tra tương quan ngũ hành Đại vận với Mệnh
  const isMieuOrVuong = (st: string) => ['M', 'V', 'Miếu', 'Vượng'].includes(st);
  const isHam = (st: string) => ['H', 'Hãm'].includes(st);

  const dvStars = currentDaiVanPalace.majorStars || [];
  if (dvStars.some(s => isMieuOrVuong(s.strength))) {
    diaScore += 14;
    diaHighlights.push('Đại vận quy tụ nhiều chính tinh đắc địa: Thời cơ bứt phá công danh, mở rộng cơ nghiệp thuận lợi.');
  } else if (dvStars.some(s => isHam(s.strength))) {
    diaScore -= 10;
    diaHighlights.push('Đại vận có chính tinh hãm địa: Khuyên gia chủ nên cẩn trọng, giữ thế phòng ngự, tránh bung vốn quá đà.');
  }

  // Tương quan cát - hung toàn bàn
  if (starGroupAnalysis.goodGroups.length > starGroupAnalysis.badGroups.length) {
    diaScore += 10;
    diaHighlights.push('Tổng thể đại cục cát tinh áp đảo: Môi trường xung quanh có nhiều trợ lực, quý nhân tương trợ.');
  } else {
    diaScore -= 8;
    diaHighlights.push('Nhiều bộ hung sát tinh rình rập: Cần cảnh giác trước các cạm bẫy hợp tác và rủi ro thị phi pháp lý.');
  }

  diaScore = Math.max(25, Math.min(95, diaScore));
  const diaStatus = diaScore >= 70 ? 'Thời Vận Hanh Thông' : diaScore >= 50 ? 'Giao Thời Chuyển Tiếp' : 'Thời Vận Nghịch Cảnh';
  const diaAdvice = diaScore >= 65
    ? 'Thời cơ đang đứng về phía bạn. Hãy tự tin triển khai các kế hoạch lớn đã ấp ủ, tận dụng sự ủng hộ của thời cuộc.'
    : 'Thời vận chưa thực sự chín muồi. Nên áp dụng chiến lược "tích lương luyện binh", không manh động đầu tư mạo hiểm.';

  const diaPillar: TamMinhPillar = {
    name: 'Địa Minh (Thời Thế & Vận Hội)',
    score: diaScore,
    status: diaStatus,
    highlights: diaHighlights,
    advice: diaAdvice
  };

  // 3. Phân Tích NHÂN MINH (Ý Chí & Điểm Đòn Bẩy Cải Mệnh)
  let nhanScore = 55;
  const nhanHighlights: string[] = [];

  nhanHighlights.push(`Cung Thân ngụ tại ${meta.thanCu}: Hậu vận và tư tưởng hành động sau 35 tuổi tập trung sâu sắc tại đây.`);
  
  if (thanPalace.majorStars.some(s => isMieuOrVuong(s.strength))) {
    nhanScore += 12;
    nhanHighlights.push('Cung Thân đắc cách: Ý chí bền bỉ, càng về trung và hậu vận hành động càng chắc chắn và hiệu quả.');
  }

  // Xem xét sao giải cứu
  const hasGiaiTinh = palaces.some(p => p.minorStars.some(s => ['Hóa Khoa', 'Thiên Giải', 'Địa Giải', 'Giải Thần', 'Ân Quang', 'Thiên Quý'].includes(s.name)));
  if (hasGiaiTinh) {
    nhanScore += 10;
    nhanHighlights.push('Có quý thần & giải tinh hội chiếu: Ý thức hướng thiện, tâm tính nhân hậu chính là chìa khóa hóa giải hung hiểm.');
  }

  nhanScore = Math.max(35, Math.min(95, nhanScore));
  const nhanStatus = nhanScore >= 70 ? 'Ý Chí Vững Vàng' : 'Cần Tu Tâm Rèn Lực';
  const nhanAdvice = 'Số mệnh chỉ là bản thiết kế thô, chính ý chí và hành vi kỷ luật hàng ngày mới là bàn tay hoàn thiện số phận. Luôn lấy đức độ và trí tuệ làm điểm tựa chuyển hóa.';

  const nhanPillar: TamMinhPillar = {
    name: 'Nhân Minh (Hành Động & Chuyển Hóa)',
    score: nhanScore,
    status: nhanStatus,
    highlights: nhanHighlights,
    advice: nhanAdvice
  };

  // 4. Xác Định Thế Cờ (The Co)
  let theCoName = 'Mệnh Vượng Địa Nhược (Luyện Kiếm Chờ Thời)';
  let badgeColor = '#d97706';
  let overview = 'Bản thân bạn sở hữu năng lực và phẩm chất vượt trội, nhưng vận hội thời cuộc hiện tại chưa hoàn toàn mở rộng cửa. Đây là thời kỳ tôi luyện bản lĩnh để chuẩn bị bứt phá.';
  let strategySummary = 'Chiến lược cốt lõi: Nâng cao năng lực chuyên môn, giữ vững tài chính an toàn, xây dựng uy tín cá nhân và chờ đợi thời điểm chín muồi.';

  if (thienScore >= 60 && diaScore >= 60) {
    theCoName = 'Mệnh Địa Kép (Đại Thuận Cát)';
    badgeColor = '#16a34a';
    overview = 'Tố chất bẩm sinh mạnh mẽ kết hợp cùng thời vận hanh thông rực rỡ. Bạn đang đứng trước thời cơ vàng để lập nên những thành tựu lớn của đời người.';
    strategySummary = 'Chiến lược cốt lõi: Táo bạo tiến công, mở rộng quy mô công việc, đầu tư bài bản và chủ động dẫn dắt cuộc chơi.';
  } else if (thienScore < 60 && diaScore >= 60) {
    theCoName = 'Mệnh Nhược Địa Cường (Nương Tựa Quý Nhân)';
    badgeColor = '#2563eb';
    overview = 'Thời thế đang tạo ra nhiều cơ hội rất tốt xung quanh bạn. Năng lực cá nhân có thể còn khiếm khuyết nhưng bạn được hưởng lợi từ môi trường tập thể.';
    strategySummary = 'Chiến lược cốt lõi: Nương tựa vào người dẫn dắt giỏi, học hỏi không ngừng, làm việc đội nhóm chặt chẽ và giữ sự khiêm tốn.';
  } else if (thienScore < 60 && diaScore < 60) {
    theCoName = 'Mệnh Địa Phản (Ẩn Nhẫn Tu Thân)';
    badgeColor = '#dc2626';
    overview = 'Cả tố chất lẫn thời vận đều đang đặt ra những bài toán thử thách cam go. Đây là giai đoạn thử lửa của số phận để lọc bớt những điều phù phiếm.';
    strategySummary = 'Chiến lược cốt lõi: Dĩ nhu thắng cương, phòng thủ toàn diện, không vay mượn mạo hiểm, tích cực làm việc thiện và tu dưỡng tâm tính.';
  }

  // 5. Chiến Lược 4 Trụ Cột (Strategies)
  const isSatPhaTham = menhPalace.majorStars.some(s => ['Thất Sát', 'Phá Quân', 'Tham Lang'].includes(s.name));
  const isTuPhu = menhPalace.majorStars.some(s => ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng'].includes(s.name));

  const strategies: TamMinhStrategy = {
    career: {
      title: isSatPhaTham ? 'Tiên Phong & Đột Phá Đổi Mới' : isTuPhu ? 'Quản Trị Chiến Lược & Vững Bền' : 'Chuyên Môn Sâu & Tư Vấn Cố Vấn',
      detail: isSatPhaTham
        ? 'Bạn mang tố chất dám nghĩ dám làm, sẵn sàng đương đầu thử thách mới. Thích hợp khởi nghiệp, kinh doanh độc lập hoặc đổi mới công nghệ.'
        : isTuPhu
        ? 'Bạn mang phong thái đĩnh đạc, trọng uy tín và kỷ cương. Thích hợp giữ trọng trách quản lý, điều hành dự án hoặc làm việc trong môi trường quy chuẩn lớn.'
        : 'Bạn nổi bật ở sự khéo léo, tư duy phân tích và khả năng giao tiếp. Thích hợp các ngành nghề chuyên gia, đào tạo, sáng tạo nội dung hoặc dịch vụ cao cấp.',
      action: 'Xác định một ngách chuyên môn độc bản, đăng ký học thêm chứng chỉ quốc tế và mở rộng quan hệ với những người cùng chí hướng.'
    },
    wealth: {
      title: 'Quản Trị Dòng Tiền & Tích Sản An Toàn',
      detail: 'Dòng tiền có xu hướng tăng trưởng theo mức độ uy tín của bản thân. Cần đề phòng thói quen chi tiêu phóng khoáng hoặc đầu tư theo cảm xúc đám đông.',
      action: 'Áp dụng công thức phân bổ 50-30-20: Luôn trích 20% lợi nhuận vào tài sản phòng thủ (đất đai, vàng tích lũy) trước khi tái đầu tư mạo hiểm.'
    },
    relationship: {
      title: 'Hòa Hợp Lứa Đôi & Thấu Cảm Gia Đạo',
      detail: 'Hôn nhân là chiếc gương phản chiếu tâm tính của chính bạn. Khi bạn biết lắng nghe và giảm bớt cái tôi đòi hỏi, gia đạo sẽ lập tức chuyển biến êm ấm.',
      action: 'Dành ít nhất 1 buổi tối mỗi tuần để chia sẻ chân thành cùng người phối ngẫu; học cách khen ngợi và ghi nhận đóng góp của đối phương.'
    },
    health: {
      title: 'Dưỡng Sinh Tâm Thể & Phòng Ngừa Tai Ương',
      detail: 'Chú trọng hệ thần kinh, giấc ngủ và các cơ quan chịu áp lực lớn (tiêu hóa hoặc huyết áp do thói quen suy nghĩ nhiều).',
      action: 'Duy trì thói quen đi bộ hoặc bơi lội 30 phút mỗi ngày; hạn chế sử dụng thiết bị điện tử sau 22h00; kiểm tra sức khỏe tổng quát định kỳ.'
    }
  };

  // 6. Kế Hoạch Hành Động (Action Plans)
  const actionPlans: TamMinhActionPlanItem[] = [
    {
      timeline: 'Ngắn Hạn (1 - 2 Năm Tới)',
      focus: 'Tập trung củng cố nội lực, tối ưu hóa công việc hiện tại và quản trị rủi ro',
      actions: [
        'Rà soát lại toàn bộ nguồn thu chi, cắt giảm các khoản nợ xấu và xây dựng quỹ khẩn cấp 6 tháng.',
        'Hoàn thiện ít nhất 1 kỹ năng cốt lõi giúp tăng gấp đôi hiệu suất công việc hàng ngày.',
        'Định kỳ tham gia hiến máu nhân đạo hoặc làm từ thiện giấu tên để tiêu trừ nghiệp chướng sát tinh.'
      ]
    },
    {
      timeline: 'Trung Hạn (3 - 5 Năm Tới)',
      focus: 'Tận dụng bước chuyển dịch đại vận để nâng cấp địa vị và mở rộng tài sản',
      actions: [
        'Xây dựng thương hiệu cá nhân hoặc tạo dựng một dòng thu nhập thụ động bền vững.',
        'Đầu tư vào một tài sản cố định (bất động sản, cơ sở hạ tầng kinh doanh) để neo giữ tài lộc.',
        'Tham gia vào cộng đồng doanh nghiệp hoặc hiệp hội chuyên môn để kết nối quý nhân.'
      ]
    },
    {
      timeline: 'Dài Hạn (10 Năm Trở Lên)',
      focus: 'Kiến tạo di sản, bồi đắp phúc đức cho con cháu và an hưởng cuộc sống ý nghĩa',
      actions: [
        'Chuyển dần trọng tâm từ kiếm tiền sang truyền cảm hứng, đào tạo thế hệ kế thừa.',
        'Tham gia các hoạt động phụng sự xã hội, xây dựng trường học, cầu đường hoặc quỹ khuyến học.',
        'Giữ tâm thanh thản, tu tập thiền định để nuôi dưỡng năng lượng bình an cho tâm hồn.'
      ]
    }
  ];

  return {
    theCo: {
      name: theCoName,
      badgeColor,
      overview,
      strategySummary
    },
    pillars: {
      thien: thienPillar,
      dia: diaPillar,
      nhan: nhanPillar
    },
    strategies,
    actionPlans
  };
}
