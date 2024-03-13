export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !startString) {
    return '';
  }

  const string = [];
  for (const str of set) {
    if (typeof str !== 'string') return '';
    if (str.startsWith(startString)) {
      string.push(str.substring(startString.length));
    }
  }
  const res = string.join('-');

  return res;
}
