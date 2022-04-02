import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../redux/singleStudent";
import { Link } from "react-router-dom";
import { updateStudent } from "../redux/students";
import { isWebUri } from "valid-url";
import { useForm } from "react-hook-form";

///////////TRYING REACT HOOK FORM ///////////////
///////////TRYING STATELESS FUNCTIONAL //////////
export const SingleStudent = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     imageUrl: "",
  //     gpa: 0.0,
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // const handleChange = (evt) => {
  //   this.setState({
  //     [evt.target.name]: evt.target.value,
  //   });
  // }

  // const componentDidMount = async () => {
  //   const { studentId } = this.props.match.params;
  //   await this.props.fetchStudent(studentId);
  //   this.setState(this.props.student);
  // }

  let [student, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: 0.0,
  });

  const fetcher = async (studentId) => {
    await props.fetchStudent(studentId);
  };

  useEffect(() => {
    const { studentId } = props.match.params;
    fetcher(studentId);
    student = props.student;
  }, []);
  console.log(props.student);
  student = props.student;
  console.log(student);

  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
    setValue,
  } = useForm({
    imageUrl: "",
  });

  const handleChange = async (evt) => {
    const { name, value } = evt.target;
    console.log("name" + name + " value", value);
    await setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValue(name, value);
  };

  const onSubmit = async (data) => {
    console.log("data is ", data);
    console.log("props is ", props);
    // evt.preventDefault();
    for (let i of Object.keys(touchedFields)) {
      props.student[i] = data[i];
    }
    console.log("props is ", props);
    props.updateStudent({ ...props.student });
    console.log("id is ", props.student.id);
    // const { studentId } = props.match.params;
    await props.fetchStudent(props.student.id);
    setState(props.student);
  };

  // const { handleSubmit, handleChange } = this;
  const { firstName, lastName, email, imageUrl, gpa } = student;
  // const { student } = this.props;
  return (
    <div>
      <h2>
        {student.lastName}, {student.firstName}
      </h2>
      <h3>{student.email}</h3>
      <h3>GPA: {student.gpa}</h3>
      {student.campus != null ? (
        <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link>
      ) : (
        "This kid just ain't right. We don't let him in our schools anymore."
      )}
      <img src={student.imageUrl} />
      <form id="edit-student-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name:</label>
        <input
          {...register("firstName")}
          onChange={handleChange}
          value={firstName || ""}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          {...register("lastName")}
          onChange={handleChange}
          value={lastName}
        />

        <label htmlFor="email">Email:</label>
        <input
          {...register("email")}
          onChange={handleChange}
          value={email || ""}
        />

        <label htmlFor="gpa">GPA:</label>
        <input {...register("gpa")} onChange={handleChange} value={gpa || ""} />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          {...register("imageUrl", {
            required: false,
            message: "Must be a valid URL",
            validate: isWebUri,
          })}
          onChange={handleChange}
          value={imageUrl || ""}
          placeholder="URL"
        />
        <p>{errors.imageUrl && "Must be a valid URL"}</p>
        <button type="submit" onClick={() => props.updateStudent(student)}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudent(id)),
    updateStudent: (student) => dispatch(updateStudent(student, history)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);
