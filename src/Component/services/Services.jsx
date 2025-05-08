import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services' >
    <h5>What I offer</h5>
    <h2>Services</h2>



      <div className='container service___container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Database Management</h3>
          </div>
          <div>
        <ul className='service__list'>
            <li>
          <BiCheck className='service__list-icon'/>
          <p>Updated office databases and records with accurate, current information.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Transferred data from paper formats into database systems using keyboards, <br />
          data recorders and optical scanners.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Verified accuracy of information and sorted information of documents for computer entry.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Completed periodic database backups to prevent data loss.</p>
              </li>
              
        </ul>
        </div>
        </article>
        

        {/* **********end of fontend==================== */}
        <article className='service'>
          <div className='service__head'>
            <h3>Social Media Handler</h3>
          </div>
          <div>
        <ul className='service__list'>
            <li>
          <BiCheck className='service__list-icon'/>
          <p>Updated office databases and records with accurate, current information.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Transferred data from paper formats into database systems using keyboards, <br />
          data recorders and optical scanners.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Verified accuracy of information and sorted information of documents for computer entry.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Completed periodic database backups to prevent data loss.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Completed periodic database backups to prevent data loss.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Completed periodic database backups to prevent data loss.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Completed periodic database backups to prevent data loss.</p>
              </li>
        </ul>
        </div>
        </article>


        {/* **********========*********end of web dev */}

        <article className='service'>
          <div className='service__head'>
            <h3>Importation Coach</h3>
          </div>
        <ul className='service__list'>
            <li>
          <BiCheck className='service__list-icon'/>
          <p>Updated office databases and records with accurate, current information.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Transferred data from paper formats into database systems using keyboards, <br />
          data recorders and optical scanners.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Verified accuracy of information and sorted information of documents for computer entry.</p>
              </li>

              <li>
          <BiCheck className='service__list-icon'/>
          <p>Completed periodic database backups to prevent data loss.</p>
              </li>
        </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
