import React, {useState } from 'react';
import { Forecast } from './Forecast';

let output = 0;
let temp = 0;
let weatherData;
let jsonCords = 0;
let finData = 0;
let dataCopy = 0;
let locationData;

/*Has the initial site layout with search bar.*/
const getLatLong = async function(){
  try{
    const response = await fetch(`https://api.weather.gov/points/${output}`);
    jsonCords = await response.json();
    getForecast();
    locationData = jsonCords.properties.relativeLocation;
  }catch(error){
    console.log("error", error);
  }
}
const getForecast = async function(){
  try{
    temp = await fetch(jsonCords.properties.forecast);
    finData = await temp.json();
    dataCopy = finData;

  }catch(error){
    console.log("error", error);
  }
}

const Search = function(){
  let [forecastData, setData] = useState(finData);
  const [inputs, setInputs] = useState({});


  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  const updateData = function(){
    forecastData = finData;
    weatherData = {
      forecastData, 
      locationData};
    setData(weatherData);
  };

  const handleSubmit = async function(event){
    event.preventDefault();
    let latitude = parseFloat(inputs.latitude).toFixed(4); 
    let longitude = parseFloat(inputs.longitude).toFixed(4);
    output = `${latitude},${longitude}`;
    getLatLong();
  };

    return(
        <div>
            <div className="page-title-div">
              <h5>Use Google Maps to find your latitude and longitude and copy and paste them into the search boxes below.</h5>
              <h5>Example Format: <br></br>Latitude: 42.16545046870308 <br></br>Longitude: -89.99176803628275 </h5>
              <a href="https://goo.gl/maps/GvMNeYEaTvWgcCXx7" title="Google Maps">Google Maps</a>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="string" name="latitude" value={inputs.latitude || ""} onChange={handleChange} className="search-text-box" title="Enter the Latitude."
                />
               <input type="string" name="longitude" value={inputs.longitude || ""} onChange={handleChange} className="search-text-box" title="Enter the Longitude"
                /> 
                <input type="submit" value="🔍 Search" id="search-btn" title="Search" onClick={() => updateData()} />
               
            </form>
            <Forecast weatherData={{weatherData}} onSubmit={updateData}></Forecast>
      </div>
    );
}

export {Search, output};