import React from "react";
import "./Nav.scss";

export const Nav = ({
  direction,
  fz = 18,
  color = "#ff8c00",
  alignItems,
  gap,
}) => {
  return (
    <nav>
      <ul
        style={{
          flexDirection: direction,
          alignItems: alignItems,
          gap: `${gap}px`,
          fontSize: `${fz}px`,
          color: color,
        }}
      >
        <li>
          <a href="#">link</a>
        </li>
        <li>
          <a href="#">link</a>
        </li>
        <li>
          <a href="#">link</a>
        </li>
        <li>
          <a href="#">link</a>
        </li>
      </ul>
    </nav>
  );
};
