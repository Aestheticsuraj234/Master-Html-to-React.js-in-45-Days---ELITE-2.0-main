
// sortArray.sort(); //ascending alphabetical order;


// // jab bhi koi method ek function accept kare toh usko HOF (Higher order function);

// sortArray.sort((a,b)=>a-b) //ascending
// let sortArray = [20,3,4,5,6,701,0];
// sortArray.sort((a,b)=>b-a) //descending
// console.log(sortArray)


// map , filter , reduce , forEach(assignment)


// *1. Map: create a new array populated with the results of calling a provided function on every element in the calling array;

// let array = [1,2,3 , 4 , 5  ];

//  let newArray = array.flatMap((element , index , array)=>{
//     return index* 2
// })

// console.log(newArray)



// *2. filter: Creates a new array with all elements that pass the test implemented by the provided functions

// let array = [1,2,3 , 4 , 5];

// let filterArray = array.filter((value)=>{
//     return value % 2 === 

// })


// console.log(filterArray)


// *3 reduce:Executes a reducer function on each elements of the array , resulting in a single output value;

let array = [1,2,3,4,5 , 6];

console.log(array.length)

let sum = array.reduce((acc, currVal)=>{
   return acc + currVal;
} ,0)

console.log(sum)

