document.addEventListener('DOMContentLoaded', function() {

    // Бургер-меню (заглушка для мобильной навигации)
    const burger = document.getElementById('burger');
    if (burger) {
        burger.addEventListener('click', () => {
            alert('Мобильное меню (при необходимости добавить навигацию)');
        });
    }

    // Аккордеон с ценами на главной
    const accordionHeaders = document.querySelectorAll('.accordion__header');
    accordionHeaders.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion__item').forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    console.log('Юрпомощь 42 — сайт готов.');
});
