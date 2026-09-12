import React, { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Calendar,
  Clock,
  Sparkles,
  Check,
  Loader2,
  Copy
} from 'lucide-react';
import { generateTuViChart } from '@/features/chart-generator/engine/tuviEngine';
import { generateInterpretation } from '@/features/chart-generator/engine/tuviInterpreter';
import { ChartBoard } from '@/features/chart-generator/components/ChartBoard';
import { InterpretationTabs } from '@/features/chart-generator/components/InterpretationTabs';
import { parseUserInfoFromQueryParams } from '@/features/chart-generator/utils/chartUrlParams';
import { captureChartTemporary } from '@/features/chart-generator/utils/exportChartImage';
import { ChartCopyToast } from '@/features/chart-generator/components/ChartCopyToast';
import '@/features/chart-generator/styles/tuviVietnamChart.css';

export const ChartDetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureSuccess, setCaptureSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const userInfo = useMemo(() => {
    return parseUserInfoFromQueryParams(searchParams);
  }, [searchParams]);

  const chart = useMemo(() => {
    return generateTuViChart(userInfo);
  }, [userInfo]);

  const interpretation = useMemo(() => {
    return generateInterpretation(chart);
  }, [chart]);

  const handleCaptureScreenshot = async () => {
    if (isCapturing) return;
    setIsCapturing(true);
    try {
      await captureChartTemporary('chartGrid', 2);
      setCaptureSuccess(true);
      setShowToast(true);
      setTimeout(() => setCaptureSuccess(false), 2800);
    } catch (error) {
      console.error('Lỗi khi sao chép ảnh lá số:', error);
    } finally {
      setIsCapturing(false);
    }
  };

  const birthDateFormatted = `${String(userInfo.day).padStart(2, '0')}/${String(userInfo.month).padStart(2, '0')}/${userInfo.year}`;
  const birthHourFormatted = `${String(userInfo.hour).padStart(2, '0')}:${String(userInfo.minute).padStart(2, '0')}`;

  return (
    <div className="tuvi-authentic-scope" style={{ width: '100%', paddingBottom: '3rem' }}>
      <div className="chart-wrapper">
        {/* Top Control & Navigation Toolbar */}
        <div className="chart-actions-toolbar" style={{ marginBottom: '0.25rem' }}>
          <div className="toolbar-left" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link
              to="/lap-la-so"
              className="btn-tool"
              style={{
                textDecoration: 'none',
                background: 'rgba(212, 175, 55, 0.12)',
                color: 'var(--tg-gold-dark, #916f28)',
                fontWeight: 700,
                borderColor: 'var(--tg-gold-border, #d4af37)'
              }}
              title="Quay lại giao diện nhập thông tin lá số"
            >
              <ChevronLeft size={16} />
              <span>Lập Bàn Khác / Sửa Thông Tin</span>
            </Link>

            <span className="toolbar-badge">
              <Sparkles size={13} />
              LÁ SỐ HOÀNG CUNG
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--tg-ink-medium, #4c443c)' }}>
              <span style={{ fontWeight: 800, color: 'var(--tg-seal-red, #b71c1c)', fontSize: '0.98rem' }}>
                {userInfo.name && userInfo.name !== 'Đương Số' && userInfo.name !== 'Vô Danh'
                  ? userInfo.name
                  : (userInfo.gender === 'Nam' ? 'Nam Mệnh' : 'Nữ Mệnh')}
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Calendar size={13} color="var(--tg-gold-dark)" />
                {birthDateFormatted} ({userInfo.calendarType === 'am' ? 'Âm' : 'Dương'})
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Clock size={13} color="var(--tg-gold-dark)" />
                {birthHourFormatted}
              </span>
              <span>•</span>
              <span>
                Hạn năm: {userInfo.viewYear}{' '}
                {userInfo.xemVanTheo
                  ? `(${userInfo.xemVanTheo === 'TieuHan' ? 'Tiểu Hạn' : userInfo.xemVanTheo === 'LuuNienDaiVan' ? 'LN.Đại Vận' : 'Lưu Niên'})`
                  : ''}
              </span>
            </div>
          </div>

          <div className="toolbar-right" style={{ marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={handleCaptureScreenshot}
              disabled={isCapturing}
              className={`btn-tool ${captureSuccess ? 'active' : ''}`}
              style={{
                background: captureSuccess ? 'rgba(46, 125, 50, 0.15)' : 'rgba(183, 28, 28, 0.08)',
                borderColor: captureSuccess ? '#2e7d32' : 'var(--tg-seal-red, #b71c1c)',
                color: captureSuccess ? '#2e7d32' : 'var(--tg-seal-red, #b71c1c)',
                fontWeight: 700
              }}
              title="Sao chép ảnh lá số lưu tạm thời (Tự động lưu vào Clipboard để dán ngay Ctrl + V)"
            >
              {isCapturing ? (
                <Loader2 size={15} className="animate-spin" />
              ) : captureSuccess ? (
                <Check size={15} />
              ) : (
                <Copy size={15} />
              )}
              <span>
                {isCapturing ? 'Đang Sao Chép...' : captureSuccess ? 'Đã Sao Chép & Lưu Tạm!' : 'Sao Chép Ảnh Lá Số Lưu Tạm'}
              </span>
            </button>
          </div>
        </div>

        {/* 4x4 Chart Board */}
        <ChartBoard
          chart={chart}
          userName={
            userInfo.name && userInfo.name !== 'Đương Số' && userInfo.name !== 'Vô Danh'
              ? userInfo.name
              : (userInfo.gender === 'Nam' ? 'Nam Mệnh' : 'Nữ Mệnh')
          }
        />

        {/* 4 Interpretation Tabs */}
        <InterpretationTabs interpretation={interpretation} chart={chart} />

        {/* Thông báo sao chép ảnh lá số lưu tạm thời */}
        <ChartCopyToast
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </div>
  );
};
