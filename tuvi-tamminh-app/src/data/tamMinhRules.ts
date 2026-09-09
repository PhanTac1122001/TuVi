import { NguHanh, Can, Chi } from '../types/tuvi.types';

export interface TamMinhPrinciple {
  pillar: 'Thiên Minh' | 'Địa Minh' | 'Nhân Minh';
  concept: string;
  description: string;
  focus: string;
}

export const TAM_MINH_PRINCIPLES: TamMinhPrinciple[] = [
  {
    pillar: 'Thiên Minh',
    concept: 'Sáng tỏ Thiên phần (Minh Thiên)',
    description: 'Thấu hiểu căn cơ, tố chất bẩm sinh, sở trường tự nhiên và giới hạn vốn có do cấu trúc Mệnh - Thân - Cục quy định. Không ảo tưởng cũng không tự ti.',
    focus: 'Khám phá tiềm năng tiềm ẩn, nhận diện cốt cách và điểm mạnh/điểm yếu gốc rễ.'
  },
  {
    pillar: 'Địa Minh',
    concept: 'Sáng tỏ Địa cục (Minh Địa)',
    description: 'Hiểu rõ hoàn cảnh xã hội, thời cuộc, chu kỳ cát - hung thuận - nghịch của đại vận 10 năm và tiểu vận từng năm. Nắm bắt thời thế để thuận thời tiến thoái.',
    focus: 'Định vị chu kỳ vận động, tận dụng cơ hội đắc thời và phòng ngừa rủi ro nghịch cảnh.'
  },
  {
    pillar: 'Nhân Minh',
    concept: 'Sáng tỏ Nhân hành (Minh Nhân)',
    description: 'Phát huy năng lực tự chủ lựa chọn, ý chí kiên định và hành động đúng đắn. Tam Minh khẳng định số mệnh là bức tranh nền, còn hành động con người là nét vẽ hoàn thiện.',
    focus: 'Định hướng hành vi, tu dưỡng nhân cách, chuyển hóa nghiệp duyên bằng hành động cụ thể.'
  }
];

export const NGU_HANH_RELATIONS: Record<NguHanh, { sinh: NguHanh; khac: NguHanh; duocSinh: NguHanh; biKhac: NguHanh }> = {
  'Kim': { sinh: 'Thủy', khac: 'Mộc', duocSinh: 'Thổ', biKhac: 'Hỏa' },
  'Thủy': { sinh: 'Mộc', khac: 'Hỏa', duocSinh: 'Kim', biKhac: 'Thổ' },
  'Mộc': { sinh: 'Hỏa', khac: 'Thổ', duocSinh: 'Thủy', biKhac: 'Kim' },
  'Hỏa': { sinh: 'Thổ', khac: 'Kim', duocSinh: 'Mộc', biKhac: 'Thủy' },
  'Thổ': { sinh: 'Kim', khac: 'Thủy', duocSinh: 'Hỏa', biKhac: 'Mộc' }
};

export function checkCucMenhRelation(menhElement: NguHanh, cucElement: NguHanh): {
  type: 'TuongSinh' | 'TuongKhac' | 'BinhHoa' | 'CucKhacMenh' | 'MenhKhacCuc';
  title: string;
  description: string;
} {
  if (menhElement === cucElement) {
    return {
      type: 'BinhHoa',
      title: 'Mệnh Cục Bình Hòa',
      description: 'Bản mệnh và môi trường tương đồng, cuộc đời diễn ra êm ả, dễ thích nghi với hoàn cảnh sống.'
    };
  }

  if (NGU_HANH_RELATIONS[cucElement].sinh === menhElement) {
    return {
      type: 'TuongSinh',
      title: 'Cục Sinh Mệnh (Đại Cát)',
      description: 'Môi trường và thời thế luôn trợ lực cho bản mệnh. Người này đi đến đâu cũng gặp may mắn, quý nhân nâng đỡ, hoàn cảnh dung dưỡng tài năng.'
    };
  }

  if (NGU_HANH_RELATIONS[menhElement].sinh === cucElement) {
    return {
      type: 'TuongSinh',
      title: 'Mệnh Sinh Cục',
      description: 'Bản thân phải cống hiến, hao tâm tổn lực cho môi trường xã hội hoặc gia đình trước khi gặt hái thành quả. Người sống trách nhiệm và vị tha.'
    };
  }

  if (NGU_HANH_RELATIONS[cucElement].khac === menhElement) {
    return {
      type: 'CucKhacMenh',
      title: 'Cục Khắc Mệnh (Nghịch cảnh thử thách)',
      description: 'Hoàn cảnh môi trường thường gây khó khăn, chèn ép bản thân. Phải vượt qua sóng gió gian nan mới khẳng định được bản lĩnh phi thường.'
    };
  }

  return {
    type: 'MenhKhacCuc',
    title: 'Mệnh Khắc Cục (Nghị lực quật cường)',
    description: 'Bản mệnh mạnh mẽ hơn hoàn cảnh, luôn tự mình xoay chuyển thời thế, vượt lên trên nghịch cảnh bằng ý chí và tài năng độc lập.'
  };
}
