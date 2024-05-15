const autoText = document.querySelector('.auto-text');
const cursor = document.querySelector('.cursor');

const words = ["serious", "hilarity", "chaos", "silence", "endurance"];
let wordIndex = 0;
let charIndex = 0;

function typingWord(){
    console.log(wordIndex);
    if (charIndex < words[wordIndex].length){
        autoText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typingWord, 200);
    } else{
        setTimeout(erasingWord, 2000);
    }
}

function erasingWord(){
    if (charIndex >= 0){
        autoText.textContent = words[wordIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(erasingWord, 200);
    } else{
        if (wordIndex >= words.length - 1){
            wordIndex = 0;
        } else{
            wordIndex++;
        }
        setTimeout(typingWord, 2000);
    }
}
typingWord();