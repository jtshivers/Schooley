import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-item-container" id="Home">
          <Link to="/" className="nav-item">
            Home
          </Link>
        </div>

        <div className="nav-item-container" id="Campuses">
          <Link to="/campuses" className="nav-item">
            Campuses
          </Link>
        </div>

        <div className="nav-item-container" id="Students">
          <Link to="/students" className="nav-item">
            Students
          </Link>
        </div>
      </nav>
    );
  }
}
