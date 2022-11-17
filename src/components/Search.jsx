import React, { useState } from 'react';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';

let output = 0;
let forecastData = 0;
let documentLoaded = false;
/*Has the initial site layout with search bar.*/
const Search = function(){

  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    setInputs(values => ({...values, [name]: value}))
  };
 
  const handleSubmit = event => {
    event.preventDefault();
    let latitude = parseFloat(inputs.latitude).toFixed(4); 
    let longitude = parseFloat(inputs.longitude).toFixed(4);
    output = `${latitude},${longitude}`;
    console.log(`${latitude},${longitude}`);
    //Test Weather Api Fetch.
  
    fetch(`https://api.weather.gov/points/${output}`)
    .then((response) => response.json())
    .then((data) => forecastData = `${data.properties.forecast}`)
    setTimeout(() => {
      console.log(forecastData);
      fetch(`${forecastData}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
    }, 1000);
    

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
                <input type="submit" value="🔍 Search" id="search-btn" title="Search" />
            </form>

            <div className="options">
              <button type="button" className="btn" title="Current Conditions">Current Conditions</button> 
              <button type="button" className="btn" title="3 Day Forecast">3 Day Forecast</button>
            </div>
            <CurrentWeather></CurrentWeather>
            <Forecast></Forecast>
      </div>
    );
}



export {Search, output};