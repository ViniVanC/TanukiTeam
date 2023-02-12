import React, { useContext } from "react";
import { Btn } from "../../components/Btn/Btn";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { ThemeContext } from "../../context/ThemeProvider";
import "./Hi.scss";

export const Hi = () => {
  const { theme, colors } = useContext(ThemeContext);

  return (
    <section
      className="hi"
      style={{
        backgroundImage: `linear-gradient(90deg, ${
          theme ? colors.teal : colors.orange
        } 40%, ${theme ? colors.orange : colors.teal}80 100%),
      url("images/hi-bg.jpg")`,
      }}
    >
      <div className="container">
        <div className="inner">
          <h2>TanukiTeam</h2>
          <h1>Lorem, ipsum dolor.</h1>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus minima saepe expedita animi, accusamus dicta deleniti
            dolores aspernatur eveniet esse, atque cum officiis sunt iste
            dignissimos laudantium ad optio sint.
          </Paragraph>
          <Btn>press</Btn>
        </div>
      </div>
    </section>
  );
};
