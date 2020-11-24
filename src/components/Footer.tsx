import React from "react";
import Logo from "../assets/tmdb_logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer flex flex-jc-c">
      <img className="logo" src={Logo} alt="tmdb logo" />
    </footer>
  );
};

export default Footer;
