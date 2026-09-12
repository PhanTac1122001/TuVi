import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, Compass, BookOpen, Grid, Search, Wand2, Menu, X, LogOut, User as UserIcon } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'
import { useAuthStore } from '@/stores/authStore'
import { Button } from '@/components/common'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore()
  const { user, isAuthenticated, logout } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }

  const [prevPath, setPrevPath] = useState(location.pathname)
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setIsMobileOpen(false)
  }

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

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
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1.25rem',
        borderBottom: '1px solid var(--border-color)',
        gap: '0.75rem',
      }}
    >
      {/* Brand Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
        <img
          src="/taman.png"
          alt="Tử Vi Tâm An Logo"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1.5px solid var(--gold-primary)',
            boxShadow: '0 2px 10px rgba(212, 175, 55, 0.35)',
            flexShrink: 0,
          }}
        />
        <div>
          <span style={{ fontSize: '1.08rem', fontWeight: 800, letterSpacing: '-0.01em', display: 'block', lineHeight: 1.15, color: 'var(--text-primary)' }}>
            TỬ VI <span style={{ color: 'var(--gold-primary)' }}>TÂM AN</span>
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Giáo Trình Sư Phạm
          </span>
        </div>
      </Link>

      {/* Desktop Navigation Items */}
      <nav className="hide-on-mobile" style={{ alignItems: 'center', gap: '0.4rem' }}>
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

      {/* Right Controls: Theme toggle + User info + Logout + Mobile hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle Theme" title="Đổi giao diện Sáng / Tối">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        {isAuthenticated && (
          <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginLeft: '0.2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                fontSize: '0.825rem',
                color: 'var(--text-secondary)',
              }}
              title="Tài khoản đang đăng nhập"
            >
              <UserIcon size={14} style={{ color: 'var(--gold-primary)' }} />
              <span style={{ fontWeight: 600 }}>{user?.name || 'minhanh1999'}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              title="Đăng xuất khỏi hệ thống"
              leftIcon={<LogOut size={14} />}
              style={{
                color: 'var(--text-muted)',
                borderColor: 'var(--border-color)',
                padding: '0.35rem 0.65rem',
                fontSize: '0.825rem',
              }}
            >
              Đăng xuất
            </Button>
          </div>
        )}

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="hide-on-desktop"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '7px',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          className="header-mobile-backdrop hide-on-desktop"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="header-mobile-drawer hide-on-desktop">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img
                src="/taman.png"
                alt="Tử Vi Tâm An Logo"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid var(--gold-primary)',
                  boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                TỬ VI <span style={{ color: 'var(--gold-primary)' }}>TÂM AN</span>
              </span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <X size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)
              const isChartTool = item.path === '/lap-la-so'

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${
                    isChartTool
                      ? isActive
                        ? 'chart-btn-active'
                        : 'chart-btn-inactive'
                      : isActive
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px' }}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Drawer Footer info & Logout */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {isAuthenticated && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.55rem 0.8rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem' }}>
                  <UserIcon size={16} style={{ color: 'var(--gold-primary)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{user?.name || 'minhanh1999'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileOpen(false)
                    handleLogout()
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <LogOut size={15} />
                  <span>Đăng xuất</span>
                </button>
              </div>
            )}
            <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Tử Vi Tâm An &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
