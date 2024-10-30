import { useContext } from "react";
import AuthContext, { AuthContextType } from "../context/auth";

const useAuth = () : AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw Error("Faild to provide context")
  return context
};

export default useAuth;
