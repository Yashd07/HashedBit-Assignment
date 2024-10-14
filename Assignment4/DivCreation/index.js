function createDiv(width, height, text) {
    const divNew = document.createElement('div');

    divNew.style.width = width + 'px';
    divNew.style.height = height + 'px';

    divNew.textContent = text;

    const container = document.getElementById('container');

    container.appendChild(divNew);
    
}

Window.createDiv = createDiv(80,80,"My Name is YASH");