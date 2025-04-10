import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

function FavoriteCities() {
  const { favorites, fetchWeather } = useContext(WeatherContext);

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Favorite Cities
      </h3>
      <div className="space-y-2">
        {favorites.map((city, i) => (
          <WeatherCard key={i} cityName={city} onClick={() => fetchWeather(city)} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteCities;
