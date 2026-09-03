import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { useState } from 'react';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const data = await weatherService.show(city);

    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };

    setWeatherData(newWeatherState);
  };

  return (
    <main>
      <h1>Weather API</h1>

      <WeatherSearch onFetch={fetchWeatherData} />

      {weatherData && <WeatherDetails weather={weatherData} />}
    </main>
  );
}