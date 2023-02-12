import React, { createContext, useReducer } from "react";

const colors = {
  orange: "#ff8c00",
  teal: "#016161",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useReducer((theme) => !theme, true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
