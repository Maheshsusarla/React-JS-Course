// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className="navbar">
//         <Link to="/"><li>Home</li></Link>
//         <Link to="/about"><li>About</li></Link>
//         <Link to="/contact"><li>Contact</li></Link>
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink to="/" end><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/product"><li>Products</li></NavLink>
    </div>
  )
}

export default Navbar