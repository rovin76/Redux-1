import React from "react";
import { INCREMENT, DECREMENT } from "./store/action.types";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Counter : {state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}
export default App;
