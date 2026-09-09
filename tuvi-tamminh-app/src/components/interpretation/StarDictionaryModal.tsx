import React, { useState } from 'react';
import { Star } from '../../types/tuvi.types';
import { STARS_118_DICTIONARY, StarDictionaryEntry } from '../../data/stars118Data';

interface StarDictionaryModalProps {
  initialStarName?: string | null;
  onClose: () => void;
}

export const StarDictionaryModal: React.FC<StarDictionaryModalProps> = ({
  initialStarName,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStarName, setSelectedStarName] = useState<string>(
    initialStarName || 'Tử Vi'
  );

  const starList = Object.values(STARS_118_DICTIONARY).filter(star => 
    star.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    star.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    star.element.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentStar: StarDictionaryEntry | undefined = STARS_118_DICTIONARY[selectedStarName] || starList[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '850px', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h3 className="modal-title">📖 Từ Điển 118 Sao - Tử Vi Tam Minh</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Tra cứu Vận hạn, Vật dụng, Bệnh lý, Tướng mạo theo tài liệu gốc
            </p>
          </div>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <div style={{ display: 'flex', gap: '20px', minHeight: '400px' }}>
          {/* Left Column: Search & List */}
          <div style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="text"
              placeholder="Tìm kiếm sao (vd: Tử Vi, Hỏa Tinh...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: '6px',
                padding: '8px 12px',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />

            <div style={{
              flex: 1,
              overflowY: 'auto',
              maxHeight: '480px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px',
              padding: '4px'
            }}>
              {starList.map((s) => (
                <div
                  key={s.name}
                  onClick={() => setSelectedStarName(s.name)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    background: s.name === currentStar?.name ? 'rgba(212,175,55,0.2)' : 'transparent',
                    borderLeft: s.name === currentStar?.name ? '3px solid var(--gold-main)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{s.element}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Card */}
          {currentStar && (
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(212,175,55,0.2)',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              overflowY: 'auto'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h2 style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold-main)', fontSize: '1.6rem' }}>
                    {currentStar.name}
                  </h2>
                  <span style={{
                    background: currentStar.isGood ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)',
                    color: currentStar.isGood ? '#4ade80' : '#f87171',
                    border: `1px solid ${currentStar.isGood ? '#4ade80' : '#f87171'}`,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {currentStar.category} • Hành {currentStar.element}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.92rem', lineHeight: '1.5' }}>
                  {currentStar.meaning}
                </p>
              </div>

              {/* Vận hạn */}
              <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '12px', borderRadius: '6px' }}>
                <div style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                  ⏳ Ứng Với Vận Hạn:
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  {currentStar.vanHan}
                </div>
              </div>

              {/* Vật dụng tương ứng */}
              <div style={{ background: 'rgba(234, 179, 8, 0.08)', padding: '12px', borderRadius: '6px' }}>
                <div style={{ color: '#facc15', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                  🏺 Vật Dụng / Đồ Vật Tương Ứng:
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  {currentStar.vatDung}
                </div>
              </div>

              {/* Bệnh lý */}
              <div style={{ background: 'rgba(244, 63, 94, 0.08)', padding: '12px', borderRadius: '6px' }}>
                <div style={{ color: '#fb7185', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                  🩺 Bệnh Lý & Bộ Phận Cơ Thể:
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  {currentStar.benhLy}
                </div>
              </div>

              {/* Tướng mạo */}
              <div style={{ background: 'rgba(168, 85, 247, 0.08)', padding: '12px', borderRadius: '6px' }}>
                <div style={{ color: '#c084fc', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                  👤 Dấu Hiệu Tướng Mạo:
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  {currentStar.tuongMao}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
