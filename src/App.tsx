import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/layout/Header';
import HeroSection from './components/hero/HeroSection';
import CurrentWeather from './components/weather/CurrentWeather';
import ForecastSection from './components/weather/ForecastSection';
import TestimonialSection from './components/testimonials/TestimonialSection';

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <HeroSection />
        <CurrentWeather />
        <ForecastSection />
        <TestimonialSection />
      </div>
    </WeatherProvider>
  );
}

export default App;