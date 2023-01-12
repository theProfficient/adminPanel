// type rafce for format of react function it will get filename also

import React from 'react'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar'
import Form from "../components/Form"


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="CONTACT." text="Let's have a Chat"/>
      <form/>
      <Footer/>


    </div>
  )
}

export default Contact