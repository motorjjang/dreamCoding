'use strict';

console.log("Hello World!");


let globalName = 'global name';

{
    let name;
    name = 'motorjjang';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);


age = 4;
console.log(age);
var age;

const daysInWeek = 7;
const maxNumber = 5;
const st = "string";
// st = "edit"; ==> 상수는 새로운 값 지정이 안됨.

console.log(`daysInWeek: ${typeof daysInWeek}`);
console.log(`st: ${typeof st}`);
console.log(daysInWeek);


// let a: number = 12;
// let b: number = 1.2;

// console.log(a);

const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);


const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const big = 12341234n;
console.log(`big: ${typeof big}`);

// string
const char = 'c';
const brendanNm = 'brendan';
const greeting = 'hello' + brendanNm;

console.log(`greeting: ${greeting} type: ${typeof greeting}`);  //template literals(string)
console.log(typeof greeting);

const test = 3 < 1;
console.log(`test: ${test}, type: ${typeof test}`);

let nothing = null;
console.log(`nothing: ${nothing}, type: ${typeof nothing}`);

let x = undefined;
console.log(`x: ${x}, type: ${typeof x}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(symbol1);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`gSymbol1: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

let text = 'hello';
console.log(text.charAt(0));
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

const ellie = {name: 'ellie', age: 20};
console.log(ellie);
console.log(`name: ${typeof ellie.name}, age: ${typeof ellie.age}`);
console.log(ellie.age);

ellie.name = 'ellieTest';
ellie.age = 'age';
console.log(ellie);
console.log(`name: ${typeof ellie.name}, age: ${typeof ellie.age}`);
console.log(ellie.name);
console.log(ellie.age);
