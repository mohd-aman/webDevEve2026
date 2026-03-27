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
            resolve();
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

function successCb(){
    console.log("It's Head - Promise is fulfilled")    
}
//fulfilled handle with .then
// coinTossPromise.then(successCb);

function failureCb(error){
    console.log(error);
    console.log("It's Tail - Promise rejected")
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