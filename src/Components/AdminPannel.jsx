import React from 'react'
import { Link } from 'react-router-dom'
import AdminAuth from '../Auth/AdminAuth'
import "../styles/AdminPannel.css"
const Admin = () => {

    AdminAuth()

  return (
    <div className='admin-wrapper'>

    <h4><Link to='/signup'>signUp a student</Link></h4>
    <h4><Link to='/addworksheet'>Add a worksheet</Link></h4>
    <h4><Link to='/addToppers'> Add a topper</Link></h4>

    </div>
  )
}

export default Admin;