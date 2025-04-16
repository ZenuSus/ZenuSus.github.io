const parser = new UAParser();
const browser = parser.getBrowser();

const minVersions = {
  Chrome: 90,
  Firefox: 85,
  Safari: 14,
  Edge: 90,
  IE: false, // IE не поддерживается
};

if (
  (minVersions[browser.name] && parseInt(browser.major) < minVersions[browser.name]) ||
  (browser.name === "IE")
) {
   window.location.href='/old-browser'
}

document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Закрываем меню на мобильных устройствах
                if (navUl.classList.contains('show')) {
                    navUl.classList.remove('show');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .skill-bar');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                if (element.classList.contains('skill-bar')) {
                    const skillLevel = element.querySelector('.skill-level');
                    skillLevel.style.width = skillLevel.style.width;
                } else {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            }
        });
    };
    
    // Инициализация анимации
    window.addEventListener('load', function() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        animateOnScroll();
    });
    
    window.addEventListener('scroll', animateOnScroll);
    
  
    }
);

