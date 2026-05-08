import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleIncrement = ()=>{
        // count = count+1; //wrong way don't do it ever;
        setCount(count+1);
    }
    const handleDecrement = ()=>{
        if(count==0){
            alert("we don't support negative counting");
            return;
        }
        setCount(count-1);
    }

    return (
        <div>
            <h3>Count : {count}</h3>
            <div className="action-container">
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}



// vanilla js code 
// const  btn = document.querySelector('button');
// const h3Ele = document.querySelector('h3');
// let count = 0;
// btn.addEventListener('click',()=>{
//     count++;
//     h3Ele.innerText = count;
// })