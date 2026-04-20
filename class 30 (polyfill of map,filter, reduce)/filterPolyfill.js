const arr = [2,35,6,7,8,9,4,3,4,2];
const cb = (ele)=>ele%2 === 0;
const evenArr = arr.filter(cb);

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback){
        if(typeof callback !== 'function'){
            throw new Error(callback + " is not a function");
        }
        if(!Array.isArray(this)){
            throw new Error(this + "is not an array");
        }
        const result = [];
        for(let i=0;i<this.length;i++){
            const ele = this[i];
            const res = callback(ele);
            if(res){
                result.push(ele);
            }
        }
        return result;
    }
}

const even2Arr = arr.myFilter(cb);
console.log(even2Arr);
const odd = arr.myFilter((ele)=>ele%2 !== 0);
console.log(odd);


const sparseArr = [2,4,5,6,,8,9,,0];
console.log(sparseArr);
console.log(sparseArr.filter((ele)=>ele%2===0));
console.log(sparseArr.map((ele)=>ele*2));