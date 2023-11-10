document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');
    const locationResult = document.getElementById('location');
    const temperatureResult = document.getElementById('temperature');
    const descriptionResult = document.getElementById('description');

    searchButton.addEventListener('click', () => {
        const location = locationInput.value;
        const temperatureCelsius = getRandomTemperature(10, 40); 
        const description = getTemperatureBasedDescription(temperatureCelsius);
        const weatherData = {
            name: location,
            main: {
                temp: temperatureCelsius,
            },
            weather: [
                {
                    description: description,
                },
            ],
        };
        locationResult.textContent = weatherData.name;
        temperatureResult.textContent = `${weatherData.main.temp}°C`;
        descriptionResult.textContent = weatherData.weather[0].description;
    });
    function getRandomTemperature(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }
    function getTemperatureBasedDescription(temperature) {
        if (temperature < 15) {
            return "Cold";
        } else if (temperature >= 15 && temperature < 25) {
            return "Moderate";
        } else {
            return "Warm";
        }
    }
});
