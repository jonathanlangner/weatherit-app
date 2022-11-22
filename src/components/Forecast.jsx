/*Makes a request from weather API and renders three day forecast.*/
import {useState} from 'react';

const Forecast = function(weatherData){

    let [cityState, setCityState] = useState();
    let [day, setDay] = useState();
    let [detailedForecast, setDetailedForecast] = useState();
    let [temperature, setTemperature] = useState();
    let [windSpeed, setWindSpeed] = useState();
    let [challengeIndex, setChallengeIndex] = useState();
    
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
        const shortenCall = weatherData.weatherData.weatherData;
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

    return(
        <div onClick={handleData}>
            <div className="weather-forecast">
            <h1>Click here once you have entered your coordinates and clicked search twice.</h1>
                    <h2 className="forecast-element">Forecast in {cityState}</h2>
                    <h4 className="forecast-element banner">{day} </h4>
                    <h4 className="forecast-element"> {detailedForecast} </h4>
                    <h4 className="forecast-element">Temperature: {temperature}°F </h4>
                    <h4 className="forecast-element">Wind Speed: {windSpeed}</h4>
                    <h4 className="forecast-element">Outdoor Training Challenge Index: {challengeIndex}</h4>
            </div>
        </div>

    );

}


export {Forecast};