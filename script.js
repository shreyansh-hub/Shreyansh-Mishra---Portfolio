// Function to update screen size display
function updateScreenSize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Update text content to display screen size
    document.getElementById('screen-width').textContent = `Screen Width: ${screenWidth}px`;
    document.getElementById('screen-height').textContent = `Screen Height: ${screenHeight}px`;
}

// Call updateScreenSize function initially
updateScreenSize();

// Update screen size display when window is resized
window.addEventListener('resize', updateScreenSize);

