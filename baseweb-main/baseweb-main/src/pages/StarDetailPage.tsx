import React, { useState, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Compass,
  Sparkles,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Info,
  Users,
  Heart,
  Home,
  Briefcase,
  UserCheck,
  Navigation,
  ShieldAlert,
  Coins,
  Baby,
  Layers,
  Star
} from 'lucide-react'
import { TUVI_STARS } from '@/data/tuvi/stars'
import { getStarPalaceDetails, TWELVE_PALACES_META } from '@/data/tuvi/starPalacesData'
import { ElementType } from '@/types/tuvi'
import { Button } from '@/components/common'

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass size={18} />,
  Users: <Users size={18} />,
  Heart: <Heart size={18} />,
  Home: <Home size={18} />,
  Briefcase: <Briefcase size={18} />,
  UserCheck: <UserCheck size={18} />,
  Navigation: <Navigation size={18} />,
  ShieldAlert: <ShieldAlert size={18} />,
  Coins: <Coins size={18} />,
  Baby: <Baby size={18} />,
  Sparkles: <Sparkles size={18} />,
  Layers: <Layers size={18} />
}

export const StarDetailPage: React.FC = () => {
  const { starId } = useParams<{ starId: string }>()
  const navigate = useNavigate()
  const [activePalaceId, setActivePalaceId] = useState<string>('menh')

  const star = useMemo(() => {
    return TUVI_STARS.find((s) => s.id === starId)
  }, [starId])

  const palaceDetails = useMemo(() => {
    if (!star) return []
    return getStarPalaceDetails(
      star.id,
      star.name,
      star.element,
      star.category,
      star.characteristics
    )
  }, [star])

  const activePalaceDetail = useMemo(() => {
    return palaceDetails.find((p) => p.palaceId === activePalaceId) || palaceDetails[0]
  }, [palaceDetails, activePalaceId])

  const activePalaceIndex = useMemo(() => {
    return TWELVE_PALACES_META.findIndex((p) => p.id === activePalaceId)
  }, [activePalaceId])

  const handlePrevPalace = () => {
    const prevIdx = (activePalaceIndex - 1 + TWELVE_PALACES_META.length) % TWELVE_PALACES_META.length
    setActivePalaceId(TWELVE_PALACES_META[prevIdx].id)
  }

  const handleNextPalace = () => {
    const nextIdx = (activePalaceIndex + 1) % TWELVE_PALACES_META.length
    setActivePalaceId(TWELVE_PALACES_META[nextIdx].id)
  }

  const getElementBadge = (el: ElementType) => {
    switch (el) {
      case 'Kim':
        return { label: 'Hành Kim', bg: 'rgba(100, 116, 139, 0.15)', color: '#64748b', border: '#64748b' }
      case 'Mộc':
        return { label: 'Hành Mộc', bg: 'rgba(30, 126, 52, 0.15)', color: '#1e7e34', border: '#1e7e34' }
      case 'Thủy':
        return { label: 'Hành Thủy', bg: '#ffffff', color: '#000000', border: '#cbd5e1' }
      case 'Hỏa':
        return { label: 'Hành Hỏa', bg: 'rgba(192, 41, 43, 0.15)', color: '#c0292b', border: '#c0292b' }
      case 'Thổ':
        return { label: 'Hành Thổ', bg: 'rgba(183, 121, 31, 0.15)', color: '#b7791f', border: '#b7791f' }
      default:
        return { label: 'Ngũ Hành', bg: 'rgba(100, 116, 139, 0.15)', color: '#64748b', border: '#64748b' }
    }
  }

  if (!star) {
    return (
      <div style={{ maxWidth: '900px', margin: '3rem auto', padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔭</div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--gold-primary)' }}>
          Không Tìm Thấy Tinh Đẩu
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Mã định danh tinh đẩu &quot;{starId}&quot; không tồn tại hoặc dữ liệu đang được cập nhật.
        </p>
        <Button variant="primary" onClick={() => navigate('/tra-cuu')}>
          <ArrowLeft size={16} style={{ marginRight: '6px' }} />
          Quay Lại Danh Mục Tinh Đẩu
        </Button>
      </div>
    )
  }

  const elBadge = getElementBadge(star.element)

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '1.5rem 1rem 3rem 1rem' }}>
      {/* 1. Header Navigation & Breadcrumb */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => navigate('/tra-cuu')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={16} />
            Danh Mục Tinh Đẩu
          </button>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Trang Chủ</Link>
            {' / '}
            <Link to="/tra-cuu" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tra Cứu</Link>
            {' / '}
            <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>Sao {star.name}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="secondary" onClick={() => navigate('/lap-la-so')}>
            <Star size={15} style={{ marginRight: '6px' }} />
            Lập Lá Số Xem Vị Trí Sao
          </Button>
        </div>
      </div>

      {/* 2. Hero Card: Hồ Sơ Tinh Đẩu Toàn Diện */}
      <div
        className="tuvi-card"
        style={{
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
          border: '1.5px solid var(--gold-primary)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Watermark */}
        <div
          style={{
            position: 'absolute',
            right: '-15px',
            top: '-20px',
            fontSize: '9rem',
            opacity: 0.04,
            fontWeight: 900,
            pointerEvents: 'none',
            fontFamily: 'serif'
          }}
        >
          {star.name.charAt(0)}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 900, margin: 0, letterSpacing: '0.5px' }}>
                Sao <span style={{ color: star.element === 'Thủy' ? 'var(--text-primary)' : elBadge.color }}>{star.name}</span>
              </h1>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  backgroundColor: elBadge.bg,
                  color: elBadge.color,
                  border: `1px solid ${elBadge.border}`,
                  boxShadow: star.element === 'Thủy' ? '0 1px 4px rgba(0, 0, 0, 0.12)' : undefined
                }}
              >
                {elBadge.label} ({star.yinYang})
              </span>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  color: 'var(--gold-primary)',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}
              >
                {star.category}
              </span>
              {star.group && (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ({star.group})
                </span>
              )}
            </div>

            {star.huaKhi && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(197, 160, 89, 0.08)',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  borderLeft: '3px solid var(--gold-primary)',
                  color: 'var(--gold-dark)',
                  fontSize: '0.92rem',
                  fontWeight: 700
                }}
              >
                <Sparkles size={16} />
                Hóa Khí: {star.huaKhi}
              </div>
            )}
          </div>

          {/* Miếu / Vượng / Đắc / Hãm Mini Badges */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              minWidth: '260px',
              padding: '12px 16px',
              background: 'var(--bg-primary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Vị Trí Đắc Hãm 12 Cung
            </div>
            <div style={{ fontSize: '0.82rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#16a34a', fontWeight: 700 }}>Miếu Địa:</span>
              <span style={{ color: 'var(--text-primary)' }}>{star.mieuVuong.mieu?.join(', ') || 'Không có'}</span>
            </div>
            <div style={{ fontSize: '0.82rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#2563eb', fontWeight: 700 }}>Vượng Địa:</span>
              <span style={{ color: 'var(--text-primary)' }}>{star.mieuVuong.vuong?.join(', ') || 'Không có'}</span>
            </div>
            <div style={{ fontSize: '0.82rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#d97706', fontWeight: 700 }}>Đắc Địa:</span>
              <span style={{ color: 'var(--text-primary)' }}>{star.mieuVuong.dac?.join(', ') || 'Không có'}</span>
            </div>
            <div style={{ fontSize: '0.82rem', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#dc2626', fontWeight: 700 }}>Hãm Địa:</span>
              <span style={{ color: 'var(--text-primary)' }}>{star.mieuVuong.ham?.join(', ') || 'Không có'}</span>
            </div>
          </div>
        </div>

        {/* 4 Khối Tri Thức Tinh Tú Cốt Lõi */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          <div
            style={{
              padding: '1.1rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '10px',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '6px', fontSize: '0.9rem' }}>
              <UserCheck size={16} />
              Nhân Diện & Tướng Mạo
            </div>
            <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {star.tuongMao || star.appearance || 'Đặc trưng hình dáng uy nghi, thanh thoát theo khí chất tinh tú.'}
            </p>
          </div>

          <div
            style={{
              padding: '1.1rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '10px',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#3b82f6', marginBottom: '6px', fontSize: '0.9rem' }}>
              <Sparkles size={16} />
              Đặc Tính & Bản Chất
            </div>
            <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {star.characteristics || star.personality}
            </p>
          </div>

          <div
            style={{
              padding: '1.1rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '10px',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#10b981', marginBottom: '6px', fontSize: '0.9rem' }}>
              <Coins size={16} />
              Sự Nghiệp & Tài Lộc
            </div>
            <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {star.careerWealth}
            </p>
          </div>

          <div
            style={{
              padding: '1.1rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '10px',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#f59e0b', marginBottom: '6px', fontSize: '0.9rem' }}>
              <Activity size={16} />
              Ứng Nghiệm Vận Hạn
            </div>
            <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {star.ungVanHan || 'Gặp vận hạn có sao này tọa thủ sẽ mang lại những chuyển biến tương ứng theo tính chất tinh tú.'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Phân Hệ Luận Giải 12 Cung Vị (Interactive Palaces Grid) */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--gold-primary)' }}>
              🏛️ LUẬN GIẢI SAO {star.name.toUpperCase()} TỌA THỦ 12 CUNG VỊ
            </h2>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Nhấp vào từng Cung Vị bên dưới để xem tác động, đặc điểm cát hung và cách thức ứng biến chi tiết.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handlePrevPalace}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
              title="Xem cung liền trước"
            >
              <ChevronLeft size={16} />
              Trước
            </button>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold-primary)', minWidth: '70px', textAlign: 'center' }}>
              {activePalaceIndex + 1} / 12
            </span>
            <button
              onClick={handleNextPalace}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
              title="Xem cung liền sau"
            >
              Sau
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Thanh Lưới 12 Cung (Interactive 12 Palaces Grid / Tabs) */}
        <div className="star-palaces-grid">
          {TWELVE_PALACES_META.map((palace, idx) => {
            const isActive = palace.id === activePalaceId
            const icon = ICON_MAP[palace.iconName] || <Compass size={18} />

            return (
              <button
                key={palace.id}
                onClick={() => setActivePalaceId(palace.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: isActive ? '2px solid var(--gold-primary)' : '1px solid var(--border-color)',
                  background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'var(--bg-secondary)',
                  color: isActive ? 'var(--gold-primary)' : 'var(--text-primary)',
                  fontWeight: isActive ? 800 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 4px 12px rgba(212, 175, 55, 0.15)' : 'none',
                  transform: isActive ? 'translateY(-2px)' : 'none'
                }}
              >
                <div style={{ color: isActive ? 'var(--gold-primary)' : 'var(--text-muted)' }}>
                  {icon}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.86rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {idx + 1}. {palace.name.replace('Cung ', '')}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {palace.meaning.slice(0, 24)}...
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Thẻ Luận Giải Chi Tiết Cung Đang Chọn (Active Palace Showcase) */}
        {activePalaceDetail && (
          <div
            className="tuvi-card"
            style={{
              background: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)'
            }}
          >
            {/* Header Cung */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-color)',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    color: 'var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {ICON_MAP[activePalaceDetail.iconName] || <Compass size={22} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                    Sao {star.name} Tại {activePalaceDetail.palaceName}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {activePalaceDetail.meaning}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                <Info size={14} style={{ color: 'var(--gold-primary)' }} />
                Cung thứ {activePalaceIndex + 1} / 12 Cung Số
              </div>
            </div>

            {/* Khối Tổng Luận Cốt Lõi */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.25rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--gold-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.65,
                fontSize: '0.96rem',
                color: 'var(--text-primary)'
              }}
            >
              <strong style={{ color: 'var(--gold-primary)', display: 'block', marginBottom: '6px', fontSize: '1rem' }}>
                📖 Tổng Luận Chi Tiết:
              </strong>
              {activePalaceDetail.overview}
            </div>

            {/* Cặp Cột Đối Chiếu Cát / Hung */}
            <div className="good-bad-aspects-grid">
              {/* Cát Tinh Gia Hội */}
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} />
                  Khi Hội Cát Tinh (Đắc Cách - Tăng Phú Quý)
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activePalaceDetail.goodAspects}
                </p>
              </div>

              {/* Sát Tinh Xung Phá */}
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                  <AlertTriangle size={18} />
                  Khi Gặp Sát Tinh / Hãm Địa (Điểm Cần Phòng Ngừa)
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activePalaceDetail.badAspects}
                </p>
              </div>
            </div>

            {/* Khối Khía Cạnh Cụ Thể & Lời Khuyên Ứng Biến */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {activePalaceDetail.specificAspect && (
                <div
                  style={{
                    padding: '1rem 1.2rem',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '4px' }}>
                    🔍 Trọng Điểm Cung Vị:
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {activePalaceDetail.specificAspect}
                  </div>
                </div>
              )}

              {activePalaceDetail.remedy && (
                <div
                  style={{
                    padding: '1rem 1.2rem',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#3b82f6', marginBottom: '4px' }}>
                    💡 Lời Khuyên Tu Dưỡng & Ứng Biến:
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {activePalaceDetail.remedy}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
