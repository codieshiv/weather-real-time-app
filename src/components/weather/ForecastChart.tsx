import React from 'react';
import { useWeather } from '../../hooks/useWeather';
import { formatTemperature } from '../../utils/weatherUtils';

function ForecastChart() {
  const { forecast, loading, error } = useWeather('London');

  if (loading) {
    return <div>Loading forecast...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!forecast) {
    return null;
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      {forecast.forecast.forecastday.map((day) => (
        <div key={day.date} className="text-center">
          <p className="text-gray-600 mb-2">
            {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
          </p>
          <img
            src={`https:${day.day.condition.icon}`}
            alt={day.day.condition.text}
            className="w-12 h-12 mx-auto mb-2"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold">
              {formatTemperature(day.day.maxtemp_c)}
            </p>
            <p className="text-sm text-gray-500">
              {formatTemperature(day.day.mintemp_c)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForecastChart;