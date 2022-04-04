/* eslint-disable complexity */
import React, { Component } from "react";
import { createStudent } from "../redux/students";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import validUrl from "valid-url";
import validEmail from "email-validator";

class CreateStudent extends Component {
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
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: 0.0,
    });
    return Object.values(this.validFields).reduce((a, b) => a && b, true);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.validateSubmission({ ...this.state })) {
      this.props.createStudent({ ...this.state });
    }
  }

  render() {
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>New Student</h2>
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
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <Link to="/">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(null, mapDispatch)(CreateStudent);
