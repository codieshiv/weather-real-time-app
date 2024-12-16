export interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
}

export interface WeatherData {
  location: Location;
  current: Current;
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
}

export interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
}