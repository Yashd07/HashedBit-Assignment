const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeBtn = document.getElementById('colorchange');
const fontSizeSlider = document.getElementById('fontsize');
const italicBtn = document.getElementById('italic');
const underlineBtn = document.getElementById('underline');
const boldBtn = document.getElementById('bold');
const fontList = document.getElementById('list');
const getStyleBtn = document.getElementById('getstyle');
const cssPropsDisplay = document.getElementById('css-props');


colorChangeBtn.addEventListener('click', () => {
    const newColor = colorBox.value;
    textContainer.style.color = newColor;
});

fontSizeSlider.addEventListener('input', () => {
    const newSize = fontSizeSlider.value + 'px';
    textContainer.style.fontSize = newSize;
});

italicBtn.addEventListener('click', () => {
    if (textContainer.style.fontStyle === 'italic') {
        textContainer.style.fontStyle = 'normal';
    } else {
        textContainer.style.fontStyle = 'italic';
    }
});

underlineBtn.addEventListener('click', () => {
    if (textContainer.style.textDecoration === 'underline') {
        textContainer.style.textDecoration = 'none';
    } else {
        textContainer.style.textDecoration = 'underline';
    }
});

boldBtn.addEventListener('click', () => {
    if (textContainer.style.fontWeight === 'bold') {
        textContainer.style.fontWeight = 'normal';
    } else {
        textContainer.style.fontWeight = 'bold';
    }
});

fontList.addEventListener('change', () => {
    const selectedFont = fontList.value;
    textContainer.style.fontFamily = selectedFont;
});

getStyleBtn.addEventListener('click', () => {
    const color = textContainer.style.color || 'initial';
    const fontSize = textContainer.style.fontSize || 'initial';
    const fontStyle = textContainer.style.fontStyle || 'normal';
    const textDecoration = textContainer.style.textDecoration || 'none';
    const fontWeight = textContainer.style.fontWeight || 'normal';
    const fontFamily = textContainer.style.fontFamily || 'initial';

    cssPropsDisplay.textContent = `
        color: ${color}; 
        font-size: ${fontSize}; 
        font-style: ${fontStyle}; 
        text-decoration: ${textDecoration}; 
        font-weight: ${fontWeight}; 
        font-family: ${fontFamily};
    `;
});