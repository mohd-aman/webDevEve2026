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

Promise.race([rejectSlowly(),rejectFast(),quickResolve(),resolveSlowly()])
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

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