// import React from 'react'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Notfound from './components/Notfound'
// import Navbar from './components/Navbar'
// import './App.css'

// const App = () => {
//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element: <div>
//         <Navbar />
//         <Home/>
//       </div>
//     },
//     {
//       path:"/about",
//       element:
//       <div>
//         <Navbar />
//         <About/>
//       </div>
//     },
//     {
//       path:"/contact",
//       element: <div>
//         <Navbar />
//         <Contact/>
//       </div>
//     },
//     {
//       path:"*",
//       element:<Notfound/>
//     },

//   ])
//   return (
//     <div>
      
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Notfound from './components/Notfound'
// import Navbar from './components/Navbar'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>{" | "}
//         <Link to="/about">About</Link>{" | "}
//         <Link to="/contact">Contact</Link>
//       </nav>


//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='*' element={<Notfound />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


// dynamic routes and url parameters
// import React from 'react'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import Products from './components/Products'
// import ProductDetails from './components/ProductDetails'
// import './App.css'

// const App = () => {
//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element: <div>
//         <Navbar />
//         <Home/>
//       </div>
//     },
//     {
//       path:"/about",
//       element:
//       <div>
//         <Navbar />
//         <About/>
//       </div>
//     },
//     {
//       path:"/product",
//       element: <div>
//         <Navbar />
//         <Products/>
//       </div>
//     },
//     {
//       path:"/products/:id",
//       element: <div>
//         <Navbar />
//         <ProductDetails/>
//       </div>
//     },

//   ])
//   return (
//     <div>
      
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App


// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// import ProductDetails from "./components/ProductDetails";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/products/:id"
//           element={<ProductDetails />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// nested routing

// import React from 'react'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import Products from './components/Products'
// import ProductDetails from './components/ProductDetails'
// import Shop from './components/Shop'
// import Men from './components/Men'
// import Kids from './components/Kids'
// import './App.css'
// import Kids from './components/Kids'

// const App = () => {
//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element: <div>
//         <Navbar />
//         <Home/>
//       </div>
//     },
//     {
//       path:"/about",
//       element:
//       <div>
//         <Navbar />
//         <About/>
//       </div>
//     },
//     {
//       path:"/product",
//       element: <div>
//         <Navbar />
//         <Products/>
//       </div>
//     },
//     {
//       path:"/products/:id",
//       element: <div>
//         <Navbar />
//         <ProductDetails/>
//       </div>
//     },
//       {
//       path:"/shop",
//       element: <div>
//         <Navbar />
//         <Shop/>
//       </div>,
//       children:[
//         {
//           path:"men",
//           element:<Men/>
//         },
//         {
//           path:"kids",
//           element:<Kids />
//         }
//       ]
//     },

//   ])
//   return (
//     <div>
      
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App



import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import Company from './components/Company'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Parent route */}
      <Route path="/about" element={<About />}>
        {/* Child routes */}
        <Route index element={<Company />} />   {/* /about */}
        <Route path="team" element={<Team />} /> {/* /about/team */}
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App