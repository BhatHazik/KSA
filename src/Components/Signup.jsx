import React, {useState} from 'react'
import axios from 'axios';
import AdminAuth from '../Auth/AdminAuth';
const Signup = () => {

  AdminAuth();
  
    const [formData , setFormData] = useState({
        username : "",
        password : ""
    });
    
    const [message, setMessage] = useState('');
      const [loading, setLoading] = useState(false);
    
    
    
      const handleChange = (e) =>{
    
        const {name, value} = e.target;
        setFormData({ ...formData , [name] : value});
      };
    
    
      const handleSubmit = async (e) =>{
        e.preventDefault();
    
        try {
          setLoading(true);

          const response = await axios.post('http://localhost:2000/signup', formData);
          console.log(response.data.message)
          if (response.status === 201) {
            setMessage('User created successfully');
            // console.log(message);
    
          } else if (response.data.message === "User already exists") {
            setMessage('User with this email already exists');
          } else if (response.data.message === 'All credentials required') {
            setMessage('Please provide all fields.');
          } else {
            setMessage('Something went wrong');
          }
        } catch (error) {
          console.error(error);
    
        } finally {
          setLoading(false);
        }};






  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Name"
         name='username'
         value={formData.username}
            onChange={handleChange}
         />
            <input type="password"
         placeholder="Password"
         name='password'
         value={formData.password}
            onChange={handleChange}
         />
         <div className='message-div'>{message && `${message}`}</div>
            <button type='submit'>add student</button>
        </form>
    </div>
  )
}

export default Signup