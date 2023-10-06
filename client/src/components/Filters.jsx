import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeams } from "../redux/actions";

export default function Filtros({
  teamFilter,
  sourceFilter,
  orderBy,
  setTeamFilter,
  setSourceFilter,
  setOrderBy,
}) {
  const dispatch = useDispatch();
  const stateTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (
    <div className="filter-options">
      <select
        value={teamFilter}
        onChange={(e) => setTeamFilter(e.target.value)}
      >
        <option value="">Todos los equipos</option>
        {stateTeams.map((teams) => {
          return <option> {teams}</option>;
        })}
      </select>

      <select
        value={sourceFilter}
        onChange={(e) => setSourceFilter(e.target.value)}
      >
        <option value="">Todos los orígenes</option>
        <option value="number">API</option>
        <option value="string">Base de datos</option>
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
