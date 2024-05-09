// import React from 'react'

import { useState } from "react"
import './RegisterStyles.css'

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        email:'',
        question:''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        alert(`${formData.lastname}, your data has been received`)
        setFormData({
            firstname: '',
            lastname:'',
            email:'',
            question:''
        })
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit} className="form-survey">
            <label htmlFor="" id="first">First Name</label>
            <input type="text" 
                name="firstname" 
                value={formData.firstname}
                onChange={handleChange}
                />

            <label htmlFor="lastname" id="last">Last Name</label>
            <input type="text" 
                name="lastname" 
                value={formData.lastname}
                onChange={handleChange}
                id="last1"
                
                />
            <br/>
            <label htmlFor="" id="email">Email</label>
            <input type="text" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="email1"
                />

            <label htmlFor="" className="text">What can we help you with</label>
            <textarea name="question" id="" 
            rows={2}
            cols={10}
                value={formData.question}
                onChange={handleChange}
            >
            </textarea>

            <input type="submit" className="btn btn-dark"/>
        </form>
    </>
  )
}

export default Register