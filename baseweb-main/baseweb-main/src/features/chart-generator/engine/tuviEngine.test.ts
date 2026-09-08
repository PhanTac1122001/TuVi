import assert from 'assert';
import { generateTuViChart } from './tuviEngine';

console.log('=== RUNNING NGUYET HAN & TIEU VAN TESTS (NAM PHAI STANDARD) ===\n');

function testNamDầnNgọTuất() {
  console.log('Test 1: Nam sinh năm Dần (Tam hợp Dần - Ngọ - Tuất), xem hạn 2026 (Bính Ngọ)');
  const chart = generateTuViChart({
    day: 6,
    month: 6,
    year: 1986,
    hour: 4,
    minute: 0,
    gender: 'Nam',
    viewYear: 2026
  });

  const thinPalace = chart.palaces[4];
  assert.strictEqual(thinPalace.tieuVanChi, 'Dần', `Cung Thìn (index 4) phải có Chi tiểu vận là Dần, nhưng nhận được ${thinPalace.tieuVanChi}`);
  assert.strictEqual(chart.palaces[5].tieuVanChi, 'Mão', `Cung Tỵ (index 5) phải là Mão, nhưng nhận được ${chart.palaces[5].tieuVanChi}`);
  assert.strictEqual(chart.palaces[6].tieuVanChi, 'Thìn', `Cung Ngọ (index 6) phải là Thìn, nhưng nhận được ${chart.palaces[6].tieuVanChi}`);

  const pTieuHan = chart.palaces.findIndex(p => p.tieuVanChi === 'Ngọ');
  const expectedMonth1 = (pTieuHan - (chart.lunarInfo.lunarMonth - 1) + chart.lunarInfo.hourChiIndex + 120) % 12;
  assert.strictEqual(chart.palaces[expectedMonth1].tieuVanMonth, 'Tháng 1', `Cung Tháng 1 phải ở index ${expectedMonth1}`);

  const months = chart.palaces.map(p => p.tieuVanMonth);
  for (let m = 1; m <= 12; m++) {
    assert(months.includes(`Tháng ${m}`), `Thiếu Tháng ${m} trong 12 cung`);
  }
  console.log('-> PASS Test 1\n');
}

function testNuTỵDậuSửu() {
  console.log('Test 2: Nữ sinh năm Tân Tỵ (Tam hợp Tỵ - Dậu - Sửu), xem hạn 2026 (Bính Ngọ)');
  const chart = generateTuViChart({
    day: 1,
    month: 12,
    year: 2001,
    hour: 6,
    minute: 0,
    gender: 'Nữ',
    viewYear: 2026
  });

  const muiPalace = chart.palaces[7];
  assert.strictEqual(muiPalace.tieuVanChi, 'Tỵ', `Cung Mùi (index 7) phải có Chi tiểu vận là Tỵ`);
  assert.strictEqual(chart.palaces[6].tieuVanChi, 'Ngọ', `Cung Ngọ (index 6) phải có Chi tiểu vận là Ngọ`);
  assert.strictEqual(chart.palaces[5].tieuVanChi, 'Mùi', `Cung Tỵ (index 5) phải có Chi tiểu vận là Mùi`);

  const pTieuHan = chart.palaces.findIndex(p => p.tieuVanChi === 'Ngọ');
  assert.strictEqual(pTieuHan, 6, `Cung Tiểu Hạn năm Ngọ của Nữ tuổi Tỵ phải ở index 6 (Ngọ)`);

  const expectedMonth1 = (pTieuHan - (chart.lunarInfo.lunarMonth - 1) + chart.lunarInfo.hourChiIndex + 120) % 12;
  assert.strictEqual(chart.palaces[expectedMonth1].tieuVanMonth, 'Tháng 1');

  for (let i = 0; i < 12; i++) {
    const expectedMonthNum = ((i - expectedMonth1 + 120) % 12) + 1;
    assert.strictEqual(chart.palaces[i].tieuVanMonth, `Tháng ${expectedMonthNum}`);
  }
  console.log('-> PASS Test 2\n');
}

