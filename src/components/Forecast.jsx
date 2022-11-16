/*Makes a request from weather API and renders three day forecast.*/
import {WiDaySnow} from 'react-icons/wi';


const Forecast = function(){
    //Place holder data. 
    return(
        <div>
            <div className="weather-forecast">
                    <h2 className="forecast-element">3 Day Forecast in Tower, Minnesota</h2>
                    <h4 className="forecast-element banner">Thursday, 15 November</h4>
                    <h4 className="forecast-element"> <WiDaySnow /> Snow</h4>
                    <h4 className="forecast-element">High Temperature: 32°F </h4>
                    <h4 className="forecast-element">Low Temperature: 23°F </h4>
                    <h4 className="forecast-element">Avg High Temperature: 30°F </h4>
                    <h4 className="forecast-element">Avg Low Temperature: 20°F </h4>
                    <h4 className="forecast-element">Wind Speed: 7 Mph</h4>
                    <h4 className="forecast-element">Wind Chill: ?</h4>
                    <h4 className="forecast-element">Humidity: 33%</h4>
                    <h4 className="forecast-element">Dew Point: 30°F</h4>
                    <h4 className="forecast-element">Outdoor Training Challenge Index: 5.7 out of 10</h4>

                    <h4 className="forecast-element banner">Thursday, 16 November</h4>
                    <h4 className="forecast-element"> <WiDaySnow /> Snow</h4>
                    <h4 className="forecast-element">High Temperature: 30°F </h4>
                    <h4 className="forecast-element">Low Temperature: -30°F </h4>
                    <h4 className="forecast-element">Avg High Temperature: 30°F </h4>
                    <h4 className="forecast-element">Avg Low Temperature: 30°F </h4>
                    <h4 className="forecast-element">Wind Speed: 35 Mph</h4>
                    <h4 className="forecast-element">Wind Chill: ?</h4>
                    <h4 className="forecast-element">Humidity: 33%</h4>
                    <h4 className="forecast-element">Dew Point: 30°F</h4>
                    <h4 className="forecast-element">Outdoor Training Challenge Index: 10 out of 10</h4>

                    <h4 className="forecast-element banner">Thursday, 17 November</h4>
                    <h4 className="forecast-element"> <WiDaySnow /> Snow</h4>
                    <h4 className="forecast-element">High Temperature: 30°F </h4>
                    <h4 className="forecast-element">Low Temperature: 30°F </h4>
                    <h4 className="forecast-element">Avg High Temperature: 30°F </h4>
                    <h4 className="forecast-element">Avg Low Temperature: 30°F </h4>
                    <h4 className="forecast-element">Wind Speed: 7 Mph</h4>
                    <h4 className="forecast-element">Wind Chill: ?</h4>
                    <h4 className="forecast-element">Humidity: 33%</h4>
                    <h4 className="forecast-element">Dew Point: 30°F</h4>
                    <h4 className="forecast-element">Outdoor Training Challenge Index: 3.4 out of 10</h4>
            </div>
        </div>

    );

}


export {Forecast};