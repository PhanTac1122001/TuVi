import React from 'react';
import { TuViChartGenerator } from '@/features/chart-generator';

export const ChartGeneratorPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      {/* Page Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #cc0000, #990000)',
              color: '#ffffff'
            }}
          >
            Nam Phái Tiêu Chuẩn
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Phiên Bản Độc Lập Chuẩn TuViVietnam.vn
          </span>
        </div>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, margin: 0 }}>
          LẬP BÀN LÁ SỐ TỬ VI
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
          Hệ thống an sao tự động, tính đại vận, tiểu vận, nguyệt hạn và luận giải 12 cung chi tiết.
        </p>
      </div>

      {/* Standalone Isolated TuVi Chart Generator Feature */}
      <TuViChartGenerator />
    </div>
  );
};
