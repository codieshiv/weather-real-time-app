import React from 'react';

interface WeatherCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function WeatherCard({ icon, title, value }: WeatherCardProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default WeatherCard;