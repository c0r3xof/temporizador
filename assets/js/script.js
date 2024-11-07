let timer;
let timeLeft;
let totalTime;

function startTimer() {
  const timeInput = document.getElementById("timeInput").value;
  const unit = document.getElementById("unit").value;
  
  if (timeInput && !isNaN(timeInput) && timeInput > 0) {
    totalTime = unit === 'hours' ? timeInput * 3600 : timeInput * 60;
    timeLeft = totalTime;

    // Ocultar os controles e título, mostrar o temporizador
    document.querySelector("h1").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("result").style.display = "none";

    updateTimer();
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

  const percentage = (timeLeft / totalTime) * 100;
  document.getElementById("timer").style.width = `${percentage}%`;

  // Mudança de cor e piscando quando o tempo está perto de acabar
  if (timeLeft <= 15) {
    document.getElementById("timer").style.backgroundColor = '#ffcccc';
    if (timeLeft % 2 === 0) {
      document.getElementById("timer").style.opacity = 0.5;
    } else {
      document.getElementById("timer").style.opacity = 1;
    }
  }

  if (timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("result").style.display = "block";
    document.getElementById("timer").style.display = "none";
  }

  timeLeft--;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
