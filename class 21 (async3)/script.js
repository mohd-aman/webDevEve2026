const { resolve } = require("node:dns");

const p = new Promise(function(resolve,reject){
    setTimeout(()=>resolve('file 1 data'),1000);
})

const p2 = new Promise(function(resolve,reject){
            resolve("2nd Data");
        })

// async function fetchData(){
//     return p;
// }


// const data = fetchData();

// console.log(data);

// data.then(function(result){
//     console.log(result);
// })




//await 

async function fetchData(){
    p.then(function(data){
        console.log(data);
        return p2
    }).then(function(data2){
        console.log(data2);
    })
    const data = await p;
    console.log(data);
    const data2 = await p2;
    console.log(data2);
}

// fetchData();

console.log("start");
async function handlePromise() {
  try {
    console.log("Scaler");
    const val = await p;
    console.log(val);
    console.log("end");
  } catch (error) {
    console.log(error);
  }
}

handlePromise();

console.log("end");