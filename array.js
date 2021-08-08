'user strict';

// Array

// 1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];

console.log(arr1);
console.log(arr2);

// 2. Index poisiton
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(value, index, array){
    console.log(value, index, array);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Add, delete, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('딸기', '복숭아');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower then pop, push
// splice: remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1, '수박', '키위');
console.log(fruits);

// combine two arrays
const fruits2 = ['멜론', '포도'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits);

// indexOf
console.log(fruits.indexOf('복숭아'));
console.log(fruits.indexOf('코코넛')); // 없을때는 -1 반환

// includes
console.log(fruits.includes('복숭아'));
console.log(fruits.includes('코코넛'));

// lastIndexOf
console.log(fruits.lastIndexOf('수박'));
fruits.push('수박');
console.log(fruits.lastIndexOf('수박'));