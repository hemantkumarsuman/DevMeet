import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store=>store.user)

  const fetchUser = async ()=>{
    try{
      const res = await axios.get('https://dummyjson.com/users');
      //console.log(res.data.users);
      
      dispatch(addUser(res.data.users));
    }
    catch(e){
      navigate('/login')
      console.error(e);      
    }
  };

  //call fetchUser() when component loads
  useEffect(()=>{
    if(!userData){
      fetchUser();
    }
  },[]);

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body