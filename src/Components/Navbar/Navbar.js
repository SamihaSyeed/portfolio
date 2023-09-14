import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css" 

const Navbar = () => {
  return (
    <div class="navbar">
        <ul className='nav-menu list'>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar