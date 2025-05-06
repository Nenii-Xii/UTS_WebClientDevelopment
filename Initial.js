function getInitials(name) {
  return name.split(' ')
    .map(word => word[0].toUpperCase())
    .join('');
}

// Contoh penggunaan
let namaLengkap = "joko widodo";
console.log(`Inisial dari "${namaLengkap}" adalah ${getInitials(namaLengkap)}`);