import React from "react";
import { add, sub } from "./store/action";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Counter : {state.count}</h1>
      <button onClick={() => dispatch(add(10))}>+</button>
      <button onClick={() => dispatch(sub(10))}>-</button>
    </div>
  );
}
export default App;
