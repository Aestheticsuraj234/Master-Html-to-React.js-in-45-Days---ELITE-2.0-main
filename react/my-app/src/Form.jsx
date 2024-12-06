import React , {useState} from 'react'

const Form = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Form submitted \nName ${name}\nEmail: ${email}`)
    }

  return (
    <div
    style={{
        padding:"20px"
    }}
    >
        <h2>
          SIMPLE REACT FORM  
        </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
            </div>

            <div>
                <label>Email:</label>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form