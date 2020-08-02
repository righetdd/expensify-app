const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    /*resolve("This is my resolved data");
    resolve("This is my other resolved data");*/
    resolve({
      name: "Toto",
      age: 110,
    });
    reject("Something went wrong");
  }, 5000);
});

console.log("Before");

promise
  .then((data) => {
    console.log("1", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 5000);
    });
  })
  .then((str) => {
    console.log("does this run ?", str);
  })
  .catch((error) => {
    console.log("error ", error);
  });
/*promise.then((data) => {
  console.log("2", data);
});*/
console.log("After");
