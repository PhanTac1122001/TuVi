import React, { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

interface ChartCopyToastProps {
  show: boolean;
  onClose: () => void;
  duration?: number;
}

export const ChartCopyToast: React.FC<ChartCopyToastProps> = ({
  show,
  onClose,
  duration = 3500
}) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, onClose, duration]);

  if (!show) return null;

  return (
    <div className="tuvi-toast-container" role="status" aria-live="polite">
      <div className="tuvi-toast-icon">
        <Sparkles size={18} />
      </div>
      <div className="tuvi-toast-body">
        <div className="tuvi-toast-title">Đã sao chép ảnh lá số vào bộ nhớ tạm!</div>
        <div className="tuvi-toast-desc">
          <span>Bạn có thể mở Zalo, Messenger, Facebook... và nhấn</span>
          <kbd>Ctrl + V</kbd>
          <span>để dán ảnh ngay.</span>
        </div>
      </div>
      <button
        type="button"
        className="tuvi-toast-close"
        onClick={onClose}
        title="Đóng thông báo"
      >
        <X size={16} />
      </button>
    </div>
  );
};
