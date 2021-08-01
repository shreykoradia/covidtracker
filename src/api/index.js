import axios from 'axios'
const url = 'https://covid19.mathdro.id/api';

 export const fetchData = async (country) =>{
   let changeableURL = url;
   if(country){
     changeableURL = `${url}/countries/${country}`
   }
    try{
        const {data} = await axios.get(changeableURL);
        
        const modifiedData = {
            confirmed :data.confirmed,
            recovered :data.recovered,
            deaths : data.deaths,
            lastUpdate :data.lastUpdate
        }
        return modifiedData ;
    }
    catch(error){
      console.log(error)
    }
}
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

// // Instead of Global, it fetches the daily data for the US
// export const fetchDailyData = async () => {
//     try {
//       const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
//       return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
//     } catch (error) {
//       return error;
//     }
//   };


export  const fetchCountries = async () =>{
  
  try{
      const {data : {countries}} = await axios.get(`${url}/countries`);
      return countries.map((country)=>country.name);
  }
  catch(error){
    return error
  }
}