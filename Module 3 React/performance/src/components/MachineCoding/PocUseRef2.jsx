import { useEffect, useRef, useState } from "react"

export default function PocUseRef2(){
  const [seconds,setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const stopTimer = ()=>{
    clearInterval(intervalRef.current);
  }

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      console.log("running after each second");
      // setSeconds(seconds+1);// won't work due to closure?
      setSeconds((prevSecond)=>prevSecond+1);
    },1000);
    // console.log("Inside useEffect", intervalId);

    //on unmount stop the timer/ clear interval
    return ()=>{
      clearInterval(intervalRef.current);
    }
  },[])

  return(
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={stopTimer}>Stop timer</button>
    </div>
  )
}