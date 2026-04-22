function quickResolve(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Quickly resolved"),1000);
    })
}

function resolveSlowly(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("slowly resolved"),2000);
    })
}

function rejectFast(){
    return new Promise((resolve,reject)=>{
        reject("Rejected fast");
    })
}

function rejectSlowly(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('rejected slowly')
        },1500)
    })
}

Promise.any([rejectSlowly(),rejectFast(),quickResolve(),resolveSlowly()])
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

// Promise.race([rejectSlowly(),rejectFast(),quickResolve(),resolveSlowly()])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.any([rejectSlowly(),rejectFast(),resolveSlowly()])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.any([rejectSlowly(),rejectFast()])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


Promise.myAny = function(arrOfPromises){
    return new Promise((resolve,reject)=>{
        if(arrOfPromises.length === 0){
            reject(new AggregateError("No Promises were provided"));
        }
        let rejections = [];
        let count = 0;
        arrOfPromises.forEach((promiseItem,index)=>{
            promiseItem.then((res)=>{
                resolve(res);
            }).catch((reason)=>{
                count++;
                rejections[index] = reason;
                if(count === arrOfPromises.length){
                    reject(new AggregateError(rejections,'All Promises were rejected'));
                }
            })
        })
    })
}

Promise.any([rejectSlowly(),rejectFast(),quickResolve(),resolveSlowly()])
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

Promise.myAny([rejectSlowly(),rejectFast()])
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})