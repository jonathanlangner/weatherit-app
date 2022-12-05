import React, {useState } from 'react';

let output = 0;
let temp = 0;
let weatherData;
let jsonCords = 0;
let finData = 0;
let dataCopy = 0;
let locationData;
let reclickVal = false;

const updateData = function(){};
const handleSubmit = async function(event){};
/*Has the initial site layout with search bar.*/
const getLatLong = async function(){
  try{
    const response = await fetch(`https://api.weather.gov/points/${output}`);
    jsonCords = await response.json();
    console.log(jsonCords);
  }catch(error){
    console.log("error", error);
  }try{
    const response = await fetch(`https://api.weather.gov/points/${output}`);
    jsonCords = await response.json();
    await getForecast();
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
  }
  catch(error){
    console.log("error", error);
    try{
      temp = await fetch(jsonCords.properties.forecast);
      finData = await temp.json();
      dataCopy = finData;
    }catch{

    }console.log("error", error);
  }
}

const Search = function(){
  let [forecastData, setData] = useState(finData);
  const [inputs, setInputs] = useState({});
  const inputElement = React.useRef(null);

  let [cityState, setCityState] = useState();
  let [day, setDay] = useState();
  let [detailedForecast, setDetailedForecast] = useState();
  let [temperature, setTemperature] = useState();
  let [windSpeed, setWindSpeed] = useState();
  let [challengeIndex, setChallengeIndex] = useState();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const updateOutput = function(){
    let latitude = parseFloat(inputs.latitude).toFixed(4); 
    let longitude = parseFloat(inputs.longitude).toFixed(4);
    output = `${latitude},${longitude}`;
  }

  const handleSubmit = async function(event){
    event.preventDefault();
    let latitude = parseFloat(inputs.latitude).toFixed(4); 
    let longitude = parseFloat(inputs.longitude).toFixed(4);
    output = `${latitude},${longitude}`;
    forecastData = finData;
    weatherData = {
      forecastData, 
      locationData};  
    setData(weatherData);
  };

  const updateData = function(e){
    getLatLong();
    forecastData = finData;
    weatherData = {
      forecastData, 
      locationData};  
    setData(weatherData);
  };


  const calculateChallengeFactor = function(temperature){
    if(temperature <= -20){
      return 10;
    }
    if(temperature <= -10){
      return 9;
    }
    if(temperature <= 0){
      return 8;
    }
    if(temperature <= 10){
      return 7;
    }
    if(temperature <= 20){
      return 6;
    }
    if(temperature <= 30){
      return 5;
    }
    if(temperature <= 40){
      return 4;
    }
    if(temperature <= 50){
      return 3;
    }
    if(temperature <= 60){
      return 3;
    }
    if(temperature <= 70){
      return 5;
    }
    if(temperature <= 80){
      return 7;
    }
    if(temperature <= 99){
      return 9;
    }                  
    if(temperature >= 100){
      return 10;
    }

  }

  const handleData = function(){
    updateData();
    if(reclickVal !== false && weatherData.locationData.properties.city !== undefined){
        const shortenCall = weatherData;
        const finalCityStateValue = shortenCall.locationData.properties.city;
        cityState = finalCityStateValue + ", " + shortenCall.locationData.properties.state;
        setCityState(cityState); 
        let parseDate = (shortenCall.forecastData.properties.periods[0].startTime).slice(0, -15);
        day = shortenCall.forecastData.properties.periods[0].name + " " + parseDate;
        setDay(day);
      detailedForecast = shortenCall.forecastData.properties.periods[0].detailedForecast;
      setDetailedForecast(detailedForecast);
      temperature = shortenCall.forecastData.properties.periods[0].temperature;
      setTemperature(temperature);
      let windDirection = shortenCall.forecastData.properties.periods[0].windDirection;
      windSpeed = shortenCall.forecastData.properties.periods[0].windSpeed + " out of the " + windDirection;
      setWindSpeed(windSpeed);
      challengeIndex = calculateChallengeFactor(temperature) + " out of 10";
      setChallengeIndex(challengeIndex);
    }
    reclickVal = true;
}

    return(
        <div>
            <div className="page-title-div">
              <h5>Use Google Maps to find your latitude and longitude and copy and paste them into the search boxes below. <br></br>(<u>Warning: You may need to press search twice, as the NWS API is currently buggy.</u>)</h5>
              <h5>Example Format: <br></br>Latitude: 42.16545046870308 <br></br>Longitude: -89.99176803628275 </h5>
              <a href="https://www.google.com/maps/" title="Google Maps">Google Maps</a>
            </div>
            <form onSubmit={event => {handleSubmit(event); handleData();}} onFocus={updateOutput}>
                <input type="string" name="latitude" value={inputs.latitude || ""}  onChange={handleChange} className="search-text-box" title="Enter the Latitude."
                />
               <input type="string" name="longitude" value={inputs.longitude || ""} onChange={handleChange} className="search-text-box" title="Enter the Longitude"
                /> 
                <button type="submit" id="search-btn" title="Search" onTouchStart={event =>{updateOutput(); updateData(event); handleData(event);}}>🔍 Search </button> 
                <div className="weather-forecast" onSubmit={handleData}>
                      <h1>Once you have entered your coordinates and clicked search your data will appear here.</h1>
                      <h2 className="forecast-element">Forecast in {cityState}</h2>
                      <h4 className="forecast-element banner">{day} </h4>
                      <h4 className="forecast-element"> {detailedForecast} </h4>
                      <h4 className="forecast-element">Temperature: {temperature}°F </h4>
                      <h4 className="forecast-element">Wind Speed: {windSpeed}</h4>
                      <h4 className="forecast-element">Outdoor Training Challenge Index: {challengeIndex}</h4>
                </div>
            </form>
           
      </div>
    );
}

export {Search, output};