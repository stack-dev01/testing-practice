function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  let base;

  if (code >= 65 && code <= 90) base = 65; // A-Z
  else if (code >= 97 && code <= 122) base = 97; // a-z
  else return char; // not a letter

  const offset = (((code - base + shift) % 26) + 26) % 26;
  return String.fromCharCode(base + offset);
}

export default function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
}