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
          gap: '0.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >


        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            margin: '0.2rem 0',
            letterSpacing: '0.5px',
            fontFamily: "'Cinzel', 'Playfair Display', var(--font-sans)"
          }}
        >
          LẬP BÀN LÁ SỐ TỬ VI TÂM AN
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, maxWidth: '850px' }}>
          An sao 12 cung vị theo Thiên Bàn & Địa Bàn chuẩn mực Nam Phái, tự động định cục, nạp âm, đại tiểu vận,
          đồng thời hỗ trợ soi chiếu trực quan các trục quan hệ Tam Hợp, Xung Chiếu và Nhị Hợp.
        </p>
      </div>

      {/* Standalone Isolated TuVi Chart Generator Feature */}
      <TuViChartGenerator />
    </div>
  );
};
