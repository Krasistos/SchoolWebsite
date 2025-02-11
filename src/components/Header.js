// src/components/Header.js
import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="Logo" className="logo" />
      <div className="header-title">
        <span>Ученически</span>
        <span>Обектив</span>
      </div>
    </header>
  );
};

export default Header;
