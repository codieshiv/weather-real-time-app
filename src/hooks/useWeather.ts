import { useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../services/api';
import { useWeatherContext } from '../context/WeatherContext';

export function useWeather() {
  const {
    city,
    setWeather,
    setForecast,
    setLoading,
    setError,
    weather,
    forecast,
    loading,
    error,
  } = useWeatherContext();

  useEffect(() => {
    let isMounted = true;

    async function fetchWeatherData() {
      try {
        setLoading(true);
        setError(null);
        const [weatherData, forecastData] = await Promise.all([
          getCurrentWeather(city),
          getForecast(city, 7),
        ]);

        if (isMounted) {
          setWeather(weatherData);
          setForecast(forecastData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (city) {
      fetchWeatherData();
    }

    return () => {
      isMounted = false;
    };
  }, [city, setWeather, setForecast, setLoading, setError]);

  return { weather, forecast, loading, error };
}