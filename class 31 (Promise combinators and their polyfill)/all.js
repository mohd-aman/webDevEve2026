function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userId:1,userName:"JohnDoe"})
        },1000)
    })
}

function fetchUserPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(["Post 1","Post 2","Post 3"]),1500)
        // reject("Rejected");
    })
}

Promise.all([fetchUserData(),fetchUserPost()]) // returns a single promise 
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

Promise.myAll = function(arrOfPromises){
    const returnedPromise =  new Promise((resolve,reject)=>{
        const result = [];
        let count = 0;
        arrOfPromises.forEach((promiseItem,index)=>{
            promiseItem.then((res)=>{
                result[index] = res;
                count++;
                if(count === arrOfPromises.length){
                    resolve(result);
                }
            }).catch((reason)=>{
                reject(reason);
            })
        })
    })
    return returnedPromise;
}

Promise.myAll([fetchUserData(),fetchUserPost()]) // returns a single promise 
.then((result)=>{
    console.log("My all response")
    console.log(result);
}).catch((error)=>{
    console.log(error);
})