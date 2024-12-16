import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useWeatherContext } from '../../context/WeatherContext';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setCity } = useWeatherContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCity(searchTerm.trim());
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <div className="flex-1 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter city or zip code"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute right-3 top-3 text-gray-400" />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;