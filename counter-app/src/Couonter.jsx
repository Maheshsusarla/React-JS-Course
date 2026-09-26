// Counter.jsx
import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-value">Count: {count}</h1>
      <div className="counter-buttons">
        <button className="btn btn-increment" onClick={() => setCount(count + 1)}>
          + Increment
        </button>
        <button className="btn btn-decrement" onClick={() => setCount(count - 1)}>
          − Decrement
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;