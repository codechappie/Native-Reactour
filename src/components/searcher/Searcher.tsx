import React from "react";

const Searcher = () => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Busca un destino, actividad o excursión"
      />
      <div className="search-button">Buscar</div>
    </div>
  );
};

export default Searcher;
