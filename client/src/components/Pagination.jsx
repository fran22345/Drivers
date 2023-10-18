import React from "react";
import "./pagination.modul.css"; // Importando directamente desde el archivo CSS

export default function Pagination({
  currentPage,
  prevPage,
  nextPage,
  goToPage,
  visiblePageNumbers,
}) {
  return (
    <div className="pagination">
      <button onClick={prevPage}>Anterior</button>
      {visiblePageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => goToPage(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
}
