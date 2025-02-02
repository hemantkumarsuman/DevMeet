import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick =async ()=>{
    try{
      const res = axios('',{
        emailId,
        password
      },{
        withCredential: true
      });
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
            <button className="btn btn-primary my-6">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login