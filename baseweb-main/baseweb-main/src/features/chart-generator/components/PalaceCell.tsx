import React from 'react';
import { TuViPalace, MinorStar } from '../types/chart.types';

const BOLD_STARS = new Set([
  'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Hóa Kỵ',
  'Lộc Tồn', 'Kình Dương', 'Đà La', 'Cô Thần', 'Quả Tú', 'Phá Toái',
  'Địa Không', 'Địa Kiếp', 'Hỏa Tinh', 'Linh Tinh',
  'Thiên Không', 'Thiên Hình', 'Đại Hao', 'Tiểu Hao',
  'Thiên Khôi', 'Thiên Việt', 'Đào Hoa', 'Văn Xương', 'Văn Khúc',
  'Tả Phù', 'Hữu Bật', 'Hồng Loan', 'Thiên Hỷ',
  'Thiên Diêu', 'Thiên Mã'
]);

function isBoldStar(s: MinorStar): boolean {
  const name = s.rawName || s.name;
  const cleanName = name.replace(/\(.\)/g, '').trim();
  return BOLD_STARS.has(cleanName) || BOLD_STARS.has(name);
}

function getElementClass(element: string): string {
  switch (element) {
    case 'Kim': return 'element-kim';
    case 'Mộc': return 'element-moc';
    case 'Thủy': return 'element-thuy';
    case 'Hỏa': return 'element-hoa';
    case 'Thổ': return 'element-tho';
    default: return 'element-kim';
  }
}

const CHI_ELEMENT_MAP: Record<string, string> = {
  'Tý': 'element-thuy', 'Sửu': 'element-tho', 'Dần': 'element-moc', 'Mão': 'element-moc',
  'Thìn': 'element-tho', 'Tỵ': 'element-hoa', 'Ngọ': 'element-hoa', 'Mùi': 'element-tho',
  'Thân': 'element-kim', 'Dậu': 'element-kim', 'Tuất': 'element-tho', 'Hợi': 'element-thuy'
};

interface PalaceCellProps {
  palace: TuViPalace;
  children?: React.ReactNode;
}

export const PalaceCell: React.FC<PalaceCellProps> = ({ palace, children }) => {
  let nameText = palace.name;
  if (palace.isThan) nameText += ' <THÂN>';

  const leftStars = palace.minorStars.filter(s => s.type === 'Good' || s.type === 'TuHoa');
  leftStars.sort((a, b) => (isBoldStar(b) ? 1 : 0) - (isBoldStar(a) ? 1 : 0));

  const rightStars = palace.minorStars.filter(
    s => s.type === 'Bad' || s.type === 'Ring' || s.type === 'Luu' || s.type === 'Neutral'
  );
  rightStars.sort((a, b) => (isBoldStar(b) ? 1 : 0) - (isBoldStar(a) ? 1 : 0));

  const chiElementClass = CHI_ELEMENT_MAP[palace.chi] || 'element-kim';
  const chiDisplayName = palace.chi === 'Tý' ? 'Tí' : palace.chi;
  const canChiShorthand = `${palace.canShorthand}${chiDisplayName}`;

  return (
    <div className={`palace-cell pos-chi-${palace.index} ${palace.isMenh ? 'is-menh' : ''}`}>
      {/* Header */}
      <div className="palace-header">
        <span className={`can-shorthand ${chiElementClass}`}>{canChiShorthand}</span>
        <span className="palace-title">{nameText}</span>
        <span className="dai-van-num">{palace.daiVan}</span>
      </div>

      {/* Major Stars */}
      <div className="major-stars-container">
        {palace.majorStars.map((s, idx) => (
          <div key={idx} className={`major-star-name ${getElementClass(s.element)}`}>
            {s.name}
            <span className="strength-tag">({s.strength})</span>
          </div>
        ))}
      </div>

      {/* Minor Stars 2-Column Grid */}
      <div className="minor-stars-grid">
        <div className="stars-col-left">
          {leftStars.map((s, idx) => (
            <div
              key={idx}
              className={`minor-star ${getElementClass(s.element)} ${isBoldStar(s) ? 'bold-star' : ''}`}
            >
              {s.name}
            </div>
          ))}
        </div>
        <div className="stars-col-right">
          {rightStars.map((s, idx) => (
            <div
              key={idx}
              className={`minor-star ${getElementClass(s.element)} ${isBoldStar(s) ? 'bold-star' : ''}`}
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="palace-footer">
        <span className="footer-chi">{palace.tieuVanChi}</span>
        <span className="footer-trang-sinh">{palace.trangSinhStar}</span>
        <span className="footer-tieu-van">{palace.tieuVanMonth}</span>
      </div>

      {/* Border Badges (Tuần / Triệt) */}
      {children}
    </div>
  );
};
