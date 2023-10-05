// Paginacion.js
import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
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
