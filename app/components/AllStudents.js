import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";
import CreateStudent from "./CreateStudent";
import { Link } from "react-router-dom";

export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    console.log("This is props in the AllStudents Component", this.props);
    return (
      <div className="studentList">
        {this.props.students.map((student) => (
          <div key={student.id} className="student">
            <Link to={`/students/${student.id}`}>
              {student.lastName}, {student.firstName}
              <p>GPA: {student.gpa}</p>
              <img src={student.imageUrl} />
            </Link>
          </div>
        ))}
        <CreateStudent />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
