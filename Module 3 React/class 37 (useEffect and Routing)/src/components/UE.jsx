import { useState } from "react";
import { useEffect } from "react";

export default function UE() {
  const [data, setData] = useState(null);
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
      console.log("cb (empty dependency array) we passsed in useEffect is in action");
      setTimeout(()=>{
          setData("I have data")
      },3000)
  },[]); // executes cb only in mount case

  useEffect(()=>{
    console.log("executes (dependency array with counter) only when counter updates")
  },[counter]); // executes in mount case as well as everytime counter state updates

  // useEffect(()=>{
  //     console.log("cb we passsed in useEffect is in action");
  //     setTimeout(()=>{
  //         setData("I have data")
  //     },3000)
  // }); //executes on after every re render;

  console.log("Component Rendered");
  return (
    <div>
      {data === null ? "Loader..." : data}

      <h3>Count :{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
