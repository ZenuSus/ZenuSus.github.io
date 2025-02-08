
// Получаем элементы модальных окон и кнопок
const socialModal = document.getElementById("socialModal");
const projectsModal = document.getElementById("projectsModal");
const infoModal = document.getElementById("infoModal");
const donateModal = document.getElementById("donateModal");

const socialBtn = document.getElementById("socialBtn");
const projectsBtn = document.getElementById("projectsBtn");
const infoBtn = document.getElementById("infoBtn");
const donateBtn = document.getElementById("donateBtn");


const closeButtons = document.getElementsByClassName("close");

// Открываем модальное окно для соц. сетей
socialBtn.onclick = function() {
    socialModal.style.display = "flex";
}

// Открываем модальное окно для проектов
projectsBtn.onclick = function() {
    projectsModal.style.display = "flex";
}

// Открываем модальное окно для информации
infoBtn.onclick = function() {
    infoModal.style.display = "flex";
}

// Открываем модальное окно для доната
donateBtn.onclick = function() {
    donateModal.style.display = "flex";
}

// Закрываем модальное окно при нажатии на крестик
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        socialModal.style.display = "none";
        projectsModal.style.display = "none";
        infoModal.style.display = "none";
        donateModal.style.display = "none";
    }
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == socialModal) {
        socialModal.style.display = "none";
    }
    if (event.target == projectsModal) {
        projectsModal.style.display = "none";
    }
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }

    if (event.target == donateModal) {
        donateModal.style.display = "none";
    }
}