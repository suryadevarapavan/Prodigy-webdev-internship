let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;
let interval;

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

function updateDisplay() {
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("milliseconds").textContent = formatTime(milliseconds);
}

function start() {
    if (!running) {
        interval = setInterval(function() {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10); // update every 10 milliseconds
        running = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
    }
}

function pause() {
    clearInterval(interval);
    running = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);
