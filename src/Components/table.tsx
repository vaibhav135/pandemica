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
  let heading: string = headings[headingMeta];
  console.log("heading: " + heading);
  console.log(data);

  let callFunc;
  callFunc = (
    <ShowDataTable
      data={data[headingMeta]["value"]}
      heading={heading}
      tableHeadermeta={data[headingMeta]["headers"]}
    />
  );

  //console.log("heading: " + headingMeta + "   data: " + data);
  return <div>{callFunc} </div>;
};

export default Table;
