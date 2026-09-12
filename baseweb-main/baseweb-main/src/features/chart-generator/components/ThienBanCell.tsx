import React, { useMemo, useState } from 'react';
import { TuViChart, StarGroupItem } from '../types/chart.types';
import { getTamHopStarGroups } from '../engine/starGroupEngine';
import { detectCachCuc } from '../engine/tuviInterpreter';
import { PalaceMajorStarsPanel } from './PalaceMajorStarsPanel';
import { TamHopStarGroupsModal } from './TamHopStarGroupsModal';
import { Sparkles } from 'lucide-react';

// Tọa độ neo chuẩn xác 100% trên viền trong khung Thiên Bàn (viewBox 0 0 100 100)
// Thiên Bàn gồm 2 cột (cột 2: 0..50%, cột 3: 50..100%) và 2 hàng (hàng 2: 0..50%, hàng 3: 50..100%)
const THIEN_BAN_ANCHORS_100: Record<number, { x: number; y: number }> = {
  5: { x: 0, y: 0 },   // Tỵ (Góc trên - trái)
  6: { x: 25, y: 0 },   // Ngọ (Giữa cột 2 trên cạnh trên)
  7: { x: 75, y: 0 },   // Mùi (Giữa cột 3 trên cạnh trên)
  8: { x: 100, y: 0 },   // Thân (Góc trên - phải)
  9: { x: 100, y: 25 },  // Dậu (Giữa hàng 2 trên cạnh phải)
  10: { x: 100, y: 75 },  // Tuất (Giữa hàng 3 trên cạnh phải)
  11: { x: 100, y: 100 }, // Hợi (Góc dưới - phải)
  0: { x: 75, y: 100 }, // Tý (Giữa cột 3 trên cạnh dưới)
  1: { x: 25, y: 100 }, // Sửu (Giữa cột 2 trên cạnh dưới)
  2: { x: 0, y: 100 }, // Dần (Góc dưới - trái)
  3: { x: 0, y: 75 },  // Mão (Giữa hàng 3 trên cạnh trái)
  4: { x: 0, y: 25 },  // Thìn (Giữa hàng 2 trên cạnh trái)
};

function getElementClass(element: string): string {
  switch (element) {
    case 'Kim': return 'element-kim';
    case 'Mộc': return 'element-moc';
    case 'Thủy': return 'element-thuy';
    case 'Hỏa': return 'element-hoa';
    case 'Thổ': return 'element-tho';
    default: return 'element-kim';
  }
}

const TU_HOA_SHORT_MAP: Record<string, string> = {
  'Giáp': 'L.Lộc(Liêm) • L.Quyền(Phá) • L.Khoa(Vũ) • L.Kỵ(Dương)',
  'Ất': 'L.Lộc(Cơ) • L.Quyền(Lương) • L.Khoa(Vi) • L.Kỵ(Âm)',
  'Bính': 'L.Lộc(Đồng) • L.Quyền(Cơ) • L.Khoa(Xương) • L.Kỵ(Liêm)',
  'Đinh': 'L.Lộc(Âm) • L.Quyền(Đồng) • L.Khoa(Cơ) • L.Kỵ(Cự)',
  'Mậu': 'L.Lộc(Tham) • L.Quyền(Âm) • L.Khoa(Bật) • L.Kỵ(Cơ)',
  'Kỷ': 'L.Lộc(Vũ) • L.Quyền(Tham) • L.Khoa(Lương) • L.Kỵ(Khúc)',
  'Canh': 'L.Lộc(Dương) • L.Quyền(Vũ) • L.Khoa(Âm) • L.Kỵ(Đồng)',
  'Tân': 'L.Lộc(Cự) • L.Quyền(Dương) • L.Khoa(Khúc) • L.Kỵ(Xương)',
  'Nhâm': 'L.Lộc(Lương) • L.Quyền(Vi) • L.Khoa(Phụ) • L.Kỵ(Vũ)',
  'Quý': 'L.Lộc(Phá) • L.Quyền(Cự) • L.Khoa(Âm) • L.Kỵ(Tham)'
};

