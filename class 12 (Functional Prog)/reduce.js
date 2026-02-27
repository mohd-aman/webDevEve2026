let arr = [1, 2, 3, 4, 5];
//calculate sum of all elements;

function logic(acc,ele){
    return acc+ele;
}
const sum = arr.reduce(logic);
//when we don't pass initial value, array's 0th index value becomes acc initial value;
console.log(sum);

