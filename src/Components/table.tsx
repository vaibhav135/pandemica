import React from "react";
import ShowDataTable from "./show_Data_To_Table";

const headings: any = {
  global_deaths: "Global Death Toll",
  global_recoveries: "Global Recoveries",
  global_confirmed: "Total Global Cofirmed Cases",
  global_vaccine_admin: "Total Global Vaccines Administered",
  global_vaccine_data: "Total Global Vaccines Data",
};

const Table = ({ data, headingMeta }: { data: any; headingMeta: string }) => {
  //console.log(data);
  const outerData = data.map((e: any) => e);
  console.log("outerData length: " + outerData.length);

  //info: datHeading is actually the table headers
  const dataHeading = Object.keys(outerData[0]);
  console.log("dataHeading: " + dataHeading);

  let heading: string = headings[headingMeta];
  console.log("heading: " + heading);

  let callFunc;
  callFunc = (
    <ShowDataTable
      data={outerData}
      heading={heading}
      tableHeadermeta={dataHeading}
    />
  );

  //console.log("heading: " + headingMeta + "   data: " + data);
  return <div>{callFunc} </div>;
};

export default Table;
