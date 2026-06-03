import { useState } from "react";
import PocUseRef2 from "./components/MachineCoding/PocUseRef2";

export default function AppV3() {
  const [show, setShow] = useState(false);
  return <div>{show && <PocUseRef2 />}
    <button onClick={()=>setShow(!show)}>toggle</button>
  </div>;
}
