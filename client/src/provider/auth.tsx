import { useEffect, useMemo, useState } from "react";
import AuthContext from "../context/auth";
import axios from "axios";
import LoadingPage from "../pages/LoadingPage";

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
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsLoading(false);
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
      {isLoading ? <LoadingPage/> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
