import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    function handleLogin(){
        const LoggedIn=true;

        if(LoggedIn){
            navigate("/")
        }

    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login