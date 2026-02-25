// Q1 Write a function convertTemperature(temp, unit) that:
// Converts Celsius to Fahrenheit and vice versa.
// Returns the converted temperature.
// Example: convertTemperature(100, "C") → 212F.

function convertTemperature(temp,unit){
    if(unit === "C" || unit === "c"){
        return temp*9/5 + 32 + " F";
    }else if(unit === "F" || unit === "f"){
        return (temp - 32)*5/9  + " C";
    }else{
        return "Please enter a valid unit";
    }
}

console.log(convertTemperature(100,"C")); // 212F
console.log(convertTemperature(32,"F"));// 0C
console.log(convertTemperature(100,"D"));