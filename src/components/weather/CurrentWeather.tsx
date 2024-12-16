import React from 'react';
import { Wind, Droplets, Eye, Thermometer } from 'lucide-react';
import WeatherCard from './WeatherCard';
import { useWeather } from '../../hooks/useWeather';
import { formatDate } from '../../utils/dateUtils';
import { formatTemperature, formatWindSpeed, formatVisibility } from '../../utils/weatherUtils';
import { useWeatherContext } from '../../context/WeatherContext';

function CurrentWeather() {
  const { weather, loading, error } = useWeather();
  const { city } = useWeatherContext();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center py-12">Loading weather data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center py-12 text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  const { location, current } = weather;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {location.name}, {location.country}
            </h2>
            <p className="text-gray-600">{location.localtime}</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-6xl font-bold text-gray-900">
                {formatTemperature(current.temp_c)}
              </p>
              <p className="text-gray-600">{current.condition.text}</p>
            </div>
            <img
              src={current.condition.icon}
              alt={current.condition.text}
              className="w-16 h-16"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <WeatherCard
            icon={<Wind />}
            title="Wind"
            value={formatWindSpeed(current.wind_mph)}
          />
          <WeatherCard
            icon={<Droplets />}
            title="Humidity"
            value={`${current.humidity}%`}
          />
          <WeatherCard
            icon={<Eye />}
            title="Visibility"
            value={formatVisibility(current.vis_miles)}
          />
          <WeatherCard
            icon={<Thermometer />}
            title="Feels Like"
            value={formatTemperature(current.feelslike_c)}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;