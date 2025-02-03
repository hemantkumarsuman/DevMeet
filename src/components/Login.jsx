import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [emailId, setEmailId] = useState('hemant16@gmail.com');
  const [password, setPassword] = useState('Hemant16@');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick =async ()=>{
    try{
      const res =await axios.get('https://dummyjson.com/users',{
        emailId,
        password
      },{
        withCredential: true
      });
      console.log(res.data.users);
            
      dispatch(addUser(res.data.users));
      return navigate('/')
    }

    catch(e){
      console.error(e);      
    }

  }

  return (
    <div className='flex justify-center'>
      <div className="card bg-base-300 w-96 shadow-xl my-10">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary my-6" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login