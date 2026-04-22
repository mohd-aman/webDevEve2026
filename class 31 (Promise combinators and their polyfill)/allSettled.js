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