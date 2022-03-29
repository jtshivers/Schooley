import axios from "axios";

const CREATE_CAMPUS = "CREATE_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const SET_CAMPUSES = "SET_CAMPUSES";

const _createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus,
  };
};

const _updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};

const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

export const createCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/campuses", campus);
    dispatch(_createCampus(created));
    history.push("/");
  };
};

export const updateCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/campuses/${campus.id}`,
      campus
    );
    dispatch(_updateCampus(updated));
    history.push("/");
  };
};

export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const { data: campus } = await axios.delete(`/api/campuses/${id}`);
    dispatch(_deleteCampus(campus));
    history.push("/");
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/campuses");
    dispatch(setCampuses(data));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return [...action.campuses];
    case CREATE_CAMPUS:
      console.log("create campus reducer reached");
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campus.id);
    case UPDATE_CAMPUS:
      return state.map((campus) =>
        campus.id === action.campus.id ? action.campus : campus
      );
    default:
      return state;
  }
  // return null;
}
