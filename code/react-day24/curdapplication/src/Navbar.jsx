import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <div className="navbar navbar-expand lg bg-dark">
        <NavLink to="/" className="navbar-brand">
            <h2 className='text-warning fw-bold'>Crud app</h2>
        </NavLink>
        <ul className='navbar nav m-auto' >
            <li className='nav-item'>
                <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                
                <li className='nav-item'>
                <NavLink className="nav-link" to="/userdata">Userdata</NavLink>
                </li>

                <li className='nav-item'>
                <NavLink className="nav-link" to="/edituser">Edituser</NavLink>
                </li>
            
        </ul>
    </div>

    </>
  )
}

export default Navbar