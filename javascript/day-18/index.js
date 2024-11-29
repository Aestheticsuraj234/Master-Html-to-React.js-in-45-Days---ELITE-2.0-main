// * Rest and Spread Operators (...)

//*Rest operator:- Collects arguments into an array or object;

function sum(...nums){
    return nums.reduce((acc , num)=>acc+num , 0);

}


console.log(sum(1,2,3,4,5));



// *Spread Operator(...)
const arr1  = [1,2,3]
const arr2 = [4,5]
const arr3  = [...arr1 , ...arr2]

console.log(arr3);

const obj1 = {a:1 ,b:2};

const obj2 = {...obj1 , c:3};

console.log(obj2)




// // Localstorage and Sessionstorage

// let LocalstorageObj = localStorage;

// let sessionObj = sessionStorage


// //* 1. setItem(key , value):stores a key-value pair

// localStorage.setItem("username" , "JhonDoe");
sessionStorage.setItem("username" , "JhonDoe")
sessionStorage.setItem("username" , "JhonDoe")

// // 2. getItem(key)
// console.log(localStorage.getItem("username"));



// 3. removeItem(key):
// localStorage.removeItem("username")




// multiple data {username , hobbies , isProgrammer} -10 (userData)