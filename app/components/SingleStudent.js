/* eslint-disable complexity */
import React from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../redux/singleStudent";
import { Link } from "react-router-dom";
import { updateStudent } from "../redux/students";
import validUrl from "valid-url";
import validEmail from "email-validator";
import NotFound from "./NotFound";

export class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: 0.0,
    };
    this.validFields = {
      firstName: true,
      lastName: true,
      email: true,
      imageUrl: true,
      gpa: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateSubmission(state) {
    const { firstName, lastName, email, imageUrl } = state;
    const gpa = parseFloat(this.state.gpa);
    if (typeof firstName === "string" && firstName.length > 0) {
      this.validFields.firstName = true;
    } else {
      this.validFields.firstName = false;
    }
    if (typeof lastName === "string" && lastName.length > 0) {
      this.validFields.lastName = true;
    } else {
      this.validFields.lastName = false;
    }
    if (
      typeof email === "string" &&
      email.length > 0 &&
      validEmail.validate(email)
    ) {
      this.validFields.email = true;
    } else {
      this.validFields.email = false;
    }
    if (typeof imageUrl === "string" && imageUrl.length > 0) {
      if (validUrl.isWebUri(imageUrl)) {
        this.validFields.imageUrl = true;
      } else {
        this.validFields.imageUrl = false;
      }
    } else {
      this.validFields.imageUrl = true;
    }
    if (typeof gpa === "number" && gpa >= 0 && gpa <= 4) {
      this.validFields.gpa = true;
    } else {
      this.validFields.gpa = false;
    }
    return Object.values(this.validFields).reduce((a, b) => a && b, true);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.validateSubmission({ ...this.state })) {
      this.props.updateStudent(this.state);
      const { studentId } = this.props.match.params;
      await this.props.fetchStudent(studentId);
      this.setState(() => this.props.student);
    } else {
      this.setState((prevState) => ({ ...prevState }));
    }
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
    if (!Object.keys(student).length) {
      return <NotFound type="student" />;
    }
    return (
      <div className="single-student-container">
        <div className="single-student">
          <h2>
            {student.lastName}, {student.firstName}
          </h2>
          <h3>{student.email}</h3>
          <h3>GPA: {student.gpa}</h3>
          <img src={student.imageUrl} />
          {student.campus != null ? (
            <Link to={`/campuses/${student.campus.id}`} className="school-link">
              {student.campus.name}
            </Link>
          ) : (
            "This kid just ain't right. We don't let him in our schools anymore."
          )}
        </div>

        <form className="single-student-form" onSubmit={handleSubmit}>
          <h2>Edit Student</h2>

          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" onChange={handleChange} value={firstName} />
          </div>
          {!this.validFields.firstName && (
            <p className="form-error">^ This field is required.</p>
          )}

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" onChange={handleChange} value={lastName} />
          </div>
          {!this.validFields.lastName && (
            <p className="form-error">^ This field is required.</p>
          )}

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="email" onChange={handleChange} value={email} />
          </div>
          {!this.validFields.email && (
            <p className="form-error">^ Must be a valid email address.</p>
          )}

          <div className="form-group">
            <label htmlFor="gpa">GPA:</label>
            <input name="gpa" onChange={handleChange} value={gpa} />
          </div>
          {!this.validFields.gpa && (
            <p className="form-error">^ Must be a number between 0 and 4.</p>
          )}

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input name="imageUrl" onChange={handleChange} value={imageUrl} />
          </div>
          {!this.validFields.imageUrl && (
            <p className="form-error">^ If provided, must be a valid URL.</p>
          )}

          <div className="form-group">
            <button
              type="submit"
              className="submit-btn"
              onClick={() => this.props.updateStudent(this.state)}
            >
              Submit
            </button>
            <Link to="/students">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </Link>
          </div>
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
