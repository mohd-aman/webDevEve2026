import { useState } from "react";
import PocUseRef2 from "./components/MachineCoding/PocUseRef2";
import Stopwatch from "./components/MachineCoding/Stopwatch";
import Carousel from "./components/MachineCoding/Carousel";
import useVisibility from "./components/hooks/useVisibility";

export default function AppV3() {
  const [show, setShow] = useState(false);
  const { isVisible, show:showCarousel, hide, toggle } = useVisibility(false);
  return (
    <div>
      {show && <PocUseRef2 />}
      <button onClick={() => setShow(!show)}>toggle</button>
      <Stopwatch />
      {isVisible && <Carousel />}
      <button onClick={toggle}>Toggle Carousel Visiblity</button>
      <button onClick={showCarousel}>show carousel</button>
      <button onClick={hide}>hide carousel</button>
    </div>
  );
}
