import React from 'react'
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>

        <h1>About Component</h1>


         <NavLink to ='/about'><button>About</button></NavLink>
    </div>
  )
}

export default About