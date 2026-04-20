const arr = [3,5,4,7,4,2,1];
const cb = (ele)=>ele*ele
const squareArr = arr.map(cb);
console.log(squareArr);

//How can we check if myMap method exist in Array prototype.

if(!Array.prototype.myMap){
    //implement
    Array.prototype.myMap = function(callback){
        if(typeof callback !== 'function'){
            throw new Error(callback + " is not a function");
        }
        console.log(this); // array
        if(!Array.isArray(this)){
            throw new Error(this + " is not an array");
        }
        const result = [];
        for(let i=0;i<this.length;i++){
            const ele = this[i];
            const res = callback(ele);
            result.push(res);
        }
        return result;
    }
}
const sqArr = arr.myMap(cb);
console.log(sqArr);