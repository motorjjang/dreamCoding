'use strict';

function printHello(){
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(`value: ${message}, type: ${typeof message}`);
}

log('Hello~~~');
log(1234);


function changeName(obj) {
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
console.log(ellie.name);

changeName(ellie);
console.log(ellie.name);

console.log(`${typeof ellie.name}`);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = 'unkonwn';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi~');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');
console.log(printAll.length);

// 5. Local scope
let globalMessage = 'global'
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
// console.log(message);

// 7. early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


const print = function (){
    console.log('print');
};
console.log(print);
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('Yes~');
};

const printNo = function () {
    console.log('No~');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


function randomQuiz2(answer) {
    if (answer === 'love you') {
        printYes2();
    } else {
        printNo2();
    }
}

function printYes2() {
    console.log('Yes~');
};

function printNo2() {
    console.log('No~');
};

randomQuiz2('wrong');
randomQuiz2('love you');

// Arrow Function
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');

const add = (a, b) => a + b;
const add2 = function (a, b) {
    return a + b;
}

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Fun Quiz Time
// function calculate(command, a, b)
// command : add, subtract, divide, multiply, remainder

const cal = function calculate(command, a, b) {
    if (command === 'add'){
        return a + b;
    } else if (command === 'subtract') {
        return a - b;
    } else if (command === 'divide') {
        return a / b;
    } else if (command === 'multiply') {
        return a * b;
    } else if (command === 'remainder') {
        return a % b;
    }
}

console.log(cal('add', 1, 2));
console.log(cal('subtract', 1, 2));
console.log(cal('multiply', 1, 2));
console.log(cal('divide', 1, 2));
console.log(cal('remainder', 1, 2));