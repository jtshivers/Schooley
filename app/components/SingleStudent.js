import React from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../redux/singleStudent";
import { Link } from "react-router-dom";

export class SingleStudent extends React.Component {
  componentDidMount() {
    const { studentId } = this.props.match.params;
    console.log("student id is", studentId);
    this.props.fetchStudent(studentId);
    console.log("props is now ", this.props);
  }

  render() {
    console.log("This is props in the SingleStudent Component", this.props);
    const { student } = this.props;
    return (
      <div>
        <h2>
          {student.lastName}, {student.firstName}
        </h2>
        <h3>{student.email}</h3>
        <h3>GPA: {student.gpa}</h3>
        {student.campus != null ? (
          <Link to={`/campuses/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        ) : (
          "This kid just ain't right. We don't let him in our schools anymore."
        )}
        <img src={student.imageUrl} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudent(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);
