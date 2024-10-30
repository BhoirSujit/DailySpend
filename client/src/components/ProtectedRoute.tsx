import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token} = useAuth();
  
  // If not loading, check if there's a token
  return token ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoute;
