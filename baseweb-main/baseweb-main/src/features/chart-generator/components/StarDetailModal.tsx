import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldCheck, Compass, ExternalLink, MapPin } from 'lucide-react';
import { TUVI_STARS } from '@/data/tuvi/stars';
import { STAR_PALACES_MAP } from '@/data/tuvi/starPalacesData';
import { MINOR_STARS_DICT } from '../engine/minorStarDescriptions';
import { STAR_METADATA } from '../engine/starMetadata';

export interface SelectedStarInfo {
  name: string;
  rawName?: string;
  element: string;
  strength?: string;
  type?: string;
  isMajor: boolean;
  palaceName: string;
  palaceChi: string;
}

interface StarDetailModalProps {
  star: SelectedStarInfo | null;
  onClose: () => void;
}

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

function getElementBadgeStyle(element: string) {
  switch (element) {
    case 'Kim':
      return { bg: '#f1f5f9', color: '#475569', border: '#cbd5e1' };
    case 'Mộc':
      return { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' };
    case 'Thủy':
      return { bg: '#ffffff', color: '#000000', border: '#cbd5e1' };
    case 'Hỏa':
      return { bg: '#fef2f2', color: '#991b1b', border: '#fecaca' };
    case 'Thổ':
      return { bg: '#fefce8', color: '#854d0e', border: '#fef08a' };
    default:
      return { bg: '#f8fafc', color: '#334155', border: '#e2e8f0' };
  }
}

export const StarDetailModal: React.FC<StarDetailModalProps> = ({ star, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (star) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [star, onClose]);

  const cleanName = useMemo(() => {
    if (!star) return '';
    return (star.rawName || star.name).replace(/\(.\)/g, '').trim();
  }, [star]);

  const starSlug = useMemo(() => getStarSlug(cleanName), [cleanName]);

  const tuviStar = useMemo(() => {
    if (!cleanName) return null;
    return TUVI_STARS.find(
      s => s.id === starSlug || s.name.toLowerCase() === cleanName.toLowerCase()
    );
  }, [cleanName, starSlug]);

  const palaceId = useMemo(() => {
    if (!star) return 'menh';
    return PALACE_NAME_TO_ID[star.palaceName] || 'menh';
  }, [star]);

  const palaceDetail = useMemo(() => {
    if (!starSlug) return null;
    return STAR_PALACES_MAP[starSlug]?.[palaceId] || null;
  }, [starSlug, palaceId]);

  const minorDetail = useMemo(() => {
    if (!cleanName) return null;
    return MINOR_STARS_DICT[cleanName] || null;
  }, [cleanName]);

  const metaItem = useMemo(() => {
    if (!cleanName) return null;
    return STAR_METADATA[cleanName] || null;
  }, [cleanName]);

  if (!star) return null;

  const element = star.element || tuviStar?.element || minorDetail?.element || metaItem?.element || 'Thổ';
  const elementStyle = getElementBadgeStyle(element);

  const category = tuviStar?.category || minorDetail?.category || (star.isMajor ? '14 Chính Tinh' : 'Phụ Tinh');
  const huaKhi = tuviStar?.huaKhi || minorDetail?.huaKhi;
  const characteristics = tuviStar?.characteristics || minorDetail?.characteristics;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(26, 22, 21, 0.72)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(145deg, #fffefb 0%, #f7f2e8 100%)',
          border: '2px double #c5a059',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.15rem 1.45rem',
            borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.75rem',
            background: 'rgba(217, 119, 6, 0.04)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: elementStyle.bg,
                  color: elementStyle.color,
                  border: `1px solid ${elementStyle.border}`,
                  boxShadow: element === 'Thủy' ? '0 1px 3px rgba(0, 0, 0, 0.12)' : undefined
                }}
              >
                Hành {element}
              </span>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(217, 119, 6, 0.1)',
                  color: '#854d0e',
                  border: '1px solid rgba(197, 160, 89, 0.3)'
                }}
              >
                {category}
              </span>

              {star.strength && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#fef3c7',
                    color: '#92400e',
                    border: '1px solid #fcd34d'
                  }}
                >
                  Độ Sáng: {star.strength}
                </span>
              )}

              {tuviStar?.yinYang && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#f8fafc',
                    color: '#475569',
                    border: '1px solid #cbd5e1'
                  }}
                >
                  {tuviStar.yinYang} {element}
                </span>
              )}
            </div>

            <h3
              style={{
                margin: '4px 0 0 0',
                fontSize: '1.45rem',
                fontFamily: 'var(--font-serif-imperial)',
                fontWeight: 900,
                color: '#78350f',
                lineHeight: 1.3
              }}
            >
              ★ {cleanName} {star.strength ? `(${star.strength})` : ''}
            </h3>

            {huaKhi && (
              <span style={{ fontSize: '0.82rem', color: '#92400e', fontStyle: 'italic', fontWeight: 600 }}>
                Hóa khí: {huaKhi}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#78350f',
              padding: '6px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s'
            }}
            title="Đóng cửa sổ"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Vị trí cung hiện tại */}
          <div
            style={{
              padding: '0.65rem 1rem',
              background: '#ffffff',
              borderRadius: '8px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#78350f',
              fontWeight: 700
            }}
          >
            <MapPin size={17} color="#d97706" />
            <span>Tọa thủ tại: Cung {star.palaceName} (Địa chi: {star.palaceChi})</span>
          </div>

          {/* Luận giải tại cung này (nếu có từ starPalacesData) */}
          {palaceDetail && (
            <div
              style={{
                padding: '1rem 1.15rem',
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid rgba(197, 160, 89, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#166534', fontWeight: 800, fontSize: '0.86rem' }}>
                <Compass size={17} />
                <span>Ý NGHĨA KHI TỌA THỦ TẠI CUNG {star.palaceName.toUpperCase()}:</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.65', color: '#33291e', textAlign: 'justify' }}>
                {palaceDetail.overview}
              </p>

              {/* Grid 2 cột cho Cát tinh và Sát tinh trên popup lớn */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.65rem',
                  marginTop: '0.25rem'
                }}
              >
                {palaceDetail.goodAspects && (
                  <div style={{ fontSize: '0.84rem', lineHeight: '1.5', color: '#15803d', background: '#f0fdf4', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                    <strong>Cát tinh tương trợ: </strong> {palaceDetail.goodAspects}
                  </div>
                )}

                {palaceDetail.badAspects && (
                  <div style={{ fontSize: '0.84rem', lineHeight: '1.5', color: '#991b1b', background: '#fef2f2', padding: '8px 12px', borderRadius: '6px', border: '1px solid #fecaca' }}>
                    <strong>Sát tinh xâm phạm: </strong> {palaceDetail.badAspects}
                  </div>
                )}
              </div>

              {palaceDetail.specificAspect && (
                <div style={{ fontSize: '0.84rem', lineHeight: '1.5', color: '#0369a1', background: '#f0f9ff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #bae6fd' }}>
                  <strong>Trọng tâm thực tiễn: </strong> {palaceDetail.specificAspect}
                </div>
              )}

              {palaceDetail.remedy && (
                <div style={{ fontSize: '0.84rem', lineHeight: '1.5', color: '#854d0e', background: '#fffbeb', padding: '8px 12px', borderRadius: '6px', border: '1px dashed #fde68a' }}>
                  <strong>Lời khuyên tu dưỡng: </strong> {palaceDetail.remedy}
                </div>
              )}
            </div>
          )}

          {/* Đặc tính tổng quan */}
          {characteristics && !palaceDetail && (
            <div
              style={{
                padding: '0.85rem 1rem',
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#78350f', fontWeight: 800, fontSize: '0.82rem' }}>
                <ShieldCheck size={16} />
                <span>ĐẶC TÍNH CỐT LÕI CỦA SAO:</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: '1.6', color: '#33291e', textAlign: 'justify' }}>
                {characteristics}
              </p>

              {minorDetail?.goodAspects && (
                <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: '#15803d', background: '#f0fdf4', padding: '6px 10px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                  <strong>Khi đắc cách:</strong> {minorDetail.goodAspects}
                </div>
              )}

              {minorDetail?.badAspects && (
                <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: '#991b1b', background: '#fef2f2', padding: '6px 10px', borderRadius: '6px', border: '1px solid #fecaca' }}>
                  <strong>Khi hãm địa / gặp sát tinh:</strong> {minorDetail.badAspects}
                </div>
              )}

              {minorDetail?.advice && (
                <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: '#854d0e', background: '#fffbeb', padding: '6px 10px', borderRadius: '6px', border: '1px dashed #fde68a' }}>
                  <strong>Lời khuyên:</strong> {minorDetail.advice}
                </div>
              )}
            </div>
          )}

          {/* Thông tin bổ sung cho Chính Tinh / Cát Tinh lớn */}
          {tuviStar && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                fontSize: '0.82rem'
              }}
            >
              {tuviStar.personality && (
                <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                  <strong style={{ color: '#78350f', display: 'block', marginBottom: '2px' }}>Tính cách:</strong>
                  <span style={{ color: '#4b5563', lineHeight: '1.4' }}>{tuviStar.personality}</span>
                </div>
              )}

              {tuviStar.careerWealth && (
                <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                  <strong style={{ color: '#78350f', display: 'block', marginBottom: '2px' }}>Nghề nghiệp & Tài lộc:</strong>
                  <span style={{ color: '#4b5563', lineHeight: '1.4' }}>{tuviStar.careerWealth}</span>
                </div>
              )}

              {tuviStar.appearance && (
                <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                  <strong style={{ color: '#78350f', display: 'block', marginBottom: '2px' }}>Tướng mạo:</strong>
                  <span style={{ color: '#4b5563', lineHeight: '1.4' }}>{tuviStar.appearance}</span>
                </div>
              )}

              {tuviStar.ungVanHan && (
                <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                  <strong style={{ color: '#78350f', display: 'block', marginBottom: '2px' }}>Ứng vận hạn:</strong>
                  <span style={{ color: '#4b5563', lineHeight: '1.4' }}>{tuviStar.ungVanHan}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            borderTop: '1px solid rgba(197, 160, 89, 0.25)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.02)'
          }}
        >
          {tuviStar ? (
            <Link
              to={`/tra-cuu/${tuviStar.id}`}
              style={{
                fontSize: '0.8rem',
                color: '#b45309',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Tra cứu chuyên sâu sao {cleanName} (12 cung vị)
            </Link>
          ) : (
            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              Chuẩn thuật số Tử Vi Đẩu Số Việt Nam
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px 18px',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #c5a059, #916f28)',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
            }}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
