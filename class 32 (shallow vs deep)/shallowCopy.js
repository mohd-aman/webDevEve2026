//Shallow Copy;

let zoo = {
    name:"Amazing Zoo",
    location:"Melbourne, Australia",
    animals:[
        {
            species:"Lion",
            favoriteTreat:"Meat"
        },
        {
            species:"Panda",
            favoriteTreat:"Leaves"
        }
    ]
}

let shallowCopyZoo = {...zoo};

shallowCopyZoo.location = "Kerala, India";
console.log(zoo.location);
console.log(shallowCopyZoo.location);

// shallowCopyZoo.animals = [];
// console.log(shallowCopyZoo.animals);
// console.log(zoo.animals);


// shallowCopyZoo.animals[0]['species'] = "Zebra";
// console.log(shallowCopyZoo.animals[0]['species']);
// console.log(zoo.animals[0]['species']);


shallowCopyZoo.animals[1].favoriteTreat = "Fruits";
console.log(zoo.animals[1].favoriteTreat);//?

console.log(zoo === shallowCopyZoo);//?

console.log(zoo.animals === shallowCopyZoo.animals);