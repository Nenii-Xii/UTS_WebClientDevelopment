function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}
function cmToKm(cm) {
  return cm / 100000;
}
function isOdd(n) {
  return n % 2 !== 0;
}
function removeFirstIfMatch(str) {
  if (str.startsWith("Hello ")) return str.slice(6);
  if (str.startsWith("search ")) return str.slice(7);
  return str;
}
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
