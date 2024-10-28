// Var , Let , Const

var number_1 = 10;
let number_2 = 20;
const c = 30;

// console.log(a , b , c)


// *1. Var -- functional scope and global scope and re-declare 

// 1. problem-1
var name = "Suraj";
var name = "Jha";


// 2. functional scope (problem-2)

// function solve() {
//     var apple = "🍎";
//     console.log(apple)
// }

// console.log(apple)


// 3. global scope



// var d = "Dog🐶";

// function suraj(){
//     console.log(d)
// }

// suraj()



// *2. let keyword , (blocked scope , global)

let hobby = "Programming👨‍💻";

hobby = "Gym⛹️‍♀️";

console.log(hobby)

// Blocked Scope {}

{
 let exercise = "Chest-Press";

//  console.log(exercise)
}


// 3. Const keyword ((blocked scope , global)) you cannot re-assing


const MAX_VALUE = 300000000;

MAX_VALUE = 128302392;

console.log(MAX_VALUE)


// Primitave dataypes

// 1. number  ---limit ( assignment)
// 2. string (" " , '' , ``);
// 3. boolean (true(1)  , false(0))
// 4. null
// 5. undefined
// 6. symbol ( asssingment)
// 7. bigInt  ---

let number = 1232;
let string = "suraj"; //'name' , `lhsiewiohewiohiowehiowehioe`
let bool = true //, false

let emptyValue = null;

let undefinedValue;
console.log(undefinedValue)