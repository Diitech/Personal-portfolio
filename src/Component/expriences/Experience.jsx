        import React from 'react'
        import './experience.css'
        import { BsPatchCheckFill } from 'react-icons/bs'
        const Experence = () => {
          return (
            <section id='experience'>
              <h5>My Skills</h5>
              <h2>My Experience</h2>


              <div className='container experience__container'>
        <div className='experience__fontend'>
      
        <h3>Fontend Development</h3>
        <div className='experience__content'>

                <article className='experience__details'>

               <div>
            <h4>HTML</h4>
            <BsPatchCheckFill/>
            <small className='text-light'>Professional</small>
            </div>

               </article>

             <article className='experience__details'>

            <div>
            <h4>CSS</h4>
            <BsPatchCheckFill className='experience__details-icons'/>
            <small className='text-light'>Experience</small>
           
            </div>

              </article>

          <article className='experience__details'>
                  <div>
            <h4>Javascript</h4>
            <BsPatchCheckFill className='experience__details-icons'/>
            <small className='text-light'>Experience</small>
               </div>

          </article>

          <article className='experience__details'>
          

                 <div>
            <h4>React</h4>
            <BsPatchCheckFill className='experience__details-icons'/>
            <small className='text-light'>Experience</small>
                </div>
               </article>


        </div>
        </div>
        {/* ******************end of fontend******************** */}

        <div className='experience__backend'>
        <h3>Fontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Node.js</h4>
            <small className='text-light'>Professional</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Php</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>MySql</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

        </div>
        </div>


        
              </div>
            </section>
          )
        }

        export default Experence
