import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div>
            <form  >
                <div className='box'>
                    <h3>Login</h3>

                    <label>Email</label>
                    <input type="email"  ></input><br />
                    <label>Pswd</label>
                    <input type="password" ></input><br />
                    <button>Submit</button>
                <Link to='/' ><button>Register</button></Link>   

                </div>
            </form>

        </div>
    )
}

export default Login