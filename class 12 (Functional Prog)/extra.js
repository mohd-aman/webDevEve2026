let arr = [1, 2, 4, 7, 9, 6, 40, 15, 8, 20, 30];
//ouput arr - take sqaure of each array element and after doing so
// only give even elements;

// input - [1,2,3,4,5] -> [1,4,9,16,26] -> [4,16] -> 20;
// output - [4,16]

const output = arr
  .map((ele) => ele * ele)
  .filter((ele) => ele % 2 === 0)
  .reduce((acc, ele) => acc + ele);
console.log(output);