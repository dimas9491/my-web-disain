/**
 * Vivid Visuals - Калькулятор стоимости
 * Расчет стоимости заказа на основе выбранных параметров
 */

(function() {
    'use strict';

    // Элементы формы калькулятора
    let serviceSelect;
    let quantityRange;
    let quantityDisplay;
    let urgencyCheck;
    let totalPriceEl;
    let timeEstimateEl;

    /**
     * Инициализация калькулятора
     * Получает ссылки на DOM элементы и настраивает обработчики событий
     */
    function initCalculator() {
        // Получаем элементы формы
        serviceSelect = document.getElementById('service-select');
        quantityRange = document.getElementById('quantity-range');
        quantityDisplay = document.getElementById('quantity-display');
        urgencyCheck = document.getElementById('urgency-check');
        totalPriceEl = document.getElementById('total-price');
        timeEstimateEl = document.getElementById('time-estimate');

        // Проверяем наличие всех элементов
        if (!serviceSelect || !quantityRange || !quantityDisplay || 
            !urgencyCheck || !totalPriceEl || !timeEstimateEl) {
            console.warn('Calculator elements not found');
            return;
        }

        // Добавляем обработчики событий
        serviceSelect.addEventListener('change', calculatePrice);
        quantityRange.addEventListener('input', calculatePrice);
        urgencyCheck.addEventListener('change', calculatePrice);

        // Выполняем первоначальный расчет
        calculatePrice();
    }

    /**
     * Расчет итоговой стоимости заказа
     * Учитывает базовую цену, количество, срочность и скидки
     */
    function calculatePrice() {
        // Получаем значения из формы
        const basePrice = parseInt(serviceSelect.value);
        const quantity = parseInt(quantityRange.value);
        const isUrgent = urgencyCheck.checked;

        // Базовая стоимость
        let total = basePrice * quantity;

        // Наценка за срочность (x1.5)
        if (isUrgent) {
            total = Math.round(total * 1.5);
        }

        // Скидка 15% при заказе от 5 штук
        if (quantity >= 5) {
            total = Math.round(total * 0.85);
        }

        // Форматируем и отображаем цену
        totalPriceEl.textContent = total.toLocaleString('ru-RU') + ' ₽';
        quantityDisplay.textContent = quantity + ' шт.';

        // Расчет сроков выполнения
        calculateTimeEstimate(quantity, isUrgent);
    }

    /**
     * Расчет сроков выполнения заказа
     * @param {number} quantity - Количество заказанных единиц
     * @param {boolean} isUrgent - Флаг срочности заказа
     */
    function calculateTimeEstimate(quantity, isUrgent) {
        // Получаем время выполнения для выбранной услуги
        const timePerUnitText = serviceSelect.options[serviceSelect.selectedIndex].getAttribute('data-time');

        // Определяем количество дней на единицу
        let days = 1;
        if (timePerUnitText.includes('2-3')) {
            days = 3;
        } else if (timePerUnitText.includes('1-2')) {
            days = 2;
        }

        // Рассчитываем общее количество дней
        // При срочном заказе время сокращается вдвое
        let totalDays = Math.ceil((days * quantity) / (isUrgent ? 2 : 1));
        
        // Минимум 1 день
        if (totalDays < 1) {
            totalDays = 1;
        }

        // Отображаем срок выполнения
        timeEstimateEl.textContent = isUrgent 
            ? `~${totalDays} дн. (Срочно)` 
            : `~${totalDays} дн.`;
    }

    // Инициализация при загрузке DOM
    document.addEventListener('DOMContentLoaded', () => {
        initCalculator();
    });

})();



