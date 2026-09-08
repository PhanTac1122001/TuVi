import React from 'react';

interface ChartFormProps {
  name: string;
  setName: (v: string) => void;
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
  onSubmit: (e: React.FormEvent) => void;
}

export const ChartForm: React.FC<ChartFormProps> = ({
  name, setName,
  day, setDay,
  month, setMonth,
  year, setYear,
  hour, setHour,
  minute, setMinute,
  gender, setGender,
  viewYear, setViewYear,
  onSubmit
}) => {
  return (
    <section className="chart-form-card">
      <form onSubmit={onSubmit} className="chart-form-grid">
        <div className="chart-form-group">
          <label htmlFor="nameInput">Họ và Tên</label>
          <input
            id="nameInput"
            type="text"
            className="chart-form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="chart-form-group">
          <label htmlFor="dayInput">Ngày Sinh (Dương Lịch)</label>
          <input
            id="dayInput"
            type="number"
            className="chart-form-control"
            min={1}
            max={31}
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            required
          />
        </div>

        <div className="chart-form-group">
          <label htmlFor="monthInput">Tháng Sinh</label>
          <input
            id="monthInput"
            type="number"
            className="chart-form-control"
            min={1}
            max={12}
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            required
          />
        </div>

        <div className="chart-form-group">
          <label htmlFor="yearInput">Năm Sinh</label>
          <input
            id="yearInput"
            type="number"
            className="chart-form-control"
            min={1900}
            max={2100}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            required
          />
        </div>

        <div className="chart-form-group">
          <label htmlFor="hourInput">Giờ Sinh (0 - 23h)</label>
          <input
            id="hourInput"
            type="number"
            className="chart-form-control"
            min={0}
            max={23}
            value={hour}
            onChange={(e) => setHour(Number(e.target.value))}
            required
          />
        </div>

        <div className="chart-form-group">
          <label htmlFor="minuteInput">Phút Sinh (0 - 59m)</label>
          <input
            id="minuteInput"
            type="number"
            className="chart-form-control"
            min={0}
            max={59}
            value={minute}
            onChange={(e) => setMinute(Number(e.target.value))}
            required
          />
        </div>

        <div className="chart-form-group">
          <label htmlFor="genderSelect">Giới Tính</label>
          <select
            id="genderSelect"
            className="chart-form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value as 'Nam' | 'Nữ')}
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>

        <div className="chart-form-group">
          <label htmlFor="viewYearInput">Năm Xem Hạn</label>
          <input
            id="viewYearInput"
            type="number"
            className="chart-form-control"
            value={viewYear}
            onChange={(e) => setViewYear(Number(e.target.value))}
            required
          />
        </div>

        <div className="chart-form-group">
          <button type="submit" className="btn-an-sao">
            AN LÁ SỐ & LUẬN GIẢI
          </button>
        </div>
      </form>
    </section>
  );
};
