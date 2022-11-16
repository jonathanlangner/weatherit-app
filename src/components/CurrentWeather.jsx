/*Makes a request from weather API and renders three day forecast.*/
import {WiDaySnow} from 'react-icons/wi';

const CurrentWeather = function(){
    //Place Holder Data.
    return(
        <div>
            <div className="weather">
                <h2 className="forecast-element">Current Conditions in Tower, Minnesota</h2>
                <h3 className="forecast-element banner">Thursday, 9 November</h3>
                <h3 className="forecast-element">20:00</h3> 
                <h3 className="forecast-element"> <WiDaySnow /> Snowing</h3>
                <h3 className="forecast-element">Temperature: 30°F </h3>
                <h3 className="forecast-element">Wind Speed: 7 Mph</h3>
                <h3 className="forecast-element">Wind Chill: ?</h3>
                <h3 className="forecast-element">Humidity: 33%</h3>
                <h3 className="forecast-element">Dew Point: 30°F</h3>
                <h3 className="forecast-element">Outdoor Training Challenge Index: 5.7 out of 10</h3>
            </div>
        </div>

    );

}


export {CurrentWeather};