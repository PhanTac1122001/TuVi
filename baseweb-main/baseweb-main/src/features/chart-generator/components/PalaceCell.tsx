import React from 'react';
import { TuViPalace, MinorStar, StarGroupItem } from '../types/chart.types';
import { SelectedStarInfo } from './StarDetailModal';

const BOLD_STARS = new Set([
  'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Hóa Kỵ',
  'Hóa lộc', 'Hóa quyền', 'Hóa khoa', 'Hóa kỵ',
  'Lộc Tồn', 'Kình Dương', 'Đà La', 'Cô Thần', 'Quả Tú', 'Phá Toái',
  'Lộc tồn', 'Kình dương', 'Đà la',
  'Địa Không', 'Địa Kiếp', 'Hỏa Tinh', 'Linh Tinh',
  'Thiên Không', 'Thiên Hình', 'Đại Hao', 'Tiểu Hao',
  'Đại hao', 'Tiểu hao',
  'Thiên Khôi', 'Thiên Việt', 'Đào Hoa', 'Văn Xương', 'Văn Khúc',
  'Thiên khôi', 'Thiên việt', 'Đào hoa', 'Văn xương', 'Văn khúc',
  'Thái Tuế', 'Thái tuế', 'Tang Môn', 'Tang môn', 'Bạch Hổ', 'Bạch hổ',
  'Tả Phù', 'Hữu Bật', 'Hồng Loan', 'Thiên Hỷ', 'Hồng loan', 'Thiên hỷ',
  'Thiên Diêu', 'Thiên Mã', 'Thiên mã', 'Đẩu Quân', 'Đẩu quân'
]);

function isBoldStar(s: MinorStar): boolean {
  const name = s.rawName || s.name;
  const cleanName = name.replace(/\(.\)/g, '').replace(/^(L\.|ĐV\.)/, '').trim();
  return BOLD_STARS.has(cleanName) || BOLD_STARS.has(name);
}

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

const CHI_ELEMENT_MAP: Record<string, string> = {
  'Tý': 'element-thuy', 'Sửu': 'element-tho', 'Dần': 'element-moc', 'Mão': 'element-moc',
  'Thìn': 'element-tho', 'Tỵ': 'element-hoa', 'Ngọ': 'element-hoa', 'Mùi': 'element-tho',
  'Thân': 'element-kim', 'Dậu': 'element-kim', 'Tuất': 'element-tho', 'Hợi': 'element-thuy'
};

import { getCleanStarName, StarGroupType } from '../engine/starHoverEngine';

export interface HoveredGroupState {
  sourceStar: string;
  cleanSourceStar: string;
  groupName: string;
  groupType: StarGroupType;
  targetStarsSet: Set<string>;
  palaceIndicesSet: Set<number>;
}

export type RelationType = 'selected' | 'tam-hop' | 'xung-chieu' | 'nhi-hop' | null;

interface PalaceCellProps {
  palace: TuViPalace;
  children?: React.ReactNode;
  relationType?: RelationType;
  onSelect?: () => void;
  goodGroups?: string[];
  badGroups?: string[];
  goodGroupItems?: StarGroupItem[];
  badGroupItems?: StarGroupItem[];
  onSelectStarGroup?: (group: StarGroupItem) => void;
  onSelectStar?: (star: SelectedStarInfo) => void;
  onOpenPalaceDetail?: (palace: TuViPalace) => void;
  hoveredGroup?: HoveredGroupState | null;
  onHoverStar?: (starName: string, isMajor: boolean, palaceIndex: number) => void;
  onLeaveStar?: () => void;
}

