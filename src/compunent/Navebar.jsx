import React from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import { Link } from 'react-router-dom'
import { IoMdCall } from 'react-icons/io'
const Navebar = () => {
  return (
    <section className=' '>

      <div className=' bg-blue-500 fixed w-full z-99'>
        <Container>
          <div className='grid grid-cols-2  '>
            <div className=' h-20 pt-8'>
              {/* <img className='w-80 ' src={logo} alt="" /> */}
              <h1 className=' font-extrabold '>LOGO NEED</h1>
              
            </div>
            <div className='grid grid-cols-1'>
              <ul className='flex gap-6 items-center'>
                <Link to="/">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-amber-200'>
                    <p className='relative'>
                      Home
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/services">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-amber-200'>
                    <p className='relative'>
                      Services
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/product">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-amber-200'>
                    <p className='relative'>
                      Product
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/about">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-amber-200'>
                    <p className='relative'>
                      About Us
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/contact">
                  <li className=' cursor-pointer font-bold bg-[#5E27F5] text-black py-2 px-3 border-2 rounded-2xl hover:text-white hover:bg-[#000000] hover:ease-in-out'>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </Container>
      </div >
    </section >
  )
}

export default Navebar