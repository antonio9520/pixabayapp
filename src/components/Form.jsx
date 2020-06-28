import React, { useState } from "react";
import Error from "./Error";

const Form = ({ setSearch }) => {
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);
  const searchImages = (e) => {
    e.preventDefault();
    //validar
    if (term.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //enviar el termino de busqeda al componente principal
    setSearch(term);
  };
  return (
    <form onSubmit={searchImages}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca lo que quieras..."
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error msg="Agrega un termino de búsqueda" /> : null}
    </form>
  );
};

export default Form;
