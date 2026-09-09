import React, { useState } from 'react';
import { ChartResult, Star } from '../../types/tuvi.types';
import { PalaceCell } from './PalaceCell';
import { ThienBan } from './ThienBan';

interface ChartBoardProps {
  chart: ChartResult;
  onSelectPalace?: (index: number) => void;
  onSelectStar?: (star: Star) => void;
}

// Cặp nhị hợp trong 12 Địa Chi
const NHI_HOP_MAP: Record<number, number> = {
  0: 1, 1: 0,   // Tý - Sửu
  2: 11, 11: 2, // Dần - Hợi
  3: 10, 10: 3, // Mão - Tuất
  4: 9, 9: 4,   // Thìn - Dậu
  5: 8, 8: 5,   // Tỵ - Thân
  6: 7, 7: 6    // Ngọ - Mùi
};

export const ChartBoard: React.FC<ChartBoardProps> = ({
  chart,
  onSelectPalace,
  onSelectStar
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(chart.menhChiIndex);

  const handleCellClick = (idx: number) => {
    setSelectedIdx(idx);
    onSelectPalace?.(idx);
  };

  const getRelationClass = (idx: number) => {
    if (selectedIdx === null) return '';
    if (idx === selectedIdx) return 'selected';
    if (idx === (selectedIdx + 6) % 12) return 'xung-chieu';
    if (idx === (selectedIdx + 4) % 12 || idx === (selectedIdx + 8) % 12) return 'tam-hop';
    if (idx === NHI_HOP_MAP[selectedIdx]) return 'nhi-hop';
    return '';
  };

  // Tra cứu palace theo index (0 đến 11)
  const getP = (idx: number) => chart.palaces[idx];

  return (
    <div className="chart-container">
      {/* Legend for Relationships */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '10px',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', background: '#ffd700', borderRadius: '3px' }}></span>
          <span>Cung chọn</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', background: '#38bdf8', borderRadius: '3px' }}></span>
          <span>Tam Hợp (Chiếu)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', background: '#f43f5e', borderRadius: '3px' }}></span>
          <span>Xung Chiếu</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '3px' }}></span>
          <span>Nhị Hợp</span>
        </div>
      </div>

      <div className="chart-grid">
        {/* Row 1: Tỵ (5), Ngọ (6), Mùi (7), Thân (8) */}
        <PalaceCell palace={getP(5)} relationClass={getRelationClass(5)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(6)} relationClass={getRelationClass(6)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(7)} relationClass={getRelationClass(7)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(8)} relationClass={getRelationClass(8)} onClick={handleCellClick} onStarClick={onSelectStar} />

        {/* Row 2: Thìn (4), [THIÊN BÀN], Dậu (9) */}
        <PalaceCell palace={getP(4)} relationClass={getRelationClass(4)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <ThienBan chart={chart} />
        <PalaceCell palace={getP(9)} relationClass={getRelationClass(9)} onClick={handleCellClick} onStarClick={onSelectStar} />

        {/* Row 3: Mão (3), [THIÊN BÀN extends here], Tuất (10) */}
        <PalaceCell palace={getP(3)} relationClass={getRelationClass(3)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(10)} relationClass={getRelationClass(10)} onClick={handleCellClick} onStarClick={onSelectStar} />

        {/* Row 4: Dần (2), Sửu (1), Tý (0), Hợi (11) */}
        <PalaceCell palace={getP(2)} relationClass={getRelationClass(2)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(1)} relationClass={getRelationClass(1)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(0)} relationClass={getRelationClass(0)} onClick={handleCellClick} onStarClick={onSelectStar} />
        <PalaceCell palace={getP(11)} relationClass={getRelationClass(11)} onClick={handleCellClick} onStarClick={onSelectStar} />
      </div>
    </div>
  );
};
