// import { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);


//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {users.map((u) => (

//           <div>
//             <li key={u.id}>{u.name}-{u.username}</li>
//           </div>

//         ))}
//       </ul>
//     </div>
//   );
// }


// export default App;


