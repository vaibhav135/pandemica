import React, { useState, useEffect } from "react";
import FilterData from "./filter_data";
import SelectorCreateGraph from "./selector_create_graph";

const ReportGraph = () => {
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
        <SelectorCreateGraph data={data} />
      </div>
    );
  } else return <h1> Couldn't fetch the data </h1>;
};

export default ReportGraph;
