import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Campus from "./AllCampuses";
import SingleCampus from "./SingleCampus";
import Student from "./AllStudents";
import SingleStudent from "./SingleStudent";
import NotFound from "./NotFound";
import Homepage from "./Homepage";
import NavBar from "./NavBar";

const Routes = () => {
  return (
    <Router>
      <div>
        <NavBar />
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
