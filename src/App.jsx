// src/App.jsx

import * as weatherService from './services/weatherService';
export default function App() {
  const fetchWeatherData = async () => {
    const data = await weatherService.show("Tokyo");

    console.log(data);
  };

  return (
    <main>
      <h1>Weather API Example</h1>
      <button onClick={fetchWeatherData}>Get Weather Data for City</button>
    </main>
  );
}
