import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType = "Unknown",
    windSpeed,
}) {
    return (
        <section 
            className="WeatherCard" 
            style={{
                backgroundColor: `rgba(150, 150, 150, ${cloudiness / 100})`,
            }}
        >
            <div className="WeatherImageWrapper">
                <p className="WeatherType">
                    <strong>{weatherType}</strong>
                </p>
                <WeatherImage weatherType={weatherType} />
                <div className="WeatherTemperatureWrapper">
                    <p className="CurrentTemperature">
                        {currentTemp}° F
                    </p>
                </div>
            </div>
            
            <div className="WeatherStatistics">
                <p>
                    Cloudiness: <strong>{cloudiness}</strong>
                </p>
                <p>
                    Low Temp: <strong>{lowTemp}° F</strong>
                </p>
                <p>
                    High Temp: <strong>{highTemp}° F</strong>
                </p>
                <p>
                    Humidity: <strong>{humidity}</strong>
                </p>
                <p>
                    Wind Speed: <strong>{windSpeed}</strong>
                </p>
            </div>

        </section>
        );
}

export default WeatherCard;