// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];
for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] === 10) break;
    console.log(numbers[a]);
}

// Задание 2

const index = numbers.indexOf(4);
console.log(index);

// Задание 3

const massive3 = [1, 3, 5, 10, 20];
const b = massive3.join(" ");
console.log(b);

// Задание 4

let c = [];
for (let d = 0; d < 3; d++) {
    let innerC = [];
    for (let e = 0; e < 3; e++) {
        innerC.push(1);
    }
    c.push(innerC);
}
console.log(c);

// Задание 5

const f = [1, 1, 1];
console.log(f);
f.push(2, 2, 2);
console.log(f);

// Задание 6

let g = [9, 8, 7, 'a', 6, 5];
g = g.sort();
g.pop();
console.log(g);

// Задание 7

const h = [9, 8, 7, 6, 5];
let i = Number(prompt('Отгадай число'));
if (h.includes(i)) {
    alert('Отгадал!');
} else {
    alert('Увы и ах...не угадал...');
}

// Задание 8

let j = 'abcdef';
const reverceJ = j.split('').reverse().join('');
console.log(reverceJ);

// Задание 9

const k = [[1, 2, 3], [4, 5, 6]];
const glueK = k.flat();
console.log(glueK);

// Задание 10

const l = [2, 4, 6, 8, 10, 9, 7, 5, 3, 1];
for (let m = 0; m < l.length - 1; m++) {
    console.log(l[m] + l[m + 1]);
}

// Задание 11

const n = [3, 2, 1, 0, -1, -2, -3];
function nSquare() {
    return console.log(n.map((o) => o ** 2));
}
nSquare(n);

// Задача 12

const p = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function getLengthWords() {
    return console.log(p.map((q) => q.length));
}
getLengthWords(p);

// Задача 13

function filterPositive(r) {
    let s = [];
    for (let t = 0; t < r.length; t++) {
        if (r[t] < 0) {
            s.push(r[t]);
        }
    }
    return console.log(s);
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);
