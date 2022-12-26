// create theme provider

// Path: src/Context/theme.jsx
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkToggle, setDarkToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
