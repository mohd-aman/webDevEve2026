// Given an array of student objects:

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 60 },
  {name:"Aman",score:33}
];

// Write a function that groups them into categories:
//     "A" (90-100)
//     "B" (75-89)
//     "C" (below 75)

// Return an object like:
// {
//   A: ["Alice"],
//   B: ["Bob"],
//   C: ["Charlie"]
// }

// Approach: Focus on the output expected. This has the clue to the approach

function categorizeStudents(studentList) {
    const n = studentList.length;
    const result = {
        A:[],
        B:[],
        C:[]
    };
    for(let i=0;i<n;i++){
        const student = studentList[i];
        const name = student.name;
        const marks = student.score;
        if(marks >=90 && marks<=100){
            //student will go into A
            result.A.push(name);
        }else if(marks>=75 && marks<90){
            //student will go into B
            result.B.push(name);
        }else if(marks<75 && marks>0){
            //student will go to C
            result.C.push(name);
        }else{
            console.log("Marks are Incorrect")
        }
    }
    console.log(result);
    return result;
}

console.log(categorizeStudents(students));