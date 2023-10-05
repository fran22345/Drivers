import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findOneDriver } from "../redux/actions";
import "./searchBar.modul.css";
import {Link } from "react-router-dom"

export default function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleClic = () => {
    
    dispatch(findOneDriver(value));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="navbar">
      <div className="search-text">Drivers</div>
      <div>
        <div className="create-button">
          <Link to={"/form"}>
          <button>Crear Drivers</button>
          </Link>
        </div>
        <input
          className="search-input"
          type="search"
          onChange={handleChange}
          value={value}
        />
      </div>
      <div>
        <button
          className="search-button"
          onClick={() => {
            handleClic();
            setValue("");
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
