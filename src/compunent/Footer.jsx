import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutgoingMail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'

const Footer = () => {
  return (
    <section className='bg-blue-500'>
      <Container>
        <div className='  grid grid-cols-4 text-white border-b-2 border-amber-100'>
          <div className='py-1 '>
            <div className='py-3 ' ><img src={logo} alt="" /></div>
            <div className='py-3 '>
              <p className=' font-bold text-shadow-amber-50'>Your trusted partner for premium printing solutions across the UAE. Quality prints, delivered fast.</p>
            </div>
            <div className='flex justify-around py-3'>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-green-800'><FaFacebook /></div>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-green-800'><FaInstagram /></div>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-green-800'><FaLinkedin /></div>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-green-800'><FaTwitter /></div>
            </div>
          </div>
          <div>
            {/* ......... */}
            <div className='py-1 pl-7'>
              <h2 className=' font-extrabold py-1.5'>Quick Links</h2>
              <ul className='  gap-6 items-center'>
                <Link to="/">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                    <p className='relative'>
                      Home
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/services">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                    <p className='relative'>
                      Services
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/product">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                    <p className='relative'>
                      Product
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/about">
                  <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                    <p className='relative'>
                      About Us
                      <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </p>
                  </li>
                </Link>
                <Link to="/contact">
                  <li className=' w-30 cursor-pointer bg-[#9572f5] py-2 px-3 mt-2 border-2 rounded-2xl text-white hover:bg-[#5E27F5] hover:ease-in-out'>Contact</li>
                </Link>
              </ul>
            </div>

          </div>

          {/* ,,,,,,,,,,,,,,,,,, */}
          <div>
            <div className='py-1'>
              <h2 className='font-extrabold py-1.5'>Our Services</h2>
              <ul className='  gap-6 items-center'>
                {/* <Link to="/"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Business Cards
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}
                {/* <Link to="/services"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Banners & Signage
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}
                {/* <Link to="/Portfolio"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Brochures & Catalogs
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}
                {/* <Link to="/pricing"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Apparel Printing
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}
                {/* <Link to="/about"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Large Format Printing
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}

              </ul>
            </div>
          </div>
          {/* ;;;;;;;;;;;;;;;;;; */}
          <div className=' '>
            <div className='py-1'>
              <h2 className='font-extrabold py-1.5'>Resources</h2>
              <ul className='  gap-6 items-center'>
                {/* <Link to="/"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Blog
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}
                {/* <Link to="/services"> */}

                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    FAQs
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}
                {/* <Link to="/Portfolio"> */}
                <li className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <p className='relative'>
                    Privacy Policy
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </li>
                {/* </Link> */}

              </ul>
              <div>
                {/* <h2 className='font-extrabold mt-2 py-1.5 '>Get in Touch</h2>
                <div className='py-1 flex items-center gap-1 cursor-pointer hover:text-[#9572f5]'><MdOutgoingMail /> <p > spnazmul7@gmail.com</p></div>
                <div className='py-1 flex items-center gap-1 cursor-pointer hover:text-[#9572f5]'> <IoMdCall />  <p>+971528089629</p></div> */}


                <h2 className='font-bold text-base sm:text-lg mb-2 sm:mb-3'>Get in Touch</h2>

                <div className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base transition-all duration-300 ease-in-out hover:text-black'>
                  <MdOutgoingMail className='text-base sm:text-lg' />
                  <p className='relative'>
                    spnazmul7@gmail.com
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </div>

                <div className='group flex items-center gap-2 cursor-pointer text-sm sm:text-base mt-2 transition-all duration-300 ease-in-out hover:text-black'>
                  <IoMdCall className='text-base sm:text-lg' />
                  <p className='relative'>
                    +971528089629
                    <span className='absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-950 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='mx-auto text-center py-4 text-white' >
        <h2>© 2026 Best Point Printing UAE. All rights reserved. | Delivering excellence in printing solutions across the UAE.</h2>
      </div>
    </section>

  )
}

export default Footer