import React from 'react'
import {Outlet,Link}from 'react-router-dom'
const Shop = () => {
  return (
    <div>
        <h1>Shop</h1>
        {/*  runs the child component */}
        <div>
            <Link to="men">
            <button>Men</button></Link>
            <Link to="kids">Kids</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Shop