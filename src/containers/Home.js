import React, { useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router";
import WeatherCard from "../components/WeatherCard";

const API_KEY = 'ea15abcc9ff9d4e66d45bc7792b58a60';

    //URL Search Params...
    //localhost:3000/?city=paris
    //Abstract away URL Search Params here to make it easier to use
function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Home() {
    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState();
    let query = useQuery();

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    useEffect(() => {
        const cityValue = query.get('city');
        setCity(cityValue);
    }, []);

    useEffect(() => {
        // Get Weather Data from Weather API
        // Allows you to make HTTP requests
        // Promise... do asynchronous requests in JavaScript
        if (city) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                )
                .then(function (response) {
                    // Successful request... set as weather data
                    setWeatherData(response.data);
                })
                .catch(function (error) {
                    // handle error 
                    console.warn(error);
                });
            }
    }, [URL, city]);

    const { 
        cloudiness, 
        currentTemp, 
        highTemp, 
        humidity, 
        lowTemp, 
        weatherType, 
        windSpeed 
    } = useMemo(() => {
        if (!weatherData) return {};
        return {
            cloudiness: weatherData.clouds.all,
            currentTemp: weatherData.main.temp,
            highTemp: weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            lowTemp: weatherData.main.temp_min,
            weatherType: weatherData.weather[0].main,
            windSpeed: weatherData.wind.speed,
        };
    }, [weatherData])

    return (
        <main className="App">
            <header>
                <p>
                    <a href="/?city=paris">Paris</a>
                </p>
            </header>
            <header>
                <p>
                    <a href="/?city=tokyo">Tokyo</a>
                </p>
            </header>
            <header>
                <p>
                    <a href="/?city=orlando">Orlando</a>
                </p>
            </header>
            <header>
                <p>
                    <a href="/?city=New%20York%20City">New York</a>
                </p>
            </header>
            <h1>{city}</h1>
            <header className="weatherAppHeader">Weather App</header>
            <WeatherCard 
                cloudiness={cloudiness}
                currentTemp={currentTemp}
                highTemp={highTemp}
                humidity={humidity}
                lowTemp={lowTemp}
                weatherType={weatherType}
                windSpeed={windSpeed}/>
        </main>
    );
}

export default Home;