// import React from 'react'

// const Greeting = (props) => {
//   return (
//     <div>
//         <h1>Hello {props.name}</h1>
//         <h2>Age :{props.age}</h2>
//     </div>
//   )
// }

// export default Greeting


// Destructuring
import React from 'react'

const Greeting = ({name,age}) => {
//    name = "Bob"; // ❌ Never do this — mutating props is a React anti-pattern- it only allow ul 
  return (
    
    <div>
        return <h1>Hello, {name}. You are {age}.</h1>
    </div>
  )
}

export default Greeting