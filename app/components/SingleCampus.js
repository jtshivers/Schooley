import React from "react";
import { connect } from "react-redux";
import { fetchCampus } from "../redux/singleCampus";
import { Link } from "react-router-dom";
import { updateCampus } from "../redux/campuses";
import { updateStudent } from "../redux/students";

export class SingleCampus extends React.Component {
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

  async handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateCampus({ ...this.state });
    const { campusId } = this.props.match.params;
    await this.props.fetchCampus(campusId);
    this.setState(this.props.campus);
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
    console.log("students are ", students);
    console.log("campus is", campus);
    console.log("campus students are", campus.students);
    return (
      <div>
        <h2>{campus.name}</h2>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
        <img src={campus.imageUrl} />
        {students != null
          ? students.map((student) => (
              <div key={student.id} className="student">
                <Link to={`/students/${student.id}`}>
                  {student.lastName}, {student.firstName[0]}
                  <img src={student.imageUrl} />
                  <button
                    type="button"
                    onClick={() =>
                      this.props.updateStudent({ ...student, campusId: null })
                    }
                  >
                    Unregister
                  </button>
                </Link>
              </div>
            ))
          : "We ain't got no students in here"}
        <form id="create-campus-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="address">Address:</label>
          <input name="address" onChange={handleChange} value={address} />

          <label htmlFor="description">Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />

          <label htmlFor="imageUrl">Image URL:</label>
          <input name="imageUrl" onChange={handleChange} value={imageUrl} />

          <button
            type="submit"
            onClick={() => this.props.updateCampus(this.state)}
          >
            Submit
          </button>
          <Link to="/">Cancel</Link>
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
