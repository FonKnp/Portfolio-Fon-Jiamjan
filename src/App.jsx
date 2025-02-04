import { useState } from 'react'
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>{renderPage()}</div>
      </div> 
      
      
    </>
  )
}

export default App
