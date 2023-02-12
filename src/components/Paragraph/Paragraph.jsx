import React from "react";

export const Paragraph = ({ children, fz = 18, color }) => {
  return <p style={{ fontSize: `${fz}px`, color: color }}>{children}</p>;
};
