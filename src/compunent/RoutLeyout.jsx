import React from 'react'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import Navebar from './Navebar'
import Footer from './Footer'

const RoutLeyout = () => {
  return (
    <div>
      <Navebar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RoutLeyout