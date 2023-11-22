
// задание 1

function minNums() {
    let f = prompt('введите число раз');
    let g = prompt('введите число два');
    if (Number(f) < Number(g)) {
        return console.log(`${f} меньше`);
    } else if (Number(f) === Number(g)) {
        return console.log('эти числа одинаковые');
    } else if (isNaN(f, g) || isNaN(f) || isNaN(g)) {
        return console.log('какие-то странные числа...');
    } else if (Number(f) > Number(g)) {
        return console.log(`${g} меньше`);
    } else {
        return console.log('мда...этого я не учёл...')
    }

}
minNums();


// задание 2

let n = prompt('введите число');
function checkNumbers() {
    if (n % 2 === 0) {
        console.log('Число чётное');
    } else if (n % 2 === 1) {
        console.log('Число нечётное');
    } else {
        console.log('С каких пор числа состоят из букв?');
    }
}
checkNumbers(n);


// задание 3

let y = prompt('ещё раз введите число, пжааалста :)');

const square = (y) => y ** 2;
console.log(square(y));

function squareNumbers() {
    let result = y ** 2;
    return result;
}
console.log(squareNumbers(y));


// задание 4

let userAge = prompt('Введите свой возраст');

function checkUserAge() {
    if (userAge <= 0) {
        console.log('♫♪ жииизнь ♫♪ не ♫♪ возможно ♫♪ повернуть ♫♪ назааад ♫♪');
    } else if (userAge > 0 && userAge <= 12) {
        console.log('Привет, дружок!');
    } else {
        console.log('Добро пожаловать!');
    }
}
checkUserAge(userAge);


// задание 5

function glyukozyabra() {
    let a = prompt('введите число "a"');
    let b = prompt('введите число "b"');
    if (isNaN(a) || isNaN(b) || isNaN(a, b)) {
        return console.log('Одно или оба значения не являются числом');
    } else {
        return console.log(a * b);
    }
}
glyukozyabra();


// задание 6

function cubeNumber() {
    let c = prompt('Понимаю что уже надоело, но введите число');
    if (isNaN(c)) {
        return console.log('Переданный параметр не является числом');
    } else {
        let numResult = c ** 3;
        return console.log(`${c} в кубе равняется ${numResult}`)
    }
}
cubeNumber();


// задание 7

function circlePerimeter() {
    return this.radius * 3.14 * 2;
}
function circleArea() {
    return this.radius ** 2 * 3.14;
}

let circle1 = {
    radius: 32,
    getArea: circleArea,
    getPerimeter: circlePerimeter
}
let circle2 = {
    radius: 64,
    getArea: circleArea,
    getPerimeter: circlePerimeter
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());