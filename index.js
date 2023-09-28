let timeRemaining = 15
const timer = document.getElementById("timer")


function timeDecreasing() {
    let secondes = parseInt(timeRemaining, 10);
    timer.innerText = timeRemaining;
    timeRemaining--;
}

setInterval(timeDecreasing, 1000)













