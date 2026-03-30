function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for Coffee Placed");
    } else {
      reject("Order cannot be Placed");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and Served`);
  });
}

function genreateBill(processedOrder) {
  return new Promise(function (resolve) {
    resolve(`${processedOrder} and Bill generated with 200Rs`);
  });
}




placeOrder('coffee').then(function(result){
    return processOrder(result);
}).then(function(result2){
    return genreateBill(result2);
}).then(function(result3){
    console.log(result3);
}).catch(function(error){
    console.log(error);
})

async function serveCoffee() {
  try {
    const result1 = await placeOrder("coffee");
    const result2 = await processOrder(result1);
    const result3 = await genreateBill(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

serveCoffee();