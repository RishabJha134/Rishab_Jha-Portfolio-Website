import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home' 
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

function App() {
  return (

    <>
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </div>
    </>

  )
}

export default App