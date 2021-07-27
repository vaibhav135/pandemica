import React, { useState, useEffect } from "react";
import FilterDataForTable from "./filter_data_for_tables";
//import Reports from "./report";
import DataSelectorTable from "./dataSelectorTable";

const ReportTable = () => {
  const [data, setData] = useState<any>(null);
  console.log("inside tables");

  //let val;
  useEffect(() => {
    //console.log(callFunc().then((e) => e));
    callFunc();
  }, []);

  const callFunc = async () => {
    const somedata = await FilterDataForTable();
    setData(somedata);
    //console.log(val);
  };
  console.log("showing data: " + (data === null ? 0 : JSON.stringify(data)));

  let dataToTable;
  if (data !== null && data !== undefined) {
    //console.log(
    //Object.entries(data)[0][0] === "global_deaths"
    //? "yup ur right bitch"
    //: "fuck u"
    //);
    dataToTable = Object.entries(data);
    return (
      <div>
        <DataSelectorTable data={dataToTable} />
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
