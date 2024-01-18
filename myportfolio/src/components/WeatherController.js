class WeatherController {
    constructor(apiKey, units) {
      this.apiKey = apiKey;
      this.units = units;
      this.currentData = null;
    }
  
    displayCurrent() {
      console.log(this.currentData);
      if (this.currentData != null) {
        console.log('Have current weather data');
      }
    }
  
    getCurrentDataByGeoLocation = async () => {
      try {
        const position = await this.getCurrentPosition();
        const { latitude, longitude } = position.coords;
  
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=${this.units}`
        );
        const data = await response.json();
  
        this.currentData = data;
        this.displayCurrent();
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      }
    };
  
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }
  }
  
  export default WeatherController;
  