import React, { useState } from 'react';
import { UserInfo, TuViChart, TuViInterpretation } from './types/chart.types';
import { generateTuViChart } from './engine/tuviEngine';
import { generateInterpretation } from './engine/tuviInterpreter';
import { ChartForm } from './components/ChartForm';
import { ChartBoard } from './components/ChartBoard';
import { InterpretationTabs } from './components/InterpretationTabs';
import { ChartActions } from './components/ChartActions';
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
  name: 'Nguyễn Văn An',
  day: 1,
  month: 12,
  year: 2001,
  hour: 13,
  minute: 30,
  gender: 'Nam' as const,
  viewYear: 2026
};

export const TuViChartGenerator: React.FC = () => {
  const [name, setName] = useState(DEFAULT_PROFILE.name);
  const [day, setDay] = useState(DEFAULT_PROFILE.day);
  const [month, setMonth] = useState(DEFAULT_PROFILE.month);
  const [year, setYear] = useState(DEFAULT_PROFILE.year);
  const [hour, setHour] = useState(DEFAULT_PROFILE.hour);
  const [minute, setMinute] = useState(DEFAULT_PROFILE.minute);
  const [gender, setGender] = useState<'Nam' | 'Nữ'>(DEFAULT_PROFILE.gender);
  const [viewYear, setViewYear] = useState(DEFAULT_PROFILE.viewYear);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const [chart, setChart] = useState<TuViChart>(() =>
    generateTuViChart({
      day: DEFAULT_PROFILE.day,
      month: DEFAULT_PROFILE.month,
      year: DEFAULT_PROFILE.year,
      hour: DEFAULT_PROFILE.hour,
      minute: DEFAULT_PROFILE.minute,
      gender: DEFAULT_PROFILE.gender,
      viewYear: DEFAULT_PROFILE.viewYear
    })
  );

  const [interpretation, setInterpretation] = useState<TuViInterpretation>(() =>
    generateInterpretation(
      generateTuViChart({
        day: DEFAULT_PROFILE.day,
        month: DEFAULT_PROFILE.month,
        year: DEFAULT_PROFILE.year,
        hour: DEFAULT_PROFILE.hour,
        minute: DEFAULT_PROFILE.minute,
        gender: DEFAULT_PROFILE.gender,
        viewYear: DEFAULT_PROFILE.viewYear
      })
    )
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userInfo: UserInfo = {
      day: Number(day),
      month: Number(month),
      year: Number(year),
      hour: Number(hour),
      minute: Number(minute),
      gender,
      viewYear: Number(viewYear)
    };
    const newChart = generateTuViChart(userInfo);
    const newInterp = generateInterpretation(newChart);
    setChart(newChart);
    setInterpretation(newInterp);
  };

  const handleReset = () => {
    setName(DEFAULT_PROFILE.name);
    setDay(DEFAULT_PROFILE.day);
    setMonth(DEFAULT_PROFILE.month);
    setYear(DEFAULT_PROFILE.year);
    setHour(DEFAULT_PROFILE.hour);
    setMinute(DEFAULT_PROFILE.minute);
    setGender(DEFAULT_PROFILE.gender);
    setViewYear(DEFAULT_PROFILE.viewYear);

    const initialInfo: UserInfo = {
      day: DEFAULT_PROFILE.day,
      month: DEFAULT_PROFILE.month,
      year: DEFAULT_PROFILE.year,
      hour: DEFAULT_PROFILE.hour,
      minute: DEFAULT_PROFILE.minute,
      gender: DEFAULT_PROFILE.gender,
      viewYear: DEFAULT_PROFILE.viewYear
    };
    const newChart = generateTuViChart(initialInfo);
    setChart(newChart);
    setInterpretation(generateInterpretation(newChart));
  };

  const containerStyle: React.CSSProperties = isFocusMode
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: '#f3f4f6',
        overflowY: 'auto',
        padding: '1.5rem',
        boxSizing: 'border-box'
      }
    : {
        width: '100%',
        boxSizing: 'border-box'
      };

  return (
    <div className="tuvi-authentic-scope" style={containerStyle}>
      <div className="chart-wrapper">
        {/* Actions Toolbar */}
        <ChartActions
          onReset={handleReset}
          isFocusMode={isFocusMode}
          onToggleFocus={() => setIsFocusMode(!isFocusMode)}
        />

        {/* Form */}
        <ChartForm
          name={name}
          setName={setName}
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
          onSubmit={handleSubmit}
        />

        {/* 4x4 Chart Board */}
        <ChartBoard chart={chart} userName={name} />

        {/* 4 Interpretation Tabs */}
        <InterpretationTabs interpretation={interpretation} />
      </div>
    </div>
  );
};
