import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import ME from "../../Assets/myimage.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pratik Purnaye</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <div>
          <img src={ME} alt="me" className="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
