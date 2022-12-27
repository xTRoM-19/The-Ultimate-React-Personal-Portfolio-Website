import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5> Get To Knơw </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='About me'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small> 5+ Month Working My Home</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5> Clients</h5>
              <small> 100 + World Wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5> ProJects</h5>
              <small> 3+ Completed</small>
            </article>
          </div>
          <p>

          </p>

          <a href='#contact' className=' btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
