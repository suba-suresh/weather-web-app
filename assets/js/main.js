
  
// functions that need to run before anything else
makeComputerChoice();

// next round button event listener
document.getElementById("next-round").addEventListener("click", function(event) {
    event.preventDefault();
    makeComputerChoice();
  });
/** Randomly pick a weather icon and display it in the 'weather to beat' section */
function makeComputerChoice() {
    const computerWeatherArr = ['01d','02d','03d','04d','09d','10d'];
    const randomComputerChoice = computerWeatherArr[Math.floor(Math.random()*6)];
    console.log(randomComputerChoice);
    const computerChoiceImage = `https://openweathermap.org/img/wn/${randomComputerChoice}@4x.png`;
    // document.getElementById('computer-default').classList.add("hidden");
    document.getElementById('computer-choice').innerHTML = `<img src="${computerChoiceImage}">`;
}