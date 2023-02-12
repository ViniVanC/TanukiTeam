import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const Logo = ({ fz = 60, margin = "0" }) => {
  const { theme, colors } = useContext(ThemeContext);

  return (
    <div
      className="ico-tanukiLogo"
      style={{
        fontSize: `${fz}px`,
        color: theme ? colors.orange : colors.teal,
        margin: margin,
        transition: "all .3s ease-in-out",
      }}
    />
  );
};
