import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { User, Lock, Eye, EyeOff, AlertCircle, LogIn } from 'lucide-react'
import { Card, Input, Button } from '@/components/common'
import { useAuthStore } from '@/stores/authStore'
import { APP_CONFIG } from '@/config/app.config'

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const cleanUser = username.trim()
    const cleanPass = password.trim()

    if (!cleanUser || !cleanPass) {
      setError('Vui lòng nhập đầy đủ tên tài khoản và mật khẩu.')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const validUser = APP_CONFIG.auth.username
      const validPass = APP_CONFIG.auth.password

      if (cleanUser === validUser && cleanPass === validPass) {
        login(
          {
            id: 'admin-1',
            name: cleanUser,
            email: `${cleanUser}@tuvi-taman.vn`,
            role: 'admin',
          },
          'jwt-token-tuvi-' + Date.now()
        )
        setLoading(false)

        const from = (location.state as any)?.from?.pathname || '/'
        navigate(from, { replace: true })
      } else {
        setLoading(false)
        setError('Tên tài khoản hoặc mật khẩu không chính xác!')
      }
    }, 400)
  }

  return (
    <Card glass style={{ padding: '2.25rem 2rem', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
      <div style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
          Đăng Nhập Hệ Thống
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Vui lòng đăng nhập để tra cứu & sử dụng trọn vẹn dữ liệu
        </p>
      </div>

      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            color: '#f87171',
            fontSize: '0.85rem',
            marginBottom: '1.25rem',
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <Input
          label="Tài khoản"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            if (error) setError('')
          }}
          placeholder="Nhập tên tài khoản..."
          leftIcon={<User size={17} />}
          autoFocus
          required
        />

        <Input
          label="Mật khẩu"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            if (error) setError('')
          }}
          placeholder="••••••••"
          leftIcon={<Lock size={17} />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
              }}
              aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
          required
        />

        <Button
          type="submit"
          variant="gold"
          size="lg"
          isLoading={loading}
          leftIcon={!loading ? <LogIn size={18} /> : undefined}
          style={{
            width: '100%',
            marginTop: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)',
          }}
        >
          Đăng Nhập
        </Button>
      </form>
    </Card>
  )
}
