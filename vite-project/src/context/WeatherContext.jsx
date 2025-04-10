// src/context/WeatherContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const API_KEY = "118c4da03d31d5652fdc7f0d6312d6d6"; 

  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setCity(cityName);
    } catch (error) {
      alert("City not found!");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (cityName) => {
    if (!favorites.includes(cityName)) {
      setFavorites([...favorites, cityName]);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        fetchWeather,
        favorites,
        addToFavorites,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}