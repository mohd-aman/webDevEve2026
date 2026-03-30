console.log("1: Start");
async function complexFlow() {
  console.log("2: Enter async function");
  const promise1 = new Promise((resolve) => {
    console.log("3: Promise executor");
    setTimeout(() => {
      console.log("4: Timeout inside promise");
      resolve("Resolved value");
    }, 0);
  });
  console.log("5: After promise creation");
  const result = await promise1;
  console.log("6: After await:", result);
  Promise.resolve()
    .then(() => {
      console.log("7: Nested promise then");
    })
    .then(() => {
      console.log("8: Second nested then");
    });
  console.log("9: End of async function");
}
complexFlow();
console.log("10: After calling complexFlow");
setTimeout(() => {
  console.log("11: Outer timeout");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("12: Outer promise then 1");
  })
  .then(() => {
    console.log("13: Outer promise then 2");
  });
console.log("14: End of script");
