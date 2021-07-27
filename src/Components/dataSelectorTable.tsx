import React, { useState } from "react";
import Table from "./table";
import "../Style/dataSelector.css";

const DataSelectorTable = ({ data }: { data: any }) => {
  //console.log(data);
  const [currentSelected, setCurrentSelected] = useState("global_deaths");
  let idx: number = 0;
  let dataArr = data[0][1];

  for (let index in data) {
    if (data[index][0] === currentSelected) {
      idx = Number(index);
      dataArr = data[idx][1];
      break;
    }
  }

  //const optionBg = {
  //backgroundColor: "white",
  //};
  //console.log("index: " + idx + " dataArr: " + dataArr);
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
      <Table data={dataArr} headingMeta={data[idx][0]} />
    </div>
  );
};

//<Table data={""} />
export default DataSelectorTable;
