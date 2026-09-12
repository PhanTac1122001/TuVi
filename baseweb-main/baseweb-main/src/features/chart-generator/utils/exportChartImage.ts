import { toPng, toBlob } from 'html-to-image';

export interface CaptureResult {
  dataUrl: string;
  copiedToClipboard: boolean;
  message: string;
}

/**
 * Chụp ảnh lá số lưu tạm thời và sao chép vào bộ nhớ tạm (Clipboard), KHÔNG tự động tải file về máy.
 */
export async function captureChartTemporary(
  elementId = 'chartGrid',
  pixelRatio = 2
): Promise<CaptureResult> {
  const node = document.getElementById(elementId);
  if (!node) {
    throw new Error('Không tìm thấy bàn lá số để chụp ảnh.');
  }

  const options = {
    quality: 0.98,
    pixelRatio,
    backgroundColor: '#fffdf9',
    cacheBust: true,
    style: {
      transform: 'none',
      margin: '0',
    }
  };

  try {
    const dataUrl = await toPng(node, options);

    // Tự động sao chép vào bộ nhớ tạm (Clipboard)
    let copiedToClipboard = false;
    if (navigator.clipboard && typeof window.ClipboardItem !== 'undefined') {
      try {
        const blob = await toBlob(node, options);
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          copiedToClipboard = true;
        }
      } catch (clipErr) {
        console.warn('Trình duyệt chưa cho phép ghi ảnh vào Clipboard:', clipErr);
      }
    }

    return {
      dataUrl,
      copiedToClipboard,
      message: copiedToClipboard
        ? 'Đã lưu ảnh vào bộ nhớ tạm! Bạn có thể nhấn Ctrl + V để dán ngay.'
        : 'Đã chụp ảnh lá số tạm thời thành công!'
    };
  } catch (err: unknown) {
    console.error('Lỗi khi chụp ảnh lá số:', err);
    throw new Error(err instanceof Error ? err.message : 'Chụp ảnh lá số thất bại');
  }
}

/**
 * Tùy chọn tải ảnh về máy khi người dùng chủ động nhấn nút Tải Về
 */
export function downloadDataUrl(dataUrl: string, fileName = 'La-So-Tu-Vi.png') {
  const link = document.createElement('a');
  link.download = fileName.endsWith('.png') ? fileName : `${fileName}.png`;
  link.href = dataUrl;
  link.click();
}
