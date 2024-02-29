// Находим элемент #line
const originalLine = document.getElementById('line');

// Создаем SVG для каждой копии
for (let i = 0; i < 20; i++) {
    // Клонируем оригинальный элемент
    const clonedLine = originalLine.cloneNode(true);
    clonedLine.style.top = `${i * 2}%`;
    // Добавляем копию в документ
    originalLine.parentElement.appendChild(clonedLine);
}

const lines = document.querySelectorAll('#line');
const waveSize = 21; // Размер волны
const delayBetweenWaves = 500; // Задержка между волнами

function animateWave(waveIndex) {
  const startLineIndex = waveIndex * waveSize;
  const endLineIndex = Math.min((waveIndex + 1) * waveSize, lines.length);

  lines.forEach((line, index) => {
    if (index >= startLineIndex && index < endLineIndex) {
      const delayInsideWave = index - startLineIndex;
      const delay = delayInsideWave * 100;

      anime({
        targets: line,
        translateY: [0, -50, 0], // Двигаем вверх и вниз
        easing: 'easeInOutQuad',
        duration: 2000, // Фиксированная продолжительность анимации для каждой линии
        delay: delay, // Задержка для каждой линии
        loop: false,
      });
    }
  });
}

// Запускаем первую волну
animateWave(0);

setInterval(function() {
  animateWave(0);
}, 4200);