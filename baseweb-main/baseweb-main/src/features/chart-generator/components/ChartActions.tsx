import React, { useState } from 'react';
import { Printer, RotateCcw, Maximize2, Minimize2, Award, Check, Loader2, Copy } from 'lucide-react';
import { captureChartTemporary } from '../utils/exportChartImage';
import { ChartCopyToast } from './ChartCopyToast';

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
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureSuccess, setCaptureSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCapture = async () => {
    if (isCapturing) return;
    setIsCapturing(true);
    try {
      await captureChartTemporary('chartGrid', 2);
      setCaptureSuccess(true);
      setShowToast(true);
      setTimeout(() => setCaptureSuccess(false), 2800);
    } catch (err) {
      console.error('Lỗi khi sao chép ảnh lá số:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="chart-actions-toolbar">
      <div className="toolbar-left">
        <span className="toolbar-badge">
          <Award size={13} />
          NAM PHÁI TIÊU CHUẨN
        </span>
        <span className="toolbar-title">
          Bàn Lá Số Hoàng Cung • TuViVietnam.vn
        </span>
      </div>

      <div className="toolbar-right">
        <button
          type="button"
          onClick={handleCapture}
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
            {isCapturing ? 'Đang Sao Chép...' : captureSuccess ? 'Đã Lưu Tạm!' : 'Sao Chép Ảnh Lá Số Lưu Tạm'}
          </span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="btn-tool"
          title="In hoặc Lưu PDF lá số A4 chuẩn cổ điển"
        >
          <Printer size={15} />
          <span>In Lá Số / PDF</span>
        </button>

        <button
          type="button"
          onClick={onToggleFocus}
          className={`btn-tool ${isFocusMode ? 'active' : ''}`}
          title="Bật/Tắt chế độ xem tập trung toàn màn hình"
        >
          {isFocusMode ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          <span>{isFocusMode ? 'Thu Nhỏ' : 'Xem Toàn Cảnh'}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="btn-tool"
          title="Tải lại hồ sơ mặc định ban đầu"
        >
          <RotateCcw size={15} />
          <span>Mặc Định</span>
        </button>
      </div>

      {/* Thông báo sao chép ảnh lá số lưu tạm thời */}
      <ChartCopyToast
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};
