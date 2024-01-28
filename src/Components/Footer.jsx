import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom'
import img3 from "../Assets/img3.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <h3>Stay in Touch For More Future Updates In This App</h3> 
      </div>
      <div className='footer-content'>

        <div className='footer-links'>
      <Link>WorkSheets</Link>
      <Link>Results</Link>
      <Link>Top Rankers</Link>
      </div>
      <div className='footer-contact'>
        <img src={img3}/>
        <div>
          <h5>If You'r Having Any Issue Just Mail Us On</h5>
          <h4>kisaracademics@gmail.com</h4>
        </div>
        

      </div>
      <div className='footer-developer'>
        <h2>Developer And Founder Of This App</h2>
        <h3>Proudly Crafted In Kashmir, With Passion By HAZIK HILAL</h3>
      </div>
      </div>
      
    </div>
  )
}

export default Footer