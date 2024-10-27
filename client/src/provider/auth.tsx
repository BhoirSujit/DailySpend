import {  useEffect, useMemo, useState } from "react";
import AuthContext  from "../context/auth";
import axios from 'axios'

const AuthProvider = ({children}) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const setToken = (newToken: string) => {
    setToken_(newToken);
  
  };

  const logout = () => {
    setToken_(null);
    
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      logout
    }),
    [token]
  );

  return (
    
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
   
  );
};

export default AuthProvider;
