const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have resolved");
    }, 1000);
  } else {
    reject("I have  failed");
  }
});
myPromise.then((value) => console.log(value));