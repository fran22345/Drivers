import React, { useState } from "react";
import ListDriver from "./ListDrivers";
import Pagination from "./Pagination";
import Filters from "./Filters";
import "./cards.modul.css";
import { useSelector } from "react-redux";

export default function Cards({ drivers }) {
  let statePage = useSelector((state) => state.backToBegin);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [teamFilter, setTeamFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  if (statePage && currentPage !== statePage) {
    setCurrentPage(statePage);
  }

  const filteredDrivers = drivers
    .filter((driver) => {
      if (teamFilter === "") return true;

      if (driver && driver.teams) {
        const driverTeams = driver.teams.split(",").filter(Boolean);
        return driverTeams.some(
          (team) =>
            team.toLowerCase().trim() === teamFilter.toLowerCase().trim()
        );
      }
      if (driver && driver.Teams) {
        const driverTeams = driver.Teams.map((team) => team.name);
        return driverTeams.some(
          (team) =>
            team.toLowerCase().trim() === teamFilter.toLowerCase().trim()
        );
      }
    })
    .filter((driver) => {
      if (sourceFilter === "") return true;
      return typeof driver.id === sourceFilter;
    })
    .sort((a, b) => {
      let nameA =
        typeof a.name === "object" && a.name.forename
          ? a.name.forename + " " + a.name.surname
          : "";
      let nameB =
        typeof b.name === "object" && b.name.forename
          ? b.name.forename + " " + b.name.surname
          : "";

      if (orderBy === "nameAsc") {
        return nameA.localeCompare(nameB);
      } else if (orderBy === "nameDesc") {
        return nameB.localeCompare(nameA);
      } else if (orderBy === "dobAsc") {
        return a.dob.localeCompare(b.dob);
      } else if (orderBy === "dobDesc") {
        return b.dob.localeCompare(a.dob);
      } else {
        return 0;
      }
    });

  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const visiblePageNumbers = Array.from(
    { length: totalPages > 5 ? 5 : totalPages },
    (_, i) => currentPage + i
  ).filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages);

  return (
    <div>
      <Filters
        teamFilter={teamFilter}
        sourceFilter={sourceFilter}
        orderBy={orderBy}
        setTeamFilter={setTeamFilter}
        setSourceFilter={setSourceFilter}
        setOrderBy={setOrderBy}
      />
      <ListDriver drivers={filteredDrivers.slice(startIndex, endIndex)} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
        goToPage={goToPage}
        visiblePageNumbers={visiblePageNumbers}
      />
    </div>
  );
}
