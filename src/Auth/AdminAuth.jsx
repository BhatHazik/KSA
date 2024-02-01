import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const AdminAuth = () => {
const navigate = useNavigate();
useEffect(()=>{
    const adminToken = localStorage.getItem('adminToken');
    if(!adminToken){
        navigate('/');
    }
},[navigate]);

 
}

export default AdminAuth;