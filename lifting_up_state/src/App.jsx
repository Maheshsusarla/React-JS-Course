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

import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function App() {

  const [searchText, setSearchText] = useState("");

  return (
    <div>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <ProductList
        searchText={searchText}
      />

    </div>
  );
}

export default App;