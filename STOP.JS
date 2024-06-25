let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function stopTimer() {
    clearInterval(intervalId);
}

function updateDisplay() {
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
}

function pad(time) {
    return (time < 10? '0' : '') + time;
}