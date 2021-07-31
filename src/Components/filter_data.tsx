import Reports from "./report";

const dataCat: any = {
  global_deaths: { headers: null, value: null },
  global_recoveries: { headers: null, value: null },
  global_confirmed: { headers: null, value: null },
  global_vaccine_admin: { headers: null, value: null },
  global_vaccine_data: { headers: null, value: null },
};

const FilterData: any = async () => {
  let data: any = await Reports();
  data = Object.entries(data);
  const dataCatMeta = Object.keys(dataCat); //this will return array containing keys of dataCat
  let n: number = 0; // This is an incrementer
  //console.log(dataCatMeta);
  for (let index in data) {
    const idx = n;
    //console.log("index:  " + index);
    //console.log(dataCatMeta[idx]);
    //console.log(`data: ${data[index][0]}`);
    if (data[index][0] === dataCatMeta[idx]) {
      dataCat[dataCatMeta[idx]]["value"] = data[index][1];
      dataCat[dataCatMeta[idx]]["headers"] = Object.keys(
        dataCat[dataCatMeta[idx]]["value"][0]
      );
      //console.log(dataCat[dataCatMeta[idx]]);
      //console.log(
      //"show each value from filter: " + dataCat[dataCatMeta[idx]]["value"]
      //);
    }
    n = n + 1;
  }

  //console.log(data);
  return dataCat;
};

export default FilterData;
