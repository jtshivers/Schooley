import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(props) {
  switch (props.type) {
    case "general":
      return (
        <div className="notfound">
          <h1>We're sorry! We can't find that page.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/">Go back home</Link>
        </div>
      );
    case "student":
      return (
        <div className="notfound">
          <h1>We're sorry! We can't find that student.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/students">Back to students</Link>
        </div>
      );
    case "campus":
      return (
        <div className="notfound">
          <h1>We're sorry! We can't find that campus.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/campuses">Back to campuses</Link>
        </div>
      );
    default:
      return (
        <div className="notfound">
          <h1>We're sorry! We can't find that page.</h1>
          <img src="https://i.imgflip.com/105j5q.jpg" />
          <Link to="/">Go back home</Link>
        </div>
      );
  }
}
