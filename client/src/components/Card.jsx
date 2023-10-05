import React from "react";
import "./card.modul.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  forename,
  surname,
  driverRef,
  image,
  team,
}) {
  const handleLink = `/detail/${id}`;
  return (
    <Link to={handleLink} className="link-card">
      <div className="card">
        <img src={image} alt="" className="card-image" />
        <div className="card-details">
          <h2 className="card-title">
            Nombre: {forename} {surname}
          </h2>
          <p className="card-info">
            <strong>Driver Ref:</strong> {driverRef}
          </p>
          <p className="card-info">
            <strong>Team/s:</strong> {team}
          </p>
        </div>
      </div>
    </Link>
  );
}
