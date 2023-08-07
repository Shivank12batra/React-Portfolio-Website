import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Skills from './components/Skills';
import LargeProjects from './components/LargeProjects';
import SmallProjects from './components/SmallProjects';
import Blogs from './components/Blogs';

function App() { 
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Skills/>
      <LargeProjects />
      <SmallProjects />
      <Blogs/>
    </div>
  )
} 

export default App; 
