// import React from 'react'
import Login from "../components/Login"
import Register from "../components/Register"
import './Contact.css'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"


const ContactUs = () => {
  return (
    <div className="main">
        <div className="main2">
            <div className="option">
                <img src={logo} alt='logo' width={200} height={50}/>
                <select name="features" id="select1">
                    <option value="1">Features</option>
                    <option value="2">feature1</option>
                    <option value="3">feature1</option>
                    <option value="4">feature1</option>
                </select>
                <select name="learn" id="learn1">
                    <option value="1">Learning</option>
                    <option value="2">learn1</option>
                    <option value="3">learn1</option>
                    <option value="4">learn1</option>
                </select>
                <h6>Pricing</h6>
            </div>
            <nav>
                <Link to='/login' className="login1">Login</Link>
                <button className="btn btn-dark">Try For Free</button>
            </nav>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Need to get In touch with us? Either fill out the form with your inquiry or <br /> 
                find the <a href="#">department email</a> you'll like to get contact below
                </p>
            </div>
            <Register />
            <div className="blank"></div>
        </div>
    </div>
  )
}

export default ContactUs