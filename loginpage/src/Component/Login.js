import React, { useRef, useState } from 'react'
import img1 from "./Image/user-2160923_1280.png";
import img2 from "./Image/robo_logo.jpg";
import '../style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate()

  const[input,setInput]=useState({username:"",email:"",password:""});

  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInput((values)=>({...values,[name]:value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const loggedItem=JSON.parse(localStorage.getItem("user"));
    console.log("hello",input)
    if(input.email === loggedItem.email&&input.password===loggedItem.password)
    {
      localStorage.setItem("logged in",true)
      navigate('/dashboard')
    }
    else{
      alert("wrong email and password");
    }
    setInput({username:"",email:"",password:""})

  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className='child_container'>
    <div className='left_container'>
    <img src={img1} alt='logo_login'id='logo_login'/>
    <p className='first_heading'>Login</p>
    <div>
    <p className='para_username'>User Name*</p>
    <input id='input_username' type='text' placeholder='username' name='username' value={input.username} onChange={handleChange}/>
    <p className='para_email'>email*</p>
    <input id='input_email' type='text' placeholder='email' name='email' value={input.email} onChange={handleChange}/>
    <p className='para_password'>password*</p>
    <input id='input_password' type='password' placeholder='password' name='password' value={input.password} onChange={handleChange}/>
    </div>
    <div>
   <button  id='login_button'>Login</button>
    <br></br>
    <button id='login_register' onClick={()=>navigate("/registraion")}>Registration</button>
    </div>
    </div>
    <div className='right_container'>
    <img src={img2} alt='login_img' id='login_img'/>
    </div>
    
    </div>
    </form>
      
    </div>
  )
}

export default Login
