import React, { useState, useMemo, useRef, useEffect } from 'react';
import { LayoutGrid, List, Check, Loader2, Copy } from 'lucide-react';
import { TuViChart, StarGroupItem, TuViPalace } from '../types/chart.types';
import { ThienBanCell } from './ThienBanCell';
import { PalaceCell, RelationType, HoveredGroupState } from './PalaceCell';
import { getBorderBadgesMap, BorderBadge } from './BorderBadges';
import { getTamHopStarGroups, getCanonicalTamHopChiString } from '../engine/starGroupEngine';
import { getStarGroupHoverInfo, StarGroupHoverResult } from '../engine/starHoverEngine';
import { StarGroupModal } from './StarGroupModal';
import { StarDetailModal, SelectedStarInfo } from './StarDetailModal';
import { PalaceMajorStarsPanel } from './PalaceMajorStarsPanel';
import { PalaceDetailModal } from './PalaceDetailModal';
import { captureChartTemporary } from '../utils/exportChartImage';
import { ChartCopyToast } from './ChartCopyToast';

interface ChartBoardProps {
  chart: TuViChart;
  userName: string;
}

export const ChartBoard: React.FC<ChartBoardProps> = ({ chart, userName }) => {
  const [activePalaceIndex, setActivePalaceIndex] = useState<number | null>(null);
  const [showConnectors, setShowConnectors] = useState<boolean>(true);
  const [selectedStarGroup, setSelectedStarGroup] = useState<StarGroupItem | null>(null);
  const [selectedStarInfo, setSelectedStarInfo] = useState<SelectedStarInfo | null>(null);
  const [selectedPalaceForModal, setSelectedPalaceForModal] = useState<TuViPalace | null>(null);
  const [hoveredGroupResult, setHoveredGroupResult] = useState<StarGroupHoverResult | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureSuccess, setCaptureSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const BASE_WIDTH = 800;
  const boardWrapperRef = useRef<HTMLDivElement>(null);
  const boardGridRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.innerWidth < BASE_WIDTH) {
      const estimatedW = Math.max(280, window.innerWidth - 8);
      return Math.min(1, Math.max(0.25, estimatedW / BASE_WIDTH));
    }
    return 1;
  });
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      if (!boardWrapperRef.current) return;
      const wrapperW = boardWrapperRef.current.clientWidth || (typeof window !== 'undefined' ? window.innerWidth - 8 : 0);
      if (wrapperW > 0 && wrapperW < BASE_WIDTH) {
        const s = wrapperW / BASE_WIDTH;
        setScale(s);
        if (boardGridRef.current) {
          const naturalH = boardGridRef.current.offsetHeight;
          if (naturalH > 0) {
            setScaledHeight(Math.ceil(naturalH * s));
          }
        }
      } else {
        setScale(1);
        setScaledHeight(undefined);
      }
    };

    handleResize();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && boardWrapperRef.current) {
      ro = new ResizeObserver(() => handleResize());
      ro.observe(boardWrapperRef.current);
      if (boardGridRef.current) {
        ro.observe(boardGridRef.current);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [chart, activePalaceIndex, viewMode]);

  useEffect(() => {
    if (scale < 1 && boardGridRef.current) {
      const naturalH = boardGridRef.current.offsetHeight;
      if (naturalH > 0) {
        setScaledHeight(Math.ceil(naturalH * scale));
      }
    }
  }, [scale, chart, activePalaceIndex]);

  const badgesByTargetChi = getBorderBadgesMap(chart.palaces);

  // Xác định Cung Mệnh chuẩn
  const menhPalace = chart.palaces.find(p => p.isMenh) || chart.palaces[0];

  // Cung trung tâm đang soi chiếu: nếu không chọn cung nào thì mặc định là Cung Mệnh
  const currentTargetChi = activePalaceIndex !== null ? activePalaceIndex : menhPalace.index;
  const currentTargetPalace = chart.palaces.find(p => p.index === currentTargetChi) || menhPalace;

  // Tính quan hệ Tam Hợp & Cung Đối (Xung Chiếu)
  const tamHop1 = (currentTargetChi + 4) % 12;
  const tamHop2 = (currentTargetChi + 8) % 12;
  const xungChieu = (currentTargetChi + 6) % 12;
  const nhiHop = (1 - currentTargetChi + 12) % 12;

  const palaceTamHop1 = chart.palaces.find(p => p.index === tamHop1);
  const palaceTamHop2 = chart.palaces.find(p => p.index === tamHop2);
  const palaceXungChieu = chart.palaces.find(p => p.index === xungChieu);

  const currentTamHopResult = useMemo(
    () => getTamHopStarGroups(currentTargetChi, chart.palaces),
    [currentTargetChi, chart.palaces]
  );
  const palaceGroupsMap = currentTamHopResult.palaceStarGroupsMap;
  const palaceGroupItemsMap = currentTamHopResult.palaceStarGroupItemsMap;

  // Tính toán quan hệ soi chiếu cho từng ô Cung
  const getRelationType = (chiIndex: number): RelationType => {
    if (chiIndex === currentTargetChi) return 'selected';
    if (chiIndex === tamHop1 || chiIndex === tamHop2) return 'tam-hop';
    if (chiIndex === xungChieu) return 'xung-chieu';
    if (activePalaceIndex !== null && chiIndex === nhiHop) return 'nhi-hop';
    return null;
  };

  const handlePalaceClick = (chiIndex: number) => {
    if (activePalaceIndex === chiIndex) {
      setActivePalaceIndex(null); // Click lại để quay về Mệnh - Tài - Quan
    } else {
      setActivePalaceIndex(chiIndex);
    }
  };

  const isDefaultMenhView = activePalaceIndex === null || activePalaceIndex === menhPalace.index;

  const hoveredGroupState: HoveredGroupState | null = useMemo(() => {
    if (!hoveredGroupResult) return null;
    return {
      sourceStar: hoveredGroupResult.sourceStar,
      cleanSourceStar: hoveredGroupResult.cleanSourceStar,
      groupName: hoveredGroupResult.groupName,
      groupType: hoveredGroupResult.groupType,
      targetStarsSet: new Set(hoveredGroupResult.targetStars),
      palaceIndicesSet: new Set(hoveredGroupResult.palaceIndices)
    };
  }, [hoveredGroupResult]);

  const handleHoverStar = (starName: string, isMajor: boolean, palaceIndex: number) => {
    const res = getStarGroupHoverInfo(starName, isMajor, chart.palaces, palaceIndex);
    setHoveredGroupResult(res);
  };

  const handleLeaveStar = () => {
    setHoveredGroupResult(null);
  };

  const handleCaptureScreenshot = async () => {
    if (isCapturing) return;
    setIsCapturing(true);
    try {
      await captureChartTemporary('chartGrid', 2);
      setCaptureSuccess(true);
      setShowToast(true);
      setTimeout(() => setCaptureSuccess(false), 2800);
    } catch (err) {
      console.error('Lỗi khi sao chép ảnh lá số:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="chart-board-container">
      {/* Mobile View Mode Switcher & Quick Actions */}
      <div className="mobile-view-mode-bar">
        <button
          type="button"
          className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <LayoutGrid size={15} />
          <span>Bàn 4x4 Chuẩn</span>
        </button>
        <button
          type="button"
          className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <List size={15} />
          <span>Danh Sách 12 Cung</span>
        </button>

        <button
          type="button"
          className="view-mode-btn"
          onClick={handleCaptureScreenshot}
          disabled={isCapturing}
          style={{
            marginLeft: 'auto',
            color: captureSuccess ? '#166534' : 'var(--tg-seal-red, #b71c1c)',
            background: captureSuccess ? '#f0fdf4' : 'rgba(183, 28, 28, 0.07)',
            borderColor: captureSuccess ? '#bbf7d0' : 'rgba(183, 28, 28, 0.28)',
            fontWeight: 700
          }}
          title="Sao chép ảnh lá số lưu tạm thời (Tự động lưu vào Clipboard để dán ngay Ctrl + V)"
        >
          {isCapturing ? (
            <Loader2 size={14} className="animate-spin" />
          ) : captureSuccess ? (
            <Check size={14} />
          ) : (
            <Copy size={14} />
          )}
          <span>
            {isCapturing ? 'Đang Sao Chép...' : captureSuccess ? 'Đã Lưu Tạm!' : 'Sao Chép Ảnh Lưu Tạm'}
          </span>
        </button>
      </div>

      {viewMode === 'grid' ? (
        <>
          {/* 4x4 Grid Board - Fit 100% Mobile Screen */}
          <div
            ref={boardWrapperRef}
            className="chart-board-scroll-wrapper"
            style={{
              width: '100%',
              height: scale < 1 && scaledHeight ? `${scaledHeight}px` : 'auto',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              ref={boardGridRef}
              className="chart-grid-container"
              id="chartGrid"
              style={
                scale < 1
                  ? {
                    width: `${BASE_WIDTH}px`,
                    minWidth: `${BASE_WIDTH}px`,
                    maxWidth: `${BASE_WIDTH}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                  }
                  : {
                    width: '100%',
                  }
              }
            >
              {/* Central Box: Thiên Bàn (Chứa đường nối Tam Hợp & Cung Đối bên trong) */}
              <ThienBanCell
                chart={chart}
                userName={userName}
                showConnectors={showConnectors}
                targetChi={currentTargetChi}
                onSelectStarGroup={setSelectedStarGroup}
              />

              {/* 12 Palaces with exact 4x4 Grid Positioning & Border Badges */}
              {chart.palaces.map((palace) => {
                const badges = badgesByTargetChi[palace.index] || [];
                const relation = getRelationType(palace.index);
                const pGroups = palaceGroupsMap[palace.index];
                const pGroupItems = palaceGroupItemsMap?.[palace.index];

                return (
                  <PalaceCell
                    key={palace.index}
                    palace={palace}
                    relationType={relation}
                    onSelect={() => handlePalaceClick(palace.index)}
                    goodGroups={pGroups?.good}
                    badGroups={pGroups?.bad}
                    goodGroupItems={pGroupItems?.good}
                    badGroupItems={pGroupItems?.bad}
                    onSelectStarGroup={setSelectedStarGroup}
                    onSelectStar={setSelectedStarInfo}
                    onOpenPalaceDetail={setSelectedPalaceForModal}
                    hoveredGroup={hoveredGroupState}
                    onHoverStar={handleHoverStar}
                    onLeaveStar={handleLeaveStar}
                  >
                    {badges.map((b, bIdx) => (
                      <BorderBadge key={bIdx} text={b.text} borderType={b.borderType} />
                    ))}
                  </PalaceCell>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        /* Chế độ xem Danh Sách 12 Cung trên Mobile */
        <div className="mobile-palace-list-container">
          {/* Thanh chọn 12 Cung cuộn ngang */}
          <div className="mobile-palaces-pill-bar">
            {chart.palaces.map((p) => {
              const isSelected = p.index === currentTargetChi;
              return (
                <button
                  key={p.index}
                  type="button"
                  className={`mobile-palace-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => setActivePalaceIndex(p.index)}
                >
                  <span>{p.name}</span>
                  <span className="pill-sub">
                    ({p.chi}){p.isMenh ? ' • Mệnh' : ''}{p.isThan ? ' • Thân' : ''}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Thẻ Cung Đang Chọn Phóng To */}
          <div className="mobile-palace-card">
            <PalaceCell
              palace={currentTargetPalace}
              relationType="selected"
              onSelect={() => { }}
              goodGroups={palaceGroupsMap[currentTargetPalace.index]?.good}
              badGroups={palaceGroupsMap[currentTargetPalace.index]?.bad}
              goodGroupItems={palaceGroupItemsMap?.[currentTargetPalace.index]?.good}
              badGroupItems={palaceGroupItemsMap?.[currentTargetPalace.index]?.bad}
              onSelectStarGroup={setSelectedStarGroup}
              onSelectStar={setSelectedStarInfo}
              onOpenPalaceDetail={setSelectedPalaceForModal}
              hoveredGroup={hoveredGroupState}
              onHoverStar={handleHoverStar}
              onLeaveStar={handleLeaveStar}
            >
              {(badgesByTargetChi[currentTargetPalace.index] || []).map((b, bIdx) => (
                <BorderBadge key={bIdx} text={b.text} borderType={b.borderType} />
              ))}
            </PalaceCell>
          </div>

          {/* Thông tin Thiên Bàn */}
          <div style={{ marginTop: '0.25rem' }}>
            <ThienBanCell
              chart={chart}
              userName={userName}
              showConnectors={false}
              targetChi={currentTargetChi}
              onSelectStarGroup={setSelectedStarGroup}
            />
          </div>
        </div>
      )}

      {/* Banner Hiển Thị Bộ Sao Đang Hover Soi Chiếu (Theo Tam Hợp) */}
      {hoveredGroupResult && (
        <div className="star-group-hover-banner">
          <div className="hover-banner-left">
            <span className={`hover-group-badge type-${hoveredGroupResult.groupType}`}>
              {hoveredGroupResult.groupType === 'chinh-tinh' ? '👑 BỘ CHÍNH TINH' :
               hoveredGroupResult.groupType === 'sat-tinh' ? '⚔️ BỘ SÁT TINH' :
               hoveredGroupResult.groupType === 'dao-hoa' ? '🌸 BỘ ĐÀO HỶ' :
               hoveredGroupResult.groupType === 'bai-tinh' ? '🌑 BỘ ÁM BẠI' : '⭐ BỘ CÁT TINH'}
            </span>
            <span className="hover-group-title">
              {hoveredGroupResult.groupName}
            </span>
            <span className="hover-group-tam-hop-tag">
              Tam Hợp ({hoveredGroupResult.tamHopChiString})
            </span>
            <span className="hover-group-relation">
              {hoveredGroupResult.matchRatio}
            </span>
          </div>
          <div className="hover-banner-members">
            {hoveredGroupResult.foundMembers.map((m, idx) => (
              <span
                key={idx}
                className={`hover-member-tag ${m.cleanName === hoveredGroupResult.cleanSourceStar ? 'is-active' : ''}`}
                title={`${m.starName} tọa thủ tại cung ${m.palaceName} (${m.palaceChi}) trong Tam Hợp`}
              >
                <strong>{m.starName}</strong>: {m.palaceName} ({m.palaceChi})
              </span>
            ))}
            {hoveredGroupResult.missingStars && hoveredGroupResult.missingStars.length > 0 && (
              <span
                className="hover-member-tag-missing"
                title={`Các sao này không có mặt trong Tam Hợp ${hoveredGroupResult.tamHopChiString}`}
              >
                Thiếu: {hoveredGroupResult.missingStars.join(', ')}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Helper Bar: Hướng dẫn & Tóm tắt Tam Hợp / Cung Đối */}
      <div className="relation-helper-bar">
        <div className="helper-pills">
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', cursor: 'pointer', marginRight: '6px', fontWeight: 700 }}>
            <input
              type="checkbox"
              checked={showConnectors}
              onChange={(e) => setShowConnectors(e.target.checked)}
              style={{ cursor: 'pointer', accentColor: '#d97706' }}
            />
            <span>Đường nối:</span>
          </label>

          <span style={{ fontWeight: 700, color: 'var(--tg-gold-dark)' }}>
            {isDefaultMenhView
              ? `Tam Hợp Mệnh - Tài - Quan & Cung Đối`
              : `Soi chiếu Cung ${currentTargetPalace.name} (${currentTargetPalace.chi})`}
          </span>

          <span className="helper-pill" title={`Tam Hợp gồm: ${currentTargetPalace.name}, ${palaceTamHop1?.name}, ${palaceTamHop2?.name}`}>
            <span className="dot-indicator" style={{ background: '#d97706' }}></span>
            Tam Hợp ({getCanonicalTamHopChiString(currentTargetPalace.chi)})
          </span>

          <span className="helper-pill" title={`Cung Đối (Xung Chiếu): ${palaceXungChieu?.name} (${palaceXungChieu?.chi})`}>
            <span className="dot-indicator" style={{ background: '#b71c1c' }}></span>
            Cung Đối ({palaceXungChieu?.name})
          </span>

          {activePalaceIndex !== null && (
            <span className="helper-pill">
              <span className="dot-indicator" style={{ background: '#095fb8' }}></span>
              Nhị Hợp
            </span>
          )}

          {/* Hiển thị các bộ sao cát / hung của Tam Hợp đang soi chiếu */}
          {currentTamHopResult.goodGroups.slice(0, 6).map((g, idx) => (
            <span
              key={`good-pill-${idx}`}
              className="helper-pill"
              onClick={() => setSelectedStarGroup(g)}
              style={{
                background: '#f0fdf4',
                borderColor: '#bbf7d0',
                color: '#166534',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.12s ease'
              }}
              title={`Nhấp xem chi tiết bộ cát: ${g.name} (${g.scope})\nVị trí: ${g.prominentPalaces.join(', ')}`}
            >
              <span className="dot-indicator" style={{ background: '#16a34a' }}></span>
              {g.name.split('(')[0].trim()}
            </span>
          ))}
          {currentTamHopResult.goodGroups.length > 6 && (
            <span
              className="helper-pill"
              style={{ background: '#f0fdf4', borderColor: '#bbf7d0', color: '#166534', fontWeight: 700 }}
              title={`Còn các bộ: ${currentTamHopResult.goodGroups.slice(6).map(g => g.name.split('(')[0].trim()).join(', ')}`}
            >
              +{currentTamHopResult.goodGroups.length - 6} bộ cát khác
            </span>
          )}

          {currentTamHopResult.badGroups.slice(0, 3).map((g, idx) => (
            <span
              key={`bad-pill-${idx}`}
              className="helper-pill"
              onClick={() => setSelectedStarGroup(g)}
              style={{
                background: '#fef2f2',
                borderColor: '#fecaca',
                color: '#991b1b',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.12s ease'
              }}
              title={`Nhấp xem chi tiết bộ hung: ${g.name} (${g.scope})\nVị trí: ${g.prominentPalaces.join(', ')}`}
            >
              <span className="dot-indicator" style={{ background: '#dc2626' }}></span>
              {g.name.split('(')[0].trim()}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap', marginLeft: 'auto' }}>
          <button
            type="button"
            className="btn-clear-selection"
            onClick={() => {
              const el = document.getElementById('palace-major-stars-panel');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: '#fffbeb',
              borderColor: '#f59e0b',
              color: '#92400e',
              fontWeight: 700
            }}
          >
            Chi tiết Cung {currentTargetPalace.name} ↓
          </button>

          {activePalaceIndex !== null && (
            <button
              type="button"
              className="btn-clear-selection"
              onClick={() => setActivePalaceIndex(null)}
            >
              Về Mệnh - Tài - Quan
            </button>
          )}
        </div>
      </div>

      {/* Khối Luận Giải Chi Tiết Chính Tinh Cung Tiêu Điểm */}
      <PalaceMajorStarsPanel
        palace={currentTargetPalace}
        allPalaces={chart.palaces}
        onSelectStar={setSelectedStarInfo}
      />

      {/* Popup Modal hiển thị chi tiết Bộ Phụ Tinh Tam Hợp */}
      <StarGroupModal
        group={selectedStarGroup}
        onClose={() => setSelectedStarGroup(null)}
      />

      {/* Popup Modal hiển thị chi tiết Chính Tinh / Phụ Tinh */}
      <StarDetailModal
        star={selectedStarInfo}
        onClose={() => setSelectedStarInfo(null)}
      />

      {/* Popup Modal hiển thị chi tiết Cung Vị khi bấm vào tên Cung */}
      <PalaceDetailModal
        palace={selectedPalaceForModal}
        allPalaces={chart.palaces}
        goodGroupItems={selectedPalaceForModal ? palaceGroupItemsMap?.[selectedPalaceForModal.index]?.good : undefined}
        badGroupItems={selectedPalaceForModal ? palaceGroupItemsMap?.[selectedPalaceForModal.index]?.bad : undefined}
        onClose={() => setSelectedPalaceForModal(null)}
        onSelectStar={setSelectedStarInfo}
      />

      {/* Thông báo sao chép ảnh lá số lưu tạm thời */}
      <ChartCopyToast
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};
