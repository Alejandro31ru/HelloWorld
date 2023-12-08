// Задание 1

let userAnswer = prompt('Введите любое слово');
alert(userAnswer.toUpperCase());

// Задание 2

function filterStartWords(t = [], u) {
    let w = [];
    for (let v = 0; v < t.length; v++) {
        if (t[v].toLowerCase().startsWith(u.toLowerCase())) {
            w.push(t[v]);
        }
    }
    console.log(w);
}
filterStartWords(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
filterStartWords(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
filterStartWords(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задание 3

let a = 32.58884;
console.log(`Округление до меньшего целого числа ${Math.floor(a)}`);
console.log(`Округление до большего целого числа ${Math.ceil(a)}`);
console.log(`Округление до ближайшего целого числа ${Math.round(a)}`);


// Задание 4

const e = [52, 53, 49, 77, 21, 32];
console.log(`${Math.min(...e)} наименьшее из этих чисел`);
console.log(`${Math.max(...e)} наибольшее из этих чисел`);


// Задание 5

function randomNumbers() {
    let i = Math.ceil(Math.random() * 10);
    console.log(i);
}
randomNumbers();

// Задание 6

function task6() {
    let j = [];
    let k = prompt('Введите целое число');
    for (let m = 0; m < Math.floor(k / 2); m++) {
        let l = Math.ceil(Math.random() * k);
        j.push(l)
    }
    console.log(j);
}
task6();

// Задание 7

function task7() {
    let n = [];
    let o = Number(prompt('Укажите начало диапазона'));
    let p = Number(prompt('Укажите окончание диапазона'));
    for (let q = o; q <= p; q++) {
        n.push(q);
    }
    console.log(n[Math.floor(Math.random() * n.length)]);
}
task7();

// Задание 8

let currentDate = new Date();
console.log(currentDate);


// Задание 9

let day73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + day73;
let daysAfter73 = new Date(searchDate);
console.log(daysAfter73);


//  Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let fullDate = 'Дата: ' + currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear() + ' - это ' + days[currentDate.getDay()];
let dateTime = 'Время: ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
console.log(fullDate);
console.log(dateTime);