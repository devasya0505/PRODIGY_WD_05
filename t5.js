function getWeather() {
    const location = document.getElementById("location").value;
    const apiKey = "d8c74743e78d57cd7008f54809340db2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = `
                <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].main}</p>
                <p><strong>Description:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById("weather-info").innerHTML = "<p>Unable to fetch weather data. Please try again later.</p>";
        });
}