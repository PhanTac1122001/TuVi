import React from 'react';
import { PalaceData, ChartResult, Star } from '../../types/tuvi.types';

interface PalaceInspectorModalProps {
  palaceIndex: number | null;
  chart: ChartResult;
  onClose: () => void;
  onStarClick?: (star: Star) => void;
}

export const PalaceInspectorModal: React.FC<PalaceInspectorModalProps> = ({
  palaceIndex,
  chart,
  onClose,
  onStarClick
}) => {
  if (palaceIndex === null) return null;

  const palace = chart.palaces[palaceIndex];
  const xungChieu = chart.palaces[(palaceIndex + 6) % 12];
  const tamHop1 = chart.palaces[(palaceIndex + 4) % 12];
  const tamHop2 = chart.palaces[(palaceIndex + 8) % 12];

  const majorStars = palace.stars.filter(s => s.category === 'Chính tinh');
  const catStars = palace.stars.filter(s => s.category !== 'Chính tinh' && s.isGood);
  const hungStars = palace.stars.filter(s => s.category !== 'Chính tinh' && !s.isGood);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">
              Cung {palace.name} ({palace.can} {palace.chi})
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Đại hạn: {palace.daiHan} tuổi • Tiểu hạn: {palace.tieuHanChi}
              {palace.hasTriet && ' • [Triệt Không]'}
              {palace.hasTuan && ' • [Tuần Không]'}
            </p>
          </div>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        {/* 1. Các Chính Tinh */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ color: 'var(--gold-light)', marginBottom: '8px', fontSize: '0.95rem' }}>
            🌟 Thập Tứ Chính Tinh
          </h4>
          {majorStars.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {majorStars.map((star, i) => (
                <div 
                  key={i} 
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  onClick={() => onStarClick?.(star)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                    <span className={`element-${star.element.toLowerCase()}`}>
                      {star.name} ({star.brightness || 'Bình'}) - Hành {star.element}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#38bdf8' }}>Tra cứu chi tiết &rarr;</span>
                  </div>
                  {star.meaning && (
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {star.meaning}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.85rem' }}>
              Cung Vô Chính Diệu (ảnh hưởng mạnh bởi chính tinh cung Xung Chiếu {xungChieu.chi}).
            </p>
          )}
        </div>

        {/* 2. Cát Tinh & Phụ Tinh Tốt */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ color: '#4ade80', marginBottom: '8px', fontSize: '0.95rem' }}>
            🍀 Cát Tinh & Quý Tinh Hội Tụ ({catStars.length})
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {catStars.map((star, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(74, 222, 128, 0.1)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
                onClick={() => onStarClick?.(star)}
                title={star.meaning}
              >
                {star.name} ({star.element})
              </span>
            ))}
          </div>
        </div>

        {/* 3. Sát Tinh & Hung Tinh */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ color: '#f87171', marginBottom: '8px', fontSize: '0.95rem' }}>
            ⚠️ Sát Tinh & Ám Tinh Cần Hóa Giải ({hungStars.length})
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {hungStars.map((star, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(248, 113, 113, 0.1)',
                  border: '1px solid rgba(248, 113, 113, 0.3)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
                onClick={() => onStarClick?.(star)}
                title={star.meaning}
              >
                {star.name} ({star.element})
              </span>
            ))}
          </div>
        </div>

        {/* 4. Tam Phương Tứ Chính */}
        <div style={{ borderTop: '1px solid var(--border-gold)', paddingTop: '12px' }}>
          <h4 style={{ color: 'var(--gold-main)', marginBottom: '8px', fontSize: '0.95rem' }}>
            🎯 Tam Phương Tứ Chính Chiếu Về
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', fontSize: '0.8rem' }}>
            <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '6px 8px', borderRadius: '4px' }}>
              <div style={{ color: '#fb7185', fontWeight: 600 }}>Xung Chiếu</div>
              <div>Cung {xungChieu.name} ({xungChieu.chi})</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                {xungChieu.stars.filter(s => s.category === 'Chính tinh').map(s => s.name).join(', ') || 'Vô chính diệu'}
              </div>
            </div>

            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '6px 8px', borderRadius: '4px' }}>
              <div style={{ color: '#38bdf8', fontWeight: 600 }}>Tam Hợp 1</div>
              <div>Cung {tamHop1.name} ({tamHop1.chi})</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                {tamHop1.stars.filter(s => s.category === 'Chính tinh').map(s => s.name).join(', ') || 'Vô chính diệu'}
              </div>
            </div>

            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '6px 8px', borderRadius: '4px' }}>
              <div style={{ color: '#38bdf8', fontWeight: 600 }}>Tam Hợp 2</div>
              <div>Cung {tamHop2.name} ({tamHop2.chi})</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                {tamHop2.stars.filter(s => s.category === 'Chính tinh').map(s => s.name).join(', ') || 'Vô chính diệu'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
