const cleanPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Room is Cleaned");
  }, 1000);
});

const garbageClean = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Garbage is gone"), 1000);
  });
};

const iceCream = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Here is your Price - Vanilla"), 1000);
  });
};

cleanPromise
  .then(function (result) {
    console.log(result);
    return garbageClean();
  })
  .then(function (result2) {
    console.log(result2);
    return iceCream();
  })
  .then(function (result3) {
    console.log(result3);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally ");
  });
