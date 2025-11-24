/**
 * Vivid Visuals - Навигация
 * Управление мобильным меню и эффектами навигационной панели
 */

(function() {
    'use strict';

    /**
     * Инициализация мобильного меню
     * Переключает видимость меню при клике на кнопку
     */
    function initMobileMenu() {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (!mobileBtn || !mobileMenu) {
            console.warn('Mobile menu elements not found');
            return;
        }

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    /**
     * Эффект изменения навигационной панели при скролле
     * Уменьшает padding при прокрутке страницы вниз
     */
    function initNavbarScrollEffect() {
        const navbar = document.getElementById('navbar');

        if (!navbar) {
            console.warn('Navbar element not found');
            return;
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
            }
        });
    }

    // Инициализация всех функций навигации при загрузке DOM
    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initNavbarScrollEffect();
    });

})();



