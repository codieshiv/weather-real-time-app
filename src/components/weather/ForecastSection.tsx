import React from 'react';
import ForecastChart from './ForecastChart';

function ForecastSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">7-Day Forecast</h2>
        <ForecastChart />
      </div>
    </div>
  );
}

export default ForecastSection;