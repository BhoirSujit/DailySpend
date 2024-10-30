import { useEffect, useMemo, useState } from "react";
import AuthContext from "../context/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);

  const setToken = (newToken) => {
    setToken_(newToken);
    localStorage.setItem("token", newToken);
    axios.defaults.headers.common["Authorization"] = "Bearer " + newToken;
  };

  const logout = () => {
    setToken_(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    // Set authorization header and manage token in localStorage on initial load
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsLoading(false); // Set isLoading to false after initial setup
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      isLoading,
      logout,
    }),
    [token, isLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
