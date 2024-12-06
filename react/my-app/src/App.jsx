import {useState}  from "react";
import './style.css'
import Form from "./Form"
function App() {
   
   const [name , setName] =  useState("Suraj")
   const [color , setColor] = useState("red")

   
   const handleChangeName = ()=>{
        setName("Prabhat");
   }

   const handleChangeColor=()=>{
    setColor("blue")
   }


    return (
        <>
          
          {/* <h1>
            My Name is {name}
          </h1>
          <button onClick={handleChangeName}>
            Change name
          </button>

          <h1 style={{
            color:color
          }}>
            Color  is {color}
          </h1>
        
          <button onClick={handleChangeColor}>
            Change color
          </button> */}


          <Form/>
        </>
    )
}


// components and props and jsx
// hooks and (useState)

export default App;


{/* 
    import Footer from "./Footer";
import H1 from "./H1";
import Hero from "./Hero";
    <H1 title="Hello i am heading_1"/>
            <H1 title="Hello i am heading_2"/>
            <H1 title="Hello i am heading_3"/>
          
           <Hero
           heaading={"Welcome to home"}
           description={"this is desc."}
           />
            <Hero
           heaading={"Welcome to About"}
           description={"this is desc."}
           />
           <Footer/> */}