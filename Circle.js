function diameterCircle(radius) {
return 2 * radius;
}

function circumferenceCircle(radius) {
return 2 * Math.PI * radius;
}

function areaCircle(radius) {
return Math.PI * radius * radius;
}

// Contoh penggunaan
let r = 7;
console.log(`Diameter lingkaran dengan jari-jari ${r} adalah ${diameterCircle(r)}`);
console.log(`Keliling lingkaran dengan jari-jari ${r} adalah ${circumferenceCircle(r).toFixed(2)}`);
console.log(`Luas lingkaran dengan jari-jari ${r} adalah ${areaCircle(r).toFixed(2)}`);
