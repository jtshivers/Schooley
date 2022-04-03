import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Campus from "./AllCampuses";
import SingleCampus from "./SingleCampus";
import Student from "./AllStudents";
import SingleStudent from "./SingleStudent";
import NotFound from "./NotFound";
import Homepage from "./Homepage";

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
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/campuses" component={Campus} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={Student} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
