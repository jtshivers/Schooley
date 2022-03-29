import axios from "axios";

const CREATE_STUDENT = "CREATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const SET_STUDENTS = "SET_STUDENTS";

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};

const _updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

export const createStudent = (student, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/students", student);
    dispatch(_createStudent(created));
    history.push("/students");
  };
};

export const updateStudent = (student, history) => {
  return async (dispatch) => {
    const currentPath = history.location.pathname;
    const { data: updated } = await axios.put(
      `/api/students/${student.id}`,
      student
    );
    dispatch(_updateStudent(updated));
    // history.push(`/students`);
    // const currentPath = history.location.pathname;
    currentPath.includes("students")
      ? history.push(`/students/${student.id}`)
      : history.push(currentPath);
  };
};

export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    const { data: student } = await axios.delete(`/api/students/${id}`);
    console.log("history is ", history);
    dispatch(_deleteStudent(student));
    history.push("/students");
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/students");
    dispatch(setStudents(data));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return [...action.students];
    case CREATE_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id);
    case UPDATE_STUDENT:
      return state.map((student) =>
        student.id === action.student.id ? action.student : student
      );
    default:
      return state;
  }
  // return null;
}
