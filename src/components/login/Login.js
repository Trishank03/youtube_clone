import React from 'react'
import Navbar from '../navbar/Navbar';
import './Login.css';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
function Login() {
    let [usersobj,setusers]=useState([])
  
    let{register,handleSubmit,formState:{errors},}=useForm();
    console.log("errors are",errors);
    let formsubmit=(users)=>{
        setusers([...usersobj,users])
        console.log(users)
        fetch(" http://localhost:5000/users",{
        method:"POST",
        headers:{"Content-Type":"application/json",
        'Accept': 'application/json'},
        body:JSON.stringify(users)
    }
        )
        .then(response=>response.json())
        .then(message=>console.log("message is ",message))
        .catch(err=>console.log(err))
    }
  return (
    <div style={{backgroundColor:"white",color:"#000000"}}>
         <div className='mx-auto w-50'>
         
        <form className='mx-auto p-2 m-3' onSubmit={handleSubmit(formsubmit)} style={{border:"3px solid black"}} >
            <div className='mb-3'>
                <label htmlFor='username'>Username</label>
                <input type='text' id="username" className='form-control ' autoComplete='off' {...register("username",{required:true})} />
                {/* Validation error */}
                {errors.username?.type==="required" && <p className='text-danger'>Username required </p>}
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>Password</label>  
                <input type='password' id="password" className='form-control' autoComplete='on' {...register("password",{required:true,minLength:"8",maxLength:"12"})}/>
                {errors.password?.type==="required" && <p className='text-danger'>password required </p>}
                {errors.password?.type==="minLength" && <p className='text-danger'>min-length should be 8 </p>}
                {errors.password?.type==="maxLength" && <p className='text-danger'>max-length should be 12 </p>}
            </div>
            <div className='mb-3'>
                <label>Select the state</label>
                <select className='form-select' style={{border: "1px solid black",backgroundColor:" #f2f0ec"}} defaultValue="1"{...register("state")} >
                    <option value="1" disabled>Choose a state</option>
                    <option value='telangana'>Telangana</option>
                    <option value="tamil">TamilNadu</option>
                    <option value="AP">Andhra Pradesh</option>
                </select>
            </div>
                <div className='mb-3'>
                    <label htmlFor='feedback'>Feedback</label>
                    <textarea className='form-control' style={{border: "1px solid black",backgroundColor:" #f2f0ec"}} rows="5" {...register("Feedback")} />
                </div>
            
                <button type='submit'id='button' className='btn btn-dark' >Register</button>
            
        </form>
        </div>
    </div>
  )
}

export default Login