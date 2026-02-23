// function parent(){
//     var a = 10;
//     function child(){
//         console.log(a);
//     }
//     return child;
// }
// const b = parent();
// b();

// function parent(){
//     var a = 10;
//     function child(){
//         var b = 20;
//         console.log(a)
//         function child2(){
//             console.log(a+b)
//         }
//         return child2
//     }
//     return child
// }
// let functionReceived = parent()
// console.log(functionReceived)

// let child2Recieved = functionReceived()
// child2Recieved()

var a = 30;
function parent(){
    function child1(){
        var b = 20;
        function child2(){
            console.log(a+b)
        }
        b = 120;
        return child2;
    }
    return child1;
}
let child1Recieved = parent()
let child2Recieved = child1Recieved()
child2Recieved()