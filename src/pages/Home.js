"use client"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import "../styles.css"

function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [rulesModalOpen, setRulesModalOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll(".container, .new-section, .article-section")

    function checkScroll() {
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top
        if (position < window.innerHeight - 100) {
          el.classList.add("fade-in")
        }
      })
    }

    window.addEventListener("scroll", checkScroll)
    checkScroll()

    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openRulesModal = () => {
    setRulesModalOpen(true)
  }

  const closeRulesModal = () => {
    setRulesModalOpen(false)
  }

  return (
    <>
      <Helmet>
        <title>Festival app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>

      <div className="responsive-container">
        <div className="container" id="home">
          <div className="column left-column">
            <div className="poster" onClick={openModal}>
              <div className="poster-overlay">
                <button className="responsive-button view-poster-button" onClick={openModal}>
                  View Poster
                </button>
              </div>
            </div>
          </div>

          <div className="column right-column">
            <div className="register-section">
              <h1 className="responsive-heading">Добре дошли!</h1>
              <p className="responsive-text">Тук можете да се регистрирате за фестивала.</p>
              <div className="btn-container">
                <p>Регистрация на игрален филм с продължителност 5-20 мин.</p>
                <a href="https://forms.gle/TRXuvzF5yaD8a1rTA" className="responsive-button btn" target="_blank">
                  Регистрирай се
                </a>
                <p>Документален филм с продължителност 5-20 мин.</p>
                <a href="https://forms.gle/ZGpMZSiYbTAwdw6a7" className="btn"  target="_blank">
                  Регистрирай се
                </a>
                <p>Анимация - продължителност 1-20 мин.</p>
                <a href="https://forms.gle/HomqrYggDMV7LDUy7" className="btn" target="_blank">
                  Регистрирай се
                </a>
              </div>
            </div>

            <div className="new-section bordered-section">
              <h2>Информация за Фестивала</h2>
              <div className="info-grid">
                <div className="info-column">
                  <h3>Основна информация</h3>
                  <ul>
                    <li>За ученици от 8 до 12 клас</li>
                    <li>Три категории филми</li>
                    <li>Продължителност: 5-20 минути</li>
                    <li>Краен срок: 30 април 2025</li>
                  </ul>
                </div>
                <div className="info-column">
                  <h3>Награждаване</h3>
                  <ul>
                    <li>Церемония през юни 2025</li>
                    <li>Специални награди</li>
                    <li>Жури от БНТ и НБУ</li>
                    <li>Плакети и грамоти</li>
                  </ul>
                </div>
              </div>
              <button className="read-more-btn" onClick={openRulesModal}>
                Прочетете всички правила
              </button>
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="modal poster-modal active">
            <div className="modal-content poster-modal-content">
              <button className="close-modal" onClick={closeModal}>
                ×
              </button>
            </div>
          </div>
        )}

        {rulesModalOpen && (
          <div className="modal rules-modal active">
            <div className="modal-content rules-modal-content">
              <button className="close-modal" onClick={closeRulesModal}>
                ×
              </button>
              <h2>Указания и програма на</h2>
              <h3>Първи национален фестивал за ученическо късометражно кино</h3>
              <h1>„УЧЕНИЧЕСКИ ОБЕКТИВ"</h1>
              <p>за ученици от 8 до 12 клас, 2025 г.</p>

              <div className="rules-content">
                <section>
                  <h3>1. Цели на фестивала:</h3>
                  <ul>
                    <li>Насърчаване на креативността и работата в екип между ученици и учители.</li>
                    <li>Развитие на уменията за създаване на филмово съдържание.</li>
                    <li>
                      Повишаване на интереса към изкуството и използването на различни софтуери, техника и свободно
                      разпространявани музика, снимков и видео материал.
                    </li>
                    <li>
                      Вярата в собствените неограничени възможности – всеки има главна роля в една филмова продукция.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3>2. Период на провеждане:</h3>
                  <ul>
                    <li>Създаване на филмите: през учебната 2024-2025 година.</li>
                    <li>Краен срок за изпращане на филмите: 30 април 2025 г.</li>
                    <li>Оценяване: м. май 2025 - ОНЛАЙН</li>
                    <li>Официално награждаване: средата на юни 2025 г. в гр. София</li>
                  </ul>
                </section>

                <section>
                  <h3>3. Изисквания към участниците:</h3>
                  <ul>
                    <li>Участие в една от категориите: Документален филм, Игрален филм, Анимационен филм</li>
                    <li>Ученици от 8 до 12 клас, в екип с учител(и)</li>
                    <li>Допуска се участие на ученически екип от различни училища</li>
                    <li>При реализирането на филма не се допуска използване на AI</li>
                    <li>Продължителност на филмите: от 5 до 20 минути</li>
                    <li>Филмите трябва да бъдат създадени през учебната 2024-2025 година</li>
                    <li>Форматът на файла да бъде .mp4 или .mov</li>
                  </ul>
                </section>

                <section>
                  <h3>4. Жури</h3>
                  <p>Професионалисти от:</p>
                  <ul>
                    <li>БНТ</li>
                    <li>НБУ</li>
                  </ul>
                </section>

                <section>
                  <h3>5. Награждаване</h3>
                  <p>Специално събитие в средата на м. юни 2025г.</p>
                  <ul>
                    <li>Всяка категория получава 3 номинации за най-добър филм</li>
                    <li>Награди за най-добър сценарий, режисура, актьорска игра, монтаж</li>
                    <li>Специална награда за използване на ефекти</li>
                    <li>Плакети, грамоти и сертификати за участие</li>
                  </ul>
                </section>

                <section>
                  <h3>6. Организиране на награждаването</h3>
                  <p>
                    <strong>Локация:</strong> в София (ще се уточни допълнително)
                  </p>
                  <p>
                    <strong>Програма:</strong>
                  </p>
                  <ul>
                    <li>Прожекция на номинираните филми</li>
                    <li>Оценяване на филмите от журито и публиката</li>
                    <li>Церемония по награждаване</li>
                    <li>Среща с журито и възможност за дискусия</li>
                  </ul>
                </section>

                <section className="contacts">
                  <h3>Контакти за възникнали въпроси:</h3>
                  <p>0889292994 – г-жа Людмила Величкова-Иванова, главен координатор на фестивала</p>
                  <p>l.ivanova@51school.bg</p>
                </section>
              </div>
            </div>
          </div>
        )}

        <div className="article-section">
          <video controls className="responsive-video">
            <source src="https://bnt.bg/f/video/o/336/f136eeac49b26673eae4ac5bbd45dfe0.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>В тази среща на госпожа Людмила Величкова-Иванова с екипа на предаването "100% будни" можете да разберете <br></br>
          основна информация за това какво представлява фетивала и откъде идва вдъхновението за направата му.</p>
          <a href="/news" className="read-more">
            Други важни новини за събитието
          </a>
        </div>
      </div>
    </>
  )
}

export default Home

