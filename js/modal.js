/**
 * Vivid Visuals - Модальное окно заказа
 * Управление открытием и закрытием модального окна формы заказа
 */

(function() {
    'use strict';

    let modal;

    /**
     * Инициализация модального окна
     * Получает ссылку на элемент модального окна
     */
    function initModal() {
        modal = document.getElementById('order-modal');

        if (!modal) {
            console.warn('Modal element not found');
            return;
        }
    }

    /**
     * Открытие модального окна
     * Показывает модальное окно и блокирует прокрутку страницы
     */
    function openModal() {
        if (!modal) {
            initModal();
        }

        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
        }
    }

    /**
     * Закрытие модального окна
     * Скрывает модальное окно и восстанавливает прокрутку страницы
     */
    function closeModal() {
        if (!modal) {
            initModal();
        }

        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
        }
    }

    // Делаем функции доступными глобально для использования в HTML
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Инициализация при загрузке DOM
    document.addEventListener('DOMContentLoaded', () => {
        initModal();
    });

})();



