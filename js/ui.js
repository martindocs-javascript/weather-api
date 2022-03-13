class UI{
    constructor(){
        this.location = document.querySelector('.w-location h1');
        this.todayDate = document.querySelector('.w-location h2');
        this.icon = document.querySelector('.w-location img');
        this.iconSun = document.querySelector('.w-sun-updown img');
        this.sunrise = document.querySelector('.sunrise');
        this.sunset = document.querySelector('.sunset');
        this.temp = document.querySelector('.w-temp');
        this.iconWind = document.querySelector('.w-wind img');
        this.wind = document.querySelector('.w-wind span');
        this.desc = document.querySelector('.w-desc h3'); 
    }

    showData(weather){      
        this.location.innerHTML = `${weather.name}<span class="small">,${weather.sys.country}</span>`;
        this.todayDate.innerHTML = this.currentDate();
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);

        this.temp.innerHTML = `${Math.round(weather.main.temp)}&#8451`;
        this.iconSun.setAttribute('src', 'img/sunset.png');
        this.iconSun.setAttribute('alt', 'sunset and sundown');
        this.sunrise.textContent = `${this.sunRiseSunDown(weather.sys.sunrise)} -`;
        this.sunset.textContent = this.sunRiseSunDown(weather.sys.sunset);
        this.iconWind.setAttribute('src', 'img/wind-sign.png');
        this.iconWind.setAttribute('alt', 'wind');
        this.wind.textContent = `${Math.round(weather.wind.speed)}km/h`;
        this.desc.textContent = weather.weather['0'].description;
        
    }

    sunRiseSunDown(unix_timestamp){
        /*
            timestamp in JS in in milliseconds       
            Create a new JavaScript Date object based on the timestamp
            multiplied by 1000 so that the argument is in milliseconds, not seconds.
        */
        const date = new Date(unix_timestamp * 1000);    
        // Hours part from the timestamp   
        const hours = date.getHours();      
        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes();  
        // Will display time in 10:30:23 format            
        let formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    }

    currentDate(){
        const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        const date = new Date();
        let day = daysOfWeek[date.getDay()];
        let today = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();

        return `${day}, ${today}-${month}-${year}`;
    }
}