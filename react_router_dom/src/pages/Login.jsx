// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//     const navigate=useNavigate();
//     function handleLogin(){
//         const LoggedIn=true;

//         if(LoggedIn){
//             navigate("/")
//         }

//     }
//   return (
//     <div>
//         <h1>Login</h1>
//         <button onClick={handleLogin}>Login</button>
//     </div>
//   )
// }

// export default Login

// protected routs



import React from 'react'

const Login = ({isAuth,setIsAuth}) => {

    const handleClick=()=>{
        setIsAuth(!isAuth)
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleClick}>{isAuth? "logout":"Login"}</button>
    </div>
  )
}

export default Login