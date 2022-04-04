import React, { Component } from "react";
import { createCampus } from "../redux/campuses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import validUrl from "valid-url";

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageUrl: "",
      address: "",
      description: "",
    };

    this.validFields = {
      name: true,
      address: true,
      imageUrl: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateSubmission(state) {
    const { name, address, imageUrl } = state;
    if (typeof name === "string" && name.length > 0) {
      this.validFields.name = true;
    } else {
      this.validFields.name = false;
    }
    if (typeof address === "string" && address.length > 0) {
      this.validFields.address = true;
    } else {
      this.validFields.address = false;
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
    this.setState({
      name: "",
      imageUrl: "",
      address: "",
      description: "",
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
      this.props.createCampus({ ...this.state });
    }
  }

  render() {
    const { name, imageUrl, address, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form className="campus-form" onSubmit={handleSubmit}>
        <h2>Create Campus</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={handleChange} value={name} />
        </div>
        {!this.validFields.name && (
          <p className="form-error">^ This field is required.</p>
        )}

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input name="address" onChange={handleChange} value={address} />
        </div>
        {!this.validFields.address && (
          <p className="form-error">^ This field is required.</p>
        )}

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />
        </div>

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
  createCampus: (campus) => dispatch(createCampus(campus, history)),
});

export default connect(null, mapDispatch)(CreateCampus);
