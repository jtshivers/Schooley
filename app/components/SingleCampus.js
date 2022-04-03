/* eslint-disable complexity */
import React from "react";
import { connect } from "react-redux";
import { fetchCampus } from "../redux/singleCampus";
import { Link } from "react-router-dom";
import { updateCampus } from "../redux/campuses";
import { updateStudent } from "../redux/students";
import validUrl from "valid-url";
import NotFound from "./NotFound";

export class SingleCampus extends React.Component {
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
        console.log("this imageUrl is valid");
        this.validFields.imageUrl = true;
      } else {
        this.validFields.imageUrl = false;
      }
    } else {
      this.validFields.imageUrl = true;
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
      this.props.updateCampus({ ...this.state });
      const { campusId } = this.props.match.params;
      await this.props.fetchCampus(campusId);
      this.setState(this.props.campus);
    } else {
      this.setState((prevState) => ({ ...prevState }));
    }
  }

  async componentDidMount() {
    const { campusId } = this.props.match.params;
    await this.props.fetchCampus(campusId);
    this.setState(this.props.campus);
  }

  render() {
    const { name, imageUrl, address, description } = this.state;
    const { handleSubmit, handleChange } = this;

    const { campus } = this.props;
    let students = campus.students;
    // console.log("students are ", students);
    // console.log("campus is", campus);
    // console.log("campus students are", campus.students);
    console.log("campus is", campus);
    if (!Object.keys(campus).length) {
      return <NotFound type="campus" />;
    }
    return (
      <div className="single-campus-container">
        <div className="single-campus">
          <h2>{campus.name}</h2>
          <h3>{campus.address}</h3>
          <p>{campus.description}</p>
          <img src={campus.imageUrl} />
        </div>

        <div className="campus-student-container">
          {/* {students != null && <h2>Students</h2>} */}
          {students != null
            ? students.map((student) => (
                <div key={student.id} className="campus-student">
                  <Link to={`/students/${student.id}`} className="student-link">
                    {student.lastName}, {student.firstName[0]}
                    <img src={student.imageUrl} />
                    <button
                      type="button"
                      onClick={() =>
                        this.props.updateStudent({
                          ...student,
                          campusId: null,
                        })
                      }
                    >
                      Unregister
                    </button>
                  </Link>
                </div>
              ))
            : "We ain't got no students in here"}
        </div>

        <form className="single-campus-form" onSubmit={handleSubmit}>
          <h2>Edit Campus</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input name="name" onChange={handleChange} value={name} />
            {!this.validFields.name && (
              <p className="form-error">^ This field is required.</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input name="address" onChange={handleChange} value={address} />
            {!this.validFields.address && (
              <p className="form-error">^ This field is required.</p>
            )}
          </div>

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
            {!this.validFields.imageUrl && (
              <p className="form-error">^ If provided, must be a valid URL.</p>
            )}
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="submit-btn"
              onClick={() => this.props.updateCampus(this.state)}
            >
              Submit
            </button>
            <Link to="/campuses">
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
    campus: state.campus,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampus(id)),
    updateCampus: (campus) => dispatch(updateCampus(campus, history)),
    updateStudent: (student) => dispatch(updateStudent(student, history)),
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);
