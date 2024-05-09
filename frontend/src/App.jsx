// import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from "./routes/About"
import Course from "./routes/Course"
import Blog from "./routes/Blog"
import Contact from "./routes/Contact"
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/course' element={<Course />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App
