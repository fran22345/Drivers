import React, { useState } from "react";
import "./CSS/form.modul.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: [],
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    nationality: false,
    dob: false,
    description: false,
    teams: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTeamChange = (event) => {
    const { options } = event.target;
    const teams = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({
      ...formData,
      teams,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const errors = {};
    
    if (formData.firstName.trim() === "") {
      errors.firstName = "Campo requerido";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      errors.firstName = "Debe contener solo letras";
    }
    
    if (formData.lastName.trim() === "") {
      errors.lastName = "Campo requerido";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      errors.lastName = "Debe contener solo letras";
    }
    
    if (formData.nationality.trim() === "") {
      errors.nationality = "Campo requerido";
    }
    
    if (formData.dob.trim() === "") {
      errors.dob = "Campo requerido";
    }
    
    if (formData.description.trim() === "") {
      errors.description = "Campo requerido";
    }
    
    if (formData.teams.length === 0) {
      errors.teams = "Seleccione al menos un equipo";
    }
  
    setFormErrors(errors);
  
    // Si no hay errores, puedes continuar con el envío de datos
    if (Object.keys(errors).length === 0) {
      // Realiza la acción de envío de datos aquí
      console.log("Formulario válido, enviando datos:", formData);
    }
  };
  

  return (
    <div className="form-container">
      <h2>Formulario de Carga de Datos del Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Nombre:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={formErrors.firstName ? "error" : ""}
            />
            {formErrors.firstName && (
              <span className="error-message">
                {formErrors.firstName}
              </span>
            )}
          </label>
        </div>
        <div className="form-row">
          <label>
            Apellido:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={formErrors.lastName ? "error" : ""}
            />
             {formErrors.lastName && (
              <span className="error-message">
                {formErrors.lastName}
              </span>
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
            Escuderías:
            <select
              multiple
              name="teams"
              value={formData.teams}
              onChange={handleTeamChange}
            >
              <option value="McLaren">McLaren</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Ferrari">Ferrari</option>
              {/* Agrega más opciones de escuderías según sea necesario */}
            </select>
            {formErrors.teams && (
              <span className="error-message">Campo requerido</span>
            )}
          </label>
        </div>
        <div className="form-row">
          <button type="submit">Crear Nuevo Driver</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
