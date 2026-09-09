import React, { useState } from 'react';
import { TamMinhReportData } from '../../types/tuvi.types';

interface TamMinhReportViewProps {
  report: TamMinhReportData;
}

export const TamMinhReportView: React.FC<TamMinhReportViewProps> = ({ report }) => {
  const [activeTab, setActiveTab] = useState<'thien' | 'dia' | 'nhan'>('thien');

  return (
    <div style={{
      background: 'rgba(21, 27, 40, 0.95)',
      border: '1px solid var(--border-gold)',
      borderRadius: '12px',
      padding: '24px',
      maxWidth: '1240px',
      margin: '24px auto 0 auto',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{
          fontFamily: 'Cinzel, serif',
          color: 'var(--gold-main)',
          fontSize: '1.6rem',
          letterSpacing: '1px'
        }}>
          LUẬN GIẢI TAM MINH TOÀN THƯ
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
          Ba Trụ Cột Khai Mở Vận Mệnh: Thiên Minh • Địa Minh • Nhân Minh
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
        marginBottom: '20px'
      }}>
        <button
          onClick={() => setActiveTab('thien')}
          style={{
            flex: 1,
            padding: '12px',
            background: activeTab === 'thien' ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'thien' ? '3px solid var(--gold-main)' : 'none',
            color: activeTab === 'thien' ? 'var(--gold-light)' : 'var(--text-secondary)',
            fontFamily: 'Cinzel, serif',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          🌌 THIÊN MINH (Căn Cơ & Tố Chất)
        </button>

        <button
          onClick={() => setActiveTab('dia')}
          style={{
            flex: 1,
            padding: '12px',
            background: activeTab === 'dia' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'dia' ? '3px solid #38bdf8' : 'none',
            color: activeTab === 'dia' ? '#38bdf8' : 'var(--text-secondary)',
            fontFamily: 'Cinzel, serif',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          🌍 ĐỊA MINH (Thời Cuộc & Vận Thế)
        </button>

        <button
          onClick={() => setActiveTab('nhan')}
          style={{
            flex: 1,
            padding: '12px',
            background: activeTab === 'nhan' ? 'rgba(74, 222, 128, 0.15)' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'nhan' ? '3px solid #4ade80' : 'none',
            color: activeTab === 'nhan' ? '#4ade80' : 'var(--text-secondary)',
            fontFamily: 'Cinzel, serif',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          👤 NHÂN MINH (Ý Chí & Hành Động)
        </button>
      </div>

      {/* Tab 1: THIÊN MINH */}
      {activeTab === 'thien' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--gold-main)' }}>
            <h3 style={{ color: 'var(--gold-light)', fontSize: '1.1rem', marginBottom: '8px' }}>
              📜 Tổng Quan Thiên Phần
            </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              {report.thienMinh.overview}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(74, 222, 128, 0.05)', border: '1px solid rgba(74, 222, 128, 0.2)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#4ade80', marginBottom: '10px' }}>🌟 Sở Trường Cốt Lõi:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.thienMinh.strengths.map((s, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(248, 113, 113, 0.05)', border: '1px solid rgba(248, 113, 113, 0.2)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#f87171', marginBottom: '10px' }}>⚠️ Sở Đoản / Giới Hạn Cần Khắc Phục:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.thienMinh.weaknesses.map((w, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{w}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ color: 'var(--gold-main)', marginBottom: '6px' }}>🧭 Định Hướng Nghề Nghiệp & Sở Thích:</h4>
            <p style={{ lineHeight: '1.6', fontSize: '0.92rem' }}>
              {report.thienMinh.careerAptitude}
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: ĐỊA MINH */}
      {activeTab === 'dia' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '8px' }}>
              🌀 Định Vị Chu Kỳ Hoàn Cảnh
            </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              {report.diaMinh.overview}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {/* Đại Hạn */}
            <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#38bdf8', marginBottom: '8px' }}>
                ⏳ Đại Hạn 10 Năm (Tuổi {report.diaMinh.currentMajorPeriod.startAge} - {report.diaMinh.currentMajorPeriod.endAge}):
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.diaMinh.currentMajorPeriod.analysis}
              </p>
            </div>

            {/* Tiểu Hạn */}
            <div style={{ background: 'rgba(234, 179, 8, 0.08)', border: '1px solid rgba(234, 179, 8, 0.3)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#facc15', marginBottom: '8px' }}>
                📅 Tiểu Hạn Năm {report.diaMinh.currentMinorPeriod.year}:
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.diaMinh.currentMinorPeriod.analysis}
              </p>
            </div>
          </div>

          {/* Cơ hội & Nguy cơ */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(74, 222, 128, 0.05)', border: '1px solid rgba(74, 222, 128, 0.2)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#4ade80', marginBottom: '8px' }}>🌱 Cơ Hội Môi Trường Xã Hội:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.diaMinh.environmentOpportunities.map((op, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{op}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(244, 63, 94, 0.05)', border: '1px solid rgba(244, 63, 94, 0.2)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#fb7185', marginBottom: '8px' }}>⚡ Rủi Ro & Trở Lực Thời Cuộc:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.diaMinh.risksAndThreats.map((r, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: NHÂN MINH */}
      {activeTab === 'nhan' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #4ade80' }}>
            <h3 style={{ color: '#4ade80', fontSize: '1.1rem', marginBottom: '8px' }}>
              🌱 Khai Mở Tự Do Ý Chí
            </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              {report.nhanMinh.overview}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {/* Lời khuyên hành vi */}
            <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--border-gold)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--gold-main)', marginBottom: '10px' }}>🎯 Lời Khuyên Hành Vi Thực Tiễn:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.nhanMinh.actionableAdvice.map((adv, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{adv}</li>
                ))}
              </ul>
            </div>

            {/* Hóa giải chủ động */}
            <div style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#c084fc', marginBottom: '10px' }}>🛡️ Phương Pháp Hóa Giải Chủ Động:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {report.nhanMinh.remedies.map((rem, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{rem}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Triết lý kết */}
          <div style={{
            textAlign: 'center',
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(0,0,0,0.4))',
            borderRadius: '8px',
            border: '1px dashed var(--border-gold)',
            color: 'var(--gold-light)',
            fontStyle: 'italic',
            fontSize: '0.95rem'
          }}>
            "{report.nhanMinh.lifePhilosophy}"
          </div>
        </div>
      )}
    </div>
  );
};
