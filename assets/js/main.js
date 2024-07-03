const apiKey = "3c8a00c26dc56564f1e113f41e74b095";
const units = "metric";
const iconBaseUrl = "https://openweathermap.org/img/wn/";
let randomComputerChoice = null;
  
// functions that need to run before anything else
makeComputerChoice();
hideScore();

const cityNameElement = document.getElementById("city-name");
const currTempElement = document.getElementById("curr-temp");
const weatherIconElement = document.getElementById("weather-icon");
const cityInputElement = document.getElementById("city-input");
const countrySelectElement = document.getElementById("country-select");
const firstNameElement = document.getElementById("first-name");
const submitButtonElement = document.getElementById("submit-button");

const formElement = document.querySelector('form');
formElement.addEventListener('submit', function(event) {
    event.preventDefault(); 
    handleButtonClick();
    hideBanner();
});

function handleButtonClick() {
    const cityName = cityInputElement.value;
    const countryCode = countrySelectElement.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=${units}`;

    console.log('Fetching weather data from URL:', url); 



    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const currentTemp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            const todayResult = document.getElementById('today-result');
            const winIcon = '<i class="fa-solid fa-circle-check"></i>';
            const loseIcon = '<i class="fa-solid fa-circle-xmark"></i>';
            const equalIcon = '<i class="fa-solid fa-equals"></i>';

            cityNameElement.innerText = `${cityName}, ${countryCode}`;
            currTempElement.innerText = `Temperature: ${currentTemp}°C`;
            weatherIconElement.innerHTML = `<img src="${iconBaseUrl}${weatherIcon}@2x.png" alt="${weatherDescription}" />`;

            cityInputElement.value = '';

            // computer choice vs today result icon
            switch (randomComputerChoice) {
                case '01d':
                    switch (weatherIcon) {
                        case str.startsWith('01') || str.startsWith('02'):
                            todayResult.innerHTML = equalIcon;
                            break;
                        case str.startsWith('03') || str.startsWith('04') || str.startsWith('50'):
                            todayResult.innerHTML = winIcon;
                            break;
                        case str.startsWith('09') || str.startsWith('10') || str.startsWith('13'):
                            todayResult.innerHTML = loseIcon;
                            break;
                    }
                    break;
                case '03d':
                    switch (weatherIcon) {
                        case str.startsWith('01') || str.startsWith('02'):
                            todayResult.innerHTML = loseIcon;
                            break;
                        case str.startsWith('03') || str.startsWith('04') || str.startsWith('50'):
                            todayResult.innerHTML = equalIcon;
                            break;
                        case str.startsWith('09') || str.startsWith('10') || str.startsWith('13'):
                            todayResult.innerHTML = winIcon;
                            break;
                    }
                    break;
                case '09d':
                    switch (weatherIcon) {
                        case str.startsWith('01') || str.startsWith('02'):
                            todayResult.innerHTML = winIcon;
                            break;
                        case str.startsWith('03') || str.startsWith('04') || str.startsWith('50'):
                            todayResult.innerHTML = loseIcon;
                            break;
                        case str.startsWith('09') || str.startsWith('10') || str.startsWith('13'):
                            todayResult.innerHTML = equalIcon;
                            break;
                    }
                    break;
                default:
                    console.log('computer choice is null');
            }
        })

        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');

            cityInputElement.value = '';
        });
}

// next round button event listener
document.getElementById("next-round").addEventListener("click", function(event) {
    event.preventDefault();
    makeComputerChoice();
  });
/** Randomly pick a weather icon and display it in the 'weather to beat' section */
function makeComputerChoice() {
    const computerWeatherArr = ['01d','03d','09d'];
    randomComputerChoice = computerWeatherArr[Math.floor(Math.random()*3)];
    const computerChoiceImage = `https://openweathermap.org/img/wn/${randomComputerChoice}@4x.png`;
    // document.getElementById('computer-default').classList.add("hidden");
    document.getElementById('computer-choice').innerHTML = `<img src="${computerChoiceImage}">`;
}


// hide score at start of game
function hideScore() {
    let gameScore = document.getElementById("show-score");
    gameScore.style.display="none";
}

// hide banner and show score when submit clicked
function hideBanner() {
    let welcomeBanner = document.getElementById("welcome-banner");
    welcomeBanner.style.display="none";
    let gameScore = document.getElementById("show-score");
    gameScore.style.display="block";
}



