import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Search, Crown, Layers, BookOpen, AlertCircle, UserCheck } from 'lucide-react'
import { TUVI_STARS } from '@/data/tuvi/stars'
import { TUVI_COMBINATIONS } from '@/data/tuvi/combinations'
import { NAP_AM_60_HOA_GIAP } from '@/data/tuvi/napAm'
import { ElementType } from '@/types/tuvi'
import { Badge, Button } from '@/components/common'

export const StarCatalogPage: React.FC = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'all-stars' | 'combinations' | 'star-groups' | 'nap-am'>('all-stars')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedElement, setSelectedElement] = useState<ElementType | 'All'>('All')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [napAmElementFilter, setNapAmElementFilter] = useState<string>('All')

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

  const filteredStars = useMemo(() => {
    return TUVI_STARS.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.characteristics.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.huaKhi && s.huaKhi.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.ungVanHan && s.ungVanHan.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.tuongMao && s.tuongMao.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchElement = selectedElement === 'All' || s.element === selectedElement
      const matchCat = selectedCategory === 'All' || s.category === selectedCategory
      return matchSearch && matchElement && matchCat
    })
  }, [searchTerm, selectedElement, selectedCategory])

  const filteredCombinations = useMemo(() => {
    if (!searchTerm.trim()) return TUVI_COMBINATIONS
    const term = searchTerm.toLowerCase()
    return TUVI_COMBINATIONS.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.description.toLowerCase().includes(term) ||
        c.stars.some((st) => st.toLowerCase().includes(term))
    )
  }, [searchTerm])

  const filteredNapAm = useMemo(() => {
    return NAP_AM_60_HOA_GIAP.filter((n) => {
      const matchSearch =
        !searchTerm.trim() ||
        n.canChi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.napAm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.tinhChat.toLowerCase().includes(searchTerm.toLowerCase())
      const matchEl = napAmElementFilter === 'All' || n.element === napAmElementFilter
      return matchSearch && matchEl
    })
  }, [searchTerm, napAmElementFilter])

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
          <Badge variant="warning" size="md">
            Từ Điển Tử Vi Tam Minh
          </Badge>
          <Badge variant="default" size="md">
            Bảng Tra Cứu Toàn Thư & Vận Hạn
          </Badge>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>
          TRA CỨU TINH ĐẨU, CÁCH CỤC & 60 NẠP ÂM
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '850px', lineHeight: 1.6 }}>
          Hệ thống tra cứu đầy đủ 14 Chính Tinh, Lục Cát, Lục Sát, Tứ Hóa, Tứ Đức cùng hiệu ứng Vận Hạn, tướng mạo nhân diện, cách cục thành bại và 60 Nạp Âm Ngũ Hành theo chuẩn Tam Minh Đường.
        </p>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <Button
            variant={activeTab === 'all-stars' ? 'gold' : 'outline'}
            onClick={() => setActiveTab('all-stars')}
            leftIcon={<Star size={16} />}
          >
            Danh Mục Tinh Đẩu ({TUVI_STARS.length})
          </Button>
          <Button
            variant={activeTab === 'combinations' ? 'gold' : 'outline'}
            onClick={() => setActiveTab('combinations')}
            leftIcon={<Crown size={16} />}
          >
            Cách Cục Thành - Bại ({TUVI_COMBINATIONS.length})
          </Button>
          <Button
            variant={activeTab === 'star-groups' ? 'gold' : 'outline'}
            onClick={() => setActiveTab('star-groups')}
            leftIcon={<Layers size={16} />}
          >
            Bộ Tứ Hóa & Lục Cát / Sát
          </Button>
          <Button
            variant={activeTab === 'nap-am' ? 'gold' : 'outline'}
            onClick={() => setActiveTab('nap-am')}
            leftIcon={<BookOpen size={16} />}
          >
            60 Nạp Âm Hoa Giáp ({NAP_AM_60_HOA_GIAP.length})
          </Button>
        </div>
      </div>

      {/* Filter Controls (Search + Elements/Categories) */}
      {activeTab !== 'star-groups' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: 'var(--bg-secondary)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
          }}
        >
          {/* Search Box */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', minWidth: '220px', flex: 1 }}>
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder={
                  activeTab === 'all-stars'
                    ? 'Tìm theo tên sao, hóa khí, ứng hạn, tướng mạo...'
                    : activeTab === 'combinations'
                    ? 'Tìm cách cục, bộ sao...'
                    : 'Tìm năm sinh, can chi, nạp âm...'
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Category Filter for Stars */}
            {activeTab === 'all-stars' && (
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Tất cả nhóm', value: 'All' },
                  { label: '14 Chính Tinh', value: '14 Chính Tinh' },
                  { label: 'Bộ Tứ Hóa', value: 'Bộ Tứ Hóa' },
                  { label: 'Lục Cát Tinh', value: 'Lục Cát Tinh' },
                  { label: 'Lục Sát Tinh', value: 'Lục Sát Tinh' },
                  { label: 'Bộ Tứ Đức', value: 'Bộ Tứ Đức' },
                  { label: 'Vòng Bác Sĩ', value: 'Vòng Bác Sĩ' },
                  { label: 'Vòng Thái Tuế', value: 'Vòng Thái Tuế' },
                  { label: 'Vòng Tràng Sinh', value: 'Vòng Tràng Sinh' },
                  { label: 'Bộ Đài Các & Quý Tinh', value: 'Bộ Đài Các & Quý Tinh' },
                  { label: 'Sát Ám & Bại Tinh', value: 'Sát Ám & Bại Tinh' },
                  { label: 'Sao Lưu Niên', value: 'Sao Lưu Niên' },
                  { label: 'Phụ Tinh Quan Trọng', value: 'Phụ Tinh Quan Trọng' },
                ].map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setSelectedCategory(c.value)}
                    style={{
                      padding: '0.4rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: selectedCategory === c.value ? 'var(--gold-primary)' : 'var(--border-color)',
                      backgroundColor: selectedCategory === c.value ? 'rgba(212, 175, 55, 0.2)' : 'var(--bg-primary)',
                      color: selectedCategory === c.value ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      fontWeight: selectedCategory === c.value ? 700 : 500,
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Elemental Filter for Stars and Nap Am */}
          {(activeTab === 'all-stars' || activeTab === 'nap-am') && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Ngũ Hành:</span>
              {(['All', 'Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'] as const).map((el) => {
                const current = activeTab === 'all-stars' ? selectedElement : napAmElementFilter
                const isSelected = current === el
                return (
                  <button
                    key={el}
                    onClick={() => {
                      if (activeTab === 'all-stars') setSelectedElement(el)
                      else setNapAmElementFilter(el)
                    }}
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--gold-primary)' : 'var(--border-color)',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.2)' : 'var(--bg-primary)',
                      color: isSelected ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                    }}
                  >
                    {el === 'All' ? 'Tất cả hành' : `Hành ${el}`}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 1: DANH MỤC TINH ĐẨU TOÀN TẬP */}
      {activeTab === 'all-stars' && (
        <div className="catalog-responsive-grid">
          {filteredStars.map((star) => (
            <div
              key={star.id}
              className="tuvi-card star-clickable-card"
              onClick={() => navigate(`/tra-cuu/${star.id}`)}
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Star Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--gold-primary)' }}>
                    Sao {star.name}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {star.category} {star.group ? `• ${star.group}` : ''} • {star.yinYang} {star.element}
                  </div>
                </div>

                <span className={`tag-element ${getElementClass(star.element)}`}>
                  {star.element}
                </span>
              </div>

              {/* Hóa Khí */}
              {star.huaKhi && (
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '0.4rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--gold-primary)',
                  }}
                >
                  {star.huaKhi}
                </div>
              )}

              {/* Miếu Vượng Đắc Hãm */}
              {star.mieuVuong && Object.values(star.mieuVuong).some((arr) => arr && arr.length > 0) && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.78rem' }}>
                  {star.mieuVuong.mieu && star.mieuVuong.mieu.length > 0 && (
                    <div>
                      <span style={{ color: 'var(--success)', fontWeight: 600 }}>Miếu địa: </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{star.mieuVuong.mieu.join(', ')}</span>
                    </div>
                  )}
                  {star.mieuVuong.vuong && star.mieuVuong.vuong.length > 0 && (
                    <div>
                      <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>Vượng địa: </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{star.mieuVuong.vuong.join(', ')}</span>
                    </div>
                  )}
                  {star.mieuVuong.dac && star.mieuVuong.dac.length > 0 && (
                    <div>
                      <span style={{ color: 'var(--info)', fontWeight: 600 }}>Đắc địa: </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{star.mieuVuong.dac.join(', ')}</span>
                    </div>
                  )}
                  {star.mieuVuong.ham && star.mieuVuong.ham.length > 0 && (
                    <div>
                      <span style={{ color: 'var(--danger)', fontWeight: 600 }}>Hãm địa: </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{star.mieuVuong.ham.join(', ')}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Ứng Vận Hạn Box (From Tam Minh Doc) */}
              {star.ungVanHan && (
                <div
                  style={{
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'rgba(212, 175, 55, 0.08)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.2rem' }}>
                    <AlertCircle size={14} />
                    <span>Ứng Với Vận Hạn:</span>
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>{star.ungVanHan}</div>
                </div>
              )}

              {/* Nhân Diện Tướng Mạo */}
              {star.tuongMao && (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <UserCheck size={14} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Nhân diện tướng: </strong>
                    {star.tuongMao}
                  </div>
                </div>
              )}

              {/* Characteristics, Appearance, Career */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Đặc tính: </strong>
                  {star.characteristics}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Tính cách: </strong>
                  {star.personality}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Sự nghiệp & Tài lộc: </strong>
                  {star.careerWealth}
                </div>
              </div>

              {/* Action Button Link to 12 Palaces Detail */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: 'var(--gold-primary)'
                }}
              >
                <span>Xem Luận Giải 12 Cung Vị</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Chi tiết →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: CÁC BỘ CÁCH CỤC THÀNH - BẠI */}
      {activeTab === 'combinations' && (
        <div className="catalog-responsive-grid">
          {filteredCombinations.map((combo) => (
            <div
              key={combo.id}
              className="tuvi-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  {combo.name}
                </h3>
                <Badge variant={combo.category === 'Bần Họa Cách' ? 'danger' : 'warning'} size="sm">
                  {combo.category}
                </Badge>
              </div>

              {/* Stars in combo */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {combo.stars.map((st, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--gold-primary)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    {st}
                  </span>
                ))}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>
                {combo.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  borderTop: '1px dashed var(--border-color)',
                  paddingTop: '0.75rem',
                }}
              >
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Khuyên dùng / Ứng dụng: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>{combo.suitableCareers.join(', ')}</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--gold-primary)' }}>Lưu ý & Hóa giải: </strong>
                  <span style={{ color: 'var(--text-muted)' }}>{combo.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: PHÂN NHÓM TINH ĐẨU & TỨ HÓA */}
      {activeTab === 'star-groups' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Tứ Hóa Banner */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
            }}
          >
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--gold-primary)' }}>
              ✦ BỘ TỨ HÓA THEO BỐN MÙA (LỘC — QUYỀN — KHOA — KỴ)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--element-moc)' }}>
                <h4 style={{ color: 'var(--element-moc)', margin: '0 0 0.5rem 0' }}>Hóa Lộc (Mùa Xuân)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Vạn vật đâm chồi, tượng trưng cho cơ hội tài lộc sinh sôi, duyên phận nở rộ, tâm tính cởi mở hào sảng.
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--element-hoa)' }}>
                <h4 style={{ color: 'var(--element-hoa)', margin: '0 0 0.5rem 0' }}>Hóa Quyền (Mùa Hạ)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Khí thế bừng bừng, tượng trưng cho uy lực quyền thế, ý chí chiến đấu, tinh thần xốc vác lãnh đạo.
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--gold-primary)' }}>
                <h4 style={{ color: 'var(--gold-primary)', margin: '0 0 0.5rem 0' }}>Hóa Khoa (Mùa Thu)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Thu hoạch tri thức, danh tiếng khoa cử thanh tao, đệ nhất giải thần cứu nạn biến nguy thành an.
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--danger)' }}>
                <h4 style={{ color: 'var(--danger)', margin: '0 0 0.5rem 0' }}>Hóa Kỵ (Mùa Đông)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Thu tàng tích trữ, thị phi trắc trở, bài học nghiệp duyên sâu sắc để con người thức tỉnh tu dưỡng.
                </p>
              </div>
            </div>
          </div>

          {/* Lục Cát & Lục Sát */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div className="tuvi-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--success)', marginBottom: '0.75rem' }}>
                Lục Cát Tinh (6 Tinh Tú Nâng Đỡ)
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li><strong>Tả Phù & Hữu Bật</strong>: Quý nhân phò tá, trợ thủ đắc lực, mở rộng mạng lưới quan hệ xã hội.</li>
                <li><strong>Văn Xương & Văn Khúc</strong>: Khoa cử đỗ đạt, tài hoa nghệ thuật, khẩu tài hùng biện sắc sảo.</li>
                <li><strong>Thiên Khôi & Thiên Việt</strong>: Quý nhân công khai và ngầm nâng đỡ, cơ hội đứng đầu danh vọng.</li>
              </ul>
            </div>

            <div className="tuvi-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--danger)', marginBottom: '0.75rem' }}>
                Lục Sát Tinh (6 Tinh Tú Thử Thách)
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li><strong>Kình Dương & Đà La</strong>: Cương bạo gươm giáo và cản trở âm thầm, tôi luyện nghị lực thép.</li>
                <li><strong>Hỏa Tinh & Linh Tinh</strong>: Bùng nổ nóng nảy chớp nhoáng hoặc ngọn lửa giận dữ âm ỉ.</li>
                <li><strong>Địa Không & Địa Kiếp</strong>: Biến thiên tài sản bạo phát bạo tàn, bài học vô thường giải thoát.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: 60 NẠP ÂM HOA GIÁP */}
      {activeTab === 'nap-am' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--gold-primary)',
              fontSize: '0.92rem',
              lineHeight: 1.6,
            }}
          >
            <strong>Phương pháp phối hợp Nạp Âm trong Tam Minh: </strong>
            Nạp Âm Ngũ Hành biểu thị khí chất cụ thể của bản mệnh (ví dụ: Hải Trung Kim là vàng giấu đáy biển sâu cần Thủy dưỡng, khác với Kiếm Phong Kim là vàng mũi kiếm cần Hỏa tôi rèn). Hiểu đúng nạp âm giúp chọn bạn đời và đối tác cộng sự tương hỗ đắc lực nhất.
          </div>

          <div className="catalog-responsive-grid">
            {filteredNapAm.map((item, idx) => (
              <div
                key={idx}
                className="tuvi-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  fontSize: '0.85rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: 'var(--gold-primary)' }}>
                    {item.napAm}
                  </h4>
                  <span className={`tag-element ${getElementClass(item.element)}`}>
                    Hành {item.element}
                  </span>
                </div>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{item.canChi}</div>
                <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>{item.hanhChiTiet}</div>
                <div style={{ lineHeight: 1.5, color: 'var(--text-primary)' }}>{item.tinhChat}</div>

                <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ color: '#4ade80' }}>
                    <strong>✓ Hợp với: </strong>{item.hopVoi.join(', ')}
                  </div>
                  <div style={{ color: '#f87171' }}>
                    <strong>✗ Khắc với: </strong>{item.khacVoi.join(', ')}
                  </div>
                  <div style={{ color: 'var(--gold-primary)', marginTop: '0.2rem' }}>
                    <strong>💡 Lời khuyên: </strong>{item.loiKhuyen}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
