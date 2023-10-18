import React, { useState } from "react";
import "./CSS/form.modul.css";
import { useDispatch, useSelector } from "react-redux";
import { createNewDriver } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllTeams } from "../../redux/actions";
import validation from "./JS/validation";

function Form() {
  const dispatch = useDispatch();
  const stateTeams = useSelector((state) => state.allTeams);
  const stateMessage = useSelector((state) => state.messageFromCreate);
  const [formData, setFormData] = useState({
    forename: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: [],
  });
  const [formErrors, setFormErrors] = useState({
    forename: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const { options, name, value } = event.target;

    if (name === "teams") {
      const teams = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({
        ...formData,
        teams,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    setFormErrors(validation(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(formErrors).length === 0) {
      dispatch(createNewDriver(formData));
      setFormData({
        forename: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        description: "",
        teams: [],
      });
      setFormErrors({
        forename: "",
        surname: "",
        nationality: "",
        image: "",
        dob: "",
        description: "",
        teams: "",
      });
    }
  };

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (
    <div className="form-container">
      <h2>Crea el nuevo Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Nombre:
            <input
              type="text"
              name="forename"
              value={formData.forename}
              onChange={handleChange}
              className={formErrors.forename ? "error" : ""}
            />
            {formErrors.forename && (
              <span className="error-message">{formErrors.forename}</span>
            )}
          </label>
        </div>
        <div className="form-row">
          <label>
            Apellido:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className={formErrors.surname ? "error" : ""}
            />
            {formErrors.surname && (
              <span className="error-message">{formErrors.surname}</span>
            )}
          </label>
        </div>
        <div className="form-row">
          <label>
            Nacionalidad:
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className={formErrors.nationality ? "error" : ""}
            />
            {formErrors.nationality && (
              <span className="error-message">Campo requerido</span>
            )}
          </label>
        </div>
        <div className="form-row">
          <label>
            Imagen (URL):
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          {formErrors.image && (
            <span className="error-message">Campo requerido</span>
          )}
        </div>
        <div className="form-row">
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
          {formErrors.dob && (
            <span className="error-message">Campo requerido</span>
          )}
        </div>
        <div className="form-row">
          <label>
            Descripción:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {formErrors.description && (
              <span className="error-message">Campo requerido</span>
            )}
          </label>
        </div>
        <div className="form-row">
          <label>
            Escuderías:(Seleccione otras opciones manteniendo Control)
            <select
              multiple
              name="teams"
              value={formData.teams}
              onChange={handleChange}
            >
              {stateTeams.map((teams) => {
                return <option> {teams}</option>;
              })}
            </select>
            {formErrors.teams && (
              <span className="error-message">{formErrors.teams}</span>
            )}
          </label>
        </div>
        <div className="form-row">
          <button type="submit" disabled={Object.keys(formErrors).length !== 0}>
            Crear Nuevo Driver
          </button>
        </div>
      </form>
      {stateMessage && (
        <span className={stateMessage.response ? "message" : "error-message"}>
          {stateMessage.response || stateMessage}
        </span>
      )}

      <div>
        <Link to={"/home"}>Home</Link>
      </div>
    </div>
  );
}

export default Form;
