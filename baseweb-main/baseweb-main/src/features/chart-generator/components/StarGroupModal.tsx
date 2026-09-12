import React, { useEffect } from 'react';
import { StarGroupItem } from '../types/chart.types';
import { X, Sparkles, AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';

interface StarGroupModalProps {
  group: StarGroupItem | null;
  onClose: () => void;
}

export const StarGroupModal: React.FC<StarGroupModalProps> = ({ group, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (group) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [group, onClose]);

  if (!group) return null;

  const isGood = group.type === 'good';

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
          border: `2px double ${isGood ? '#c5a059' : '#dc2626'}`,
          borderRadius: '12px',
          width: '100%',
          maxWidth: '560px',
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
        {/* Modal Header */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.75rem',
            background: isGood ? 'rgba(217, 119, 6, 0.04)' : 'rgba(220, 38, 38, 0.04)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: isGood ? '#f0fdf4' : '#fef2f2',
                  color: isGood ? '#166534' : '#991b1b',
                  border: `1px solid ${isGood ? '#bbf7d0' : '#fecaca'}`,
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {isGood ? <Sparkles size={12} /> : <AlertTriangle size={12} />}
                {isGood ? 'Cát Tinh Đắc Cách' : 'Hung Sát Cần Hóa Giải'}
              </span>

              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(217, 119, 6, 0.1)',
                  color: '#854d0e',
                  border: '1px solid rgba(197, 160, 89, 0.3)'
                }}
              >
                {group.category}
              </span>

              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: '#f8fafc',
                  color: '#475569',
                  border: '1px solid #cbd5e1'
                }}
              >
                {group.scope}
              </span>
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: '1.25rem',
                fontFamily: 'var(--font-serif-imperial)',
                fontWeight: 900,
                color: isGood ? '#78350f' : '#991b1b',
                lineHeight: 1.3
              }}
            >
              ✦ {group.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#78350f',
              padding: '4px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s'
            }}
            title="Đóng cửa sổ"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Vị trí các sao trên lá số */}
          <div
            style={{
              padding: '0.75rem 1rem',
              background: '#ffffff',
              borderRadius: '8px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--tg-gold-dark)', fontWeight: 700, fontSize: '0.8rem' }}>
              <MapPin size={15} />
              <span>VỊ TRÍ HỘI TỤ TRÊN LÁ SỐ:</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {group.prominentPalaces.map((loc, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    background: 'rgba(217, 119, 6, 0.08)',
                    color: '#78350f',
                    fontWeight: 700,
                    border: '1px solid rgba(197, 160, 89, 0.45)'
                  }}
                >
                  📍 {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Luận giải ý nghĩa tác dụng */}
          <div
            style={{
              padding: '0.85rem 1rem',
              background: '#ffffff',
              borderRadius: '8px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: 800, fontSize: '0.8rem' }}>
              <ShieldCheck size={16} />
              <span>Ý NGHĨA & TÁC DỤNG LUẬN GIẢI:</span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '0.88rem',
                lineHeight: '1.6',
                color: '#33291e',
                textAlign: 'justify'
              }}
            >
              {group.effect}
            </p>
          </div>

          {/* Phương pháp hóa giải (nếu có) */}
          {group.remedy && (
            <div
              style={{
                padding: '0.85rem 1rem',
                background: 'rgba(254, 242, 242, 0.8)',
                borderRadius: '8px',
                border: '1px dashed rgba(220, 38, 38, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#991b1b', fontWeight: 800, fontSize: '0.8rem' }}>
                <AlertTriangle size={15} />
                <span>PHƯƠNG PHÁP HÓA GIẢI & TU DƯỠNG:</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.86rem',
                  lineHeight: '1.6',
                  color: '#7f1d1d',
                  textAlign: 'justify'
                }}
              >
                {group.remedy}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            borderTop: '1px solid rgba(197, 160, 89, 0.25)',
            display: 'flex',
            justifyContent: 'flex-end',
            background: 'rgba(0, 0, 0, 0.02)'
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px 18px',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #c5a059, #916f28)',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              transition: 'opacity 0.15s'
            }}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
