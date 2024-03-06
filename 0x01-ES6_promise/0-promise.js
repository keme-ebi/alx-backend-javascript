export default function getResponseFromApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const works = true;
      if (works) {
        resolve('Everything works fine');
      } else {
        reject("There's an error");
      }
    }, 1000);
  });
}
