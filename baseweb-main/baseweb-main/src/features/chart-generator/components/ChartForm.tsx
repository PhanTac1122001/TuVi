import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Sparkles, Calendar, Clock, Sun, Moon, ChevronDown, CalendarDays, ExternalLink, AlertCircle, Eye } from 'lucide-react';
import { Modal, Button } from '@/components/common';
import { convertSolarToLunar, convertLunarToSolar, getHourChiIndex, CAN, CHI } from '../engine/lunarCalendar';

import { XemVanType } from '../types/chart.types';

interface ChartFormProps {
  day: number;
  setDay: (v: number) => void;
  month: number;
  setMonth: (v: number) => void;
  year: number;
  setYear: (v: number) => void;
  hour: number;
  setHour: (v: number) => void;
  minute: number;
  setMinute: (v: number) => void;
  gender: 'Nam' | 'Nữ';
  setGender: (v: 'Nam' | 'Nữ') => void;
  viewYear: number;
  setViewYear: (v: number) => void;
  calendarType: 'duong' | 'am';
  setCalendarType: (v: 'duong' | 'am') => void;
  isLeapMonth: boolean;
  setIsLeapMonth: (v: boolean) => void;
  showHanNam: boolean;
  setShowHanNam: (v: boolean) => void;
  luuTuHoa: boolean;
  setLuuTuHoa: (v: boolean) => void;
  luuTuanTriet: boolean;
  setLuuTuanTriet: (v: boolean) => void;
  luuDaiVan: boolean;
  setLuuDaiVan: (v: boolean) => void;
  luuSaoKhac: boolean;
  setLuuSaoKhac: (v: boolean) => void;
  locKyNhap: boolean;
  setLocKyNhap: (v: boolean) => void;
  khoaQuyenNhap: boolean;
  setKhoaQuyenNhap: (v: boolean) => void;
  xemVanTheo: XemVanType;
  setXemVanTheo: (v: XemVanType) => void;
  openInNewTab: boolean;
  setOpenInNewTab: (v: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

interface ComboOption {
  value: number;
  label: string;
}

interface ComboSelectProps {
  id?: string;
  value: number;
  onChange: (val: number) => void;
  options: ComboOption[];
  placeholder?: string;
}

/**
 * ComboSelect: Cho phép VỪA NHẬP (gõ số trực tiếp) VỪA CHỌN (bấm chọn từ toàn bộ danh sách)
 */
const ComboSelect: React.FC<ComboSelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(String(value !== undefined && value !== null ? value : ''));
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setText(String(value !== undefined && value !== null ? value : ''));
  }, [value]);

  // Cuộn nội bộ trong menu danh sách khi mở (chỉ cuộn menu, tuyệt đối KHÔNG cuộn trang web)
  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeEl = listRef.current.querySelector('.combo-dropdown-item.active') as HTMLElement;
      if (activeEl) {
        listRef.current.scrollTop = activeEl.offsetTop - listRef.current.offsetTop - 30;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setText(val);
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      if (!isOpen) {
        setIsOpen(true);
        e.preventDefault();
      }
    } else if (e.key === 'Enter') {
      if (isOpen) {
        setIsOpen(false);
        e.preventDefault();
      }
    }
  };

  const handleSelectOption = (optVal: number) => {
    onChange(optVal);
    setText(String(optVal));
    setIsOpen(false);
  };

  return (
    <div
      className="combo-select-wrapper"
      ref={containerRef}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <input
        id={id}
        type="text"
        inputMode="numeric"
        className="chart-form-control combo-select-input"
        value={text}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={(e) => {
          // Bôi đen giá trị hiện tại để gõ số mới nhanh chóng
          e.target.select();
        }}
        autoComplete="off"
      />
      <button
        type="button"
        className="combo-select-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        tabIndex={-1}
        title="Bấm để chọn từ danh sách đầy đủ"
      >
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <ul className="combo-dropdown-menu" ref={listRef}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`combo-dropdown-item ${value === opt.value ? 'active' : ''}`}
              onClick={() => handleSelectOption(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const GIO_CHI_PRESETS = [
  { chi: 'Tý', label: 'Tý (23h-01h)', chiIndex: 0, defaultHour: 0, defaultMin: 0 },
  { chi: 'Sửu', label: 'Sửu (01h-03h)', chiIndex: 1, defaultHour: 2, defaultMin: 0 },
  { chi: 'Dần', label: 'Dần (03h-05h)', chiIndex: 2, defaultHour: 4, defaultMin: 0 },
  { chi: 'Mão', label: 'Mão (05h-07h)', chiIndex: 3, defaultHour: 6, defaultMin: 0 },
  { chi: 'Thìn', label: 'Thìn (07h-09h)', chiIndex: 4, defaultHour: 8, defaultMin: 0 },
  { chi: 'Tỵ', label: 'Tỵ (09h-11h)', chiIndex: 5, defaultHour: 10, defaultMin: 0 },
  { chi: 'Ngọ', label: 'Ngọ (11h-13h)', chiIndex: 6, defaultHour: 12, defaultMin: 0 },
  { chi: 'Mùi', label: 'Mùi (13h-15h)', chiIndex: 7, defaultHour: 14, defaultMin: 0 },
  { chi: 'Thân', label: 'Thân (15h-17h)', chiIndex: 8, defaultHour: 16, defaultMin: 0 },
  { chi: 'Dậu', label: 'Dậu (17h-19h)', chiIndex: 9, defaultHour: 18, defaultMin: 0 },
  { chi: 'Tuất', label: 'Tuất (19h-21h)', chiIndex: 10, defaultHour: 20, defaultMin: 0 },
  { chi: 'Hợi', label: 'Hợi (21h-23h)', chiIndex: 11, defaultHour: 22, defaultMin: 0 },
];

export const ChartForm: React.FC<ChartFormProps> = ({
  day, setDay,
  month, setMonth,
  year, setYear,
  hour, setHour,
  minute, setMinute,
  gender, setGender,
  viewYear, setViewYear,
  calendarType, setCalendarType,
  isLeapMonth, setIsLeapMonth,
  showHanNam, setShowHanNam,
  luuTuHoa, setLuuTuHoa,
  luuTuanTriet, setLuuTuanTriet,
  luuDaiVan, setLuuDaiVan,
  luuSaoKhac, setLuuSaoKhac,
  locKyNhap, setLocKyNhap,
  khoaQuyenNhap, setKhoaQuyenNhap,
  xemVanTheo, setXemVanTheo,
  openInNewTab, setOpenInNewTab,
  onSubmit
}) => {
  const currentChiIndex = getHourChiIndex(hour, minute);
  const datePickerRef = useRef<HTMLInputElement>(null);

  const handleSelectGioChi = (h: number, m: number) => {
    setHour(h);
    setMinute(m);
  };

  // Mở DatePicker lịch hệ thống
  const handleOpenDatePicker = () => {
    if (datePickerRef.current) {
      if ('showPicker' in HTMLInputElement.prototype) {
        datePickerRef.current.showPicker();
      } else {
        datePickerRef.current.click();
      }
    }
  };

  const handleDatePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val) {
      const [y, m, d] = val.split('-').map(Number);
      if (y && m && d) {
        setYear(y);
        setMonth(m);
        setDay(d);
      }
    }
  };

  // Tạo danh sách chọn cho Ngày (1 - 31): Chỉ hiển thị số
  const dayOptions: ComboOption[] = useMemo(() => {
    return Array.from({ length: 31 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}`
    }));
  }, []);

  // Tạo danh sách chọn cho Tháng (1 - 12): Chỉ hiển thị số
  const monthOptions: ComboOption[] = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}`
    }));
  }, []);

  // Tạo danh sách chọn cho Năm (1930 - 2035) kèm Can Chi
  const yearOptions: ComboOption[] = useMemo(() => {
    const list: ComboOption[] = [];
    for (let y = 2030; y >= 1930; y--) {
      const can = CAN[(y + 6) % 10];
      const chi = CHI[(y + 8) % 12];
      list.push({
        value: y,
        label: `${y} - ${can} ${chi}`
      });
    }
    return list;
  }, []);

  // Tạo danh sách chọn cho Giờ (0 - 23h) kèm Chi
  const hourOptions: ComboOption[] = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      const chiIdx = getHourChiIndex(i, 0);
      const chiName = CHI[chiIdx];
      const formatted = String(i).padStart(2, '0');
      return {
        value: i,
        label: `${formatted}h00 (Giờ ${chiName})`
      };
    });
  }, []);

  // Tạo danh sách chọn cho Phút (0 - 59 phút đầy đủ)
  const minuteOptions: ComboOption[] = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      value: i,
      label: `${String(i).padStart(2, '0')} phút`
    }));
  }, []);


  // Tính toán bản xem trước chuyển đổi lịch Dương <-> Âm trong thời gian thực
  const conversionPreview = useMemo(() => {
    try {
      if (calendarType === 'duong') {
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2100) {
          const l = convertSolarToLunar(day, month, year, hour, minute);
          return {
            valid: true,
            text: `Âm Lịch: Ngày ${l.lunarDay} Tháng ${l.lunarMonth}${l.isLeapMonth ? ' (Nhuận)' : ''} Năm ${l.yearCan} ${l.yearChi} • Giờ ${l.hourChi}`
          };
        }
      } else {
        if (day >= 1 && day <= 30 && month >= 1 && month <= 12 && year >= 1900 && year <= 2100) {
          const [sd, sm, sy] = convertLunarToSolar(day, month, year, isLeapMonth ? 1 : 0);
          if (sd > 0 && sm > 0 && sy > 0) {
            const l = convertSolarToLunar(sd, sm, sy, hour, minute);
            return {
              valid: true,
              text: `Dương Lịch tương ứng: Ngày ${sd}/${sm}/${sy} • ${l.yearCan} ${l.yearChi} (Giờ ${l.hourChi})`
            };
          }
        }
      }
    } catch {
      // Ignored
    }
    return { valid: false, text: '' };
  }, [calendarType, day, month, year, hour, minute, isLeapMonth]);

  const [errorModalMsg, setErrorModalMsg] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!day || day < 1 || day > 31) {
      setErrorModalMsg('Vui lòng nhập hoặc chọn ngày sinh hợp lệ (từ ngày 1 đến ngày 31)!');
      return;
    }
    if (!month || month < 1 || month > 12) {
      setErrorModalMsg('Vui lòng nhập hoặc chọn tháng sinh hợp lệ (từ tháng 1 đến tháng 12)!');
      return;
    }
    if (!year || year < 1900 || year > 2100) {
      setErrorModalMsg('Vui lòng nhập hoặc chọn năm sinh từ 1900 đến 2100!');
      return;
    }
    if (hour < 0 || hour > 23) {
      setErrorModalMsg('Giờ sinh phải nằm trong khoảng từ 0 đến 23 giờ!');
      return;
    }
    if (minute < 0 || minute > 59) {
      setErrorModalMsg('Phút sinh phải nằm trong khoảng từ 0 đến 59 phút!');
      return;
    }
    onSubmit(e);
  };

  return (
    <section className="chart-form-card">
      <div className="form-header-bar">
        <div className="form-header-title">
          <Calendar size={18} color="var(--tg-gold-dark)" />
          <span>THÔNG TIN ĐƯƠNG SỐ & LẬP BÀN</span>
        </div>
        <div className="form-header-subtitle">
          Thuật toán an sao Nam Phái chuẩn xác 100% • Hỗ trợ vừa gõ nhập vừa chọn danh sách
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className="chart-form-grid">
        {/* Loại Lịch (Dương / Âm) */}
        <div className="chart-form-group">
          <label>Loại Lịch Sinh</label>
          <div style={{ display: 'flex', gap: '4px', background: '#f5f0e6', padding: '3px', borderRadius: '6px', border: '1px solid #dcd3c1' }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: '6px 4px',
                fontSize: '0.8rem',
                fontWeight: 700,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                background: calendarType === 'duong' ? 'var(--tg-gold-dark, #b78a28)' : 'transparent',
                color: calendarType === 'duong' ? '#ffffff' : 'var(--tg-ink-medium)'
              }}
              onClick={() => setCalendarType('duong')}
            >
              <Sun size={13} />
              Dương
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: '6px 4px',
                fontSize: '0.8rem',
                fontWeight: 700,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                background: calendarType === 'am' ? 'var(--tg-gold-dark, #b78a28)' : 'transparent',
                color: calendarType === 'am' ? '#ffffff' : 'var(--tg-ink-medium)'
              }}
              onClick={() => setCalendarType('am')}
            >
              <Moon size={13} />
              Âm Lịch
            </button>
          </div>
        </div>

        {/* Ngày Sinh: Vừa nhập vừa chọn */}
        <div className="chart-form-group">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
            <label htmlFor="dayInput" style={{ margin: 0 }}>
              Ngày ({calendarType === 'duong' ? 'Dương' : 'Âm'})
            </label>
            {calendarType === 'duong' && (
              <button
                type="button"
                onClick={handleOpenDatePicker}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0 2px',
                  color: 'var(--tg-gold-dark, #b78a28)',
                  cursor: 'pointer',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px'
                }}
                title="Bấm để mở lịch chọn ngày"
              >
                <CalendarDays size={12} />
                Lịch
              </button>
            )}
          </div>
          <ComboSelect
            id="dayInput"
            value={day}
            onChange={setDay}
            options={dayOptions}
            placeholder="1 - 31"
          />
          {calendarType === 'duong' && (
            <input
              ref={datePickerRef}
              type="date"
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
              onChange={handleDatePickerChange}
              tabIndex={-1}
            />
          )}
        </div>

        {/* Tháng Sinh: Vừa nhập vừa chọn */}
        <div className="chart-form-group">
          <label htmlFor="monthInput">Tháng ({calendarType === 'duong' ? 'Dương' : 'Âm'})</label>
          <ComboSelect
            id="monthInput"
            value={month}
            onChange={setMonth}
            options={monthOptions}
            placeholder="1 - 12"
          />
        </div>

        {/* Năm Sinh: Vừa nhập vừa chọn */}
        <div className="chart-form-group">
          <label htmlFor="yearInput">Năm ({calendarType === 'duong' ? 'Dương' : 'Âm'})</label>
          <ComboSelect
            id="yearInput"
            value={year}
            onChange={setYear}
            options={yearOptions}
            placeholder="Năm sinh"
          />
        </div>

        {/* Giờ Sinh: Vừa nhập vừa chọn */}
        <div className="chart-form-group">
          <label htmlFor="hourInput">Giờ (0 - 23h)</label>
          <ComboSelect
            id="hourInput"
            value={hour}
            onChange={setHour}
            options={hourOptions}
            placeholder="0 - 23"
          />
        </div>

        {/* Phút Sinh: Vừa nhập vừa chọn */}
        <div className="chart-form-group">
          <label htmlFor="minuteInput">Phút (0 - 59m)</label>
          <ComboSelect
            id="minuteInput"
            value={minute}
            onChange={setMinute}
            options={minuteOptions}
            placeholder="0 - 59"
          />
        </div>

        {/* Giới Tính */}
        <div className="chart-form-group">
          <label htmlFor="genderSelect">Giới Tính</label>
          <select
            id="genderSelect"
            className="chart-form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value as 'Nam' | 'Nữ')}
          >
            <option value="Nam">Nam (Dương)</option>
            <option value="Nữ">Nữ (Âm)</option>
          </select>
        </div>

        {/* Tùy chọn Tháng Nhuận (Nếu chọn Âm Lịch) */}
        {calendarType === 'am' && (
          <div className="chart-form-group" style={{ justifyContent: 'center', paddingBottom: '4px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', margin: 0, fontWeight: 700, color: 'var(--tg-red, #b71c1c)' }}>
              <input
                type="checkbox"
                checked={isLeapMonth}
                onChange={(e) => setIsLeapMonth(e.target.checked)}
                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
              />
              Sinh Tháng Nhuận
            </label>
          </div>
        )}

        {/* Tùy biến xem vận (Áp dụng theo tuvi.cohoc.net) */}
        <div className="van-han-custom-box">
          <div className="van-han-custom-title">
            <span>Tùy biến xem vận</span>
          </div>

          <div className="van-han-main-row">
            <label className="van-han-checkbox-label" style={{ fontWeight: 700 }}>
              <input
                type="checkbox"
                checked={showHanNam}
                onChange={(e) => setShowHanNam(e.target.checked)}
              />
              <span>Hạn năm:</span>
            </label>
            <input
              type="number"
              className="chart-form-control van-han-year-input"
              value={viewYear}
              onChange={(e) => setViewYear(Number(e.target.value))}
              disabled={!showHanNam}
              min={1900}
              max={2100}
            />
          </div>

          <div className="van-han-checkbox-grid">
            <label className="van-han-checkbox-label">
              <input
                type="checkbox"
                checked={luuTuHoa}
                onChange={(e) => setLuuTuHoa(e.target.checked)}
                disabled={!showHanNam}
              />
              <span>Lưu tứ hóa</span>
            </label>
            <label className="van-han-checkbox-label">
              <input
                type="checkbox"
                checked={luuTuanTriet}
                onChange={(e) => setLuuTuanTriet(e.target.checked)}
                disabled={!showHanNam}
              />
              <span>Lưu Tuần Triệt</span>
            </label>

            <label className="van-han-checkbox-label">
              <input
                type="checkbox"
                checked={luuDaiVan}
                onChange={(e) => setLuuDaiVan(e.target.checked)}
                disabled={!showHanNam}
              />
              <span>Lưu đại vận</span>
            </label>
            <label className="van-han-checkbox-label">
              <input
                type="checkbox"
                checked={luuSaoKhac}
                onChange={(e) => setLuuSaoKhac(e.target.checked)}
                disabled={!showHanNam}
              />
              <span>Lưu các sao khác</span>
            </label>

            <label className="van-han-checkbox-label">
              <input
                type="checkbox"
                checked={locKyNhap}
                onChange={(e) => setLocKyNhap(e.target.checked)}
                disabled={!showHanNam}
              />
              <span>Lộc Kỵ nhập</span>
            </label>
            <label className="van-han-checkbox-label">
              <input
                type="checkbox"
                checked={khoaQuyenNhap}
                onChange={(e) => setKhoaQuyenNhap(e.target.checked)}
                disabled={!showHanNam}
              />
              <span>Khoa Quyền nhập</span>
            </label>
          </div>

          <div className="van-han-radio-group">
            <span className="van-han-radio-title">Xem vận năm theo:</span>
            <div className="van-han-radio-options">
              <label className="van-han-radio-label">
                <input
                  type="radio"
                  name="xemVanTheo"
                  value="LuuNien"
                  checked={xemVanTheo === 'LuuNien'}
                  onChange={() => setXemVanTheo('LuuNien')}
                  disabled={!showHanNam}
                />
                <span>Lưu Niên</span>
              </label>
              <label className="van-han-radio-label">
                <input
                  type="radio"
                  name="xemVanTheo"
                  value="TieuHan"
                  checked={xemVanTheo === 'TieuHan'}
                  onChange={() => setXemVanTheo('TieuHan')}
                  disabled={!showHanNam}
                />
                <span>Tiểu Hạn</span>
              </label>
              <label className="van-han-radio-label">
                <input
                  type="radio"
                  name="xemVanTheo"
                  value="LuuNienDaiVan"
                  checked={xemVanTheo === 'LuuNienDaiVan'}
                  onChange={() => setXemVanTheo('LuuNienDaiVan')}
                  disabled={!showHanNam}
                />
                <span>Lưu Niên Đại Vận</span>
              </label>
            </div>
          </div>
        </div>

        {/* Nút Switch bật tắt: Xem tại trang hoặc Mở trang mới (Tức thì, không animation) */}
        <div
          style={{
            gridColumn: '1 / -1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '0.45rem',
            marginBottom: '0.2rem',
            userSelect: 'none'
          }}
        >
          <span
            onClick={() => setOpenInNewTab(false)}
            style={{
              fontSize: '0.84rem',
              fontWeight: !openInNewTab ? 800 : 600,
              color: !openInNewTab ? '#b71c1c' : '#78716c',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <Eye size={15} style={{ color: !openInNewTab ? '#b71c1c' : '#a8a29e' }} />
            Xem tại trang
          </span>

          {/* Công tắc gạt (Switch) - Tức thì */}
          <button
            type="button"
            role="switch"
            aria-checked={openInNewTab}
            onClick={() => setOpenInNewTab(!openInNewTab)}
            style={{
              width: '44px',
              height: '22px',
              backgroundColor: openInNewTab ? '#b71c1c' : '#c5a059',
              borderRadius: '22px',
              position: 'relative',
              cursor: 'pointer',
              border: '1.5px solid rgba(0, 0, 0, 0.12)',
              padding: '0',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'none'
            }}
            title={openInNewTab ? 'Đang bật: Mở trang mới. Bấm để chuyển sang Xem tại trang' : 'Đang bật: Xem tại trang. Bấm để chuyển sang Mở trang mới'}
          >
            <span
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                position: 'absolute',
                left: openInNewTab ? '23px' : '3px',
                transition: 'none',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)'
              }}
            />
          </button>

          <span
            onClick={() => setOpenInNewTab(true)}
            style={{
              fontSize: '0.84rem',
              fontWeight: openInNewTab ? 800 : 600,
              color: openInNewTab ? '#b71c1c' : '#78716c',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <ExternalLink size={14} style={{ color: openInNewTab ? '#b71c1c' : '#a8a29e' }} />
            Mở trang mới
          </span>
        </div>

        {/* Nút Submit */}
        <div className="chart-form-group btn-col" style={{ gridColumn: '1 / -1', marginTop: '0.2rem' }}>
          <button
            type="submit"
            className="btn-an-sao"
            title={openInNewTab ? 'Bấm để an sao và mở lá số trong một trang Tab mới của trình duyệt' : 'Bấm để an sao và xem lá số trực tiếp ngay bên dưới trang này'}
            style={{ width: '100%', justifyContent: 'center', transition: 'none' }}
          >
            <Sparkles size={16} />
            <span>AN SAO KHAI BÀN</span>
            {openInNewTab ? (
              <ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.85 }} />
            ) : (
              <Eye size={15} style={{ marginLeft: '4px', opacity: 0.85 }} />
            )}
          </button>
        </div>
      </form>

      {/* Thanh hiển thị ngày chuyển đổi thực tế (Real-time Preview) */}
      {conversionPreview.valid && (
        <div
          style={{
            marginTop: '0.65rem',
            padding: '6px 12px',
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '6px',
            fontSize: '0.82rem',
            color: 'var(--tg-ink-main, #2c2416)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: 600
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} color="var(--tg-gold-dark, #b78a28)" />
            {conversionPreview.text}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--tg-ink-muted, #736b5e)' }}>
            Giờ {GIO_CHI_PRESETS[currentChiIndex]?.chi} ({GIO_CHI_PRESETS[currentChiIndex]?.label})
          </span>
        </div>
      )}

      {/* Chọn nhanh Giờ Chi (Tý, Sửu, Dần...) */}
      <div className="quick-chi-bar">
        <span style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <Clock size={13} color="var(--tg-gold-dark)" />
          Chọn nhanh Giờ Sinh theo Chi:
        </span>
        {GIO_CHI_PRESETS.map((p) => {
          const isSelected = currentChiIndex === p.chiIndex;
          return (
            <button
              key={p.chi}
              type="button"
              className={`quick-chi-btn ${isSelected ? 'active' : ''}`}
              onClick={() => handleSelectGioChi(p.defaultHour, p.defaultMin)}
              title={p.label}
            >
              {p.chi}
            </button>
          );
        })}
      </div>

      {/* Modal Thông Báo Lỗi Nhập Liệu */}
      <Modal
        isOpen={!!errorModalMsg}
        onClose={() => setErrorModalMsg(null)}
        title="Thông Báo Nhập Liệu"
        maxWidth="420px"
        footer={
          <Button
            variant="gold"
            size="sm"
            onClick={() => setErrorModalMsg(null)}
          >
            Đã Hiểu
          </Button>
        }
      >
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
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
            <AlertCircle size={22} />
          </div>
          <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            {errorModalMsg}
          </p>
        </div>
      </Modal>
    </section>
  );
};
