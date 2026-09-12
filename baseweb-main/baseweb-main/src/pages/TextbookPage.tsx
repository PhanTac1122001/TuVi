import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Compass,
  LayoutGrid,
  Star,
  Sparkles,
  Layers,
  Crown,
  Zap,
  ListChecks,
  Calculator,
  CheckCircle2,
  Bookmark,
  Quote,
  Hand,
  SearchCode
} from 'lucide-react'
import { TUVI_CHAPTERS } from '@/data/tuvi/chapters'
import { NAP_AM_60_HOA_GIAP } from '@/data/tuvi/napAm'
import { Badge, Button } from '@/components/common'

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass size={18} />,
  LayoutGrid: <LayoutGrid size={18} />,
  Star: <Star size={18} />,
  Sparkles: <Sparkles size={18} />,
  Layers: <Layers size={18} />,
  Crown: <Crown size={18} />,
  Zap: <Zap size={18} />,
  ListChecks: <ListChecks size={18} />,
  Calculator: <Calculator size={18} />,
  BookOpen: <BookOpen size={18} />,
}

// 12 Cung Bàn Tay Trái
const HAND_PALACES = [
  { name: 'Tỵ', col: 2, row: 1, pos: 'Đốt trên ngón giữa' },
  { name: 'Ngọ', col: 3, row: 1, pos: 'Đốt trên ngón nhẫn' },
  { name: 'Mùi', col: 4, row: 1, pos: 'Đốt trên ngón út' },
  { name: 'Thìn', col: 1, row: 1, pos: 'Đốt trên ngón trỏ' },
  { name: 'Thân', col: 4, row: 2, pos: 'Đốt giữa ngón út' },
  { name: 'Mão', col: 1, row: 2, pos: 'Đốt giữa ngón trỏ' },
  { name: 'Dậu', col: 4, row: 3, pos: 'Đốt dưới ngón út' },
  { name: 'Dần', col: 1, row: 3, pos: 'Đốt dưới ngón trỏ' },
  { name: 'Sửu', col: 2, row: 3, pos: 'Đốt dưới ngón giữa' },
  { name: 'Tý', col: 3, row: 3, pos: 'Đốt dưới ngón nhẫn' },
  { name: 'Tuất', col: 4, row: 4, pos: 'Khớp gốc ngón út' },
  { name: 'Hợi', col: 4, row: 5, pos: 'Cạnh bàn tay' }
]

