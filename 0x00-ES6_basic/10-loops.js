export default function appendToEachArrayValue(array, appendString) {
  const newArray = new Array();
  for (let value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
