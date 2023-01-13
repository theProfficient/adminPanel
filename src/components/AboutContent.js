import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import Myimg from "../assets/myimg.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I always wanted to know how website and software work.so I learned basics of HTML, CSS and did a simple webpage contains my information and some input boxes. Then JavaScript came to my life with more complex problems. After completing B.tech I didn't match the employer's requirement. Later I joined FunctioUp on may 2022 to upskill myself.
 FunctioUp training has made me a self-disciplined person which is very much required while learning to code because you continuously need to practice concepts daily. I completed 6 months of quality training and have experience on developing projects collaboratively with my peers during FunctionUp construction week. During my training I learned "HTML, CSS, JavaScript, React.js, Node.js, MySQL, Express.js, MongoDB" and I am also familier with "Git,AWS-S3,Redis,JWT,Short-Id, multer, Postman, VS Code" etc. Still the passion for coding is going on and I want to apply those concepts to solve real world problems. I'm an honest person and good at problem solving, time management.
 See my work at: https://github.com/dipalidatir-demo</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack bottom">
                    <img src={Myimg} className="img" alt="true"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent