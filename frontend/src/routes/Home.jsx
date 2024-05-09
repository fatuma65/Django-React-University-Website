// import React from 'react'
import Navbar from '../components/Navbar'
import Courses from '../components/Courses'
import Campus from '../components/Campus'
import Facilities from '../components/Facilities'
import Testimonies from '../components/Testimonies'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import "../components/university.css";
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Campus />
      <Facilities />
      <Testimonies />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Home