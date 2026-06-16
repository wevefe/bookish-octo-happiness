// Функция безопасной интеграции мода
function injectWineMod() {
    // Проверяем, созданы ли уже базовые структуры движка Sandboxels
    if (typeof elements !== 'undefined' && typeof behaviors !== 'undefined') {
        
        elements.wine = {
            color: "#89281D",
            behavior: behaviors.LIQUID,
            category: "food",
            viscosity: 20000,
            state: "liquid",
            density: 380,
        };
        
        console.log("Мод на вино успешно загружен на neal.fun!");
    } else {
        // Если игра еще загружается, делаем паузу в 100мс и пробуем снова
        setTimeout(injectWineMod, 100);
    }
}

// Запускаем проверку
injectWineMod();
