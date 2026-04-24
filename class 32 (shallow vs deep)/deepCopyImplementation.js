let originalObj = {
    name:"Alice",
    details:{
        age:30,
        hobbies:['reading','cycling','hiking']
    },
    greet(){
        console.log(`Hello, my name is ${this.name} !`);
    }
}

function deepClone(obj){
// argument -> can be Array, function, object, string, null, undefined, number 
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }
    if(obj instanceof Array){
        let copy = [];
        for(let i=0;i<obj.length;i++){
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    if(obj instanceof Function){
        return obj.bind({});
    }
    if(obj instanceof Object){
        let copy = {};
        for(let attr in obj){
            if(obj.hasOwnProperty(attr)){
                //recursive call for each property 
                copy[attr] = deepClone(obj[attr])
            }
        }
        return copy;
    }
    throw new Error(`Unable to copy ${obj}! It's type is not supported `)
}

const copyObj = deepClone(originalObj);

console.log(copyObj);
copyObj.greet();

copyObj.name = "John";
copyObj.details.age = 50;
console.log(copyObj);
console.log(originalObj);

