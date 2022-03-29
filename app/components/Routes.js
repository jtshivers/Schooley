import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Campus from "./AllCampuses";
import Student from "./AllStudents";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/">Home</Link>
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Route path="/campuses" component={Campus} />
          <Route path="/students" component={Student} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