interface ThienBanCellProps {
  chart: TuViChart;
  userName: string;
  showConnectors?: boolean;
  targetChi?: number;
  onSelectStarGroup?: (group: StarGroupItem) => void;
}

export const ThienBanCell: React.FC<ThienBanCellProps> = ({
  chart,
  userName,
  showConnectors = false,
  targetChi
}) => {
  const { userInfo, lunarInfo, meta } = chart;
  // Xác định Cung đang soi chiếu (mặc định Cung Mệnh)
  const menhPalace = chart.palaces.find(p => p.isMenh) || chart.palaces[0];
  const activeChi = targetChi !== undefined ? targetChi : menhPalace.index;
  const currentAge = userInfo.viewYear - (lunarInfo.lunarYear || userInfo.year) + 1;

  const nienHanPalace = chart.palaces.find(p => p.isNienHan);
  const activeDaiVanPalace = chart.palaces.find(p => p.isCurrentDaiVan);

  const [showMajorStarsModal, setShowMajorStarsModal] = useState<boolean>(false);
  const [showCachCucModal, setShowCachCucModal] = useState<boolean>(false);
  const [showTamHopStarGroupsModal, setShowTamHopStarGroupsModal] = useState<boolean>(false);

  // Lấy các bộ sao phụ tinh CHỈ theo Tam Hợp của Cung đang soi chiếu
  const tamHopResult = useMemo(
    () => getTamHopStarGroups(activeChi, chart.palaces),
    [activeChi, chart.palaces]
  );
  const goodGroups = tamHopResult.goodGroups;
  const badGroups = tamHopResult.badGroups;

  // Nhận diện các cách cục đặc biệt của lá số
  const cachCucList = useMemo(() => detectCachCuc(chart.palaces), [chart.palaces]);

  // Tính quan hệ Tam Hợp & Cung Đối bên trong Thiên Bàn
  const tamHop1 = (activeChi + 4) % 12;
  const tamHop2 = (activeChi + 8) % 12;
  const xungChieu = (activeChi + 6) % 12;

  const pCenter = THIEN_BAN_ANCHORS_100[activeChi];
  const pTamHop1 = THIEN_BAN_ANCHORS_100[tamHop1];
  const pTamHop2 = THIEN_BAN_ANCHORS_100[tamHop2];
  const pXungChieu = THIEN_BAN_ANCHORS_100[xungChieu];

  return (
    <div
      className="thien-ban-cell pos-thienban"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '0.55rem',
        background: 'radial-gradient(ellipse at 50% 50%, #fffdfa 0%, #f7f2e7 100%)'
      }}
    >
      {/* SVG Đường Nối Tam Hợp & Cung Đối: Nét Mảnh Tinh Tế & Thoáng Đãng (Watermark Style) */}
      {showConnectors && pCenter && pTamHop1 && pTamHop2 && pXungChieu && (
        <svg
          className="thien-ban-connector-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.32
          }}
        >
          {/* 1. Tam Giác Tam Hợp: Nét đứt siêu mảnh, thanh thoát */}
          <polygon
            points={`${pCenter.x},${pCenter.y} ${pTamHop1.x},${pTamHop1.y} ${pTamHop2.x},${pTamHop2.y}`}
            fill="rgba(217, 119, 6, 0.02)"
            stroke="#c5a059"
            strokeWidth="0.3"
            strokeDasharray="2.5 1.5"
            strokeLinejoin="round"
          />

          {/* 2. Đường Cung Đối (Xung Chiếu): Nét đứt đỏ trầm thanh nhã */}
          <line
            x1={pCenter.x}
            y1={pCenter.y}
            x2={pXungChieu.x}
            y2={pXungChieu.y}
            stroke="#b71c1c"
            strokeWidth="0.3"
            strokeDasharray="2.5 1.5"
          />

          {/* Điểm nút tinh xảo tại mép viền */}
          <circle cx={pCenter.x} cy={pCenter.y} r="0.9" fill="#c5a059" stroke="#ffffff" strokeWidth="0.25" />
          <circle cx={pTamHop1.x} cy={pTamHop1.y} r="0.75" fill="#c5a059" stroke="#ffffff" strokeWidth="0.2" />
          <circle cx={pTamHop2.x} cy={pTamHop2.y} r="0.75" fill="#c5a059" stroke="#ffffff" strokeWidth="0.2" />
          <circle cx={pXungChieu.x} cy={pXungChieu.y} r="0.9" fill="#b71c1c" stroke="#ffffff" strokeWidth="0.25" />
        </svg>
      )}

      {/* Header Thiên Bàn: Thoáng & Gọn */}
      <div
        className="thien-ban-header-box"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          paddingBottom: '0.4rem',
          borderBottom: '1px solid rgba(197, 160, 89, 0.35)'
        }}
      >
        <span
          className="thien-ban-title"
          style={{
            display: 'inline-block',
            padding: '2px 14px',
            background: 'rgba(253, 251, 246, 0.9)',
            borderRadius: '6px',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
            letterSpacing: '2px'
          }}
        >
          LÁ SỐ TỬ VI TÂM AN
        </span>
      </div>

      {/* Bảng Dữ Liệu Thiên Bàn: Nối Liền Liền Mạch Ngay Dưới Tiêu Đề */}
      <div
        className="thien-ban-table"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.55rem',
          padding: '0.2rem 0'
        }}
      >
        {userName ? (
          <div className="tb-row" style={{ justifyContent: 'center', marginBottom: '4px' }}>
            <span className="tb-label">
              {userName === 'Nam Mệnh' || userName === 'Nữ Mệnh' || userName === 'Đương Số' ? 'Mệnh Tạo:' : 'Họ tên:'}
            </span>
            <span className="tb-val highlight-red" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>
              {userName}
            </span>
          </div>
        ) : null}

        {/* Khối 2 Cột Chính */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.65rem',
            alignItems: 'start'
          }}
        >
          {/* Cột 1: Bát Tự Ngày Giờ Sinh */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div className="tb-row">
              <span className="tb-label">Năm:</span>
              <span className="tb-val">{userInfo.year}</span>
              <span className="tb-val highlight-gold">({meta.canChiYear})</span>
            </div>
            <div className="tb-row">
              <span className="tb-label">Tháng:</span>
              <span className="tb-val">
                {String(userInfo.month).padStart(2, '0')} (Âm: {lunarInfo.lunarMonth})
              </span>
              <span className="tb-val highlight-gold">({meta.canChiMonth})</span>
            </div>
            <div className="tb-row">
              <span className="tb-label">Ngày:</span>
              <span className="tb-val">
                {String(userInfo.day).padStart(2, '0')} (Âm: {lunarInfo.lunarDay})
              </span>
              <span className="tb-val highlight-gold">({meta.canChiDay})</span>
            </div>
            <div className="tb-row">
              <span className="tb-label">Giờ:</span>
              <span className="tb-val">
                {String(userInfo.hour).padStart(2, '0')}h{String(userInfo.minute).padStart(2, '0')}
              </span>
              <span className="tb-val highlight-gold">({meta.canChiHour})</span>
            </div>
          </div>

          {/* Cột 2: Bản Thể, Vận Hạn, Mệnh Cục */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div className="tb-row">
              <span className="tb-label">Năm xem:</span>
              <span className="tb-val highlight-blue">{userInfo.viewYear}</span>
              <span className="tb-val highlight-gold">({meta.viewYearCanChi})</span>
              <span className="tb-val highlight-red" style={{ marginLeft: 'auto', fontWeight: 700 }}>
                {currentAge} tuổi
              </span>
            </div>
            <div className="tb-row">
              <span className="tb-label">Âm Dương:</span>
              <span className="tb-val highlight-gold">{meta.yinYangGender}</span>
            </div>
            <div className="tb-row">
              <span className="tb-label">Bản Mệnh:</span>
              <span className={`tb-val bold-text ${getElementClass(meta.napAmMenh.element)}`} style={{ fontWeight: 800 }}>{meta.napAmMenh.name}</span>
            </div>
            <div className="tb-row">
              <span className="tb-label">Cục Số:</span>
              <span className={`tb-val bold-text ${getElementClass(meta.cuc.element)}`} style={{ fontWeight: 800 }}>{meta.cuc.name}</span>
            </div>
          </div>
        </div>

        {/* Khối Tùy Biến Xem Vận (Lưu Niên / Tiểu Hạn / LN.Đại Vận, Lưu Tứ Hóa, Lưu Đại Vận) */}
        {Boolean(userInfo.showHanNam) && (
          <div
            style={{
              padding: '4px 8px',
              background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.45) 0%, rgba(254, 215, 170, 0.4) 100%)',
              border: '1px solid rgba(217, 119, 6, 0.35)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              fontSize: '0.72rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
              <span style={{ fontWeight: 800, color: '#9a3412', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                ✦ VẬN HẠN NĂM {userInfo.viewYear} ({meta.viewYearCanChi}) - {currentAge} TUỔI
              </span>
              {nienHanPalace && (
                <span style={{ fontWeight: 700, color: '#b91c1c' }}>
                  {userInfo.xemVanTheo === 'TieuHan' ? 'Tiểu Hạn' : userInfo.xemVanTheo === 'LuuNienDaiVan' ? 'LN.Đại Vận' : 'Lưu Niên'}: {nienHanPalace.name} ({nienHanPalace.chi})
                </span>
              )}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', color: '#78350f', fontSize: '0.67rem', marginTop: '1px' }}>
              {userInfo.luuDaiVan !== false && activeDaiVanPalace && (
                <span>
                  <strong>Đại Vận ({activeDaiVanPalace.daiVan}-{activeDaiVanPalace.daiVan + 9}t):</strong> {activeDaiVanPalace.name} ({activeDaiVanPalace.chi})
                </span>
              )}
              {userInfo.luuTuHoa !== false && (
                <span>
                  <strong>Lưu Tứ Hóa:</strong> {TU_HOA_SHORT_MAP[meta.viewYearCanChi.split(' ')[0]] || 'L.Lộc • L.Quyền • L.Khoa • L.Kỵ'}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Đường Kẻ Phân Cách Mờ Nhẹ */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.35), transparent)',
            margin: '0.25rem 0'
          }}
        />

        {/* Khối Chân Thiên Bàn: Chủ Tinh & Tương Quan Bản Mệnh */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div className="tb-row" style={{ justifyContent: 'center', gap: '1.25rem' }}>
            <div>
              <span className="tb-label" style={{ minWidth: 'auto', marginRight: '6px' }}>Chủ Mệnh:</span>
              <span className="tb-val highlight-blue">{meta.chuMenh}</span>
            </div>
            <div>
              <span className="tb-label" style={{ minWidth: 'auto', marginRight: '6px' }}>Chủ Thân:</span>
              <span className="tb-val highlight-blue">{meta.chuThan}</span>
            </div>
          </div>

          <div className="tb-row" style={{ justifyContent: 'center', gap: '0.75rem' }}>
            <span className="tb-val highlight-red bold-text">{meta.yinYangHarmony}</span>
            <span style={{ color: 'var(--tg-ink-faint)' }}>•</span>
            <span className="tb-val highlight-gold bold-text">{meta.elementHarmony}</span>
          </div>

          <div className="tb-row" style={{ justifyContent: 'center' }}>
            <span className="tb-val highlight-blue bold-text">{meta.thanCu}</span>
          </div>

          {/* Tóm tắt Chính Tinh Cung đang soi chiếu (To ra & mở Popup) */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowMajorStarsModal(true);
            }}
            style={{
              padding: '6px 14px',
              background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.55) 0%, rgba(254, 215, 170, 0.5) 100%)',
              borderRadius: '8px',
              border: '1.5px solid rgba(197, 160, 89, 0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              flexWrap: 'wrap',
              width: '100%',
              boxSizing: 'border-box',
              boxShadow: '0 2px 5px rgba(180, 83, 9, 0.08)',
              transition: 'all 0.15s ease'
            }}
            title="Bấm để mở Popup phân tích chi tiết Chính Tinh cung này"
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#78350f', letterSpacing: '0.3px' }}>
              ✦ CHÍNH TINH {tamHopResult.targetPalace.name.toUpperCase()}:
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#b45309' }}>
              {tamHopResult.targetPalace.majorStars.length > 0
                ? tamHopResult.targetPalace.majorStars.map(s => `${s.name} (${s.strength})`).join(' • ')
                : 'Vô Chính Diệu'}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#78350f',
                background: 'rgba(217, 119, 6, 0.16)',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(197, 160, 89, 0.45)'
              }}
            >
              Xem chi tiết ↗
            </span>
          </div>

          {/* Tóm tắt Cách Cục Đặc Biệt của Lá Số (To ra & mở Popup) */}
          {cachCucList.length > 0 && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowCachCucModal(true);
              }}
              style={{
                padding: '6px 14px',
                background: 'linear-gradient(135deg, rgba(254, 226, 226, 0.55) 0%, rgba(254, 202, 202, 0.45) 100%)',
                borderRadius: '8px',
                border: '1.5px solid rgba(220, 38, 38, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                flexWrap: 'wrap',
                width: '100%',
                boxSizing: 'border-box',
                boxShadow: '0 2px 5px rgba(183, 28, 28, 0.08)',
                transition: 'all 0.15s ease'
              }}
              title="Bấm để mở Popup phân tích chi tiết CÁCH CỤC CHÍNH TINH (Mệnh - Tài - Quan)"
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#991b1b', letterSpacing: '0.3px' }}>
                ✦ CÁCH CỤC ({cachCucList.length}):
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#b71c1c' }}>
                {cachCucList.map(c => c.name.split('(')[0].trim()).join(' • ')}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#991b1b',
                  background: 'rgba(220, 38, 38, 0.14)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  border: '1px solid rgba(220, 38, 38, 0.35)'
                }}
              >
                Xem chi tiết ↗
              </span>
            </div>
          )}

          {/* Tóm tắt Các Bộ Phụ Tinh Theo Tam Hợp (Đồng bộ kiểu dáng & mở Popup chi tiết) */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowTamHopStarGroupsModal(true);
            }}
            style={{
              padding: '6px 14px',
              background: 'linear-gradient(135deg, rgba(240, 253, 244, 0.75) 0%, rgba(220, 252, 231, 0.6) 100%)',
              borderRadius: '8px',
              border: '1.5px solid rgba(22, 163, 74, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              flexWrap: 'wrap',
              width: '100%',
              boxSizing: 'border-box',
              boxShadow: '0 2px 5px rgba(22, 163, 74, 0.08)',
              transition: 'all 0.15s ease'
            }}
            title="Bấm để mở Popup phân tích chi tiết các BỘ PHỤ TINH TAM HỢP"
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#15803d', letterSpacing: '0.3px' }}>
              ✦ BỘ PHỤ TINH TAM HỢP: {tamHopResult.targetPalace.name.toUpperCase()} ({tamHopResult.tamHopChiString}) ({goodGroups.length + badGroups.length}):
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#166534' }}>
              {goodGroups.length > 0
                ? goodGroups.slice(0, 3).map(g => g.name.split('(')[0].trim()).join(' • ') + (goodGroups.length > 3 ? ` (+${goodGroups.length - 3})` : '')
                : (badGroups.length > 0 ? `${badGroups.length} bộ hung sát` : 'Không có bộ đặc biệt')}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#15803d',
                background: 'rgba(22, 163, 74, 0.14)',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(22, 163, 74, 0.35)'
              }}
            >
              Xem chi tiết ↗
            </span>
          </div>
        </div>
      </div>

      {/* Ấn Triện Chu Sa Hoàng Triều Tinh Xảo */}
      <div className="red-seal-stamp" title="Ấn triện xác thực Thiên Bàn" style={{ zIndex: 3 }}>
        <div className="seal-inner">
          <div>紫</div><div>微</div>
          <div>越</div><div>南</div>
        </div>
      </div>

      {/* 1. Modal Popup Phân Tích Chính Tinh */}
      {showMajorStarsModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowMajorStarsModal(false)}
        >
          <div
            className="hide-scrollbar"
            style={{
              backgroundColor: '#fffdfa',
              border: '2px solid rgba(197, 160, 89, 0.6)',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '780px',
              maxHeight: '88vh',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              color: '#2c2416'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(217, 119, 6, 0.08)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#78350f' }}>
                  ✦ PHÂN TÍCH CHÍNH TINH CUNG {tamHopResult.targetPalace.name.toUpperCase()} ({tamHopResult.targetPalace.chi})
                </div>
                <div style={{ fontSize: '0.78rem', color: '#854d0e', marginTop: '2px' }}>
                  Chính tinh tọa thủ, đắc hãm, ngũ hành sinh khắc & thế phối chiếu tam hợp
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMajorStarsModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: '#78350f',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
                title="Đóng popup"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '1rem 1.25rem' }}>
              <PalaceMajorStarsPanel
                palace={tamHopResult.targetPalace}
                allPalaces={chart.palaces}
              />
            </div>

            {/* Footer */}
            <div
              style={{
                padding: '0.75rem 1.25rem',
                borderTop: '1px solid rgba(197, 160, 89, 0.25)',
                display: 'flex',
                justifyContent: 'flex-end',
                background: '#fbf9f4'
              }}
            >
              <button
                type="button"
                onClick={() => setShowMajorStarsModal(false)}
                style={{
                  padding: '6px 18px',
                  borderRadius: '6px',
                  border: '1px solid #c5a059',
                  background: 'linear-gradient(135deg, #c5a059, #916f28)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Đã Hiểu & Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal Popup Phân Tích Cách Cục */}
      {showCachCucModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowCachCucModal(false)}
        >
          <div
            className="hide-scrollbar"
            style={{
              backgroundColor: '#fffdfa',
              border: '2px solid rgba(183, 28, 28, 0.55)',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '88vh',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              color: '#2c2416'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid rgba(183, 28, 28, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(183, 28, 28, 0.08)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#991b1b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={18} color="#b71c1c" />
                  CÁCH CỤC CHÍNH TINH ({cachCucList.length} Cách Cục)
                </div>
                <div style={{ fontSize: '0.78rem', color: '#7f1d1d', marginTop: '2px' }}>
                  Thiết lập chuẩn mực theo 14 Chính Tinh trong Tam Hợp Mệnh - Tài Bạch - Quan Lộc
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCachCucModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: '#991b1b',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
                title="Đóng popup"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '1.15rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cachCucList.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    borderLeft: '4px solid #b71c1c',
                    background: 'linear-gradient(135deg, #fdfbf7 0%, #faf6ec 100%)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    padding: '1rem 1.25rem',
                    borderRadius: '0 8px 8px 0',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderLeftWidth: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 800, color: '#8b0000', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={16} color="#c5a059" />
                      {c.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'linear-gradient(135deg, #b71c1c 0%, #8b0000 100%)',
                        color: '#ffffff',
                        boxShadow: '0 1px 3px rgba(183, 28, 28, 0.25)'
                      }}
                    >
                      {c.type}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#4c443c', lineHeight: 1.65 }}>
                    {c.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: '0.75rem 1.25rem',
                borderTop: '1px solid rgba(183, 28, 28, 0.2)',
                display: 'flex',
                justifyContent: 'flex-end',
                background: '#fbf9f4'
              }}
            >
              <button
                type="button"
                onClick={() => setShowCachCucModal(false)}
                style={{
                  padding: '6px 18px',
                  borderRadius: '6px',
                  border: '1px solid #b71c1c',
                  background: 'linear-gradient(135deg, #b71c1c 0%, #7f1d1d 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Đã Hiểu & Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal Popup Phân Tích Các Bộ Phụ Tinh Theo Tam Hợp */}
      <TamHopStarGroupsModal
        isOpen={showTamHopStarGroupsModal}
        onClose={() => setShowTamHopStarGroupsModal(false)}
        targetPalace={tamHopResult.targetPalace}
        tamHopChiString={tamHopResult.tamHopChiString}
        tamHopPalaces={tamHopResult.tamHopPalaces}
        goodGroups={goodGroups}
        badGroups={badGroups}
      />
    </div>
  );
};
