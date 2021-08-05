import React, { useState } from "react";
import { Chart, defaults, Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

const GlobalGraph = ({
  data,
  countries_list,
  countries_vaccine_admin,
  currentSelectedForGraph,
}: {
  data: any;
  countries_list: string[];
  countries_vaccine_admin: string[];
  currentSelectedForGraph: string;
}) => {
  //const [currentSelectedForGraph, setCurrentSelectedForGraph] =
  //useState("global_deaths");

  defaults.color = "#5e5e5d";
  defaults.font.weight = "normal";
  defaults.scales.category.ticks.autoSkip = false;
  Chart.register(zoomPlugin);

  const countries = countries_list;
  const total_global_deaths_list =
    data[currentSelectedForGraph]["report-for-global"];
  //console.log(data[currentSelectedForGraph]["report-for-global"]);

  //console.log(countries.length);
  //console.log(countries_vaccine_admin.length);

  const barData = {
    labels:
      currentSelectedForGraph === "global_vaccine_admin"
        ? countries_vaccine_admin
        : countries,
    datasets: [
      {
        label: "# of deaths",
        data: total_global_deaths_list,
        backgroundColor: data[currentSelectedForGraph]["background-color"],
        borderColor: data[currentSelectedForGraph]["border-color"],
        borderWidth: 3,
      },
    ],
  };

  const scales: any = {
    x: {
      type: "category",
      min: 120,
      max: 299,
    },
    y: {
      type: "linear",
    },
  };
  Object.keys(scales).forEach((scale) => Object.assign(scales[scale]));
  const options = {
    //maintainAspectRatio: false,
    //responsive: true,
    indexAxis: "x",
    scales: scales, //scales: {
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          threshold: 5,
        },
        zoom: {
          enabled: true,
          //wheel: {
          //enabled: true,
          //},
          //pinch: {
          //enabled: true,
          //},
        },
      },
      legend: {
        position: "top",
        align: "end",
        maxHeight: 100,
        labels: { color: "#000000" },
      },
      title: {
        display: true,
        text: "Global Covid-19 Death Index",
        padding: {
          top: 10,
        },
        font: {
          size: 19,
        },
      },
    },
  };
  return (
    <div className="parentBar">
      <div className="jDiv">
        <Bar className={"Bar"} data={barData} options={options} />{" "}
      </div>
    </div>
  );
};

//<select
//value={currentSelectedForGraph}
//onChange={(e: any) => setCurrentSelectedForGraph(e.target.value)}
//className="graphGlobal_selector"
//>
//<option value="global_deaths"> Global Deaths </option>
//<option value="global_recoveries"> Global Recoveries </option>
//<option value="global_confirmed"> Global Confirmed </option>
//<option value="global_vaccine_admin">
//Global Vaccines Administered
//</option>
//</select>
//<Bar
//className={"Bar"}
//height={770}
//width={5000}
//data={barData}
//options={options}
///>{" "}

export default GlobalGraph;
