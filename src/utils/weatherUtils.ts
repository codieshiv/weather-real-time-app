export function formatTemperature(temp: number, unit: 'C' | 'F' = 'C'): string {
  return `${Math.round(temp)}°${unit}`;
}

export function formatWindSpeed(speed: number, unit: 'mph' | 'kph' = 'mph'): string {
  return `${Math.round(speed)} ${unit}`;
}

export function formatVisibility(distance: number, unit: 'mi' | 'km' = 'mi'): string {
  return `${distance.toFixed(1)} ${unit}`;
}

export function getWeatherConditionIcon(iconUrl: string): string {
  return `https:${iconUrl}`;
}