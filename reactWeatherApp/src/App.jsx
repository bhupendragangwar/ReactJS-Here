import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('Greater Noida'); // Default city
  const [weather, setWeather] = useState(null); // Weather data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const apiKey = '43b4d34d8723cb6bd103485663994554'; // Replace with your OpenWeatherMap API key
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // Function to fetch weather data using fetch()
  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data); // Update the state with fetched weather data
    } catch (err) {
      setError('Error fetching weather data'); // Handle any errors
    }
    setLoading(false);
  };

  // Fetch weather data when the city or component mounts
  useEffect(() => {
    fetchWeatherData();
  }, [city]); // Dependency array ensures this runs when the city changes

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.city.value); // Update city from input field
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          defaultValue={city}
        />
        <button type="submit">Search</button>
      </form>
      
      {/* Loading State */}
      {loading && <p>Loading...</p>}
      
      {/* Error Message */}
      {error && <p>{error}</p>}
      
      {/* Display Weather Data */}
      {weather && !loading && !error && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
