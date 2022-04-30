

const widget = document.querySelector(".widget");
const widgetColorId = document.querySelector(".color");
const widgetButtonCahgeColor = document.querySelector("button");
const bodyBgColor = document.querySelector('body');


widgetButtonCahgeColor.addEventListener('click', onBtnChangeClick);

function onBtnChangeClick() {
  const onChangeBgColor = getRandomHexColor();
  bodyBgColor.style.backgroundColor = onChangeBgColor;
  widgetColorId.textContent = onChangeBgColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}