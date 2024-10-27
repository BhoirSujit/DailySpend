import { createContext } from "react";

interface ContextData {
    token : string,
    setToken : (newToken : string) => void,
    logout: () => void,
}

const AuthContext = createContext<ContextData>(null);

export default AuthContext