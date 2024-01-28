import React from 'react'
import "../styles/Section.css"
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import {Link} from "react-router-dom"
const Section = () => {
  return (
    <div className='section-main'>
      <div className='page1'>
        <div className='page1-text'>
          <h1>Believe in Yourself<span> Success</span> Follows Determination.</h1>
        </div>
        <img src={img1}/>
      </div>
      <div className='page2'>
        <img src={img2}/>
        <div className='page2-content'>
          <div><h2><Link>Weekly WorkSheets</Link></h2></div>
          <div><h2><Link>Results</Link></h2></div>
          <div><h2><Link>Our Top Rankers</Link></h2></div>
        </div>
      </div>
    </div>
  )
}

export default Section