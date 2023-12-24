// Задание 1

const c = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
c.sort((a, b) => a.age - b.age);
console.log(c);

//  Задание 2

function isPositive(d) {
    return d > 0;
}
function isMale(f) {
    return f.gender === 'male'
}
function filter(arr, func) {
    const e = [];
    arr.forEach(el => {
        if (func(el)) {
            e.push(el);
        }
    });
    return e;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// Задание 3

const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Всё! Приехали...');
}, 30000);

// Задание 4

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(() => {
    console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));