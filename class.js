'use strict';

class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getters and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lasgName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.articleNumber);
// article1.printPublisher();

console.log(article1.publisher);

console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log(`삼각형`);
    }

    getArea() {
        return this.width * this.height / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea())

// 6. Class checking; instance of
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Object);
console.log(triangle.toString());