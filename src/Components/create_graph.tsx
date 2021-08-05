import React from "react";
import GlobalGraph from "./graph_global";
import CountriesGraph from "./graph_countries";

const CreateGraph = ({
  data,
  selectedRegion,
  countries_list,
  countries_vaccine_admin,
  selectedRegionIdDeath,
  selectedRegionIdRec,
  selectedRegionIdVaccineAd,
  selectedRegionIdConf,
  currentSelectedForGraph,
}: {
  data: any;
  selectedRegion: string;
  countries_list: string[];
  countries_vaccine_admin: string[];
  selectedRegionIdDeath: string;
  selectedRegionIdRec: string;
  selectedRegionIdVaccineAd: string;
  selectedRegionIdConf: string;
  currentSelectedForGraph: string;
}) => {
  const region =
    selectedRegion === "Global" ? (
      <GlobalGraph
        data={data}
        countries_list={countries_list}
        countries_vaccine_admin={countries_vaccine_admin}
        currentSelectedForGraph={currentSelectedForGraph}
      />
    ) : (
      <CountriesGraph
        data={data}
        countries_list={countries_list}
        countries_vaccine_admin={countries_vaccine_admin}
        selectedRegion={selectedRegion}
        selectedRegionIdDeath={selectedRegionIdDeath}
        selectedRegionIdRec={selectedRegionIdRec}
        selectedRegionIdVaccineAd={selectedRegionIdVaccineAd}
        selectedRegionIdConf={selectedRegionIdConf}
      />
    );

  return <div>{region} </div>;
};
export default CreateGraph;
