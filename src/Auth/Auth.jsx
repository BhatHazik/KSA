import {useNavigate} from "react-router-dom"
import { useEffect } from "react"



const UseAuth = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(!token){
            navigate('/login')
        }
    }, [navigate]);
    
}

export default UseAuth;