/**
 * Automated Tu Vi Interpreter Engine (Luận Giải Lá Số Tử Vi)
 */

import {
  TuViChart,
  TuViInterpretation,
  ElementRelation,
  CachCucItem,
  TuViPalace
} from '../types/chart.types';
import { analyzeStarGroups, getPalaceStarGroups } from './starGroupEngine';
import { analyzeTamMinh } from './tamMinhEngine';

export function evaluateElementRelation(menhElement: string, cucElement: string): ElementRelation {
  const SINH: Record<string, string> = {
    'Kim': 'Thủy', 'Thủy': 'Mộc', 'Mộc': 'Hỏa', 'Hỏa': 'Thổ', 'Thổ': 'Kim'
  };
  const KHAC: Record<string, string> = {
    'Kim': 'Mộc', 'Mộc': 'Thổ', 'Thổ': 'Thủy', 'Thủy': 'Hỏa', 'Hỏa': 'Kim'
  };

  if (menhElement === cucElement) {
    return {
      status: 'Tương Hòa',
      detail: 'Bản Mệnh và Cục hòa hợp, cuộc đời bình ổn, phát triển tự nhiên thuận lợi.'
    };
  }
  if (SINH[cucElement] === menhElement) {
    return {
      status: 'Cục Sinh Mệnh',
      detail: 'Cục dưỡng Mệnh, hoàn cảnh môi trường luôn tạo điều kiện thuận lợi, hay gặp may mắn và hỗ trợ từ bên ngoài.'
    };
  }
  if (SINH[menhElement] === cucElement) {
    return {
      status: 'Mệnh Sinh Cục',
      detail: 'Bản Mệnh vất vả gánh vác môi trường, phải tự nỗ lực cống hiến nhiều mới gặt hái thành quả.'
    };
  }
  if (KHAC[menhElement] === cucElement) {
    return {
      status: 'Mệnh Khắc Cục',
      detail: 'Bản Mệnh vượt qua mọi trở ngại môi trường, bản lĩnh cao, làm chủ được hoàn cảnh cuộc sống.'
    };
  }
  if (KHAC[cucElement] === menhElement) {
    return {
      status: 'Cục Khắc Mệnh',
      detail: 'Môi trường sống nhiều gian truân thử thách, cần ý chí kiên cường và cẩn trọng trong mọi quyết định.'
    };
  }
  return {
    status: 'Bình Hòa',
    detail: 'Quan hệ Ngũ Hành ổn định.'
  };
}

function getMajorStars(palace?: TuViPalace): string[] {
  if (!palace) return [];
  return palace.majorStars.map(s => s.name);
}


