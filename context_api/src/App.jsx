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


import React from 'react'
import Profile from './Profile'
import Navbar from './Navbar'
import UserContext from './context/UserContext'

const App = () => {

  const user={
    name:"Mahesh",
    role:"Frontend dev"
  }
  return (
    <div>
      <UserContext.Provider value={user} >
        <Navbar />
        <Profile />
      </UserContext.Provider>
    </div>
  )
}

export default App