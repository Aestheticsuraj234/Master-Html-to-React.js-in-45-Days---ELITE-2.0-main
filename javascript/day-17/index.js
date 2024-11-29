// fetch
// // // 1. GET
// async function FetchData(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/101");
//     const data = await response.json();
    
//     console.log(data)
// } 

// REACT ---> EASY TO LEARN , FREEDOM


const body = JSON.stringify({
    title: 'New Post',
    body: 'This is the body of the post',
    userId: 1
}) 


async function FetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/update" , {
        method:"DELETE",
    });
    const data = await response.json();
    
    console.log(data)
} 



FetchData();

// https://jsonplaceholder.typicode.com/posts


// function parent(){
//     let parent = "I am Parent";
//     // console.log(child)

//    return function child(){
//         let child = "I am child"
//         console.log(parent)
//     }
// }


// parent()()



// function createCounter() {
//     let count = 0; // Private variable
//     return function() {
//         count++;
//         return count;
//     };
// }



// // const counter = createCounter();
// // console.log(counter()); // 1
// // console.log(counter()); // 2


// child ---> parent ( properties usko access krskta hai ) lekin jo parent hai vo apne child ke properties ko access nhi krskta



// 