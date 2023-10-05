import React from "react";

export default function Filtros({
  teamFilter,
  sourceFilter,
  orderBy,
  setTeamFilter,
  setSourceFilter,
  setOrderBy,
}) {
  return (
    <div className="filter-options">
      <select value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}>
        <option value="">Todos los equipos</option>
        {/* Agrega opciones para equipos según tus datos */}
      </select>

      <select
        value={sourceFilter}
        onChange={(e) => setSourceFilter(e.target.value)}
      >
        <option value="">Todos los orígenes</option>
        <option value="API">API</option>
        <option value="BD">Base de datos</option>
      </select>

      <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="">Sin ordenamiento</option>
        <option value="nameAsc">Nombre (A-Z)</option>
        <option value="nameDesc">Nombre (Z-A)</option>
        <option value="dobAsc">Fecha de nacimiento (ascendente)</option>
        <option value="dobDesc">Fecha de nacimiento (descendente)</option>
      </select>
    </div>
  );
}
