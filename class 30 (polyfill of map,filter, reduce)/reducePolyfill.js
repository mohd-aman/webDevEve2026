const arr = [3,5,6,7,2,3];
const cb = (acc,ele) => acc+ele;
const initalValue = 0;
const sum = arr.reduce(cb);
console.log(sum);

if(!Array.prototype.myReduce){
    [].myReduce(cb);
    Array.prototype.myReduce = function(callback,initialValue){
        if(typeof callback !== 'function'){
            throw new Error(callback + " is not a function");
        }
        // console.log(this)//?
        if(!Array.isArray(this)){
            throw new Error(this + " is not an array");
        }
        if(this.length === 0 && arguments.length === 1){
            throw new TypeError('Reduce of empty array with no initial value');
        }
        let result = arguments.length>=2?initalValue:this[0];
        const startIndex = arguments.length>=2?0:1;
        for(let i=startIndex;i<this.length;i++){
            const ele = this[i];
            result = callback(result,ele);
        }
        return result;
    }
}

console.log([].length)
console.log(arr.myReduce(cb,0));
