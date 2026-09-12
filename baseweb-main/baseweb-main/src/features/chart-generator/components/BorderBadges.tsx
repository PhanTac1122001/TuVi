import React from 'react';
import { TuViPalace } from '../types/chart.types';

export interface BorderConfig {
  pair: [number, number];
  targetChi: number;
  borderType: 'bottom' | 'right';
}

export const BORDER_CONFIGS: BorderConfig[] = [
  { pair: [4, 5], targetChi: 5, borderType: 'bottom' }, // Tỵ (5) & Thìn (4) -> viền ngang đáy Tỵ
  { pair: [6, 7], targetChi: 6, borderType: 'right' },  // Ngọ (6) & Mùi (7) -> viền dọc phải Ngọ
  { pair: [8, 9], targetChi: 8, borderType: 'bottom' }, // Thân (8) & Dậu (9) -> viền ngang đáy Thân
  { pair: [2, 3], targetChi: 3, borderType: 'bottom' }, // Mão (3) & Dần (2) -> viền ngang đáy Mão
  { pair: [0, 1], targetChi: 1, borderType: 'right' },  // Sửu (1) & Tý (0) -> viền dọc phải Sửu
  { pair: [10, 11], targetChi: 10, borderType: 'bottom' } // Tuất (10) & Hợi (11) -> viền ngang đáy Tuất
];

export function getBorderBadgesMap(palaces: TuViPalace[]): Record<number, Array<{ text: string; borderType: string; isTransit?: boolean }>> {
  const tuanPalaces = palaces.filter(p => p.tuan).map(p => p.index);
  const trietPalaces = palaces.filter(p => p.triet).map(p => p.index);
  const luuTuanPalaces = palaces.filter(p => p.luuTuan).map(p => p.index);
  const luuTrietPalaces = palaces.filter(p => p.luuTriet).map(p => p.index);

  const badgesByTargetChi: Record<number, Array<{ text: string; borderType: string; isTransit?: boolean }>> = {};

  BORDER_CONFIGS.forEach(cfg => {
    // 1. Tuần & Triệt gốc
    const hasTriet = trietPalaces.includes(cfg.pair[0]) && trietPalaces.includes(cfg.pair[1]);
    const hasTuan = tuanPalaces.includes(cfg.pair[0]) && tuanPalaces.includes(cfg.pair[1]);

    if (hasTriet || hasTuan) {
      let text = '';
      if (hasTriet && hasTuan) {
        text = 'Tuần - Triệt';
      } else if (hasTriet) {
        text = 'Triệt';
      } else if (hasTuan) {
        text = 'Tuần';
      }

      if (!badgesByTargetChi[cfg.targetChi]) {
        badgesByTargetChi[cfg.targetChi] = [];
      }
      badgesByTargetChi[cfg.targetChi].push({ text, borderType: cfg.borderType, isTransit: false });
    }

    // 2. Lưu Tuần & Lưu Triệt năm xem hạn
    const hasLuuTriet = luuTrietPalaces.includes(cfg.pair[0]) && luuTrietPalaces.includes(cfg.pair[1]);
    const hasLuuTuan = luuTuanPalaces.includes(cfg.pair[0]) && luuTuanPalaces.includes(cfg.pair[1]);

    if (hasLuuTriet || hasLuuTuan) {
      let luuText = '';
      if (hasLuuTriet && hasLuuTuan) {
        luuText = 'L.Tuần - L.Triệt';
      } else if (hasLuuTriet) {
        luuText = 'L.Triệt';
      } else if (hasLuuTuan) {
        luuText = 'L.Tuần';
      }

      if (!badgesByTargetChi[cfg.targetChi]) {
        badgesByTargetChi[cfg.targetChi] = [];
      }
      badgesByTargetChi[cfg.targetChi].push({ text: luuText, borderType: cfg.borderType, isTransit: true });
    }
  });

  return badgesByTargetChi;
}

interface BorderBadgeProps {
  text: string;
  borderType: string;
  isTransit?: boolean;
}

export const BorderBadge: React.FC<BorderBadgeProps> = ({ text, borderType, isTransit }) => {
  return (
    <div
      className={`border-badge badge-on-${borderType} ${isTransit ? 'badge-transit' : ''}`}
      style={
        isTransit
          ? {
              background: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
              borderColor: '#f59e0b',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(180, 83, 9, 0.4)',
              fontSize: '0.62rem',
              fontWeight: 800,
              letterSpacing: '0.2px'
            }
          : undefined
      }
    >
      {text}
    </div>
  );
};
