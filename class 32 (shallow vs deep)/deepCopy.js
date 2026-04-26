let zoo = {
  name: "Amazing Zoo",
  location: "Melbourne, Australia",
  animals: [
    {
      species: "Lion",
      favoriteTreat: "Meat",
    },
    {
      species: "Panda",
      favoriteTreat: "Leaves",
    },
  ],
};

//create a deep copy using JSON.stringify and JSON.parse;
let zooString = JSON.stringify(zoo); // Primitive
let deepCopyZoo = JSON.parse(zooString); //deep copy of zoo;

deepCopyZoo.location = "India";
deepCopyZoo.animals[1]["species"] = "Horses";
zoo.name = "New name";
console.log(zoo);
console.log(deepCopyZoo);

console.log(zoo === deepCopyZoo); //?
console.log(zoo.animals === deepCopyZoo.animals); //?