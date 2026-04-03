/*
Create a counter component that displays a number and has buttons to increment 
and decrement the number. The user should be able to click the buttons to 
increase or decrease the displayed number.
*/

const counterDisplay = document.getElementById('counter-display');
const incrBtn = document.getElementById('incr-btn');
const decrBtn = document.getElementById('decr-btn');

incrBtn.addEventListener('click', function () {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) + 1;
});

decrBtn.addEventListener('click', function () {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) - 1;
});


