import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;

export async function getCurrentWeather(city: string): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );
  if (!response.ok) {
    throw new Error('Weather data not found');
  }
  return response.json();
}

export async function getForecast(city: string, days: number = 7): Promise<ForecastData> {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no`
  );
  if (!response.ok) {
    throw new Error('Forecast data not found');
  }
  return response.json();
}