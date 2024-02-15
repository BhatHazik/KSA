import React, { useState } from 'react'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import "../styles/Login.css"
import img4 from "../Assets/img4.png"
const Login = () => {

const navigate = useNavigate();
const [formData, setFormData] = useState(
    {username : "",
    password : ""}
)
const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false)


const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData , [name] : value});
}

const handleSubmit = async(e) =>{
  e.preventDefault();

  try{
    const response = await axios.post('http://localhost:2000/login', formData);
    console.log(response)
    if(response.data.message === 'Login success'){
      setMessage('Login success');
      const {token} = response.data;
      localStorage.setItem('token', token);
      setLoading(true);
      navigate('/')
    }
    else if(response.data.message === 'Password Does Not Match'){ 
      setMessage('password does not match');
    }             
    else if(response.data.message === 'user not exists please signup first'){
      setMessage('user not found');
      console.log(message);
    }
    else if(response.data.message === 'please fill all feilds'){
      setMessage('all feilds required')
    }
    else if(response.data.message === 'admin login detected'){
      setMessage('admin login detected');
      const {adminToken} = response.data;
      localStorage.setItem('adminToken', adminToken);
      setLoading(true);
      navigate('/admin');
    }
    else{
      setMessage('Something went wrong')
    }
  }
  catch(error){
    console.log(error);
  }
}
  return (
    <div className="signin-main-div">
      <div className='signin-image'>
        <img src={img4}/>
      </div>
      <div className="sign-in">
        <div className="signin-items">
            <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            
          
          <input
           type="text"
            placeholder="username" 
            name='username'
            value={formData.username}
            onChange={handleChange}
            />


          <input
           type="password"
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            />

<div className='notification'>{message && `${message}`} </div>
          
          <button type='submit'>
            {loading ? 'Logging .....' : 'Login'}
            </button>
          <p className="opposite-btn"><Link to='/SignUp'>Don't Have Account?</Link></p>
          


          </form>
          

        </div>
      </div>
    </div>
  )
}

export default Login