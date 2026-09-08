import React from 'react';
import { TuViChart } from '../types/chart.types';
import { ThienBanCell } from './ThienBanCell';
import { PalaceCell } from './PalaceCell';
import { getBorderBadgesMap, BorderBadge } from './BorderBadges';

interface ChartBoardProps {
  chart: TuViChart;
  userName: string;
}

export const ChartBoard: React.FC<ChartBoardProps> = ({ chart, userName }) => {
  const badgesByTargetChi = getBorderBadgesMap(chart.palaces);

  return (
    <div className="chart-grid-container" id="chartGrid">
      {/* 1. Central Box: Thiên Bàn */}
      <ThienBanCell chart={chart} userName={userName} />

      {/* 2. 12 Palaces with exact 4x4 Grid Positioning & Border Badges */}
      {chart.palaces.map((palace) => {
        const badges = badgesByTargetChi[palace.index] || [];
        return (
          <PalaceCell key={palace.index} palace={palace}>
            {badges.map((b, bIdx) => (
              <BorderBadge key={bIdx} text={b.text} borderType={b.borderType} />
            ))}
          </PalaceCell>
        );
      })}
    </div>
  );
};
