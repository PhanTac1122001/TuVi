import React, { useState } from 'react';
import { ChartInput } from '../../types/tuvi.types';
import { getChiHourFromHour } from '../../engine/lunarCalendar';

interface ChartInputFormProps {
  onSubmit: (input: ChartInput) => void;
  isLoading?: boolean;
}

export const ChartInputForm: React.FC<ChartInputFormProps> = ({ onSubmit, isLoading }) => {
  const [fullName, setFullName] = useState('Nguyễn Văn An');
  const [gender, setGender] = useState<'nam' | 'nu'>('nam');
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar');
  const [day, setDay] = useState(15);
  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(1995);
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(30);
  const [isLeap, setIsLeap] = useState(false);
  const [viewYear, setViewYear] = useState(new Date().getFullYear());

  const currentChiHour = getChiHourFromHour(hour, minute);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      fullName,
      gender,
      solarDay: day,
      solarMonth: month,
      solarYear: year,
      solarHour: hour,
      solarMinute: minute,
      viewYear,
      isLunarInput: calendarType === 'lunar',
      isLeapMonth: isLeap
    });
  };

  return (
    <div style={{
      background: 'rgba(21, 27, 40, 0.95)',
      border: '1px solid var(--border-gold)',
      borderRadius: '12px',
      padding: '24px',
      maxWidth: '900px',
      margin: '0 auto 24px auto',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {/* Họ tên */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Họ và tên đương số:
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Giới tính */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Giới tính:
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setGender('nam')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: gender === 'nam' ? '1px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.1)',
                  background: gender === 'nam' ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.04)',
                  color: gender === 'nam' ? 'var(--gold-light)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Nam (Dương/Âm)
              </button>
              <button
                type="button"
                onClick={() => setGender('nu')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: gender === 'nu' ? '1px solid var(--gold-main)' : '1px solid rgba(255,255,255,0.1)',
                  background: gender === 'nu' ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.04)',
                  color: gender === 'nu' ? 'var(--gold-light)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Nữ (Dương/Âm)
              </button>
            </div>
          </div>

          {/* Loại lịch */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Loại lịch nhập:
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setCalendarType('solar')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: calendarType === 'solar' ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                  background: calendarType === 'solar' ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.04)',
                  color: calendarType === 'solar' ? '#38bdf8' : 'var(--text-secondary)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Dương Lịch
              </button>
              <button
                type="button"
                onClick={() => setCalendarType('lunar')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: calendarType === 'lunar' ? '1px solid #eab308' : '1px solid rgba(255,255,255,0.1)',
                  background: calendarType === 'lunar' ? 'rgba(234,179,8,0.2)' : 'rgba(255,255,255,0.04)',
                  color: calendarType === 'lunar' ? '#eab308' : 'var(--text-secondary)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Âm Lịch
              </button>
            </div>
          </div>
        </div>

        {/* Hàng ngày tháng năm giờ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Ngày:
            </label>
            <input
              type="number"
              min="1"
              max="31"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#fff'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Tháng:
            </label>
            <input
              type="number"
              min="1"
              max="12"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#fff'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Năm sinh:
            </label>
            <input
              type="number"
              min="1900"
              max="2100"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#fff'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Giờ sinh: ({currentChiHour})
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              <input
                type="number"
                min="0"
                max="23"
                value={hour}
                onChange={(e) => setHour(Number(e.target.value))}
                placeholder="Giờ"
                style={{
                  width: '50%',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  color: '#fff'
                }}
              />
              <input
                type="number"
                min="0"
                max="59"
                value={minute}
                onChange={(e) => setMinute(Number(e.target.value))}
                placeholder="Phút"
                style={{
                  width: '50%',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  color: '#fff'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Năm xem hạn:
            </label>
            <input
              type="number"
              min="1900"
              max="2100"
              value={viewYear}
              onChange={(e) => setViewYear(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#fff'
              }}
            />
          </div>
        </div>

        {calendarType === 'lunar' && (
          <div style={{ marginTop: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-light)', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={isLeap}
                onChange={(e) => setIsLeap(e.target.checked)}
              />
              Sinh vào tháng nhuận
            </label>
          </div>
        )}

        {/* Nút Submit */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)',
              color: '#0a0d14',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 36px',
              fontFamily: 'Cinzel, serif',
              fontSize: '1.05rem',
              fontWeight: 800,
              letterSpacing: '1px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            {isLoading ? 'Đang an sao...' : 'LẬP LÁ SỐ TỬ VI'}
          </button>
        </div>
      </form>
    </div>
  );
};
