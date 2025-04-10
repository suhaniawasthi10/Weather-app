import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function CurrentWeather() {
  const { weather, addToFavorites, city } = useContext(WeatherContext);

  if (!weather) return <p className="text-gray-700 dark:text-gray-300">Loading...</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-96 text-center text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-1">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-5xl font-semibold mb-2">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize text-gray-600 dark:text-gray-300 mb-2">
        {weather.weather[0].description}
      </p>
      <div className="flex justify-center gap-6 mb-4 text-sm text-gray-700 dark:text-gray-300">
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>💨 Wind: {weather.wind.speed} m/s</p>
      </div>
      <button
        onClick={() => addToFavorites(city)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default CurrentWeather;
