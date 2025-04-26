import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: string;
  precipitation: string;
}

interface LocationWeather {
  name: string;
  current: {
    temp: number;
    condition: string;
    humidity: number;
    wind: string;
    precipitation: string;
  };
  forecast: ForecastDay[];
  climbing: string;
}

interface LocationsData {
  [key: string]: LocationWeather;
}

const Weather: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('yosemite');

  // Mock data for different climbing locations
  const locations: LocationsData = {
    yosemite: {
      name: 'Yosemite National Park, CA',
      current: {
        temp: 75,
        condition: 'Sunny',
        humidity: 45,
        wind: '5 mph W',
        precipitation: '0%'
      },
      forecast: [
        { day: 'Today', high: 75, low: 55, condition: 'Sunny', precipitation: '0%' },
        { day: 'Tomorrow', high: 72, low: 54, condition: 'Partly Cloudy', precipitation: '10%' },
        { day: 'Wednesday', high: 78, low: 56, condition: 'Clear', precipitation: '0%' },
        { day: 'Thursday', high: 76, low: 57, condition: 'Sunny', precipitation: '0%' },
        { day: 'Friday', high: 70, low: 52, condition: 'Cloudy', precipitation: '30%' }
      ],
      climbing: 'Excellent conditions for climbing. Dry rock with mild temperatures.'
    },
    joshuaTree: {
      name: 'Joshua Tree National Park, CA',
      current: {
        temp: 85,
        condition: 'Sunny',
        humidity: 20,
        wind: '8 mph NE',
        precipitation: '0%'
      },
      forecast: [
        { day: 'Today', high: 85, low: 65, condition: 'Sunny', precipitation: '0%' },
        { day: 'Tomorrow', high: 87, low: 67, condition: 'Clear', precipitation: '0%' },
        { day: 'Wednesday', high: 90, low: 68, condition: 'Sunny', precipitation: '0%' },
        { day: 'Thursday', high: 88, low: 66, condition: 'Clear', precipitation: '0%' },
        { day: 'Friday', high: 86, low: 65, condition: 'Sunny', precipitation: '0%' }
      ],
      climbing: 'Very hot during midday. Early morning and evening climbing recommended.'
    },
    redRiver: {
      name: 'Red River Gorge, KY',
      current: {
        temp: 68,
        condition: 'Partly Cloudy',
        humidity: 65,
        wind: '4 mph SE',
        precipitation: '15%'
      },
      forecast: [
        { day: 'Today', high: 68, low: 50, condition: 'Partly Cloudy', precipitation: '15%' },
        { day: 'Tomorrow', high: 65, low: 48, condition: 'Showers', precipitation: '60%' },
        { day: 'Wednesday', high: 62, low: 47, condition: 'Partly Cloudy', precipitation: '25%' },
        { day: 'Thursday', high: 70, low: 52, condition: 'Sunny', precipitation: '0%' },
        { day: 'Friday', high: 72, low: 54, condition: 'Clear', precipitation: '0%' }
      ],
      climbing: 'Potential rain tomorrow. Thursday and Friday will have ideal conditions.'
    }
  };

  const selectedData = locations[selectedLocation];

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 pt-20 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Weather & Climbing Conditions</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Climbing Location:</label>
          <select 
            className="w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="yosemite">Yosemite National Park, CA</option>
            <option value="joshuaTree">Joshua Tree National Park, CA</option>
            <option value="redRiver">Red River Gorge, KY</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Current Conditions</h2>
            <h3 className="text-lg font-medium mb-3">{selectedData.name}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">{selectedData.current.temp}°F</div>
                <div className="text-xl">{selectedData.current.condition}</div>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Humidity:</span> {selectedData.current.humidity}%</p>
                <p><span className="font-medium">Wind:</span> {selectedData.current.wind}</p>
                <p><span className="font-medium">Precipitation:</span> {selectedData.current.precipitation}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">5-Day Forecast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {selectedData.forecast.map((day: ForecastDay, index: number) => (
                <div key={index} className="bg-gray-50 rounded p-3 text-center">
                  <h3 className="font-medium">{day.day}</h3>
                  <p className="text-sm my-2">{day.condition}</p>
                  <p className="text-sm">
                    <span className="text-primary-dark font-medium">{day.high}°F</span>
                    {' / '}
                    <span className="text-gray-600">{day.low}°F</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Precip: {day.precipitation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-3">Climbing Conditions</h2>
            <p className="text-gray-700">{selectedData.climbing}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Weather; 