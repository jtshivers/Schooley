import React from "react";
import { connect } from "react-redux";
import { fetchCampuses, deleteCampus } from "../redux/campuses";
import CreateCampus from "./CreateCampus";
import { Link } from "react-router-dom";

export class AllCampuses extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: "default",
      filter: "all",
    };
    this.sorter = this.sorter.bind(this);
    this.filter = this.filter.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampuses();
  }

  handleSelect(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sorter(arr) {
    if (this.state.sort === "default") {
      return arr;
    } else {
      return arr.sort((a, b) =>
        a.students ? b.students.length - a.students.length : arr
      );
    }
  }

  filter(arr) {
    if (this.state.filter === "empty") {
      return arr.filter(
        (campus) => campus.students && campus.students.length === 0
      );
    } else {
      return arr;
    }
  }

  render() {
    const { handleSelect, sorter, filter } = this;
    return (
      <div className="campusList">
        <div className="options-campuses">
          <h2>Options</h2>
          <div className="form-group">
            <label htmlFor="sort">Sort By: </label>
            <select name="sort" id="campusSort" onChange={handleSelect}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="numStudents">Size</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="filter">Filter: </label>
            <select name="filter" id="campusFilter" onChange={handleSelect}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="all">All</option>
              <option value="empty">Empty Schools</option>
            </select>
          </div>
        </div>
        <CreateCampus />
        {filter(sorter(this.props.campuses)).map((campus) => (
          <div key={campus.id} className="campus">
            <Link to={`/campuses/${campus.id}`} className="campus-link">
              <h2>{campus.name}</h2>
              {campus.students && (
                <h3>
                  {campus.students.length} Student
                  {campus.students.length > 1 || campus.students.length === 0
                    ? "s"
                    : ""}
                </h3>
              )}
              <p>{campus.description}</p>
              <img src={campus.imageUrl} />
            </Link>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <button
                type="button"
                className="remove"
                onClick={() => this.props.deleteCampus(campus.id)}
              >
                X
              </button>
            </form>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (id) => dispatch(deleteCampus(id, history)),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
