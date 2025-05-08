import React from 'react'
import CV1 from '../../assets/CV1.pdf';
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV1}download className='btn'>Download CV</a>
      <br>
      </br>
      < a href="#contact" className='btn btn-primary'>Hire Me</a>
    </div>
  )
}

export default CTA;
