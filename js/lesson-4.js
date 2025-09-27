// Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
const boby = document.querySelector('body');
// console.log(boby);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
// console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]');
// console.log(dataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic
// і виведи його в консоль;
const firstElDat = dataTopic[0];
// console.log(firstElDat);
// console.log(dataTopic[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic
// і виведи його в консоль;

const lastElmDat = dataTopic[dataTopic.length - 1];
// console.log(lastElmDat.textContent);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleH1 = document.querySelector('#title');
// console.log(titleH1.nextElementSibling);
// console.log(titleH1.textContent);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titleH3 = document.querySelectorAll('h3');
// 1) Вивести всі тексти h3
titleH3.forEach(h3 => console.log(h3.textContent));
// 2) Масив текстів
const text = [...titleH3].map(h3 => h3.textContent.trim());

// console.log(text);

// 9 - для кожного елмента h3 додай class="active",
// який змінить колір заголовка на червоний колір
titleH3.forEach(h3 => h3.classList.add('active'));
titleH3.forEach(h3 => {
  h3.style.color = 'red';
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation"
// і виведи його в консоль;
const navigation = document.querySelector("li[data-topic='navigation']");
console.log(navigation);

// 11 - додай для знайденого елемента data-topic="navigation"
// атрибут style і зроби його backgroundColor жовтим
navigation.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation"
// знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textP = navigation.querySelector('p');
textP.textContent = 'Я змінив тут текст!';
console.log(textP);

// 13 - створи const currentTopic = "manipulation";
// після цього знайди елемент у якогоо атрибут data-topic
//  має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = 'manipulation';
const element = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(element.textContent);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
element.style.backgroundColor = 'blue';
// element.style.backgroundColor = 'lightblue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completed = document.querySelector('.completed');
console.log(completed);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completed.closest('li').remove();

// 17 - після заголовка h1 (перед списком)
// додай новий елемент p і задай йому наступний текст:
// "Об'єктна модель документа (Document Object Model)"

const h1 = document.querySelector('h1');
const texP = document.querySelector('p');
texP.textContent = "Об'єктна модель документа (Document Object Model)";
h1.insertAdjacentElement('afterend', texP);

// 18 - додай новий елемент списку у кінець списка,
//  його заголовок це - "Властивість innerHTML"
//  а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з
//  тегами і дозволити браузеру зробити всю важку роботу". тобто,
//  потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newlist = document.querySelector('.list');
// const li = document.createElement('li');
// const newH3 = document.createElement('h3');
// newH3.textContent = 'Властивість innerHTML';
// const newP = document.createElement('p');
// newP.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// li.appendChild(newH3);
// li.appendChild(newP);
// list.appendChild(li);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

list.insertAdjacentHTML(
  'beforeend',
  `
    <li>
      <h3>Властивість innerHTML</h3>
      <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево -
        це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
      </p>
    </li>
  `
);

// 20 - очисти список
list.innerHTML = '';

// // Створіть контейнер div (з класом number-container) в HTML-документі
// // та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// // числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// // Парні числа повинні мати зелений фон (додати клас even),
// // Непарні числа - жовтий фон (додати клас odd).

// // Функція для випадкового числа від 1 до 100
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// // Масив для збереження всіх елементів
// const elements = [];

// for (let i = 0; i < 100; i++) {
//   const el = document.createElement('div');
//   el.classList.add('number');

//   const num = randomNumber();
//   el.textContent = num;

//   // Додаємо клас в залежності від парності
//   if (num % 2 === 0) {
//     el.classList.add('even'); // зелений фон
//   } else {
//     el.classList.add('odd'); // жовтий фон
//   }

//   elements.push(el);
// }

// // Додаємо все у контейнер за один раз
// const container = document.querySelector('.number-container');
// container.append(...elements);

// console.log(container);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
