import React from 'react'
import "../styles/Navbar.css"
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <img src={logo}/>
      <div className='nav-links'>
        <h4><Link>Worksheets</Link></h4>
        <h4><Link>Results</Link></h4>
        <h4><Link>Top Rankers</Link></h4>
      </div>
    </nav>
  )
}

export default Navbar