//Footer.js
import React, { useEffect, useState, useRef } from 'react';
import '../index.css'
import WeatherController from './WeatherController';
import Draggable from 'react-draggable';
export default function Footer() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const draggableRef = useRef();

  const styles = {
    weather: {
      position:'center',
      marginTop:"5pc",
      maxWidth: "100px",
      cursor: "grab",
    }
  }

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  };

  useEffect(() => {
    const apiKey = '31f3c7fba0e24b5ad83d1dc92397b585';
    const units = 'imperial';

    const fetchWeatherData = async () => {
      const weatherController = new WeatherController(apiKey, units);

      try {
        await weatherController.getCurrentDataByGeoLocation();
        const weatherData = weatherController.currentData;
        setCurrentWeather(weatherData);
      } catch (error) {
        console.error('Error getting weather data:', error);
      }
    };

    const updateCurrentTime = () => {
      setCurrentTime(getCurrentTime());
    };

    fetchWeatherData();
    updateCurrentTime();

    // Update the current time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array effect runs once on mount

  return (
    <div  className="">
    <footer>
      
        <section>
          {currentWeather && (
            <Draggable nodeRef={draggableRef}>
              <div style={styles.weather} ref={draggableRef}>
                <div className='col-2'>{currentWeather.name}</div>
                <div className='col-2'> {currentTime}</div>
                <div className='col-2'>Temperature: {currentWeather.main.temp} °F</div>
                <div className='col-2'>Humidity: {currentWeather.main.humidity}%</div>
              </div>
            </Draggable>
          )}
        </section>
        <p className="copyright">copyright &copy; anthonydiblasio.github.io 2024</p>
    </footer>
    </div>
  );
}