export default function appendToEachArrayValue(array, appendString) {
  const newArray = new Array();
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
