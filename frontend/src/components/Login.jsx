// import React from 'react'

import { useState } from "react"
import './LoginStyles.css'

const Login = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${userData.username}, you are now logged in`)
        setUserData({username:'', password:''})
    }

  return (
    <div className="main-form">
        <h1>Login</h1>
            <form action="" onSubmit={handleSubmit} className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" 
                    name="username" 
                    value={userData.username} 
                    className="input1"
                    onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="text" 
                    name="password" 
                    value={userData.password} 
                    className="input1"
                    onChange={handleChange}/>
                <input type="submit" className="btn btn-primary input1"/>
            </form>
    </div>
  )
}

export default Login