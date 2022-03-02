import * as actionTypes from "./actions";

const initialState = {
  loading: false,
  error: "",
  rawData: {},
  countriesData: [],
  currentData: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQ:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUC:
      return {
        ...state,
        loading: false,
        rawData: action.payload.rawData,
        countriesData: action.payload.countriesData,
        currentData: action.payload.globalData,
      };
    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.CHANGE_HIGHLIGHTS:
      return {
        ...state,
        currentData: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
