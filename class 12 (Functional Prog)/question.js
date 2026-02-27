let myRadiusArray = [2, 3, 4, 5, 8]
// calculating area, circumference and diameter
function calculateArea(myRadiusArray){
    const result = [];
    for(let i=0;i<myRadiusArray.length;i++){
        const radius = myRadiusArray[i];
        const area = 3.14 * radius * radius;
        result.push(area);
    }
    return result;
}
function calculateCircumference(myRadiusArray){
    const result = [];
    for(let i=0;i<myRadiusArray.length;i++){
        const radius = myRadiusArray[i];
        const circumference = 2*3.14*radius;
        result.push(circumference);
    }
    return result;
}

function calculateDiameter(myRadiusArray){
    const result = [];
    for(let i=0;i<myRadiusArray.length;i++){
        const radius = myRadiusArray[i];
        const diameter = 2*radius;
        result.push(diameter)
    }
    return result;
}

let circumferenceArray = calculateCircumference(myRadiusArray);
console.log(circumferenceArray);
let areaArray = calculateArea(myRadiusArray);
console.log(areaArray);
let diameterArray = calculateDiameter(myRadiusArray);
console.log(diameterArray);

//DRY - Do not repeat yourself