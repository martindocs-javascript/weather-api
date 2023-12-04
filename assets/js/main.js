const ui = new UI();

// change location of the target weather
document.querySelector('.w-search').addEventListener('keydown', (e)=>{    
    
    // true on ENTER press and input is a string
    if (e.which == 13 && e.target.value !='' && typeof e.target.value === 'string') { 
        // split user input in two parts - city and country
        const location = e.target.value.split(/[,\s-]/gi); 

        const city = location[0];        
        const country = location.filter((item)=> item!='')[1];      

        // send input data to Weather API        
        const weather = new Weather(city, country, 'metric');
        
        // fetch data
        weather.getWeatherData()
         .then(result => ui.showData(result))
         .catch(err => console.error(err));     
    }
});