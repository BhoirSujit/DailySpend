import { createContext, useEffect, useState } from "react";
import { verifyUser } from "../api/AuthApi";

export const AuthContext = createContext({});



type Props = {
  children: React.ReactNode;
};

export const AuthProvider = (props: Props) => {
  const [auth, setAuth] = useState(null);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const value = {
    auth,
    setAuth,
    isloggedIn,
    setIsLoggedIn,
  };

  useEffect(() => {
    let token = localStorage.getItem('token');

  
    if (token) {
      
      verifyUser(token).then(d => {
        if (d) {
          setIsLoggedIn(true);
        }
      });
    }

  }, []);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
