import React, { useState } from 'react';
import { Modal } from '@/components/common';
import { Check, Copy, Download, Sparkles, Image as ImageIcon } from 'lucide-react';
import { downloadDataUrl } from '../utils/exportChartImage';

interface ChartSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  copiedToClipboard: boolean;
  fileName?: string;
}

export const ChartSnapshotModal: React.FC<ChartSnapshotModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  copiedToClipboard,
  fileName = 'La-So-Tu-Vi.png'
}) => {
  const [isCopiedAgain, setIsCopiedAgain] = useState(false);

  if (!isOpen || !imageUrl) return null;

  const handleCopyAgain = async () => {
    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      if (navigator.clipboard && typeof window.ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        setIsCopiedAgain(true);
        setTimeout(() => setIsCopiedAgain(false), 2500);
      }
    } catch (err) {
      console.warn('Không thể sao chép lại ảnh:', err);
    }
  };

  const handleDownload = () => {
    downloadDataUrl(imageUrl, fileName);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Ảnh Chụp Lá Số Tạm Thời"
      maxWidth="780px"
      footer={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--tg-ink-medium, #666)' }}>
            * Ảnh được lưu tạm thời trong phiên làm việc.
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button
              type="button"
              className="btn-tool"
              onClick={handleCopyAgain}
              style={{
                background: isCopiedAgain ? 'rgba(46, 125, 50, 0.12)' : 'rgba(212, 175, 55, 0.12)',
                color: isCopiedAgain ? '#2e7d32' : 'var(--tg-gold-dark, #916f28)',
                borderColor: isCopiedAgain ? '#2e7d32' : 'var(--tg-gold-border, #d4af37)',
                fontWeight: 600
              }}
              title="Sao chép lại ảnh vào Clipboard để dán Ctrl + V"
            >
              {isCopiedAgain ? <Check size={15} /> : <Copy size={15} />}
              <span>{isCopiedAgain ? 'Đã Sao Chép Lại!' : 'Sao Chép Ảnh'}</span>
            </button>

            <button
              type="button"
              className="btn-tool"
              onClick={handleDownload}
              style={{
                background: 'rgba(183, 28, 28, 0.08)',
                color: 'var(--tg-seal-red, #b71c1c)',
                borderColor: 'var(--tg-seal-red, #b71c1c)',
                fontWeight: 600
              }}
              title="Tải ảnh PNG về máy (nếu cần)"
            >
              <Download size={15} />
              <span>Tải Về Máy</span>
            </button>

            <button
              type="button"
              className="btn-tool"
              onClick={onClose}
              style={{ fontWeight: 600 }}
            >
              Đóng
            </button>
          </div>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Banner thông báo lưu tạm & Clipboard */}
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '6px',
            background: copiedToClipboard ? '#f0fdf4' : '#fffbeb',
            border: `1px solid ${copiedToClipboard ? '#bbf7d0' : '#fde68a'}`,
            color: copiedToClipboard ? '#166534' : '#92400e',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.88rem',
            lineHeight: 1.4
          }}
        >
          {copiedToClipboard ? (
            <Sparkles size={18} color="#16a34a" style={{ flexShrink: 0 }} />
          ) : (
            <ImageIcon size={18} color="#d97706" style={{ flexShrink: 0 }} />
          )}
          <div>
            <strong>
              {copiedToClipboard
                ? 'Đã lưu ảnh vào bộ nhớ tạm (Clipboard)!'
                : 'Đã chụp ảnh lá số tạm thời!'}
            </strong>{' '}
            {copiedToClipboard && (
              <span>
                Bạn có thể mở Zalo, Messenger, Word... và nhấn{' '}
                <kbd
                  style={{
                    background: '#e2e8f0',
                    color: '#1e293b',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontWeight: 700
                  }}
                >
                  Ctrl + V
                </kbd>{' '}
                để dán ảnh ngay.
              </span>
            )}
          </div>
        </div>

        {/* Khung xem trước hình ảnh */}
        <div
          style={{
            maxHeight: '62vh',
            overflowY: 'auto',
            border: '2px solid var(--tg-gold-border, #d4af37)',
            borderRadius: '6px',
            background: '#fffdf9',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06)',
            padding: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <img
            src={imageUrl}
            alt="Lá Số Tử Vi Tạm Thời"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '3px'
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
