import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findDriverById } from "../../redux/actions";
import { clearDriverById } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./CSS/details.modul.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driverData = useSelector((state) => state.driverById);

  const driver = Array.isArray(driverData) ? driverData[0] : driverData;

  useEffect(() => {
    dispatch(findDriverById(id));

    return () => {
      dispatch(clearDriverById());
    };
  }, [dispatch, id]);

  return (
    <div className="backgroun">
      <div className={"card"}>
      <div>
        <Link to={`/edit/${id}`}>Editar</Link>
      </div>
        {driver === undefined ? (
          <p>Cargando...</p>
        ) : (
          <>
            <img
              src={
                driver.image.url ||
                "https://cdn.pixabay.com/photo/2013/07/13/01/10/race-driver-155235_1280.png"
              }
              alt={driver.forename || driver.name.forename}
              className="card-image"
              onError={(event) => {
                event.target.src =
                  "https://cdn.pixabay.com/photo/2013/07/13/01/10/race-driver-155235_1280.png";
              }}
            />

            <div className={"card-details"}>
              <h2>
                {driver.forename ? driver.forename : driver.name.forename}{" "}
                {driver.surname ? driver.surname : driver.name.surname}
              </h2>
              <p>
                <strong>Driver Ref:</strong> {driver.driverRef}
              </p>
              {Number(driver.number) ? (
                <p>
                  <strong>Number:</strong> {driver.number}
                </p>
              ) : (
                ""
              )}
              <p>
                <strong>Date of Birth:</strong>{" "}
                {new Date(driver.dob).toLocaleDateString()}
              </p>

              <p>
                <strong>Nationality:</strong> {driver.nationality}
              </p>
              <p>
                <strong>Team/s:</strong> {driver.teams}
              </p>
              <hr />
              <p className="description">
                <strong>Descripcion:</strong>
                {driver.description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
