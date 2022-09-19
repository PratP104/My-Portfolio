import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/pratik-purnaye-63344976/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/PratP104" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
