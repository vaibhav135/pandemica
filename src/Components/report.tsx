import React, { useState, useEffect } from "react";
const covid_data_links = [
  {
    time_series_covid19_confirmed_global:
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    time_series_covid19_deaths_global:
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
    time_series_covid19_recovered_global:
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",
    time_series_covid19_vaccine_doses_admin_global:
      "https://raw.githubusercontent.com/govex/COVID-19/master/data_tables/vaccine_data/global_data/time_series_covid19_vaccine_doses_admin_global.csv",
    vaccine_data_global:
      "https://raw.githubusercontent.com/govex/COVID-19/master/data_tables/vaccine_data/global_data/vaccine_data_global.csv",
  },
];

const csvTojson = (res: any) => {
  //console.log(" this is the csv: " + typeof res);
  const newline = /\r?\n/;
  const val = res;
  var lines = val.split(newline);
  let result = [];
  let headers = lines[0].split(",");

  //console.log("lines: " + lines);
  //console.log("lines length: " + lines.length);
  //console.log("headers: " + headers);

  for (var i = 1; i < lines.length; i++) {
    var obj: any = {};
    var currentline = lines[i].split(",");
    //console.log("printing current line: " + currentline);
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  //console.log(result);
  return result;
};

const fetchdata = async (api: string, funcName: string) => {
  const response = await fetch(api)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not OK!");
      } else return res.text();
    })
    .catch((error) =>
      console.error(`there is some problem with ${funcName} api call: `, error)
    );
  //const res = await csvTojson(response);
  return response;
};

async function Reports() {
  const timeseries_confirmed_global_func: any = fetchdata(
    covid_data_links[0].time_series_covid19_confirmed_global,
    "global_confirmed"
  );

  const timeseries_deaths_global_func: any = fetchdata(
    covid_data_links[0].time_series_covid19_deaths_global,
    "global_deaths"
  );

  const timeseries_recovered_global_func: any = fetchdata(
    covid_data_links[0].time_series_covid19_recovered_global,
    "global_recoveries"
  );

  const timeseries_vaccine_doses_admin_global_func: any = fetchdata(
    covid_data_links[0].time_series_covid19_vaccine_doses_admin_global,
    "global_vaccine_admin"
  );

  const vaccine_data_global_func: any = fetchdata(
    covid_data_links[0].vaccine_data_global,
    "global_vaccine_data"
  );

  const [
    timeseries_deaths_global,
    timeseries_recovered_global,
    timeseries_confirmed_global,
    timeseries_vaccine_doses_admin_global,
    vaccine_data_global,
  ] = await Promise.all([
    timeseries_deaths_global_func,
    timeseries_recovered_global_func,
    timeseries_confirmed_global_func,
    timeseries_vaccine_doses_admin_global_func,
    vaccine_data_global_func,
  ]);

  const global_data = {
    global_deaths: csvTojson(timeseries_deaths_global),
    global_recoveries: csvTojson(timeseries_recovered_global),
    global_confirmed: csvTojson(timeseries_confirmed_global),
    global_vaccine_admin: csvTojson(timeseries_vaccine_doses_admin_global),
    global_vaccine_data: csvTojson(vaccine_data_global),
  };

  //const key = `Aua213VIk2354iJ_bjrtZfnN3Dy0WzrV7Ez9J-liteCdDImBt8Uzi0uryPTtfkaf`;
  //const script = document.createElement("script");
  //script.src = `http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${key}`;
  //script.type = "text-javascript";
  //script.async = true;
  //script.defer = true;
  //document.body.appendChild(script);
  return global_data;
}
//const Reports = async () => {
//const data: any = {
//global_deaths: await getData().global_deaths,
//global_recoveries: await getData().global_recoveries,
//global_confirmed: await getData().global_confirmed,
//global_vaccine_admin: await getData().global_vaccine_admin,
//global_vaccine_data: await getData().global_vaccine_data,
//};
//return data;
//};

//const Reports: any = async () => {
//console.log(await getData());
//return getData();
//};

export default Reports;
