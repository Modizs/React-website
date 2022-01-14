import React from 'react';
import './App.css';
import Navbar from './Components/NavBar'
import FrontPage from './Components/FrontPage'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import ProgressBar from './Components/ProgressBar'
import Experince from './Components/Experince'
import Projects from './Components/Projects'
import Footer from './Components/Footer'



function App() {
  return (
    <div class="Container">
      <Navbar />
      <div class="Inner_container">
        <FrontPage />
      </div>
      <AboutMe />
      
      <div class="Inner_container">
      <Skills />
      <Experince />
      <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;