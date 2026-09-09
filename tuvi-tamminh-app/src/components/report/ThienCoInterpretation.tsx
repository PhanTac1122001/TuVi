import React, { useState } from 'react';
import { ChartResult } from '../../types/tuvi.types';
import { 
  THANG_SINH_DATA, 
  THAN_CU_DATA, 
  PALACE_THIENCO_DATA, 
  SPECIAL_CONCEPTS_DATA 
} from '../../data/thienCoData';

interface ThienCoInterpretationProps {
  chart: ChartResult;
  selectedPalaceIndex?: number | null;
}

export const ThienCoInterpretation: React.FC<ThienCoInterpretationProps> = ({ 
  chart, 
  selectedPalaceIndex 
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'tong-quan' | '12-cung' | 'bi-quyet'>('tong-quan');
  const [activePalaceName, setActivePalaceName] = useState<string>(() => {
    if (selectedPalaceIndex !== undefined && selectedPalaceIndex !== null) {
      return chart.palaces[selectedPalaceIndex].name;
    }
    return 'Mệnh';
  });

  // Khi selectedPalaceIndex thay đổi từ bên ngoài (click trên lá số)
  React.useEffect(() => {
    if (selectedPalaceIndex !== undefined && selectedPalaceIndex !== null) {
      const p = chart.palaces[selectedPalaceIndex];
      if (p) {
        setActivePalaceName(p.name);
        setActiveSubTab('12-cung');
      }
    }
  }, [selectedPalaceIndex, chart.palaces]);

  const thangSinhInfo = THANG_SINH_DATA[chart.lunar.month] || THANG_SINH_DATA[1];
  const thanPalace = chart.palaces[chart.thanChiIndex];
  const thanCuKey = `Thân cư ${thanPalace.name}`;
  const thanCuInfo = THAN_CU_DATA[thanCuKey] || {
    tenCung: `Thân Cư ${thanPalace.name}`,
    yNghia: `Cung Thân đồng cung với ${thanPalace.name}, hậu vận gắn liền với sự phát triển của cung này.`,
    loiKhuyen: 'Tập trung tu dưỡng nội lực và nắm bắt thời cơ vận hạn.'
  };

  const currentPalaceData = chart.palaces.find(p => p.name === activePalaceName) || chart.palaces[chart.menhChiIndex];
  const currentPalaceRule = PALACE_THIENCO_DATA[activePalaceName] || PALACE_THIENCO_DATA['Mệnh'];

  const palaceNamesList = [
    'Mệnh', 'Huynh Đệ', 'Phu Thê', 'Tử Tức', 'Tài Bạch', 'Tật Ách',
    'Thiên Di', 'Nô Bộc', 'Quan Lộc', 'Điền Trạch', 'Phúc Đức', 'Phụ Mẫu'
  ];

  return (
    <section className="thien-co-section" style={{
      background: 'linear-gradient(180deg, #101522 0%, #0c101a 100%)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '12px',
      padding: '24px',
      marginTop: '24px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
    }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <span style={{
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--gold-light)',
          background: 'rgba(212, 175, 55, 0.1)',
          padding: '4px 12px',
          borderRadius: '20px',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          Học Thuật Mệnh Lý Thiên Cơ • Tam Hợp Nam Phái
        </span>
        <h2 style={{
          fontFamily: 'Cinzel, serif',
          color: 'var(--gold-main)',
          fontSize: '1.65rem',
          margin: '12px 0 6px'
        }}>
          LUẬN ĐOÁN MỆNH LÝ THIÊN CƠ
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '750px', margin: '0 auto' }}>
          Hệ thống luận giải chuyên sâu dựa trên tác phẩm thực chứng của dịch giả Lê Quang Lăng (tuvinamphai.vn),
          kết hợp nguyên lý Lạc Thư Bát Quái, Tứ Hóa Can Cung và phép tương tác đa tầng giữa 12 cung vị.
        </p>
      </div>

      {/* Sub-Navigation Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setActiveSubTab('tong-quan')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: activeSubTab === 'tong-quan' ? '1px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.1)',
            background: activeSubTab === 'tong-quan' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.03)',
            color: activeSubTab === 'tong-quan' ? 'var(--gold-light)' : 'var(--text-secondary)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          ✦ Tổng Quan Tiên Thiên & Hậu Vận
        </button>

        <button
          onClick={() => setActiveSubTab('12-cung')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: activeSubTab === '12-cung' ? '1px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.1)',
            background: activeSubTab === '12-cung' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.03)',
            color: activeSubTab === '12-cung' ? 'var(--gold-light)' : 'var(--text-secondary)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          ✦ Khảo Cứu Chi Tiết 12 Cung
        </button>

        <button
          onClick={() => setActiveSubTab('bi-quyet')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: activeSubTab === 'bi-quyet' ? '1px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.1)',
            background: activeSubTab === 'bi-quyet' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.03)',
            color: activeSubTab === 'bi-quyet' ? 'var(--gold-light)' : 'var(--text-secondary)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          ✦ Bí Quyết Tàng Khố & Phối Cung
        </button>
      </div>

      {/* TAB 1: TỔNG QUAN TIÊN THIÊN & HẬU VẬN */}
      {activeSubTab === 'tong-quan' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {/* Card 1: Luận Tháng Sinh */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.2rem', color: '#f59e0b' }}>🌙</span>
              <h3 style={{ margin: 0, color: 'var(--gold-light)', fontSize: '1.1rem' }}>
                {thangSinhInfo.title}
              </h3>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '12px' }}>
              {thangSinhInfo.dacDiem}
            </p>
            <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '4px' }}>
                <strong style={{ color: '#38bdf8' }}>Nghề nghiệp đắc thế:</strong> {thangSinhInfo.ngheNghiep}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                <strong style={{ color: '#f87171' }}>Điểm cần tôi luyện:</strong> {thangSinhInfo.luuY}
              </div>
            </div>
          </div>

          {/* Card 2: Luận Thân Cư */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.2rem', color: '#38bdf8' }}>☀️</span>
              <h3 style={{ margin: 0, color: 'var(--gold-light)', fontSize: '1.1rem' }}>
                {thanCuInfo.tenCung}
              </h3>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '12px' }}>
              {thanCuInfo.yNghia}
            </p>
            <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                <strong style={{ color: '#fbbf24' }}>Lời khuyên hậu vận:</strong> {thanCuInfo.loiKhuyen}
              </div>
            </div>
          </div>

          {/* Card 3: Chủ Mệnh & Chủ Thân & Kỵ Hành */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.2rem', color: '#ec4899' }}>⚖️</span>
              <h3 style={{ margin: 0, color: 'var(--gold-light)', fontSize: '1.1rem' }}>
                Chủ Mệnh, Chủ Thân & Quy Tắc Kỵ Hành
              </h3>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.7' }}>
              <div>
                <strong>Sao Chủ Mệnh:</strong> <span style={{ color: '#f59e0b', fontWeight: 600 }}>{chart.chuMenh}</span> (chi phối cốt cách tiên thiên).
              </div>
              <div>
                <strong>Sao Chủ Thân:</strong> <span style={{ color: '#38bdf8', fontWeight: 600 }}>{chart.chuThan}</span> (quản trị biến chuyển hành vi hậu thiên).
              </div>
              <div style={{ marginTop: '8px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
                <strong style={{ color: '#fb923c' }}>Kỵ Hành Ngũ Hành Cục:</strong>
                <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
                  {chart.kyHanhCuc?.lyDo}
                </p>
              </div>
              {chart.camKyConGiap && chart.camKyConGiap.length > 0 && (
                <div style={{ marginTop: '8px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '8px' }}>
                  <strong style={{ color: '#f87171' }}>Cảnh báo 12 Con Giáp:</strong>
                  <ul style={{ margin: '4px 0 0', paddingLeft: '18px', fontSize: '0.85rem', color: '#fca5a5' }}>
                    {chart.camKyConGiap.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: KHẢO CỨU CHI TIẾT 12 CUNG */}
      {activeSubTab === '12-cung' && (
        <div>
          {/* Cung selector buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {palaceNamesList.map(name => {
              const isSelected = name === activePalaceName;
              return (
                <button
                  key={name}
                  onClick={() => setActivePalaceName(name)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    border: isSelected ? '1px solid #ffd700' : '1px solid rgba(255,255,255,0.12)',
                    background: isSelected ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#ffd700' : '#cbd5e1',
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  {name}
                </button>
              );
            })}
          </div>

          {/* Palace detail content */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '10px',
            padding: '24px'
          }}>
            {/* Header info of selected palace */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '14px',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <span style={{ fontSize: '1.4rem', fontFamily: 'Cinzel, serif', color: 'var(--gold-light)', fontWeight: 700 }}>
                  CUNG {currentPalaceData.name.toUpperCase()}
                </span>
                <span style={{ marginLeft: '12px', color: '#94a3b8', fontSize: '0.95rem' }}>
                  ({currentPalaceData.can} {currentPalaceData.chi})
                </span>
                {currentPalaceData.isMenh && (
                  <span style={{ marginLeft: '8px', background: '#dc2626', color: '#fff', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px' }}>
                    MỆNH
                  </span>
                )}
                {currentPalaceData.isThan && (
                  <span style={{ marginLeft: '8px', background: '#2563eb', color: '#fff', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px' }}>
                    THÂN
                  </span>
                )}
              </div>

              {/* Badges */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}>
                  {currentPalaceData.theDat}
                </span>
                {currentPalaceData.cungMon !== 'Thường' && (
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    background: 'rgba(236, 72, 153, 0.15)',
                    color: '#f472b6',
                    border: '1px solid rgba(236, 72, 153, 0.3)'
                  }}>
                    {currentPalaceData.cungMon}
                  </span>
                )}
              </div>
            </div>

            {/* Can Cung Phi Tứ Hóa Strip */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center'
            }}>
              <span style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600 }}>
                ⚡ Tứ Hóa Can Cung ({currentPalaceData.can}):
              </span>
              <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>
                <strong>Lộc:</strong> {currentPalaceData.cungCanTuHoa.hoaLoc}
              </span>
              <span style={{ color: '#38bdf8', fontSize: '0.85rem' }}>
                <strong>Quyền:</strong> {currentPalaceData.cungCanTuHoa.hoaQuyen}
              </span>
              <span style={{ color: '#a78bfa', fontSize: '0.85rem' }}>
                <strong>Khoa:</strong> {currentPalaceData.cungCanTuHoa.hoaKhoa}
              </span>
              <span style={{ color: '#f87171', fontSize: '0.85rem' }}>
                <strong>Kị:</strong> {currentPalaceData.cungCanTuHoa.hoaKi}
              </span>
            </div>

            {/* Text Interpretation from book */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ color: '#facc15', margin: '0 0 6px', fontSize: '1rem' }}>
                  1. Khái Quát Vị Cung (Theo Mệnh Lý Thiên Cơ)
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                  {currentPalaceRule.khaiQuat}
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ color: '#facc15', margin: '0 0 8px', fontSize: '1rem' }}>
                  2. Bí Quyết & Quy Tắc Luận Đoán
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.7' }}>
                  {currentPalaceRule.biQuyet.map((bq, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>{bq}</li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: 'rgba(212, 175, 55, 0.05)',
                borderLeft: '3px solid var(--gold-main)',
                padding: '12px 16px',
                borderRadius: '0 6px 6px 0'
              }}>
                <h5 style={{ margin: '0 0 4px', color: 'var(--gold-light)', fontSize: '0.9rem' }}>
                  ★ Quy Tắc Cốt Lõi:
                </h5>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.88rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                  {currentPalaceRule.nguyenLyDacBiet}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BÍ QUYẾT TÀNG KHỐ & PHỐI CUNG */}
      {activeSubTab === 'bi-quyet' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
          {/* Card A: Tàng Tài Chi Khố */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <h3 style={{ color: '#facc15', margin: '0 0 12px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              💰 Tàng Tài Chi Khố (Điền Trạch - Tài Bạch - Huynh Đệ)
            </h3>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.65', whiteSpace: 'pre-line' }}>
              {SPECIAL_CONCEPTS_DATA.tangTaiChiKho}
            </div>
          </div>

          {/* Card B: Mệnh Tật Nhất Thể */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <h3 style={{ color: '#38bdf8', margin: '0 0 12px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🌿 Mệnh Tật Nhất Thể ("Nhất Lục Cộng Tông")
            </h3>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.65', whiteSpace: 'pre-line' }}>
              {SPECIAL_CONCEPTS_DATA.menhTatNhatThe}
            </div>
          </div>

          {/* Card C: Quan Lộc - Phu Thê */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <h3 style={{ color: '#ec4899', margin: '0 0 12px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🏛️ Trục Sự Nghiệp & Hôn Nhân (Quan Lộc - Phu Thê)
            </h3>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.65', whiteSpace: 'pre-line' }}>
              {SPECIAL_CONCEPTS_DATA.quanPhuTuongTac}
            </div>
          </div>

          {/* Card D: Điền Trạch - Tử Nữ */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '10px',
            padding: '20px'
          }}>
            <h3 style={{ color: '#a78bfa', margin: '0 0 12px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🏡 Trục Điền Sản & Thế Hệ (Điền Trạch - Tử Nữ)
            </h3>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.65', whiteSpace: 'pre-line' }}>
              {SPECIAL_CONCEPTS_DATA.dienTuTuongTac}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
