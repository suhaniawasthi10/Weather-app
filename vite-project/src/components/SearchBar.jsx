import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchBar() {
  const [input, setInput] = useState("");
  const { fetchWeather } = useContext(WeatherContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow transition">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
