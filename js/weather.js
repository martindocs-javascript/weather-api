// api key
const WEATHER_API = YOUR_API_KEY_HERE;
// api url
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

const cityErr = document.querySelector('.w-search span');

class Weather{
    constructor(city, country, units){
        this.city = city;
        this.country = country;
        this.units = units;
    }

    // get the weather data
    async getWeatherData(){
        const response = await fetch(`${WEATHER_URL}${this.city},${this.country}&units=${this.units}&appid=${WEATHER_API}`);
        const data = await response.json();
        return data;
    }      
}