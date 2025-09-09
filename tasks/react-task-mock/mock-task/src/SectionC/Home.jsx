import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>

        <h1>Home Component</h1>

        <NavLink to ='/home'><button>home</button></NavLink>
    </div>
  )
}

export default Home;