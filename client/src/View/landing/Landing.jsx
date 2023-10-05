import React from "react";
import { Link } from "react-router-dom";
import "./CSS/landing.modul.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="background-image"></div>
      <div className="content">
        <Link to="/home" className="no-underline">
          <button className="btn">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
