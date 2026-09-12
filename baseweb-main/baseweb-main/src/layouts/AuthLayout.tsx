import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export const AuthLayout: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.12) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(185, 28, 28, 0.08) 0%, transparent 50%), var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/taman.png"
                alt="Tử Vi Tâm An"
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--gold-primary, #d4af37)',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: -2,
                  right: -2,
                  background: 'var(--gold-primary, #d4af37)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={11} />
              </span>
            </div>
            <div>
              <span style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.01em', display: 'block', color: 'var(--text-primary)' }}>
                TỬ VI <span style={{ color: 'var(--gold-primary, #d4af37)' }}>TÂM AN</span>
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Hệ Thống Tra Cứu & Lập Lá Số
              </span>
            </div>
          </Link>
        </div>

        <Outlet />

        <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Tử Vi Tâm An &copy; {new Date().getFullYear()} &bull; Cổng Đăng Nhập Nội Bộ
        </div>
      </div>
    </div>
  )
}
