import React, { useState } from 'react'
import { Layers, ArrowLeftRight, X, Info } from 'lucide-react'
import { TUVI_PALACES } from '@/data/tuvi/palaces'
import { PalaceInfo, ElementType } from '@/types/tuvi'
import { Badge, Button } from '@/components/common'

export const TwelvePalacesPage: React.FC = () => {
  const [selectedPalace, setSelectedPalace] = useState<PalaceInfo | null>(TUVI_PALACES[0])

  const getElementClass = (el: ElementType) => {
    switch (el) {
      case 'Kim':
        return 'tag-kim'
      case 'Mộc':
        return 'tag-moc'
      case 'Thủy':
        return 'tag-thuy'
      case 'Hỏa':
        return 'tag-hoa'
      case 'Thổ':
        return 'tag-tho'
      default:
        return ''
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Badge variant="primary" size="md">
            Địa Bàn 12 Cung Vị
          </Badge>
          <Badge variant="default" size="md">
            12 Lĩnh Vực Đời Người
          </Badge>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>
          BÀN TỬ VI 12 CUNG CHỨC NĂNG
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Mỗi cung vị trên lá số quản lý một phương diện quan trọng của đời người. Nhấp vào từng cung dưới đây để xem phân tích chi tiết, phạm vi quản lý và các trục tương tác Tam Hợp, Xung Chiếu.
        </p>
      </div>

      {/* 12 Palaces Grid */}
      <div className="catalog-responsive-grid">
        {TUVI_PALACES.map((palace) => {
          const isSelected = selectedPalace?.id === palace.id
          return (
            <div
              key={palace.id}
              onClick={() => setSelectedPalace(palace)}
              className="tuvi-card"
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                borderColor: isSelected ? 'var(--gold-primary)' : 'var(--border-color)',
                backgroundColor: isSelected ? 'var(--bg-tertiary)' : 'var(--bg-card)',
                boxShadow: isSelected ? '0 4px 18px rgba(212, 175, 55, 0.18)' : 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--gold-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                    }}
                  >
                    {palace.symbol}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                      {palace.vietnameseName}
                    </h3>
                  </div>
                </div>

                <span className={`tag-element ${getElementClass(palace.element)}`}>
                  Hành {palace.element}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                {palace.meaning}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px dashed var(--border-color)',
                  paddingTop: '0.65rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowLeftRight size={13} style={{ color: 'var(--danger)' }} />
                  <span>Xung chiếu: <strong>{palace.xungChieuWith}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={13} style={{ color: 'var(--gold-primary)' }} />
                  <span>Tam hợp: <strong>{palace.tamHopWith.join(' - ')}</strong></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Palace Detail Modal / Drawer */}
      {selectedPalace && (
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '2px solid var(--gold-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--gold-primary)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                }}
              >
                {selectedPalace.symbol}
              </div>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
                  {selectedPalace.vietnameseName}
                </h2>
                <span className={`tag-element ${getElementClass(selectedPalace.element)}`} style={{ marginTop: '0.25rem' }}>
                  Hành {selectedPalace.element} • {selectedPalace.meaning}
                </span>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={() => setSelectedPalace(null)}>
              <X size={18} /> Đóng bảng
            </Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Scope of Influence */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)' }}>
                <Info size={16} /> Phạm Vi Quản Lý Cốt Lõi
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {selectedPalace.scope.map((sc, sIdx) => (
                  <li key={sIdx}>{sc}</li>
                ))}
              </ul>
            </div>

            {/* Cross-palace relations */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)' }}>
                <Layers size={16} /> Mối Quan Hệ Cung Vị
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Tam Hợp Hội Chiếu: </span>
                  <strong style={{ color: 'var(--gold-primary)' }}>{selectedPalace.tamHopWith.join(' — ')}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Chính Xung Đối Cung: </span>
                  <strong style={{ color: 'var(--danger)' }}>{selectedPalace.xungChieuWith}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Giáp Cung Hai Bên: </span>
                  <strong>{selectedPalace.giapCungWith.join(' & ')}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Philosophical Analysis */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--gold-primary)',
              fontSize: '0.92rem',
              lineHeight: 1.65,
              color: 'var(--text-primary)',
            }}
          >
            <strong>Lời bàn chuyên sâu: </strong>
            {selectedPalace.detailedAnalysis}
          </div>
        </div>
      )}
    </div>
  )
}
