import React from 'react'

const Counter = ({count,setCount}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase + 1</button>
    </div>
  )
}

export default Counter