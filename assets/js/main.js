


// computer weather to beat
const computerWeatherArr = ['01d','02d','03d','04d','09d','10d','11d','13d','50d'];
const randomComputerChoice = computerWeatherArr[Math.floor(Math.random()*9)];
console.log(randomComputerChoice);
const currConditionImage = `https://openweathermap.org/img/wn/${randomComputerChoice}@2x.png`;