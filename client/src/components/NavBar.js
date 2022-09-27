import { Link } from "react-router-dom";
import React from "react";

const NavBar = () =>{
    return(
        <>
        <div className="navbar">
              <Link to="/">Home</Link>
              <br></br>
              <Link to="/SpeciesInfo">Species Info</Link>
              <br></br>
              <Link to="/SightingsInfo">Sightings Info</Link>
              <br></br>
              <Link to="/IndividualsInfo">Individuals Info</Link>

        </div>
    </>
  );
};

export default NavBar;