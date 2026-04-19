const car = {
    name:"Mercedes",
    color:"black"
}

function buyCar(price,alloys){
    console.log(`I bought a ${this.color} ${this.name} of ${price}`);
    console.log("Alloys", alloys);
}

// buyCar.call(car,3);

Function.prototype.myCall = function(obj={},...arg){
    // ...args -3,4,67,8,9  -> [3,4,67,8,9]
    if(typeof this !== 'function'){
        throw new Error(this + "is not callable")
    }
    // console.log(this); //fxn
    // console.log(obj);// context passed as params 
    // attaching a temp key fn and corresponding to it function as value
    obj._fn = this; 
    // console.log(obj);
    //invoke fxn through obj
    // ...[3,4,67,8,9] -> 3,4,67,8,9 
    obj._fn(...arg);
    // deleting the temp key fn
    delete obj.fn;
    // console.log(obj);
}

Function.prototype.myApply = function(obj={},arr=[]){
    if(typeof this !== 'function'){
        throw new Error(this + "is not callable")
    }
    if(!Array.isArray(arr)){
        throw new Error(arr + "is not an array");
    }
    // console.log(this)//?fxn
    obj._fn = this;
    // ...[3,5,6]-> 3,5,6 
    obj._fn(...arr);
    delete obj._fn;
}

buyCar.myCall(car,3); // our own call polyfill
buyCar.myApply(car,[3]);

Function.prototype.myBind = function(obj,...args){
    const targetFxn = this;//fxn;
    return function(...args2){
        return targetFxn.call(obj,...args,...args2);
    }
}

const bindedFxn = buyCar.myBind(car,3);
bindedFxn(true);
bindedFxn(false);