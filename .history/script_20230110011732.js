'use strict';


// Select elements
const questionTextArea = document.getElementById('question');
const choicesTextArea = document.getElementById('choices');
const choiceContainer = document.q








choicesTextArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const choice = document.createElement('span');
        choice.classList.add('choice');
        choice.innerText = choicesTextArea.value;
    }
})