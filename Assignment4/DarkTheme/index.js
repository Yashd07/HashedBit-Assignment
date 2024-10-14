function swapTheme() {
    const app = document.getElementById('app');
    
    
    if (app.style.backgroundColor === 'white') {
        app.style.backgroundColor = 'black'; 
        app.style.color = 'white';          
    } else {
        app.style.backgroundColor = 'white'; 
        app.style.color = 'black';           
    }
}

function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');
    
    // Set the width and height, appending "px"
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    
    // Set the text content of the div
    newDiv.textContent = text;
    
    // Optionally, you can add some styles for better visibility
    newDiv.style.border = '1px solid black'; // Add a border for visibility
    newDiv.style.margin = '5px';             // Add some margin
    newDiv.style.display = 'inline-block';    // Keep divs inline
    
    // Append the new div to the #container
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}

// Do not change this code
window.createDiv =createDiv(100, 50, 'Hello World!');

