import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenDictionary: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDictionary }) => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      background: 'rgba(10, 13, 20, 0.95)',
      borderBottom: '1px solid var(--border-gold)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #d4af37, #8c6d1f)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#000',
          fontWeight: 900
        }}>
          ☯
        </div>
        <div>
          <h1 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '1.35rem',
            fontWeight: 800,
            color: 'var(--gold-main)',
            letterSpacing: '1px'
          }}>
            TỬ VI TAM MINH
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Hệ Thống Lập Lá Số & Luận Giải Mệnh Lý Toàn Thư
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={onOpenDictionary}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold-light)',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <BookOpen size={16} />
          <span>Tra cứu 118 Sao</span>
        </button>
      </div>
    </header>
  );
};
