import React from 'react';
import {
  Compass,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  ArrowRightLeft,
  Milestone,
  Clock,
  Eye,
  Info
} from 'lucide-react';
import { TuViPalace } from '../types/chart.types';
import { getCanonicalTamHopChiString } from '../engine/starGroupEngine';
import { STAR_PALACES_MAP } from '@/data/tuvi/starPalacesData';
import { TUVI_PALACES } from '@/data/tuvi/palaces';
import { SelectedStarInfo } from './StarDetailModal';

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

const TRANG_SINH_MEANINGS: Record<string, string> = {
  'Tràng Sinh': 'Khởi nguyên sinh lực dồi dào, thọ trường, gặp khó tự chuyển hóa vươn lên.',
  'Mộc Dục': 'Giai đoạn nảy mầm, biến động, giàu cảm xúc, cần chú ý tiết chế.',
  'Quan Đới': 'Giai đoạn trưởng thành, nuôi dưỡng chí hướng danh vọng, tự tin gánh vác.',
  'Lâm Quan': 'Vào đời vững vàng, tích lũy công danh, tài lực và uy thế.',
  'Đế Vượng': 'Đỉnh cao phong độ và năng lượng, uy lực mạnh mẽ nhất.',
  'Suy': 'Qua thời cực thịnh, cần chuyển sang cơ chế gìn giữ, phòng thủ cẩn trọng.',
  'Bệnh': 'Sinh lực hao hụt, nhiều trăn trở, cần bảo dưỡng thể chất và tinh thần.',
  'Tử': 'Trầm lặng, khép kín cái cũ, chuẩn bị bước ngoặt chuyển hóa mới.',
  'Mộ': 'Tích lũy chôn giấu, bền bỉ, tiết kiệm, hợp tích tụ tài sản hoặc nghiên cứu sâu.',
  'Tuyệt': 'Rỗng không, cô độc nhất thời nhưng là hạt mầm cho chu kỳ tái sinh.',
  'Thai': 'Ấp ủ mầm mống hy vọng, nhen nhóm ý tưởng và kế hoạch tương lai.',
  'Dưỡng': 'Nuôi dưỡng bồi đắp kiên trì, chờ thời cơ phục hồi bứt phá.'
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

function getElementBadgeStyle(element: string) {
  switch (element) {
    case 'Kim':
      return { bg: '#f1f5f9', color: '#334155', border: '#cbd5e1' };
    case 'Mộc':
      return { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' };
    case 'Thủy':
      return { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' };
    case 'Hỏa':
      return { bg: '#fef2f2', color: '#b91c1c', border: '#fecaca' };
    case 'Thổ':
      return { bg: '#fefce8', color: '#854d0e', border: '#fde047' };
    default:
      return { bg: '#f8fafc', color: '#334155', border: '#e2e8f0' };
  }
}

function getStrengthBadgeStyle(strength?: string) {
  switch (strength) {
    case 'M':
      return { label: 'Miếu Địa', bg: '#fef3c7', color: '#92400e', border: '#f59e0b' };
    case 'V':
      return { label: 'Vượng Địa', bg: '#f0fdf4', color: '#15803d', border: '#22c55e' };
    case 'Đ':
      return { label: 'Đắc Địa', bg: '#eff6ff', color: '#1d4ed8', border: '#3b82f6' };
    case 'B':
      return { label: 'Bình Hòa', bg: '#f8fafc', color: '#475569', border: '#94a3b8' };
    case 'H':
      return { label: 'Hãm Địa', bg: '#fef2f2', color: '#b91c1c', border: '#ef4444' };
    default:
      return { label: strength || '', bg: '#f1f5f9', color: '#475569', border: '#cbd5e1' };
  }
}

interface PalaceMajorStarsPanelProps {
  palace: TuViPalace;
  allPalaces: TuViPalace[];
  onSelectStar?: (star: SelectedStarInfo) => void;
}

export const PalaceMajorStarsPanel: React.FC<PalaceMajorStarsPanelProps> = ({
  palace,
  allPalaces,
  onSelectStar
}) => {
  const palaceId = PALACE_NAME_TO_ID[palace.name] || 'menh';
  const palaceMeta = TUVI_PALACES.find(p => p.name === palace.name || p.id === palaceId);
  const hasMajorStars = palace.majorStars && palace.majorStars.length > 0;

  // Tính các quan hệ Tam Hợp, Xung Chiếu, Nhị Hợp của cung đang chọn
  const tamHop1 = (palace.index + 4) % 12;
  const tamHop2 = (palace.index + 8) % 12;
  const xungChieu = (palace.index + 6) % 12;
  const nhiHop = (1 - palace.index + 12) % 12;

  const palaceTamHop1 = allPalaces.find(p => p.index === tamHop1);
  const palaceTamHop2 = allPalaces.find(p => p.index === tamHop2);
  const palaceXungChieu = allPalaces.find(p => p.index === xungChieu);
  const palaceNhiHop = allPalaces.find(p => p.index === nhiHop);

  const trangSinhMeaning = palace.trangSinhStar ? TRANG_SINH_MEANINGS[palace.trangSinhStar] : '';

  return (
    <div
      id="palace-major-stars-panel"
      style={{
        background: 'linear-gradient(145deg, #fffdfa 0%, #faf5ea 100%)',
        border: '1.5px solid #c5a059',
        borderRadius: '12px',
        padding: '1.25rem 1.45rem',
        boxShadow: '0 6px 20px rgba(197, 160, 89, 0.15)',
        marginTop: '1.25rem',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'all 0.2s ease'
      }}
    >
      {/* Header Tổng Quan Panel */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          borderBottom: '1.5px solid rgba(197, 160, 89, 0.4)',
          paddingBottom: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #d97706, #b45309)',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(217, 119, 6, 0.25)'
            }}
          >
            <Compass size={20} />
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#78350f',
                fontFamily: 'var(--font-serif-imperial, serif)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap'
              }}
            >
              <span>CHI TIẾT CUNG {palace.name.toUpperCase()}</span>
              <span style={{ fontSize: '0.92rem', color: '#92400e', fontWeight: 700 }}>
                ({palace.can} {palace.chi})
              </span>
            </h3>
          </div>

          {palace.isMenh && (
            <span style={{ fontSize: '0.74rem', padding: '2px 10px', borderRadius: '4px', background: '#fef3c7', color: '#b45309', fontWeight: 800, border: '1px solid #fde68a' }}>
              MỆNH CHỦ
            </span>
          )}
          {palace.isThan && (
            <span style={{ fontSize: '0.74rem', padding: '2px 10px', borderRadius: '4px', background: '#e0f2fe', color: '#0369a1', fontWeight: 800, border: '1px solid #bae6fd' }}>
              THÂN CƯ
            </span>
          )}
          {palace.triet && (
            <span style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: '4px', background: '#1e293b', color: '#f8fafc', fontWeight: 800 }}>
              TRIỆT ÁN NGỮ
            </span>
          )}
          {palace.tuan && (
            <span style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: '4px', background: '#334155', color: '#f8fafc', fontWeight: 800 }}>
              TUẦN ÁN NGỮ
            </span>
          )}
        </div>

        <div style={{ fontSize: '0.84rem', color: '#854d0e', fontWeight: 700 }}>
          Đại Vận: {palace.daiVan} - {palace.daiVan + 9} tuổi • {hasMajorStars ? `${palace.majorStars.length} Chính Tinh` : 'Vô Chính Diệu'}
        </div>
      </div>

      {/* PHẦN 1: THÔNG TIN CHI TIẾT CỦA CUNG ĐANG CHỌN (Bản chất, chức năng, vận trình, tương quan) */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '10px',
          border: '1px solid rgba(197, 160, 89, 0.45)',
          padding: '1.15rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.9rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontWeight: 800, fontSize: '0.95rem' }}>
          <Info size={17} />
          <span>Ý NGHĨA CHỨC NĂNG CUNG {palace.name.toUpperCase()} TRÊN ĐỊA BÀN:</span>
        </div>

        {/* Ý nghĩa cốt lõi & Phân tích chuyên sâu */}
        {palaceMeta && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.9rem', color: '#1f2937', lineHeight: 1.6 }}>
              <strong style={{ color: '#78350f' }}>Chủ quản: </strong>
              <span>{palaceMeta.meaning}</span>
            </div>

            <p style={{ margin: 0, fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.65, textAlign: 'justify', background: '#fdfbf7', padding: '8px 12px', borderRadius: '6px', borderLeft: '3px solid #d97706' }}>
              {palaceMeta.detailedAnalysis}
            </p>

            {/* Các phạm vi quản lý đời người */}
            {palaceMeta.scope && palaceMeta.scope.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '0.2rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#854d0e' }}>Phạm vi quản lý:</span>
                {palaceMeta.scope.map((item, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '0.76rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: '#fef3c7',
                      color: '#92400e',
                      border: '1px solid #fde68a',
                      fontWeight: 600
                    }}
                  >
                    ✦ {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Khối 3 Cột: Đại Vận - Vòng Tràng Sinh - Tuần/Triệt */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.75rem',
            marginTop: '0.35rem',
            paddingTop: '0.75rem',
            borderTop: '1px dashed rgba(197, 160, 89, 0.3)'
          }}
        >
          {/* Cột 1: Đại Vận */}
          <div style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#475569', fontWeight: 700 }}>
              <Clock size={14} color="#0284c7" />
              <span>ĐẠI VẬN 10 NĂM</span>
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0369a1' }}>
              {palace.daiVan} - {palace.daiVan + 9} tuổi
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Thời kỳ vận trình cuộc đời đáo nhập cung {palace.name}.
            </span>
          </div>

          {/* Cột 2: Vòng Tràng Sinh */}
          <div style={{ background: '#f0fdf4', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bbf7d0', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#166534', fontWeight: 700 }}>
              <Milestone size={14} color="#16a34a" />
              <span>VÒNG TRÀNG SINH</span>
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#15803d' }}>
              {palace.trangSinhStar || 'Bình ổn'}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#166534', lineHeight: 1.4 }}>
              {trangSinhMeaning || 'Nấc thang sinh lực tại phương vị này.'}
            </span>
          </div>

          {/* Cột 3: Trạng thái Tuần / Triệt */}
          <div style={{ background: (palace.triet || palace.tuan) ? '#fef2f2' : '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: (palace.triet || palace.tuan) ? '1px solid #fecaca' : '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: (palace.triet || palace.tuan) ? '#991b1b' : '#475569', fontWeight: 700 }}>
              <ShieldCheck size={14} color={(palace.triet || palace.tuan) ? '#dc2626' : '#64748b'} />
              <span>TUẦN / TRIỆT ÁN NGỮ</span>
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: (palace.triet || palace.tuan) ? '#b91c1c' : '#334155' }}>
              {palace.triet && palace.tuan ? 'Gặp Cả Tuần & Triệt' : palace.triet ? 'Triệt Không Án Ngữ' : palace.tuan ? 'Tuần Không Bao Bọc' : 'Không Bị Án Ngữ'}
            </div>
            <span style={{ fontSize: '0.75rem', color: (palace.triet || palace.tuan) ? '#991b1b' : '#64748b', lineHeight: 1.4 }}>
              {palace.triet
                ? 'Đổi chiều hung cát mạnh trước 35 tuổi, bớt sắc sảo.'
                : palace.tuan
                ? 'Tác động kéo dài êm dịu, kìm hãm nhẹ khí lực.'
                : 'Khí lực lưu thông bình ổn, phát huy toàn vẹn tinh đẩu.'}
            </span>
          </div>
        </div>

        {/* Khối Mạng Lưới Soi Chiếu: Tam Hợp, Xung Chiếu, Nhị Hợp */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            padding: '8px 12px',
            background: '#faf5ea',
            borderRadius: '6px',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            fontSize: '0.82rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#78350f', fontWeight: 700 }}>
            <Eye size={15} color="#d97706" />
            <span>Mạng lưới liên kết:</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span style={{ background: '#ffffff', padding: '2px 8px', borderRadius: '4px', border: '1px solid #c5a059', color: '#854d0e', fontWeight: 600 }}>
              <strong>Tam Hợp ({getCanonicalTamHopChiString(palace.chi)}):</strong> {palaceTamHop1?.name} ({palaceTamHop1?.chi}) & {palaceTamHop2?.name} ({palaceTamHop2?.chi})
            </span>

            <span style={{ background: '#ffffff', padding: '2px 8px', borderRadius: '4px', border: '1px solid #ef4444', color: '#b91c1c', fontWeight: 600 }}>
              <strong>Xung Chiếu (Cung Đối):</strong> {palaceXungChieu?.name} ({palaceXungChieu?.chi})
            </span>

            {palaceNhiHop && (
              <span style={{ background: '#ffffff', padding: '2px 8px', borderRadius: '4px', border: '1px solid #3b82f6', color: '#1d4ed8', fontWeight: 600 }}>
                <strong>Nhị Hợp:</strong> {palaceNhiHop.name} ({palaceNhiHop.chi})
              </span>
            )}
          </div>
        </div>
      </div>

      {/* PHẦN 2: LUẬN GIẢI CÁC CHÍNH TINH TỌA THỦ (HOẶC VÔ CHÍNH DIỆU) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#78350f', fontWeight: 800, fontSize: '0.98rem' }}>
            <Sparkles size={18} color="#d97706" />
            <span>LUẬN GIẢI CHÍNH TINH TỌA THỦ CUNG {palace.name.toUpperCase()}:</span>
          </div>

          <span style={{ fontSize: '0.78rem', color: '#854d0e', fontStyle: 'italic' }}>
            (Nhấp tên sao hoặc nút Xem Popup để tra cứu toàn diện)
          </span>
        </div>

        {hasMajorStars ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: palace.majorStars.length > 1 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
              gap: '1rem'
            }}
          >
            {palace.majorStars.map((star, idx) => {
              const cleanName = star.name.replace(/\(.\)/g, '').trim();
              const starSlug = getStarSlug(cleanName);
              const palaceDetail = STAR_PALACES_MAP[starSlug]?.[palaceId];
              const elemStyle = getElementBadgeStyle(star.element);
              const strengthStyle = getStrengthBadgeStyle(star.strength);

              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(197, 160, 89, 0.45)',
                    borderRadius: '8px',
                    padding: '1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    position: 'relative'
                  }}
                >
                  {/* Header Star Card */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '6px',
                      borderBottom: '1px dashed rgba(197, 160, 89, 0.3)',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 900,
                          color: '#78350f',
                          fontFamily: 'var(--font-serif-imperial, serif)'
                        }}
                      >
                        ★ {cleanName}
                      </span>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: strengthStyle.bg,
                          color: strengthStyle.color,
                          border: `1px solid ${strengthStyle.border}`
                        }}
                      >
                        {strengthStyle.label} ({star.strength})
                      </span>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: elemStyle.bg,
                          color: elemStyle.color,
                          border: `1px solid ${elemStyle.border}`
                        }}
                      >
                        Hành {star.element}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onSelectStar?.({
                          name: star.name,
                          rawName: star.name,
                          element: star.element,
                          strength: star.strength,
                          isMajor: true,
                          palaceName: palace.name,
                          palaceChi: palace.chi
                        })
                      }
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '5px',
                        background: 'rgba(217, 119, 6, 0.08)',
                        color: '#b45309',
                        border: '1px solid rgba(217, 119, 6, 0.25)',
                        cursor: 'pointer',
                        fontWeight: 700,
                        transition: 'all 0.15s ease'
                      }}
                      title="Bấm để xem phân tích toàn diện trong popup lớn"
                    >
                      <span>Xem Popup</span>
                      <ExternalLink size={13} />
                    </button>
                  </div>

                  {/* Nội dung luận giải khi tọa thủ tại cung này */}
                  {palaceDetail ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {/* Tổng quan */}
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.88rem',
                          lineHeight: '1.6',
                          color: '#262626',
                          textAlign: 'justify'
                        }}
                      >
                        {palaceDetail.overview}
                      </p>

                      {/* Cát tinh & Sát tinh (2 cột nếu màn hình lớn) */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                          gap: '0.5rem',
                          marginTop: '0.2rem'
                        }}
                      >
                        {palaceDetail.goodAspects && (
                          <div
                            style={{
                              fontSize: '0.81rem',
                              lineHeight: '1.5',
                              color: '#15803d',
                              background: '#f0fdf4',
                              padding: '6px 10px',
                              borderRadius: '6px',
                              border: '1px solid #bbf7d0',
                              display: 'flex',
                              gap: '6px'
                            }}
                          >
                            <CheckCircle2 size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                              <strong>Cát tinh tương trợ: </strong>
                              <span>{palaceDetail.goodAspects}</span>
                            </div>
                          </div>
                        )}

                        {palaceDetail.badAspects && (
                          <div
                            style={{
                              fontSize: '0.81rem',
                              lineHeight: '1.5',
                              color: '#991b1b',
                              background: '#fef2f2',
                              padding: '6px 10px',
                              borderRadius: '6px',
                              border: '1px solid #fecaca',
                              display: 'flex',
                              gap: '6px'
                            }}
                          >
                            <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                              <strong>Sát tinh xâm phạm: </strong>
                              <span>{palaceDetail.badAspects}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Khía cạnh đời sống đặc thù */}
                      {palaceDetail.specificAspect && (
                        <div
                          style={{
                            fontSize: '0.81rem',
                            lineHeight: '1.5',
                            color: '#0369a1',
                            background: '#f0f9ff',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            border: '1px solid #bae6fd',
                            display: 'flex',
                            gap: '6px'
                          }}
                        >
                          <Sparkles size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <div>
                            <strong>Trọng tâm thực tiễn: </strong>
                            <span>{palaceDetail.specificAspect}</span>
                          </div>
                        </div>
                      )}

                      {/* Lời khuyên tu dưỡng / Hóa giải */}
                      {palaceDetail.remedy && (
                        <div
                          style={{
                            fontSize: '0.81rem',
                            lineHeight: '1.5',
                            color: '#854d0e',
                            background: '#fffbeb',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            border: '1px dashed #fde68a',
                            display: 'flex',
                            gap: '6px'
                          }}
                        >
                          <ShieldCheck size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <div>
                            <strong>Lời khuyên tu dưỡng cải mệnh: </strong>
                            <span>{palaceDetail.remedy}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p style={{ margin: 0, fontSize: '0.86rem', color: '#64748b', fontStyle: 'italic' }}>
                      Chính tinh {cleanName} đang tọa thủ cung {palace.name}. Nhấp nút Xem Popup để tra cứu toàn diện ý nghĩa tinh đẩu.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Trường hợp Cung Vô Chính Diệu */
          <div
            style={{
              background: '#ffffff',
              border: '1px dashed rgba(197, 160, 89, 0.6)',
              borderRadius: '8px',
              padding: '1.15rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#92400e', fontWeight: 700, fontSize: '0.95rem' }}>
              <ArrowRightLeft size={18} color="#d97706" />
              <span>CUNG VÔ CHÍNH DIỆU — MƯỢN CHÍNH TINH CUNG ĐỐI XUNG</span>
            </div>

            <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: '1.6', color: '#33291e', textAlign: 'justify' }}>
              Cung <strong>{palace.name} ({palace.chi})</strong> không có chính tinh tọa thủ (Vô Chính Diệu).
              Theo nguyên lý Mệnh Lý Thiên Cơ và Tử Vi Đẩu Số kinh điển, khí lực cung này phụ thuộc rất lớn vào các phụ tinh đắc địa tọa thủ
              và đặc biệt phải <strong>mượn chính tinh từ cung đối xung ({palaceXungChieu?.name} tại {palaceXungChieu?.chi})</strong> chiếu về để định tính chất.
            </p>

            {palaceXungChieu && palaceXungChieu.majorStars.length > 0 ? (
              <div
                style={{
                  marginTop: '0.35rem',
                  padding: '0.85rem',
                  background: '#faf5ea',
                  borderRadius: '6px',
                  border: '1px solid #fed7aa',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#b45309' }}>
                  ✦ Chính tinh từ Cung {palaceXungChieu.name} ({palaceXungChieu.chi}) chiếu sang:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {palaceXungChieu.majorStars.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        onSelectStar?.({
                          name: s.name,
                          rawName: s.name,
                          element: s.element,
                          strength: s.strength,
                          isMajor: true,
                          palaceName: palaceXungChieu.name,
                          palaceChi: palaceXungChieu.chi
                        })
                      }
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '5px',
                        background: '#ffffff',
                        border: '1px solid #d97706',
                        color: '#92400e',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                      title={`Bấm xem chi tiết chính tinh xung chiếu ${s.name}`}
                    >
                      <span>★ {s.name} ({s.strength})</span>
                      <ExternalLink size={12} />
                    </button>
                  ))}
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#78350f', lineHeight: 1.5 }}>
                  <em>Ghi chú luận giải:</em> Khi mượn chính tinh xung chiếu, sức ảnh hưởng thường giảm bớt 20-30% so với tọa thủ trực tiếp, và rất kỵ gặp thêm Tuần/Triệt hoặc Sát tinh Không Kiếp hãm địa hội họp.
                </p>
              </div>
            ) : (
              <div style={{ fontSize: '0.82rem', color: '#64748b', fontStyle: 'italic' }}>
                Cung đối ({palaceXungChieu?.name}) cũng không có chính tinh. Cần xét toàn bộ thế trận tam hợp và bộ sao phụ tinh đắc hãm để định cục.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
