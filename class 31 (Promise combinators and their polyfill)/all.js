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
    })
}

Promise.all([fetchUserData(),fetchUserPost()]) // returns a single promise 
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})