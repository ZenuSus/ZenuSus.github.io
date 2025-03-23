// Пример простого JavaScript для интерактивности
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`Вы кликнули на раздел: ${section.querySelector('h2').innerText}`);
        });
    });
});