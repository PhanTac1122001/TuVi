import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common'
import { Home, AlertTriangle } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1.25rem',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--warning-bg)',
          color: 'var(--warning)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AlertTriangle size={32} />
      </div>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Trang không tồn tại</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '420px' }}>
        Đường dẫn bạn truy cập có thể đã bị xóa hoặc không hợp lệ. Vui lòng quay trở lại trang chủ.
      </p>
      <Link to="/" style={{ marginTop: '0.5rem' }}>
        <Button leftIcon={<Home size={18} />}>Về trang chủ</Button>
      </Link>
    </div>
  )
}
