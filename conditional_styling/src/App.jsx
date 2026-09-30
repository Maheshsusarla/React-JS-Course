// import React from 'react'

// const App = () => {
//   const isOnline=true;
//   return (
//     <div>
//       <h1 style={{backgroundColor:isOnline? "green" :"red"}}>Mahesh</h1>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import "./Classname.css"

// const App = () => {
//   const isOnline=false;
//   return (
//     <div>
//       <button className={isOnline?"active":"inactive"}>{isOnline?"Active":"Inactive"}</button>
//     </div>
//   )
// }

// export default App


// useref

// import React,{useEffect,useState,useRef} from 'react'

// const App = () => {
//     const[count,setCount]=useState(0)
//     const inputRef=useRef(null)

//     function add(){
//         setCount(count+Number(inputRef.current.value))
//     }
//   return (
//     <div>
//         <input ref={inputRef} />
//         <button onClick={add}>Click</button>
//         <h1>{count}</h1>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState, useRef } from 'react'

// const App = () => {
//     const nameRef = useRef();

//     function handleSubmit() {
//         alert("Name: " + nameRef.current.value);
//     }
//     return (
//         <div>
//             <input ref={nameRef} placeholder="Enter name" />
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }

// export default App


// import React,{useEffect,useRef} from 'react'

// const App = () => {
//     const inputRef=useRef(null);

//     useEffect(()=>{
//         inputRef.current.focus();
// },[])
//   return (
//     <div>
//         <input ref={inputRef} />
//     </div>
//   )
// }

// export default App



// import React,{useRef} from 'react'

// const App = () => {
//   const nameRef = useRef();

//   function handleSubmit() {
//     alert("Name: " + nameRef.current.value);
//   }
//   return (
//     <div>
//       <input ref={nameRef} placeholder="Enter name" />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default App




import React, { useRef,useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function start() {
    timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
  }

  function stop() {
    clearInterval(timerRef.current);
  }
  return (
    <div>
      <p>{time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App