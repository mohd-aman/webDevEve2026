function quickResolve(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Quickly resolved"),5000);
    })
}

function slowResolveOrFastReject(){
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>resolve("slowly resolved"),2000);
        setTimeout(()=>reject("fast reject"),1000)
    })
}

Promise.race([quickResolve(),slowResolveOrFastReject()])
.then((result)=>{
    console.log("resolved");
    console.log(result);
}).catch((error)=>{
    console.log("rejected");
    console.log(error);
})



Promise.myRace = function(arrOfPromises){
    return new Promise((resolve,reject)=>{
        if(arrOfPromises.length === 0){
            throw new Error("Cannot perform Promise.myRace on an empty array");
        }
        arrOfPromises.forEach((promiseItem)=>{
            promiseItem.then((res)=>{
                resolve(res);
            }).catch((reason)=>{
                reject(reason);
            })
        })
    })
}

Promise.myRace([quickResolve(),slowResolveOrFastReject()])
.then((result)=>{
    console.log("resolved");
    console.log(result);
}).catch((error)=>{
    console.log("rejected");
    console.log(error);
})
