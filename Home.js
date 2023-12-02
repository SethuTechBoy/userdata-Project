import React, { useState } from 'react';
import './Home.css';
import { useDispatch } from 'react-redux'; 
import { addUser } from '../Store/Actions/user'; 

const Home = () => {
  const dispatch = useDispatch();
  const [user,setUser] = useState ({
     name:"",
     email:"",
     contact:"",
     address:""
  });
  const handleChange = (event)=>{
    const {name,value} = event.target;
    setUser((prevState) => { 
       return {
        ...prevState,
        [name]:value
       };
         });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addUser(user))
  }
    return (
    <div className='home'>
      <h1> Enter the user Info  </h1>
      <form className='home_container'>
        <input 
         placeholder='Name'
         name='name'
         type='name'
         value={user.name}
         onChange={handleChange}
        />
        <br/>
        <br/>
        <input 
         placeholder='Email'
         name='email' 
         value={user.email}
         onChange={handleChange}/>
        <br/>
        <br/>
        <input 
        placeholder='Mobile no' 
        type='number'
        name='contact' 
        value={user.contact}
        onChange={handleChange} />
       <br/>
       <br/>
      <textarea 
       placeholder='Address'
       type='text'
       name='address'
       value={user.address}
       onChange={handleChange}/>
       <br/>
       <br/>
      < button onClick={handleAdd}> Submit </button>
       </form>
       
    </div>
  )
}

export default Home
