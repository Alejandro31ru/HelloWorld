let password = 'parol';
let askPass = prompt('Введите пароль. Подсказка: начинается на "p"(пи), заканчивается на "l"(эль), а между ними "aro".');
if (askPass === password) {
    console.log('угадал')
} else {
    console.log('а вот и нет')
}

let c = prompt('введите любое число');
if (c >= 0 && c <= 10) {
    console.log('есть попадание!')
} else {
    console.log('мимо!')
}

let d = prompt('введите число d');
let e = prompt('введите число e');
if (d > 100 || e > 100) {
    console.log('верно')
} else {
    console.log('неверно')
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let montNumber = prompt('введите порядковый номер месяца');
switch (montNumber) {
    case 1:
        console.log('От Новогодних праздников отходим зимой')
        break;
    case 2:
        console.log('Спрос на мужские носки и пену для бритья резко повышается зимой')
        break;
    case 3:
        console.log('Скупаем цветы и поздравляем женщин весной')
        break;
    case 4:
        console.log('День смеха празднуем весной')
        break;
    case 5:
        console.log('Праздник мира и труда отмечаем в мае, весной')
        break;
    case 6:
        console.log('День защиты детей отмечаем ЛЕТОм')
        break;
    case 7:
        console.log('День металлурга в России отмечается летом')
        break;
    case 8:
        console.log('Военнослужищие ВДВ купаются в фонтанах летом')
        break;
    case 9:
        console.log('День знаний отмечаем осенью')
        break;
    case 10:
        console.log('День учителя отмечаем осень')
        break;
    case 11:
        console.log('День рождения Деда Мороза празднуем осенью P.S. ...я сам офигел...')
        break;
    case 12:
        console.log('в последний день первого ЗИМНЕГО месяца готовим салаты на "следующий год"')
        break;

    default:
        console.log('Это из какого календаря? Майя чтоли?')
        break;
}