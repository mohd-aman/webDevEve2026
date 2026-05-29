import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <button onClick={handleInc}>+</button>
      <h2>Count is {count}</h2>
      <button onClick={handleDec}>-</button>
    </div>
  );
}
