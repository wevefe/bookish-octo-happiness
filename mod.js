function forceAddWine() {
    if (window.elements) {
        window.elements.wine = {
            color: "#89281D",
            behavior: ["XX", "M2", "XX"], // Физика жидкости (течет вниз и вбок)
            category: "food",
            viscosity: 20000,
            state: "liquid",
            density: 380,
        };
        console.log("Wine added successfully!");
    } else {
        setTimeout(forceAddWine, 200);
    }
}
forceAddWine();
