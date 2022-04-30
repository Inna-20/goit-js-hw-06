const inputText = document.querySelector('input');
const inputTextLength = inputText.getAttribute('data-length');
const inputTextLenghtNumber = Number(inputTextLength);

inputText.addEventListener("blur", onInputText);

function onInputText(event) {
    if (inputText.value.length === inputTextLenghtNumber) {
        inputText.className = "valid";
    } else {
        inputText.className = "invalid";
    };
}