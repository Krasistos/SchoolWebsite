import { Helmet } from "react-helmet"
import "../styles.css"

const News = () => {
  return (
    <div className="news-container">
      <Helmet>
        <title>Новини - Ученически Обектив</title>
        <meta name="description" content="Последни новини и актуализации за фестивала Ученически Обектив." />
      </Helmet>

      <div className="news-content">
        <div className="pinned-indicator">
          <span className="pinned-icon">📌</span>
          <span className="pinned-text">Pinned</span>
        </div>
        <div className="news-image">
        <video controls>
          <source src="https://bnt.bg/f/video/o/336/f136eeac49b26673eae4ac5bbd45dfe0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="news-text">
          <h2>Заглавие на новината</h2>
          <p>
            Тук можете да добавите текста на вашата новина. Това е примерен текст, който можете да замените с актуална
            информация за фестивала "Ученически Обектив". Можете да включите важни съобщения, актуализации по програмата
            или интересни факти за участниците и техните проекти.
          </p>
          <p>
            Не забравяйте да поддържате тази секция актуална, за да информирате посетителите за най-новите събития и
            развития, свързани с фестивала. Редовното обновяване на съдържанието ще помогне да задържите интереса на
            аудиторията и да насърчите повече участия.
          </p>
          <p>
            Можете също така да добавите информация за предстоящи събития, крайни срокове за регистрация или интересни
            истории от предишни издания на фестивала. Това ще помогне да създадете по-пълна картина на "Ученически
            Обектив" и да вдъхновите повече млади таланти да се включат.
          </p>
        </div>
      </div>
          
      <hr></hr>
      
    </div>
  )
}

export default News

