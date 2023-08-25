let wordsSum = 1;
let letterSum = 0;
let sentences = 0;
function counter() {
    let input = document.getElementById('btnInput').value;
    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) === ' ') {
            wordsSum++;
        }
        else if (input.charAt(i) === '.' || input.charAt(i) === '?' || input.charAt(i) === '!') {
            sentences++;
        }
        else { letterSum++ }
    };
    alert(`words: ${wordsSum}, letters: ${letterSum}, sentences: ${sentences}`);
}
function changeBg(){
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}