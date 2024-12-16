import React from 'react';
import { Sun } from 'lucide-react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">WeatherNow</span>
          </div>
          <Navigation />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;