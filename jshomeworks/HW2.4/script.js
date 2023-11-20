let i;
for (i = 0; i < 2; i++) {
    console.log('Привет')
}

let a;
for (a = 1; a <= 5; a++) {
    console.log(a)
}

let b;
for (b = 7; b <= 22; b++) {
    console.log(b)
}

let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}
// let obj = { 'Коля': 200, 'Вася': 300, 'Петя': 400 } //Однострочный вариант написания
for (c in obj) {
    console.log(`${c} — зарплата ${obj[c]} долларов.`);
}

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n); // Почему в консоли выводится число 31.25?
console.log(num);

let d = 2;
for (let e = d; e <= 31; e += 7) {
    console.log(`Сегодня пятница, ${e}-е число. Необходимо подготовить отчет.`)
}