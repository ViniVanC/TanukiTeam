import React, { useContext } from "react";
import { Logo } from "../../components/Logo/Logo";
import { ThemeContext } from "../../context/ThemeProvider";

import "./Header.scss";

export const Header = () => {
  const { theme, setTheme, colors } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: `rgba(color:${
          theme ? colors.teal : colors.orange
        } , $alpha: 0.2)`,
      }}
    >
      <div className="container">
        <div className="inner">
          <Logo />

          <button
            className="theme-btn"
            onClick={setTheme}
            style={{
              backgroundColor: `${theme ? colors.teal : colors.orange}`,
              borderColor: `${theme ? colors.orange : colors.teal}`,
            }}
          ></button>
        </div>
      </div>
    </header>
  );
};
