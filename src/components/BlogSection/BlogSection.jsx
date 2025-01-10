import React from 'react'
import { blog } from '../../data'
import './BlogSection.css'
import { IoIosArrowRoundForward } from 'react-icons/io';


const BlogSection = () => {
  return (
    <>
      <section className="BlogSection container">
        <div className="textDiv">
          <h1 className="title">Our Blog</h1>
          <p className="text">An insight the incredible experience in the world</p>
        </div>
        <div className="blogContent">
          <img className="blogImg" src={blog.image} alt={blog.title} />
          <div className="blogTextDiv">
            <h2 className="blogTitle">{blog.title}</h2>
            <p className="text blogText">{blog.text}</p>
            <a href="#" className="link">Read More<IoIosArrowRoundForward className="icon" /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSection
