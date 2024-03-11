export default function cleanSet(set, startstring) {
  let string = [];
  for (const str of set) {
    if (str.includes(startstring) && startstring !== '') {
      string.push(str.slice(3));
    }
  }
  return string.join('-');
}
