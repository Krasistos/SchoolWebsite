import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles.css"; // Import your CSS

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
        {/* Poster with overlay */}
        <div className="poster" onClick={openModal}>
          <div className="poster-overlay">
            <button className="view-poster-button" onClick={openModal}>
              View Poster
            </button>
          </div>
        </div>

        <div className="register-section">
          <h1>Добре дошли!</h1>
          <p>Тук можете да се регистрирате за фестивала.</p>
          <div className="btn-container">
            <p>Основна регистрация</p>
            <a href="https://rivalsmeta.com/characters/mantis/leaderboard" className="btn">
              Регистрация 1
            </a>
            <p>Специална регистрация</p>
            <a href="https://rivalsmeta.com/characters/mantis/leaderboard" className="btn">
              Регистрация 2
            </a>
            <p>VIP регистрация</p>
            <a href="https://rivalsmeta.com/characters/mantis/leaderboard" className="btn">
              Регистрация 3
            </a>
          </div>
        </div>
      </div>

      {/* Poster modal */}
      {modalOpen && (
        <div className="poster-modal active">
          <div className="poster-modal-content">
            <button className="close-modal sticky" onClick={closeModal}>
              ×
            </button>
            <img src="/poster.png" alt="Event Poster" className="modal-poster" />
          </div>
        </div>
      )}

      <div className="article-section visible">
        <video controls>
          <source
            src="https://bnt.bg/f/video/o/336/f136eeac49b26673eae4ac5bbd45dfe0.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>Кратко описание на видеото и статията.</p>
        <a href="/news" className="read-more">
          Прочети повече
        </a>
      </div>
    </>
  );
}

export default Home;
