import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findDriverById } from "../../redux/actions";
import { clearDriverById } from "../../redux/actions";
import "./CSS/details.modul.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driverById[0]);
  console.log(driver);
  useEffect(() => {
    dispatch(findDriverById(id));

    return () => {
      dispatch(clearDriverById());
    };
  }, [dispatch, id]);

  return (
    <div className="backgroun">
      <div className={"card"}>
        {driver && (
          <>
            <img
              src={driver.image.url}
              alt={driver.name.forename}
              className={"card-image"}
            />
            <div className={"card-details"}>
              <h2>
                {driver.name.forename} {driver.name.surname}
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
                <strong>Date of Birth:</strong> {driver.dob}
              </p>
              <p>
                <strong>Nationality:</strong> {driver.nationality}
              </p>
              <p>
                <strong>Team/s:</strong> {driver.teams}
              </p>
              <p className="description">
                <strong>Image By:</strong> {driver.image.imageby}
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
