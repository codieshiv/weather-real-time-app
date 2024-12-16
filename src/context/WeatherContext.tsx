import React, { createContext, useContext, useState } from 'react';
import { WeatherData, ForecastData } from '../types/weather';

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  weather: WeatherData | null;
  setWeather: (weather: WeatherData | null) => void;
  forecast: ForecastData | null;
  setForecast: (forecast: ForecastData | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        setWeather,
        forecast,
        setForecast,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
}