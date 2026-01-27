import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutgoingMail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'

const Footer = () => {
  return (
    <section className='bg-[#2C2F4A]'>
      <Container>
        <div className='  grid grid-cols-4 text-white border-b-2 border-amber-100'>
          <div className='py-5 '>
            <div className='py-5 ' ><img src={logo} alt="" /></div>
            <div className='py-5 '>
              <p className=' font-bold text-shadow-amber-50'>Your trusted partner for premium printing solutions across the UAE. Quality prints, delivered fast.</p>
            </div>
            <div className='flex justify-around py-5'>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-[#1b1f50]'><FaFacebook /></div>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-[#1b1f50]'><FaInstagram /></div>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-[#1b1f50]'><FaLinkedin /></div>
              <div className='  rounded-2xl p-3 bg-[#1d1e29]  hover:bg-[#1b1f50]'><FaTwitter /></div>
            </div>
          </div>
          <div>
            {/* ......... */}
            <div className='py-5 pl-7'>
              <h2 className=' font-extrabold py-1.5'>Quick Links</h2>
              <ul className='  gap-6 items-center'>
                <Link to="/">
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Home</li>
                </Link>
                <Link to="/services">
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Services</li>
                </Link>
                <Link to="/Portfolio">
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Portfolio</li>
                </Link>
                <Link to="/pricing">
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Pricing</li>
                </Link>
                <Link to="/about">
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>About Us</li>
                </Link>
                <Link to="/contact">
                  <li className=' w-30 cursor-pointer bg-[#9572f5] py-2 px-3 mt-2 border-2 rounded-2xl text-white hover:bg-[#5E27F5] hover:ease-in-out'>Contact</li>
                </Link>
              </ul>
            </div>

          </div>

          {/* ,,,,,,,,,,,,,,,,,, */}
          <div>
            <div className='py-5'>
              <h2 className='font-extrabold py-1.5'>Our Services</h2>
              <ul className='  gap-6 items-center'>
                {/* <Link to="/"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Business Cards</li>
                {/* </Link> */}
                {/* <Link to="/services"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Banners & Signage</li>
                {/* </Link> */}
                {/* <Link to="/Portfolio"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Brochures & Catalogs</li>
                {/* </Link> */}
                {/* <Link to="/pricing"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Apparel Printing</li>
                {/* </Link> */}
                {/* <Link to="/about"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Large Format Printing</li>
                {/* </Link> */}
                
              </ul>
            </div>
          </div>
          {/* ;;;;;;;;;;;;;;;;;; */}
         <div className=' '>
            <div className='py-5'>
              <h2 className='font-extrabold py-1.5'>Resources</h2>
              <ul className='  gap-6 items-center'>
                {/* <Link to="/"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Blog</li>
                {/* </Link> */}
                {/* <Link to="/services"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>FAQs</li>
                {/* </Link> */}
                {/* <Link to="/Portfolio"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Privacy Policy</li>
                {/* </Link> */}
                {/* <Link to="/pricing"> */}
                  <li className=' cursor-pointer hover:text-[#9572f5] py-1.5'>Terms & Conditions</li>
                {/* </Link> */}
                
              </ul>
              <div>
                <h2 className='font-extrabold mt-2 py-1.5 '>Get in Touch</h2>
                <div className='py-1 flex items-center gap-1 cursor-pointer hover:text-[#9572f5]'><MdOutgoingMail /> <p > spnazmul7@gmail.com</p></div>
                <div className='py-1 flex items-center gap-1 cursor-pointer hover:text-[#9572f5]'> <IoMdCall />  <p>+971528089629</p></div>
                
               
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='mx-auto text-center py-10 text-white' > 
        <h2>© 2026 Best Point Printing UAE. All rights reserved. | Delivering excellence in printing solutions across the UAE.</h2>
      </div>
    </section>
 
  )
}

export default Footer