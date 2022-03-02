import React, { useState } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { changeHighlightsDataFun } from "../redux/dataAction";

function Project({ covidData, changeHighlightsFun }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("WHOLE WORLD");

  let countriesData = covidData.countriesData;
  let currentData = covidData.currentData;

  function validCountry(t) {
    for (let d of countriesData) {
      if (d.Country.toLowerCase() === t.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  function searchData() {
    if (text != "") {
      if (validCountry(text) == true) {
        let data = countriesData.filter(
          (d) => d.Country.toLowerCase() === text.toLowerCase()
        )[0];
        changeHighlightsFun(data);
        setName(data.Country.toUpperCase());
      }
    }
  }

  return (
    <>
      <div id="body">
        <div className="container">
          <div className="left">
            <div className="ldiv1">
              <input
                type="text"
                id="input-country"
                placeholder="Search any Country"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <div className="btn" onClick={searchData}>
                CHECK
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
                <div className="wave wave5"></div>
              </div>
            </div>
            <div className="tableheaders">
              <div>COUNTRY</div>
              <div>CONFIRMED</div>
              <div>RECOVERED</div>
              <div>DEATHS</div>
            </div>
            <div className="tableHolder">
              <table id="all-info">
                <tbody>
                  {countriesData.map((data) => {
                    return (
                      <Card
                        key={data.ID}
                        data={data}
                        setNameFun={setName}
                      ></Card>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="right">
            <div className="country">{name}</div>
            <div className="right-heading">TODAY'S HIGHLIGHTS</div>
            <div className="specificDataBoxes">
              <div className="confirmed">
                <div className="box-heading">CONFIRMED</div>
                <div>
                  TOTAL :
                  <span className="TotalConfirmed">
                    {currentData.TotalConfirmed}
                  </span>
                </div>
                <div>
                  INCREASED BY :
                  <span className="NewConfirmed">
                    {currentData.NewConfirmed}
                  </span>
                </div>
              </div>
              <div className="recovered">
                <div className="box-heading">RECOVERED</div>
                <div>
                  TOTAL :{" "}
                  <span className="TotalRecovered">
                    {currentData.TotalRecovered}
                  </span>
                </div>
                <div>
                  INCREASED BY :
                  <span className="NewRecovered">
                    {currentData.NewRecovered}
                  </span>
                </div>
              </div>
              <div className="deaths">
                <div className="box-heading">DEATHS</div>
                <div>
                  TOTAL :{" "}
                  <span className="TotalDeaths">{currentData.TotalDeaths}</span>
                </div>
                <div>
                  INCREASED BY :
                  <span className="NewDeaths">{currentData.NewDeaths}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    covidData: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHighlightsFun: (data) => dispatch(changeHighlightsDataFun(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
