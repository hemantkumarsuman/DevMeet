import React from 'react'

const UserCard = ({user}) => {

  console.log(user);
  
  return (
    <div className='flex justify-center my-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                src={user.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {user.firstName+ ' ' +user.lastName}</h2>
                <p>Company: {user.company.name}</p>
                <p>Title: {user.company.title}</p>
                <p>Age: {user.age}</p>
                <div className="card-actions justify-between">
                  <button className="btn btn-secondary text-white">Interested</button>
                  <button className="btn btn-primary">Ignore</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard