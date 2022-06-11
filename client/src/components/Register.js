import React from 'react'
import './Register.css'
import { useState,useEffect } from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    useEffect(() => {

    const register=()=>{
        axios.post("http://localhost:5000/register",{
                    name:input.name,
        email:input.email,
        password:input.password,
        place:input.place

        }).then(res=>{
            console.log(res);
        })
    }
        


    }, [])
    

    const[input,setInput]=useState({
        name:"",
        email:"",
        password:"",
        place:""
    })
const Nav=useNavigate()
    const handlechange=(e)=>{
        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input);
        Nav('/login')
        
    }
    return (
        <div  >

            

            <form onSubmit={handleSubmit} >
                <div className='box'>
                    <h3>REGISTRATION</h3>

                    <label>Name</label>

                    <input type="text" value={input.name} name="name" onChange={handlechange} ></input> <br />

                    <label>Email</label>

                    <input type="email" value={input.email}name="email" onChange={handlechange} ></input><br /> 

                    <label>Pswd</label> 

                    <input type="password" value={input.password} name="password" onChange={handlechange}></input><br />

                    <label>Place</label>

                    <input type="text" value={input.place} name="place" onChange={handlechange}></input><br />

                  <button type='submit' >Submit</button>

                </div>
            </form>

        </div>

    )
}

export default Register