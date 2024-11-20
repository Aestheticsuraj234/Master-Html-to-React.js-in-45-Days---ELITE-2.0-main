// Function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Event listener for color buttons
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        changeBackgroundColor(color);
    });
});

// Event listener for the custom color input
document.getElementById('applyColor').addEventListener('click', () => {
    const colorInput = document.getElementById('colorInput').value;
    if (colorInput) {
        changeBackgroundColor(colorInput);
    }
});

// Event listener for the reset button
document.getElementById('resetColor').addEventListener('click', () => {
    changeBackgroundColor('#f0f0f0');
});
