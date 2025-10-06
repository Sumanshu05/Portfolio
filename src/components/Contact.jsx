import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-durataion="1000"
        >
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagram className='icons' />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <FaFacebook className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/sumanshu-nagpal/" target="_blank" className="items">
            <FaLinkedin className='icons' />
          </a>
          <a href="https://x.com/?lang=en" target="_blank" className="items">
            <FaXTwitter className='icons' />
          </a>
          <a href="https://github.com/Sumanshu05" target="_blank" className="items">
            <FaGithubSquare className='icons' />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nagpalsumanshu@gmail.com" 
            className="items" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
