import React from 'react'
import './about.css'
import PAP from '../../assets/pap.jpg'
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";



const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
    

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
<img src={PAP} alt="About Image" />



        </div>
      </div>
      <div className="about__content">
<div className="about__cards">
<article>
  <FaAward  className='about__icon'/>
  <h5>Experences</h5>
  <small>5+ completed</small>
</article>


<article>
  <FiUser  className='about__icon'/>
  <h5>Clients</h5>
  <small> 200+ Worldwide</small>
</article>

<article>
  <VscFolderLibrary  className='about__icon'/>
  <h5>Projects</h5>
  <small>80+ completed</small>
</article>
</div>
      <p>
        I'm a Resourceful employee with outstanding knowledge to develop and maintain healthy customer pipeline. Consistently works 
to attract new business opportunities. Talent in administrative oversight, recruitment processes and customer service 
improvements. Takes on challenging new role harnessing interpersonal skills, collaboration and problem- solving. Driven to 
deliver high-quality service and consistent results.
      </p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
