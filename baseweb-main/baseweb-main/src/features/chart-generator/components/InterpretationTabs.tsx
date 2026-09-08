import React, { useState } from 'react';
import { TuViInterpretation } from '../types/chart.types';

interface InterpretationTabsProps {
  interpretation: TuViInterpretation;
}

export const InterpretationTabs: React.FC<InterpretationTabsProps> = ({ interpretation }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'cachcuc' | 'palaces' | 'vanhan'>('overview');

  return (
    <section className="interpretation-card" id="interpretationSection">
      <nav className="nav-tabs">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          TỔNG QUAN LÁ SỐ
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'cachcuc' ? 'active' : ''}`}
          onClick={() => setActiveTab('cachcuc')}
        >
          CÁCH CỤC ĐẶC BIỆT
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'palaces' ? 'active' : ''}`}
          onClick={() => setActiveTab('palaces')}
        >
          LUẬN GIẢI 12 CUNG
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'vanhan' ? 'active' : ''}`}
          onClick={() => setActiveTab('vanhan')}
        >
          LUẬN VẬN HẠN
        </button>
      </nav>

      {/* 1. Tab Overview */}
      {activeTab === 'overview' && (
        <div className="tab-content active" id="tab-overview">
          <div className="reading-block">
            <h3>Tổng Quan Bản Mệnh</h3>
            <p>{interpretation.overview.summary}</p>
          </div>
          <div className="reading-block">
            <h3>Số Phận & Môi Trường (Mệnh vs Cục)</h3>
            <p>
              <strong>{interpretation.overview.elementRelation.status}:</strong>{' '}
              {interpretation.overview.elementRelation.detail}
            </p>
          </div>
          <div className="reading-block">
            <h3>Ý Nghĩa Thân Cư</h3>
            <p>{interpretation.overview.thanCuDetail}</p>
          </div>
        </div>
      )}

      {/* 2. Tab Cách Cục */}
      {activeTab === 'cachcuc' && (
        <div className="tab-content active" id="tab-cachcuc">
          {interpretation.cachCuc.length === 0 ? (
            <div className="reading-block">
              <p>Lá số có các bộ sao kết hợp hài hòa, không thuộc cách cục biến động cực đoan.</p>
            </div>
          ) : (
            interpretation.cachCuc.map((c, idx) => (
              <div key={idx} className="reading-block">
                <h3>
                  Bộ Cách: {c.name} ({c.type})
                </h3>
                <p>{c.description}</p>
              </div>
            ))
          )}
        </div>
      )}

      {/* 3. Tab 12 Cung */}
      {activeTab === 'palaces' && (
        <div className="tab-content active" id="tab-palaces">
          {interpretation.palaceReadings.map((p, idx) => (
            <div key={idx} className="reading-block">
              <h3>
                Cung {p.name} ({p.can} {p.chi})
              </h3>
              <p>{p.reading}</p>
            </div>
          ))}
        </div>
      )}

      {/* 4. Tab Vận Hạn */}
      {activeTab === 'vanhan' && (
        <div className="tab-content active" id="tab-vanhan">
          <div className="reading-block">
            <h3>
              Luận Đại Vận (10 Năm - Tuổi hiện tại: {interpretation.vanHan.currentAge} tuổi)
            </h3>
            <p>{interpretation.vanHan.daiVanText}</p>
          </div>
          <div className="reading-block">
            <h3>Luận Tiểu Vận Năm Xem</h3>
            <p>{interpretation.vanHan.tieuVanText}</p>
          </div>
        </div>
      )}
    </section>
  );
};
