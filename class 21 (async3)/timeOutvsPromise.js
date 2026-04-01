console.log("start");

setTimeout(()=>{
    console.log("timeout")
},0);

const p = Promise.resolve();

p.then(()=>{
    console.log("promise")
})

console.log("end");