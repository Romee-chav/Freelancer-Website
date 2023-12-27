import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Projects heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project