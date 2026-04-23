import { useState } from "react";
import "../App.css";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Counter : {count}</p>
      <div className="buttons">
        {/* <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>🔄️ Reset</button> */}
        <Button text="INCREMENT" func={increment} />
        <Button text="DECREMENT" func={decrement} />
        <Button text="RESET" func={reset} />
      </div>
    </>
  );
}

export default Counter;
