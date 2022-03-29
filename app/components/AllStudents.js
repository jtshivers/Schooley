import React from "react";
import { connect } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/students";
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
              <h2>
                {student.lastName}, {student.firstName}
              </h2>
              <form onSubmit={(ev) => ev.preventDefault()}>
                <button
                  type="button"
                  className="remove"
                  onClick={() => this.props.deleteStudent(student.id)}
                >
                  X
                </button>
              </form>
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

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: (id) => dispatch(deleteStudent(id, history)),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
