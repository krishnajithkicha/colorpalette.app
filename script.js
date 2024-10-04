// Generate random HEX color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set random colors to the palette
function generatePalette() {
    for (let i = 1; i <= 5; i++) {
        const color = getRandomHexColor();
        document.getElementById(`color${i}`).style.backgroundColor = color;
        document.getElementById(`hex${i}`).textContent = color;
    }
}

// Event listener for button
document.getElementById('generateBtn').addEventListener('click', generatePalette);

// Generate initial palette on page load
window.onload = generatePalette;
