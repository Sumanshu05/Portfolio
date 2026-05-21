import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`right ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav_items" onClick={closeMenu}>Home</a>
          <a href="#experience" className="nav_items" onClick={closeMenu}>Education</a>
          <a href="#skills" className="nav_items" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav_items" onClick={closeMenu}>Project</a>
          <a href="#contact" className="nav_items" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
