// syntax 
// function cb(resolve,reject){
//     //you can write your executer code;
// }

// const promise1 = new Promise(cb);


function cb(resolve,reject){
    //simulation of coin toss
    setTimeout(()=>{
        const heads = Math.random()>0.5;
        if(heads){
            //it will be fulfilled only if heads comes up;
            resolve("I'm heads");
        }else{
            //if tells comes up, promise is rejected;
            reject("Tail comes up which is failure");
        }
    },1000);
}

const coinTossPromise = new Promise(cb); 
console.log(coinTossPromise);
//till now, it was all creation of the promise;

//consumption of the promise;

function successCb(result){
    console.log(result)    
}
//fulfilled handle with .then
// coinTossPromise.then(successCb);

function failureCb(error){
    console.log(error);
}
//rejection of promise handle with .catch
// coinTossPromise.catch(failureCb);

function finallyCb(){
    console.log("Promise is no longer in pending state")
}

coinTossPromise
    .then(successCb)
    .catch(failureCb)
    .finally(finallyCb);


const coinTossPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const heads = Math.random() > 0.5;
    if (heads) {
      //it will be fulfilled only if heads comes up;
      resolve("I'm heads");
    } else {
      //if tells comes up, promise is rejected;
      reject("Tail comes up which is failure");
    }
  }, 1000);
});

coinTossPromise2.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finally- no longer in pending state")
})