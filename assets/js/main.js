const apiKey = "3c8a00c26dc56564f1e113f41e74b095";
const units = "metric";

const cityNameElement = document.getElementById("city-name");
const currTempElement = document.getElementById("curr-temp");
const cityInputElement = document.getElementById("city-input");
const submitButtonElement = document.getElementById("submit-button");

const formElement = document.querySelector('form');
formElement.addEventListener('submit', function(event) {
    event.preventDefault(); 
    handleButtonClick();
});

function handleButtonClick() {
    const cityName = cityInputElement.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const currentTemp = data.main.temp;

            cityNameElement.innerText = cityName;
            currTempElement.innerText = `Temperature: ${currentTemp}°C`;
            cityInputElement.value = '';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
            cityInputElement.value = '';
        });
}
