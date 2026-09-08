import React from 'react';
import { Printer, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';

interface ChartActionsProps {
  onReset: () => void;
  isFocusMode: boolean;
  onToggleFocus: () => void;
}

export const ChartActions: React.FC<ChartActionsProps> = ({
  onReset,
  isFocusMode,
  onToggleFocus
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="chart-actions-toolbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        background: '#ffffff',
        border: '1px solid #222222',
        borderRadius: '8px',
        marginBottom: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#4a148c' }}>
          CÔNG CỤ LÁ SỐ:
        </span>
        <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
          Chuẩn Nam Phái TuViVietnam.vn
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={handlePrint}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            background: '#f9fafb',
            color: '#111827',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="In hoặc Lưu PDF lá số A4 chuẩn"
        >
          <Printer size={16} />
          <span>In Lá Số / PDF</span>
        </button>

        <button
          type="button"
          onClick={onToggleFocus}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            background: isFocusMode ? '#0000ff' : '#f9fafb',
            color: isFocusMode ? '#ffffff' : '#111827',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Bật/Tắt chế độ xem tập trung toàn màn hình"
        >
          {isFocusMode ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          <span>{isFocusMode ? 'Thu Nhỏ' : 'Xem Tập Trung'}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            background: '#f9fafb',
            color: '#111827',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Tải lại hồ sơ mặc định"
        >
          <RotateCcw size={16} />
          <span>Mặc Định</span>
        </button>
      </div>
    </div>
  );
};
