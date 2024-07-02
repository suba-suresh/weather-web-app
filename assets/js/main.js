


// computer weather to beat
function makeComputerChoice() {
    const computerWeatherArr = ['01d','02d','03d','04d','09d','10d','11d','13d','50d'];
    const randomComputerChoice = computerWeatherArr[Math.floor(Math.random()*9)];
    console.log(randomComputerChoice);
    const computerChoiceImage = `https://openweathermap.org/img/wn/${randomComputerChoice}@2x.png`;
    document.getElementById('computer-choice').innerHTML = `<img src="${computerChoiceImage}">`;
}