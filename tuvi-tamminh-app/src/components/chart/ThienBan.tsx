import React from 'react';
import { ChartResult } from '../../types/tuvi.types';

interface ThienBanProps {
  chart: ChartResult;
}

export const ThienBan: React.FC<ThienBanProps> = ({ chart }) => {
  const menhPalace = chart.palaces[chart.menhChiIndex];
  const thanPalace = chart.palaces[chart.thanChiIndex];

  return (
    <div className="thien-ban-cell">
      <div className="thien-ban-header">
        <h2 className="thien-ban-title">TỬ VI TAM MINH</h2>
        <p className="thien-ban-subtitle">Thiên Bàn Mệnh Lý Chuẩn Xác</p>
      </div>

      <div className="thien-ban-info-grid">
        <div className="info-item">
          <span className="info-label">Họ tên:</span>
          <span className="info-value" style={{ color: 'var(--gold-light)' }}>
            {chart.input.fullName || 'Đương số'}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Giới tính:</span>
          <span className="info-value">{chart.amDuongNamNu}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Dương lịch:</span>
          <span className="info-value">{chart.solarDateStr} ({chart.input.solarHour}h)</span>
        </div>

        <div className="info-item">
          <span className="info-label">Âm lịch:</span>
          <span className="info-value">{chart.lunarDateStr}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Năm:</span>
          <span className="info-value">{chart.canChi.canYear} {chart.canChi.chiYear}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Tháng / Ngày:</span>
          <span className="info-value">
            {chart.canChi.canMonth} {chart.canChi.chiMonth} / {chart.canChi.canDay} {chart.canChi.chiDay}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Giờ sinh:</span>
          <span className="info-value">{chart.canChi.canHour} {chart.canChi.chiHour} ({chart.gioSinhChi})</span>
        </div>

        <div className="info-item">
          <span className="info-label">Bản mệnh:</span>
          <span className="info-value" style={{ color: '#38bdf8' }}>
            {chart.banMenh.name} ({chart.banMenh.element})
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Cục diện:</span>
          <span className="info-value" style={{ color: '#facc15' }}>
            {chart.cuc.name} ({chart.cuc.element})
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Chủ Mệnh / Thân:</span>
          <span className="info-value" style={{ color: '#e2e8f0' }}>
            <span style={{ color: '#f59e0b', fontWeight: 600 }}>{chart.chuMenh || 'Tham Lang'}</span> / <span style={{ color: '#38bdf8', fontWeight: 600 }}>{chart.chuThan || 'Thiên Tướng'}</span>
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Cung Mệnh / Thân:</span>
          <span className="info-value">
            {menhPalace.chi} / Thân cư {thanPalace.name}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Kỵ hành Bản cục:</span>
          <span className="info-value" style={{ color: '#fb923c' }} title={chart.kyHanhCuc?.lyDo}>
            {chart.kyHanhCuc ? `Cung ${chart.kyHanhCuc.cung1}, ${chart.kyHanhCuc.cung2}` : 'Bình hòa'}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Âm Dương:</span>
          <span className="info-value">
            {chart.amDuongThuanLy ? 'Thuận lý (Hanh thông)' : 'Nghịch lý (Nghị lực)'}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">Năm xem hạn:</span>
          <span className="info-value" style={{ color: '#fb7185' }}>
            {chart.input.viewYear || new Date().getFullYear()}
          </span>
        </div>

        {chart.camKyConGiap && chart.camKyConGiap.length > 0 && (
          <div className="info-item" style={{ gridColumn: 'span 2' }}>
            <span className="info-label" style={{ color: '#ef4444' }}>Cấm kỵ tuổi:</span>
            <span className="info-value" style={{ fontSize: '0.78rem', color: '#fca5a5' }}>
              {chart.camKyConGiap[0]}
            </span>
          </div>
        )}
      </div>

      <div className="thien-ban-footer">
        "Thiên Minh thấu căn cơ • Địa Minh thuận thời thế • Nhân Minh vạn sự thành"
      </div>
    </div>
  );
};
