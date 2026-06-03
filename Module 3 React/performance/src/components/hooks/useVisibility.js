import { useCallback, useState } from "react";

export default function useVisibility(initialVisibility = false){
  const [isVisible,setIsVisible] = useState(initialVisibility);

  const show = useCallback(()=>{
    setIsVisible(true);
  },[]);

  const hide = useCallback(()=>{
    setIsVisible(false);
  },[]);

  const toggle = useCallback(()=>{
    setIsVisible((prevVisibility)=>!prevVisibility);
  },[]);

  return {
    isVisible,
    show,
    hide,
    toggle
  }
}