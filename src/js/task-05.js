const nameInput = document.querySelector('[id="name-input"]');
const nameOutput = document.querySelector('[id="name-output"]');

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (nameInput.value === ``) {
        return nameOutput.textContent = `Anonymous`;
    } else {
        return nameOutput.textContent = event.currentTarget.value;
    }
};

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення
// в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".