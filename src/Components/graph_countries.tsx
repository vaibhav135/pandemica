import React from "react";
import { Chart, defaults, Doughnut, Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

const CountriesGraph = ({
  data,
  countries_list,
  countries_vaccine_admin,
  selectedRegion,
  selectedRegionIdDeath,
  selectedRegionIdRec,
  selectedRegionIdVaccineAd,
  selectedRegionIdConf,
}: {
  data: any;
  countries_list: string[];
  countries_vaccine_admin: string[];
  selectedRegion: string;
  selectedRegionIdDeath: string;
  selectedRegionIdRec: string;
  selectedRegionIdVaccineAd: string;
  selectedRegionIdConf: string;
}) => {
  defaults.scales.category.ticks.autoSkip = true;
  defaults.color = "#5e5e5d";
  defaults.font.weight = "normal";
  Chart.register(zoomPlugin);

  const getGlobalDeathArrList = Object.values(
    data["global_deaths"]["value"][selectedRegionIdDeath]
  ).slice(4, data["global_deaths"]["value"][selectedRegionIdDeath].length);

  const getGlobalRecArrList = Object.values(
    data["global_recoveries"]["value"][selectedRegionIdRec]
  ).slice(4, data["global_recoveries"]["value"][selectedRegionIdRec].length);

  const getGlobalConfArrList = Object.values(
    data["global_confirmed"]["value"][selectedRegionIdConf]
  ).slice(4, data["global_confirmed"]["value"][selectedRegionIdConf].length);

  const getLabels = Object.keys(
    data["global_deaths"]["value"][selectedRegionIdDeath]
  ).slice(4, data["global_deaths"]["value"][selectedRegionIdDeath].length);

  const total_global_deaths =
      data["global_deaths"]["report-for-global"][selectedRegionIdDeath],
    total_global_recoveries =
      data["global_recoveries"]["report-for-global"][selectedRegionIdRec],
    total_global_confirmed =
      data["global_confirmed"]["report-for-global"][selectedRegionIdConf];

  console.log(selectedRegionIdVaccineAd);

  let total_vaccine_administered = "Not Found";
  if (selectedRegionIdVaccineAd !== "N/A") {
    total_vaccine_administered =
      data["global_vaccine_admin"]["report-for-global"][
        selectedRegionIdVaccineAd
      ];
  }

  //console.log("vaccine admin array: " + total_vaccine_administered);
  //console.log("id: " + getGlobalDeathArrList);
  //console.log("id rec: " + getGlobalRecArrList);
  //console.log("label arrays: " + getLabels);

  const DoughNutData = {
    labels: [
      "Total Deaths",
      "Total Recoveries",
      "Total Confirmed cases",
      "Total vaccines Administered",
    ],
    datasets: [
      {
        label: "Total Covid Data",
        data: [
          total_global_deaths,
          total_global_recoveries,
          total_global_confirmed,
          total_vaccine_administered,
        ],
        backgroundColor: [
          "rgba(204, 22, 2,0.5)",
          "rgba(2, 204, 42,0.5)",
          "rgba(247, 162, 35,0.5)",
          "rgba(115, 16, 222,0.5)",
        ],
        borderColor: [
          "rgba(204, 22, 2,1)",
          "rgba(2, 204, 42,1)",
          "rgba(247, 162, 35,1)",
          "rgba(115, 16, 222,1)",
        ],
      },
    ],
  };

  const LineData = {
    labels: getLabels,
    datasets: [
      {
        label: `deaths`,
        data: getGlobalDeathArrList,
        borderColor: "rgba(204, 22, 2,1)",
        backgroundColor: "rgb(204, 22, 2)",
        fills: false,
        borderWidth: 1,
      },
      {
        label: `recoveries`,
        data: getGlobalRecArrList,
        borderColor: "rgba(2, 204, 42,1)",
        backgroundColor: "rgb(2, 204, 42)",
        fill: false,
        borderWidth: 1,
      },
      {
        label: `Confirmed`,
        data: getGlobalConfArrList,
        borderColor: "rgba(247, 162, 35,1)",
        backgroundColor: "rgb(247, 162, 35)",
        fill: false,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    //maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: {
        min: 90,
        max: 190,
        //ticks: {
        //// forces step size to be 50 units
        //stepSize: 10,
        //},
        ticks: {
          maxTicksLimit: 28.1,
          //autoSkipPadding: 10,
          //source: {
          //labels: getLabels,
          //},
        },
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          threshold: 15,
        },
      },
    },
  };

  return (
    <div className="divMaster">
      <div className="divLine">
        <Line data={LineData} options={options} />
      </div>
      <div className="divDoughnut">
        <Doughnut data={DoughNutData} />
      </div>
    </div>
  );
};

export default CountriesGraph;
