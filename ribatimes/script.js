document.addEventListener('DOMContentLoaded', function() {
    // Меню для мобильных устройств
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('.header .container');
    if (header) {
        header.prepend(mobileMenuButton);
        
        const mainNav = document.querySelector('.main-nav');
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
    
    // Лайк статьи
    const likeBtn = document.querySelector('.like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            if (!this.classList.contains('liked')) {
                this.classList.add('liked');
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> Нравится (125)';
            } else {
                this.classList.remove('liked');
                this.innerHTML = '<i class="far fa-thumbs-up"></i> Нравится (124)';
            }
        });
    }
    
    // Кнопка "Загрузить еще"
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.textContent = 'пошел нахуй';
            setTimeout(() => {
                // Здесь должна быть реальная загрузка новостей
                this.textContent = 'Загрузить еще';
            }, 1488);
        });
    }
    
    // Форма подписки
    const subscribeForm = document.querySelector('.subscribe-widget form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('пошел ты нахуй');
                emailInput.value = '';
            }
        });
    }
    
    // Форма комментария
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            if (textarea.value.trim()) {
                // Здесь должна быть отправка комментария на сервер
                alert('твой cumментарий не опубликован па причине пашол нахуй (код ошибки 1488)');
                textarea.value = '';
            }
        });
    }
    
    // Лайк комментария
    document.querySelectorAll('.comments-list .like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const countElement = this.querySelector('i').nextSibling;
            if (countElement) {
                let count = parseInt(countElement.textContent);
                if (this.classList.contains('liked')) {
                    this.classList.remove('liked');
                    countElement.textContent = count - 1;
                } else {
                    this.classList.add('liked');
                    countElement.textContent = count + 1;
                }
            }
        });
    });
    
    // Поделиться в соцсетях
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const sharePanel = this.nextElementSibling;
            sharePanel.style.display = sharePanel.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});