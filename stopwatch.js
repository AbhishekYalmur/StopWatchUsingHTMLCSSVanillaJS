const display = document.querySelector('#timer');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    interval = setInterval(() => {
      elapsedTime++;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  display.textContent = '00:00:00';
}

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  function pad(number) {
    return number < 10 ? `0${number}` : number;
  }
  
  startBtn.addEventListener('click', startTimer);
  stopBtn.addEventListener('click', stopTimer);
  resetBtn.addEventListener('click', resetTimer);
  
