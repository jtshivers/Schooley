import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(props) {
  switch (props.type) {
    case "general":
      return (
        <div className="not-found">
          <h1>We're sorry! We can't find that page.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/" className="not-found-return">
            Home
          </Link>
        </div>
      );
    case "student":
      return (
        <div className="not-found">
          <h1>We're sorry! We can't find that student.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/students" className="not-found-return">
            Students
          </Link>
        </div>
      );
    case "campus":
      return (
        <div className="not-found">
          <h1>We're sorry! We can't find that campus.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/campuses" className="not-found-return">
            Campuses
          </Link>
        </div>
      );
    default:
      return (
        <div className="not-found">
          <h1>We're sorry! We can't find that page.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/" className="not-found-return">
            Home
          </Link>
        </div>
      );
  }
}
