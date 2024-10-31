import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "../context/theme";

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw Error("Faild to provide context");
  return context;
};

export default useTheme;
