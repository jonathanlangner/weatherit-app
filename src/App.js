import React, { useState } from 'react';
import "./css/app.css";
import { Search } from './components/Search';
import { Title } from './components/Title';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
const App = function() {
  let documentLoaded = false;
  //Test Weather Api Fetch.
  if(documentLoaded === false){
    fetch("https://api.weather.gov/points/38.8894,-77.0352")
    .then((response) => response.json())
    .then((data) => console.log(data));
    documentLoaded = true;
  }

  return (
    <div className="App">
      <Title></Title>
      <Search></Search>
      <CurrentWeather></CurrentWeather>
      <Forecast></Forecast>
    </div>
  );
}

export default App;
