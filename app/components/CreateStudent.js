import React, { Component } from "react";
import { createStudent } from "../redux/students";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateStudent extends Component {
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
    this.props.createStudent({ ...this.state });
  }

  render() {
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="create-student-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" onChange={handleChange} value={firstName} />

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" onChange={handleChange} value={lastName} />

        <label htmlFor="email">Email:</label>
        <input name="email" onChange={handleChange} value={email} />

        <label htmlFor="imageUrl">Image URL:</label>
        <input name="imageUrl" onChange={handleChange} value={imageUrl} />

        <label htmlFor="gpa">GPA:</label>
        <input name="gpa" onChange={handleChange} value={gpa} />

        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(null, mapDispatch)(CreateStudent);
