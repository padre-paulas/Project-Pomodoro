accountButton = document.getElementById("account-button");
streakButton = document.getElementById("streak-button");
leaderboardButton = document.getElementById("leaderboard-button");
pomodoroTitle = document.getElementById("pomodoro-title");
menuButton = document.getElementById("menu-button");
workButton = document.getElementById("work-button");
shortBreakButton = document.getElementById("short-break-button");
longBreakButton = document.getElementById("long-break-button");
timerTime = document.getElementById("timer-time");
startButton = document.getElementById("start-button");
stopButton = document.getElementById("stop-button");
resetButton = document.getElementById("reset-button");

const work_25_minutes = 1500;
const break_5_minutes = 300;
const break_15_minutes = 900;

let timeDuration = 1500;
let timeLeft = timeDuration; // Time is in seconds
let minutes = 25;
let seconds = 0;
let isRunning = false;
let interval;

const updateTime = () => {
  minutes = Math.floor(timeLeft / 60);
  seconds = (timeLeft % 60);
  timerTime.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const startTimer = () => {
  if (isRunning) {
    return;
  }
  isRunning = true;
  interval = setInterval(() => {
    if (timeLeft <= 0) {
      alert("Time's up!");
      clearInterval(interval);
      timeLeft = timeDuration;
      updateTime();
      return;
    }
    timeLeft--;
    updateTime();
  }, 1000)
}

const stopTimer = () => {
  clearInterval(interval);
  isRunning = false;
  updateTime();
}

const resetTimer = () => {
  clearInterval(interval);
  isRunning = false;
  timeLeft = timeDuration;
  updateTime();
}

const timeSwitch = (time) => {
  if (isRunning) {
    return;
  }
  timeDuration = time;
  timeLeft = timeDuration;
  updateTime();
}




startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
workButton.addEventListener("click", () => timeSwitch(work_25_minutes));
shortBreakButton.addEventListener("click", () => timeSwitch(break_5_minutes));
longBreakButton.addEventListener("click", () => timeSwitch(break_15_minutes));