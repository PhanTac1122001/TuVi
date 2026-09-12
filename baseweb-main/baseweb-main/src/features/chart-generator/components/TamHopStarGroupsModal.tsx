import React, { useEffect, useState } from 'react';
import { TuViPalace, StarGroupItem } from '../types/chart.types';
import { X, Sparkles, AlertTriangle, ShieldCheck, MapPin, Layers } from 'lucide-react';

interface TamHopStarGroupsModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetPalace: TuViPalace;
  tamHopChiString: string;
  tamHopPalaces: TuViPalace[];
  goodGroups: StarGroupItem[];
  badGroups: StarGroupItem[];
}

export const TamHopStarGroupsModal: React.FC<TamHopStarGroupsModalProps> = ({
  isOpen,
  onClose,
  targetPalace,
  tamHopChiString,
  tamHopPalaces,
  goodGroups,
  badGroups
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'good' | 'bad'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalCount = goodGroups.length + badGroups.length;
  const filteredGroups = activeFilter === 'all' 
    ? [...goodGroups, ...badGroups]
    : (activeFilter === 'good' ? goodGroups : badGroups);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(26, 22, 21, 0.72)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="hide-scrollbar"
        style={{
          background: 'linear-gradient(145deg, #fffefb 0%, #f7f2e8 100%)',
          border: '2px double #c5a059',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(197, 160, 89, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(180, 83, 9, 0.04) 100%)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: '#f0fdf4',
                  color: '#166534',
                  border: '1px solid #bbf7d0',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Layers size={13} />
                Hội Tụ Tam Hợp
              </span>
              <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#78350f' }}>
                ✦ CÁC BỘ PHỤ TINH TAM HỢP CUNG {targetPalace.name.toUpperCase()}
              </span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#854d0e', marginTop: '3px' }}>
              Thế tam hợp: <strong>{tamHopChiString}</strong> ({tamHopPalaces.map(p => `${p.name} tại ${p.chi}`).join(' • ')})
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#854d0e',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}
            title="Đóng (ESC)"
          >
            <X size={20} />
          </button>
        </div>

        {/* 3 Cung trong Tam Hợp */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            background: 'rgba(247, 242, 232, 0.65)',
            borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '8px'
          }}
        >
          {tamHopPalaces.map((p, idx) => {
            const isTarget = p.index === targetPalace.index;
            return (
              <div
                key={p.index}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  background: isTarget ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                  border: isTarget ? '1.5px solid #c5a059' : '1px solid rgba(197, 160, 89, 0.3)',
                  boxShadow: isTarget ? '0 2px 4px rgba(180, 83, 9, 0.1)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: isTarget ? '#b45309' : '#57534e' }}>
                    {isTarget ? '★ Tiêu Điểm' : `Tam Hợp #${idx + 1}`}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#78716c', fontWeight: 600 }}>
                    Cung {p.chi}
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#292524' }}>
                  {p.name} {p.isThan ? '<Thân>' : ''}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#78350f', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {p.majorStars.length > 0 ? p.majorStars.map(s => `${s.name} (${s.strength})`).join(' • ') : 'Vô Chính Diệu'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Pills */}
        <div
          style={{
            padding: '0.65rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
            background: '#ffffff',
            flexWrap: 'wrap'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              border: activeFilter === 'all' ? '1px solid #c5a059' : '1px solid #e7e5e4',
              background: activeFilter === 'all' ? 'rgba(217, 119, 6, 0.12)' : '#f5f5f4',
              color: activeFilter === 'all' ? '#78350f' : '#57534e',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Tất Cả ({totalCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('good')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              border: activeFilter === 'good' ? '1px solid #16a34a' : '1px solid #e7e5e4',
              background: activeFilter === 'good' ? '#f0fdf4' : '#f5f5f4',
              color: activeFilter === 'good' ? '#166534' : '#57534e',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Cát Tinh Đắc Cách ({goodGroups.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('bad')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              border: activeFilter === 'bad' ? '1px solid #dc2626' : '1px solid #e7e5e4',
              background: activeFilter === 'bad' ? '#fef2f2' : '#f5f5f4',
              color: activeFilter === 'bad' ? '#991b1b' : '#57534e',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Hung Sát Cần Lưu Ý ({badGroups.length})
          </button>
        </div>

        {/* Content list */}
        <div
          style={{
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.9rem'
          }}
        >
          {filteredGroups.length > 0 ? (
            filteredGroups.map((g, idx) => {
              const isGood = g.type === 'good';
              const isDongCung = g.scope === 'Đồng Cung';

              return (
                <div
                  key={`${g.id}-${idx}`}
                  style={{
                    background: '#ffffff',
                    border: `1px solid ${isGood ? 'rgba(22, 163, 74, 0.35)' : 'rgba(220, 38, 38, 0.35)'}`,
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  {/* Top line: name & badges */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: isGood ? '#f0fdf4' : '#fef2f2',
                          color: isGood ? '#15803d' : '#b91c1c',
                          border: `1px solid ${isGood ? '#bbf7d0' : '#fecaca'}`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        {isGood ? <Sparkles size={11} /> : <AlertTriangle size={11} />}
                        {isGood ? 'Cát Tinh' : 'Hung Sát'}
                      </span>

                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: isDongCung ? 'rgba(217, 119, 6, 0.12)' : 'rgba(59, 130, 246, 0.1)',
                          color: isDongCung ? '#9a3412' : '#1d4ed8',
                          border: `1px solid ${isDongCung ? 'rgba(217, 119, 6, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                        }}
                      >
                        {isDongCung ? '★ Tọa Thủ Đồng Cung' : '⟲ Tam Hợp Hội Chiếu'}
                      </span>

                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: '#f5f5f4',
                          color: '#57534e'
                        }}
                      >
                        {g.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div style={{ fontSize: '0.96rem', fontWeight: 800, color: isGood ? '#15803d' : '#b91c1c' }}>
                    ✦ {g.name}
                  </div>

                  {/* Vị trí các sao trong tam hợp */}
                  {g.prominentPalaces && g.prominentPalaces.length > 0 && (
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: '#44403c',
                        background: 'rgba(247, 242, 232, 0.65)',
                        padding: '5px 8px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        flexWrap: 'wrap'
                      }}
                    >
                      <MapPin size={13} style={{ color: '#b45309', flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: '#78350f' }}>Phân bố:</span>
                      <span>{g.prominentPalaces.join(' • ')}</span>
                    </div>
                  )}

                  {/* Effect */}
                  <div
                    style={{
                      fontSize: '0.82rem',
                      lineHeight: '1.45',
                      color: '#292524',
                      background: isGood ? 'rgba(240, 253, 244, 0.45)' : 'rgba(254, 242, 242, 0.45)',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      borderLeft: `3px solid ${isGood ? '#16a34a' : '#dc2626'}`
                    }}
                  >
                    <strong>Luận giải: </strong>
                    {g.effect}
                  </div>

                  {/* Remedy if bad */}
                  {g.remedy && (
                    <div
                      style={{
                        fontSize: '0.78rem',
                        lineHeight: '1.4',
                        color: '#991b1b',
                        background: '#fef2f2',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px'
                      }}
                    >
                      <ShieldCheck size={14} style={{ flexShrink: 0, marginTop: '2px', color: '#dc2626' }} />
                      <div>
                        <strong>Phương thức hóa giải: </strong>
                        {g.remedy}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                color: '#78716c',
                fontSize: '0.85rem',
                fontStyle: 'italic'
              }}
            >
              Không tìm thấy bộ phụ tinh nào thuộc nhóm này trong tam hợp {tamHopChiString}.
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            borderTop: '1px solid rgba(197, 160, 89, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#fbf9f4'
          }}
        >
          <span style={{ fontSize: '0.76rem', color: '#78716c' }}>
            Tổng cộng: <strong>{filteredGroups.length}</strong> bộ phụ tinh
          </span>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px 18px',
              borderRadius: '6px',
              border: '1px solid #c5a059',
              background: 'linear-gradient(135deg, #c5a059, #916f28)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
            }}
          >
            Đã Hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
