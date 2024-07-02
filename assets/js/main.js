const apiKey = "7816d9f235c88adc096427a68ca872f2";
const units = "metric";

const cityNameElement = document.getElementById("city-name");
const currTempElement = document.getElementById("curr-temp");
const cityInputElement = document.getElementById("city-input");
const submitButtonElement = document.getElementById("submit-button");

submitButtonElement.addEventListener('click', handleButtonClick);

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
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}
