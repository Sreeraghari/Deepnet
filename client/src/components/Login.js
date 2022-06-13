import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Nav=useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
      

const login=()=>{
    
}

    const handleSubmit = (e) => {
        e.preventDefault()
Nav("/home")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className='box'>
                    <h3>Login</h3>

                    <label>Email</label>
                    <input type="email" name='email' value={input.email} onChange={handleChange}></input><br />
                    <label>Pswd</label>
                    <input type="password" name='password' value={input.password} onChange={handleChange}></input><br />
                    <button>Submit</button>

                    <button type='submit' >Register</button>

                </div>
            </form>

        </div>
    )
}

export default Login