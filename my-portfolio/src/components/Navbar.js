import React from 'react'
import "../styles/Navbar.css"; 

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <h4 className='navbar-title'>
                Naveen Portfolio
            </h4>
            <ul className='navbar-links'>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
