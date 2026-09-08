import React from 'react';
import { TuViChart } from '../types/chart.types';

interface ThienBanCellProps {
  chart: TuViChart;
  userName: string;
}

export const ThienBanCell: React.FC<ThienBanCellProps> = ({ chart, userName }) => {
  const { userInfo, lunarInfo, meta } = chart;
  const currentAge = userInfo.viewYear - (lunarInfo.lunarYear || userInfo.year) + 1;

  return (
    <div className="thien-ban-cell pos-thienban">
      <div className="thien-ban-subheader">DIỄN ĐÀN TỬ VI VIỆT NAM</div>
      <div className="thien-ban-url">http://www.tuvivietnam.vn</div>
      <div className="thien-ban-title">LÁ SỐ TỬ VI</div>

      <div className="thien-ban-table">
        <div className="tb-row">
          <span className="tb-label">Họ tên:</span>
          <span className="tb-val highlight-blue">{userName}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Năm:</span>
          <span className="tb-val">{userInfo.year}</span>
          <span className="tb-val highlight-blue">{meta.canChiYear}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Tháng:</span>
          <span className="tb-val">
            {String(userInfo.month).padStart(2, '0')} ({lunarInfo.lunarMonth})
          </span>
          <span className="tb-val highlight-blue">{meta.canChiMonth}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Ngày:</span>
          <span className="tb-val">
            {String(userInfo.day).padStart(2, '0')} ({lunarInfo.lunarDay})
          </span>
          <span className="tb-val highlight-blue">{meta.canChiDay}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Giờ:</span>
          <span className="tb-val">
            {userInfo.hour} giờ {userInfo.minute} phút
          </span>
          <span className="tb-val highlight-blue">{meta.canChiHour}</span>
        </div>
        <br />
        <div className="tb-row">
          <span className="tb-label">Năm xem:</span>
          <span className="tb-val highlight-blue">{userInfo.viewYear}</span>
          <span className="tb-val highlight-blue">{meta.viewYearCanChi}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label"></span>
          <span className="tb-val highlight-blue">{currentAge} tuổi</span>
        </div>
        <br />
        <div className="tb-row">
          <span className="tb-label">Âm Dương:</span>
          <span className="tb-val highlight-blue">{meta.yinYangGender}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Mệnh:</span>
          <span className="tb-val highlight-blue">{meta.napAmMenh.name}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Cục:</span>
          <span className="tb-val highlight-blue">{meta.cuc.name}</span>
        </div>
        <br />
        <div className="tb-row">
          <span className="tb-label">Chủ Mệnh:</span>
          <span className="tb-val highlight-blue">{meta.chuMenh}</span>
        </div>
        <div className="tb-row">
          <span className="tb-label">Chủ Thân:</span>
          <span className="tb-val highlight-blue">{meta.chuThan}</span>
        </div>
        <br />
        <div className="tb-row">
          <span className="tb-val highlight-blue bold-text">{meta.yinYangHarmony}</span>
        </div>
        <div className="tb-row">
          <span className="tb-val highlight-blue bold-text">{meta.elementHarmony}</span>
        </div>
        <div className="tb-row">
          <span className="tb-val highlight-blue bold-text">{meta.thanCu}</span>
        </div>
      </div>

      {/* Red Seal Stamp */}
      <div className="red-seal-stamp">
        <div className="seal-inner">
          <div>紫</div><div>微</div>
          <div>越</div><div>南</div>
        </div>
      </div>
    </div>
  );
};
