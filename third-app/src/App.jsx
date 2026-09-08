import React from 'react'
import Greeting from './Components/Greeting'
import UserCard from './Components/UserCard'

const App = () => {
  return (
    <div>
      <Greeting  name="Alice" age={25} />

      <UserCard
      name="Sara"
      age={28}
      isOnline={true}
      hobbies={["reading", "cycling"]}
      address={{ city: "Bengaluru", zip: "560001" }}
    />
      
    </div>
  )
}

export default App