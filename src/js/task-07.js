const inputEl = document.querySelector('input');
const textContent = document.querySelector('#text');


inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    textContent.style.fontSize = event.currentTarget.value + 'px';
};

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль
//  span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір
// тексту.