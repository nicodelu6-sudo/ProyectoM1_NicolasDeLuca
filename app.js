
// Elementos HTML//

const paletteSize = document.getElementById("palette-size");
const colorFormat = document.getElementById("color-format");
const generateButton = document.getElementById("generate-button");
const paletteContainer = document.getElementById("palette-container");
const feedback = document.getElementById("feedback");

//Convertir HSL a HEX//

function hslToHex(h, s, l) {
    s = s / 100;
    l = l / 100;

    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);

    const f = (n) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const red = Math.round(255 * f(0));
    const green = Math.round(255 * f(8));
    const blue = Math.round(255 * f(4));

    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    return `#${redHex}${greenHex}${blueHex}`.toUpperCase();

}

//Color aleatorio//

function generateRandomColor() {

    
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);

    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    const hex = hslToHex(
        hue,
        saturation,
        lightness
    );

    return {
        hsl: hsl,
        hex: hex
    };
}

//Generar paleta de colores//

function generatePalette() {

    const amount = Number(paletteSize.value);

    
    paletteContainer.innerHTML = "";

    for (let i = 0; i < amount; i++) {

        const color = generateRandomColor();

        const colorCard = document.createElement("div");

        colorCard.classList.add("color-card");

        colorCard.style.backgroundColor = color.hsl;

        const colorCode = document.createElement("span");

        colorCode.classList.add("color-code");

        if (colorFormat.value === "hex") {
            colorCode.textContent = color.hex;
        } else {           
            colorCode.textContent = color.hsl;
        }

        colorCard.appendChild(colorCode);

        paletteContainer.appendChild(colorCard);
    }

    feedback.textContent =
        `Paleta de ${amount} colores generada`;

}

//BOTON//

generateButton.addEventListener("click", generatePalette);