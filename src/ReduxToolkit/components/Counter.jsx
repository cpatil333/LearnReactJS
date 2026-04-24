import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeByValue,
  decrement,
  increment,
} from "../features/counter/counterSlice";
const Counter = () => {
  const [value, setValue] = useState(0);
  const storeValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(storeValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleChangeByValue = () => {
    dispatch(changeByValue(value));
  };

  useEffect(() => {
    console.log("Re-rendering...");
  });
  return (
    <div>
      <h2>Counter : {storeValue}</h2>
      <button onClick={handleIncrement} className="btn btn-accent">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-accent mx-2">
        Decrement
      </button>
      <input
        className="border mt-5"
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleChangeByValue} className="btn btn-accent mx-2">
        Change By Values
      </button>
    </div>
  );
};

export default Counter;
