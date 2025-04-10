import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import FavoriteCities from "./components/FavoriteCities";
import { useTheme } from "./context/ThemeContext";

function InnerApp() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? "min-h-screen flex flex-col items-center p-6 bg-gray-900 text-white" : "min-h-screen flex flex-col items-center p-6 bg-blue-50 text-black"}>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 rounded shadow-md bg-white text-black dark:bg-gray-800 dark:text-white transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 className="text-3xl font-bold mb-4">
        🌤️ Real-time Weather Dashboard
      </h1>

      <SearchBar />
      <div className="flex gap-6 mt-4">
        <CurrentWeather />
        <FavoriteCities />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <InnerApp />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
