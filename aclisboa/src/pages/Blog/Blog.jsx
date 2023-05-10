import React from 'react'
import "./Blog.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
  return (
    <div className='blog'>
        <Navbar/>
        <Announcement/>
      <div className="blogContainer">
blog
      </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Blog
