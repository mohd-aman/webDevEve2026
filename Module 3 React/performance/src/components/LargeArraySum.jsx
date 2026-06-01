import { useMemo, useState } from "react"

const generateLargeArray = ()=>{
  const largeArray = [];
  for(let i=0;i<1000000;i++){
    largeArray.push(i);
  }
  console.log("Execution of generateLargeArray fxn")
  return largeArray;
}

const sumArray = (arr)=>{
  console.log("Execution of sumArray fxn")
  return arr.reduce((acc,ele)=>ele+acc,0);
}

export default function LargeArraySum(){
  const [count,setCount] = useState(0);
  const [value,setValue] = useState("");

  const largeArr = useMemo(()=>generateLargeArray(),[]);
  const sum = useMemo(()=>sumArray(largeArr),[]);

  return(
    <div>
      <h1>Sum: {sum}</h1>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <p>Count : {count}</p>
    </div>
  )
}