import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import "./Btn.scss";

export const Btn = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <button className={theme ? "orange" : "teal"}>{children}</button>;
};
