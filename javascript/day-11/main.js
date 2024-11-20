let button = document.querySelector("button");
let body = document.querySelector("body")

// let isDarkMode = true;



button.addEventListener("click" , function(){
if(isDarkMode){
    body.classList.add("light");
    body.classList.remove("dark");
    isDarkMode = false
}
else{
    body.classList.add("dark");
    body.classList.remove("light");
    isDarkMode = true 
}
} , )


// button.onclick = function (){
//     alert("Hello")
// }



// 1. Background Changing Feature  