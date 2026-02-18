// objects key-value pair 

// let user = {}; // new Oject();
// console.log(user);
// let name = 'abc'
// let personObject = {
//     name:"Alan",
//     age:18,
//     phone:879789798
// }

// console.log(personObject);
// //name of personObject
// //dot notation
// console.log(personObject.name); // treats name as 'name' means string

// // console.log(personObject[name]) // treats name as variable and try to look for name variable
// console.log(personObject['name']);
// let a = 'phone'
// //bracker notation
// console.log(personObject[a]); // personObject.phone
// console.log(personObject[a]);
// console.log(personObject[a]);


let captainAmerica ={
    name : 'Steve Rogers',
    age : 102,
    // Array
    allies : ['Tony', 'bruce', 'bucky'],
    // function inside an object
    sayHi : function(){
        console.log('Captain says hi')
    },
    // nested object
    address :{
        country : 'USA',
        city : {
            name : 'Quins',
            pincode : 12345
        }
    },
    // Boolean
    isAvenger : true
}

//delete a property
delete captainAmerica.age

//add new property
captainAmerica.movies = ["End Game","Infinity War", "Doomsday"]

//update 
captainAmerica.allies.push("Thor")

captainAmerica.isAvenger = false;
console.log(captainAmerica);

//read

// console.log(captainAmerica.address.city.name);

// console.log(captainAmerica.address.country)
// let captainAmericaAddress = captainAmerica.address;
// console.log(captainAmericaAddress);
// console.log(captainAmericaAddress.country);

// console.log(captainAmerica.sayHi());
// let sayHiFunc = captainAmerica.sayHi;
// sayHiFunc();

// console.log(captainAmerica.allies[0]);
// let captainAllies = captainAmerica.allies; //['Tony', 'bruce', 'bucky']
// console.log(captainAllies[1]);