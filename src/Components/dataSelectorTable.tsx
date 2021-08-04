import React, { useState } from "react";
import Table from "./table";
import "../Style/dataSelector.css";

const DataSelectorTable = ({ data }: { data: any }) => {
  //console.log(data);
  const [currentSelected, setCurrentSelected] = useState("global_deaths");
  console.log("currentSelected: " + currentSelected);

  return (
    <div>
      <select
        value={currentSelected}
        onChange={(e: any) => setCurrentSelected(e.target.value)}
        className="Selector"
      >
        <option value="global_deaths"> Global Deaths </option>
        <option value="global_recoveries"> Global Recoveries </option>
        <option value="global_confirmed"> Global Confirmed </option>
        <option value="global_vaccine_admin">
          Global Vaccines Administered
        </option>
        <option value="global_vaccine_data"> Global Vaccines Data </option>
      </select>
      <Table data={data} headingMeta={currentSelected} />
    </div>
  );
};

//<Table data={""} />
export default DataSelectorTable;
