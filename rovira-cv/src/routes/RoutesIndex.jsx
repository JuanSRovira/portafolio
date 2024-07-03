import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import ContactMe from '../pages/ContactMe'
import Proyectos from '../pages/Proyectos'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='AboutMe' element={<AboutMe />} />
      <Route path='ContactMe' element={<ContactMe />} />
      <Route path='Proyectos' element={<Proyectos />} />
    </Routes>
  )
}

export default RoutesIndex
