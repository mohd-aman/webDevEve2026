const arr = [1,2,3,4,5,6,7];
//return an array having square of each element of given input array;
// output - [1,4,9,16,25,36,49]

const logic = function(ele){
    return ele*ele;
}

const squareArray = arr.map(logic)
console.log(squareArray);
const areaArray = arr.map(function(ele){
    return ele*ele *3.14;
})
console.log(areaArray);

// function generic(array, logic) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     const radius = array[i];
//     const calucaledValue = logic(radius);//callback function
//     result.push(calucaledValue);
//   }
//   return result;
// }

// const squareArray = generic(arr,function(ele){
//     return ele *ele;
// })
// console.log(squareArray)


//Homework
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500]; //unit is INR or Dollar
const inrToUsd = 92;
