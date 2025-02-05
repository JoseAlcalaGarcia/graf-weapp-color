document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");
    const cuerpo = document.getElementById("B");

    function updateColor() {
        const r = Math.min(255, Math.max(0, red.value));
        const g = Math.min(255, Math.max(0, green.value));
        const b = Math.min(255, Math.max(0, blue.value));
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + +b).toString(16).slice(1).toUpperCase()}`;
        colorBox.style.backgroundColor = rgbColor;
        cuerpo.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        red.value = redInput.value;
        green.value = greenInput.value;
        blue.value = blueInput.value;
        updateColor();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);
    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);

    updateColor();
});