import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Projects heading="CONTACT." text="Let's Have a Chat"/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact