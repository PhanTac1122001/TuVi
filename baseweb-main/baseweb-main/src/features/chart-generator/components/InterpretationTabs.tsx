import React, { useState } from 'react';
import { TuViInterpretation, StarGroupItem, TuViChart } from '../types/chart.types';
import { getPalaceStarGroupDetails } from '../engine/starGroupEngine';
import { BookOpen, Compass, Sparkles, TrendingUp, ShieldCheck, AlertTriangle, CheckCircle2, Target, Briefcase, DollarSign, Heart, Activity, Layers, Grid } from 'lucide-react';
import { STAR_PALACES_MAP } from '@/data/tuvi/starPalacesData';

const PALACE_NAME_TO_ID: Record<string, string> = {
  'Mệnh': 'menh',
  'Phụ Mẫu': 'phu-mau',
  'Phúc Đức': 'phuc-duc',
  'Điền Trạch': 'dien-trach',
  'Quan Lộc': 'quan-loc',
  'Nô Bộc': 'no-boc',
  'Thiên Di': 'thien-di',
  'Tật Ách': 'tat-ach',
  'Tài Bạch': 'tai-bach',
  'Tử Tức': 'tu-tuc',
  'Phu Thê': 'phu-the',
  'Huynh Đệ': 'huynh-de'
};

function getStarSlug(starName: string): string {
  const clean = starName.replace(/\(.\)/g, '').trim();
  return clean
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

interface InterpretationTabsProps {
  interpretation: TuViInterpretation;
  chart?: TuViChart;
}

export const InterpretationTabs: React.FC<InterpretationTabsProps> = ({ interpretation, chart }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'cachcuc' | 'stargroups' | 'palaces' | 'vanhan' | 'tamminh'>('overview');
  const [starGroupFilter, setStarGroupFilter] = useState<'all' | 'good' | 'bad'>('all');
  const [stargroupViewMode, setStargroupViewMode] = useState<'category' | 'palaces'>('category');
  const [selectedPalaceChi, setSelectedPalaceChi] = useState<number>(() => {
    const menhP = chart?.palaces.find(p => p.isMenh);
    return menhP ? menhP.index : 0;
  });

  const { starGroupAnalysis, tamMinh } = interpretation;
  const goodGroups = starGroupAnalysis?.goodGroups || [];
  const badGroups = starGroupAnalysis?.badGroups || [];
  const stats = starGroupAnalysis?.statistics;

  return (
    <section className="interpretation-card" id="interpretationSection">
      <nav className="nav-tabs">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={15} />
            TỔNG QUAN LÁ SỐ
          </span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'tamminh' ? 'active' : ''}`}
          onClick={() => setActiveTab('tamminh')}
          style={{ position: 'relative' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Target size={15} color="#d97706" />
            TAM MINH & CẢI MỆNH
            <span
              style={{
                fontSize: '0.68rem',
                padding: '1px 5px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #d97706, #b45309)',
                color: '#fff',
                fontWeight: 700
              }}
            >
              MỚI
            </span>
          </span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'cachcuc' ? 'active' : ''}`}
          onClick={() => setActiveTab('cachcuc')}
          style={{ position: 'relative' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={15} />
            CÁCH CỤC CHÍNH TINH (MỆNH - TÀI - QUAN)
            {interpretation.cachCuc && interpretation.cachCuc.length > 0 && (
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '1px 6px',
                  borderRadius: '10px',
                  background: 'rgba(183, 28, 28, 0.18)',
                  color: '#b71c1c',
                  fontWeight: 700
                }}
              >
                {interpretation.cachCuc.length}
              </span>
            )}
          </span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'stargroups' ? 'active' : ''}`}
          onClick={() => setActiveTab('stargroups')}
          style={{ position: 'relative' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={15} />
            BỘ PHỤ TINH CÁT & HUNG
            {stats && (
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '1px 6px',
                  borderRadius: '10px',
                  background: 'rgba(217, 119, 6, 0.18)',
                  color: '#b45309',
                  fontWeight: 700
                }}
              >
                {goodGroups.length + badGroups.length}
              </span>
            )}
          </span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'palaces' ? 'active' : ''}`}
          onClick={() => setActiveTab('palaces')}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={15} />
            LUẬN GIẢI 12 CUNG
          </span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'vanhan' ? 'active' : ''}`}
          onClick={() => setActiveTab('vanhan')}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <TrendingUp size={15} />
            LUẬN VẬN HẠN
          </span>
        </button>
      </nav>

      {/* 1. Tab Overview */}
      {activeTab === 'overview' && (
        <div className="tab-content active" id="tab-overview">
          <div className="reading-block">
            <h3><span>✦</span> Tổng Quan Bản Mệnh</h3>
            <p>{interpretation.overview.summary}</p>
          </div>
          <div className="reading-block">
            <h3><span>✦</span> Số Phận & Môi Trường (Mệnh vs Cục)</h3>
            <p>
              <strong style={{ color: 'var(--tg-gold-dark)' }}>
                {interpretation.overview.elementRelation.status}:
              </strong>{' '}
              {interpretation.overview.elementRelation.detail}
            </p>
          </div>
          <div className="reading-block">
            <h3><span>✦</span> Ý Nghĩa Thân Cư</h3>
            <p>{interpretation.overview.thanCuDetail}</p>
          </div>

          {stats && (
            <div className="reading-block" style={{ borderLeftColor: '#d97706' }}>
              <h3><span>✦</span> Đánh Giá Tổng Lượng Cát - Hung Tinh</h3>
              <p>
                <strong>{stats.balanceStatus}:</strong> {stats.balanceComment}
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
                  ✦ {goodGroups.length} bộ Cát Tinh hội tụ
                </span>
                <span style={{ fontSize: '0.88rem', color: '#991b1b', fontWeight: 600 }}>
                  ✦ {badGroups.length} bộ Hung Sát Tinh ảnh hưởng
                </span>
                <span style={{ fontSize: '0.88rem', color: '#4b5563' }}>
                  ✦ Tỷ lệ sao toàn bàn: {stats.totalGoodStars} Cát / {stats.totalBadStars} Hung
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Tab Cách Cục */}
      {activeTab === 'cachcuc' && (
        <div className="tab-content active" id="tab-cachcuc">
          <div
            style={{
              padding: '8px 14px',
              marginBottom: '1rem',
              background: 'rgba(183, 28, 28, 0.05)',
              border: '1px solid rgba(183, 28, 28, 0.2)',
              borderRadius: '6px',
              fontSize: '0.82rem',
              color: '#7f1d1d',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Sparkles size={16} color="#b71c1c" style={{ flexShrink: 0 }} />
            <span>
              Hệ thống cách cục được thiết lập nghiêm ngặt dựa trên <strong>14 Chính Tinh</strong> tọa thủ và tương hội trong <strong>Tam Hợp Mệnh - Tài Bạch - Quan Lộc</strong> (không xét phụ tinh hay các cung ngoài).
            </span>
          </div>
          {interpretation.cachCuc.length === 0 ? (
            <div className="reading-block">
              <p>Lá số có các bộ sao kết hợp hài hòa, tọa độ ổn định, không rơi vào các cách cục biến động cực đoan.</p>
            </div>
          ) : (
            interpretation.cachCuc.map((c, idx) => (
              <div
                key={idx}
                className="reading-block"
                style={{
                  borderLeft: '4px solid var(--tg-gold-border, #d4af37)',
                  background: 'linear-gradient(135deg, #fdfbf7 0%, #faf6ec 100%)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  padding: '1.1rem 1.35rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '1rem',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderLeftWidth: '4px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: 'var(--tg-seal-dark, #8b0000)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} color="var(--tg-gold-dark, #916f28)" />
                    {c.name}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '4px',
                      background: 'linear-gradient(135deg, #b71c1c 0%, #8b0000 100%)',
                      color: '#ffffff',
                      boxShadow: '0 1px 3px rgba(183, 28, 28, 0.25)',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {c.type}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--tg-ink-medium, #4c443c)', lineHeight: 1.65 }}>
                  {c.description}
                </p>
              </div>
            ))
          )}
        </div>
      )}

      {/* 3. Tab BỘ PHỤ TINH CÁT & HUNG */}
      {activeTab === 'stargroups' && (
        <div className="tab-content active" id="tab-stargroups">
          {/* Header Bảng Cân Bằng Cát - Hung */}
          {stats && (
            <div
              style={{
                background: 'linear-gradient(135deg, #fffdf8 0%, #fef8ee 100%)',
                border: '1px solid #fed7aa',
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                marginBottom: '1.25rem',
                boxShadow: '0 2px 6px rgba(217, 119, 6, 0.06)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#b45309',
                        letterSpacing: '0.5px'
                      }}
                    >
                      CÁN CÂN PHỤ TINH:
                    </span>
                    <span
                      style={{
                        background: '#d97706',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {stats.balanceStatus}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.5 }}>
                    {stats.balanceComment}
                  </p>
                </div>

                {/* View Mode & Filter Controls */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                  {/* Mode Switcher */}
                  <div style={{ display: 'inline-flex', background: '#f1f5f9', padding: '2px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <button
                      type="button"
                      onClick={() => setStargroupViewMode('category')}
                      style={{
                        padding: '4px 10px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        background: stargroupViewMode === 'category' ? '#ffffff' : 'transparent',
                        color: stargroupViewMode === 'category' ? '#b45309' : '#64748b',
                        boxShadow: stargroupViewMode === 'category' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Layers size={13} /> Theo Bộ Sao
                    </button>
                    <button
                      type="button"
                      onClick={() => setStargroupViewMode('palaces')}
                      style={{
                        padding: '4px 10px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        background: stargroupViewMode === 'palaces' ? '#ffffff' : 'transparent',
                        color: stargroupViewMode === 'palaces' ? '#b45309' : '#64748b',
                        boxShadow: stargroupViewMode === 'palaces' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Grid size={13} /> Theo Từng Cung (12 Cung)
                    </button>
                  </div>

                  {/* Filter buttons (chỉ hiển thị khi ở mode 'category') */}
                  {stargroupViewMode === 'category' && (
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => setStarGroupFilter('all')}
                        style={{
                          padding: '3px 8px',
                          fontSize: '0.78rem',
                          borderRadius: '4px',
                          border: '1px solid',
                          borderColor: starGroupFilter === 'all' ? '#d97706' : '#d1d5db',
                          background: starGroupFilter === 'all' ? '#d97706' : '#ffffff',
                          color: starGroupFilter === 'all' ? '#ffffff' : '#374151',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        Tất cả ({goodGroups.length + badGroups.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setStarGroupFilter('good')}
                        style={{
                          padding: '3px 8px',
                          fontSize: '0.78rem',
                          borderRadius: '4px',
                          border: '1px solid',
                          borderColor: starGroupFilter === 'good' ? '#16a34a' : '#d1d5db',
                          background: starGroupFilter === 'good' ? '#16a34a' : '#ffffff',
                          color: starGroupFilter === 'good' ? '#ffffff' : '#166534',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        Cát Tinh ({goodGroups.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setStarGroupFilter('bad')}
                        style={{
                          padding: '3px 8px',
                          fontSize: '0.78rem',
                          borderRadius: '4px',
                          border: '1px solid',
                          borderColor: starGroupFilter === 'bad' ? '#dc2626' : '#d1d5db',
                          background: starGroupFilter === 'bad' ? '#dc2626' : '#ffffff',
                          color: starGroupFilter === 'bad' ? '#ffffff' : '#991b1b',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        Hung Sát ({badGroups.length})
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CHẾ ĐỘ 1: XEM THEO TỪNG CUNG TRÊN LÁ SỐ */}
          {stargroupViewMode === 'palaces' && (() => {
            const palacesList = chart?.palaces || [];
            const currentSelectedPalace = palacesList.find(p => p.index === selectedPalaceChi) || palacesList[0];
            const pDetails = currentSelectedPalace && starGroupAnalysis && palacesList.length > 0
              ? getPalaceStarGroupDetails(currentSelectedPalace.index, starGroupAnalysis, palacesList)
              : { good: [], bad: [] };

            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* 12 Cung Selector Bar */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    padding: '0.75rem',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  {palacesList.map(p => {
                    const grp = getPalaceStarGroupDetails(p.index, starGroupAnalysis, palacesList);
                    const isSelected = p.index === currentSelectedPalace?.index;
                    return (
                      <button
                        key={p.index}
                        type="button"
                        onClick={() => setSelectedPalaceChi(p.index)}
                        style={{
                          padding: '6px 10px',
                          fontSize: '0.82rem',
                          borderRadius: '6px',
                          border: '1px solid',
                          borderColor: isSelected ? '#d97706' : '#cbd5e1',
                          background: isSelected ? 'linear-gradient(135deg, #fffbeb, #fef3c7)' : '#ffffff',
                          color: isSelected ? '#92400e' : '#334155',
                          fontWeight: isSelected ? 800 : 500,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          boxShadow: isSelected ? '0 1px 4px rgba(217, 119, 6, 0.15)' : 'none',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span>{p.name}</span>
                        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>({p.chi})</span>
                        {grp.good.length > 0 && (
                          <span style={{ fontSize: '0.66rem', background: '#dcfce7', color: '#166534', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>
                            +{grp.good.length}
                          </span>
                        )}
                        {grp.bad.length > 0 && (
                          <span style={{ fontSize: '0.66rem', background: '#fee2e2', color: '#991b1b', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>
                            -{grp.bad.length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Chi tiết các bộ sao của cung được chọn */}
                {currentSelectedPalace && (
                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #fed7aa',
                      borderRadius: '8px',
                      padding: '1.25rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                    }}
                  >
                    {/* Header Cung */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--tg-gold-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>✦</span> Cung {currentSelectedPalace.name} ({currentSelectedPalace.can} {currentSelectedPalace.chi})
                          {currentSelectedPalace.isMenh && <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: '#fef3c7', color: '#b45309', fontWeight: 700 }}>MỆNH</span>}
                          {currentSelectedPalace.isThan && <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: '#e0f2fe', color: '#0369a1', fontWeight: 700 }}>THÂN</span>}
                        </h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '0.86rem', color: '#64748b' }}>
                          Chính tinh: {currentSelectedPalace.majorStars.length > 0 ? currentSelectedPalace.majorStars.map(s => `${s.name} (${s.strength})`).join(', ') : 'Vô Chính Diệu'} • Đại Vận: {currentSelectedPalace.daiVan} - {currentSelectedPalace.daiVan + 9} tuổi
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ fontSize: '0.8rem', padding: '3px 8px', borderRadius: '4px', background: '#f0fdf4', color: '#166534', fontWeight: 700, border: '1px solid #bbf7d0' }}>
                          {pDetails.good.length} Bộ Cát Tinh
                        </span>
                        <span style={{ fontSize: '0.8rem', padding: '3px 8px', borderRadius: '4px', background: '#fef2f2', color: '#991b1b', fontWeight: 700, border: '1px solid #fecaca' }}>
                          {pDetails.bad.length} Bộ Hung Sát
                        </span>
                      </div>
                    </div>

                    {/* Danh sách Bộ Cát Tinh */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.98rem', color: '#15803d', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} color="#16a34a" />
                        CÁC BỘ PHỤ TINH CÁT HỘI TỤ VÀO CUNG ({pDetails.good.length})
                      </h4>
                      {pDetails.good.length === 0 ? (
                        <p style={{ fontSize: '0.86rem', color: '#94a3b8', fontStyle: 'italic', margin: 0 }}>
                          Cung này không hội tụ các bộ cát tinh quy mô lớn (vẫn có các phụ tinh cát lẻ tọa thủ).
                        </p>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {pDetails.good.map((grp: StarGroupItem) => (
                            <div
                              key={grp.id}
                              style={{
                                background: '#f0fdf4',
                                border: '1px solid #bbf7d0',
                                borderLeft: '4px solid #16a34a',
                                borderRadius: '6px',
                                padding: '0.75rem 1rem'
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                                <strong style={{ color: '#166534', fontSize: '0.92rem' }}>✦ {grp.name}</strong>
                                <span style={{ fontSize: '0.72rem', padding: '1px 6px', borderRadius: '3px', background: '#dcfce7', color: '#15803d', fontWeight: 600 }}>
                                  {grp.category}
                                </span>
                              </div>
                              <p style={{ margin: '0 0 6px 0', fontSize: '0.86rem', color: '#374151', lineHeight: 1.5 }}>
                                {grp.effect}
                              </p>
                              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                <strong>Vị trí các sao: </strong>
                                {grp.locations.map(l => `${l.starName} (${l.relationType} tại Cung ${l.palaceName})`).join(' • ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Danh sách Bộ Hung Sát Tinh */}
                    <div>
                      <h4 style={{ fontSize: '0.98rem', color: '#b91c1c', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <AlertTriangle size={16} color="#dc2626" />
                        CÁC BỘ PHỤ TINH HUNG SÁT ẢNH HƯỞNG ({pDetails.bad.length})
                      </h4>
                      {pDetails.bad.length === 0 ? (
                        <p style={{ fontSize: '0.86rem', color: '#16a34a', fontStyle: 'italic', margin: 0 }}>
                          Cung này bình an, không bị các tổ hợp hung sát tinh mạnh xâm phạm.
                        </p>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {pDetails.bad.map((grp: StarGroupItem) => (
                            <div
                              key={grp.id}
                              style={{
                                background: '#fef2f2',
                                border: '1px solid #fecaca',
                                borderLeft: '4px solid #dc2626',
                                borderRadius: '6px',
                                padding: '0.75rem 1rem'
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                                <strong style={{ color: '#991b1b', fontSize: '0.92rem' }}>⚠ {grp.name}</strong>
                                <span style={{ fontSize: '0.72rem', padding: '1px 6px', borderRadius: '3px', background: '#fee2e2', color: '#991b1b', fontWeight: 600 }}>
                                  {grp.category}
                                </span>
                              </div>
                              <p style={{ margin: '0 0 6px 0', fontSize: '0.86rem', color: '#374151', lineHeight: 1.5 }}>
                                {grp.effect}
                              </p>
                              {grp.remedy && (
                                <div style={{ fontSize: '0.82rem', color: '#92400e', background: '#fffbeb', border: '1px dashed #f59e0b', borderRadius: '4px', padding: '5px 8px', marginTop: '4px' }}>
                                  <strong>💡 Hóa giải: </strong>{grp.remedy}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* CHẾ ĐỘ 2: XEM THEO PHÂN LOẠI DANH MỤC BỘ SAO (GRID 2 CỘT) */}
          {stargroupViewMode === 'category' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: starGroupFilter === 'all' ? 'repeat(auto-fit, minmax(360px, 1fr))' : '1fr',
                gap: '1.25rem'
              }}
            >
              {/* Phân Khu 1: Bộ Phụ Tinh Cát */}
              {(starGroupFilter === 'all' || starGroupFilter === 'good') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      paddingBottom: '6px',
                      borderBottom: '2px solid #16a34a'
                    }}
                  >
                    <CheckCircle2 size={18} color="#16a34a" />
                    <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#15803d', fontWeight: 800 }}>
                      BỘ PHỤ TINH CÁT HỘI TỤ ({goodGroups.length})
                    </h3>
                  </div>

                  {goodGroups.length === 0 ? (
                    <p style={{ color: '#6b7280', fontStyle: 'italic', fontSize: '0.9rem' }}>
                      Chưa phát hiện bộ phụ tinh cát đặc biệt tập hợp quy mô lớn trên lá số.
                    </p>
                  ) : (
                    goodGroups.map((group: StarGroupItem) => (
                      <div
                        key={group.id}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #bbf7d0',
                          borderLeft: '4px solid #16a34a',
                          borderRadius: '6px',
                          padding: '0.9rem 1rem',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#166534' }}>
                            ✦ {group.name}
                          </div>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: '#f0fdf4',
                                color: '#15803d',
                                fontWeight: 600,
                                border: '1px solid #bbf7d0'
                              }}
                            >
                              {group.category}
                            </span>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: '#fef3c7',
                                color: '#92400e',
                                fontWeight: 600
                              }}
                            >
                              {group.scope}
                            </span>
                          </div>
                        </div>

                        {/* Danh sách các sao cấu thành */}
                        <div style={{ fontSize: '0.82rem', color: '#374151' }}>
                          <strong style={{ color: '#1f2937' }}>Các sao hội tụ: </strong>
                          <span style={{ color: '#15803d', fontWeight: 600 }}>{group.foundStars.join(', ')}</span>
                        </div>

                        {/* Vị trí cung nổi bật */}
                        {group.prominentPalaces.length > 0 && (
                          <div style={{ fontSize: '0.82rem', color: '#374151' }}>
                            <strong style={{ color: '#1f2937' }}>Cung hội chiếu: </strong>
                            {group.prominentPalaces.join(', ')}
                          </div>
                        )}

                        {/* Tác dụng */}
                        <p style={{ margin: 0, fontSize: '0.88rem', color: '#374151', lineHeight: 1.5 }}>
                          {group.effect}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Phân Khu 2: Bộ Phụ Tinh Hung - Sát - Bại */}
              {(starGroupFilter === 'all' || starGroupFilter === 'bad') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      paddingBottom: '6px',
                      borderBottom: '2px solid #dc2626'
                    }}
                  >
                    <AlertTriangle size={18} color="#dc2626" />
                    <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#b91c1c', fontWeight: 800 }}>
                      BỘ PHỤ TINH HUNG SÁT CẦN LƯU Ý ({badGroups.length})
                    </h3>
                  </div>

                  {badGroups.length === 0 ? (
                    <p style={{ color: '#16a34a', fontStyle: 'italic', fontSize: '0.9rem' }}>
                      Lá số không xuất hiện các bộ phụ tinh hung sát quy mô lớn.
                    </p>
                  ) : (
                    badGroups.map((group: StarGroupItem) => (
                      <div
                        key={group.id}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #fecaca',
                          borderLeft: '4px solid #dc2626',
                          borderRadius: '6px',
                          padding: '0.9rem 1rem',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#991b1b' }}>
                            ⚠ {group.name}
                          </div>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: '#fef2f2',
                                color: '#991b1b',
                                fontWeight: 600,
                                border: '1px solid #fecaca'
                              }}
                            >
                              {group.category}
                            </span>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: '#fee2e2',
                                color: '#7f1d1d',
                                fontWeight: 600
                              }}
                            >
                              {group.scope}
                            </span>
                          </div>
                        </div>

                        {/* Danh sách các sao cấu thành */}
                        <div style={{ fontSize: '0.82rem', color: '#374151' }}>
                          <strong style={{ color: '#1f2937' }}>Các sao hội tụ: </strong>
                          <span style={{ color: '#b91c1c', fontWeight: 600 }}>{group.foundStars.join(', ')}</span>
                        </div>

                        {/* Vị trí cung nổi bật */}
                        {group.prominentPalaces.length > 0 && (
                          <div style={{ fontSize: '0.82rem', color: '#374151' }}>
                            <strong style={{ color: '#1f2937' }}>Cung ảnh hưởng: </strong>
                            {group.prominentPalaces.join(', ')}
                          </div>
                        )}

                        {/* Tác hại / Rủi ro */}
                        <p style={{ margin: 0, fontSize: '0.88rem', color: '#374151', lineHeight: 1.5 }}>
                          {group.effect}
                        </p>

                        {/* Hóa giải & Lời khuyên */}
                        {group.remedy && (
                          <div
                            style={{
                              marginTop: '4px',
                              background: '#fffbeb',
                              border: '1px dashed #f59e0b',
                              borderRadius: '4px',
                              padding: '6px 10px',
                              fontSize: '0.83rem',
                              color: '#92400e'
                            }}
                          >
                            <strong>Hóa giải / Lời khuyên: </strong>
                            {group.remedy}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. Tab 12 Cung */}
      {activeTab === 'palaces' && (
        <div className="tab-content active" id="tab-palaces">
          {interpretation.palaceReadings.map((p, idx) => (
            <div key={idx} className="reading-block">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <h3 style={{ margin: 0 }}>
                  <span>✦</span> Cung {p.name} ({p.can} {p.chi}) {p.isMenh && '(MỆNH)'} {p.isThan && '(THÂN)'}
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 600 }}>
                  Đại Vận: {p.daiVan} - {p.daiVan + 9} tuổi
                </span>
              </div>

              {/* Badges bộ sao cát/hung của cung */}
              {((p.goodGroups && p.goodGroups.length > 0) || (p.badGroups && p.badGroups.length > 0)) && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  {p.goodGroups && p.goodGroups.map((g, gIdx) => (
                    <span
                      key={`good-${gIdx}`}
                      style={{
                        fontSize: '0.74rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: '#dcfce7',
                        color: '#166534',
                        fontWeight: 600,
                        border: '1px solid #86efac'
                      }}
                      title="Bộ cát tinh hội tụ tại cung này hoặc tam hợp / xung chiếu"
                    >
                      ✓ {g}
                    </span>
                  ))}
                  {p.badGroups && p.badGroups.map((g, gIdx) => (
                    <span
                      key={`bad-${gIdx}`}
                      style={{
                        fontSize: '0.74rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: '#fee2e2',
                        color: '#991b1b',
                        fontWeight: 600,
                        border: '1px solid #fca5a5'
                      }}
                      title="Bộ hung sát tinh ảnh hưởng cung này hoặc tam hợp / xung chiếu"
                    >
                      ⚠ {g}
                    </span>
                  ))}
                </div>
              )}

              <p style={{ margin: 0, lineHeight: 1.6 }}>{p.reading}</p>

              {/* Luận giải chi tiết từng Chính Tinh tọa thủ */}
              {(() => {
                const palaceObj = chart?.palaces.find(cp => cp.name === p.name && cp.chi === p.chi);
                if (!palaceObj || !palaceObj.majorStars || palaceObj.majorStars.length === 0) return null;
                const pId = PALACE_NAME_TO_ID[p.name] || 'menh';

                return (
                  <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--tg-gold-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Compass size={14} />
                      <span>Ý Nghĩa Chi Tiết Chính Tinh Tọa Thủ ({palaceObj.majorStars.length}):</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: palaceObj.majorStars.length > 1 ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr', gap: '0.65rem' }}>
                      {palaceObj.majorStars.map((star, sIdx) => {
                        const clean = star.name.replace(/\(.\)/g, '').trim();
                        const slug = getStarSlug(clean);
                        const detail = STAR_PALACES_MAP[slug]?.[pId];
                        if (!detail) return null;

                        return (
                          <div
                            key={sIdx}
                            style={{
                              background: '#fcfaf6',
                              border: '1px solid rgba(197, 160, 89, 0.35)',
                              borderRadius: '6px',
                              padding: '0.75rem 0.9rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.45rem',
                              fontSize: '0.84rem'
                            }}
                          >
                            <div style={{ fontWeight: 800, color: '#78350f', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <span>★ {clean} ({star.strength})</span>
                              <span style={{ fontSize: '0.72rem', color: '#854d0e', background: 'rgba(217, 119, 6, 0.1)', padding: '1px 6px', borderRadius: '4px' }}>
                                Hành {star.element}
                              </span>
                            </div>
                            <p style={{ margin: 0, color: '#33291e', lineHeight: 1.5, textAlign: 'justify' }}>
                              {detail.overview}
                            </p>
                            {detail.goodAspects && (
                              <div style={{ color: '#15803d', fontSize: '0.8rem', background: '#f0fdf4', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bbf7d0' }}>
                                <strong>Cát tinh: </strong>{detail.goodAspects}
                              </div>
                            )}
                            {detail.badAspects && (
                              <div style={{ color: '#991b1b', fontSize: '0.8rem', background: '#fef2f2', padding: '4px 8px', borderRadius: '4px', border: '1px solid #fecaca' }}>
                                <strong>Hung sát: </strong>{detail.badAspects}
                              </div>
                            )}
                            {detail.remedy && (
                              <div style={{ color: '#854d0e', fontSize: '0.8rem', background: '#fffbeb', padding: '4px 8px', borderRadius: '4px', border: '1px dashed #fde68a' }}>
                                <strong>Hóa giải: </strong>{detail.remedy}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
      )}

      {/* 5. Tab Vận Hạn */}
      {activeTab === 'vanhan' && (
        <div className="tab-content active" id="tab-vanhan">
          <div className="reading-block">
            <h3>
              <span>✦</span> Luận Đại Vận (10 Năm - Tuổi hiện tại: {interpretation.vanHan.currentAge} tuổi)
            </h3>
            <p>{interpretation.vanHan.daiVanText}</p>
          </div>
          <div className="reading-block">
            <h3><span>✦</span> Luận Tiểu Vận Năm Xem</h3>
            <p>{interpretation.vanHan.tieuVanText}</p>
          </div>
        </div>
      )}

      {/* 6. Tab Tam Minh & Cải Mệnh */}
      {activeTab === 'tamminh' && tamMinh && (
        <div className="tab-content active" id="tab-tamminh">
          {/* Banner Thế Trận Vận Mệnh */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(180, 83, 9, 0.04) 100%)',
              border: '1px solid rgba(217, 119, 6, 0.25)',
              marginBottom: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={20} color="#d97706" />
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--tg-gold-dark)', fontWeight: 700 }}>
                  Thế Trận Vận Mệnh: {tamMinh.theCo.name}
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  backgroundColor: tamMinh.theCo.badgeColor,
                  color: '#fff'
                }}
              >
                CỤC DIỆN TAM MINH
              </span>
            </div>
            <p style={{ margin: '0 0 0.5rem 0', lineHeight: 1.6, color: 'var(--tg-text-main)' }}>
              {tamMinh.theCo.overview}
            </p>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#b45309' }}>
              💡 {tamMinh.theCo.strategySummary}
            </div>
          </div>

          {/* 3 Cột: Thiên - Địa - Nhân */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}
          >
            {/* Thiên Minh */}
            <div className="reading-block" style={{ borderLeftColor: '#2563eb', margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <h4 style={{ margin: 0, color: '#1e40af', fontSize: '1rem' }}>
                  <span>✦</span> {tamMinh.pillars.thien.name}
                </h4>
                <span style={{ fontWeight: 700, color: '#2563eb', fontSize: '0.9rem' }}>
                  {tamMinh.pillars.thien.score}/100
                </span>
              </div>
              <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: `${tamMinh.pillars.thien.score}%`, height: '100%', background: '#2563eb', borderRadius: '3px' }} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e40af', marginBottom: '8px' }}>
                Trạng thái: {tamMinh.pillars.thien.status}
              </div>
              <ul style={{ margin: '0 0 10px 0', paddingLeft: '1.1rem', fontSize: '0.84rem', lineHeight: 1.5 }}>
                {tamMinh.pillars.thien.highlights.map((hl, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{hl}</li>
                ))}
              </ul>
              <p style={{ margin: 0, fontSize: '0.82rem', fontStyle: 'italic', color: '#475569', borderTop: '1px dashed #cbd5e1', paddingTop: '6px' }}>
                📌 {tamMinh.pillars.thien.advice}
              </p>
            </div>

            {/* Địa Minh */}
            <div className="reading-block" style={{ borderLeftColor: '#d97706', margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <h4 style={{ margin: 0, color: '#b45309', fontSize: '1rem' }}>
                  <span>✦</span> {tamMinh.pillars.dia.name}
                </h4>
                <span style={{ fontWeight: 700, color: '#d97706', fontSize: '0.9rem' }}>
                  {tamMinh.pillars.dia.score}/100
                </span>
              </div>
              <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: `${tamMinh.pillars.dia.score}%`, height: '100%', background: '#d97706', borderRadius: '3px' }} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#b45309', marginBottom: '8px' }}>
                Trạng thái: {tamMinh.pillars.dia.status}
              </div>
              <ul style={{ margin: '0 0 10px 0', paddingLeft: '1.1rem', fontSize: '0.84rem', lineHeight: 1.5 }}>
                {tamMinh.pillars.dia.highlights.map((hl, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{hl}</li>
                ))}
              </ul>
              <p style={{ margin: 0, fontSize: '0.82rem', fontStyle: 'italic', color: '#475569', borderTop: '1px dashed #cbd5e1', paddingTop: '6px' }}>
                📌 {tamMinh.pillars.dia.advice}
              </p>
            </div>

            {/* Nhân Minh */}
            <div className="reading-block" style={{ borderLeftColor: '#16a34a', margin: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <h4 style={{ margin: 0, color: '#15803d', fontSize: '1rem' }}>
                  <span>✦</span> {tamMinh.pillars.nhan.name}
                </h4>
                <span style={{ fontWeight: 700, color: '#16a34a', fontSize: '0.9rem' }}>
                  {tamMinh.pillars.nhan.score}/100
                </span>
              </div>
              <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: `${tamMinh.pillars.nhan.score}%`, height: '100%', background: '#16a34a', borderRadius: '3px' }} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#15803d', marginBottom: '8px' }}>
                Trạng thái: {tamMinh.pillars.nhan.status}
              </div>
              <ul style={{ margin: '0 0 10px 0', paddingLeft: '1.1rem', fontSize: '0.84rem', lineHeight: 1.5 }}>
                {tamMinh.pillars.nhan.highlights.map((hl, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{hl}</li>
                ))}
              </ul>
              <p style={{ margin: 0, fontSize: '0.82rem', fontStyle: 'italic', color: '#475569', borderTop: '1px dashed #cbd5e1', paddingTop: '6px' }}>
                📌 {tamMinh.pillars.nhan.advice}
              </p>
            </div>
          </div>

          {/* 4 Trụ Cột Chiến Lược */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--tg-gold-dark)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} />
              Chiến Lược Hành Động 4 Trụ Cột Cuộc Đời
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {/* Sự Nghiệp */}
              <div className="reading-block" style={{ borderLeftColor: '#3b82f6', margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Briefcase size={16} color="#2563eb" />
                  <strong style={{ color: '#1e40af', fontSize: '0.95rem' }}>Công Danh & Sự Nghiệp</strong>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--tg-text-main)', marginBottom: '4px' }}>
                  {tamMinh.strategies.career.title}
                </div>
                <p style={{ fontSize: '0.84rem', lineHeight: 1.5, margin: '0 0 8px 0', color: '#475569' }}>
                  {tamMinh.strategies.career.detail}
                </p>
                <div style={{ fontSize: '0.82rem', color: '#1e3a8a', background: 'rgba(37, 99, 235, 0.08)', padding: '6px 10px', borderRadius: '6px', fontWeight: 600 }}>
                  👉 Hành động: {tamMinh.strategies.career.action}
                </div>
              </div>

              {/* Tài Chính */}
              <div className="reading-block" style={{ borderLeftColor: '#10b981', margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <DollarSign size={16} color="#059669" />
                  <strong style={{ color: '#065f46', fontSize: '0.95rem' }}>Tài Chính & Dòng Tiền</strong>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--tg-text-main)', marginBottom: '4px' }}>
                  {tamMinh.strategies.wealth.title}
                </div>
                <p style={{ fontSize: '0.84rem', lineHeight: 1.5, margin: '0 0 8px 0', color: '#475569' }}>
                  {tamMinh.strategies.wealth.detail}
                </p>
                <div style={{ fontSize: '0.82rem', color: '#064e3b', background: 'rgba(16, 185, 129, 0.08)', padding: '6px 10px', borderRadius: '6px', fontWeight: 600 }}>
                  👉 Hành động: {tamMinh.strategies.wealth.action}
                </div>
              </div>

              {/* Tình Cảm */}
              <div className="reading-block" style={{ borderLeftColor: '#ec4899', margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Heart size={16} color="#db2777" />
                  <strong style={{ color: '#9d174d', fontSize: '0.95rem' }}>Hôn Nhân & Gia Đạo</strong>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--tg-text-main)', marginBottom: '4px' }}>
                  {tamMinh.strategies.relationship.title}
                </div>
                <p style={{ fontSize: '0.84rem', lineHeight: 1.5, margin: '0 0 8px 0', color: '#475569' }}>
                  {tamMinh.strategies.relationship.detail}
                </p>
                <div style={{ fontSize: '0.82rem', color: '#831843', background: 'rgba(236, 72, 153, 0.08)', padding: '6px 10px', borderRadius: '6px', fontWeight: 600 }}>
                  👉 Hành động: {tamMinh.strategies.relationship.action}
                </div>
              </div>

              {/* Sức Khỏe */}
              <div className="reading-block" style={{ borderLeftColor: '#f59e0b', margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Activity size={16} color="#d97706" />
                  <strong style={{ color: '#92400e', fontSize: '0.95rem' }}>Dưỡng Sinh & Sức Khỏe</strong>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--tg-text-main)', marginBottom: '4px' }}>
                  {tamMinh.strategies.health.title}
                </div>
                <p style={{ fontSize: '0.84rem', lineHeight: 1.5, margin: '0 0 8px 0', color: '#475569' }}>
                  {tamMinh.strategies.health.detail}
                </p>
                <div style={{ fontSize: '0.82rem', color: '#78350f', background: 'rgba(245, 158, 11, 0.08)', padding: '6px 10px', borderRadius: '6px', fontWeight: 600 }}>
                  👉 Hành động: {tamMinh.strategies.health.action}
                </div>
              </div>
            </div>
          </div>

          {/* Lộ Trình Hành Động Theo Thời Gian */}
          <div className="reading-block" style={{ borderLeftColor: '#8b5cf6', margin: 0 }}>
            <h3 style={{ fontSize: '1.05rem', color: '#6d28d9', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✦</span> Lộ Trình Hành Động Cải Mệnh Theo Thời Gian
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tamMinh.actionPlans.map((plan, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <strong style={{ color: '#4338ca', fontSize: '0.92rem' }}>{plan.timeline}</strong>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Trọng tâm: {plan.focus}</span>
                  </div>
                  <ul style={{ margin: '6px 0 0 0', paddingLeft: '1.2rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {plan.actions.map((act, aIdx) => (
                      <li key={aIdx} style={{ color: 'var(--tg-text-main)' }}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
