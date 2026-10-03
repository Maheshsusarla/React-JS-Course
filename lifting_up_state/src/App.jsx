// import React,{useState} from 'react'
// import Counter from './Counter'
// import Reset from './Reset'

// const App = () => {
//   const [count,setCount]=useState(0)

  
//   return (
//     <div>
//      <Counter  count={count}  setCount={setCount}/>
//      <Reset setCount={setCount} />
      
//     </div>
//   )
// }

// export default App

// 2nd  exp

// import { useState } from "react";
// import SearchBar from "./SearchBar";
// import ProductList from "./ProductList";

// function App() {

//   const [searchText, setSearchText] = useState("");

//   return (
//     <div>

//       <SearchBar
//         searchText={searchText}
//         setSearchText={setSearchText}
//       />

//       <ProductList
//         searchText={searchText}
//       />

//     </div>
//   );
// }

// export default App;


// Props Drilling

// Props drilling is the process of passing data from a parent component to a deeply nested child component through intermediate
//  components that don't actually need the data themselves.


import React from 'react'
import Dashboard from './Dashboard'

const App = () => {
  const userName="Mahesh"
  return (
    <div>
      <Dashboard userName={userName} />
    </div>
  )
}

export default App