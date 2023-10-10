import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findDriverById, upDateDriver } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driverById);
  const messageDb = useSelector((state) => state.messageFromCreate);
  const [formData, setFormData] = useState({
    forename: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: [],
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { id } = useParams();

  useEffect(() => {
    dispatch(findDriverById(id));
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(upDateDriver(formData, id));
  };

  return (
    <div className="form-container">
      <h2>Edita el Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Modifica el Nombre:</label>
          <label className="db-text">{driver.forename}</label>
          <input
            onChange={handleChange}
            type="text"
            id="forename"
            name="forename"
          />
        </div>
        <div className="form-row">
          <div>
            <label>Modifica el Apellido:</label>
            <label className="db-text">{driver.surname}</label>
            <input type="text" name="surename" onChange={handleChange} />
          </div>
        </div>
        <div>
          <label>Modifica la Nacionalidad:</label>
          <label className="db-text">{driver.nationality}</label>
          <input type="text" name="surename" onChange={handleChange} />
        </div>
        <div>
          <label>Modifica la Descripcion:</label>
          <label className="db-text">{driver.description}</label>
          <input type="text" name="surename" onChange={handleChange} />
        </div>
        <div className="form-row">
          <button type="submit">Crear Nuevo Driver</button>
        </div>
      </form>
        {messageDb? <div >{messageDb.message}</div>:""}
      <div>
        <Link to={"/home"}>Home</Link>
      </div>
    </div>
  );
};

export default Edit;
