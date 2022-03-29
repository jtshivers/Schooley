import React, { Component } from "react";
import { createCampus } from "../redux/campuses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageUrl: "",
      address: "",
      description: "",
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
    this.props.createCampus({ ...this.state });
  }

  render() {
    const { name, imageUrl, address, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="create-campus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label htmlFor="address">Address:</label>
        <input name="address" onChange={handleChange} value={address} />

        <label htmlFor="description">Description:</label>
        <input name="description" onChange={handleChange} value={description} />

        <label htmlFor="imageUrl">Image URL:</label>
        <input name="imageUrl" onChange={handleChange} value={imageUrl} />

        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampus(campus, history)),
});

export default connect(null, mapDispatch)(CreateCampus);
