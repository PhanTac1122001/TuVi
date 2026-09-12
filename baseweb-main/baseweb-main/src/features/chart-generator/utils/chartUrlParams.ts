import { UserInfo } from '../types/chart.types';

export const RECENT_CHARTS_STORAGE_KEY = 'tuvi_taman_recent_charts';

export interface RecentChartItem {
  id: string;
  name: string;
  gender: 'Nam' | 'Nữ';
  birthDateDisplay: string;
  hourDisplay: string;
  viewYear: number;
  queryString: string;
  createdAt: number;
}

export function serializeUserInfoToQueryParams(info: UserInfo): string {
  const params = new URLSearchParams();
  if (info.name && info.name.trim()) {
    params.set('name', info.name.trim());
  } else {
    params.set('name', 'Vô Danh');
  }
  params.set('day', String(info.day));
  params.set('month', String(info.month));
  params.set('year', String(info.year));
  params.set('hour', String(info.hour));
  params.set('minute', String(info.minute));
  params.set('gender', info.gender);
  params.set('viewYear', String(info.viewYear));
  params.set('calendarType', info.calendarType || 'duong');
  params.set('isLeapMonth', info.isLeapMonth ? '1' : '0');

  // Tùy biến xem vận
  params.set('showHanNam', info.showHanNam ? '1' : '0');
  params.set('luuTuHoa', info.luuTuHoa !== false ? '1' : '0');
  params.set('luuTuanTriet', info.luuTuanTriet !== false ? '1' : '0');
  params.set('luuDaiVan', info.luuDaiVan !== false ? '1' : '0');
  params.set('luuSaoKhac', info.luuSaoKhac !== false ? '1' : '0');
  params.set('locKyNhap', info.locKyNhap !== false ? '1' : '0');
  params.set('khoaQuyenNhap', info.khoaQuyenNhap !== false ? '1' : '0');
  params.set('xemVanTheo', info.xemVanTheo || 'LuuNien');

  return params.toString();
}

export function parseUserInfoFromQueryParams(searchParams: URLSearchParams): UserInfo {
  const name = searchParams.get('name') || 'Nguyễn Văn An';
  const day = parseInt(searchParams.get('day') || '1', 10);
  const month = parseInt(searchParams.get('month') || '12', 10);
  const year = parseInt(searchParams.get('year') || '2001', 10);
  const hour = parseInt(searchParams.get('hour') || '13', 10);
  const minute = parseInt(searchParams.get('minute') || '30', 10);
  const gender = (searchParams.get('gender') === 'Nữ' ? 'Nữ' : 'Nam') as 'Nam' | 'Nữ';
  const viewYear = parseInt(searchParams.get('viewYear') || '2026', 10);
  const calendarType = (searchParams.get('calendarType') === 'am' ? 'am' : 'duong') as 'duong' | 'am';
  const isLeap = searchParams.get('isLeapMonth');
  const isLeapMonth = isLeap === '1' || isLeap === 'true';

  const parseBoolParam = (paramName: string, defaultVal = true): boolean => {
    const val = searchParams.get(paramName);
    if (val === null) return defaultVal;
    return val === '1' || val === 'true';
  };

  const showHanNam = parseBoolParam('showHanNam', false);
  const luuTuHoa = parseBoolParam('luuTuHoa', true);
  const luuTuanTriet = parseBoolParam('luuTuanTriet', true);
  const luuDaiVan = parseBoolParam('luuDaiVan', true);
  const luuSaoKhac = parseBoolParam('luuSaoKhac', true);
  const locKyNhap = parseBoolParam('locKyNhap', true);
  const khoaQuyenNhap = parseBoolParam('khoaQuyenNhap', true);
  const xemVanRaw = searchParams.get('xemVanTheo');
  const xemVanTheo = (xemVanRaw === 'TieuHan' || xemVanRaw === 'LuuNienDaiVan' ? xemVanRaw : 'LuuNien');

  return {
    name,
    day: isNaN(day) ? 1 : day,
    month: isNaN(month) ? 12 : month,
    year: isNaN(year) ? 2001 : year,
    hour: isNaN(hour) ? 13 : hour,
    minute: isNaN(minute) ? 30 : minute,
    gender,
    viewYear: isNaN(viewYear) ? 2026 : viewYear,
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
}

export function saveRecentChart(info: UserInfo): void {
  try {
    const raw = localStorage.getItem(RECENT_CHARTS_STORAGE_KEY);
    let list: RecentChartItem[] = raw ? JSON.parse(raw) : [];

    const query = serializeUserInfoToQueryParams(info);
    const birthDisplay = `${info.day}/${info.month}/${info.year} (${info.calendarType === 'am' ? 'Âm' : 'Dương'})`;
    const hourDisplay = `${String(info.hour).padStart(2, '0')}:${String(info.minute).padStart(2, '0')}`;

    // Filter out existing identical query
    list = list.filter((item) => item.queryString !== query);

    const newItem: RecentChartItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: info.name?.trim() || 'Vô Danh',
      gender: info.gender,
      birthDateDisplay: birthDisplay,
      hourDisplay,
      viewYear: info.viewYear,
      queryString: query,
      createdAt: Date.now()
    };

    // Keep at most 8 recent charts
    const updated = [newItem, ...list].slice(0, 8);
    localStorage.setItem(RECENT_CHARTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Cannot save recent chart:', err);
  }
}

export function getRecentCharts(): RecentChartItem[] {
  try {
    const raw = localStorage.getItem(RECENT_CHARTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Cannot get recent charts:', err);
    return [];
  }
}

export function removeRecentChart(id: string): RecentChartItem[] {
  try {
    const raw = localStorage.getItem(RECENT_CHARTS_STORAGE_KEY);
    let list: RecentChartItem[] = raw ? JSON.parse(raw) : [];
    list = list.filter((item) => item.id !== id);
    localStorage.setItem(RECENT_CHARTS_STORAGE_KEY, JSON.stringify(list));
    return list;
  } catch (err) {
    console.warn('Cannot remove recent chart:', err);
    return [];
  }
}

export function clearAllRecentCharts(): void {
  try {
    localStorage.removeItem(RECENT_CHARTS_STORAGE_KEY);
  } catch (err) {
    console.warn('Cannot clear recent charts:', err);
  }
}

