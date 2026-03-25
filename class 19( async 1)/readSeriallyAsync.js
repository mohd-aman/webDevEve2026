const fs = require("fs");

console.log("start");
fs.readFile("f1.txt", function (error, data1) {
  console.log("f1 data " + data1);
  fs.readFile("f2.txt", function (error, data2) {
    console.log("f2 data " + data2);
    fs.readFile("f3.txt",function(error,data3){
        console.log("f3 data "+data3)
    })
  });
});
console.log("end");
