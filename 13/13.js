// ВІДЕО ФУНКЦІЇ
function toggleBackgroundVideo() {
    const video = document.querySelector('.background-video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function playVideo(id) {
    document.getElementById(id).play();
}

function pauseVideo(id) {
    document.getElementById(id).pause();
}

function stopVideo(id) {
    const video = document.getElementById(id);
    video.pause();
    video.currentTime = 0;
}

function muteVideo(id) {
    const video = document.getElementById(id);
    video.muted = !video.muted;
}

function rewindVideo(id) {
    const video = document.getElementById(id);
    video.currentTime -= 10;
}

function forwardVideo(id) {
    const video = document.getElementById(id);
    video.currentTime += 10;
}

// АУДІО ФУНКЦІЇ
function playAudio() {
    document.getElementById('audioPlayer').play();
}

function pauseAudio() {
    document.getElementById('audioPlayer').pause();
}

function stopAudio() {
    const audio = document.getElementById('audioPlayer');
    audio.pause();
    audio.currentTime = 0;
}

function changeVolume() {
    const audio = document.getElementById('audioPlayer');
    audio.volume = audio.volume === 0.5 ? 1 : 0.5;
}

function toggleBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function playSound(soundType) {
    const sound = document.getElementById(soundType + 'Sound');
    sound.currentTime = 0;
    sound.play();
}

// КАРТИ
function changeMap(city) {
    const iframe = document.querySelector('.map-iframe');
    const maps = {
        'kyiv': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1638712956245!2d30.5238!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce57b9497d49%3A0x8b6b1d60f24a61c5!2z0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCw!5e0!3m2!1suk!2sua!4v1234567890123',
        'lviv': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.9999999999995!2d24.0322!3d49.8397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2sua!4v1234567890124',
        'odesa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.999999999999!2d30.7326!3d46.4825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631368fd1c51f%3A0x4223c517012378e3!2z0J7QtNC10YHQsCwg0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2sua!4v1234567890125'
    };
    iframe.src = maps[city];
}

// IMAGE MAP
function showAreaInfo(areaName, description) {
    document.getElementById('areaResult').innerHTML = `<strong>${areaName}:</strong> ${description}`;
}

// CANVAS МАЛЮВАННЯ
function drawRectangle() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(50 + Math.random() * 100, 50 + Math.random() * 50, 80, 40);
}

function drawCircle() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(150 + Math.random() * 100, 100 + Math.random() * 50, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function drawLine() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.moveTo(Math.random() * 300, Math.random() * 200);
    ctx.lineTo(Math.random() * 300, Math.random() * 200);
    ctx.stroke();
}

function drawText() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '20px Arial';
    ctx.fillStyle = 'purple';
    ctx.fillText('Canvas!', Math.random() * 200, 50 + Math.random() * 100);
}

function clearCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// CANVAS АНІМАЦІЯ
let animationId;
let ballX = 50;
let ballY = 100;
let ballSpeedX = 2;
let ballSpeedY = 1;
let ballColor = 'red';

function startAnimation() {
    function animate() {
        const canvas = document.getElementById('animationCanvas');
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Рухаємо м'яч
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Відбиваємо від стін
        if (ballX >= canvas.width - 20 || ballX <= 20) ballSpeedX = -ballSpeedX;
        if (ballY >= canvas.height - 20 || ballY <= 20) ballSpeedY = -ballSpeedY;

        // Малюємо м'яч
        ctx.beginPath();
        ctx.fillStyle = ballColor;
        ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI);
        ctx.fill();

        animationId = requestAnimationFrame(animate);
    }
    animate();
}

function stopAnimation() {
    cancelAnimationFrame(animationId);
}

function changeColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    ballColor = colors[Math.floor(Math.random() * colors.length)];
}

function changeSpeed() {
    ballSpeedX = (Math.random() - 0.5) * 6;
    ballSpeedY = (Math.random() - 0.5) * 6;
}

// ІНТЕРАКТИВНИЙ CANVAS
let isDrawing = false;
let brushSize = 5;
let brushColor = 'black';

function startDrawing(event) {
    isDrawing = true;
    const canvas = document.getElementById('interactiveCanvas');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function drawOnCanvas(event) {
    if (!isDrawing) return;

    const canvas = document.getElementById('interactiveCanvas');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
    ctx.lineCap = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function stopDrawing() {
    isDrawing = false;
}

function setBrushSize(size) {
    brushSize = size;
}

function setBrushColor(color) {
    brushColor = color;
}

function clearInteractiveCanvas() {
    const canvas = document.getElementById('interactiveCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// SVG ФУНКЦІЇ
function moveSvgRect() {
    const rect = document.getElementById('movableRect');
    const currentX = parseInt(rect.getAttribute('x'));
    const newX = currentX === 50 ? 200 : 50;
    rect.setAttribute('x', newX);
}

function scaleSvgCircle() {
    const circle = document.getElementById('scalableCircle');
    const currentR = parseInt(circle.getAttribute('r'));
    const newR = currentR === 30 ? 50 : 30;
    circle.setAttribute('r', newR);
}

function changeSvgText() {
    const text = document.getElementById('changeableText');
    const texts = ['SVG Текст', 'Змінений!', 'JavaScript', 'Canvas vs SVG'];
    const currentText = text.textContent;
    const currentIndex = texts.indexOf(currentText);
    const newIndex = (currentIndex + 1) % texts.length;
    text.textContent = texts[newIndex];
}

function resetSvg() {
    document.getElementById('movableRect').setAttribute('x', '50');
    document.getElementById('scalableCircle').setAttribute('r', '30');
    document.getElementById('changeableText').textContent = 'SVG Текст';
}

// Ініціалізація при завантаженні сторінки
window.addEventListener('load', function() {
    // Ініціалізуємо canvas
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '16px Arial';
    ctx.fillText('Клікайте кнопки для малювання', 50, 100);
});
