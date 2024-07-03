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
// IDs for five-day forecast elements
const fiveDayForecastElement = document.getElementById("five-day-forecast")
const day2TempElement = document.getElementById("day2-temp");
const day2WeatherIconElement = document.getElementById("day2-weather-icon");
const day3TempElement = document.getElementById("day3-temp");
const day3WeatherIconElement = document.getElementById("day3-weather-icon");
const day4TempElement = document.getElementById("day4-temp");
const day4WeatherIconElement = document.getElementById("day4-weather-icon");
const day5TempElement = document.getElementById("day5-temp");
const day5WeatherIconElement = document.getElementById("day5-weather-icon");
const day6TempElement = document.getElementById("day6-temp");
const day6WeatherIconElement = document.getElementById("day6-weather-icon");


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

            // variables needed for game results icons
            const todayResult = document.getElementById('today-result');
            const winIcon = '<i class="fa-solid fa-circle-check green-win"></i>';
            const loseIcon = '<i class="fa-solid fa-circle-xmark red-lose"></i>';
            const equalIcon = '<div class="blue-circle"><i class="fa-solid fa-equals"></i></div>';

            cityNameElement.innerText = `${cityName}, ${countryCode}`;
            currTempElement.innerText = `Temperature: ${currentTemp}°C`;
            weatherIconElement.innerHTML = `<img src="${iconBaseUrl}${weatherIcon}@2x.png" alt="${weatherDescription}" />`;

            // computer choice vs today result icon
            switch (randomComputerChoice) {
                case '01d':
                    if (weatherIcon.startsWith('01') || weatherIcon.startsWith('02')) {
                        todayResult.innerHTML = equalIcon;
                    } else if (weatherIcon.startsWith('03') || weatherIcon.startsWith('04') || weatherIcon.startsWith('50')) {
                        todayResult.innerHTML = winIcon;
                    } else if (weatherIcon.startsWith('09') || weatherIcon.startsWith('10') || weatherIcon.startsWith('13')) {
                        todayResult.innerHTML = loseIcon;
                    }
                    break;
                case '03d':
                    if (weatherIcon.startsWith('01') || weatherIcon.startsWith('02')) {
                        todayResult.innerHTML = loseIcon;
                    } else if (weatherIcon.startsWith('03') || weatherIcon.startsWith('04') || weatherIcon.startsWith('50')) {
                        todayResult.innerHTML = equalIcon;
                    } else if (weatherIcon.startsWith('09') || weatherIcon.startsWith('10') || weatherIcon.startsWith('13')) {
                        todayResult.innerHTML = winIcon;
                    }
                    break;
                case '09d':
                    if (weatherIcon.startsWith('01') || weatherIcon.startsWith('02')) {
                        todayResult.innerHTML = winIcon;
                    } else if (weatherIcon.startsWith('03') || weatherIcon.startsWith('04') || weatherIcon.startsWith('50')) {
                        todayResult.innerHTML = loseIcon;
                    } else if (weatherIcon.startsWith('09') || weatherIcon.startsWith('10') || weatherIcon.startsWith('13')) {
                        todayResult.innerHTML = equalIcon;
                    }
                    break;
                default:
                    console.log('computer choice is null');
            }            

            cityInputElement.value = '';
            // Fetch five-day forecast after fetching current weather
            fetchFiveDayForecast(cityName, countryCode);
        })

        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');

            cityInputElement.value = '';

            
        });
}

/**weather forecast for next five days */
function fetchFiveDayForecast(cityName, countryCode) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiKey}&units=${units}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
             // variables needed for game results icons
             const todayResult = document.getElementById('today-result');
             const winIcon = '<i class="fa-solid fa-circle-check green-win"></i>';
             const loseIcon = '<i class="fa-solid fa-circle-xmark red-lose"></i>';
             const equalIcon = '<div class="blue-circle"><i class="fa-solid fa-equals"></i></div>';

            // Iterate over the forecast data to populate each day's weather
            for (let i = 7; i < 40; i += 8) {
                const dayIndex = (i - 7) / 8 + 2; // Calculate day number dynamically
                const currentCondition = data.list[i].weather[0].main;
                const currentConditionImageCode = data.list[i].weather[0].icon;
                const currentTemp = data.list[i].main.temp;
                const currConditionImage = `${iconBaseUrl}${currentConditionImageCode}@2x.png`;

                // Update corresponding day's elements
                const dayTempElement = document.getElementById(`day${dayIndex}-temp`);
                const dayWeatherIconElement = document.getElementById(`day${dayIndex}-weather-icon`);
                const dayResult = document.getElementById(`day${dayIndex}-result`); // icon div

                dayTempElement.innerText = `${currentTemp}°C`;
                dayWeatherIconElement.innerHTML = `<img src="${currConditionImage}" alt="${currentCondition}" />`;

                // computer choice vs forecast result icon
                switch (randomComputerChoice) {
                    case '01d':
                        if (currentConditionImageCode.startsWith('01') || currentConditionImageCode.startsWith('02')) {
                            dayResult.innerHTML = equalIcon;
                        } else if (currentConditionImageCode.startsWith('03') || currentConditionImageCode.startsWith('04') || currentConditionImageCode.startsWith('50')) {
                            dayResult.innerHTML = winIcon;
                        } else if (currentConditionImageCode.startsWith('09') || currentConditionImageCode.startsWith('10') || currentConditionImageCode.startsWith('13')) {
                            dayResult.innerHTML = loseIcon;
                        }
                        break;
                    case '03d':
                        if (currentConditionImageCode.startsWith('01') || currentConditionImageCode.startsWith('02')) {
                            dayResult.innerHTML = loseIcon;
                        } else if (currentConditionImageCode.startsWith('03') || currentConditionImageCode.startsWith('04') || currentConditionImageCode.startsWith('50')) {
                            dayResult.innerHTML = equalIcon;
                        } else if (currentConditionImageCode.startsWith('09') || currentConditionImageCode.startsWith('10') || currentConditionImageCode.startsWith('13')) {
                            dayResult.innerHTML = winIcon;
                        }
                        break;
                    case '09d':
                        if (currentConditionImageCode.startsWith('01') || currentConditionImageCode.startsWith('02')) {
                            dayResult.innerHTML = winIcon;
                        } else if (currentConditionImageCode.startsWith('03') || currentConditionImageCode.startsWith('04') || currentConditionImageCode.startsWith('50')) {
                            dayResult.innerHTML = loseIcon;
                        } else if (currentConditionImageCode.startsWith('09') || currentConditionImageCode.startsWith('10') || currentConditionImageCode.startsWith('13')) {
                            dayResult.innerHTML = equalIcon;
                        }
                        break;
                    default:
                        console.log('computer choice is null');
                }            

            }
        })
        .catch(error => {
            console.error('Error fetching five-day forecast:', error);
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



