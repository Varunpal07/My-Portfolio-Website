const textElement = document.getElementById('typing-text');
const myText = "Hello, I am Varun Pal";
let i = 0;

function showText() {
    if (i < myText.length) {
        textElement.innerHTML += myText.charAt(i);
        i++;
        setTimeout(showText, 50);
    }
}

window.onload = function () {
    showText();
};