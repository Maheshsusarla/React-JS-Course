import React from 'react'
import UserContext from './context/UserContext'
import { useContext } from 'react'
const Navbar = () => {
    const name=useContext(UserContext)
  return (
    <div>
        <h1> Hi ,{name.name}</h1>
    </div>
  )
}

export default Navbar