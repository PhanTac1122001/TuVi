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

export function detectCachCuc(palaces: TuViPalace[]): CachCucItem[] {
  const menhPalace = palaces.find(p => p.isMenh);
  const quanPalace = palaces.find(p => p.name === 'Quan Lộc');
  const taiPalace = palaces.find(p => p.name === 'Tài Bạch');

  const mainStarsInTamHop = [
    ...(menhPalace ? menhPalace.majorStars.map(s => s.name) : []),
    ...(quanPalace ? quanPalace.majorStars.map(s => s.name) : []),
    ...(taiPalace ? taiPalace.majorStars.map(s => s.name) : [])
  ];

  const cachCucList: CachCucItem[] = [];

  if (['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng'].some(s => mainStarsInTamHop.includes(s))) {
    cachCucList.push({
      name: 'Tử Phủ Vũ Tướng',
      type: 'Thượng Cách',
      description: 'Mẫu người lãnh đạo, giàu uy quyền, công danh hiển đạt và tài lộc vĩnh cửu.'
    });
  }

  if (['Thất Sát', 'Phá Quân', 'Tham Lang'].some(s => mainStarsInTamHop.includes(s))) {
    cachCucList.push({
      name: 'Sát Phá Tham',
      type: 'Biến Động Cách',
      description: 'Mẫu người năng động, dám nghĩ dám làm, giàu tính đột phá, thành công lớn qua thăng trầm.'
    });
  }

  if (['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'].some(s => mainStarsInTamHop.includes(s))) {
    cachCucList.push({
      name: 'Cơ Nguyệt Đồng Lương',
      type: 'Tài Trí Cách',
      description: 'Mẫu người trí tuệ, mưu lược, thích hợp ngành nghề chuyên môn, văn phòng, giáo dục, tư vấn.'
    });
  }

  if (mainStarsInTamHop.includes('Thái Dương') && mainStarsInTamHop.includes('Thái Âm')) {
    cachCucList.push({
      name: 'Nhật Nguyệt Đồng Lương / Phục Mẫu',
      type: 'Quang Minh Cách',
      description: 'Nhật Nguyệt chiếu sáng, chủ về sự thông minh xuất chúng, tư tưởng vượt trội.'
    });
  }

  return cachCucList;
}

export function generateInterpretation(chart: TuViChart): TuViInterpretation {
  const { meta, palaces, userInfo } = chart;
  const menhPalace = palaces.find(p => p.isMenh);

  // 1. Overview
  const elementRel = evaluateElementRelation(meta.napAmMenh.element, meta.cuc.element);
  const overview = {
    summary: `Lá số Tử Vi mệnh ${meta.napAmMenh.name} (${meta.napAmMenh.element}), ${meta.cuc.name}. Quan hệ Mệnh & Cục: ${elementRel.status}. ${meta.yinYangGender}. ${meta.thanCu}.`,
    elementRelation: elementRel,
    thanCuDetail: `${meta.thanCu}: Định hướng cuộc sống và tư tưởng trung vận của gia chủ hội tụ mạnh mẽ tại cung này.`
  };

  // 2. Palace Readings
  const palaceReadings = palaces.map(p => {
    const majorText = p.majorStars.length > 0
      ? p.majorStars.map(s => `${s.name} (${s.strength})`).join(', ')
      : 'Không Cung (Chính tinh tọa thủ trống, hội chiếu chính tinh đối xung)';
    
    const goodMinors = p.minorStars.filter(s => s.type === 'Good' || s.type === 'TuHoa').map(s => s.name).join(', ');
    const badMinors = p.minorStars.filter(s => s.type === 'Bad').map(s => s.name).join(', ');

    let detail = `Cung ${p.name} tại ${p.chi} (${p.can} ${p.chi}). `;
    detail += `Chính tinh: ${majorText}. `;
    if (goodMinors) detail += `Cát tinh hội tụ: ${goodMinors}. `;
    if (badMinors) detail += `Hung sát tinh ảnh hưởng: ${badMinors}. `;
    if (p.tuan) detail += `Gặp Tuần Không hãm bù giải nguy. `;
    if (p.triet) detail += `Gặp Triệt Không án ngữ. `;

    return {
      name: p.name,
      chi: p.chi,
      can: p.can,
      isMenh: p.isMenh,
      isThan: p.isThan,
      daiVan: p.daiVan,
      reading: detail
    };
  });

  // 3. Cách Cục
  const cachCuc = detectCachCuc(palaces);

  // 4. Vận Hạn
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

  return {
    overview,
    palaceReadings,
    cachCuc,
    vanHan
  };
}
