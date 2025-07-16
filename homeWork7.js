// Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, 
// які не містять літери «А» (великої або малої)

// Приклад виконання:

// Повинен знаходити: Wonderful, Joyful

// Не повинен знаходити: Happiness, Time, Task, Apple

const regex = /\b[^Aa\s]{6,}\b/g;

const text = "Wonderful Joyful Happiness Time Task Apple";
const newText = text.match(regex);

console.log(newText); // ["Wonderful", "Joyful"]