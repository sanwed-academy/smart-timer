let initialTime = 5
let timeLeft = initialTime

let interval

let timerDisplay = document.querySelector('.timer')
let alarm = document.querySelector('#alarm')
let minutesInput = document.querySelector('#minutes')
let secondsInput = document.querySelector('#seconds')

let isRunning = false

updateDisplay()

function updateDisplay () {
  let minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(
    seconds).padStart(2, '0')}`
}

function startTimer () {
  isRunning = true;
  interval = setInterval(() => {
    if (isRunning) {
      if (timeLeft > 0) {
        timeLeft--
        updateDisplay()
      } else {
        clearInterval(interval)
        document.body.style.backgroundColor = '#b22222'
        alarm.play()
        isRunning = false;
      }
    }
  }, 1000)
}

function pauseTimer () {
  clearInterval(interval);
  isRunning = false;

}

function resetTimer () {
  clearInterval(interval)
  timeLeft = initialTime
  updateDisplay()
  document.body.style.backgroundColor = '#222'
}

function setTimer () {
  let minutes = parseInt(minutesInput.value) || 0
  let seconds = parseInt(secondsInput.value) || 0
  initialTime = (minutes * 60) + seconds
  timeLeft = initialTime
  updateDisplay()
}

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')
const setButton = document.querySelector('#set-time')

startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)
setButton.addEventListener('click', setTimer)
