// const parent = document.querySelector("div");
// const child = document.querySelector(".child");

// const body = document.querySelector("body")


// body.addEventListener("click" , function(){
//     console.log("clicked body")
// } , true)

// parent.addEventListener("click" , function(){
//     console.log("clicked parent")
// } , true)



// child.addEventListener("click" , function(){
//     console.log("clicked child")
// } , false)



const parent = document.querySelector("ul")
const child = document.querySelectorAll("li")

parent.addEventListener("click" , function(){
    console.log("clicked parent")
})

child.forEach(function(list){
    list.addEventListener("click" , function(event){
        event.stopPropagation()
        //delegation
        console.log("Hello")
    })
})
