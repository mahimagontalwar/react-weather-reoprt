import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  // State management for weather data, loading, and error state
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to simulate fetching weather data
  const fetchWeatherData = () => {
    // Simulating weather data
    setTimeout(() => {
      const randomWeather = Math.floor(Math.random() * 3); // 0: Sunny, 1: Cloudy, 2: Rainy
      const data = {
        temperature: Math.floor(Math.random() * 35) + 5, // Random temperature between 5 and 40
        condition: randomWeather === 0 ? 'Sunny' : randomWeather === 1 ? 'Cloudy' : 'Rainy',
      };
      setWeatherData(data);
      setLoading(false);
    }, 2000); // Simulating network delay
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); // Fetch weather data once when the component mounts

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return '☀️'; // Sun icon
      case 'Cloudy':
        return '☁️'; // Cloud icon
      case 'Rainy':
        return '🌧️'; // Rain cloud icon
      default:
        return '❓'; // Default icon for unknown conditions
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-widget">
      <h2>Weather Widget</h2>
      <div className="weather-info">
        <div className="temperature">
          <h3>{weatherData.temperature}°C</h3>
        </div>
        <div className="condition">
          <h3>{weatherData.condition} {getWeatherIcon(weatherData.condition)}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;