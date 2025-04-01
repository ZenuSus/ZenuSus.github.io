
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

document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader");
    const content = document.getElementById("content");
    const apiDataElement = document.getElementById("apiData");
  
    // Показываем загрузчик
    loader.style.display = "block";
  
    // 1. Ждём загрузки всех изображений
    const images = document.querySelectorAll("img");
    let imagesLoaded = 0;
  
    images.forEach(img => {
      if (img.complete) {
        // Если изображение уже загружено (кеш)
        imagesLoaded++;
      } else {
        // Если загружается
        img.addEventListener("load", () => {
          imagesLoaded++;
          checkAllLoaded();
        });
        img.addEventListener("error", () => {
          imagesLoaded++; // Учитываем даже если ошибка
          checkAllLoaded();
        });
      }
    });
  
    // 2. Загружаем данные с API (пример с JSONPlaceholder)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        apiDataElement.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
      })
      .catch(error => {
        apiDataElement.innerHTML = "<p>Ошибка загрузки данных</p>";
      })
      .finally(() => {
        checkAllLoaded();
      });
  
    // Проверяем, всё ли загрузилось
    function checkAllLoaded() {
      const totalImages = images.length;
      const apiLoaded = apiDataElement.innerHTML !== "";
  
      if (imagesLoaded === totalImages && apiLoaded) {
        loader.style.display = "none";
        content.classList.add("loaded");
      }
    }
  
    // Если нет изображений и API-запросов, просто скрываем загрузчик
    if (images.length === 0 && !apiDataElement) {
      setTimeout(() => {
        loader.style.display = "none";
        content.classList.add("loaded");
      }, 500);
    }
  });