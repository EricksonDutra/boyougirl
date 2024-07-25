document.getElementById('reveal-video').addEventListener('ended', function() {
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('choice-container').style.display = 'block';
});

document.getElementById('boy-choice').addEventListener('click', function() {
    showResult('Menino');
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f', '#0ff']
    });
});

document.getElementById('girl-choice').addEventListener('click', function() {
    showResult('Menina');
});

function showResult(result) {
    document.getElementById('choice-container').style.display = 'none';
    const resultMessage = document.getElementById('result-message');
    if (result === 'Menino') {
        resultMessage.textContent = 'Parabéns!\nVocê acertou, é um menino!';
    } else {
        resultMessage.textContent = 'Ops! Tente novamente.';
        resultMessage.style = 'color: #ff69b4';
    }
    document.getElementById('result-container').style.display = 'block';
}
