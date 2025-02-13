// src/components/Footer.js
import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; 2025 Ученически Обектив. Всички права запазени.
      <div className="footer-sponsors">
          <a href="https://rivalsmeta.com/characters/mantis/leaderboard"><img src="sponsor1.png" alt="Sponsor 1" />Sponsor 1</a>
          <a href="https://rivalsmeta.com/characters/mantis/leaderboard"><img src="sponsor2.png" alt="Sponsor 2" />Sponsor 2</a>
          <a href="https://rivalsmeta.com/characters/mantis/leaderboard"><img src="sponsor3.png" alt="Sponsor 3" />Sponsor 3</a>
        </div>
    </footer>
  );
};

export default Footer;
