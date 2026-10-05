// import React from 'react'
// import Profile from './Profile'
// import UserContext from './context/UserContext'

// const App = () => {
//   const name="mahesh"
//   return (
    
//     <UserContext.Provider value={name} >
//       <Profile />
//     </UserContext.Provider>
//   )
// }

// export default App


// import React from 'react'
// import Profile from './Profile'
// import Navbar from './Navbar'
// import UserContext from './context/UserContext'

// const App = () => {

//   const user={
//     name:"Mahesh",
//     role:"Frontend dev"
//   }
//   return (
//     <div>
//       <UserContext.Provider value={user} >
//         <Navbar />
//         <Profile />
//       </UserContext.Provider>
//     </div>
//   )
// }

// export default App


// fetching data from apis
import { useEffect, useState } from "react";
import './App.css'
function App() {

  const [products, setProducts] = useState([]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((data)=>setProducts(data))
})

  return (
    <div>

      <h1>Products</h1>

    
  {products.map(product => (
    <div key={product.id}>
      <h2>{product.name}</h2>

      <p>Username: {product.username}</p>

      <p>Email: {product.email}</p>
    </div>
  ))}

    </div>
  );
}

export default App;