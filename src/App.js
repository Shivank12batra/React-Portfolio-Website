import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';

function App() { 
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Skills/>
      <Projects />
      <Blogs/>
    </div>
  )
} 

export default App; 
