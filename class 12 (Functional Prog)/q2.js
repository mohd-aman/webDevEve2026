// You are given an array of numbers and you need to calculate 
// the sum of all the elements of an array.

let arr = [1, 2, 3, 4, 5];

function calculateSum(arr){
    let res = 0;
    for(let i=0;i<arr.length;i++){
        const ele = arr[i];
        res = res+ele;
    }
    return res;
}

const sum = calculateSum(arr);
console.log(sum);
