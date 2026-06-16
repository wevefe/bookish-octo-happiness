// Ждем, пока Sandboxels полностью загрузит все свои внутренние скрипты
window.addEventListener('load', function() {
    // Проверяем, существуют ли базовые объекты игры
    if (typeof elements !== 'undefined' && typeof behaviors !== 'undefined') {
        
        elements.wine = {
            color: "#89281D",
            behavior: behaviors.LIQUID,
            category: "food",
            viscosity: 20000,
            state: "liquid",
            density: 380,
        };
        
        console.log("Мод на вино успешно активирован!");
    } else {
        console.error("Ошибка: База данных Sandboxels еще не готова.");
    }
});
