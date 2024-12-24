const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString);
console.log(balance.toFixed(2));

const otherNumber = 23.88973753
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //for absolute value
console.log(Math.round(3.34)); // for round off
console.log(Math.ceil(4.2)); // for ceiling value/upper value
console.log(Math.floor(4.9)); // for floor value
console.log(Math.min(4,3,6)); // for minimum value
console.log(Math.max(10,9,4)); // for maximum value

console.log(Math.random()); 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));