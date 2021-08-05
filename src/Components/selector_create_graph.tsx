import React, { useState } from "react";
import CreateGraph from "./create_graph";
import "../Style/create_graph.css";

const SelectorCreateGraph = ({ data }: { data: any }) => {
  const [regionSelected, setRegionSelected] = useState("Global");
  const [currentSelectedForGraph, setCurrentSelectedForGraph] =
    useState("global_deaths");

  let countries: string[] = [],
    countries_vaccine_admin: string[] = [];

  let min = 5,
    max = 255;

  let selectedRegionIdConf = "",
    selectedRegionIdDeath = "",
    selectedRegionIdRec = "",
    selectedRegionIdVaccineAd = "N/A";

  //accessing the last element of data
  //here d = data[i]['value'][j];
  //let last_elem = d[Object.keys(d)[Object.keys(d).length - 1]];
  //console.log(data["global_vaccine_admin"]["value"][0]["Country_Region"]);

  for (let i in data) {
    if (i === "global_vaccine_data") break;
    let bg_col: string[] = [];
    let bd_col: string[] = [];
    let latest_cases_report_for_global: string[] = [];

    for (let j in data[i]["value"]) {
      const d = data[i]["value"][j];
      const r = Math.floor(Math.random() * (max - min) + min),
        g = Math.floor(Math.random() * (max - min) + min),
        b = Math.floor(Math.random() * (max - min) + min);

      if (
        i !== "global_vaccine_admin" &&
        d["Province/State"] === "" &&
        d["Country/Region"]
      ) {
        let last_elem = d[Object.keys(d)[Object.keys(d).length - 1]];
        latest_cases_report_for_global.push(last_elem);
        bg_col.push(`rgba(${r},${g},${b},0.5)`);
        bd_col.push(`rgba(${r},${g},${b},1)`);

        if (
          i === "global_deaths" &&
          d["Country/Region"] === regionSelected &&
          selectedRegionIdDeath === ""
        ) {
          selectedRegionIdDeath =
            selectedRegionIdConf =
            selectedRegionIdRec =
              j;
        }

        if (i === "global_deaths") countries.push(d["Country/Region"]);
      } else if (d["Province_State"] === "" && d["Country_Region"]) {
        let last_elem = d[Object.keys(d)[Object.keys(d).length - 1]];
        latest_cases_report_for_global.push(last_elem);
        countries_vaccine_admin.push(d["Country_Region"]);
        bg_col.push(`rgba(${r},${g},${b},0.5)`);
        bd_col.push(`rgba(${r},${g},${b},1)`);

        if (
          d["Country_Region"] === regionSelected &&
          selectedRegionIdVaccineAd === "N/A"
        ) {
          selectedRegionIdVaccineAd = j;
        }
      }
    }
    data[i]["background-color"] = bg_col;
    data[i]["border-color"] = bd_col;
    data[i]["report-for-global"] = latest_cases_report_for_global;
    //console.log(data[i]["report-for-global"]);
    //console.log(i);
  }

  const globalSelector = (
    <select
      value={currentSelectedForGraph}
      onChange={(e: any) => setCurrentSelectedForGraph(e.target.value)}
      className="graphGlobal_selector"
    >
      <option value="global_deaths"> Global Deaths </option>
      <option value="global_recoveries"> Global Recoveries </option>
      <option value="global_confirmed"> Global Confirmed </option>
      <option value="global_vaccine_admin">Global Vaccines Administered</option>
    </select>
  );

  return (
    <>
      <div className="selectorsInGraph_div">
        <select
          value={regionSelected}
          onChange={(e) => setRegionSelected(e.target.value)}
          className="create_graph_Selector"
        >
          <option value={"Global"}> Global </option>
          {countries.map((val: string, index: number) => (
            <option key={index} value={val}>
              {val}{" "}
            </option>
          ))}
        </select>
        {regionSelected === "Global" ? globalSelector : <> </>}
      </div>
      <CreateGraph
        data={data}
        selectedRegion={regionSelected}
        countries_list={countries}
        countries_vaccine_admin={countries_vaccine_admin}
        selectedRegionIdDeath={selectedRegionIdDeath}
        selectedRegionIdRec={selectedRegionIdRec}
        selectedRegionIdVaccineAd={selectedRegionIdVaccineAd}
        selectedRegionIdConf={selectedRegionIdConf}
        currentSelectedForGraph={currentSelectedForGraph}
      />
    </>
  );
};

export default SelectorCreateGraph;
