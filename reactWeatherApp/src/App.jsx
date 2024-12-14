import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Greater Noida'); // Default city
  const API_KEY = '43b4d34d8723cb6bd103485663994554'; // Replace with your OpenWeatherMap API key

  // Function to fetch live weather data
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Fetch weather data initially and refresh every 60 seconds
  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 3000); // 30,00ms = 3 sec
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [city]); // Refetch if city changes

  return (

    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
      <h1>React Live Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={fetchWeather}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginLeft: '10px',
          borderRadius: '5px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Update
      </button>

      {weather ? (
        <div style={{ marginTop: '20px' }}>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App
