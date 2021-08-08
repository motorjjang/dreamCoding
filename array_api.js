'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple,kiwi,banana,tomato';
    const result = fruits.split(',', 2);
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(`Q3: ${array}`);
    console.log(`Q3: ${result}`);
}

// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5]
    console.log(`Q5: ${array}`);
    const result = array.slice(2);
    console.log(`Q5: ${array}`);
    console.log(`Q5: ${result}`);
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
    // student.find(function(aa, index){
    //     console.log(aa, index);
    // });

    student.find(function(a, b, c){
        console.log(a);
    });

    // const result = student.find(function(student){
    //     return student.score === 90;
    // });

    // console.log(result);
}

// Q6. make an array of enrolled students
{
    // const result = student.filter(function(student){
    //     return student.enrolled === true;
    // });
    
    const result = student.filter(function(a, b, c, d){
        return a + ', ' + b;
    })

    console.log(result);
}

{
    const a = undefined;
    const b = null;
    const c = '';
    const x = 'undefined';
    const z = undefined;

    console.log(`b: ${b} , c: ${c}`);
    console.log(`a: ${a} , z: ${z} , x: ${x}`);

    console.log(`x: ${typeof x}, z: ${typeof z}`);
}