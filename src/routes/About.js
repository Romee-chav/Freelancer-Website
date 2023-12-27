import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Projects heading="ABOUT." text="I'm a Friendly Front-End And Back-End Developer"/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About