// search function
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', getWeather);
});

// Function to check the weather for a city
async function getWeather() {
    const apiKey = '3c8a00c26dc56564f1e113f41e74b095'; 
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Unable to fetch weather data.');
        }

        // Parse the response JSON
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
