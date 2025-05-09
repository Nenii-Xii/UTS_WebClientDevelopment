function removeChar(str, charToRemove) {
  return str.replaceAll(charToRemove, '');
}
console.log(removeChar("hello", "l")); // Output: "heo"
