/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  // Memoize the context value
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
