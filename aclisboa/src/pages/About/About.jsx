import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import "./About.scss"
const About = () => {
  return (
    <div className='about'>
        <Navbar/>
        <Announcement/>
      <div className="sobrePage">
Sobre
      </div>
      <Newsletter/>
        <Footer/>
    </div>
  )
}

export default About
