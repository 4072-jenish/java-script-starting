let userInput = document.getElementById('userInput');
let wordTotal = document.getElementById('wordTotal');
let charTotal = document.getElementById('charTotal');

userInput.addEventListener('input', function() {
    let text = userInput.value.trim();
    if (text === "") {
        wordTotal.textContent = 0;
        charTotal.textContent = 0;
    } else {
        let words = text.match(/\b\w+\b/g);
        wordTotal.textContent = words ? words.length : 0;
        charTotal.textContent = text.length;
    }
});

function resetText() {
    userInput.value = "";
    wordTotal.textContent = 0;
    charTotal.textContent = 0;
}