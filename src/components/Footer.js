import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={
            {color:"#fff" , marginRight:"2rem"}} />
           <div>
            <p> 123 Housing Society.</p>
            <p>India.</p>
           </div>
         </div>
         <div className="phone">
            <h4>
            <FaPhone size={20} style={
        {color:"#fff" , marginRight:"2rem"}} />
        1-2323-342-65
            </h4>
        </div>
        <div className="email">
            <h4>
            <FaMailBulk size={20} style={
        {color:"#fff" , marginRight:"2rem"}} />
        info@gmail.com
            </h4>
        </div>
           </div>
           <div className="right">
                <h4>About Me</h4>
                <p>This is me Dipali Datir. FullStack Developer Trainee at FunctionUp. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    dipalidatir66@gmail.com
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    dipali_datir
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    b66@gma
                </div>
            </div>
</div>
    </div>
  )}

export default Footer
