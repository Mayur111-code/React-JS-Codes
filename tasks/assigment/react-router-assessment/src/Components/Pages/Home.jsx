import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>


<h1 className='text-center'>welcome to this site</h1>


<NavLink to= '/'><button className='btn btn-danger'>Go to Products</button></NavLink>



    </div>
  )
}

export default Home;