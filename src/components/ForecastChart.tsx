import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

const forecastData = [
  { day: 'Mon', temp: 72, icon: Sun },
  { day: 'Tue', temp: 68, icon: Cloud },
  { day: 'Wed', temp: 65, icon: CloudRain },
  { day: 'Thu', temp: 70, icon: Sun },
  { day: 'Fri', temp: 73, icon: Sun },
  { day: 'Sat', temp: 71, icon: Cloud },
  { day: 'Sun', temp: 69, icon: Cloud },
];

function ForecastChart() {
  return (
    <div className="grid grid-cols-7 gap-4">
      {forecastData.map((day) => {
        const Icon = day.icon;
        return (
          <div key={day.day} className="text-center">
            <p className="text-gray-600 mb-2">{day.day}</p>
            <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-lg font-semibold">{day.temp}°</p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastChart;