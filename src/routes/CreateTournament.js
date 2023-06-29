// type rafce for format of react function it will get filename also

import React from 'react'
import Navbar from '../components/Navbar'    // import navbar here to use component here now navbar is randering in home page and homepage is randering in app.js page
import HeroImage2 from '../components/HeroImage2'    // import HeroImage here to use component here now Heroimage is randering in home page and homepage is randering in app.js page
import Footer from '../components/Footer'
import CreateTournaments from "../components/CreateTable"

const  CreateTournament = () => {
  const blueTextStyle = {
    color: 'yellow'
  };
  
  return (
    <div>
        <Navbar/>             {/* call imported navbar file here */}
        <HeroImage2 text={<span style={blueTextStyle}>Introduce a new Tournament</span>} />
               {/* call imported Heroimage file here */}
       <CreateTournaments/>
        <Footer/>
        </div>
  )
}

export default CreateTournament