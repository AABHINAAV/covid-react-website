import React, { useEffect } from "react";

import { fetchData } from "./redux/dataAction";
import Project from "./Components/Project";
import { connect } from "react-redux";

function App({ covidData, fetchDataFun }) {
  useEffect(() => {
    fetchDataFun();
    // console.log(covidData)
  }, []);

  return (
    <>
      {covidData.loading === false && covidData.error === "" ? (
        <Project />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    covidData: state.data,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    fetchDataFun: () => dispath(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
