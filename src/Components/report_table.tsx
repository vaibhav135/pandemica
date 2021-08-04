import React, { useState, useEffect } from "react";
import FilterData from "./filter_data";
import DataSelectorTable from "./dataSelectorTable";

const ReportTable = () => {
  const [data, setData] = useState<any>(null);
  console.log("inside tables");

  useEffect(() => {
    callFunc();
  }, []);

  const callFunc = async () => {
    const somedata = await FilterData();
    setData(somedata);
  };

  if (data !== null && data !== undefined) {
    return (
      <div>
        <DataSelectorTable data={data} />
      </div>
    );
  } else return <h1> Couldn't fetch the data </h1>;
};

export default ReportTable;

//const specific =
//data === null || data === undefined
//? undefined
//: Object.keys(data).forEach((e: any, i) => console.log(data[e]));
//console.log(
//"comprehensible data : " + data ??
//data["global_deaths"] + "---" + data ??
//data.global_deaths
//);

//const val = async () => {
//const something = Reports();
//console.log(
//"showing data from filter data: " + typeof something.global_deaths
//);
//};
//val();
