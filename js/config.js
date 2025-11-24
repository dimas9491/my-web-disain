/**
 * Vivid Visuals - Конфигурация Tailwind CSS
 * Настройка кастомных цветов, шрифтов и анимаций
 */

// Конфигурация Tailwind CSS с кастомными настройками
tailwind.config = {
    theme: {
        extend: {
            // Кастомные шрифты
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            
            // Кастомная цветовая палитра
            colors: {
                neon: {
                    purple: '#8b5cf6',
                    pink: '#ec4899',
                    blue: '#3b82f6',
                    cyan: '#06b6d4'
                },
                dark: {
                    bg: '#0f172a',
                    card: '#1e293b'
                }
            },
            
            // Кастомные анимации
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            
            // Кейфреймы для анимаций
            keyframes: {
                // Анимация blob-эффекта (плавающие круги на фоне)
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                // Анимация плавания элементов
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                // Анимация бегущей строки
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        }
    }
}



