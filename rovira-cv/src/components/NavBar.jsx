import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav className='NavBar'>
        <ul className='NavBar-Items'>
          <NavLink className='Nav-Home' to='/'> <h1>Juan Rovira</h1> </NavLink>
          <li className='nav-items'>
            <NavLink className='NavLink' to='/AboutMe'> AboutMe </NavLink>
            <NavLink className='NavLink' to='/ContactMe'> ContactMe </NavLink>
            <NavLink className='NavLink' to='/Proyectos'> Projects </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
