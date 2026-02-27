let myArr = [1, 2, 5, 7, 8, 2, 6, 9, 13, 17];
//output - [2,8,2,6] not make any change in the input array;
function logic(ele){
    if(ele%2 === 0){
        return true;
    }else{
        return false;
    }
}
const evenArr = myArr.filter(logic);
console.log(evenArr);
const oddArr = myArr.filter(function(ele){
    return ele%2===1;
})
console.log(oddArr);
console.log(myArr);

//Homework question;
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
//we want new array ouput having only positive transaction;
//[1000, 3000, 4000, 2000, 3800]