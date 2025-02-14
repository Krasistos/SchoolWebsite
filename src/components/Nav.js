// src/components/Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Начало</Link>
      <Link to="/news">Новини</Link>
      <Link to="/schedule">Програма</Link>
      <Link to="/library">Библиотека</Link>
      <Link to="/rewards">Награди</Link>
      <Link to="/contact">Контакти</Link>
    </nav>
  );
};

export default Nav;
