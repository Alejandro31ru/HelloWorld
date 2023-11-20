alert(10);
alert(20);
let info = 2007;
let infoMesage = `Год выпуска первого Iphone - ${info}`;
alert(infoMesage);
let nameCreatorJs = 'Брендан Айк';
let creatorInfo = `Имя создателя языка JavaScript - ${nameCreatorJs}`;
alert(creatorInfo);
let a = 10;
let b = 2;
let sum = a + b;
let difference = a - b;
let multiplication = a * b;
let particular = a / b;
// alert(`сумма чисел = ${sum}`);
// alert(`произведение чисел = ${multiplication}`);
// alert(`разность чисел = ${particular}`);
// alert(`частное чисел = ${difference}`);
alert(`сумма чисел = ${sum}, произведение чисел = ${multiplication}, разность чисел = ${particular}, частное чисел = ${difference}`);
let result = b ** 5;
alert(`2 в пятой степени = ${result}`);
let c = 9;
let reminder = c % b;
alert(`Остаток от деления ${c} на ${b} равент ${reminder}`);
// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);
let age = Number(prompt("Сколько вам лет?"));
alert(`Уже ${age}??? Пенсия не за горами...`);
let user = {
    имя: 'мессир Воланд',
    возраст: 35,
    онАдмин: true,
}
user.прописка = 'прописался в Аду многие тысячи лет назад';
user.возраст = 'столько не живут...';
user.онАдмин = 'О, да! Страшно представить того, кто обладает большими, чем он, полномочиями...'
// delete user.прописка;
let uinfo = prompt('Какую информацию о пользователе хотите узнать?(имя, возраст, онАдмин, прописка)');
alert(user[uinfo]);
let q10 = prompt('Как тебя зовут?');
alert(`Привет! ${q10}. Надеюсь тебя повеселила информация о пользователе :)`);
