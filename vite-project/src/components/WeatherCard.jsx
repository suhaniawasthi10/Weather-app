// src/components/WeatherCard.jsx
function WeatherCard({ cityName, onClick }) {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-white text-gray-900 p-2 mb-2 rounded shadow hover:bg-gray-100 transition-colors"
      >
        {cityName}
      </div>
    );
  }
  
  export default WeatherCard;