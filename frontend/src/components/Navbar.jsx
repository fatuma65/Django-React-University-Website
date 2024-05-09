// import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Navbar = () => {

  return (
    <>
        <section className="header">
            <nav>
                <img src={logo} alt="logo image"/>
                <div className="nav-links" id="navLinks">
                   <i className="fa fa-times"></i>
                   {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                     <ul>
                      <li>
                        <Link to='/'>HOME</Link>
                      </li>
                      <li>
                        <Link to='/about'>ABOUT</Link>
                      </li>
                      <li>
                        <Link to='/course'>COURSE</Link>
                      </li>
                      <li>
                        <Link to='/blog'>BLOG</Link>
                      </li>
                      <li>
                        <Link to='/contact'>CONTACT</Link>
                      </li>
                     </ul>
                </div>
                <i className="fa fa-bars"></i>
                {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
            </nav>
        </section>
    </>
  )
}

export default Navbar