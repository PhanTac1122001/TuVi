import assert from 'assert';
import { generateTuViChart } from './tuviEngine';
import { analyzeStarGroups, getPalaceStarGroups, getTamHopStarGroups } from './starGroupEngine';
import { generateInterpretation } from './tuviInterpreter';

console.log('=== RUNNING STAR GROUP ENGINE TESTS ===\n');

function testStarGroupDetection() {
  console.log('Test 1: Phân tích bộ sao phụ tinh cát & hung cho Profile mặc định');
  const chart = generateTuViChart({
    day: 1,
    month: 12,
    year: 2001,
    hour: 13,
    minute: 30,
    gender: 'Nam',
    viewYear: 2026
  });

  const analysis = analyzeStarGroups(chart.palaces);

  console.log(`- Tổng sao cát: ${analysis.statistics.totalGoodStars}`);
  console.log(`- Tổng sao hung: ${analysis.statistics.totalBadStars}`);
  console.log(`- Số bộ cát tìm thấy: ${analysis.goodGroups.length}`);
  console.log(`- Số bộ hung tìm thấy: ${analysis.badGroups.length}`);
  console.log(`- Đánh giá: ${analysis.statistics.balanceStatus}`);

  assert(analysis.goodGroups.length > 0, 'Phải phát hiện được ít nhất 1 bộ sao cát');
  assert(analysis.badGroups.length > 0, 'Phải phát hiện được ít nhất 1 bộ sao hung');
  assert(analysis.statistics.totalGoodStars > 0, 'Phải có sao cát');
  assert(analysis.statistics.totalBadStars > 0, 'Phải có sao hung');

  // Log all found good groups
  console.log('\nCác bộ Cát Tinh phát hiện:');
  analysis.goodGroups.forEach(g => {
    console.log(` + ${g.name} (${g.category}) - ${g.scope} tại: ${g.prominentPalaces.join(', ')}`);
  });

  // Log all found bad groups
  console.log('\nCác bộ Hung Sát Tinh phát hiện:');
  analysis.badGroups.forEach(g => {
    console.log(` - ${g.name} (${g.category}) - ${g.scope} tại: ${g.prominentPalaces.join(', ')}`);
  });

  // Test getPalaceStarGroups
  const menhPalace = chart.palaces.find(p => p.isMenh)!;
  const menhGroups = getPalaceStarGroups(menhPalace.index, analysis, chart.palaces);
  console.log(`\nCung Mệnh (${menhPalace.chi}) có các bộ cát:`, menhGroups.good);
  console.log(`Cung Mệnh (${menhPalace.chi}) có các bộ hung:`, menhGroups.bad);

  // Test getTamHopStarGroups
  const tamHopMenh = getTamHopStarGroups(menhPalace.index, chart.palaces);
  console.log(`\nTam Hợp Cung Mệnh (${tamHopMenh.tamHopChiString}) có ${tamHopMenh.goodGroups.length} bộ cát:`);
  tamHopMenh.goodGroups.forEach(g => {
    console.log(`  * ${g.name} (${g.scope})`);
  });

  // Test cung khác: Cung Nô Bộc (Dậu)
  const noBocPalace = chart.palaces.find(p => p.name === 'Nô Bộc')!;
  const tamHopNoBoc = getTamHopStarGroups(noBocPalace.index, chart.palaces);
  console.log(`\nTam Hợp Cung Nô Bộc (${tamHopNoBoc.tamHopChiString}) có ${tamHopNoBoc.goodGroups.length} bộ cát:`);
  tamHopNoBoc.goodGroups.forEach(g => {
    console.log(`  * ${g.name} (${g.scope})`);
  });

  assert(tamHopMenh.tamHopChiString !== tamHopNoBoc.tamHopChiString, 'Hai tam hợp khác nhau phải có chi khác nhau');
  assert(tamHopMenh.goodGroups.length !== tamHopNoBoc.goodGroups.length, 'Hai tam hợp khác nhau có bộ sao khác nhau');

  // Kiểm tra palaceStarGroupsMap chỉ chứa bộ sao cho các cung trong tam hợp
  assert(tamHopNoBoc.palaceStarGroupsMap[noBocPalace.index].good.length > 0, 'Cung Nô Bộc phải có bộ sao trong tam hợp của nó');
  assert(tamHopNoBoc.palaceStarGroupsMap[menhPalace.index].good.length === 0, 'Cung Mệnh không thuộc tam hợp Nô Bộc nên phải rỗng');

  // Test full interpretation generation
  const interpretation = generateInterpretation(chart);
  assert(interpretation.starGroupAnalysis !== undefined, 'Interpretation phải chứa starGroupAnalysis');
  assert(interpretation.palaceReadings.length === 12, 'Phải có 12 cung luận giải');
  assert(interpretation.palaceReadings[0].goodGroups !== undefined, 'PalaceReading phải có goodGroups');
  assert(interpretation.palaceReadings[0].badGroups !== undefined, 'PalaceReading phải có badGroups');

  console.log('\n-> PASS Test 1 & Tam Hợp Detection\n');
}

testStarGroupDetection();
console.log('=== ALL STAR GROUP ENGINE TESTS PASSED! ===');
