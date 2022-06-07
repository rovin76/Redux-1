import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Counter : {state.count}</h1>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}
export default App;
