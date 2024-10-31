import { createContext } from "react";

export interface ThemeContextType {
    dark: boolean | null,
    setDark: (value: boolean) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default ThemeContext