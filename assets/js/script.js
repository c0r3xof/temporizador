// Seleção dos elementos
const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timer');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const inputFields = document.getElementById('inputFields');

// Variáveis de controle do temporizador
let timer;
let remainingTime;
let isRunning = false;

// Função para iniciar o temporizador
function startTimer() {
    const hours = parseInt(hoursInput.value) || 0;  // Pega o valor da hora ou usa 0
    const minutes = parseInt(minutesInput.value) || 0;  // Pega o valor dos minutos ou usa 0

    // Converte o tempo total para segundos
    remainingTime = hours * 3600 + minutes * 60;

    // Mostra o temporizador
    updateDisplay();

    // Esconde os inputs e o botão
    inputFields.classList.add('hidden');
    startBtn.classList.add('hidden');

    // Inicia a contagem regressiva
    isRunning = true;
    timer = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(timer);  // Para o temporizador
            isRunning = false;
            alert("Tempo esgotado!");  // Exibe um alerta quando o tempo acabar

            // Reseta o temporizador para o estado inicial
            resetTimer();
        } else {
            remainingTime--;  // Decrementa o tempo
            updateDisplay();   // Atualiza a exibição do temporizador
        }
    }, 1000);
}

// Função para atualizar a exibição do temporizador
function updateDisplay() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    // Formatação do tempo
    timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Função para formatar o tempo, garantindo 2 dígitos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Função para resetar o temporizador
function resetTimer() {
    hoursInput.value = '';
    minutesInput.value = '';
    timerDisplay.textContent = '00:00';  // Reseta a exibição para 00:00
    inputFields.classList.remove('hidden');  // Mostra novamente os inputs
    startBtn.classList.remove('hidden');    // Mostra novamente o botão
}

// Evento do botão "Iniciar"
startBtn.addEventListener('click', function() {
    if (!isRunning) {
        startTimer();
    }
});
