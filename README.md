# Weather Application

A modern, responsive Weather Application built with React, TypeScript, Tailwind CSS, and integrated with **WeatherAPI.com** for real-time weather data.

This project provides accurate weather forecasts, interactive weather maps, and user-friendly features like search, saved locations, and customizable weather settings.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Setup Instructions](#setup-instructions)
5. [Folder Structure](#folder-structure)
6. [Environment Variables](#environment-variables)
7. [Running the Application](#running-the-application)
8. [Screenshots](#screenshots)
9. [Troubleshooting](#troubleshooting)

---

## Features
- **Real-time Weather Data**: Fetch weather updates for any location.
- **7-Day Forecast**: Displays daily forecasts with temperature, icons, and weather descriptions.
- **Interactive Weather Map**: Zoomable weather radar for precipitation, cloud cover, and more.
- **Search Functionality**: Search by city name or zip code to retrieve weather data.
- **Customizable Units**: Toggle between Celsius/Fahrenheit and mph/kph.
- **Saved Locations**: Save frequently searched locations.
- **Weather Alerts**: Display warnings or alerts for the selected location.
- **Responsive UI**: Works seamlessly on mobile, tablet, and desktop devices.

---

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Context API
- **Icons**: Lucide React
- **API**: WeatherAPI.com
- **Build Tool**: Vite.js

---

## Getting Started
Follow these steps to clone and set up the project locally.

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- WeatherAPI.com API key

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
   VITE_WEATHER_API_BASE_URL=https://api.weatherapi.com/v1/
   ```
   Replace `YOUR_API_KEY_HERE` with your actual API key from [WeatherAPI.com](https://www.weatherapi.com/).

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`.

5. **Build for Production**:
   ```bash
   npm run build
   # or
   yarn build
   ```
   This will generate a production-ready build in the `dist` folder.

---

## Folder Structure
The project follows a modular and clean architecture:

```
weather-app/
|-- src/
|   |-- components/
|   |   |-- layout/
|   |   |   |-- Header.tsx
|   |   |   |-- Navigation.tsx
|   |   |-- hero/
|   |   |   |-- HeroSection.tsx
|   |   |   |-- SearchBar.tsx
|   |   |-- weather/
|   |   |   |-- CurrentWeather.tsx
|   |   |   |-- ForecastChart.tsx
|   |-- context/
|   |   |-- WeatherContext.tsx
|   |-- hooks/
|   |   |-- useWeather.ts
|   |-- services/
|   |   |-- api.ts
|   |-- types/
|   |   |-- weather.ts
|   |-- utils/
|   |   |-- weatherUtils.ts
|   |-- App.tsx
|   |-- main.tsx
|-- public/
|   |-- index.html
|-- .env
|-- package.json
|-- tsconfig.json
|-- tailwind.config.js
|-- vite.config.ts
```

---

## Environment Variables
Add the following variables in your `.env` file:
```env
VITE_WEATHER_API_KEY=YOUR_WEATHERAPI_KEY
VITE_WEATHER_API_BASE_URL=https://api.weatherapi.com/v1/
```

- **VITE_WEATHER_API_KEY**: Your API key from WeatherAPI.com.
- **VITE_WEATHER_API_BASE_URL**: Base URL for the WeatherAPI service.

---

## Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:5173` in your browser to view the application.

---

## Screenshots
### Home Page
![Home Page](screenshot_home.png)

### Weather Forecast
![Weather Forecast](screenshot_forecast.png)

---

## Troubleshooting
### Import Issues:
- Ensure file paths in `import` statements match the folder structure.
- Run the following command to check module resolution:
   ```bash
   npm run lint
   ```

### API Errors:
- Verify your API key in the `.env` file.
- Check the base URL matches the WeatherAPI endpoint.

### Development Server Not Running:
- Ensure Node.js and npm are properly installed.
- Run `npm install` to ensure all dependencies are installed.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
