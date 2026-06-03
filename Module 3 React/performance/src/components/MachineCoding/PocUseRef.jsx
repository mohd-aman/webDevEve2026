import { useEffect, useRef } from "react"

export default function PocUseRef(){
  const inputRef = useRef(null);
  // console.log(inputRef)
  useEffect(()=>{
    // console.log("Inside useEffect")
    // console.log(inputRef);
    inputRef.current.focus();
  },[])

  return(
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}