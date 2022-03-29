import React from "react";
import { connect } from "react-redux";
import { fetchCampus } from "../redux/singleCampus";
import { Link } from "react-router-dom";

export class SingleCampus extends React.Component {
  componentDidMount() {
    const { campusId } = this.props.match.params;
    console.log("campus id is", campusId);
    this.props.fetchCampus(campusId);
    console.log("props is now ", this.props);
  }

  render() {
    console.log("This is props in the SingleCampus Component", this.props);
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
                </Link>
              </div>
            ))
          : "We ain't got no students in here"}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);
