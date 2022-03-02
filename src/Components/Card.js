import React from "react";
import { connect } from "react-redux";

import { changeHighlightsDataFun } from "../redux/dataAction";

function Card({ changeHighlightsFun, data, setNameFun }) {
    
  function doit() {
    changeHighlightsFun(data);
    setNameFun(data.Country);
  }

  return (
    <>
      <tr
        onClick={() => {
          doit();
        }}
      >
        <td>{data.Country}</td>
        <td>{data.TotalConfirmed}</td>
        <td>{data.TotalRecovered}</td>
        <td>{data.TotalDeaths}</td>
      </tr>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHighlightsFun: (data) => dispatch(changeHighlightsDataFun(data)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
