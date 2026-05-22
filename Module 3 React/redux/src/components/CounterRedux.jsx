import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../redux/counterSlice";

const actions = counterSlice.actions;

export default function CounterRedux() {
  const count = useSelector((store)=>store.counter.count)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    //dispatch increment reducer action
    dispatch(actions.increment());
  };
  const handleDecrement = () => {
    dispatch(actions.decrement())
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h3>Count : {count}</h3>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
