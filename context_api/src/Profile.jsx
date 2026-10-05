// import React from 'react'
// import UserContext from './context/UserContext'
// import { useContext } from 'react'


// const Profile = () => {
//     const name=useContext(UserContext);
    
//   return (
//     <div>
//         <h1>hi , {name}</h1>
//     </div>
//   )
// }

// export default Profile



import React from 'react'
import UserContext from './context/UserContext'
import { useContext } from 'react'

const Profile = () => {
    const user=useContext(UserContext);
  return (
    <div>
        <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
    </div>
  )
}

export default Profile