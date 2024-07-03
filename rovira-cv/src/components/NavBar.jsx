import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <NavLink className='Nav-Home' to='/'> <h1>Home</h1> </NavLink>
      <ul>
        <li>
          <NavLink className='NavLink' to='/AboutMe'> AboutMe </NavLink>
          <NavLink className='NavLink' to='/ContactMe'> ContactMe </NavLink>
          <NavLink className='NavLink' to='/Proyectos'> Projects </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
