import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count,setCount]=useState(0)
  const increment=()=>setCount(count+1)
  const decrement=()=>setCount(count-1)
  const reset=()=>setCount(count*0)
  return (
    // <div>
    //   <h1>Count : {count}</h1>
    //   <button onClick={increment}>Increment</button>
    //   <button onClick={decrement}>decrement</button>
    //   <button onClick={reset}>Reset</button>
    // </div>
     <div className="counter-container">
      <div className="counter-card">
        <h2 className="counter-title">Counter App</h2>
        <p className="counter-value">{count}</p>

        <div className="counter-buttons">
          <button className="btn btn-decrement" onClick={decrement}>
            − 
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App