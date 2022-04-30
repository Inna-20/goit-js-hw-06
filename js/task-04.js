let counterValue = 0;

const valueOfCounter = document.querySelector('#value');
const btnDecrementElement = document.querySelector('button[data-action="decrement"]');
const btnIncrementElement = document.querySelector('button[data-action="increment"]');

const onClickDecrement = () => {
    counterValue -= 1;
    valueOfCounter.textContent = counterValue;
};
const onClickIncrement = () => {
    counterValue += 1;
    valueOfCounter.textContent = counterValue;
};
btnDecrementElement.addEventListener('click', onClickDecrement);
btnIncrementElement.addEventListener('click', onClickIncrement);

// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.