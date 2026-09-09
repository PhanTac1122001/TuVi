import React from 'react';
import { PalaceData, Star } from '../../types/tuvi.types';

interface PalaceCellProps {
  palace: PalaceData;
  relationClass?: string; // 'selected' | 'tam-hop' | 'xung-chieu' | 'nhi-hop' | ''
  onClick: (index: number) => void;
  onStarClick?: (star: Star) => void;
}

export const PalaceCell: React.FC<PalaceCellProps> = ({
  palace,
  relationClass = '',
  onClick,
  onStarClick
}) => {
  const majorStars = palace.stars.filter(s => s.category === 'Chính tinh');
  const goodAuxStars = palace.stars.filter(s => s.category !== 'Chính tinh' && s.isGood);
  const badAuxStars = palace.stars.filter(s => s.category !== 'Chính tinh' && !s.isGood);

  const getElementClass = (element: string) => {
    switch (element) {
      case 'Kim': return 'element-kim';
      case 'Mộc': return 'element-moc';
      case 'Thủy': return 'element-thuy';
      case 'Hỏa': return 'element-hoa';
      case 'Thổ': return 'element-tho';
      default: return '';
    }
  };

  const getBrightnessClass = (brightness?: string) => {
    switch (brightness) {
      case 'Miếu': return 'brightness-mieu';
      case 'Vượng': return 'brightness-vuong';
      case 'Đắc': return 'brightness-dac';
      case 'Bình': return 'brightness-binh';
      case 'Hãm': return 'brightness-ham';
      default: return '';
    }
  };

  return (
    <div 
      className={`palace-cell ${relationClass}`}
      onClick={() => onClick(palace.index)}
    >
      {/* Header */}
      <div className="palace-header">
        <div className="palace-role">
          <span>{palace.name}</span>
          {palace.isMenh && <span className="badge-menh">MỆNH</span>}
          {palace.isThan && <span className="badge-than">THÂN</span>}
        </div>
        <div className="palace-chi">
          {palace.can} {palace.chi}
        </div>
      </div>

      {/* Body: Stars */}
      <div className="palace-body">
        {/* Major Stars (Left) */}
        <div className="major-stars-column">
          {majorStars.length > 0 ? (
            majorStars.map((star, idx) => (
              <div 
                key={idx} 
                className={`star-item ${getElementClass(star.element)}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onStarClick?.(star);
                }}
                title={star.meaning || star.name}
              >
                <span className="star-name">{star.name}</span>
                {star.brightness && (
                  <span className={`star-brightness ${getBrightnessClass(star.brightness)}`}>
                    ({star.brightness})
                  </span>
                )}
              </div>
            ))
          ) : (
            <div style={{ color: '#64748b', fontStyle: 'italic', fontSize: '0.75rem' }}>
              (Vô chính diệu)
            </div>
          )}
        </div>

        {/* Auxiliary Stars (Right) */}
        <div className="auxiliary-stars-column">
          {/* Cát tinh & Vòng tốt */}
          {goodAuxStars.slice(0, 5).map((star, idx) => (
            <div 
              key={idx} 
              className={`star-item ${getElementClass(star.element)}`}
              onClick={(e) => {
                e.stopPropagation();
                onStarClick?.(star);
              }}
              title={star.meaning || star.name}
            >
              <span>{star.name}</span>
            </div>
          ))}

          {/* Sát tinh & Hung tinh */}
          {badAuxStars.slice(0, 5).map((star, idx) => (
            <div 
              key={idx} 
              className={`star-item ${getElementClass(star.element)}`}
              style={{ opacity: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onStarClick?.(star);
              }}
              title={star.meaning || star.name}
            >
              <span>{star.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="palace-footer">
        <div className="tuan-triet-flags">
          {palace.hasTriet && <span className="flag-triet">TRIỆT</span>}
          {palace.hasTuan && <span className="flag-tuan">TUẦN</span>}
        </div>
        <div>
          <span>ĐH: {palace.daiHan}</span>
          <span style={{ marginLeft: '6px', color: '#cbd5e1' }}>TH: {palace.tieuHanChi}</span>
        </div>
      </div>
    </div>
  );
};
