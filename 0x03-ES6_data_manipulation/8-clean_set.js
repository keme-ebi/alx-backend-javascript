export default function cleanSet(set, startString) {
  let string = [];
  for (const str of set) {
    if (str.startsWith(startString) && startString !== '') {
      string.push(str.slice(startString.length));
    }
  }
  return string.join('-');
}
