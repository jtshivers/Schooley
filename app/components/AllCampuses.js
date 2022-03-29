import React from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/campuses";

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
            <h2>{campus.name}</h2>
            <p>{campus.description}</p>
            <img src={campus.imageUrl} />
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

const mapDispatch = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
