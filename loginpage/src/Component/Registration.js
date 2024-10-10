import React, { useState } from 'react'
import '../style.css';
import img4 from "./Image/logo_data.jpg"
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Registration = () => {

  const navigate= useNavigate();
  const[data,setData]=useState({username:"",email:"",password:""});

  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData((values)=>({...values,[name]:value}))

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(data))
    navigate("/")
    setData({username:"",email:"",password:""})

  }
  return (
    
    <div className='container_second'>
    <form onSubmit={handleSubmit}>
    <div className='child2_container'>
    <div className='left2_container'>
     <img src={img4} alt='registartion_logo' id='logo_registration'/>
    </div>
    <div className='right2_container'>
    <h5 id='para2_heading'>Registraion</h5>
    <br/>
    <div className='form_right_container'>
    <p id='para2_username'>UserName*</p>
    <input type='text'  placeholder='username' name='username' value={data.username} onChange={handleChange} id='user_input2'/>
    <br/>
    <p id='para2_email'>Email*</p>
    <input type='text' placeholder='email' name='email' value={data.email} onChange={handleChange} id='input2_email' />
    <br />
    <p id='para2_password'>Password*</p>
    <input type='password' placeholder='password' name='password' value={data.password} onChange={handleChange} id='input2_password'/>
    <br />
    <button id='btn2_signup'>SignUp</button>
    </div>

    </div>
    
    </div>
    </form>
    
      
    </div>
  )
}

export default Registration;
