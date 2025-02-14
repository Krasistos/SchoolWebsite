// src/components/Header.js
import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
      </div>
      <div className="header-title1">
        <span>Национален</span>
        <span>Кинофестивал</span>
      </div>
        <img src="./logo.png" alt="Logo" className="logo" />
      <div className="header-title2">
        <span>Ученически</span>
        <span>Обектив</span>
      </div>
    </header>
  );
};

export default Header;