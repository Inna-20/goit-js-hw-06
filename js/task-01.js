// Задание 1
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

const category = document.querySelector('#categories');

const categoryEl = category.children;
console.log(`Number of categories:`, categoryEl.length);

const elements = category.querySelectorAll('.item')
elements.forEach((title) => {
    console.log(`Category:`, title.firstElementChild.textContent);
    console.log(`Elements:`, title.lastElementChild.childElementCount);
});

