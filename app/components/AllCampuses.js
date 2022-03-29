import React from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/campuses";
import CreateCampus from "./CreateCampus";
import { Link } from "react-router-dom";

export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    console.log("This is props in the AllCampuses Component", this.props);
    return (
      <div className="campusList">
        {this.props.campuses.map((campus) => (
          <div key={campus.id} className="campus">
            <Link to={`/campuses/${campus.id}`}>
              <h2>{campus.name}</h2>
              <p>{campus.description}</p>
              <img src={campus.imageUrl} />
            </Link>
          </div>
        ))}
        <CreateCampus />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
