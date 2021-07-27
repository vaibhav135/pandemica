import Reports from "./report";

const FilterDataForTable: any = async () => {
  const data: any = await Reports();
  //const data: any = {
  //global_deaths: [],
  //global_recoveries: [],
  //global_confirmed: [],
  //global_vaccine_admin: [],
  //global_vaccine_data: [],
  //};
  //data.global_deaths = Reports().global_deaths;
  //data.global_recoveries = Reports().global_recoveries;
  //data.global_confirmed = Reports().global_confirmed;
  //data.global_vaccine_admin = Reports().global_vaccine_admin;
  //data.global_vaccine_data = Reports().global_vaccine_data;

  console.log(data);
  return data;
};

export default FilterDataForTable;
