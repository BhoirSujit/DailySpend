import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
const {token} = useAuth();
console.log(useAuth());

  return (!token) 
  ? <Navigate to="login"/>
  : <Outlet/>
}

export default ProtectedRoute
