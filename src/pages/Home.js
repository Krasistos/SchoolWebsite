import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles.css"; // Import your CSS

function Home() {
  useEffect(() => {
    let elements = document.querySelectorAll(".container");

    function checkScroll() {
      elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
          el.classList.add("fade-in");
        }
      });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Kur App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>

      <div className="container" id="home">
        <div className="poster"></div>
        <div className="register-section">
          <h1>Добре дошли!</h1>
          <p>Тук можете да се регистрирате за фестивала.</p>
          <div className="btn-container">
            <p>Основна регистрация</p>
            <a href="https://rivalsmeta.com/characters/mantis/leaderboard" className="btn">Регистрация 1</a>
            <p>Специална регистрация</p>
            <a href="https://rivalsmeta.com/characters/mantis/leaderboard" className="btn">Регистрация 2</a>
            <p>VIP регистрация</p>
            <a href="https://rivalsmeta.com/characters/mantis/leaderboard" className="btn">Регистрация 3</a>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
