import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Compass, BookOpen, Grid, Search, Wand2 } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'
import { Button } from '@/components/common'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore()
  const location = useLocation()

  const navItems = [
    { label: 'Trang Chủ', path: '/', icon: <Compass size={16} /> },
    { label: 'Giáo Trình 10 Chương', path: '/giao-trinh', icon: <BookOpen size={16} /> },
    { label: 'Bàn 12 Cung', path: '/12-cung', icon: <Grid size={16} /> },
    { label: 'Tra Cứu Tinh Đẩu', path: '/tra-cuu', icon: <Search size={16} /> },
    { label: 'Lập Bàn Lá Số', path: '/lap-la-so', icon: <Wand2 size={16} /> },
  ]

  return (
    <header
      className="glass-panel"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        minHeight: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1.5rem',
        borderBottom: '1px solid var(--border-color)',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}
    >
      {/* Brand Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, #d4af37, #9333ea)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            boxShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
          }}
        >
          <Compass size={22} />
        </div>
        <div>
          <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.01em', display: 'block', lineHeight: 1.2 }}>
            TỬ VI <span style={{ color: 'var(--gold-primary)' }}>ĐẨU SỐ</span>
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Giáo Trình Sư Phạm
          </span>
        </div>
      </Link>

      {/* Main Navigation Items */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path)
          const isChartTool = item.path === '/lap-la-so'

          if (isChartTool) {
            return (
              <React.Fragment key={item.path}>
                <div
                  style={{
                    width: '1px',
                    height: '22px',
                    backgroundColor: 'var(--border-color)',
                    margin: '0 0.25rem',
                  }}
                />
                <Link
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.95rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: isActive
                      ? 'linear-gradient(135deg, #b91c1c, #7f1d1d)'
                      : 'linear-gradient(135deg, #dc2626, #991b1b)',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
                    transition: 'var(--transition)',
                  }}
                  title="Công cụ An Sao Lập Bàn Lá Số & Luận Giải"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </React.Fragment>
            )
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'var(--gold-primary)' : 'transparent',
                textDecoration: 'none',
                transition: 'var(--transition)',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle Theme" title="Đổi giao diện Sáng / Tối">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </header>
  )
}
