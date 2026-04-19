// bind -> will combine/attach "this" value to a function 

const button = document.querySelector("#introduceButton");

const alice = {
    name:"Alice",
    age:30,
    introduce:function(){
        console.log(this);
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

// const introduceAlice = alice.introduce;
// introduceAlice();
// alice.introduce();

const bindedFxnWithAliceObj = alice.introduce.bind(alice);
bindedFxnWithAliceObj(); //always value of this is going to be alice
bindedFxnWithAliceObj(); //always value of this is going to be alice

//can call or apply be a solution here? 
button.addEventListener('click',bindedFxnWithAliceObj);