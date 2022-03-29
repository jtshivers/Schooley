import React from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../redux/singleStudent";
import { Link } from "react-router-dom";
import { updateStudent } from "../redux/students";

export class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: 0.1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStudent({ ...this.state });
  }

  async componentDidMount() {
    const { studentId } = this.props.match.params;
    await this.props.fetchStudent(studentId);
    this.setState(this.props.student);
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
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
        <form id="edit-student-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" onChange={handleChange} value={firstName} />

          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" onChange={handleChange} value={lastName} />

          <label htmlFor="email">Email:</label>
          <input name="email" onChange={handleChange} value={email} />

          <label htmlFor="gpa">GPA:</label>
          <input name="gpa" onChange={handleChange} value={gpa} />

          <label htmlFor="imageUrl">Image URL:</label>
          <input name="imageUrl" onChange={handleChange} value={imageUrl} />

          <button
            type="submit"
            onClick={() => this.props.updateStudent(this.state)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudent(id)),
    updateStudent: (student) => dispatch(updateStudent(student, history)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);
