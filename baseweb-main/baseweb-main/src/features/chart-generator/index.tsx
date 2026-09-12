import React, { useState, useEffect } from 'react';
import { UserInfo, TuViChart, TuViInterpretation } from './types/chart.types';
import { generateTuViChart } from './engine/tuviEngine';
import { generateInterpretation } from './engine/tuviInterpreter';
import { ChartForm } from './components/ChartForm';
import { ChartBoard } from './components/ChartBoard';
import { InterpretationTabs } from './components/InterpretationTabs';
import {
  serializeUserInfoToQueryParams,
  saveRecentChart,
  getRecentCharts,
  removeRecentChart,
  clearAllRecentCharts,
  parseUserInfoFromQueryParams,
  RecentChartItem
} from './utils/chartUrlParams';
import {
  ExternalLink,
  Sparkles,
  History,
  Eye,
  EyeOff,
  Trash2,
  ArrowUpRight,
  Compass,
  AlertTriangle
} from 'lucide-react';
import { Modal, Button } from '@/components/common';
import './styles/tuviVietnamChart.css';

export * from './types/chart.types';
export * from './engine';
export { ChartBoard } from './components/ChartBoard';
export { ChartForm } from './components/ChartForm';
export { ThienBanCell } from './components/ThienBanCell';
export { PalaceCell } from './components/PalaceCell';
export { BorderBadge, getBorderBadgesMap } from './components/BorderBadges';
export { InterpretationTabs } from './components/InterpretationTabs';
export { ChartActions } from './components/ChartActions';

const DEFAULT_PROFILE = {
  name: 'Đương Số',
  day: 1,
  month: 12,
  year: 2001,
  hour: 13,
  minute: 30,
  gender: 'Nam' as const,
  viewYear: 2026,
  calendarType: 'duong' as const,
  isLeapMonth: false
};