export const PalaceCell: React.FC<PalaceCellProps> = ({
  palace,
  children,
  relationType = null,
  onSelect,
  onSelectStar,
  onOpenPalaceDetail,
  hoveredGroup = null,
  onHoverStar,
  onLeaveStar
}) => {
  let nameText = palace.name;
  if (palace.isThan) nameText += ' <THÂN>';

  const GOOD_LUU_STARS = new Set([
    'L.Hóa Lộc', 'L.Hóa Quyền', 'L.Hóa Khoa', 'L.Lộc Tồn',
    'L.Thiên Mã', 'L.Thiên Khôi', 'L.Thiên Việt', 'L.Đào Hoa',
    'L.Hồng Loan', 'L.Thiên Hỷ', 'L.Văn Xương', 'L.Văn Khúc',
    'L.Hóa lộc', 'L.Hóa quyền', 'L.Hóa khoa', 'L.Lộc tồn',
    'L.Thiên mã', 'L.Thiên khôi', 'L.Thiên việt', 'L.Đào hoa',
    'L.Hồng loan', 'L.Thiên hỷ', 'L.Văn xương', 'L.Văn khúc',
    'ĐV.Hóa Lộc', 'ĐV.Hóa Quyền', 'ĐV.Hóa Khoa', 'ĐV.Lộc Tồn',
    'ĐV.Thiên Mã', 'ĐV.Thiên Khôi', 'ĐV.Thiên Việt', 'ĐV.Văn Xương', 'ĐV.Văn Khúc',
    'ĐV.Hóa lộc', 'ĐV.Hóa quyền', 'ĐV.Hóa khoa', 'ĐV.Lộc tồn',
    'ĐV.Thiên mã', 'ĐV.Thiên khôi', 'ĐV.Thiên việt', 'ĐV.Văn xương', 'ĐV.Văn khúc'
  ]);

  const isGoodMinorStar = (s: MinorStar) => {
    if (s.type === 'Good' || s.type === 'TuHoa') return true;
    const name = s.rawName || s.name;
    return GOOD_LUU_STARS.has(name) || GOOD_LUU_STARS.has(s.name);
  };

  const isLuuStar = (s: MinorStar) => s.name.startsWith('L.') || s.name.startsWith('ĐV.') || s.type === 'Luu';

  const leftStars = palace.minorStars.filter(isGoodMinorStar);
  leftStars.sort((a, b) => (isBoldStar(b) ? 1 : 0) - (isBoldStar(a) ? 1 : 0));

  const rightStars = palace.minorStars.filter(s => !isGoodMinorStar(s));
  rightStars.sort((a, b) => (isBoldStar(b) ? 1 : 0) - (isBoldStar(a) ? 1 : 0));

  const chiElementClass = CHI_ELEMENT_MAP[palace.chi] || 'element-kim';
  const chiDisplayName = palace.chi === 'Tý' ? 'Tí' : palace.chi;
  const canChiShorthand = `${palace.canShorthand}${chiDisplayName}`;

  const isSelected = relationType === 'selected';
  const hasHoveredGroupStar = hoveredGroup ? hoveredGroup.palaceIndicesSet.has(palace.index) : false;
  const groupHoverCellClass = hasHoveredGroupStar ? 'has-hovered-group-star' : '';

  // CSS classes based on relation
  const relationClass = relationType ? `is-${relationType}` : '';

  // Badge text for relation
  let relationBadgeText = '';
  if (relationType === 'selected') relationBadgeText = palace.isMenh ? 'Mệnh' : 'Tiêu Điểm';
  else if (relationType === 'tam-hop') relationBadgeText = 'Tam Hợp';
  else if (relationType === 'xung-chieu') relationBadgeText = 'Cung Đối';
  else if (relationType === 'nhi-hop') relationBadgeText = 'Nhị Hợp';

  const hasPhiTinh = Boolean(
    palace.phiTinhDetail && (
      palace.phiTinhDetail.khoa ||
      palace.phiTinhDetail.quyen ||
      palace.phiTinhDetail.loc ||
      palace.phiTinhDetail.ky
    )
  );

  return (
    <div
      className={`palace-cell pos-chi-${palace.index} ${palace.isMenh ? 'is-menh' : ''} ${palace.isNienHan ? 'is-nien-han' : ''} ${relationClass} ${groupHoverCellClass}`}
      onClick={onSelect}
      title={
        isSelected
          ? `Cung ${palace.name} (${palace.chi}) đang là tiêu điểm`
          : `Nhấp để chọn cung ${palace.name} (${palace.chi}) làm tiêu điểm & soi chiếu Tam Hợp`
      }
    >
      {/* Header */}
      <div className="palace-header">
        <span className={`can-shorthand ${chiElementClass}`}>{canChiShorthand}</span>
        <span
          className="palace-title clickable-palace-title"
          onClick={(e) => {
            e.stopPropagation();
            if (!isSelected) {
              onSelect?.();
              return;
            }
            onOpenPalaceDetail?.(palace);
          }}
          title={
            isSelected
              ? `Nhấp để mở Popup thông tin chi tiết Cung ${palace.name}`
              : `Nhấp để chọn cung ${palace.name} làm tiêu điểm`
          }
        >
          {nameText}
        </span>
        <span className="dai-van-num">{palace.daiVan}</span>
      </div>

      {/* Sub-Header: Khi BẬT Khoa Quyền nhập / Lộc Kỵ nhập (hasPhiTinh = true) thì đưa LN. Cung (Góc trái) & Tháng Hạn T1..T12 (Góc phải) lên trên cùng hàng */}
      {hasPhiTinh && (palace.luuNienCung || palace.thangHan !== undefined) && (
        <div className="palace-sub-header">
          <span className="luu-nien-cung-label">{palace.luuNienCung}</span>
          {palace.thangHan !== undefined && (
            <span className="thang-han-label">T{palace.thangHan}</span>
          )}
        </div>
      )}

      {/* Transit & Relation mini banner (Cung Đối / Tam Hợp / Nhị Hợp / Mệnh / Lưu Niên / L.Đại Vận) */}
      {(relationType || palace.isNienHan || palace.isCurrentDaiVan) && (
        <div
          className="palace-transit-bar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            margin: '0 0 2px 0',
            zIndex: 3,
            flexShrink: 0
          }}
        >
          {relationType && (
            <span className={`relation-badge-inline badge-${relationType}`}>
              {relationBadgeText}
            </span>
          )}
          {palace.isCurrentDaiVan && (
            <span
              style={{
                background: 'rgba(180, 83, 9, 0.12)',
                border: '1px solid rgba(180, 83, 9, 0.45)',
                color: '#9a3412',
                fontSize: '0.54rem',
                fontWeight: 800,
                padding: '0 4px',
                borderRadius: '3px',
                lineHeight: '12px'
              }}
              title="Đương số đang ở giai đoạn Đại Vận 10 năm này"
            >
              L.Đại Vận
            </span>
          )}
          {palace.isNienHan && (
            <span
              style={{
                background: 'linear-gradient(135deg, #b71c1c 0%, #7f1d1d 100%)',
                color: '#ffffff',
                fontSize: '0.54rem',
                fontWeight: 800,
                padding: '0 5px',
                borderRadius: '3px',
                lineHeight: '12px',
                boxShadow: '0 1px 2px rgba(183, 28, 28, 0.3)'
              }}
              title={`Vận Hạn Năm Xem: ${palace.nienHanLabel}`}
            >
              ✦ {palace.nienHanLabel}
            </span>
          )}
        </div>
      )}

      {/* Major Stars */}
      <div className="major-stars-container">
        {palace.majorStars.map((s, idx) => {
          const cleanName = getCleanStarName(s.name);
          const isHoverSource = hoveredGroup?.cleanSourceStar === cleanName;
          const isInGroup = hoveredGroup ? hoveredGroup.targetStarsSet.has(cleanName) : false;
          const isDimmed = hoveredGroup !== null && !isInGroup;

          let groupHighlightClass = '';
          if (isHoverSource) {
            groupHighlightClass = 'star-hover-source';
          } else if (isInGroup) {
            groupHighlightClass = `star-in-group-highlight group-type-${hoveredGroup?.groupType}`;
          } else if (isDimmed) {
            groupHighlightClass = 'star-dimmed';
          }

          return (
            <div
              key={idx}
              className={`major-star-name ${getElementClass(s.element)} ${groupHighlightClass}`}
              onMouseEnter={() => onHoverStar?.(s.name, true, palace.index)}
              onMouseLeave={() => onLeaveStar?.()}
              onClick={(e) => {
                if (!isSelected) {
                  e.stopPropagation();
                  onSelect?.();
                  return;
                }
                e.stopPropagation();
                onSelectStar?.({
                  name: s.name,
                  rawName: s.name,
                  element: s.element,
                  strength: s.strength,
                  isMajor: true,
                  palaceName: palace.name,
                  palaceChi: palace.chi
                });
              }}
              title={
                isSelected
                  ? `Nhấp để tra cứu chi tiết chính tinh ${s.name} (${s.strength}) tại cung ${palace.name}`
                  : `Nhấp để chọn cung ${palace.name} làm tiêu điểm`
              }
            >
              {s.name}
              <span className="strength-tag">({s.strength})</span>
            </div>
          );
        })}
      </div>

      {/* Minor Stars 2-Column Grid */}
      <div className="minor-stars-grid" style={{ minHeight: 0, flexGrow: 1 }}>
        <div className="stars-col-left">
          {leftStars.map((s, idx) => {
            const cleanName = getCleanStarName(s.rawName || s.name);
            const isHoverSource = hoveredGroup?.cleanSourceStar === cleanName;
            const isInGroup = hoveredGroup ? hoveredGroup.targetStarsSet.has(cleanName) : false;
            const isDimmed = hoveredGroup !== null && !isInGroup;

            let groupHighlightClass = '';
            if (isHoverSource) {
              groupHighlightClass = 'star-hover-source';
            } else if (isInGroup) {
              groupHighlightClass = `star-in-group-highlight group-type-${hoveredGroup?.groupType}`;
            } else if (isDimmed) {
              groupHighlightClass = 'star-dimmed';
            }

            return (
              <div
                key={idx}
                className={`minor-star ${getElementClass(s.element)} ${isBoldStar(s) ? 'bold-star' : ''} ${isLuuStar(s) ? 'star-luu' : ''} ${groupHighlightClass}`}
                onMouseEnter={() => onHoverStar?.(s.rawName || s.name, false, palace.index)}
                onMouseLeave={() => onLeaveStar?.()}
                onClick={(e) => {
                  if (!isSelected) {
                    e.stopPropagation();
                    onSelect?.();
                    return;
                  }
                  e.stopPropagation();
                  onSelectStar?.({
                    name: s.name,
                    rawName: s.rawName,
                    element: s.element,
                    type: s.type,
                    isMajor: false,
                    palaceName: palace.name,
                    palaceChi: palace.chi
                  });
                }}
                title={
                  isSelected
                    ? (isLuuStar(s) ? `Sao Lưu Niên: ${s.name} tại cung ${palace.name}` : `Nhấp để tra cứu thông tin sao ${s.name} tại cung ${palace.name}`)
                    : `Nhấp để chọn cung ${palace.name} làm tiêu điểm`
                }
              >
                {s.name}
              </div>
            );
          })}
        </div>
        <div className="stars-col-right">
          {rightStars.map((s, idx) => {
            const cleanName = getCleanStarName(s.rawName || s.name);
            const isHoverSource = hoveredGroup?.cleanSourceStar === cleanName;
            const isInGroup = hoveredGroup ? hoveredGroup.targetStarsSet.has(cleanName) : false;
            const isDimmed = hoveredGroup !== null && !isInGroup;

            let groupHighlightClass = '';
            if (isHoverSource) {
              groupHighlightClass = 'star-hover-source';
            } else if (isInGroup) {
              groupHighlightClass = `star-in-group-highlight group-type-${hoveredGroup?.groupType}`;
            } else if (isDimmed) {
              groupHighlightClass = 'star-dimmed';
            }

            return (
              <div
                key={idx}
                className={`minor-star ${getElementClass(s.element)} ${isBoldStar(s) ? 'bold-star' : ''} ${isLuuStar(s) ? 'star-luu' : ''} ${groupHighlightClass}`}
                onMouseEnter={() => onHoverStar?.(s.rawName || s.name, false, palace.index)}
                onMouseLeave={() => onLeaveStar?.()}
                onClick={(e) => {
                  if (!isSelected) {
                    e.stopPropagation();
                    onSelect?.();
                    return;
                  }
                  e.stopPropagation();
                  onSelectStar?.({
                    name: s.name,
                    rawName: s.rawName,
                    element: s.element,
                    type: s.type,
                    isMajor: false,
                    palaceName: palace.name,
                    palaceChi: palace.chi
                  });
                }}
                title={
                  isSelected
                    ? (isLuuStar(s) ? `Sao Lưu Niên: ${s.name} tại cung ${palace.name}` : `Nhấp để tra cứu thông tin sao ${s.name} tại cung ${palace.name}`)
                    : `Nhấp để chọn cung ${palace.name} làm tiêu điểm`
                }
              >
                {s.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Phi Tinh Tứ Hóa Nhập (Lộc nhập, Kỵ nhập, Khoa nhập, Quyền nhập) */}
      {palace.phiTinhTags && palace.phiTinhTags.length > 0 && (
        <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', margin: '2px 0', zIndex: 2, flexWrap: 'wrap' }}>
          {palace.phiTinhTags.map((tag, tIdx) => {
            const isGood = tag.includes('Lộc') || tag.includes('Khoa') || tag.includes('Quyền');
            return (
              <span
                key={tIdx}
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '1px 4px',
                  borderRadius: '3px',
                  background: isGood ? 'rgba(22, 163, 74, 0.12)' : 'rgba(220, 38, 38, 0.12)',
                  color: isGood ? '#15803d' : '#b91c1c',
                  border: `1px solid ${isGood ? 'rgba(22, 163, 74, 0.4)' : 'rgba(220, 38, 38, 0.4)'}`,
                  lineHeight: '12px'
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}



      {/* Footer */}
      <div
        className="palace-footer"
        style={{
          flexShrink: 0,
          marginTop: 'auto',
          paddingTop: '2px',
          borderTop: '1px dotted #dcd1be',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          minHeight: '22px'
        }}
      >
        <div className="footer-left-box">
          {palace.daiVanCung ? (
            <span className="dai-van-cung-label">{palace.daiVanCung}</span>
          ) : (
            <span className="footer-chi">{palace.tieuVanChi}</span>
          )}
        </div>

        <div className="footer-center-box">
          <span className="footer-trang-sinh">{palace.trangSinhStar}</span>
        </div>

        <div className="footer-right-box">
          {hasPhiTinh ? (
            <div className="phi-tinh-box">
              {palace.phiTinhDetail?.khoa && (
                <div className="phi-tinh-item phi-tinh-khoa">
                  <span className="pt-label">Khoa:</span> <span className="pt-cung">{palace.phiTinhDetail.khoa}</span>
                </div>
              )}
              {palace.phiTinhDetail?.quyen && (
                <div className="phi-tinh-item phi-tinh-quyen">
                  <span className="pt-label">Quyền:</span> <span className="pt-cung">{palace.phiTinhDetail.quyen}</span>
                </div>
              )}
              {palace.phiTinhDetail?.loc && (
                <div className="phi-tinh-item phi-tinh-loc">
                  <span className="pt-label">Lộc:</span> <span className="pt-cung">{palace.phiTinhDetail.loc}</span>
                </div>
              )}
              {palace.phiTinhDetail?.ky && (
                <div className="phi-tinh-item phi-tinh-ky">
                  <span className="pt-label">Kỵ:</span> <span className="pt-cung">{palace.phiTinhDetail.ky}</span>
                </div>
              )}
            </div>
          ) : (palace.luuNienCung || palace.thangHan !== undefined) ? (
            <div className="footer-luu-nien-thang-box" style={{ display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
              {palace.luuNienCung && (
                <span className="footer-luu-nien-label" style={{ fontWeight: 700, color: '#374151', fontSize: '0.68rem' }}>
                  {palace.luuNienCung}
                </span>
              )}
              {palace.thangHan !== undefined && (
                <span className="footer-thang-han-label" style={{ fontWeight: 800, color: '#111827', fontSize: '0.72rem' }}>
                  T{palace.thangHan}
                </span>
              )}
            </div>
          ) : (
            <span className="footer-tieu-van">{palace.tieuVanMonth}</span>
          )}
        </div>
      </div>

      {/* Border Badges (Tuần / Triệt) */}
      {children}
    </div>
  );
};
