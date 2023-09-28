const timerElement = document.getElementById("timer");
let timer = 15;

function timeDecreasing() {
    timerElement.innerText = timer;
    timer--;

    if (timer <= 0) {
        timer = 0;
    }
}

setInterval(timeDecreasing, 1000);