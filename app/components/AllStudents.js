import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";

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
            <h2>
              {student.lastName}, {student.firstName}
            </h2>
            <p>GPA: {student.gpa}</p>
            <img src={student.imageUrl} />
          </div>
        ))}
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
