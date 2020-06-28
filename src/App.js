import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const consultApi = async () => {
      if (search === "") return;
      const pag = 30;
      const key = "15079449-edc79f568442131ca4ab1722e";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${pag}&page=${actualPage}`;

      const answer = await fetch(url);
      const result = await answer.json();

      setImages(result.hits);

      const calculateTotalPages = Math.ceil(result.totalHits / pag);
      setTotalPages(calculateTotalPages);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultApi();
  }, [search, actualPage]);

  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPage(newActualPage);
  };

  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > totalPages) return;
    setActualPage(newActualPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <List images={images} />
        {actualPage === 1 ? null : (
          <button
            type="button"
            onClick={previousPage}
            className="btn btn-info mr-1"
          >
            &laquo; Anterior{" "}
          </button>
        )}
        {actualPage === totalPages ? null : (
          <button type="button" onClick={nextPage} className="btn btn-info ">
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
