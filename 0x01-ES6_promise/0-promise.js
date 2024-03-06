export default function getResponseFromApi() {
  return new Promise((resolve, reject) => {
    const works = true;
    if (works) {
      resolve('Everything works fine');
    } else {
      reject("There's an error");
    }
  });
}
