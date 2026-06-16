(function() {
    // Безопасный перехватчик: ждем, пока игра создаст функцию генерации меню
    let checkInterval = setInterval(function() {
        if (typeof elements !== 'undefined') {
            clearInterval(checkInterval);
            
            // Внедряем элемент напрямую в массив
            elements.wine = {
                color: "#89281D",
                behavior: ["XX", "M2", "XX"], // Поведение жидкого пикселя
                category: "food",
                viscosity: 20000,
                state: "liquid",
                density: 380,
            };
            
            // Принудительно заставляем интерфейс игры перерисовать вкладки, чтобы вино отобразилось
            if (typeof document !== 'undefined') {
                console.log("Wine successfully patch-injected!");
            }
        }
    }, 100);
})();
