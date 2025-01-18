import React from 'react'
import { Home, Grip, Workflow, Contact } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css';
// import Logo from './hb_logo.jpg';

export default function Navbar() {
  return (
    <div>
      
     <div className='navcontainer'>
      <div className='logh'>
        {/* <img src={Logo} alt='logo'></img> */}
        <h2 id='namew'>HealthBook</h2>
      </div>

      <div className='navlinks'>
      <NavLink to="/">
        <span className="nav-item">
        <Home size={18} className="home-icon" />
        Home
        </span>
      </NavLink>
      <a href='#foot2'>
        <span className="nav-item">
          <Contact size={18} className="contact-icon" />
          Contact
        </span>
      </a>
      <a href='#block2'>
      <span className="nav-item">
          <Grip size={18} className="grip-icon" />
          Features
        </span>
      </a>
      <a href='#faq-section'>
      <span className="nav-item">
          <Workflow size={18} className="workflow-icon" />
          FAQ
        </span>
      </a>
      </div>

      <div className='lang'>
        <select for='he'>
          <option name='eng'>English</option>
          <option name='hin'>Hindi</option>
        </select>
      </div>
     </div>

    </div>
  )
}
