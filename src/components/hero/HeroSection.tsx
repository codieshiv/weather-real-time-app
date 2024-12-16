import React from 'react';
import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Real-Time Weather
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Accurate forecasts, interactive maps, and more.
          </p>
          <SearchBar />
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800"
            alt="Weather"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;