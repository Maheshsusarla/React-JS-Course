// import React from 'react'

// const App = () => {
//   function handleLogin(){
//     alert("btn click")
//   }
//   return (
//     <div>
//       <button onClick={handleLogin}>Click</button>
//     </div>
//   )
// }

// export default App


// import React,{useState} from 'react'

// const App = () => {
//   const [text,setText]=useState("")
//   return (
//     <div>
//       <input type="text" placeholder='enter name' onChange={(e)=>setText(e.target.value)} />
//       <h2>{text}</h2>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react'

const App = () => {
  const [text,setText]=useState("")
  const [showText,setShowText]=useState("")

  function handleSubmit(e){
    e.preventDefault();
    setShowText(text)
  }

  function typing(e){
    setText(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter name' onChange={typing} />
        <button type='submit'>Submit</button>
      </form>
      <h1>{showText}</h1>
    </div>
  )
}

export default App