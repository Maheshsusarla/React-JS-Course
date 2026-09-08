import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default App