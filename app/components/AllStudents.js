import React from "react";
import { connect } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/students";
import CreateStudent from "./CreateStudent";
import { Link } from "react-router-dom";

export class AllStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: "default",
      filter: "all",
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.sorter = this.sorter.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    this.props.fetchStudents();
  }
  handleSelect(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  sorter(arr) {
    if (this.state.sort === "default") {
      return arr;
    } else if (this.state.sort === "lastName") {
      return arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else {
      return arr.sort((a, b) => b.gpa - a.gpa);
    }
  }

  filter(arr) {
    console.log(arr);
    console.log(this.state);
    if (this.state.filter === "truant") {
      return arr.filter((student) => student.campusId !== null);
    } else {
      return arr;
    }
  }

  render() {
    const { handleSelect, sorter, filter } = this;
    return (
      <div className="studentList">
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" id="studentSort" onChange={handleSelect}>
          <option value="" disabled selected>
            Select
          </option>
          <option value="gpa">GPA</option>
          <option value="lastName">Last Name</option>
        </select>
        <label htmlFor="filter">Filter: </label>
        <select name="filter" id="studentFilter" onChange={handleSelect}>
          <option value="" disabled selected>
            Select
          </option>
          <option value="all">All</option>
          <option value="truant">Truant Students</option>
        </select>
        {filter(sorter(this.props.students)).map((student) => (
          <div key={student.id} className="student">
            <Link to={`/students/${student.id}`} className="student-link">
              {/* <div className="form-group"> */}
              <h2>
                {student.lastName}, {student.firstName}
              </h2>
              {/* <form onSubmit={(ev) => ev.preventDefault()}>
                <button
                  type="button"
                  className="remove"
                  onClick={() => this.props.deleteStudent(student.id)}
                >
                  X
                </button>
              </form> */}
              {/* </div> */}

              <p>GPA: {student.gpa}</p>
              <img src={student.imageUrl} />
            </Link>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <button
                type="button"
                className="remove"
                onClick={() => this.props.deleteStudent(student.id)}
              >
                X
              </button>
            </form>
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
