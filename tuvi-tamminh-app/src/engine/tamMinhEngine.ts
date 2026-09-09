import { ChartResult, TamMinhReportData, PalaceData, Star } from '../types/tuvi.types';
import { checkCucMenhRelation } from '../data/tamMinhRules';

export function generateTamMinhReport(chart: ChartResult, targetYear?: number): TamMinhReportData {
  const currentYear = targetYear || chart.input.viewYear || new Date().getFullYear();
  // Tuổi mụ đương số
  const birthYear = chart.lunar.year;
  const currentAge = currentYear - birthYear + 1;

  const menhPalace = chart.palaces.find(p => p.isMenh) || chart.palaces[chart.menhChiIndex];
  const thanPalace = chart.palaces.find(p => p.isThan) || chart.palaces[chart.thanChiIndex];

  // ==================== 1. THIÊN MINH (CỐT CÁCH & TỐ CHẤT BẨM SINH) ====================
  const cucMenhRel = checkCucMenhRelation(chart.banMenh.element, chart.cuc.element);
  const amDuongText = chart.amDuongThuanLy 
    ? 'Âm Dương Thuận Lý (hoàn cảnh khởi đầu và tố chất hài hòa, dễ được môi trường ủng hộ)' 
    : 'Âm Dương Nghịch Lý (phải tự lực cánh sinh nhiều hơn, tôi luyện qua thử thách)';

  const majorStarsAtMenh = menhPalace.stars.filter(s => s.category === 'Chính tinh');
  const majorStarsText = majorStarsAtMenh.length > 0 
    ? majorStarsAtMenh.map(s => `${s.name} (${s.brightness || 'Bình'})`).join(', ')
    : 'Vô Chính Diệu (mượn ánh sáng của cung xung chiếu để định hướng phát triển)';

  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (chart.palaces.some(p => p.stars.some(s => s.name === 'Hóa Khoa'))) {
    strengths.push('Trí tuệ học vấn sâu sắc, có năng lực tự học và cứu nguy trong lúc ngặt nghèo.');
  }
  if (chart.palaces.some(p => p.stars.some(s => s.name === 'Hóa Quyền'))) {
    strengths.push('Tố chất lãnh đạo, khả năng điều phối và quyết đoán dứt khoát.');
  }
  if (chart.palaces.some(p => p.stars.some(s => s.name === 'Hóa Lộc' || s.name === 'Lộc Tồn'))) {
    strengths.push('Nhạy bén với cơ hội tài chính, có lộc tụ tài và duyên làm kinh tế.');
  }
  if (strengths.length === 0) {
    strengths.push('Cần cù, thích nghi tốt với môi trường, giỏi quan sát và tích lũy kinh nghiệm.');
  }

  // Yếu điểm
  const satStarsAtMenh = menhPalace.stars.filter(s => s.category === 'Sát tinh');
  if (satStarsAtMenh.length > 0) {
    weaknesses.push(`Có sát tinh tọa thủ (${satStarsAtMenh.map(s => s.name).join(', ')}): Tính cách đôi khi nóng nảy, dễ bị kích động hoặc gặp trắc trở đột ngột.`);
  } else {
    weaknesses.push('Đôi lúc cầu toàn quá mức, chần chừ trước những quyết định mang tính đột phá lớn.');
  }

  if (menhPalace.hasTriet) {
    weaknesses.push('Cung Mệnh ngộ Triệt Không: Tiền vận trước 30 tuổi gặp nhiều thăng trầm gian nan, cần kiên trì bền chí vượt khó.');
  }
  if (menhPalace.hasTuan) {
    weaknesses.push('Cung Mệnh ngộ Tuần Không: Vận trình từ từ chậm chắc, không nên vội vã đốt cháy giai đoạn.');
  }

  // Thân cư
  const thanRole = thanPalace.name;
  let thanAnalysis = '';
  switch (thanRole) {
    case 'Mệnh':
      thanAnalysis = 'Thân Mệnh đồng cung: Nhất quán từ tư tưởng đến hành động, tự lập từ rất sớm, cuộc đời do chính mình quyết định.';
      break;
    case 'Quan Lộc':
      thanAnalysis = 'Thân cư Quan Lộc: Sự nghiệp là lẽ sống lớn nhất, đặt trọng tâm cuộc đời vào công danh và cống hiến chuyên môn.';
      break;
    case 'Tài Bạch':
      thanAnalysis = 'Thân cư Tài Bạch: Rất thực tế, nhạy bén với đồng tiền, luôn chú trọng xây dựng nền tảng tài chính an toàn.';
      break;
    case 'Thiên Di':
      thanAnalysis = 'Thân cư Thiên Di: Duyên ngoại giao lớn, thích xê dịch đi xa, thành công và chuyển biến mạnh khi ra ngoài xã hội.';
      break;
    case 'Phu Thê':
      thanAnalysis = 'Thân cư Phu Thê: Gia đạo và người bạn đời ảnh hưởng sâu sắc đến thành bại, sự nghiệp và tâm lý của bản thân.';
      break;
    case 'Phúc Đức':
      thanAnalysis = 'Thân cư Phúc Đức: Coi trọng đời sống tâm linh, phúc đức gia tiên và sự thanh thản nội tâm hơn danh lợi phù hoa.';
      break;
    default:
      thanAnalysis = `Thân cư ${thanRole}: Cuộc đời gắn liền với mối dây liên kết cùng cung này.`;
  }

  const thienMinhOverview = `Đương số tuổi ${chart.canChi.canYear} ${chart.canChi.chiYear} (${chart.amDuongNamNu}), Bản mệnh ${chart.banMenh.name} (${chart.banMenh.element}), Cục diện ${chart.cuc.name} (${chart.cuc.element}). ${cucMenhRel.title}: ${cucMenhRel.description} Kết hợp thế đứng ${amDuongText}. Cung Mệnh an tại ${menhPalace.chi} hội tụ ${majorStarsText}. ${thanAnalysis}`;

  // ==================== 2. ĐỊA MINH (HOÀN CẢNH, THỜI CUỘC & VẬN THẾ) ====================
  // Tìm Đại Hạn 10 năm hiện tại
  let currentDaiHanPalace: PalaceData = menhPalace;
  for (const palace of chart.palaces) {
    if (currentAge >= palace.daiHan && currentAge < palace.daiHan + 10) {
      currentDaiHanPalace = palace;
      break;
    }
  }

  // Cung Tiểu Hạn của năm xem
  const currentTieuHanChi = chart.canChi.chiYear; // Năm xem
  const currentTieuHanPalace = chart.palaces.find(p => p.tieuHanChi === currentTieuHanChi) || menhPalace;

  const daiHanStars = currentDaiHanPalace.stars.map(s => s.name).slice(0, 5).join(', ');
  const tieuHanStars = currentTieuHanPalace.stars.map(s => s.name).slice(0, 5).join(', ');

  const diaMinhOverview = `Hiện tại ở tuổi ${currentAge} (năm ${currentYear}), đương số đang bước vào giai đoạn Đại Hạn 10 năm tại cung ${currentDaiHanPalace.name} (${currentDaiHanPalace.chi}, từ ${currentDaiHanPalace.daiHan} đến ${currentDaiHanPalace.daiHan + 9} tuổi). Vận trình năm ${currentYear} kích hoạt cung Tiểu Hạn tại ${currentTieuHanPalace.chi} (${currentTieuHanPalace.name}).`;

  const opportunities: string[] = [
    `Đại hạn tại cung ${currentDaiHanPalace.name} mở ra nhiều cơ hội liên quan đến các sao chủ quản (${daiHanStars}).`,
    'Thời cuộc đòi hỏi sự linh hoạt cập nhật công nghệ và tri thức mới để đón đầu xu thế.',
    'Các mối quan hệ đối tác có cơ hội củng cố nếu giữ thái độ chân thành và minh bạch.'
  ];

  const risks: string[] = [
    `Cung hạn có sự tương tác của phụ tinh (${tieuHanStars}), cần lưu ý kiểm soát cảm xúc, tránh quyết định nóng vội.`,
    'Đề phòng các xung đột giấy tờ hợp đồng hoặc vấn đề tiêu hóa, xương khớp khi làm việc quá sức.'
  ];

  // ==================== 3. NHÂN MINH (Ý CHÍ, HÀNH ĐỘNG & HÓA GIẢI) ====================
  const nhanMinhOverview = `Triết lý Tam Minh khẳng định: "Thiên định tố chất, Địa định thời thế, nhưng Nhân định thành quả". Bất kể lá số có những sao xấu hay cung hạn khó khăn đến đâu, người thấu suốt Tam Minh luôn lấy ý chí và hành động làm kim chỉ nam để cải biến vận mệnh.`;

  const actionableAdvice: string[] = [
    'Tu thân dưỡng tính: Lấy sự điềm đạm, lắng nghe làm gốc rễ ứng xử trong mọi mối quan hệ.',
    'Chủ động phòng ngừa: Thiết lập ngân sách dự phòng tài chính, không bỏ toàn bộ trứng vào một giỏ.',
    'Phát huy sở trường: Tập trung đào sâu vào thế mạnh chuyên môn cốt lõi thay vì phân tán sức lực vào những lĩnh vực không nắm chắc.',
    'Minh bạch pháp lý: Rà soát cẩn mật mọi cam kết, hợp đồng và hóa đơn chứng từ trước khi ký kết.'
  ];

  const remedies: string[] = [
    'Hóa giải Sát tinh: Khi gặp Kình Đà, Không Kiếp tại cung hạn, nên chủ động đi hiến máu nhân đạo, làm việc thiện nguyện hoặc khám nha khoa để giải bớt ách huyết quang.',
    'Hóa giải Hóa Kỵ: Học cách khiêm nhường, không tranh cãi hơn thua nơi công cộng, dùng sự nhẫn nại và kết quả công việc để chứng minh thực lực.',
    'Cải thiện phong thủy bản thân: Tận dụng màu sắc ngũ hành tương sinh với Bản mệnh (Hành ${chart.banMenh.element}) trong trang phục và không gian làm việc.'
  ];

  return {
    thienMinh: {
      overview: thienMinhOverview,
      coreNature: `Mệnh đóng tại ${menhPalace.chi} mang cốt cách của ${majorStarsText}. ${cucMenhRel.description}`,
      strengths,
      weaknesses,
      careerAptitude: `Phù hợp với các lĩnh vực đòi hỏi tính chiến lược, quản trị, chuyên môn sâu hoặc kinh doanh độc lập nhờ vị trí ${thanRole}.`
    },
    diaMinh: {
      overview: diaMinhOverview,
      currentMajorPeriod: {
        palace: currentDaiHanPalace.name,
        startAge: currentDaiHanPalace.daiHan,
        endAge: currentDaiHanPalace.daiHan + 9,
        analysis: `Đại vận 10 năm tại cung ${currentDaiHanPalace.name} (${currentDaiHanPalace.chi}) mang tính chất bước đệm quan trọng, hội tụ các sao: ${daiHanStars}. Cần chú trọng phát triển bề sâu.`
      },
      currentMinorPeriod: {
        year: currentYear,
        palace: currentTieuHanPalace.name,
        analysis: `Tiểu hạn năm ${currentYear} đóng tại ${currentTieuHanPalace.chi} (${currentTieuHanPalace.name}), chịu ảnh hưởng bởi: ${tieuHanStars}. Thích hợp giữ nhịp độ ổn định.`
      },
      environmentOpportunities: opportunities,
      risksAndThreats: risks
    },
    nhanMinh: {
      overview: nhanMinhOverview,
      actionableAdvice,
      remedies,
      lifePhilosophy: 'Biết mình - Hiểu người - Thuận thời - Hành động đúng đắn. Vận mệnh là tấm bản đồ, người cầm lái chính là bản thân đương số.'
    }
  };
}
