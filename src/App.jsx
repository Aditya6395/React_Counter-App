import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="vibrating-counter">
      <h1 className="title">Counter Application</h1>
      <div className="counter-display">
        {count}
      </div>
      <div className="counter-buttons">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
