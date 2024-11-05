// let arr = [1 , "Suraj" , true , {age:20} , null , undefined  ]

// let numbers = [1,2,3,4 , [12 , 13]]; 

// // Mutable-we can value in runtime

// console.log(numbers[4][0])


// *1. Push(); - add one or more elements to the end of an array and returns the new length of the array

let number = [1,2,3,4,5];

let val = number.push(6);
// console
// programm mai kahi use kro

console.log(val)


// *2. pop : Removes the last element from an array and return that element;
let array = [1,2,3,4];

let poppedElement = array.pop();

console.log(poppedElement , array)

// *3. toString: Returns a string representing the specified array and its elements;

let stringArray = [1,2,3];

let arrayStringReturn = stringArray.toString();

console.log(arrayStringReturn)

// *4. join : Joins all elemens of an array into a string;

let joinArray = [1,2,3];

let joinedArrayReturn = joinArray.join("@");

console.log(joinedArrayReturn)


// *5 shift: Removes the first elements from an array and returns that element;

let shiftArray = [1,2,3,4];

let shiftedArrayReturn = shiftArray.shift();

console.log(shiftedArrayReturn)

// *6. unshift: Adds one or more elements to the beginning of an array and return the new length of the array;

let unshiftArray = [1,2,3,4];

let unshiftArrayReturn = unshiftArray.unshift(0,9,12);

console.log(unshiftArrayReturn , unshiftArray);

// *7. slice : Return a "shallow copy"(assingment) of a portion of an array into a new array object selected from start to end;

let sliceArray = ["tomato" , "potato" , "oninon" , "carrot" , "Cabbage"];

let result = sliceArray.slice(1 , 5)

console.log(result , sliceArray)


// *8 Splice(): (delete , add , replace(delete + add))
// 1. Deleting

let cars = ["BMW" , "BENZ" , "AUDI" , "Toyota" , "Honda"];

let resultC = cars.splice(0 , 4)

console.log(cars)


// b. Adding elements;

let fruits = ["banana" , "orange" , "Apple" , "Mango"];

let fruitsRes = fruits.splice(2 , 0 , "Lemon" ,"Kiwi" , "Pineapple")

console.log(fruits)


// c. replacing elements;

let colors = ["Red" , "Green" , "Blue" , "Yellow" , "Pink"];

let colorsRes = colors.splice(0 , 3 , "white" , "black" , "indigo")


console.log(colors)



// *9 reverse : Reverses the elements of an array in place;

// let reverseArray = [12,13,14];

// reverseArray.reverse();

// console.log(reverseArray)

// *sort(): 