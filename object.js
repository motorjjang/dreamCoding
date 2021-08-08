'use strict';

const ellie = {name: 'ellie', age: 20};

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

print(ellie);
ellie.hasJob = true;
console.log(ellie.hasJob);
console.log(ellie);
console.log(typeof ellie);

delete ellie.hasJob;
console.log(ellie);

// 2. Computed properties
console.log(ellie.name);
console.log(ellie['name']);
console.log(ellie.age);
console.log(ellie['age']);
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) {
    return {
        name
        , age
    };
}

// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const person5 = new Person('ellie', 20);
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
console.log(ellie);
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
const user = {name: 'ellie', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);
user.name = 'ellie';
console.log(user3);
console.log(user);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
