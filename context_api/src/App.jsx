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
// import { useEffect, useState } from "react";
// import './App.css'
// function App() {

//   const [products, setProducts] = useState([]);

// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res)=>res.json())
//   .then((data)=>setProducts(data))
// })

//   return (
//     <div>

//       <h1>Products</h1>


//   {products.map(product => (
//     <div key={product.id}>
//       <h2>{product.name}</h2>

//       <p>Username: {product.username}</p>

//       <p>Email: {product.email}</p>
//     </div>
//   ))}

//     </div>
//   );
// }

// export default App;


// Loading and Error States:
// Loading state : is used to indicate that an API request is currently in progress and the application is waiting for the response.
// Error state : is used to handle and display a message when an API request fails or returns an unexpected result.


import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then(response => {

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();

      })

      .then(data => {

        setProducts(data);
        setLoading(false);

      })

      .catch(error => {

        setError(error.message);
        setLoading(false);

      });

  }, []);

  // Loading
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // Error
  if (error) {
    return <h2>{error}</h2>;
  }

  // Success
  return (
    <div>

      <h1>Products</h1>

      {products.map(product => (

        <div key={product.id}>

          <h2>{product.username}</h2>

          <p>₹{product.email}</p>

        </div>

      ))}

    </div>
  );
}

export default App;