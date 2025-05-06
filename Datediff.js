function dateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Contoh penggunaan
let tgl1 = '2025-05-01';
let tgl2 = '2025-05-06';
console.log(`Selisih hari antara ${tgl1} dan ${tgl2} adalah ${dateDifference(tgl1, tgl2)} hari`);