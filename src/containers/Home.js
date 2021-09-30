import React, { useMemo } from "react";
import WeatherCard from "../components/WeatherCard";

const API_KEY = 'ea15abcc9ff9d4e66d45bc7792b58a60';

function Home() {
    const { 
        cloudiness, 
        currentTemp, 
        highTemp, 
        humidity, 
        lowTemp, 
        weatherType, 
        windSpeed 
    } = useMemo(() => {
        // this is where we process data
        return {
            cloudiness: 100,
            currentTemp: '76',
            highTemp: '80',
            humidity: 100,
            lowTemp: '70',
            weatherType: 'Cloudy',
            windSpeed: '10mph'
        }
    }, [])

    return (
        <main className="App">
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