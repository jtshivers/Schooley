import axios from "axios";

const SET_STUDENT = "SET_STUDENT";

export const setStudent = (student) => {
  return {
    type: SET_STUDENT,
    student,
  };
};

export const fetchStudent = (id) => {
  return async (dispatch) => {
    const { data: student } = await axios.get(`/api/students/${id}`);
    dispatch(setStudent(student));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    default:
      return state;
  }
};
