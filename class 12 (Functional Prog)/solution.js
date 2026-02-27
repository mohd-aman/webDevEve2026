let myRadiusArray = [2, 3, 4, 5, 8];
function generic(array, logic) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const radius = array[i];
    const calucaledValue = logic(radius);//callback function
    result.push(calucaledValue);
  }
  return result;
}
const diamaterArray = generic(myRadiusArray,function(radius){
    return 2*radius;
})
console.log(diamaterArray);
const circumferenceArray = generic(myRadiusArray,function(radius){
    return 2*3.14*radius
})
console.log(circumferenceArray);
const calculateArea = function(radius){
    return 3.14 * radius *radius;
}
const areaArray = generic(myRadiusArray,calculateArea);
console.log(areaArray);