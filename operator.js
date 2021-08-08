let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);

const postIncrement = counter++;
console.log(postIncrement);
console.log(counter);

const value1 = false;
const value2 = 4 < 2;

function check(){
    for (let i = 0; i < 10; i++) {
        console.log('hello');
    }
    return true;
}

console.log(`or: ${value1 || value2 || check()}`);

console.log(!value2);

const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, with type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 == ellie3);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

console.log(name === 'ellie' ? 'yes' : 'no');