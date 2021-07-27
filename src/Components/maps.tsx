import React, { useState, useEffect } from "react";

import GetMap from "./getMap"; //Look out for this file this contains
//the implementation for Bing maps

const Maps = () => {
  console.log("inside the maps");
  return <div> </div>;
};

export default Maps;

//const types = [
//{ string: "EatDrink", icon: EatDrinkIcon },
//{ string: "SeeDo", icon: SeeDoIcon },
//{ string: "Shop", icon: ShopIcon },
//{ string: "BanksAndCreditUnions", icon: BankIcon },
//{ string: "Hospitals", icon: HospitalIcon },
//{ string: "HotelsAndMotels", icon: HotelIcon },
//{ string: "Parking", icon: ParkingIcon },
//];
//const [pushPins, setPushPins] = useState([]);
//const [mapReady, setMapReady] = useState(false);
//const key = `Aua213VIk2354iJ_bjrtZfnN3Dy0WzrV7Ez9J-liteCdDImBt8Uzi0uryPTtfkaf`;
//async function addPushPin() {
//const response = await fetch(
//"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
//);

//if (response.ok) console.log("response ok");
//else console.log("fuckkkkkkkkkkkkkkkk");
//const res = await response.text();
//console.log(" this is the csv: " + typeof res);
//const newline = /\r?\n/;
//var lines = res.split(newline);
//let result = [];
//let headers = lines[0].split(",");

//console.log("lines: " + lines);
//console.log("lines length: " + lines.length);
//console.log("headers: " + headers);

//for (var i = 1; i < lines.length; i++) {
//var obj: any = {};
//var currentline = lines[i].split(",");
//console.log("printing current line: " + currentline);
//for (var j = 0; j < headers.length; j++) {
//obj[headers[j]] = currentline[j];
//}
//result.push(obj);
//}

//console.log(result);
////return result; //JavaScript object
//return JSON.stringify(result); //JSON
//}

//useEffect(() => {
//if (mapReady) {
//addPushPin();
//}
//}, [mapReady]);
//<GetMap
//onMapReady={() => setMapReady(true)}
//bingMapsKey={key}
//pushPins={pushPins}
//mapOptions={{
//enableClickableLogo: false,
//navigationBarMode: "square",
//enableHighDpi: true,
//}}
//viewOptions={{
//zoom: 12,
//customMapStyle: {
//elements: {
//area: { fillColor: "#b6e591" },
//water: { fillColor: "#75cff0" },
//tollRoad: { fillColor: "#a964f4", strokeColor: "#a964f4" },
//arterialRoad: { fillColor: "#ffffff", strokeColor: "#d7dae7" },
//road: { fillColor: "#ffa35a", strokeColor: "#ff9c4f" },
//street: { fillColor: "#ffffff", strokeColor: "#ffffff" },
//transit: { fillColor: "#000000" },
//},
//settings: {
//landColor: "#efe9e1",
//},
//},
//}}
///>
