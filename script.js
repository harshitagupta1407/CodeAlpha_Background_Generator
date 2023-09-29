const colorPicker = document.getElementById('colorPicker');
const generateBtn = document.getElementById('generateBtn');
const colorCodeDisplay = document.getElementById('colorCode');
const copyBtn = document.getElementById('copyBtn');


function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorCodeDisplay.innerText = randomColor;
}


function copyToClipboard() {
    const colorCode = colorCodeDisplay.innerText;
    const textArea = document.createElement('textarea');
    textArea.value = colorCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to clipboard: ' + colorCode);
}

generateBtn.addEventListener('click', generateRandomColor);
copyBtn.addEventListener('click', copyToClipboard);
