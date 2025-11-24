/**
 * Vivid Visuals - Анимации при скролле
 * Управление анимацией появления элементов при прокрутке страницы
 */

(function() {
    'use strict';

    /**
     * Анимация появления элементов при скролле
     * Добавляет класс 'active' к элементам с классом 'reveal',
     * когда они попадают в область видимости
     */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');

        if (revealElements.length === 0) {
            return;
        }

        /**
         * Проверяет видимость элементов и активирует анимацию
         */
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150; // Расстояние от верха экрана для активации

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;

                // Если элемент виден в области экрана, добавляем класс 'active'
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        // Обработчик скролла
        window.addEventListener('scroll', revealOnScroll);

        // Запускаем проверку сразу при загрузке страницы
        revealOnScroll();
    }

    // Инициализация при загрузке DOM
    document.addEventListener('DOMContentLoaded', () => {
        initScrollReveal();
    });

})();



