// app.js is the parent file of project thats why we call/ import all the files here like home ,contact etc
// create routes here


import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";     // import file and folder of route

function App() {
  return (
 <>
    {/* call routers here inside the route using react router Dom */}
  <Routes>
<Route path="/" element={<Home/>}/>        {/* call router here this path is shown url with this name in search bar of page when we click on that page  and for home use only / for path and alwys initially we will in home page */}
<Route path="/project" element={<Project/>}/> 
<Route path="/about" element={<About/>}/> 
<Route path="/contact" element={<Contact/>}/> 
</Routes>
  </>
  );
}

export default App;
