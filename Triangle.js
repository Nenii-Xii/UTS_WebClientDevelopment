function calculateThirdAngle(angle1, angle2) {
  return 180 - (angle1 + angle2);
}

// Contoh penggunaan
let sudutA = 60;
let sudutB = 80;
console.log(`Sudut ketiga dari segitiga dengan sudut ${sudutA} dan ${sudutB} adalah ${calculateThirdAngle(sudutA, sudutB)} derajat`);