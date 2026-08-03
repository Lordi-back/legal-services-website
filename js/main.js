document.addEventListener('DOMContentLoaded', function() {

    // Бургер-меню (заглушка)
    const burger = document.getElementById('burger');
    if (burger) {
        burger.addEventListener('click', () => alert('Меню (добавить мобильную навигацию)'));
    }

    // Аккордеон с ценами
    const accordionHeaders = document.querySelectorAll('.accordion__header');
    accordionHeaders.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            // Закрыть все
            document.querySelectorAll('.accordion__item').forEach(el => el.classList.remove('active'));
            // Открыть текущий, если был закрыт
            if (!isActive) item.classList.add('active');
        });
    });

    // Модальное окно "Заказать звонок"
    const modal = document.getElementById('callbackModal');
    const openBtn = document.getElementById('callbackBtn');
    const closeBtn = document.getElementById('modalClose');
    if (openBtn && modal) {
        openBtn.addEventListener('click', () => modal.classList.add('active'));
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    }
    // Кнопки "Записаться на бесплатную консультацию" тоже открывают модалку
    document.querySelectorAll('.accordion__body .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) modal.classList.add('active');
        });
    });
    document.querySelectorAll('.btn--accent[href="#"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) modal.classList.add('active');
        });
    });

    // Отправка формы (заглушка)
    const form = document.getElementById('callbackForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо! Мы перезвоним вам в ближайшее время.');
            modal.classList.remove('active');
            form.reset();
        });
    }

    console.log('Юрпомощь 42 — сайт готов к работе.');
});
