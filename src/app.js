// default import

// import plus from "./js/calculator";
// console.log(plus(3, 2));


// import calculator from "./js/calculator"
// console.log(calculator.minus(9, 2));


// named import

// import { minus, multiply, split, plus } from "./js/calculator";
// console.log(minus(2, 4));


import * as calculator from "./js/calculator"
console.log(calculator.minus(4, 1));
import { nanoid } from 'nanoid'
console.log(nanoid(5));
