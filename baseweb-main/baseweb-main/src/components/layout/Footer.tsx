import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        backgroundColor: 'var(--bg-secondary)',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
        <img
          src="/taman.png"
          alt="Tử Vi Tâm An Logo"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--gold-primary)',
            boxShadow: '0 3px 12px rgba(212, 175, 55, 0.25)',
          }}
        />
        <p style={{ fontStyle: 'italic', color: 'var(--gold-primary)', fontWeight: 500, fontSize: '0.95rem', margin: 0 }}>
          "Mệnh tốt không bằng Hạn tốt, Hạn tốt không bằng Thân tốt, Thân tốt không bằng Tâm tốt."
        </p>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} TỬ VI TÂM AN — Giáo Án Căn Bản & Cẩm Nang Dự Đoán Học Phương Đông Chuẩn Sư Phạm.
        </p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
          Hệ thống tra cứu 10 Chương Giáo Án, 12 Cung Chức Năng, 14 Chính Tinh & Lập Bàn Lá Số Nghiên Cứu.
        </p>
      </div>
    </footer>
  )
}
