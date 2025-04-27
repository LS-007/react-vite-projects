import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;
// This code defines a simple counter component using React.
// It uses the useState hook to manage the count state.
// The component renders the current count and two buttons to increment and decrement the count.
// The increment function increases the count by 1, while the decrement function decreases it by 1.
// The component is exported as the default export of the module.
// The code is a simple counter application built with React.
// It uses the useState hook to manage the count state.
// The component renders the current count and two buttons to increment and decrement the count.
