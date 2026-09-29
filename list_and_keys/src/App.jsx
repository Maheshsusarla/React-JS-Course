// function App() {
//   const fruits = ["Apple", "Banana", "Mango","jack fruit"];

//   return (
//     <div>
//       {fruits.map((fruit,index)=>(
//         <p key={index}>{fruit}</p>
//       ))}
//     </div>
//   );
// }

// export default App



// import React from 'react'

// const App = () => {
//    const users = [
//     { id: 1, name: "Ravi" },
//     { id: 2, name: "Priya" },
//     { id: 3, name: "Kiran" },
//   ];
//   return (
//     <div>
//      {users.map((user)=>(
//       <div key={user.id}>{user.id}-{user.name}</div>
//      ))}
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   const products = [
//     { id: 101, name: "Shoes", price: 1999 },
//     { id: 102, name: "Watch", price: 2999 },
//     { id: 103, name: "Bag", price: 1499 },
//   ];

//   return (
//     <div>
//       {
//         products.map((product)=>{
//           return(
//           <div key={product.id}>
//             <p>{product.id} - {product.name} - {product.price}</p>
//           </div>
//         )})
//       }
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'

const App = () => {
  const [items, setItems] = useState(["Apple", "manago"])
  const [input, setInput] = useState("");


  function addItem() {
    setItems([...items, input]);
    setInput("");
  }

  function removeItem(index) {
    const newArray = [...items];
    newArray.splice(index, 1);
    setItems(newArray)
  }
  return (
    <div>
      {
        items.map((item, index) => (
          // <h2 key={index}>{item}</h2>
          <div key={index}>
            <h2 >{item}</h2>
            <button onClick={()=>removeItem(index)}>Remove item</button>
          </div>
        ))
      }
      <input type="text" placeholder='enter item' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItem}>Add item</button>
      {/* <button onClick={removeItem}>Remove item</button> */}
    </div>
  )
}

export default App