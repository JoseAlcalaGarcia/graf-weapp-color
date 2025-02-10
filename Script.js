document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorPicker");
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorBox = document.getElementById("colorBox");
    const BColor = document.getElementById("BODY");
    const h = document.getElementById("H1");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        const r = redRange.value;
        const g = greenRange.value;
        const b = blueRange.value;
        const hex = rgbToHex(r, g, b);


        hexCode.textContent = hex;
        colorPicker.value = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        BColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        h.style.color = `rgb(${r}-${g}, ${g}, ${b})`;
    }

    function updateFromInput() {
        let r = validateInput(redInput);
        let g = validateInput(greenInput);
        let b = validateInput(blueInput);

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;
        updateColor();
    }

    function updateFromColorPicker() {
        let hex = colorPicker.value;
        let rgb = hexToRgb(hex);

        redRange.value = rgb.r;
        greenRange.value = rgb.g;
        blueRange.value = rgb.b;

        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
    }

    function validateInput(input) {
        let value = parseInt(input.value);
        if (isNaN(value) || value < 0) return 0;
        if (value > 255) return 255;
        return value;
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }

    function hexToRgb(hex) {
        let bigint = parseInt(hex.slice(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateFromInput);
    greenInput.addEventListener("input", updateFromInput);
    blueInput.addEventListener("input", updateFromInput);

    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
