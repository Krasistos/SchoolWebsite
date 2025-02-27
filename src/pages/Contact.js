import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact - Ученически Обектив</title>
        <meta name="description" content="Последни новини и актуализации." />
      </Helmet>

      
      <h1>Връзка с нас:</h1>
      <p>
        <ul>
            <li>Телефон за контакт: +359 88 888 8888</li>
            <li>51 СУ "Елисавета Багряна" в работни дни
              <ul>
                <li>
                  Става само с предупреждение от най-късно предишния ден на дадения телефон 
                </li>
              </ul>
            </li>
        </ul>
      </p>
    </div>
  );
}

export default Contact;
