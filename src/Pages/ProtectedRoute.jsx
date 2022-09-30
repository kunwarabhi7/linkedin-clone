import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../contex/AuthContex'
const ProtectedRoute = ({children}) => {
    const {user} = UserAuth();

    
    return (
        <div>
        {!user ? <Navigate to='/'/> : children }
      
    </div>
  )
}

export default ProtectedRoute
