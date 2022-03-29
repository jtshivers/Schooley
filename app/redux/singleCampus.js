import axios from "axios";

const SET_CAMPUS = "SET_CAMPUS";

export const setCampus = (campus) => {
  return {
    type: SET_CAMPUS,
    campus,
  };
};

export const fetchCampus = (id) => {
  return async (dispatch) => {
    const { data: campus } = await axios.get(`/api/campuses/${id}`);
    dispatch(setCampus(campus));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};
