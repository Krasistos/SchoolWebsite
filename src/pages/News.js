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
          <h2>Ексклузивен репортаж в "100% будни"</h2>
          <p>
          В тази среща на госпожа Людмила Величкова-Иванова с екипа на предаването "100% будни" можете да разберете <br></br>
          основна информация за това какво представлява фетивала и откъде идва вдъхновението за направата му.
          </p>
          
        </div>
      </div>
          
      <hr></hr>
      
    </div>
  )
}

export default News