function testNamThânTýThìn() {
  console.log('Test 3: Nam sinh năm Canh Thìn (Tam hợp Thân - Tý - Thìn)');
  const chart = generateTuViChart({
    day: 15,
    month: 8,
    year: 2000,
    hour: 12,
    minute: 0,
    gender: 'Nam',
    viewYear: 2026
  });

  assert.strictEqual(chart.palaces[10].tieuVanChi, 'Thìn', `Cung Tuất (index 10) phải là Thìn`);
  assert.strictEqual(chart.palaces[11].tieuVanChi, 'Tỵ', `Cung Hợi (index 11) phải là Tỵ`);
  console.log('-> PASS Test 3\n');
}

function testNuHợiMãoMùi() {
  console.log('Test 4: Nữ sinh năm Kỷ Mão (Tam hợp Hợi - Mão - Mùi)');
  const chart = generateTuViChart({
    day: 20,
    month: 3,
    year: 1999,
    hour: 8,
    minute: 0,
    gender: 'Nữ',
    viewYear: 2026
  });

  assert.strictEqual(chart.palaces[1].tieuVanChi, 'Mão', `Cung Sửu (index 1) phải là Mão`);
  assert.strictEqual(chart.palaces[0].tieuVanChi, 'Thìn', `Cung Tý (index 0) phải là Thìn`);
  console.log('-> PASS Test 4\n');
}

function testDefaultProfile() {
  console.log('Test 5: Profile mặc định UI (Nguyễn Văn An, 01/12/2001, 13h30, Nam, xem 2026)');
  const chart = generateTuViChart({
    day: 1,
    month: 12,
    year: 2001,
    hour: 13,
    minute: 30,
    gender: 'Nam',
    viewYear: 2026
  });

  const pTieuHan = chart.palaces.findIndex(p => p.tieuVanChi === 'Ngọ');
  assert.strictEqual(pTieuHan, 8, `Cung Tiểu Hạn năm Bính Ngọ của Nam Tân Tỵ phải là index 8 (Thân)`);

  assert.strictEqual(chart.palaces[6].tieuVanMonth, 'Tháng 1');
  assert.strictEqual(chart.palaces[7].tieuVanMonth, 'Tháng 2');
  assert.strictEqual(chart.palaces[8].tieuVanMonth, 'Tháng 3');
  assert.strictEqual(chart.palaces[4].tieuVanMonth, 'Tháng 11');
  console.log('-> PASS Test 5\n');
}

function testThienPhuTuViVietnamImage() {
  console.log('Test 6: Lá số thực tế từ ảnh TuViVietnam.vn (1999 Kỷ Mão, 28/06/1999, 01h45)');
  const chart = generateTuViChart({
    day: 28,
    month: 6,
    year: 1999,
    hour: 1,
    minute: 45,
    gender: 'Nam',
    viewYear: 2026
  });

  const noBoc = chart.palaces[10];
  assert.strictEqual(noBoc.name, 'Nô Bộc');
  assert.strictEqual(noBoc.chi, 'Tuất');
  assert.strictEqual(noBoc.tieuVanChi, 'Tí');
  assert.strictEqual(noBoc.tieuVanMonth, 'Tháng 10');

  const liemTrinh = noBoc.majorStars.find(s => s.name === 'Liêm Trinh');
  const thienPhu = noBoc.majorStars.find(s => s.name === 'Thiên Phủ');
  assert(liemTrinh, 'Phải có Liêm Trinh tại Tuất');
  assert(thienPhu, 'Phải có Thiên Phủ tại Tuất');
  assert.strictEqual(liemTrinh.strength, 'M', 'Liêm Trinh tại Tuất phải là (M)');
  assert.strictEqual(thienPhu.strength, 'V', 'Thiên Phủ tại Tuất phải là (V) chuẩn TuViVietnam.vn');
  console.log('-> PASS Test 6: Thiên Phủ(V) và toàn bộ cung Nô Bộc chuẩn 100% ảnh TuViVietnam.vn!\n');
}

try {
  testNamDầnNgọTuất();
  testNuTỵDậuSửu();
  testNamThânTýThìn();
  testNuHợiMãoMùi();
  testDefaultProfile();
  testThienPhuTuViVietnamImage();
  console.log('=== ALL 6 TESTS PASSED SUCCESSFULLY! ===');
} catch (err) {
  console.error('Test Failed:', err);
  process.exit(1);
}