export const TextbookPage: React.FC = () => {
  const { chapterId } = useParams<{ chapterId?: string }>()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [isMobileChaptersOpen, setIsMobileChaptersOpen] = useState(false)

  // Interactive So Phái Calculator State
  const [calcStars, setCalcStars] = useState<Array<{ name: string; score: number }>>([
    { name: 'Tử Vi (Miếu)', score: 3 },
    { name: 'Tả Phù (Vượng)', score: 2 },
    { name: 'Hóa Lộc (Đắc)', score: 1 },
    { name: 'Kình Dương (Hãm)', score: -2 }
  ])
  const [newStarName, setNewStarName] = useState('')
  const [newStarScore, setNewStarScore] = useState<number>(3)

  // Interactive Nap Am Search State
  const [napAmSearch, setNapAmSearch] = useState('')
  const [selectedNapAmElement, setSelectedNapAmElement] = useState<string>('All')

  // Determine active chapter based on URL or default to first
  const activeChapter = useMemo(() => {
    if (chapterId) {
      const found = TUVI_CHAPTERS.find((c) => c.id === chapterId)
      if (found) return found
    }
    return TUVI_CHAPTERS[0]
  }, [chapterId])

  const currentIndex = TUVI_CHAPTERS.findIndex((c) => c.id === activeChapter.id)

  const filteredChapters = useMemo(() => {
    if (!searchTerm.trim()) return TUVI_CHAPTERS
    const term = searchTerm.toLowerCase()
    return TUVI_CHAPTERS.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.subtitle.toLowerCase().includes(term) ||
        c.summary.toLowerCase().includes(term) ||
        c.sections.some((s) => s.title.toLowerCase().includes(term) || s.content.some((ct) => ct.toLowerCase().includes(term)))
    )
  }, [searchTerm])

  // Filtered Nap Am
  const filteredNapAmList = useMemo(() => {
    return NAP_AM_60_HOA_GIAP.filter((item) => {
      const matchSearch =
        !napAmSearch.trim() ||
        item.canChi.toLowerCase().includes(napAmSearch.toLowerCase()) ||
        item.napAm.toLowerCase().includes(napAmSearch.toLowerCase()) ||
        item.tinhChat.toLowerCase().includes(napAmSearch.toLowerCase())
      const matchEl = selectedNapAmElement === 'All' || item.element === selectedNapAmElement
      return matchSearch && matchEl
    })
  }, [napAmSearch, selectedNapAmElement])

  const totalScore = useMemo(() => {
    return calcStars.reduce((acc, curr) => acc + curr.score, 0)
  }, [calcStars])

  const handleSelectChapter = (id: string) => {
    navigate(`/giao-trinh/${id}`)
    setIsMobileChaptersOpen(false)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleSelectChapter(TUVI_CHAPTERS[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < TUVI_CHAPTERS.length - 1) {
      handleSelectChapter(TUVI_CHAPTERS[currentIndex + 1].id)
    }
  }

  const handleAddStar = () => {
    if (!newStarName.trim()) return
    setCalcStars([...calcStars, { name: newStarName.trim(), score: newStarScore }])
    setNewStarName('')
  }

  const handleRemoveStar = (idx: number) => {
    setCalcStars(calcStars.filter((_, i) => i !== idx))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Breadcrumb & Title */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
            <span>Giáo trình Tử Vi Tam Minh</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>Chương {activeChapter.number}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.25rem, 5vw, 1.75rem)', fontWeight: 800, lineHeight: 1.25 }}>
            GIÁO TRÌNH TỬ VI TAM MINH ĐẨU SỐ
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Badge variant="warning" size="md">
            Chuẩn Tam Minh Đường
          </Badge>
          <Badge variant="default" size="md">
            Chương {currentIndex + 1} / {TUVI_CHAPTERS.length}
          </Badge>
        </div>
      </div>

      {/* Mobile Chapter Selector Toggle */}
      <div
        className="textbook-mobile-chapter-selector"
        onClick={() => setIsMobileChaptersOpen(!isMobileChaptersOpen)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={18} color="var(--gold-primary)" />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MỤC LỤC GIÁO TRÌNH (Chạm để đổi chương)</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Chương {activeChapter.number}: {activeChapter.title}
            </div>
          </div>
        </div>
        {isMobileChaptersOpen ? <ChevronUp size={20} color="var(--gold-primary)" /> : <ChevronDown size={20} color="var(--gold-primary)" />}
      </div>

      {/* Main Content Layout */}
      <div className="textbook-layout-container">
        {/* Left Column: Chapters Navigation & Search */}
        <aside className={`textbook-sidebar ${!isMobileChaptersOpen ? 'mobile-collapsed' : ''}`}>
          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Tìm kiếm nội dung..."
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

          {/* Chapter List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Mục lục 10 Chương Giáo Trình
            </span>

            {filteredChapters.map((ch) => {
              const isSelected = ch.id === activeChapter.id
              return (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChapter(ch.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--gold-primary)' : 'transparent',
                    backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'var(--transition)',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--gold-primary)' : 'var(--bg-tertiary)',
                      color: isSelected ? '#000' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 700,
                      fontSize: '0.8rem',
                    }}
                  >
                    {ch.number}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: isSelected ? 700 : 500,
                        fontSize: '0.88rem',
                        color: isSelected ? 'var(--gold-primary)' : 'var(--text-primary)',
                        lineHeight: 1.3,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {ch.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {ch.subtitle}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Right Column: Chapter Reader */}
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            backgroundColor: 'var(--bg-primary)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
          }}
        >
          {/* Chapter Banner */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {ICON_MAP[activeChapter.icon] || <Bookmark size={18} />}
              </div>
              <Badge variant="warning" size="md">
                CHƯƠNG {activeChapter.number}
              </Badge>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.25 }}>
              {activeChapter.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              {activeChapter.subtitle}
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '4px solid var(--gold-primary)',
                padding: '1rem 1.25rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
              }}
            >
              <strong>Tóm lược nội dung: </strong>
              {activeChapter.summary}
            </div>
          </div>

          {/* Chapter Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {activeChapter.sections.map((sec) => (
              <div
                key={sec.id}
                id={`sec-${sec.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-primary)',
                    borderBottom: '1px dashed var(--border-color)',
                    paddingBottom: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--gold-primary)' }}>✦</span>
                  {sec.title}
                </h3>

                {/* Callout box if exists */}
                {sec.callout && (
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Quote size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.92rem', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                      {sec.callout.title && <strong style={{ display: 'block', fontStyle: 'normal', color: 'var(--gold-primary)', marginBottom: '0.25rem' }}>{sec.callout.title}</strong>}
                      {sec.callout.content}
                    </div>
                  </div>
                )}

                {/* Key Points Chips */}
                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {sec.keyPoints.map((kp, kIdx) => (
                      <span
                        key={kIdx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: 'var(--gold-primary)' }} />
                        {kp}
                      </span>
                    ))}
                  </div>
                )}

                {/* Content Paragraphs / Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {sec.content.map((p, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.93rem',
                        lineHeight: 1.65,
                        color: 'var(--text-primary)',
                        borderLeft: '3px solid var(--border-color)',
                      }}
                    >
                      {p}
                    </div>
                  ))}
                </div>

                {/* Table Data Rendering */}
                {sec.tableData && (
                  <div style={{ overflowX: 'auto', marginTop: '0.5rem' }}>
                    <table
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        fontSize: '0.88rem',
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '2px solid var(--border-color)' }}>
                          {sec.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, color: 'var(--gold-primary)' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)' }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ========================================== */}
          {/* SPECIAL INTERACTIVE WIDGET FOR CHAPTER IV: 60 NẠP ÂM */}
          {/* ========================================== */}
          {activeChapter.id === 'chuong-4' && (
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--gold-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)' }}>
                <SearchCode size={22} />
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
                  CÔNG CỤ TRA CỨU NHANH 60 NẠP ÂM HOA GIÁP
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                Nhập năm sinh, Can Chi hoặc chọn ngũ hành để xem ngay ý nghĩa Nạp Âm và các tuổi tương hợp tương khắc:
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Ví dụ: Giáp Tý, 1984, Kim Bạch Kim..."
                  value={napAmSearch}
                  onChange={(e) => setNapAmSearch(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                  }}
                />
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {['All', 'Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'].map((el) => (
                    <button
                      key={el}
                      onClick={() => setSelectedNapAmElement(el)}
                      style={{
                        padding: '0.4rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid',
                        borderColor: selectedNapAmElement === el ? 'var(--gold-primary)' : 'var(--border-color)',
                        backgroundColor: selectedNapAmElement === el ? 'rgba(212, 175, 55, 0.2)' : 'var(--bg-primary)',
                        color: selectedNapAmElement === el ? 'var(--gold-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                      }}
                    >
                      {el === 'All' ? 'Tất cả' : el}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', maxHeight: '420px', overflowY: 'auto' }}>
                {filteredNapAmList.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, color: 'var(--gold-primary)', fontSize: '0.95rem' }}>{item.napAm}</span>
                      <Badge variant="warning" size="sm">{item.element}</Badge>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.canChi}</div>
                    <div style={{ color: 'var(--text-secondary)' }}><em>{item.hanhChiTiet}</em></div>
                    <div style={{ lineHeight: 1.4, color: 'var(--text-primary)' }}>{item.tinhChat}</div>
                    <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
                      <span style={{ color: '#4ade80' }}>✓ Hợp: {item.hopVoi.join(', ')}</span>
                    </div>
                    <div>
                      <span style={{ color: '#f87171' }}>✗ Khắc: {item.khacVoi.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* SPECIAL INTERACTIVE WIDGET FOR CHAPTER IX: TỬ VI SỐ PHÁI */}
          {/* ========================================== */}
          {activeChapter.id === 'chuong-9' && (
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--gold-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)' }}>
                <Calculator size={22} />
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
                  BỘ TÍNH ĐIỂM TỬ VI SỐ PHÁI & BẢN ĐỒ BÀN TAY
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                Thực hành phương pháp Số Phái: Thêm các sao tọa thủ và trạng thái miếu vượng để tự động tính điểm cát/hung của cung vị.
              </p>

              {/* Calculator Box & Hand Diagram Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {/* Calculator Left */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700 }}>Danh Sách Tinh Đẩu Tọa Thủ</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: totalScore >= 5 ? '#4ade80' : totalScore >= 0 ? 'var(--gold-primary)' : '#f87171' }}>
                      Tổng Điểm: {totalScore > 0 ? `+${totalScore}` : totalScore}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '180px', overflowY: 'auto' }}>
                    {calcStars.map((st, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.6rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem' }}>
                        <span>{st.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 700, color: st.score > 0 ? '#4ade80' : '#f87171' }}>
                            {st.score > 0 ? `+${st.score}` : st.score}
                          </span>
                          <button onClick={() => handleRemoveStar(sIdx)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.75rem' }}>✕</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Form */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="Tên sao..."
                      value={newStarName}
                      onChange={(e) => setNewStarName(e.target.value)}
                      style={{ flex: 1, padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
                    />
                    <select
                      value={newStarScore}
                      onChange={(e) => setNewStarScore(Number(e.target.value))}
                      style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
                    >
                      <option value={3}>Miếu (+3)</option>
                      <option value={2}>Vượng (+2)</option>
                      <option value={1}>Đắc (+1)</option>
                      <option value={0}>Bình (0)</option>
                      <option value={-1}>Hãm nhẹ (-1)</option>
                      <option value={-2}>Hãm sát (-2)</option>
                      <option value={-3}>Đại bại (-3)</option>
                    </select>
                    <Button variant="gold" size="sm" onClick={handleAddStar}>
                      Thêm
                    </Button>
                  </div>

                  {/* Evaluation Result */}
                  <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                    <strong>Đánh giá định lượng: </strong>
                    {totalScore >= 6 ? (
                      <span style={{ color: '#4ade80' }}>Cực vượng! Cung vị có nội lực và cơ hội thành đại nghiệp lớn.</span>
                    ) : totalScore >= 2 ? (
                      <span style={{ color: 'var(--gold-primary)' }}>Khá vượng. Ổn định và có khả năng bứt phá nếu gặp vận tương trợ.</span>
                    ) : totalScore >= 0 ? (
                      <span style={{ color: 'var(--text-secondary)' }}>Trung bình. Cần nỗ lực tu dưỡng và tích lũy bền bỉ.</span>
                    ) : (
                      <span style={{ color: '#f87171' }}>Suy yếu hoặc phạm sát. Cần áp dụng Nhân Minh phòng thủ, tích phúc hóa giải.</span>
                    )}
                  </div>
                </div>

                {/* Hand Map Right */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                    <Hand size={16} style={{ color: 'var(--gold-primary)' }} />
                    <span>Đồ Hình 12 Cung Bàn Tay Trái</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
                    {HAND_PALACES.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          padding: '0.5rem 0.25rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontWeight: 800, color: 'var(--gold-primary)', fontSize: '0.95rem' }}>{p.name}</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{p.pos}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
                    Nguyên tắc: Bấm thuận chiều kim đồng hồ quanh 12 khớp đốt ngón tay trái.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Prev/Next */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-color)',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Button
              variant="outline"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              leftIcon={<ChevronLeft size={16} />}
            >
              Chương Trước
            </Button>

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Chương {currentIndex + 1} / {TUVI_CHAPTERS.length}
            </span>

            <Button
              variant="gold"
              disabled={currentIndex === TUVI_CHAPTERS.length - 1}
              onClick={handleNext}
              rightIcon={<ChevronRight size={16} />}
            >
              Chương Kế Tiếp
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
