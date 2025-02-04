import { useState } from 'react'
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar />
      <About />
      <Projects />
      </div> 
      
      
    </>
  )
}

export default App
