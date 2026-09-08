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

export function getBorderBadgesMap(palaces: TuViPalace[]): Record<number, Array<{ text: string; borderType: string }>> {
  const tuanPalaces = palaces.filter(p => p.tuan).map(p => p.index);
  const trietPalaces = palaces.filter(p => p.triet).map(p => p.index);

  const badgesByTargetChi: Record<number, Array<{ text: string; borderType: string }>> = {};

  BORDER_CONFIGS.forEach(cfg => {
    const hasTriet = trietPalaces.includes(cfg.pair[0]) && trietPalaces.includes(cfg.pair[1]);
    const hasTuan = tuanPalaces.includes(cfg.pair[0]) && tuanPalaces.includes(cfg.pair[1]);

    if (!hasTriet && !hasTuan) return;

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
    badgesByTargetChi[cfg.targetChi].push({ text, borderType: cfg.borderType });
  });

  return badgesByTargetChi;
}

interface BorderBadgeProps {
  text: string;
  borderType: string;
}

export const BorderBadge: React.FC<BorderBadgeProps> = ({ text, borderType }) => {
  return (
    <div className={`border-badge badge-on-${borderType}`}>
      {text}
    </div>
  );
};
