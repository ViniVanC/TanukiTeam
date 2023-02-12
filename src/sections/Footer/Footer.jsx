import React, { useContext } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaDribbble,
  FaTwitch,
} from "react-icons/fa";
import { Btn } from "../../components/Btn/Btn";
import { ThemeContext } from "../../context/ThemeProvider";

import "./Footer.scss";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div className="container">
        <div className="inner">
          <div className="box">
            <Logo margin={"0 0 20px 0"} />

            <Paragraph fz={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              ipsam nesciunt delectus, cupiditate itaque nobis amet quod ab
              earum cum consequatur debitis, molestiae eveniet laborum cumque
              officiis vero, harum dolorem.
            </Paragraph>

            <Paragraph fz={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              ipsam nesciunt delectus, cupiditate itaque nobis amet quod ab
              earum cum consequatur debitis, molestiae eveniet laborum cumque
              officiis vero, harum dolorem.
            </Paragraph>
          </div>
          <div className="box">
            <h2 className="footer-title">Navigation</h2>
            <Nav direction={"column"} alignItems={"start"} gap={10} />
          </div>
          <div className="box">
            <h2 className="footer-title">We are in social networks</h2>
            <ul className="socialNetwork-list">
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitch />
                </a>
              </li>
            </ul>
            <form className={theme ? "orange" : "teal"}>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message..."></textarea>
              <Btn>send</Btn>
            </form>
          </div>
          <div className="box">
            <h2 className="footer-title">Interesting fact</h2>
            <Paragraph fz={14}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              non cumque eius! Doloribus doloremque accusamus impedit possimus
              quas fugiat nisi recusandae laborum sed quia? Quae dicta dolor
              iste alias voluptate?
            </Paragraph>
          </div>
        </div>
        <div className="powered">
          Powered by
          <a
            href="https://github.com/ViniVanC"
            target="_blank"
            style={{ marginLeft: "5px" }}
          >
            Vincent Van
          </a>
        </div>
      </div>
    </footer>
  );
};
