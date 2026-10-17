import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({childern,isAuth}) => {
    if(!isAuth){
        return <Navigate to="/"/>
    }
    return childern
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute