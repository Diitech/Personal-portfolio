import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import PPP from '../../assets/ppp.jpg'


const Header = () => {
  return (
   <header>
      <div className='container header__container'> 
        <h5>Hello I'am</h5>
        <h1>Lucky Joy The Programmer</h1>
        <h5 className='text-light'>Web-Design,Font-end Developer</h5>
        <CTA />
     

        <div className='me'>
            <img src={PPP} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header
