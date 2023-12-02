import React from 'react';
import { useSelector } from 'react-redux'


const User = () => {
  const users = useSelector((state)=>{
    // console.log(users);
    return state.data.User;
    
  })
  
  return (
    <div>
      <h1> {users} </h1>
    </div>
  )
}

export default User
