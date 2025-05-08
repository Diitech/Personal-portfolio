import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineDribbbleSquare } from "react-icons/ai";


const HeaderSocial = () => {
  return (
    <div className='header_socials'> 
      <a href="https://linkedin.com" target='blank'> <BsLinkedin /> </a>
      <a href="https://github.com" target='blank'> <FaGithubAlt /> </a>
      <a href="https://dribbble.com" target='blank'> <AiOutlineDribbbleSquare /> </a>
    </div>
  )
}

export default HeaderSocial
