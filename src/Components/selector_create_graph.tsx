import React, { useState } from "react";
import CreateGraph from "./create_graph";

const SelectorCreateGraph = ({ data }: { data: any }) => {
  const [regionSelected, setRegionSelected] = useState("Global");

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
  return (
    <>
      <select
        value={regionSelected}
        onChange={(e) => setRegionSelected(e.target.value)}
      >
        <option value={"Global"}> Global </option>
        {countries.map((val: string, index: number) => (
          <option key={index} value={val}>
            {val}{" "}
          </option>
        ))}
      </select>
      <CreateGraph
        data={data}
        selectedRegion={regionSelected}
        countries_list={countries}
        countries_vaccine_admin={countries_vaccine_admin}
        selectedRegionIdDeath={selectedRegionIdDeath}
        selectedRegionIdRec={selectedRegionIdRec}
        selectedRegionIdVaccineAd={selectedRegionIdVaccineAd}
        selectedRegionIdConf={selectedRegionIdConf}
      />
    </>
  );
};

export default SelectorCreateGraph;