export const TuViChartGenerator: React.FC = () => {
  const [day, setDay] = useState(DEFAULT_PROFILE.day);
  const [month, setMonth] = useState(DEFAULT_PROFILE.month);
  const [year, setYear] = useState(DEFAULT_PROFILE.year);
  const [hour, setHour] = useState(DEFAULT_PROFILE.hour);
  const [minute, setMinute] = useState(DEFAULT_PROFILE.minute);
  const [gender, setGender] = useState<'Nam' | 'Nữ'>(DEFAULT_PROFILE.gender);
  const [viewYear, setViewYear] = useState(DEFAULT_PROFILE.viewYear);
  const [calendarType, setCalendarType] = useState<'duong' | 'am'>(DEFAULT_PROFILE.calendarType);
  const [isLeapMonth, setIsLeapMonth] = useState(DEFAULT_PROFILE.isLeapMonth);

  // Tùy biến xem vận
  const [showHanNam, setShowHanNam] = useState(false);
  const [luuTuHoa, setLuuTuHoa] = useState(true);
  const [luuTuanTriet, setLuuTuanTriet] = useState(true);
  const [luuDaiVan, setLuuDaiVan] = useState(true);
  const [luuSaoKhac, setLuuSaoKhac] = useState(true);
  const [locKyNhap, setLocKyNhap] = useState(true);
  const [khoaQuyenNhap, setKhoaQuyenNhap] = useState(true);
  const [xemVanTheo, setXemVanTheo] = useState<'LuuNien' | 'TieuHan' | 'LuuNienDaiVan'>('LuuNien');

  // Recent charts list
  const [recentList, setRecentList] = useState<RecentChartItem[]>([]);

  // Last submitted URL for popup fallback
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState<string | null>(null);
  const [lastSubmittedName, setLastSubmittedName] = useState<string>('');

  // Option to open in new tab vs view on same page (Switch)
  const [openInNewTab, setOpenInNewTab] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('tuvi_open_mode');
      if (saved !== null) {
        return saved === 'new_tab';
      }
    } catch {
      // ignore
    }
    return false; // Mặc định là xem tại trang
  });

  const handleSetOpenInNewTab = (val: boolean) => {
    setOpenInNewTab(val);
    try {
      localStorage.setItem('tuvi_open_mode', val ? 'new_tab' : 'same_page');
    } catch {
      // ignore
    }
  };

  // Option to also preview in-page below form
  const [showInPageChart, setShowInPageChart] = useState<boolean>(false);

  // Modal xác nhận xóa lịch sử
  const [isConfirmClearModalOpen, setIsConfirmClearModalOpen] = useState<boolean>(false);

  const [chart, setChart] = useState<TuViChart>(() =>
    generateTuViChart({
      name: DEFAULT_PROFILE.name,
      day: DEFAULT_PROFILE.day,
      month: DEFAULT_PROFILE.month,
      year: DEFAULT_PROFILE.year,
      hour: DEFAULT_PROFILE.hour,
      minute: DEFAULT_PROFILE.minute,
      gender: DEFAULT_PROFILE.gender,
      viewYear: DEFAULT_PROFILE.viewYear,
      calendarType: DEFAULT_PROFILE.calendarType,
      isLeapMonth: DEFAULT_PROFILE.isLeapMonth
    })
  );

  const [interpretation, setInterpretation] = useState<TuViInterpretation>(() =>
    generateInterpretation(
      generateTuViChart({
        name: DEFAULT_PROFILE.name,
        day: DEFAULT_PROFILE.day,
        month: DEFAULT_PROFILE.month,
        year: DEFAULT_PROFILE.year,
        hour: DEFAULT_PROFILE.hour,
        minute: DEFAULT_PROFILE.minute,
        gender: DEFAULT_PROFILE.gender,
        viewYear: DEFAULT_PROFILE.viewYear,
        calendarType: DEFAULT_PROFILE.calendarType,
        isLeapMonth: DEFAULT_PROFILE.isLeapMonth
      })
    )
  );

  useEffect(() => {
    setRecentList(getRecentCharts());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const designation = gender === 'Nam' ? 'Nam Mệnh' : 'Nữ Mệnh';
    const userInfo: UserInfo = {
      name: designation,
      day: Number(day),
      month: Number(month),
      year: Number(year),
      hour: Number(hour),
      minute: Number(minute),
      gender,
      viewYear: Number(viewYear),
      calendarType,
      isLeapMonth,
      showHanNam,
      luuTuHoa,
      luuTuanTriet,
      luuDaiVan,
      luuSaoKhac,
      locKyNhap,
      khoaQuyenNhap,
      xemVanTheo
    };

    // Save recent
    saveRecentChart(userInfo);
    setRecentList(getRecentCharts());

    // Generate chart for in-page state if user wants to toggle preview
    const newChart = generateTuViChart(userInfo);
    const newInterp = generateInterpretation(newChart);
    setChart(newChart);
    setInterpretation(newInterp);

    const query = serializeUserInfoToQueryParams(userInfo);
    const targetUrl = `/la-so?${query}`;
    setLastSubmittedUrl(targetUrl);
    setLastSubmittedName(designation);

    if (openInNewTab) {
      // Mở ra trang tab mới của trình duyệt!
      window.open(targetUrl, '_blank');
    } else {
      // Xem trực tiếp ngay tại trang (Tức thì, không trễ hay animation)
      setShowInPageChart(true);
      requestAnimationFrame(() => {
        const el = document.getElementById('in-page-chart-container') || document.getElementById('chartGrid');
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      });
    }
  };

  const handleOpenRecent = (item: RecentChartItem) => {
    window.open(`/la-so?${item.queryString}`, '_blank');
  };

  const handleLoadRecentToForm = (item: RecentChartItem) => {
    const params = new URLSearchParams(item.queryString);
    const parsed = parseUserInfoFromQueryParams(params);
    setDay(parsed.day);
    setMonth(parsed.month);
    setYear(parsed.year);
    setHour(parsed.hour);
    setMinute(parsed.minute);
    setGender(parsed.gender);
    setViewYear(parsed.viewYear);
    setCalendarType(parsed.calendarType || 'duong');
    setIsLeapMonth(!!parsed.isLeapMonth);
    if (parsed.showHanNam !== undefined) setShowHanNam(parsed.showHanNam);
    if (parsed.luuTuHoa !== undefined) setLuuTuHoa(parsed.luuTuHoa);
    if (parsed.luuTuanTriet !== undefined) setLuuTuanTriet(parsed.luuTuanTriet);
    if (parsed.luuDaiVan !== undefined) setLuuDaiVan(parsed.luuDaiVan);
    if (parsed.luuSaoKhac !== undefined) setLuuSaoKhac(parsed.luuSaoKhac);
    if (parsed.locKyNhap !== undefined) setLocKyNhap(parsed.locKyNhap);
    if (parsed.khoaQuyenNhap !== undefined) setKhoaQuyenNhap(parsed.khoaQuyenNhap);
    if (parsed.xemVanTheo) setXemVanTheo(parsed.xemVanTheo);
  };

  const handleDeleteRecent = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = removeRecentChart(id);
    setRecentList(updated);
  };

  const handleClearAllRecent = () => {
    setIsConfirmClearModalOpen(true);
  };

  const handleConfirmClearAll = () => {
    clearAllRecentCharts();
    setRecentList([]);
    setIsConfirmClearModalOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div className="tuvi-authentic-scope" style={containerStyle}>
      <div className="chart-wrapper">
        {/* Form Nhập Liệu */}
        <ChartForm
          day={day}
          setDay={setDay}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          hour={hour}
          setHour={setHour}
          minute={minute}
          setMinute={setMinute}
          gender={gender}
          setGender={setGender}
          viewYear={viewYear}
          setViewYear={setViewYear}
          calendarType={calendarType}
          setCalendarType={setCalendarType}
          isLeapMonth={isLeapMonth}
          setIsLeapMonth={setIsLeapMonth}
          showHanNam={showHanNam}
          setShowHanNam={setShowHanNam}
          luuTuHoa={luuTuHoa}
          setLuuTuHoa={setLuuTuHoa}
          luuTuanTriet={luuTuanTriet}
          setLuuTuanTriet={setLuuTuanTriet}
          luuDaiVan={luuDaiVan}
          setLuuDaiVan={setLuuDaiVan}
          luuSaoKhac={luuSaoKhac}
          setLuuSaoKhac={setLuuSaoKhac}
          locKyNhap={locKyNhap}
          setLocKyNhap={setLocKyNhap}
          khoaQuyenNhap={khoaQuyenNhap}
          setKhoaQuyenNhap={setKhoaQuyenNhap}
          xemVanTheo={xemVanTheo}
          setXemVanTheo={setXemVanTheo}
          openInNewTab={openInNewTab}
          setOpenInNewTab={handleSetOpenInNewTab}
          onSubmit={handleSubmit}
        />

        {/* Thông Báo Mở Tab Mới Sau Khi An Sao (Chỉ khi bật Mở Trang Mới) */}
        {openInNewTab && lastSubmittedUrl && (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.16) 0%, rgba(183, 28, 28, 0.08) 100%)',
              border: '1.5px solid var(--tg-gold-border, #d4af37)',
              borderRadius: '8px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              boxShadow: '0 4px 14px rgba(145, 111, 40, 0.12)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={22} color="var(--tg-gold-dark, #916f28)" />
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--tg-seal-dark, #8b0000)' }}>
                  Đã an sao thành công cho đương số &ldquo;{lastSubmittedName}&rdquo; và mở ở Trang Tab Mới!
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--tg-ink-medium, #4c443c)' }}>
                  Nếu trình duyệt của bạn chặn pop-up tự động, hãy bấm nút &ldquo;Mở Lại Tab Mới&rdquo; bên cạnh.
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href={lastSubmittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tool"
                style={{
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #b71c1c, #8b0000)',
                  color: '#ffffff',
                  fontWeight: 700,
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <ArrowUpRight size={16} />
                <span>Mở Lại Tab Mới</span>
              </a>

              <button
                type="button"
                onClick={() => setShowInPageChart((prev) => !prev)}
                className="btn-tool"
                style={{
                  padding: '8px 14px',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {showInPageChart ? <EyeOff size={15} /> : <Eye size={15} />}
                <span>{showInPageChart ? 'Thu Gọn Lá Số Dưới' : 'Xem Nhanh Tại Đây'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Lịch Sử Lập Bàn Gần Đây */}
        {recentList.length > 0 && (
          <div
            style={{
              background: '#fcfbf8',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '8px',
              padding: '14px 18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '12px'
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--tg-gold-dark, #916f28)'
                }}
              >
                <History size={16} />
                Lịch Sử An Sao Gần Đây ({recentList.length})
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--tg-ink-muted, #7e7367)' }}>
                  Bấm để mở lại lá số trong Tab Mới hoặc nạp lại thông tin vào Form
                </span>
                <button
                  type="button"
                  onClick={handleClearAllRecent}
                  className="btn-tool"
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.76rem',
                    color: 'var(--tg-seal-red, #b71c1c)',
                    borderColor: 'rgba(183, 28, 28, 0.35)',
                    background: 'rgba(183, 28, 28, 0.05)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                  title="Xóa toàn bộ danh sách lịch sử an sao"
                >
                  <Trash2 size={13} />
                  <span>Xóa tất cả lịch sử</span>
                </button>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '10px'
              }}
            >
              {recentList.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--tg-gold-light, #f3e9d2)',
                    borderRadius: '6px',
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                  }}
                >
                  <div
                    onClick={() => handleLoadRecentToForm(item)}
                    style={{ cursor: 'pointer', flex: 1, minWidth: 0 }}
                    title="Bấm để nạp thông tin này vào Form"
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        color: 'var(--tg-seal-red, #b71c1c)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.name && item.name !== 'Đương Số' && item.name !== 'Nam Mệnh' && item.name !== 'Nữ Mệnh'
                        ? `${item.name} (${item.gender})`
                        : (item.gender === 'Nam' ? 'Nam Mệnh' : 'Nữ Mệnh')}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--tg-ink-muted, #7e7367)', marginTop: '2px' }}>
                      {item.birthDateDisplay} • {item.hourDisplay} • Hạn {item.viewYear}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <button
                      type="button"
                      onClick={() => handleOpenRecent(item)}
                      className="btn-tool"
                      style={{ padding: '5px 8px', fontSize: '0.75rem' }}
                      title="Mở lá số này trong tab mới"
                    >
                      <ExternalLink size={13} />
                      <span>Xem</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleDeleteRecent(item.id, e)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--tg-ink-faint, #d5cbbe)',
                        cursor: 'pointer',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="Xóa khỏi danh sách gần đây"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Khối Hướng Dẫn Nam Phái Khi Chưa Bật Xem Nhanh */}
        {!showInPageChart && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              marginTop: '0.25rem'
            }}
          >
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                gap: '12px'
              }}
            >
              <Compass size={24} color="var(--tg-gold-dark)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--tg-ink-main)' }}>
                  An Sao Nam Phái Tiêu Chuẩn
                </h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--tg-ink-muted)', lineHeight: 1.5 }}>
                  Hệ thống an đầy đủ 14 Chính Tinh, Lục Sát, Lục Cát, Tứ Hóa, Vòng Lộc Tồn, Thái Tuế và Tràng Sinh
                  theo đúng chuẩn âm dương lịch pháp cổ truyền.
                </p>
              </div>
            </div>

            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                gap: '12px'
              }}
            >
              <ExternalLink size={24} color="var(--tg-seal-red)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--tg-ink-main)' }}>
                  Lập Bàn Mở Tab Riêng Biệt
                </h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--tg-ink-muted)', lineHeight: 1.5 }}>
                  Khi bấm &ldquo;AN SAO KHAI BÀN&rdquo;, lá số sẽ tự động mở trong tab mới giúp bạn dễ dàng so sánh nhiều
                  lá số cùng lúc mà không làm mất thông tin form đang nhập.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4x4 Chart Board & 4 Interpretation Tabs (Nếu bật Xem Nhanh) */}
        {showInPageChart && (
          <div id="in-page-chart-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
            <ChartBoard chart={chart} userName={gender === 'Nam' ? 'Nam Mệnh' : 'Nữ Mệnh'} />
            <InterpretationTabs interpretation={interpretation} chart={chart} />
          </div>
        )}

        {/* Modal Xác Nhận Xóa Toàn Bộ Lịch Sử */}
        <Modal
          isOpen={isConfirmClearModalOpen}
          onClose={() => setIsConfirmClearModalOpen(false)}
          title="Xác Nhận Xóa Lịch Sử"
          maxWidth="460px"
          footer={
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsConfirmClearModalOpen(false)}
              >
                Hủy Bỏ
              </Button>
              <Button
                variant="danger"
                size="sm"
                leftIcon={<Trash2 size={15} />}
                onClick={handleConfirmClearAll}
              >
                Xác Nhận Xóa Tất Cả
              </Button>
            </>
          }
        >
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div
              style={{
                padding: '10px',
                borderRadius: '50%',
                backgroundColor: 'rgba(211, 47, 47, 0.12)',
                color: 'var(--danger, #d32f2f)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <AlertTriangle size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                Bạn có chắc chắn muốn xóa toàn bộ lịch sử?
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.55 }}>
                Thao tác này sẽ xóa sạch tất cả danh sách hồ sơ an sao đã lưu gần đây trên trình duyệt của bạn. Dữ liệu sau khi xóa sẽ không thể phục hồi lại.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
