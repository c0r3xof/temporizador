let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const inputFields = document.getElementById('inputFields');

// Iniciar temporizador
startBtn.addEventListener('click', () => {
    // Obter valores dos campos de hora e minuto
    hours = parseInt(document.getElementById('hours').value) || 0;
    minutes = parseInt(document.getElementById('minutes').value) || 0;
    seconds = 0;

    // Esconder as entradas e o botão
    inputFields.classList.add('hidden');
    startBtn.classList.add('hidden');

    // Exibir temporizador
    timerDisplay.classList.remove('hidden');
    updateTimerDisplay();

    // Iniciar contagem
    timer = setInterval(updateTime, 1000);
});

// Atualizar a contagem do tempo
function updateTime() {
    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                clearInterval(timer);
                alert("Tempo esgotado!");
                return;
            }
            hours--;
            minutes = 59;
        } else {
            minutes--;
        }
        seconds = 59;
    } else {
        seconds--;
    }
    updateTimerDisplay();
}

// Atualizar o display do temporizador
function updateTimerDisplay() {
    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    timerDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
