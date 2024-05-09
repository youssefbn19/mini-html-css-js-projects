const color = document.querySelector('.color-container .color');
const hexColor = document.querySelector('.color-hex');
const generateBtn = document.querySelector('.btn-generator');

generateBtn.addEventListener('click', () => {
    const hexLetters = "0123456789ABCDEF";
    let hexColorCode = "#";
    for (let index = 0; index < 6; index++) {
        const randomHexLetter = Math.floor(Math.random() * 16);
        hexColorCode += hexLetters[randomHexLetter];
    }
    color.style.backgroundColor = hexColorCode;
    hexColor.textContent = hexColorCode;
})