export function detectCachCuc(palaces: TuViPalace[]): CachCucItem[] {
  const menhPalace = palaces.find(p => p.isMenh);
  if (!menhPalace) return [];

  const quanPalace = palaces.find(p => p.name === 'Quan Lộc') || palaces[(menhPalace.index + 4) % 12];
  const taiPalace = palaces.find(p => p.name === 'Tài Bạch') || palaces[(menhPalace.index + 8) % 12];

  // CHỈ XÉT DUY NHẤT 14 CHÍNH TINH TRONG TAM HỢP MỆNH: MỆNH - TÀI BẠCH - QUAN LỘC
  const menhTamHopPalaces = [menhPalace, quanPalace, taiPalace].filter(Boolean);
  const menhTamHopMajors = menhTamHopPalaces.flatMap(p => getMajorStars(p));
  const menhMajors = getMajorStars(menhPalace);

  const cachCucList: CachCucItem[] = [];

  const hasCo = menhTamHopMajors.includes('Thiên Cơ');
  const hasNguyet = menhTamHopMajors.includes('Thái Âm');
  const hasDong = menhTamHopMajors.includes('Thiên Đồng');
  const hasLuong = menhTamHopMajors.includes('Thiên Lương');
  const hasCu = menhTamHopMajors.includes('Cự Môn');
  const hasThaiDuong = menhTamHopMajors.includes('Thái Dương');
  const hasSat = menhTamHopMajors.includes('Thất Sát');
  const hasPha = menhTamHopMajors.includes('Phá Quân');
  const hasTham = menhTamHopMajors.includes('Tham Lang');

  // 1. TỬ PHỦ VŨ TƯỚNG LIÊM / PHỦ TƯỚNG TRIỀU VIÊN
  const isTuPhuVuTuongThủMenh = menhMajors.some(s => ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng', 'Liêm Trinh'].includes(s));
  const tuPhuCount = ['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng', 'Liêm Trinh'].filter(s => menhTamHopMajors.includes(s)).length;
  const isSatPhaThamThủMenh = menhMajors.some(s => ['Thất Sát', 'Phá Quân', 'Tham Lang'].includes(s));

  let isTuPhuVuTuong = false;
  let isPhuTuongTrieuVien = false;
  if (isTuPhuVuTuongThủMenh && tuPhuCount >= 3 && !isSatPhaThamThủMenh) {
    isTuPhuVuTuong = true;
    cachCucList.push({
      name: 'Tử Phủ Vũ Tướng Liêm',
      type: 'Đế Vương Thượng Cách',
      description: 'Tam Hợp Mệnh (Mệnh - Tài - Quan) hội tụ đầy đủ hệ thống chính tinh Tử Vi, Thiên Phủ, Vũ Khúc, Thiên Tướng, Liêm Trinh: Mẫu người lãnh đạo tài ba, uy quyền vững chãi như bàn thạch, công danh rực rỡ và tài lộc trường cửu.'
    });
  } else if (!isTuPhuVuTuongThủMenh && !isSatPhaThamThủMenh) {
    const hasPhu = menhTamHopMajors.includes('Thiên Phủ');
    const hasTuong = menhTamHopMajors.includes('Thiên Tướng');
    if (hasPhu && hasTuong) {
      isPhuTuongTrieuVien = true;
      cachCucList.push({
        name: 'Phủ Tướng Triều Viên',
        type: 'Phúc Lộc Vinh Hiển Cách',
        description: 'Thiên Phủ và Thiên Tướng trong Tam Hợp Mệnh cùng chầu về Mệnh: Chủ về thực lộc dồi dào, áo cơm phong túc, được kính trọng nâng đỡ, cuộc sống thanh nhã bình an.'
      });
    }
  }

  // 2. SÁT PHÁ THAM
  let isSatPhaTham = false;
  if (isSatPhaThamThủMenh && hasSat && hasPha && hasTham) {
    isSatPhaTham = true;
    cachCucList.push({
      name: 'Sát Phá Tham Cách',
      type: 'Biến Động Tiên Phong Cách',
      description: 'Tam Hợp Mệnh hội đủ bộ ba dũng tướng Thất Sát - Phá Quân - Tham Lang: Bản lĩnh phi thường, quả cảm, tiên phong mở đường, dám nghĩ dám làm, làm nên đại nghiệp trong thời kỳ biến động.'
    });
  }

  // 3. CƠ NGUYỆT ĐỒNG LƯƠNG
  let isCoNguyetDongLuong = false;
  if (hasCo && hasNguyet && hasDong && hasLuong) {
    isCoNguyetDongLuong = true;
    cachCucList.push({
      name: 'Cơ Nguyệt Đồng Lương Cách',
      type: 'Tài Trí Văn Chức Cách',
      description: 'Tam Hợp Mệnh hội đủ cả 4 sao Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương: Mẫu người văn chức mực thước, mưu lược trí tuệ, tính cách hòa nhã, thích hợp chuyên môn cao, công chức, tài chính, giáo dục.'
    });
  }

  // 4. CƠ CỰ ĐỒNG (Thiên Cơ, Cự Môn, Thiên Đồng trong Tam Hợp Mệnh - Tài - Quan)
  let isCoCuDong = false;
  if (!isCoNguyetDongLuong && hasCo && hasDong && hasCu) {
    isCoCuDong = true;
    cachCucList.push({
      name: 'Cơ Cự Đồng Cách',
      type: 'Mưu Trí Biến Khai Cách',
      description: 'Tam Hợp Mệnh - Tài - Quan hội tụ bộ ba chính tinh Thiên Cơ, Cự Môn và Thiên Đồng (Thiên Cơ thủ Mệnh, Cự Môn & Thiên Đồng tương hội): Mẫu người túc trí đa mưu, tư duy linh hoạt nhạy bén, giàu năng lực phân tích và tài ứng biến. Thời trẻ bôn ba rèn luyện, tự lập tự cường, hậu vận phát phúc phát tài, gây dựng sự nghiệp vững vàng.'
    });
  }

  // 5. ÂM DƯƠNG LƯƠNG
  let isAmDuongLuong = false;
  if (hasNguyet && hasThaiDuong && hasLuong) {
    isAmDuongLuong = true;
    cachCucList.push({
      name: 'Âm Dương Lương Cách',
      type: 'Quang Minh Phúc Thọ Cách',
      description: 'Tam Hợp Mệnh hội đủ Thái Âm, Thái Dương và Thiên Lương: Mẫu người nhân hậu, quang minh chính đại, danh tài lưỡng toàn, danh tiếng và tinh thần phụng sự cao.'
    });
  }

  // 6. CỰ NHẬT ĐỒNG CUNG / CỰ NHẬT HỘI CHIẾU
  let isCuNhat = false;
  if (!isCoCuDong) {
    const cuNhatPalace = menhTamHopPalaces.find(p => {
      const m = getMajorStars(p);
      return m.includes('Cự Môn') && m.includes('Thái Dương');
    });
    if (cuNhatPalace) {
      isCuNhat = true;
      cachCucList.push({
        name: `Cự Nhật Đồng Cung (${cuNhatPalace.name} - ${cuNhatPalace.chi})`,
        type: 'Văn Tài Hùng Biện Cách',
        description: `Thái Dương và Cự Môn đồng cung tại ${cuNhatPalace.name} (${cuNhatPalace.chi}): Thái Dương quang minh hóa giải nghi kỵ của Cự Môn, tài ăn nói xuất chúng, hùng biện sắc sảo, danh tiếng vang xa.`
      });
    } else if (hasThaiDuong && hasCu) {
      isCuNhat = true;
      cachCucList.push({
        name: 'Cự Nhật Hội Chiếu',
        type: 'Hùng Biện Trí Tuệ Cách',
        description: 'Thái Dương và Cự Môn cùng hội tụ trong Tam Hợp Mệnh - Tài - Quan: Giàu khả năng diễn thuyết, tư duy phản biện tốt, có uy tín trong công việc.'
      });
    }
  }

  // 7. NHẬT NGUYỆT ĐỒNG CUNG
  const nhatNguyetDongCungPalace = menhTamHopPalaces.find(p => {
    const majors = getMajorStars(p);
    return majors.includes('Thái Dương') && majors.includes('Thái Âm');
  });
  if (nhatNguyetDongCungPalace) {
    cachCucList.push({
      name: `Nhật Nguyệt Đồng Cung (${nhatNguyetDongCungPalace.name} - ${nhatNguyetDongCungPalace.chi})`,
      type: 'Kỳ Cách Đặc Biệt',
      description: `Thái Dương và Thái Âm cùng tọa thủ tại cung ${nhatNguyetDongCungPalace.name} (${nhatNguyetDongCungPalace.chi}): Âm Dương tương hội, tư tưởng biến hóa đa diện, trực giác nhạy bén, đắc thời biến chuyển thành đại tài.`
    });
  }

  // 8. NHẬT XUẤT LÔI MÔN (MÃO LÀ MỆNH / TÀI / QUAN)
  const maoPalace = menhTamHopPalaces.find(p => p.chi === 'Mão');
  if (maoPalace) {
    const majors = getMajorStars(maoPalace);
    if (majors.includes('Thái Dương') && majors.includes('Thiên Lương')) {
      cachCucList.push({
        name: maoPalace.isMenh ? 'Nhật Xuất Lôi Môn tại Mệnh' : `Nhật Chiếu Lôi Môn (${maoPalace.name})`,
        type: 'Quang Huy Thượng Cách',
        description: `Thái Dương và Thiên Lương đồng tọa tại ${maoPalace.name} (cung Mão): Mặt trời mọc ở cửa Lôi Môn, quang minh rạng rỡ, trí tuệ sáng suốt, sớm công thành danh toại.`
      });
    }
  }

  // 9. NGUYỆT LÃNG THIÊN MÔN (HỢI LÀ MỆNH / TÀI / QUAN)
  const hoiPalace = menhTamHopPalaces.find(p => p.chi === 'Hợi');
  if (hoiPalace) {
    const majors = getMajorStars(hoiPalace);
    if (majors.includes('Thái Âm')) {
      cachCucList.push({
        name: hoiPalace.isMenh ? 'Nguyệt Lãng Thiên Môn tại Mệnh' : `Nguyệt Lãng Thiên Môn (${hoiPalace.name})`,
        type: 'Đại Phú Quý Cách',
        description: `Thái Âm miếu địa tại cung ${hoiPalace.name} (Hợi): Trăng rằm chiếu sáng cửa Trời, cuộc sống thanh cao tao nhã, phúc lộc chu toàn, tiền tài dồi dào tụ về tự nhiên.`
      });
    }
  }

  // 10. CÁC BỘ CHÍNH TINH ĐỒNG CUNG TRONG MỆNH - TÀI - QUAN
  // Chỉ kiểm tra khi chưa thuộc đại cách bao trùm tương ứng (để không bị tách lẻ cách cục)
  const checkChinhTinhPair = (s1: string, s2: string, name: string, type: string, desc: string) => {
    const p = menhTamHopPalaces.find(palace => {
      const m = getMajorStars(palace);
      return m.includes(s1) && m.includes(s2);
    });
    if (p) {
      cachCucList.push({
        name: `${name} (${p.name} - ${p.chi})`,
        type,
        description: `${s1} và ${s2} đồng cung tại ${p.name} (${p.chi}): ${desc}`
      });
    }
  };

  if (!isCoCuDong && !isCoNguyetDongLuong) {
    checkChinhTinhPair('Thiên Đồng', 'Cự Môn', 'Đồng Cự Đồng Cung', 'Khai Sáng Cực Nhọc Cách', 'Thiên Đồng phúc tinh kết hợp Cự Môn ám tinh, ban đầu gian nan thử thách, tự lực cánh sinh, hậu vận bộc phát thành tài.');
    checkChinhTinhPair('Thiên Đồng', 'Thiên Lương', 'Đồng Lương Đồng Cung', 'Phúc Thọ Song Toàn Cách', 'Thiên Đồng và Thiên Lương tương phùng, tính tình đôn hậu hiền lương, trường thọ an khang, gặp hung hóa cát.');
    checkChinhTinhPair('Thiên Đồng', 'Thái Âm', 'Đồng Âm Đồng Cung', 'Thanh Nhã Phú Túc Cách', 'Thiên Đồng hòa cùng Thái Âm, tính cách phong lưu thanh nhã, có duyên kinh doanh, tài lộc dồi dào.');
    checkChinhTinhPair('Thiên Cơ', 'Cự Môn', 'Cự Cơ Đồng Cung', 'Đa Mưu Trí Tuệ Cách', 'Thiên Cơ mưu lược cùng Cự Môn tài hùng biện, đầu óc sắc sảo, giỏi thương mại, công nghệ và hoạch định chiến lược.');
    checkChinhTinhPair('Thiên Cơ', 'Thiên Lương', 'Cơ Lương Đồng Cung', 'Thiện Nghệ Quân Sư Cách', 'Thiên Cơ trí tuệ cùng Thiên Lương chính trực, có tài tham mưu cố vấn, học thuật nghiên cứu hoặc y dược.');
  }

  if (!isTuPhuVuTuong) {
    checkChinhTinhPair('Vũ Khúc', 'Tham Lang', 'Vũ Tham Đồng Cung', 'Tiền Bần Hậu Phú Cách', 'Vũ Khúc tài tinh ngộ Tham Lang, tuổi trẻ tôi luyện vượt khó, ngoài 30 tuổi phát phúc phát tài mạnh mẽ.');
    checkChinhTinhPair('Vũ Khúc', 'Thiên Tướng', 'Vũ Tướng Đồng Cung', 'Tài Quyền Song Toàn Cách', 'Vũ Khúc nghiêm cẩn phối cùng Thiên Tướng quyền uy, năng lực quản trị xuất sắc, tiền bạc phân minh.');
    checkChinhTinhPair('Vũ Khúc', 'Thất Sát', 'Vũ Sát Đồng Cung', 'Quyết Đoán Cương Nghị Cách', 'Vũ Khúc và Thất Sát đồng cung, tính cách cương trực quyết đoán, tác phong mau lẹ, hợp tài chính, kỹ thuật, quân sự.');
    checkChinhTinhPair('Vũ Khúc', 'Thiên Phủ', 'Vũ Phủ Đồng Cung', 'Đại Phú Kho Tàng Cách', 'Hai đại tài tinh Vũ Khúc và Thiên Phủ tương hội, như kho vàng vững chắc, chủ về tài chính dồi dào vĩnh cửu.');
    checkChinhTinhPair('Tử Vi', 'Tham Lang', 'Tử Tham Đồng Cung', 'Đào Hoa Nghệ Thuật Cách', 'Tử Vi ngộ Tham Lang, đa tài đa nghệ, phong thái cuốn hút, có năng khiếu thẩm mỹ và giao thiệp rộng.');
    checkChinhTinhPair('Tử Vi', 'Phá Quân', 'Tử Phá Đồng Cung', 'Khai Phá Bạo Lực Cách', 'Tử Vi chế ngự Phá Quân, tinh thần cách tân mở lối, dám phá vỡ khuôn mẫu để dựng xây thành trì mới.');
    checkChinhTinhPair('Tử Vi', 'Thiên Tướng', 'Tử Tướng Đồng Cung', 'Uy Quyền Chính Trực Cách', 'Tử Vi cùng Thiên Tướng tọa thủ, phong độ đường hoàng đĩnh đạc, được tin cậy trao giữ trọng trách.');
    checkChinhTinhPair('Tử Vi', 'Thất Sát', 'Tử Sát Đồng Cung', 'Hóa Sát Vi Quyền Cách', 'Tử Vi ngộ Thất Sát, uy phong dũng lược, biến hung hiểm thành quyền bính, lãnh đạo kiên cường.');
  }

  checkChinhTinhPair('Liêm Trinh', 'Thiên Tướng', 'Liêm Tướng Đồng Cung', 'Chính Trực Khéo Léo Cách', 'Liêm Trinh nghiêm minh hội cùng Thiên Tướng nhân hậu, công tư phân minh, làm việc cẩn trọng.');
  checkChinhTinhPair('Liêm Trinh', 'Thất Sát', 'Liêm Sát Đồng Cung', 'Hùng Tâm Tráng Chí Cách', 'Liêm Trinh phối cùng Thất Sát, giàu tham vọng, ý chí kiên định, tôi luyện qua thử thách để thành danh.');
  checkChinhTinhPair('Liêm Trinh', 'Phá Quân', 'Liêm Phá Đồng Cung', 'Tiên Phong Biến Cách', 'Liêm Trinh gặp Phá Quân, tính tình khảng khái xông pha, thích đổi mới và khám phá những lĩnh vực mới.');
  checkChinhTinhPair('Liêm Trinh', 'Thiên Phủ', 'Liêm Phủ Đồng Cung', 'Phú Quý Khang Ninh Cách', 'Liêm Trinh cương nghị được Thiên Phủ bao bọc dung hòa, tài lộc tích tụ vững vàng, công danh hanh thông.');
  checkChinhTinhPair('Liêm Trinh', 'Tham Lang', 'Liêm Tham Đồng Cung', 'Đa Tài Phong Lưu Cách', 'Liêm Trinh cùng Tham Lang đồng cung, tư duy nghệ thuật phong phú, giao tiếp khéo léo, nhiều đam mê hoài bão.');

  // 11. MỆNH VÔ CHÍNH DIỆU
  if (menhMajors.length === 0) {
    cachCucList.push({
      name: 'Mệnh Vô Chính Diệu',
      type: 'Tùy Duyên Khai Vận Cách',
      description: `Cung Mệnh (${menhPalace.chi}) không có chính tinh tọa thủ: Tính tình linh hoạt uyển chuyển, dễ thích nghi với mọi hoàn cảnh, hấp thu tinh hoa từ các cung xung chiếu và tam hợp chiếu về.`
    });
  }

  // 12. ĐƠN THỦ TẠI MỆNH (chỉ hiển thị nếu Mệnh chưa thuộc các Đại Cách Tam Hợp trên)
  const hasOverarchingCach = isTuPhuVuTuong || isPhuTuongTrieuVien || isSatPhaTham || isCoNguyetDongLuong || isCoCuDong || isAmDuongLuong || isCuNhat;
  if (!hasOverarchingCach && menhMajors.length === 1) {
    const singleStar = menhMajors[0];
    if (['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thái Dương', 'Thái Âm', 'Thiên Cơ', 'Thiên Lương', 'Thất Sát'].includes(singleStar)) {
      cachCucList.push({
        name: `${singleStar} Đơn Thủ Mệnh (${menhPalace.chi})`,
        type: 'Độc Tọa Chuyên Nhất Cách',
        description: `Chính tinh ${singleStar} độc tọa thủ Mệnh tại ${menhPalace.chi}: Khí chất ${singleStar} thuần khiết, tính cách định hình rõ rệt, phát huy tối đa sở trường đặc trưng của ${singleStar}.`
      });
    }
  }

  return cachCucList;
}

export function generateInterpretation(chart: TuViChart): TuViInterpretation {
  const { meta, palaces, userInfo } = chart;
  const menhPalace = palaces.find(p => p.isMenh);

  // 1. Phân tích Bộ Sao Phụ Tinh Cát & Hung toàn diện
  const starGroupAnalysis = analyzeStarGroups(palaces);

  // 2. Overview
  const elementRel = evaluateElementRelation(meta.napAmMenh.element, meta.cuc.element);
  const overview = {
    summary: `Lá số Tử Vi mệnh ${meta.napAmMenh.name} (${meta.napAmMenh.element}), ${meta.cuc.name}. Quan hệ Mệnh & Cục: ${elementRel.status}. ${meta.yinYangGender}. ${meta.thanCu}. Cán cân phụ tinh: ${starGroupAnalysis.statistics.balanceStatus}.`,
    elementRelation: elementRel,
    thanCuDetail: `${meta.thanCu}: Định hướng cuộc sống và tư tưởng trung vận của gia chủ hội tụ mạnh mẽ tại cung này.`
  };

  // 3. Palace Readings
  const palaceReadings = palaces.map(p => {
    const majorText = p.majorStars.length > 0
      ? p.majorStars.map(s => `${s.name} (${s.strength})`).join(', ')
      : 'Không Cung (Chính tinh tọa thủ trống, hội chiếu chính tinh đối xung)';
    
    const goodMinors = p.minorStars.filter(s => s.type === 'Good' || s.type === 'TuHoa').map(s => s.name).join(', ');
    const badMinors = p.minorStars.filter(s => s.type === 'Bad').map(s => s.name).join(', ');

    const palaceGroups = getPalaceStarGroups(p.index, starGroupAnalysis, palaces);

    let detail = `Cung ${p.name} tại ${p.chi} (${p.can} ${p.chi}). `;
    detail += `Chính tinh: ${majorText}. `;
    if (palaceGroups.good.length > 0) {
      detail += `Hội tụ bộ cát tinh: ${palaceGroups.good.join(', ')}. `;
    } else if (goodMinors) {
      detail += `Cát tinh hội tụ: ${goodMinors}. `;
    }
    if (palaceGroups.bad.length > 0) {
      detail += `Ảnh hưởng bộ hung sát: ${palaceGroups.bad.join(', ')}. `;
    } else if (badMinors) {
      detail += `Hung sát tinh ảnh hưởng: ${badMinors}. `;
    }
    if (p.tuan) detail += `Gặp Tuần Không hãm bù giải nguy. `;
    if (p.triet) detail += `Gặp Triệt Không án ngữ. `;

    return {
      name: p.name,
      chi: p.chi,
      can: p.can,
      isMenh: p.isMenh,
      isThan: p.isThan,
      daiVan: p.daiVan,
      reading: detail,
      goodGroups: palaceGroups.good,
      badGroups: palaceGroups.bad
    };
  });

  // 4. Cách Cục
  const cachCuc = detectCachCuc(palaces);

  // 5. Vận Hạn
  const currentAge = (userInfo.viewYear || 2026) - userInfo.year + 1;
  const sortedPalaces = [...palaces].sort((a, b) => a.daiVan - b.daiVan);
  const currentDaiVanPalace = sortedPalaces.filter(p => p.daiVan <= currentAge).pop() || menhPalace;

  const vanHan = {
    currentAge,
    currentDaiVanPalace: currentDaiVanPalace ? currentDaiVanPalace.name : 'Mệnh',
    daiVanText: currentDaiVanPalace
      ? `Đại Vận hiện tại (${currentDaiVanPalace.daiVan} - ${currentDaiVanPalace.daiVan + 9} tuổi) tại Cung ${currentDaiVanPalace.name} (${currentDaiVanPalace.can} ${currentDaiVanPalace.chi}). Đây là giai đoạn mang tính chiến lược trong cuộc đời.`
      : '',
    tieuVanText: `Tiểu Vận năm xem ${userInfo.viewYear} chủ về việc mở rộng công danh, giữ gìn tài chính và quan tâm sức khỏe bản thân.`
  };

  // 6. Phân tích Tam Minh (Thiên - Địa - Nhân) & Kế Hoạch Cải Mệnh
  const tamMinh = analyzeTamMinh(chart, starGroupAnalysis);

  return {
    overview,
    palaceReadings,
    cachCuc,
    vanHan,
    starGroupAnalysis,
    tamMinh
  };
}
