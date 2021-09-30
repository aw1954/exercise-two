import React from "react";

function WeatherCard({
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
}) {
    return (
        <section className="WeatherCard">
            <p>
                Cloudiness: <strong>{cloudiness}</strong>
            </p>

            <p>
                CurrentTemp: <strong>{currentTemp}</strong>
            </p>

            <p className="lowTemp">{lowTemp}</p>
            <p className="low">Low</p> 
            
            <p className="highTemp">{highTemp}</p>
            <p className="high">High</p> 

            <p>
                humidity: <strong>{humidity}</strong>
            </p>

            <p>
                WeatherType: <strong>{weatherType}</strong>
            </p>

            <p>
                windSpeed: <strong>{windSpeed}</strong>
            </p>

        </section>
        );
}

export default WeatherCard;