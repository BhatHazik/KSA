import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom'
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
        
      </div>
      <div className='footer-devloper'></div>
      </div>
      
    </div>
  )
}

export default Footer