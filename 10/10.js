// Анімація по кліку
function animateOnClick() {
    const box = document.getElementById('clickBox');

    // Додаємо тимчасову анімацію
    box.style.animation = 'none';
    setTimeout(() => {
        box.style.animation = 'pulse 0.5s';
    }, 10);

    // Прибираємо анімацію після завершення
    setTimeout(() => {
        box.style.animation = 'none';
    }, 500);
}
