function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userId:1,userName:"JohnDoe"})
        },1000)
        // reject("1st Rejected");
    })
}

function fetchUserPost(){
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>resolve(["Post 1","Post 2","Post 3"]),1500)
        reject("2nd Promise Rejected");
    })
}

Promise.allSettled([fetchUserData(),fetchUserPost()])
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


//polyfill of myAllSettled is homeworkd

Promise.myAllSettled = function(arrOfPromises){
    return new Promise((resolve,reject)=>{
        const result = [];
        let count = 0;
        arrOfPromises.forEach((promiseItem,index)=>{
            promiseItem.then((res)=>{
                result[index] = {status:"fulfilled",value:res};
            }).catch((reason)=>{
                result[index] = {status:"rejected", reason:reason};
            }).finally(()=>{
                count++;
                if(count === arrOfPromises.length){
                    resolve(result);
                }
            })
        })
    })
}

Promise.myAllSettled([fetchUserData(),fetchUserPost()])
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

console.log(Promise);