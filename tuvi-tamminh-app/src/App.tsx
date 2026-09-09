import React, { useState } from 'react';
import { ChartInput, ChartResult, Star } from './types/tuvi.types';
import { calculateTuViChart } from './engine';
import { generateTamMinhReport } from './engine/tamMinhEngine';
import { Header } from './components/common/Header';
import { ChartInputForm } from './components/form/ChartInputForm';
import { ChartBoard } from './components/chart/ChartBoard';
import { PalaceInspectorModal } from './components/chart/PalaceInspectorModal';
import { StarDictionaryModal } from './components/interpretation/StarDictionaryModal';
import { TamMinhReportView } from './components/interpretation/TamMinhReportView';
import { ThienCoInterpretation } from './components/report/ThienCoInterpretation';

export default function App() {
  const [chartInput, setChartInput] = useState<ChartInput>({
    fullName: 'Trần Văn Minh',
    gender: 'nam',
    solarDay: 15,
    solarMonth: 5,
    solarYear: 1995,
    solarHour: 10,
    solarMinute: 30,
    viewYear: 2026
  });

  const [inspectedPalaceIdx, setInspectedPalaceIdx] = useState<number | null>(null);
  const [dictionaryStarName, setDictionaryStarName] = useState<string | null>(null);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);
  const [activeReportTab, setActiveReportTab] = useState<'tam-minh' | 'thien-co'>('thien-co');

  // Tính toán lá số và báo cáo Tam Minh
  const chart: ChartResult = calculateTuViChart(chartInput);
  const tamMinhReport = generateTamMinhReport(chart, chartInput.viewYear);

  const handleFormSubmit = (newInput: ChartInput) => {
    setChartInput(newInput);
    setInspectedPalaceIdx(null);
  };

  const handleStarClick = (star: Star) => {
    setDictionaryStarName(star.name);
    setIsDictionaryOpen(true);
  };

  const handleOpenDictionary = () => {
    setDictionaryStarName('Tử Vi');
    setIsDictionaryOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenDictionary={handleOpenDictionary} />

      <main style={{ flex: 1, padding: '24px 16px', maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
        {/* Form nhập liệu */}
        <ChartInputForm onSubmit={handleFormSubmit} />

        {/* Bảng Lá Số 12 Cung */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <h2 style={{
              fontFamily: 'Cinzel, serif',
              color: 'var(--gold-main)',
              fontSize: '1.5rem',
              letterSpacing: '1px'
            }}>
              LÁ SỐ TỬ VI - {chart.input.fullName.toUpperCase()}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Nhấp vào một cung để xem chi tiết & các góc chiếu Tam Hợp, Xung Chiếu, Nhị Hợp
            </p>
          </div>

          <ChartBoard
            chart={chart}
            onSelectPalace={(idx) => setInspectedPalaceIdx(idx)}
            onSelectStar={handleStarClick}
          />
        </div>

        {/* Tab Selection: Tam Minh vs Mệnh Lý Thiên Cơ */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '20px',
          marginBottom: '8px'
        }}>
          <button
            onClick={() => setActiveReportTab('thien-co')}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              fontFamily: 'Cinzel, serif',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.5px',
              transition: 'all 0.25s ease',
              border: activeReportTab === 'thien-co' ? '2px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.15)',
              background: activeReportTab === 'thien-co' 
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.35), rgba(180, 83, 9, 0.35))' 
                : 'rgba(15, 23, 42, 0.6)',
              color: activeReportTab === 'thien-co' ? '#ffd700' : '#94a3b8',
              boxShadow: activeReportTab === 'thien-co' ? '0 0 20px rgba(212, 175, 55, 0.3)' : 'none'
            }}
          >
            📜 Mệnh Lý Thiên Cơ (12 Cung & Bí Quyết)
          </button>

          <button
            onClick={() => setActiveReportTab('tam-minh')}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              fontFamily: 'Cinzel, serif',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.5px',
              transition: 'all 0.25s ease',
              border: activeReportTab === 'tam-minh' ? '2px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.15)',
              background: activeReportTab === 'tam-minh' 
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.35), rgba(180, 83, 9, 0.35))' 
                : 'rgba(15, 23, 42, 0.6)',
              color: activeReportTab === 'tam-minh' ? '#ffd700' : '#94a3b8',
              boxShadow: activeReportTab === 'tam-minh' ? '0 0 20px rgba(212, 175, 55, 0.3)' : 'none'
            }}
          >
            ⚖️ Tam Minh Luận Đoán (Thiên - Địa - Nhân)
          </button>
        </div>

        {/* Nội dung báo cáo theo tab */}
        {activeReportTab === 'thien-co' ? (
          <ThienCoInterpretation 
            chart={chart} 
            selectedPalaceIndex={inspectedPalaceIdx} 
          />
        ) : (
          <TamMinhReportView report={tamMinhReport} />
        )}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '24px 16px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        background: 'rgba(10, 13, 20, 0.95)'
      }}>
        Tử Vi Tam Minh © 2026 • Ứng dụng Lập Lá Số & Luận Giải Mệnh Lý theo trường phái Tam Minh
      </footer>

      {/* Modals */}
      {inspectedPalaceIdx !== null && (
        <PalaceInspectorModal
          palaceIndex={inspectedPalaceIdx}
          chart={chart}
          onClose={() => setInspectedPalaceIdx(null)}
          onStarClick={handleStarClick}
        />
      )}

      {isDictionaryOpen && (
        <StarDictionaryModal
          initialStarName={dictionaryStarName}
          onClose={() => setIsDictionaryOpen(false)}
        />
      )}
    </div>
  );
}
