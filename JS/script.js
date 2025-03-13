// Плавная прокрутка к разделам
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация для заголовка
const headerTitle = document.querySelector('header h1');
headerTitle.addEventListener('mouseover', () => {
    headerTitle.style.animation = 'bounce 0.5s infinite';
});

headerTitle.addEventListener('mouseout', () => {
    headerTitle.style.animation = 'bounce 2s infinite';
});