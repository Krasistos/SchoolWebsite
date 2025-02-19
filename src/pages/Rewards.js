import { Helmet } from "react-helmet"
import "../styles.css"

function Rewards() {
  return (
    <div className="rewards-container">
      <Helmet>
        <title>Награди - Ученически Обектив</title>
        <meta name="description" content="Информация за наградите и церемонията по награждаване." />
      </Helmet>

      <h1 className="rewards-title">Награди и Церемония</h1>

      <div className="bordered-section">
        <h2>1. Награждаване</h2>
        <p className="rewards-date">Специално събитие в средата на м. юни 2025г.</p>

        <div className="rewards-categories">
          <h3>Номинации</h3>
          <p>Всяка категория получава 3 номинации за най-добър филм.</p>

          <h3>Награди</h3>
          <ul>
            <li>Най-добър сценарий</li>
            <li>Най-добра режисура</li>
            <li>Най-добра актьорска игра</li>
            <li>Най-добър монтаж</li>
            <li>Специална награда за използване на ефекти</li>
          </ul>

          <h3>Награден фонд</h3>
          <ul>
            <li>Плакети за 1, 2 и 3 място</li>
            <li>Грамоти и сертификати за участие</li>
            <li>Тематични предметни награди</li>
          </ul>
        </div>
      </div>

      <div className="bordered-section">
        <h2>2. Организиране на награждаването</h2>

        <div className="ceremony-details">
          <h3>Локация:</h3>
          <p>в София, допълнително ще се уточни</p>

          <h3>Програма:</h3>
          <ol className="program-list">
            <li>Прожекция на номинираните филми – до 3 филма във всяка категория</li>
            <li>Оценяване на филмите от журито и публиката</li>
            <li>Церемония по награждаване</li>
            <li>Среща с журито и възможност за дискусия</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Rewards

