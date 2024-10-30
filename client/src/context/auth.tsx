import { createContext } from "react";

export interface AuthContextType {
    token : string,
    setToken : (newToken : string) => void,
    logout: () => void,
}

const AuthContext = createContext<AuthContextType| undefined>(undefined);

export default AuthContext