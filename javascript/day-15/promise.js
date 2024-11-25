// let myPromise = new Promise(()=>{
//     console.log("Hello this is my Promise")
// })

//* 1. Resolve -----> then()

// let myPromise = new Promise((resolve , reject)=>{
//    resolve({name:"Suraj" , userId:"Qsoihdiohoiwoiqje89ykjnsl"});
// })


// myPromise.then((value)=>{
//     console.log(value)
// })



// 2. Pending 
//! 3. Reject ------> catch()

// new Promise((resolve , reject)=>{
//     // resolve("Hello world i am resolved✅");
//     reject("Hello world i am reject❌")
// })
// .then((value)=>{
// console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })


// agr age >=18 toh resolve and otherwise reject



let age = 10;

let AgeCheckPromise = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Yes You are Sigma Now")
    }
    else {
        reject("No You are Nibba Now!")
    }
})


AgeCheckPromise
    .then((value) => {
        console.log("Resolved:-", value)
    })
    .catch((error) => {
        console.error("Rejected:-", error)
    })


fetch("https://api.githubasdlasdlisalkd.com/users/Aestheticsuraj234").then((value) => {
    return value.json()
}).then((result)=>{
    console.log(result)
})
.catch((err) => {
    console.log(err)
}).finally(()=>{
    console.log("Always Run")
})


// callback hell , async await , arrow-function , ... , closure

async function FetchGithubUserData() {
    try {
        let res = await fetch("https://api.github.com/users/Aestheticsuraj234")
        let data = await res.json()

        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("Alway")
    }
}

FetchGithubUserData()