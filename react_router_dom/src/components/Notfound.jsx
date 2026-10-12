import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <Link to="/" ><h2>Home</h2></Link>
    </div>
  )
}

export default Notfound