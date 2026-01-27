import React from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import { Link } from 'react-router-dom'
const Navebar = () => {
  return (
    <Container>

      <div className='grid grid-cols-2 shadow-2xl '>
        <div>
          <img className='w-100' src={logo} alt="" />
        </div>

        <div className='grid grid-cols-1'>
          <ul className=' flex gap-6 items-center'>
            <Link to="/">
              <li className=' cursor-pointer hover:text-[#9572f5]'>Home</li>
            </Link>
            <Link to="/services">
              <li className=' cursor-pointer hover:text-[#9572f5]'>Services</li>
            </Link>
            <Link to="/product">
              <li className=' cursor-pointer hover:text-[#9572f5]'>Product</li>
            </Link>
            <Link to="/pricing">
              <li className=' cursor-pointer hover:text-[#9572f5]'>Pricing</li>
            </Link>
            <Link to="/about">
              <li className=' cursor-pointer hover:text-[#9572f5]'>About Us</li>
            </Link>
            <Link to="/getaFree">
              <li className=' cursor-pointer bg-[#9572f5] py-2 px-3 border-2 rounded-2xl text-white hover:bg-[#5E27F5] hover:ease-in-out'>Get a Free Quote</li>
            </Link>
          </ul>

        </div>
      </div>
    </Container>
  )
}

export default Navebar