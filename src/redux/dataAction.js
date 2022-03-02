import axios from "axios";

import * as actionTypes from "./actions";

const fetchReq = () => {
  return {
    type: actionTypes.FETCH_REQ,
  };
};

const fetchSuc = (rawData, countriesData, globalData) => {
  return {
    type: actionTypes.FETCH_SUC,
    payload: {
      rawData: rawData,
      countriesData: countriesData,
      globalData: globalData,
    },
  };
};

const fetchFail = (e) => {
  return {
    type: actionTypes.FETCH_FAIL,
    payload: e,
  };
};

const returnChangeHighlightsDataFunDispatch = (data) => {
  return { type: actionTypes.CHANGE_HIGHLIGHTS, payload: data };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchReq());

    try {
      let res = await axios.get("https://api.covid19api.com/summary");
      let rawData = res.data;
      let countriesData = rawData.Countries;
      let globalData = rawData.Global;
      dispatch(fetchSuc(rawData, countriesData, globalData));
    } catch (e) {
      dispatch(fetchFail(e.message));
    }
  };
};

export const changeHighlightsDataFun = (data) => {
  return (dispatch) => {
    dispatch(returnChangeHighlightsDataFunDispatch(data));
  };
};
