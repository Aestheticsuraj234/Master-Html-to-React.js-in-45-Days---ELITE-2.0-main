// Select the all the color-btn in nodeList

const colorButtons = document.querySelectorAll(".color-btn");

const colorInput = document.getElementById("colorInput");

console.log(colorInput.value)

const applyBtn = document.getElementById("applyColor")

const resetBtn = document.getElementById("resetColor")


// 1. Create a function that change backgroundColor

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color
}

colorButtons.forEach(button=>{
    button.addEventListener("click" , ()=>{
       const color = button.getAttribute('data-color');
       changeBackgroundColor(color)
    })
})



// 
applyBtn.addEventListener("click" , ()=>{
   
    if(colorInput.value){
        changeBackgroundColor(colorInput.value)
    }
})


// reset

resetBtn.addEventListener("click" , ()=>{
    changeBackgroundColor("#f0f0f0")
})