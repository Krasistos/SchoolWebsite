import React from "react";
import { Helmet } from "react-helmet";

function News() {
  return (
    <div>
      <Helmet>
        <title>Новини - Ученически Обектив</title>
        <meta name="description" content="Последни новини и актуализации." />
      </Helmet>

      <h1>Новини</h1>
      <p>Тук ще намерите последните новини.</p>
    </div>
  );
}

export default News;
