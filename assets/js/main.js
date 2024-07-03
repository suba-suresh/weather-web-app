const apiKey = "3c8a00c26dc56564f1e113f41e74b095";
const units = "metric";
const iconBaseUrl = "https://openweathermap.org/img/wn/";
let randomComputerChoice = null;

// variables needed for game results icons
const todayResult = document.getElementById('today-result');
const winIcon = '<i class="fa-solid fa-circle-check green-win"></i>';
const loseIcon = '<i class="fa-solid fa-circle-xmark red-lose"></i>';
const equalIcon = '<div class="blue-circle"><i class="fa-solid fa-equals"></i></div>';

// score results
let userScore = 0;
let computerScore = 0;
  
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

// submit button event listener
const formElement = document.querySelector('form');
formElement.addEventListener('submit', function(event) {
    event.preventDefault(); 
    handleButtonClick();
    hideBanner();
});

/** fetch request for today's weather */
function handleButtonClick() {
    const cityName = cityInputElement.value;
    const countryCode = countrySelectElement.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=${units}`;

    userScore = 0;
    computerScore = 0;

    console.log('Fetching weather data from URL:', url); 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const currentTemp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            cityNameElement.innerText = `${cityName}, ${countryCode}`;
            currTempElement.innerText = `Temperature: ${currentTemp}°C`;
            weatherIconElement.innerHTML = `<img src="${iconBaseUrl}${weatherIcon}@2x.png" alt="${weatherDescription}" />`;

            // computer choice vs today result icon
            switch (randomComputerChoice) {
                case '01d':
                    if (weatherIcon.startsWith('01') || weatherIcon.startsWith('02')) {
                        todayResult.innerHTML = equalIcon;
                    } else if (weatherIcon.startsWith('03') || weatherIcon.startsWith('04') || weatherIcon.startsWith('50')) {
                        ++userScore;
                        todayResult.innerHTML = winIcon;
                    } else if (weatherIcon.startsWith('09') || weatherIcon.startsWith('10') || weatherIcon.startsWith('13')) {
                        ++computerScore;
                        todayResult.innerHTML = loseIcon;
                    }
                    break;
                case '03d':
                    if (weatherIcon.startsWith('01') || weatherIcon.startsWith('02')) {
                        ++computerScore;
                        todayResult.innerHTML = loseIcon;
                    } else if (weatherIcon.startsWith('03') || weatherIcon.startsWith('04') || weatherIcon.startsWith('50')) {
                        todayResult.innerHTML = equalIcon;
                    } else if (weatherIcon.startsWith('09') || weatherIcon.startsWith('10') || weatherIcon.startsWith('13')) {
                        ++userScore;
                        todayResult.innerHTML = winIcon;
                    }
                    break;
                case '09d':
                    if (weatherIcon.startsWith('01') || weatherIcon.startsWith('02')) {
                        ++userScore;
                        todayResult.innerHTML = winIcon;
                    } else if (weatherIcon.startsWith('03') || weatherIcon.startsWith('04') || weatherIcon.startsWith('50')) {
                        ++computerScore;
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
                            ++userScore;
                            dayResult.innerHTML = winIcon;
                        } else if (currentConditionImageCode.startsWith('09') || currentConditionImageCode.startsWith('10') || currentConditionImageCode.startsWith('13')) {
                            ++computerScore;
                            dayResult.innerHTML = loseIcon;
                        }
                        break;
                    case '03d':
                        if (currentConditionImageCode.startsWith('01') || currentConditionImageCode.startsWith('02')) {
                            ++computerScore;
                            dayResult.innerHTML = loseIcon;
                        } else if (currentConditionImageCode.startsWith('03') || currentConditionImageCode.startsWith('04') || currentConditionImageCode.startsWith('50')) {
                            dayResult.innerHTML = equalIcon;
                        } else if (currentConditionImageCode.startsWith('09') || currentConditionImageCode.startsWith('10') || currentConditionImageCode.startsWith('13')) {
                            ++userScore;
                            dayResult.innerHTML = winIcon;
                        }
                        break;
                    case '09d':
                        if (currentConditionImageCode.startsWith('01') || currentConditionImageCode.startsWith('02')) {
                            ++userScore;
                            dayResult.innerHTML = winIcon;
                        } else if (currentConditionImageCode.startsWith('03') || currentConditionImageCode.startsWith('04') || currentConditionImageCode.startsWith('50')) {
                            ++computerScore;
                            dayResult.innerHTML = loseIcon;
                        } else if (currentConditionImageCode.startsWith('09') || currentConditionImageCode.startsWith('10') || currentConditionImageCode.startsWith('13')) {
                            dayResult.innerHTML = equalIcon;
                        }
                        break;
                    default:
                        console.log('computer choice is null');
                }            
            }
            resultMessage();
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

/** add wins of user and computer, then determine who has won, and display results */
function resultMessage() {
    // results message
    const resultTally = document.getElementById('result-tally');
    const winnerMessage = document.getElementById('winner-message');
    resultTally.innerHTML = `<h2>You won ${userScore}/6, Computer won ${computerScore}/6, which means:</h2>`;
    // Determine the winner and set the appropriate message
    let message;
    if (userScore > computerScore) {
        message = "Congratulations! You win!";
    } else if (userScore < computerScore) {
        message = "Sorry, the computer wins. Better luck next time!";
    } else {
        message = "It's a tie!";
    }
    // winner message
    winnerMessage.innerHTML = `<h2>${message}</h2>`;
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

// Find Todys Day In The Week Index
const todayDate = new Date();
const todayDay = todayDate.getDay();

console.log(todayDay);

//Establish Day2-6 Days and apply to HTML
const day2 = document.getElementById("day2");
  day2.innerText = `${dayConv(checkDay(todayDay+1))}`

  const day3 = document.getElementById("day3");
  day3.innerText = `${dayConv(checkDay(todayDay+2))}`

  const day4 = document.getElementById("day4");
  day4.innerText = `${dayConv(checkDay(todayDay+3))}`

  const day5 = document.getElementById("day5");
  day5.innerText = `${dayConv(checkDay(todayDay+4))}`

  const day6 = document.getElementById("day6");
  day6.innerText = `${dayConv(checkDay(todayDay+5))}`

// Convert Day Index to Named Day 
function dayConv(day) {
    switch (day) {
        case 0:
        return "Sunday";
        break;
        case 1:
        return "Monday";
        break;
        case 2:
        return "Tuesday";
        break;
        case 3:
        return "Wednesday";
        break;
        case 4:
        return "Thursday";
        break;
        case 5:
        return "Friday";
        break;
        case 6:
        return "Saturday";
    }
}

// Correct Future Days That Go Above Index 6
function checkDay(day) {
    if (day < 7) {
       return day;
    } else {
        return day-7;
    }
}


