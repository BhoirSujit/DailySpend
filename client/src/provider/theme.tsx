import { useEffect, useState } from "react";
import ThemeContext from "../context/theme";

const ThemeProvider = ({ children }) => {
  const [dark, setDark_] = useState<boolean>(localStorage.getItem("darkmode") === "true");

  useEffect(() => {
    // Set initial theme based on stored preference
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]); // Dependency on dark to update class when it changes

  const setDark = (value: boolean): void => {
    setDark_(value);
    localStorage.setItem("darkmode", value ? "true" : "false");
    
    // Update body class based on the value
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
