import React from "react";
import "../Style/show_data_to_table.css";

const ShowDataTable = ({
  data,
  heading,
  tableHeadermeta,
}: {
  data: any;
  heading: string;
  tableHeadermeta: string[];
}) => {
  //console.log(typeof tableHeadermeta);
  //console.log(tableHeadermeta);
  //console.log("tableHeader: " + tableHeader);
  //for (let something in data) {
  //console.log(data[something]);
  //}
  //console.log("data: " + data.map((e: any) => e));

  let tableHeader = tableHeadermeta;
  //no. of days back is telling us how many days of data do we need
  console.log(tableHeadermeta.length > 10);
  if (tableHeadermeta.length > 10) {
    let numOfDaysBack = 10;
    tableHeader = tableHeadermeta.slice(0, 4);
    tableHeader = tableHeader.concat(
      tableHeadermeta
        .slice(
          tableHeadermeta.length - 1 - numOfDaysBack,
          tableHeadermeta.length
        )
        .reverse()
    );
  }
  //console.log(
  //data.map((e: any, index: number) =>
  //tableHeader.map((e: any) => data[index][e])
  //)
  //);

  return (
    <div>
      <h1> {heading} </h1>
      <table className="content-table">
        <thead>
          <tr>
            {tableHeader.map((e: any, index: number) => (
              <th key={index}> {e} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e: any, index: number) => (
            <tr key={index}>
              {tableHeader.map((val: any, innerIndex: number) => (
                <td key={innerIndex}>{data[index][val]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ShowDataTable;
